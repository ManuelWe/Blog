'use strict';

var utils = require('../utils/writer.js');
var Comments = require('../service/CommentsService');

module.exports.commentsComment_idArticle_idPOST = function commentsComment_idArticle_idPOST (req, res, next) {
  var articleId = req.swagger.params['article-id'].value;
  var commentId = req.swagger.params['comment-id'].value;
  var body = req.swagger.params['body'].value;
  Comments.commentsComment_idArticle_idPOST(articleId,commentId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.commentsComment_idDELETE = function commentsComment_idDELETE (req, res, next) {
  var commentId = req.swagger.params['comment-id'].value;
  Comments.commentsComment_idDELETE(commentId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.commentsComment_idGET = function commentsComment_idGET (req, res, next) {
  var commentId = req.swagger.params['comment-id'].value;
  Comments.commentsComment_idGET(commentId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
