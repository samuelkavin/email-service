import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { EmailService } from '../email/email.service';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(private emailService: EmailService) {}

  async registerUserInquiry(user: UserDto): Promise<{ email: string }> {
    try {
      await this.emailService.sendEmailCopy(user);
    } catch (error) {
      throw new HttpException('Something went wrong!', HttpStatus.BAD_REQUEST);
    }
    return {
      email: user.email,
    };
  }
}
