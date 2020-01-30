const mongoose = require('mongoose')
const Schema = mongoose.Schema

const questionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title can not be empty']
    },
    question: {
        type: String,
        required: [true, 'Question can not be empty']
    },
    userId: {
        required: [true, 'UserId is required'],
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    username: {
        required: [true, 'Username is required'],
        type: String,
        ref: 'User'
    },
    votes: {
        type: Number,
        default: 0
    },
    answers: [{
        type: Schema.Types.ObjectId,
        ref: 'Answer'
    }],
    votersUpId: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    votersDownId: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
  },
  {
    timestamps: true
  }
)

const Question = mongoose.model('Question', questionSchema)

module.exports = Question