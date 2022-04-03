import { Module } from '@nestjs/common';
import { EmailModule } from './modules/email/email.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [EmailModule, UserModule],
})
export class AppModule {}
