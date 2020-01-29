const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = {
  register(req, res, next) {
    const { email, password } = req.body
    User.create({
      email,
      password
    })
      .then(user => {
        res
          .status(201)
          .json({
            _id: user.id,
            email: user.email,
          })
      })
      .catch(err => next(err))
  },

  login(req, res, next) {
    const { email, password } = req.body
    User.findOne({ email })
      .then(user => {
        if (!user) res.send('user tidak terdaftar')
        else {
          const valid = bcrypt.compareSync(password, user.password)
          if (valid) {
            const token = jwt.sign({ _id: user._id }, process.env.SECRET)
            res
              .status(200)
              .json({
                _id: user._id,
                email: user.email,
                token
              })
          } else {
            res.send('password salahs')
          }
        }
      })
      .catch(err => next(err))
  }
}