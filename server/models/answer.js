const mongoose = require('mongoose')
const Schema = mongoose.Schema

const answerSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User' 
  },
  vote: Number,
  // answer ga bisa di delete, kalau delete question answer juga ke delete
},
{
  timestamps: { createdAt: 'created_at'}
})

const Answer = mongoose.model('Answer', answerSchema)

module.exports = Answer