// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail')
const dotenv = require('dotenv').config;
const API_KEY = sgMail.setApiKey(process.env.SENDGRID_API_KEY)
console.log(`API KEY is ${process.env.SENDGRID_API_KEY}`);

const msg = {
  to: 'jaredsjohnson92@gmail.com', // Change to your recipient
  from: 'jjohns3@tulane.edu', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })