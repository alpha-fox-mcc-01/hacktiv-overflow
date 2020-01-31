const mongoose = require('mongoose')
const Schema = mongoose.Schema

const answerSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title cannot be empty'],
  },
  description: {
    type: String,
    required: [true, 'Title cannot be empty'],
  },
  votes: [{ user: {type: Schema.Types.ObjectId, ref: 'User'}, value: Number }],
  answeredBy: {type: Schema.Types.ObjectId, ref:'User'},
  question: {type: Schema.Types.ObjectId, ref:'Question'}
}, { timestamps: true })

const Answer = mongoose.model('Answer', answerSchema)
module.exports = Answer
