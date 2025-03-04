import { Body, Controller, HttpCode, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RequestOtpDto } from './dto/request-otp.dto';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService, private jwtService: JwtService) { }

  // @Post('login')
  // async login(@Body() requestOtpDto: RequestOtpDto) {
  //   return this.authService.login(requestOtpDto);
  // }

  @Post('/login/otp')
  async loginWithOtp(@Param() { phone }, @Body() { otp }, @Res({ passthrough: true }) res: Response) {
    const payload = await this.authService.loginWithOtp(phone, otp)
    const token = await this.jwtService.signAsync(payload, {
      secret: 'change_se123'
    });
    console.log(process.env.NODE_ENV === 'production');

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Ensure cookies are sent over HTTPS in production
      maxAge: 3600000, // 1 hour
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : undefined, // Strictly same site
    });

    return { message: 'Successfully login ', access_token: token };
  }

  @Post('/otp/send/:phone')
  @HttpCode(HttpStatus.ACCEPTED)
  async sendOtp(
    @Param() { phone },
    @Body() data: Record<string, any>,
    @Res({ passthrough: true }) res: Response,
  ) {
    return await this.authService.sendSms(phone)

  }



}
