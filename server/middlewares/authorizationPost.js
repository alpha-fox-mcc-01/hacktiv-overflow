const Post = require('../models/Post')

module.exports = function (req, res, next) {
  const authenticated_id = req.authenticated_id
  Post.findOne({
    _id: req.body.postId
  })
    .then( result => {
      if(result) {
        if (result.owner == authenticated_id) {
          next()
        } else {
          next({
            code: 401
          })
        }
      } else {
        console.log('error here di authorization')
        next({
          code: 404,
          resource: 'Post'
        })
      }
    })
    .catch(err => {
      next(err)
    })
}