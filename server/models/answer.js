const { Schema, model } = require('mongoose')

const answerSchema = new Schema({
  body: {
    type: String,
    required: [true, 'This field cannot be blank.']
  },
  UserId: { type: Schema.Types.ObjectId, ref: 'User' },
  PostId: { type: Schema.Types.ObjectId, ref: 'Post' }
})

module.exports = model('Post', answerSchema)