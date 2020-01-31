require('./config/connect').config()
require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')

const Post = require('./models/post')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/', require('./routes'))

// CRONJOB
var CronJob = require('cron').CronJob;
var job = new CronJob('0 1 * * * *', function () {
  let current = new Date();
  current.setDate(current.getDate() - 365);
  Post.deleteMany({ created: { $lte: current } }, (err) => {
    if (err) return console.log("Error while erasing users " + err);
    console.log("Post older than 1 year has been erased successfully.")
  })
}, null, true, 'Asia/Jakarta');
job.start();
// END OF CRON JOB

// ERROR HANDLER
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send(err.message)
})
// END OF ERROR HANDLER

app.listen(port, () => console.log('Listening on port', port))