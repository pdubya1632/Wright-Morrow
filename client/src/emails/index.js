import nodemailer from 'nodemailer';
import { buildSendMail } from 'mailing-core';
import * as dotenv from 'dotenv';
dotenv.config();

const transport = nodemailer.createTransport({
  host: 'smtp.sendgrid.net',
  port: 587,
  auth: {
    user: 'apikey',
    pass: process.env.SEND_GRID_KEY,
  },
});

const sendMail = buildSendMail({
  transport,
  defaultFrom: process.env.MAILER_FROM,
  configPath: './mailing.config.json',
});

export default sendMail;
