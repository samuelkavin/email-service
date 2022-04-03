import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { EmailService } from '../email/email.service';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(private emailService: EmailService) {}

  async registerUser(user: UserDto): Promise<{ message: string }> {
    try {
      await this.emailService.sendRegistrationEmail(user);
    } catch (error) {
      throw new HttpException('Something went wrong!', HttpStatus.BAD_REQUEST);
    }
    return {
      message: `Email succefully sent to ${user.email}`,
    };
  }
}
