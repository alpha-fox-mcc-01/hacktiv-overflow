const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const userSchema = new mongoose.Schema({
  password: {
    type: String,
    required: [true, 'please enter password']
  },
  name: {
    type: String,
    required: [true, 'please enter a name']
  },
  email: {
    unique: true,
    required: [ true, 'please enter email address' ],
    type: String,
    match: [ emailRegex, 'please use valid email address' ]
  },
})

userSchema.pre('save', function () {
  hashedPassword = bcrypt.hashSync(this.password, 5)
  this.password = hashedPassword
})

module.exports = mongoose.model('User', userSchema)