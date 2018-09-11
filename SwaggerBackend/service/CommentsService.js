'use strict';

let Comment = require('../../db/models/comments');

/**
 * Create a new comment
 *
 * articleid String Article ID
 * commentid String Comment ID
 * body CommentCreate Comment to be created
 * returns Comment
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
 * commentid String Comment ID
 * no response value expected for this operation
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
 * commentid String Comment ID
 * returns Comment
 **/
exports.apiCommentsCommentidGET = function(commentid) {
  return new Promise(function(resolve, reject) {
    Comment.findById(commentid, function(err, comments) {
      if (err) {
        console.log(err);
        reject();
      } else {
        if (Object.keys(comments).length > 0) {
          resolve(comments);
        } else {
          resolve();
        }
      }
    });
  });
};

/**
 * Retrieve all comments
 *
 * returns List
 **/
exports.apiCommentsGET = function() {
  return new Promise(function(resolve, reject) {
    Comment.find({}, function(err, comments) {
      if (err) {
        console.log(err);
        reject();
      } else {
        if (Object.keys(comments).length > 0) {
          resolve(comments);
        } else {
          resolve();
        }
      }
    });
  });
}

/**
 * Update an existing comment
 *
 * commentid String Comment ID
 * body CommentCreate Comment to be updated
 * returns List
 **/
exports.apiCommentsCommentidPUT = function(commentid,body) {
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

