const { Question } = require('../models');

const CronJob = require('cron').CronJob;

module.exports = () => {
  const job = new CronJob('0 0 0 1 * *', function() {
    Question.deleteMany({ votes: { $exists: true, $size: 0 } })
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
    console.log('test');
  }, null, true, 'America/Los_Angeles');
  job.start();
};
