import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer  from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "f0d6315142b5f5",
      pass: "e0be5b04b17e0e"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData) {

    await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Daniel Skroski <danielskroski@gmail.com>',
        subject,
        html: body,
    });

    }

}