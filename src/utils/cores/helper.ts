export function generateOTP(numberOfDigits: number): string {
  const digits = '0123456789';
  let OTP = '';

  for (let i = 0; i < numberOfDigits; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }

  return OTP;
}
