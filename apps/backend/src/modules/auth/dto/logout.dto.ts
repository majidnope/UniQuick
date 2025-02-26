// src/auth/dto/logout.dto.ts
import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LogoutDto {
  @ApiProperty({
    description: 'Refresh token to be invalidated',
    example: '7a5f8d3e1c2b9a0e7d6f4s2d1a3f5d7e9a8c2b1d4f5',
  })
  @IsNotEmpty()
  @IsString()
  refreshToken: string;
}
