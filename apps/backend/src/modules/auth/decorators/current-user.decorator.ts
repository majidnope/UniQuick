import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from '@prisma/client';
import { Request } from 'express';

// Define interface for request with user property
interface RequestWithUser extends Request {
  user?: User;
}

/**
 * Decorator to extract the current authenticated user (or a specific property)
 * from the request object.
 *
 * @example
 * // Get the full user object
 * @CurrentUser() user: User
 *
 * // Get a specific property from the user
 * @CurrentUser('id') userId: string
 */
export const CurrentUser = createParamDecorator(
  (data: string | undefined, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<RequestWithUser>();

    // If no user in request, return null
    if (!request.user) {
      return null;
    }

    // If data is provided, return the specified property
    if (data) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return request.user[data];
    }

    // Otherwise return the whole user object

    return request.user;
  },
);
