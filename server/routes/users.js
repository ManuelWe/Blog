/* eslint new-cap: [2, {capIsNewExceptions: ["Router"]}]*/
const express = require('express');
const router = express.Router();

/* GET users listing. */
/* Super fancy comment in order to test the branches of github yey */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
