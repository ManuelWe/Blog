'use strict';


/**
 * Retrieve all users
 *
 * returns List
 **/
exports.usersGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "zipCode" : 6,
  "firstname" : "firstname",
  "password" : "password",
  "city" : "city",
  "streetNumber" : 1,
  "street" : "street",
  "id" : 0,
  "email" : "email",
  "lastname" : "lastname"
}, {
  "zipCode" : 6,
  "firstname" : "firstname",
  "password" : "password",
  "city" : "city",
  "streetNumber" : 1,
  "street" : "street",
  "id" : 0,
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
exports.usersPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "zipCode" : 6,
  "firstname" : "firstname",
  "password" : "password",
  "city" : "city",
  "streetNumber" : 1,
  "street" : "street",
  "id" : 0,
  "email" : "email",
  "lastname" : "lastname"
}, {
  "zipCode" : 6,
  "firstname" : "firstname",
  "password" : "password",
  "city" : "city",
  "streetNumber" : 1,
  "street" : "street",
  "id" : 0,
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
 * userId Long User ID
 * no response value expected for this operation
 **/
exports.usersUser_idDELETE = function(userId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve a specific user
 *
 * userId Long User ID
 * returns User
 **/
exports.usersUser_idGET = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "zipCode" : 6,
  "firstname" : "firstname",
  "password" : "password",
  "city" : "city",
  "streetNumber" : 1,
  "street" : "street",
  "id" : 0,
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
 * userId Long User ID
 * body UserCreate User to be updated
 * returns List
 **/
exports.usersUser_idPUT = function(userId,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "zipCode" : 6,
  "firstname" : "firstname",
  "password" : "password",
  "city" : "city",
  "streetNumber" : 1,
  "street" : "street",
  "id" : 0,
  "email" : "email",
  "lastname" : "lastname"
}, {
  "zipCode" : 6,
  "firstname" : "firstname",
  "password" : "password",
  "city" : "city",
  "streetNumber" : 1,
  "street" : "street",
  "id" : 0,
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

