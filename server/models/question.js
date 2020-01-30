const mongoose = require('mongoose')
const Schema = mongoose.Schema

const questionSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  // array of object id nya answer
  answerId: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Answer'
    }
  ],
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  vote: Number,
  timestamps: { createdAt: 'created_at' }
});

const Question = mongoose.model('Question', questionSchema)

module.exports = Question