'use strict';

let Comment = require('../../db/models/comments');
let dateConverter = require('../utils/dateConverter');

/**
 * Create a new comment
 *
 * @param {Comment} body new comment
 * @return {Promise.Comment} comment object
 **/
exports.apiCommentsPOST = function(body) {
  return new Promise(function(resolve, reject) {
    let newComment = new Comment({
      articleId: body.articleId,
      author: body.author,
      text: body.text,
      date: body.date,
    });

    newComment.save(function(err, comment) {
      if (err) {
        console.log(err);
        reject();
      } else {
        resolve(comment);
      }
    });
  });
};


/**
 * Delete an existing comment
 *
 * @param {String} commentid
 * @return {Promise} no response value expected for this operation
 **/
exports.apiCommentsCommentidDELETE = function(commentid) {
  return new Promise(function(resolve, reject) {
    Comment.findByIdAndDelete(commentid, function(err) {
      if (err) {
        console.log(err);
        reject();
      } else {
        resolve();
      }
    });
  });
};


/**
 * Retrieve a specific comment
 *
 * @param {String} commentid
 * @return {Promise.Comment} comment object
 **/
exports.apiCommentsCommentidGET = function(commentid) {
  return new Promise(function(resolve, reject) {
    Comment.findById(commentid, function(err, comment) {
      if (err) {
        console.log(err);
        reject();
      } else {
        resolve(dateConverter.convertDate(comment));
      }
    });
  });
};

/**
 * Retrieve all comments
 *
 * @return {Promise.Comment[]} array of comment objects
 **/
exports.apiCommentsGET = function() {
  return new Promise(function(resolve, reject) {
    Comment.find({}, function(err, comments) {
      if (err) {
        console.log(err);
        reject();
      } else {
        resolve(dateConverter.convertDate(comments));
      }
    });
  });
};

/**
 * Update an existing comment
 *
 * @param {String} commentid
 * @param {Comment} body updated comment object
 * @return {Promise.Comment} new comment object
 **/
exports.apiCommentsCommentidPUT = function(commentid, body) {
  return new Promise(function(resolve, reject) {
    Comment.findByIdAndUpdate(commentid, body, {new: true}, function(err, comment) {
      if (err) {
        console.log(err);
        reject();
      } else {
        resolve(comment);
      }
    });
  });
};

