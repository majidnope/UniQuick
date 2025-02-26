import { IsNotEmpty, IsString, Matches, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class VerifyOtpDto {
  //Phone number
  @ApiProperty({
    description: 'Phone number in international format',
    example: '+919876543210',
  })
  @IsNotEmpty()
  @IsString()
  @Matches(/^\+[1-9]\d{1,14}$/, {
    message: 'Phone number must be in E.164 format',
  })
  phoneNumber: string;

  //OTP
  @ApiProperty({
    description: 'OTP code received via SMS',
    example: '123456',
  })
  @IsNotEmpty()
  @IsString()
  @Length(6, 6, { message: 'OTP must be 6 digits' })
  @Matches(/^\d{6}$/, { message: 'OTP must contain only digits' })
  otp: string;
}
