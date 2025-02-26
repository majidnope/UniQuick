import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TwilioService } from 'nestjs-twilio';

@Injectable()
export class SmsService {
  constructor(
    private configService: ConfigService,
    private readonly twilioService: TwilioService,
  ) {}

  async sendSms(phoneNumber: string, otp: string): Promise<any> {
    // In production, integrate with a real SMS provider like Twilio, MessageBird, etc.
    // For development, we'll just log the message
    /*if (process.env.NODE_ENV !== 'production') {
      console.log(`SMS to ${phoneNumber}: ${message}`);
      return true;
    }*/

    return this.twilioService.client.messages.create({
      body: `Your OTP for UniQuick is ${otp}`,
      from: this.configService.get('TWILIO_PHONE_NUMBER'),
      to: phoneNumber,
    });
  }
}
