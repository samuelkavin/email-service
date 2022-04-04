import { Injectable } from '@nestjs/common';
import { sendEmail } from './email.config';
import { User } from '../user/type/user.type';

@Injectable()
export class EmailService {
  async sendEmailCopy(user: User) {
    const result = await sendEmail(user);
    return result;
  }
}
