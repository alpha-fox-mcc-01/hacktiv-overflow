const cron = require('node-cron')
const mailer = require('./mailer')
 
const task = cron.schedule('0 50 * * * *', () => {
  mailer('Please login to your account in HacktivOverflow and get more knowledge!')
  console.log('Runing a job at 01:00 at Asia/Jakarta timezone')
}, {
  scheduled: true,
  timezone: "Asia/Jakarta"
})

module.exports = task
