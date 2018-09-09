'use strict';


/**
 * Retrieve all users
 *
 * returns List
 **/
exports.apiUsersGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "zipCode" : 0,
  "firstname" : "firstname",
  "password" : "password",
  "city" : "city",
  "streetNumber" : 6,
  "street" : "street",
  "email" : "email",
  "lastname" : "lastname"
}, {
  "zipCode" : 0,
  "firstname" : "firstname",
  "password" : "password",
  "city" : "city",
  "streetNumber" : 6,
  "street" : "street",
  "email" : "email",
  "lastname" : "lastname"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create a new user
 *
 * body UserCreate User to be created
 * returns List
 **/
exports.apiUsersPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "zipCode" : 0,
  "firstname" : "firstname",
  "password" : "password",
  "city" : "city",
  "streetNumber" : 6,
  "street" : "street",
  "email" : "email",
  "lastname" : "lastname"
}, {
  "zipCode" : 0,
  "firstname" : "firstname",
  "password" : "password",
  "city" : "city",
  "streetNumber" : 6,
  "street" : "street",
  "email" : "email",
  "lastname" : "lastname"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete an existing user
 *
 * userId String User ID
 * no response value expected for this operation
 **/
exports.apiUsersUser_idDELETE = function(userId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve a specific user
 *
 * userId String User ID
 * returns User
 **/
exports.apiUsersUser_idGET = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "zipCode" : 0,
  "firstname" : "firstname",
  "password" : "password",
  "city" : "city",
  "streetNumber" : 6,
  "street" : "street",
  "email" : "email",
  "lastname" : "lastname"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an existing user
 *
 * userId String User ID
 * body UserCreate User to be updated
 * returns List
 **/
exports.apiUsersUser_idPUT = function(userId,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "zipCode" : 0,
  "firstname" : "firstname",
  "password" : "password",
  "city" : "city",
  "streetNumber" : 6,
  "street" : "street",
  "email" : "email",
  "lastname" : "lastname"
}, {
  "zipCode" : 0,
  "firstname" : "firstname",
  "password" : "password",
  "city" : "city",
  "streetNumber" : 6,
  "street" : "street",
  "email" : "email",
  "lastname" : "lastname"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

