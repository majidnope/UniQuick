import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { RequestOtpDto } from './dto/request-otp.dto';
import { TwilioService } from 'nestjs-twilio';
import otpGenerator from 'utils/otpGenerator';
import { PrismaService } from 'src/prisma/prisma.service';
import bcrypt from 'bcrypt'
import { OTPPurpose } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private configService: ConfigService,
    private readonly twilioService: TwilioService,
    private prisma: PrismaService
  ) { }

  async sendSms(phoneNumber: string,): Promise<any> {
    // In production, integrate with a real SMS provider like Twilio, MessageBird, etc.
    // For development, we'll just log the message
    /*if (process.env.NODE_ENV !== 'production') {
      console.log(`SMS to ${phoneNumber}: ${message}`);
      return true;
    }*/
    const otp = await otpGenerator(6)
    await this.twilioService.client.messages.create({
      body: `Your OTP for UniQuick is ${otp}`,
      from: this.configService.get('TWILIO_PHONE_NUMBER'),
      to: phoneNumber,
    });
    const hashedOtp = await bcrypt.hash(otp, 10);
    await this.prisma.OTP.deleteMany({
      where: {
        phone,
        purpose: OTPPurpose.LOGIN
      }
    });

    const otpRecord = await this.prisma.OTP.create({
      data: {
        phone,
        code: hashedOtp,
        purpose: OTPPurpose.LOGIN,
        expiresAt: new Date(Date.now() + 15 * 60 * 1000), // 15 minutes from now
        attempts: 0
      }
    });
    return otp
  }

  async loginWithOtp(phone: string, otp: string) {
    const otpRecord = await this.prisma.OTP.findFirst({
      where: {
        phone,
        purpose: OTPPurpose.LOGIN,
        expiresAt: { gt: new Date() },
        verified: false
      },
      orderBy: { createdAt: 'desc' }
    });
    if (!otpRecord) {
      throw new UnauthorizedException('OTP expired or not found');
    }

    // Check OTP attempts
    if (otpRecord.attempts >= 3) {
      throw new UnauthorizedException('Too many OTP attempts');
    }

    // Verify OTP
    const isOtpValid = await bcrypt.compare(otp, otpRecord.code);
    if (!isOtpValid) {
      // Increment attempts
      await this.prisma.OTP.update({
        where: { id: otpRecord.id },
        data: { attempts: { increment: 1 } }
      });
      throw new UnauthorizedException('Invalid OTP');
    }

    // Find user
    const user = await this.prisma.user.findUnique({
      where: {
        phone,

      }
    });

    if (!user) {
      throw new UnauthorizedException('Invalid phone number');
    }

    // Mark OTP as verified
    await this.prisma.OTP.update({
      where: { id: otpRecord.id },
      data: {
        verified: true,
        attempts: { increment: 1 }
      }
    });

    // Return payload for token generation
    return {
      sub: user.id,
      username: user.phone
    };
  }


}
