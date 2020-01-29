const { Schema, model } = require('mongoose')

const postSchema = new Schema({
  title: {
    type: String,
    required: [true, 'This field cannot be blank.']
  },
  body: {
    type: String,
    required: [true, 'This field cannot be blank.']
  },
  category: {
    type: String,
    required: [true, 'This field cannot be blank.']
  },
  UserId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  upvoters: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  downvoters: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  answers: [{ type: Schema.Types.ObjectId, ref: 'Answer' }]
})

module.exports = model('Post', postSchema)