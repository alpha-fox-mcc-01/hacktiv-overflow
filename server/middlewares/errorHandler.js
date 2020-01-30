module.exports = (err, req, res, next) => {
  let status = 500
  let message = 'Internal Server Error'
  let errors 
  // console.log(err, 'ini di error handler')

  if(err.name === 'ValidationError') {
    status = 400
    message = 'Validation Error'
    errors = []
    for(let key in err.errors) {
      errors.push(err.errors[key].message)
    }
    res.status(status).json({
      msg: message,
      errors
    })
  } else if (err.msg === 'Input Wrong') {
      res.status(400).json({
        msg : err.msg,
        error: err.error
      })
  } else if (err.msg === 'Not found') {
    res.status(400).json({
      msg : err.msg,
      error: err.error
    })
  } else if (err.name === 'CastError') {
      if (err.kind ==='ObjectId') {
        res.status(400).json({
          msg: 'Id is invalid'
        })
      } else {
        res.status(400).json({
          msg: 'Failed to read string as a number',
          err
        })
      }
  } else if (err.msg === 'Not Authorized') {
    res.status(401).json({
      error: err.msg,
      msg: `You don\'t have access to modify ${err.desc} data`
    })
  } else if (err.name === 'JsonWebTokenError') {
    res.status(401).json({
      error: err.message,
      msg: `Please input token to input product`
    })
  } else{
    res.status(status).json({
      msg: message
    })
  }
}
