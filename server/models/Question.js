const mongoose = require('mongoose')
const Schema = mongoose.Schema

const questionSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title cannot be empty'],
  },
  description: {
    type: String,
    required: [true, 'Title cannot be empty'],
  },
  upvotes: [{type: Schema.Types.ObjectId, ref:'User'}],
  downvotes: [{type: Schema.Types.ObjectId, ref:'User'}],
  tags: Array,
  questionedBy: {type: Schema.Types.ObjectId, ref: 'User'}
}, {timestamps: true})

const Question = mongoose.model('Question', questionSchema)

module.exports = Question
