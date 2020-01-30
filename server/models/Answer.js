const mongoose = require('mongoose')

const answerSchema = new mongoose.Schema({
    answer: {
        type: String,
        required: true
    },
    username: {
        required: [true, 'User is required'],
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    votes: {
      type: Number,
      default: 0
    },
    question: {
        type: Schema.Types.ObjectId,
        ref: 'Question',
    },
    votersUpId: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    votersDownId: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }]
})

const Answer = mongoose.model('Answer', answerSchema)

module.exports = Answer