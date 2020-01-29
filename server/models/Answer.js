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
    upvotes: [{type: Schema.Types.ObjectId, ref:'User'}],
    downvotes: [{type: Schema.Types.ObjectId, ref:'User'}],
    answeredBy: {type: Schema.Types.ObjectId, ref:'User'},
    question: {type: Schema.Types.ObjectId, ref:'Question'} 
}, { timestamps: true })

const Answer = mongoose.model('Answer', answerSchema)
module.exports = Answer
