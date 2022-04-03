import * as nodemailer from 'nodemailer';
import { User } from '../user/type/user.type';
import 'dotenv/config';

export const sendEmail = async (user: User) => {
  const { email, message } = user;
  const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
      user: 'samuelkavin-123456@outlook.com',
      pass: 'Samuel!@#',
    },
  });

  const options = {
    from: 'samuelkavin-123456@outlook.com',
    to: `${email}`,
    subject: 'Automated Email',
    text: `${message}`,
  };

  transporter.sendMail(options, function (error, info) {
    if (error) {
      console.error(error);
      return;
    }
    console.info(info);
  });
};
