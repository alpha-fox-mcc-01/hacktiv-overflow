const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema

const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    match: [/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i, "Email is Invalid"],
    validate: {
        validator: function(email) {
          return User.findOne({email})
            .then(user => {
              if (user) {
                return false
              }
              else return true
            })
            .catch(err => {
              throw new Error(err)
            })
        },
        message: "Email has already been registered"
      }
  },
  password: {
    type: String,
    required: true
  }
}, { timestamps: true })

userSchema.pre('save', function(next) {
  let user = this;
  if (!user.isModified('password')) return next();
  bcrypt.genSalt(10, function(err, salt) {
      if (err) return next(err);
      bcrypt.hash(user.password, salt, function(err, hash) {
          if (err) return next(err);
          user.password = hash;
          next();
      });
  });
});

const User = mongoose.model('User', userSchema)
module.exports = User
