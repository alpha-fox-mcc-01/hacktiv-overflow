const jwt = require('jsonwebtoken')
module.exports = {
  sign (obj) {
    return jwt.sign(obj, process.env.JWT_SECRET)
  },
  verify (token) {
    return new Promise((resolve, reject) => {
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