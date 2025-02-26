import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TwilioModule } from 'nestjs-twilio';
import configurations from './config/configurations';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configurations],
    }),
    TwilioModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        accountSid: configService.get('TWILIO_ACCOUNT_SID'),
        authToken: configService.get('TWILIO_AUTH_TOKEN'),
      }),
      inject: [ConfigService],
    }),
    AuthModule,
    UserModule,
  ],
  controllers: [],
  providers: [PrismaService, ConfigService],
})
export class AppModule {}
