import { IsNotEmpty, IsString, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RequestOtpDto {
  @ApiProperty({
    description: 'Phone number in international format (e.g. +1234567890)',
    example: '+919876543210',
  })
  @IsNotEmpty()
  @IsString()
  @Matches(/^\+[1-9]\d{1,14}$/, {
    message: 'Phone number must be in E.164 format',
  })
  phoneNumber: string;
}
