module.exports = (err, req, res, next) => {
  if(err.name === 'MongoError'){
    res.status(400).json({
      msg: 'Email already Used !'
    })
  } else if(err.name === 'ValidationError'){
    res.status(400).json({
      msg: err.message
    })
  }
}