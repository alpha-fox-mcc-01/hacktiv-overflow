require('dotenv').config()

module.exports = (text) => {
  const nodemailer = require('nodemailer')

  const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: 'nafies.beta2@gmail.com',
          pass: process.env.PASS
      }
  })

  const mailOptions = {
      from: 'nafies.beta2@gmail.com',
      to: 'ghuroba.muslim@gmail.com',
      subject: 'Check your HacktivOverflow',
      text
  }

  transporter.sendMail(mailOptions, (err, info) => {
      if (err) throw err;
      console.log('Email sent: ' + info.response);
  })
}
