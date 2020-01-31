if (process.env.NODE_ENV === 'development') {
    require('dotenv').config()
}

const express = require('express')
const app = express()
const cors = require('cors')
const cron = require('node-cron');
const routes = require('./routes/index')
const errorHandler = require('./middlewares/errorHandler')
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/overflow', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
const sendEmail = require('./helpers/emailUsers')
const listEmail = require('./helpers/fetchEmails')

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  console.log('database connected')
})
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/', routes)

cron.schedule('0 0 1 * *', () => {
  listEmail
         .then(emailUser => {
            emailUser.forEach(email => {
              let message = 'Dear you, Thank you for being our loyal users. As a token of appreciation we will reward you with IDR 100,000 GOPAY. Reply this email with your number'
              sendEmail(email, message, 'Monthly appreciation')
            })
         })
         .catch(err => {
           console.log(err)
         })
  
});

app.use('/', errorHandler)

app.listen(process.env.PORT,  () => {
    console.log('app running on port', process.env.PORT)
})