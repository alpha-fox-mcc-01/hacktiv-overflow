const mongoose = require('mongoose')
const Schema = mongoose.Schema

const questionSchema = new Schema({
  title: {
      type: String,
      required: [true, 'Name is required']
    },
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
  description: String
}, {timestamps: true})

const Product = mongoose.model('Question', questionSchema)

module.exports = Product