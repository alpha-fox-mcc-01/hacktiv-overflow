const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: [true, 'name is required']
    },
    email: {
      type: String,
      unique: [true, `email already exists`],
      required: [true, 'email is required'],
      match: [/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'email is not valid']
    },
    password:{
      type: String,
      minlength: [5, 'password min 5 characters'],
      maxlength: [16, 'password max 16 characters'],
      required: [true, 'password is required']
    }
  },
  {
    timestamps: true
  }
)


const User = mongoose.model('User', userSchema)
module.exports = User