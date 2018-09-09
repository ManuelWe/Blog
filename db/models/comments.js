/* eslint new-cap: [2, {capIsNewExceptions: ["Schema"]}]*/
const mongoose = require('mongoose');

let commentSchema = mongoose.Schema({
  articleId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

let Comment = module.exports = mongoose.model('Comment', commentSchema);
