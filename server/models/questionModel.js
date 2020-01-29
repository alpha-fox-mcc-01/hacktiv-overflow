const mongoose = require('mongoose')
const Schema = mongoose.Schema

const questionSchema = new Schema({
    author: {type: Schema.Types.ObjectId, ref: 'User'},
    title: {
        type: String,
        required: 'Title is required!'
    },
    content: {
        type: String,
        required: 'Content is required!'
    },
    category: String,
    votes: [{userId: Schema.Types.ObjectId, value: Number}]
}, { timestamps: { createdAt: 'created_at' } })

const Question = mongoose.model('Question', questionSchema)
module.exports = Question