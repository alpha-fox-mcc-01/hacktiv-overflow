const mongoose = require('mongoose');

const connect = () => {
  mongoose.connect('mongodb+srv://ahmadmsa:ninoloid@cluster0-5zpac.mongodb.net/hacktifire?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }, err => {
    if (err) console.log('Can\'t connect to the database.')
    else console.log('Connected to the database.')
  })
}

module.exports = { config: connect }