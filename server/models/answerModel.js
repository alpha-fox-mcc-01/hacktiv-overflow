const mongoose = require('mongoose')
const Schema = mongoose.Schema

const answerSchema = new Schema({
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
   questionId : String,
   userId : String,
   time : { type : Date, default: Date.now }
})

const Answer = mongoose.model('Answer', answerSchema)
module.exports = Answer