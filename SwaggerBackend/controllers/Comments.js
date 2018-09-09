'use strict';

var utils = require('../utils/writer.js');
var Comments = require('../service/CommentsService');

module.exports.apiCommentsComment_idArticle_idPOST = function apiCommentsComment_idArticle_idPOST (req, res, next) {
  var articleId = req.swagger.params['article-id'].value;
  var commentId = req.swagger.params['comment-id'].value;
  var body = req.swagger.params['body'].value;
  Comments.apiCommentsComment_idArticle_idPOST(articleId,commentId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiCommentsComment_idDELETE = function apiCommentsComment_idDELETE (req, res, next) {
  var commentId = req.swagger.params['comment-id'].value;
  Comments.apiCommentsComment_idDELETE(commentId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiCommentsComment_idGET = function apiCommentsComment_idGET (req, res, next) {
  var commentId = req.swagger.params['comment-id'].value;
  Comments.apiCommentsComment_idGET(commentId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
