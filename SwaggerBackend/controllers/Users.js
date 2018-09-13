'use strict';

const utils = require('../utils/writer.js');
const Users = require('../service/UsersService');

module.exports.apiUsersGET = function apiUsersGET(req, res, next) {
  Users.apiUsersGET()
      .then(function(response) {
        utils.writeJson(res, response);
      })
      .catch(function(response) {
        utils.writeJson(res, response);
      });
};

module.exports.apiUsersPOST = function apiUsersPOST(req, res, next) {
  let body = req.swagger.params['body'].value;
  Users.apiUsersPOST(body)
      .then(function(response) {
        utils.writeJson(res, response);
      })
      .catch(function(response) {
        utils.writeJson(res, response);
      });
};

module.exports.apiUsersUseridAuthenticateGET = function apiUsersUseridAuthenticateGET(req, res, next) {
  let userid = req.swagger.params['userid'].value;
  let body = req.swagger.params['body'].value;
  Users.apiUsersUseridAuthenticateGET(userid, body)
      .then(function(response) {
        utils.writeJson(res, response);
      })
      .catch(function(response) {
        utils.writeJson(res, response);
      });
};

module.exports.apiUsersUseridDELETE =
  function apiUsersUseridDELETE(req, res, next) {
    let userid = req.swagger.params['userid'].value;
    Users.apiUsersUseridDELETE(userid)
        .then(function(response) {
          utils.writeJson(res, response);
        })
        .catch(function(response) {
          utils.writeJson(res, response);
        });
  };

module.exports.apiUsersUseridGET = function apiUsersUseridGET(req, res, next) {
  let userid = req.swagger.params['userid'].value;
  Users.apiUsersUseridGET(userid)
      .then(function(response) {
        utils.writeJson(res, response);
      })
      .catch(function(response) {
        utils.writeJson(res, response);
      });
};

module.exports.apiUsersUseridPUT = function apiUsersUseridPUT(req, res, next) {
  let userid = req.swagger.params['userid'].value;
  let body = req.swagger.params['body'].value;
  Users.apiUsersUseridPUT(userid, body)
      .then(function(response) {
        utils.writeJson(res, response);
      })
      .catch(function(response) {
        utils.writeJson(res, response);
      });
};
