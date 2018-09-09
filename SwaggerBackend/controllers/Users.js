'use strict';

var utils = require('../utils/writer.js');
var Users = require('../service/UsersService');

module.exports.apiUsersGET = function apiUsersGET (req, res, next) {
  Users.apiUsersGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiUsersPOST = function apiUsersPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Users.apiUsersPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiUsersUser_idDELETE = function apiUsersUser_idDELETE (req, res, next) {
  var userId = req.swagger.params['user-id'].value;
  Users.apiUsersUser_idDELETE(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiUsersUser_idGET = function apiUsersUser_idGET (req, res, next) {
  var userId = req.swagger.params['user-id'].value;
  Users.apiUsersUser_idGET(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiUsersUser_idPUT = function apiUsersUser_idPUT (req, res, next) {
  var userId = req.swagger.params['user-id'].value;
  var body = req.swagger.params['body'].value;
  Users.apiUsersUser_idPUT(userId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
