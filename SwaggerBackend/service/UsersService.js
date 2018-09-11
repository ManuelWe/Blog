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
        if (Object.keys(users).length > 0) {
          resolve(users);
        } else {
          resolve();
        }
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
      // test a matching password
      user.comparePassword('Password', function(err, isMatch) {
        if (err) throw err;
        console.log('Password:', isMatch); // -> Password123: true
      });

      // test a failing password
      user.comparePassword('123Password', function(err, isMatch) {
        if (err) throw err;
        console.log('123Password:', isMatch); // -> 123Password: false
      });

      if (err) {
        console.log(err);
        reject();
      } else {
        if (Object.keys(user).length > 0) {
          resolve(user);
        } else {
          resolve();
        }
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
        resolve(user);
      }
    });
  });
};

