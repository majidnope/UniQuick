import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class AuthService {
  registerUser(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }
}
