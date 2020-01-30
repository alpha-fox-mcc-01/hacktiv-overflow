const mongoose = require('mongoose')
const Schema = mongoose.Schema

const questionSchema = new Schema({
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
  }
}, {timestamps: true})

const Question = mongoose.model('Question', questionSchema)

module.exports = Question