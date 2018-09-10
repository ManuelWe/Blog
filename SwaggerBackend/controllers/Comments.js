'use strict';

const utils = require('../utils/writer.js');
const Comments = require('../service/CommentsService');

module.exports.apiCommentsPOST = function apiCommentsPOST(req, res, next) {
  let body = req.swagger.params['body'].value;
  Comments.apiCommentsPOST(body)
      .then(function(response) {
        utils.writeJson(res, response);
      })
      .catch(function(response) {
        utils.writeJson(res, response);
      });
};

module.exports.apiCommentsCommentidDELETE = function apiCommentsCommentidDELETE(req, res, next) {
  let commentid = req.swagger.params['commentid'].value;
  Comments.apiCommentsCommentidDELETE(commentid)
      .then(function(response) {
        utils.writeJson(res, response);
      })
      .catch(function(response) {
        utils.writeJson(res, response);
      });
};

module.exports.apiCommentsCommentidGET = function apiCommentsCommentidGET(req, res, next) {
  let commentid = req.swagger.params['commentid'].value;
  Comments.apiCommentsCommentidGET(commentid)
      .then(function(response) {
        utils.writeJson(res, response);
      })
      .catch(function(response) {
        utils.writeJson(res, response);
      });
};

module.exports.apiCommentsGET = function apiCommentsGET(req, res, next) {
  Comments.apiCommentsGET()
      .then(function(response) {
        utils.writeJson(res, response);
      })
      .catch(function(response) {
        utils.writeJson(res, response);
      });
};

module.exports.apiCommentsCommentidPUT = function apiCommentsCommentidPUT(req, res, next) {
  let commentid = req.swagger.params['commentid'].value;
  let body = req.swagger.params['body'].value;
  Comments.apiCommentsCommentidPUT(commentid, body)
      .then(function(response) {
        utils.writeJson(res, response);
      })
      .catch(function(response) {
        utils.writeJson(res, response);
      });
};
