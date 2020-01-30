const Post = require('../models/post')

module.exports = (req, res, next) => {
  const { id } = req.params
  Post.findOne({ _id: id })
    .then(found => {
      const isOwner = req.activeUserId == found.UserId
      isOwner ? next() : res.status(401).json({ msg: 'Sorry, you\'re not authorized' })
    })
}