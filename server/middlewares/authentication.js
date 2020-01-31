const jwt = require("jsonwebtoken");
const secret = process.env.SECRET
const User = require('../models/User')

module.exports = function(req, res, next) {
  //get the token from the header if present
  const token = req.headers.token;
  //if no token found, return response (without going to the next middelware)
  if (!token) res.status(401).json("Access denied. No token provided.");

  else {
      const verified = jwt.verify(token, secret)
    
      if (verified) {
        //   req.currentUserId = verified._id

          //search User berdasarkan verified._id
          User.findById(verified._id)
                .then(user => {
                    if (user) {
                        req.currentUser = {
                            id: user._id,
                            username: user.username
                        }
                        next()
                    }
                    else {
                        res.status(404).json('user not found')
                    }
                })
                .catch(err => {
                    res.status(404).json('user not found')
                })
      }
      else {
          res.status(401).json('Invalid user.')
      }
  }
}