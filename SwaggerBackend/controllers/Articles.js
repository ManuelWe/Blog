'use strict';

var utils = require('../utils/writer.js');
var Articles = require('../service/ArticlesService');

module.exports.apiArticlesArticle_idDELETE = function apiArticlesArticle_idDELETE(req, res, next) {
  console.log(req);
  let articleId = req.swagger.params['article-id'].value;
  Articles.apiArticlesArticle_idDELETE(articleId)
      .then(function(response) {
        utils.writeJson(res, response);
      })
      .catch(function(response) {
        utils.writeJson(res, response);
      });
};

module.exports.apiArticlesArticle_idGET = function apiArticlesArticle_idGET(req, res, next) {
  let articleId = req.swagger.params['article-id'].value;
  Articles.apiArticlesArticle_idGET(articleId)
      .then(function(response) {
        utils.writeJson(res, response);
      })
      .catch(function(response) {
        utils.writeJson(res, response);
      });
};

module.exports.apiArticlesCommentsArticle_idGET = function apiArticlesCommentsArticle_idGET(req, res, next) {
  let articleId = req.swagger.params['article-id'].value;
  Articles.apiArticlesCommentsArticle_idGET(articleId)
      .then(function(response) {
        utils.writeJson(res, response);
      })
      .catch(function(response) {
        utils.writeJson(res, response);
      });
};

module.exports.apiArticlesGET = function apiArticlesGET(req, res, next) {
  Articles.apiArticlesGET()
      .then(function(response) {
        utils.writeJson(res, response);
      })
      .catch(function(response) {
        utils.writeJson(res, response);
      });
};

module.exports.apiArticlesPOST = function apiArticlesPOST(req, res, next) {
  let body = req.swagger.params['body'].value;
  Articles.apiArticlesPOST(body)
      .then(function(response) {
        utils.writeJson(res, response);
      })
      .catch(function(response) {
        utils.writeJson(res, response);
      });
};
