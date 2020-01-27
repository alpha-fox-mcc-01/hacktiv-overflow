const jwt = require('jsonwebtoken')
module.exports = {
  sign (obj, secret) {
    return jwt.sign(obj, secret)
  },
  verify (token) {
    return Promise((resolve, reject) => {
      jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if(err) {
          reject({
            code: 400,
            message: 'Please Sign in first'
          })
        } else {
          resolve(decoded)
        }
      })
    })
  }
}