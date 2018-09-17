'use strict';

let User = require('../../db/models/users');

/**
 * Retrieve all users
 *
 * returns List
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
          delete usersCopy[i].password;
          delete usersCopy[i].picture;
        }
        resolve(usersCopy);
      }
    });
  });
};


/**
 * Create a new user
 *
 * body UserCreate User to be created
 * returns List
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
        resolve(user);
      }
    });
  });
};

/**
 * Authentification of a User
 *
 * userid String User ID
 * body Authentification Password
 * no response value expected for this operation
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
 * Delete an existing user
 *
 * userid String User ID
 * no response value expected for this operation
 **/
exports.apiUsersUseridDELETE = function(userid) {
  return new Promise(function(resolve, reject) {
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
 * userid String User ID
 * returns User
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
 * userid String User ID
 * body UserCreate User to be updated
 * returns List
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
        resolve(user);
      }
    });
  });
};

