'use strict';

const db = require('../utils/db').db;
const bcrypt = require('bcrypt');

/**
 * Retrieve all users
 *
 * @return {Promise.User[]} array of user objects
 **/
exports.apiUsersGET = function() {
  return new Promise(function(resolve, reject) {
    const users = db.collection('Users');

    users.find({}).toArray(function(error, users) {
      if (error) {
        console.log(error);
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
    const users = db.collection('Users');
    let user = body;

    // encrypt password
    // generate a salt
    bcrypt.genSalt(10, function(err, salt) {
      if (err) console.log(err);

      // hash the password using our new salt
      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) console.log(err);

        // override the cleartext password with the hashed one
        user.password = hash;

        users.insert(user, function(error, user) {
          if (error) {
            console.log(error);
            reject();
          } else {
            let userCopy = JSON.parse(JSON.stringify(user[0]));
            delete userCopy.password;
            resolve(userCopy);
          }
        });
      });
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
    const users = db.collection('Users');

    users.findOne({_id: userid}, function(error, user) {
      bcrypt.compare(body.password, user.password, function(error, isMatch) {
        if (error) {
          console.log(error);
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
    const users = db.collection('Users');
    const comments = db.collection('Comments');
    const articles = db.collection('Articles');

    // TODO funktionsaufruf?
    // Delete all comments that belong to the user
    comments.remove({author: userid}, function(error) {
      if (error) {
        console.log(error);
        reject();
      }
    });
    // Delete all articles that belong to the user
    articles.remove({author: userid}, function(error) {
      if (error) {
        console.log(error);
        reject();
      }
    });
    users.remove({_id: userid}, function(error) {
      if (error) {
        console.log(error);
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
    const users = db.collection('Users');

    users.findOne({_id: userid}, function(error, user) {
      if (error) {
        console.log(error);
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
    const users = db.collection('Users');

    users.update({_id: userid}, body, function(error, user) {
      if (error) {
        console.log(error);
        reject();
      } else {
        let userCopy = JSON.parse(JSON.stringify(user));
        delete userCopy.password;
        resolve(userCopy);
      }
    });
  });
};

