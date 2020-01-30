const mongoose = require('mongoose')

let postSchema = new mongoose.Schema()
postSchema.add({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  title: {
    type: String,
    required: [true, 'please enter post title']
  },
  content: {
    type: String,
    required: [true, 'content field cannot be blank']
  },
  isResolved: Boolean,
  language: [String],
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
  ]
})

postSchema.set('timestamps', true)

postSchema.pre('save', function () {
  this.language = this.language.toLowerCase()
})


module.exports = mongoose.model('Post', postSchema)
