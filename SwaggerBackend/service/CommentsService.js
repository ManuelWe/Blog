'use strict';


/**
 * Create a new comment
 *
 * articleId String Article ID
 * commentId String Comment ID
 * body CommentCreate Comment to be created
 * returns Comment
 **/
exports.apiCommentsComment_idArticle_idPOST = function(articleId,commentId,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "date" : "2000-01-23",
  "author" : "author",
  "articleId" : "articleId",
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
 * commentId String Comment ID
 * no response value expected for this operation
 **/
exports.apiCommentsComment_idDELETE = function(commentId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve a specific comment
 *
 * commentId String Comment ID
 * returns Comment
 **/
exports.apiCommentsComment_idGET = function(commentId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "date" : "2000-01-23",
  "author" : "author",
  "articleId" : "articleId",
  "text" : "text"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

