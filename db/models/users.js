/* eslint new-cap: [2, {capIsNewExceptions: ["Schema"]}]*/
const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  zipCode: {
    type: Number,
  },
  city: {
    type: String,
  },
  street: {
    type: String,
  },
  streetNumber: {
    type: Number,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

let User = module.exports = mongoose.model('User', userSchema);
