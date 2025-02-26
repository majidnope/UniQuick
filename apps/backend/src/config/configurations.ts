export default () => ({
  server: {
    port: parseInt(process.env.PORT ?? '4000', 10),
  },
  database: {
    url: process.env.DATABASE_URL,
  },
  twilio: {
    accountSid: process.env.TWILIO_ACCOUNT_SID,
    authToken: process.env.TWILIO_AUTH_TOKEN,
    phoneNumber: process.env.TWILIO_PHONE_NUMBER,
  },
});
