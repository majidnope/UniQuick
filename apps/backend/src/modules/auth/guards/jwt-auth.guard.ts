import {
  Injectable,
  ExecutionContext,
  UnauthorizedException,
  ForbiddenException,
  Logger,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Reflector } from '@nestjs/core';
import { IS_PUBLIC_KEY } from '../decorators/public.decorator';
import { ROLES_KEY } from '../decorators/roles.decorator';
import { UserRole } from '@prisma/client';

// Define the JWT user type
interface JwtUser {
  id: string;
  role: UserRole; // Change from roles array to single role to match schema
  // Add other properties as needed
}

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  private readonly logger = new Logger(JwtAuthGuard.name);

  constructor(private reflector: Reflector) {
    super();
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    // Check if endpoint is marked as public
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    // Return early if endpoint is public
    if (isPublic) return true;

    try {
      // Authenticate the JWT token
      const authenticated = await super.canActivate(context);
      if (!authenticated) {
        throw new UnauthorizedException('Invalid or expired token');
      }

      // Check role requirements (if any)
      const requiredRoles = this.reflector.getAllAndOverride<UserRole[]>(
        ROLES_KEY,
        [context.getHandler(), context.getClass()],
      );

      // If no specific roles required, authentication is sufficient
      if (!requiredRoles || requiredRoles.length === 0) {
        return true;
      }

      // Get the request with user attached by JWT strategy
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const request = context.switchToHttp().getRequest();
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      const user = request.user;

      // Check if user has the required role (single role per user in schema)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      const hasRole = requiredRoles.includes(user.role);

      if (!hasRole) {
        throw new ForbiddenException(
          `Access requires one of these roles: ${requiredRoles.join(', ')}`,
        );
      }

      return true;
    } catch (error) {
      this.logger.error(
        `Authentication failed: ${error instanceof Error ? error.message : String(error)}`,
      );

      if (
        error instanceof UnauthorizedException ||
        error instanceof ForbiddenException
      ) {
        throw error;
      }

      throw new UnauthorizedException('Authentication failed');
    }
  }

  handleRequest<T extends JwtUser>(err: Error | null, user: T, info: any): T {
    // Customize error handling
    if (err || !user) {
      throw err || new UnauthorizedException(info?.message || 'Unauthorized');
    }
    return user;
  }
}
