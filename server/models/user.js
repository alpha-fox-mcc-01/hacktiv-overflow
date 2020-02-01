const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')

const userSchema = new Schema({
  username: String,
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: 'Email address is required',
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  password: {
    type: String,
    minlength: [6, 'Password Length must be > 6']
  }
});

userSchema.pre('save', function(next) {
  const hash = bcrypt.hashSync(this.password, 8)
  this.password = hash
  next()
})

const User = mongoose.model('User', userSchema)

module.exports = User