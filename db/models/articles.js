/* eslint new-cap: [2, {capIsNewExceptions: ["Schema"]}]*/
const mongoose = require('mongoose');

let articleSchema = mongoose.Schema({
  headline: {
    type: String,
    required: true,
  },
  author: {
    type: String,
  },
  text: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  topic: {
    type: Array,
    required: true,
  },
  picture: {
    type: String,
  },
});

module.exports = mongoose.model('Article', articleSchema);
