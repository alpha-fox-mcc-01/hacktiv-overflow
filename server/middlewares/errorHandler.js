module.exports = function (err, req, res, next) {
  if(err) {
    if (err.name === 'ValidationError') {
        res.status(401).json({message : err.message})
    } else if (err.name === 'MongoError') {
        res.status(err.statusCode).json({
            status: 'fail',
            message: err.message
        })
    } else if (err.name === 'JsonWebTokenError') {
        res.status(401).json({
            message: 'You are not authenticated, please log in'
        })
    } else if (err.name === 'Bad Request') {
        res.status(err.code).json({message: err.message})
    }
    res.status(500).json({message: err})
  } 

}
