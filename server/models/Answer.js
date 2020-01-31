const mongoose = require('mongoose')
const Schema = mongoose.Schema

const answerSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required']
  },
  description: String,
  votes: [{
    userId: { 
      type: Schema.Types.ObjectId, 
      ref: 'User'
    },
    vote: Number
  }],
  ownerId: { 
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  questionId: { 
    type: Schema.Types.ObjectId,
    ref: 'Question'
  }
}, {timestamps: true})

const Answer = mongoose.model('Answer', answerSchema)

module.exports = Answer