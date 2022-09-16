require('dotenv').config();
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  host: 'smtp.sendgrid.net',
  port: 587,
  auth: {
    user: 'apikey',
    pass: process.env.SENDGRID_API_KEY,
  },
});

transporter.sendMail(
  {
    from: process.env.MAILER_FROM, // verified sender email
    to: 'wrightmight@gmail.com', // recipient email
    subject: 'Test message subject', // Subject line
    text: 'Hello world!', // plain text body
    html: '<b>Hello world!</b>', // html body
  },
  function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  }
);
