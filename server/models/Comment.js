const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  },
  markedAsAnswer: false,
  comment: String,
  votes: [
    {
      voter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      },
      point: {
        type: Number,
        required: [true, 'upvote or downvote? choose exactly one of it']
      }
    }
  ],
})

module.exports = mongoose.model('Comment', commentSchema)