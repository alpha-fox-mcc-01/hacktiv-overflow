if (process.env.NODE_ENV=='development') {
  require ('dotenv').config()
}

const cron = require('node-cron')
const nodemailer = require('nodemailer')

const cors = require ('cors')
const express = require ('express')

const router = require ('./routes/index')
const mongoDBConnection = require('./configs/mongoDBConnection')
const errorHandler = require('./middlewares/errorHandler')
mongoDBConnection()

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'hacktivoverflowjrmdhn@gmail.com',
    pass: process.env.GMAILPASS
  }
})

cron.schedule("59 0 * 2 2 *", function () {
  console.log('from cron jobs!')

  let mailOptions = {
    from: 'hacktivoverflowjrmdhn@gmail.com',
    to: 'jee.ramadhan@gmail.com',
    subject: 'Happy birthday!',
    text: 'Halo, selamat ulang tahun :3'
  }

  transporter.sendMail(mailOptions, function(err, info){
    if (err) {
      throw err
    } else {
      console.log('email sent from cron jobs!')
    }
  })
})

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

app.use('/', router)

app.use('/', errorHandler)

app.listen(process.env.PORT, () => {
  console.log('app running on port ' + process.env.PORT)
})

module.exports = app