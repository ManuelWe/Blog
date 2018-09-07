'use strict';


/**
 * Create a new comment
 *
 * articleId Long Article ID
 * commentId Long Comment ID
 * body CommentCreate Comment to be created
 * returns Comment
 **/
exports.commentsComment_idArticle_idPOST = function(articleId,commentId,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "date" : "2000-01-23",
  "author" : "author",
  "articleId" : 6,
  "id" : 0,
  "text" : "text"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete an existing comment
 *
 * commentId Long Comment ID
 * no response value expected for this operation
 **/
exports.commentsComment_idDELETE = function(commentId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve a specific comment
 *
 * commentId Long Comment ID
 * returns Comment
 **/
exports.commentsComment_idGET = function(commentId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "date" : "2000-01-23",
  "author" : "author",
  "articleId" : 6,
  "id" : 0,
  "text" : "text"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

