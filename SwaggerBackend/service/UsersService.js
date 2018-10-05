'use strict';

const User = require('../db/models/users');
const Article = require('../db/models/articles');
const Comment = require('../db/models/comments');

/**
 * Retrieve all users
 *
 * @return {Promise.User[]} array of user objects
 **/
exports.apiUsersGET = function() {
  return new Promise(function(resolve, reject) {
    User.find({}, function(err, users) {
      if (err) {
        console.log(err);
        reject();
      } else {
        let usersCopy = JSON.parse(JSON.stringify(users));
        for (let i in usersCopy) {
          if ({}.hasOwnProperty.call(usersCopy, i)) {
            delete usersCopy[i].password;
            delete usersCopy[i].picture;
          }
        }
        resolve(usersCopy);
      }
    });
  });
};


/**
 * Create a new user
 *
 * @param {User} body new user
 * @return {Promise.User} user object
 **/
exports.apiUsersPOST = function(body) {
  return new Promise(function(resolve, reject) {
    let newUser = new User({
      firstname: body.firstname,
      lastname: body.lastname,
      zipCode: body.zipCode,
      city: body.city,
      street: body.street,
      streetNumber: body.streetNumber,
      email: body.email,
      password: body.password,
      picture: body.picture,
    });

    newUser.save(function(err, user) {
      if (err) {
        console.log(err);
        reject();
      } else {
        let userCopy = JSON.parse(JSON.stringify(user));
        delete userCopy.password;
        resolve(userCopy);
      }
    });
  });
};

/**
 * Authentification of a User
 *
 * @param {String} userid
 * @param {Object} body object containing password
 * @return {Promise} no response value expected for this operation
 **/
exports.apiUsersUseridAuthenticatePOST = function(userid, body) {
  return new Promise(function(resolve, reject) {
    User.findById(userid, function(err, user) {
      user.comparePassword(body.password, function(err, isMatch) {
        if (err) {
          console.log(err);
          reject();
        } else if (!isMatch) {
          reject({correctPassword: false});
        } else {
          resolve({correctPassword: true});
        }
      });
    });
  });
};


/**
 * Delete an existing user and all of his comments and articles
 *
 * @param {String} userid
 * @return {Promise} no response value expected for this operation
 **/
exports.apiUsersUseridDELETE = function(userid) {
  return new Promise(function(resolve, reject) {
    // Delete all comments that belong to the user
    Comment.deleteMany({author: userid}, function(err) {
      if (err) {
        console.log(err);
        reject();
      }
    });
    // Delete all articles that belong to the user
    Article.deleteMany({author: userid}, function(err) {
      if (err) {
        console.log(err);
        reject();
      }
    });
    User.findByIdAndDelete(userid, function(err) {
      if (err) {
        console.log(err);
        reject();
      } else {
        resolve();
      }
    });
  });
};


/**
 * Retrieve a specific user
 *
 * @param {String} userid
 * @return {Promise.User} user object
 **/
exports.apiUsersUseridGET = function(userid) {
  return new Promise(function(resolve, reject) {
    User.findById(userid, function(err, user) {
      if (err) {
        console.log(err);
        reject();
      } else {
        let userCopy = JSON.parse(JSON.stringify(user));
        delete userCopy.password;
        resolve(userCopy);
      }
    });
  });
};


/**
 * Update an existing user
 *
 * @param {String} userid
 * @param {User} body updated user
 * @return {Promise.User} user object
 **/
exports.apiUsersUseridPUT = function(userid, body) {
  return new Promise(function(resolve, reject) {
    User.findByIdAndUpdate(userid, body, {new: true}, function(err, user) {
      if (err) {
        console.log(err);
        reject();
      } else {
        let userCopy = JSON.parse(JSON.stringify(user));
        delete userCopy.password;
        resolve(userCopy);
      }
    });
  });
};

