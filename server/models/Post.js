const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
  title: String,
  content: String,
  votes: [{ user: {type: Schema.Types.ObjectId, ref:'User'}, value: Number}],
  replies: [{ user: {type: Schema.Types.ObjectId, ref: 'User' }, content: String, votes: [{ user: {type: Schema.Types.ObjectId, ref:'User'}, value: Number}]}],
  tags: Array,
  postedBy: {type: Schema.Types.ObjectId, ref: 'User'}
}, {timestamps: true})

const Post = mongoose.model('Post', postSchema)

module.exports = Post
