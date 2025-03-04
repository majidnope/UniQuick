import { InternalServerErrorException } from '@nestjs/common';
export default async (length: number) => {
  const { randomBytes } = await import('crypto');
  const randomNumber = randomBytes(2).readUInt16BE() % 10000;
  const otp = randomNumber.toString().padStart(length, '0');
  if (!otp)
    throw new InternalServerErrorException(
      'Something happen while generating OTP',
    );
  return otp;
};
