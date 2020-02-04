const User = require('../models/user')
const jwt = require('jsonwebtoken')
var bcrypt = require('bcryptjs')


class userController {

  static register(req, res) {
    console.log(req.body);

    let obj = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    }

    User.create(obj)
      .then((user) => {
        const token = jwt.sign({ _id: user._id }, process.env.SECRET)
        const name = user.name
        res.status(200).json({ token, name })
      })
      .catch(err => {
        res.status(500).json(err)

      })
  }

  static login(req, res) {
    // console.log(req.body);
    let email = req.body.email
    let pass = req.body.password

    User.findOne({
      email
    })
      .then((user) => {
        console.log(user);

        if (user) {
          let verify = bcrypt.compareSync(req.body.password, user.password);
          if (verify) {
            console.log('verified');
            const token = jwt.sign({ _id: user._id }, process.env.SECRET)
            const name = user.name

            res.status(200).json({ token, name })
          } else {
             res.status(500).json(err)
          }
        } else {
          res.status(500).json(err)
        }
      })
      .catch(err => {
        // next(err)
        res.status(500).json(err)

      })
  }
}

module.exports = userController