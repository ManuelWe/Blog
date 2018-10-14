'use strict';

const utils = require('../utils/writer.js');
const Articles = require('../service/ArticlesService');

module.exports.apiArticlesArticleidDELETE = function apiArticlesArticleidDELETE(req, res, next) {
    let articleid = req.swagger.params['articleid'].value;
    Articles.apiArticlesArticleidDELETE(articleid)
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};

module.exports.apiArticlesArticleidGET = function apiArticlesArticleidGET(req, res, next) {
    let articleid = req.swagger.params['articleid'].value;
    Articles.apiArticlesArticleidGET(articleid)
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};

module.exports.apiArticlesCommentsArticleidGET = function apiArticlesCommentsArticleidGET(req, res, next) {
    let articleid = req.swagger.params['articleid'].value;
    Articles.apiArticlesCommentsArticleidGET(articleid)
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

module.exports.apiArticlesArticleidPUT = function apiArticlesArticleidPUT(req, res, next) {
    let articleid = req.swagger.params['articleid'].value;
    let body = req.swagger.params['body'].value;
    Articles.apiArticlesArticleidPUT(articleid, body)
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};
