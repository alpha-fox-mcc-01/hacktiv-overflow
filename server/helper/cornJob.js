const CronJob = require('cron').CronJob
const Question = require('../models/question')

const job = new CronJob('0 0 * * *', function() {
  Question
    .deleteMany({
      answerId: []
    })
    .then(result => {
      console.log(result)
    })
    .catch(err => {
      console.log(err)
    })
}, null, true, 'Asia/Jakarta')

module.exports = job