const { Schema, model } = require('mongoose')
const hash = require('../helpers/hash.js')

const userSchema = new Schema({
  email: {
    type: String,
    validate: {
      validator: function (v) {
        return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(v);
      },
      message: 'Invalid email format.'
    },
    required: [true, 'Please input your email address.'],
    unique: true
  },
  password: {
    type: String,
    minlength: [6, 'The minimum length of password is 6'],
    required: [true, 'Ups, you can\'t do this without password.']
  }
})

userSchema.pre('save', function () {
  this.password = hash(this.password)
})

module.exports = model('User', userSchema)