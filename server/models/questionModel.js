const mongoose = require('mongoose')
const Schema = mongoose.Schema

const questionSchema = new Schema({
   title: {
      type: String,
      required: true
   },
   description: {
      type: String,
      required: true
   },
   upvote: [{
      user: {
         type: 'ObjectId',
         ref: 'User'
      }
   }],
   downvote: [{
      user: {
         type: 'ObjectId',
         ref: 'User'
      }
   }],
   answer: [{
      item: {
         type: 'ObjectId',
         ref: 'Answer'
      }
   }],
   userId: {
      type: String,
      required: true
   },
   time : { type : Date, default: Date.now }
})

const Question = mongoose.model('Question', questionSchema)
module.exports = Question