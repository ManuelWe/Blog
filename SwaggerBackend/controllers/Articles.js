'use strict';

var utils = require('../utils/writer.js');
var Articles = require('../service/ArticlesService');

module.exports.articlesArticle_idDELETE = function articlesArticle_idDELETE (req, res, next) {
  var articleId = req.swagger.params['article-id'].value;
  Articles.articlesArticle_idDELETE(articleId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.articlesArticle_idGET = function articlesArticle_idGET (req, res, next) {
  var articleId = req.swagger.params['article-id'].value;
  Articles.articlesArticle_idGET(articleId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.articlesCommentsArticle_idGET = function articlesCommentsArticle_idGET (req, res, next) {
  var articleId = req.swagger.params['article-id'].value;
  Articles.articlesCommentsArticle_idGET(articleId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.articlesGET = function articlesGET (req, res, next) {
  Articles.articlesGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.articlesPOST = function articlesPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Articles.articlesPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
