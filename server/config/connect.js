const mongoose = require('mongoose');

const connect = () => {
  mongoose.connect('mongodb://localhost:27017/Hacktifire', { useNewUrlParser: true, useUnifiedTopology: true }, err => {
    if (err) console.log('Can\'t connect to the database.')
    else console.log('Connected to the database.')
  })
}

module.exports = { config: connect }