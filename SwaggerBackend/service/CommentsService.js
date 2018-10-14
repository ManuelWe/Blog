'use strict';

const db = require('../utils/db').db;
const dateConverter = require('../utils/dateConverter');

/**
 * Create a new comment
 *
 * @param {Comment} body new comment
 * @return {Promise.Comment} comment object
 **/
exports.apiCommentsPOST = function(body) {
    return new Promise(function(resolve, reject) {
        const comments = db.collection('Comments');

        comments.insert(body, function(error, comment) {
            if (error) {
                console.log(error);
                reject();
            } else {
                resolve(comment);
            }
        });
    });
};


/**
 * Delete an existing comment
 *
 * @param {String} commentid
 * @return {Promise} no response value expected for this operation
 **/
exports.apiCommentsCommentidDELETE = function(commentid) {
    return new Promise(function(resolve, reject) {
        const comments = db.collection('Comments');

        comments.remove({_id: commentid}, function(error, item) {
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
 * Retrieve a specific comment
 *
 * @param {String} commentid
 * @return {Promise.Comment} comment object
 **/
exports.apiCommentsCommentidGET = function(commentid) {
    return new Promise(function(resolve, reject) {
        const comments = db.collection('Comments');

        comments.findOne({_id: commentid}, function(error, comment) {
            if (error) {
                console.log(error);
                reject();
            } else {
                resolve(dateConverter.convertDate(comment));
            }
        });
    });
};

/**
 * Retrieve all comments
 *
 * @return {Promise.Comment[]} array of comment objects
 **/
exports.apiCommentsGET = function() {
    return new Promise(function(resolve, reject) {
        const comments = db.collection('Comments');

        comments.find({}).toArray(function(error, comments) {
            if (error) {
                console.log(error);
                reject();
            } else {
                resolve(dateConverter.convertDate(comments));
            }
        });
    });
};

/**
 * Update an existing comment
 *
 * @param {String} commentid
 * @param {Comment} body updated comment object
 * @return {Promise.Comment} new comment object
 **/
exports.apiCommentsCommentidPUT = function(commentid, body) {
    return new Promise(function(resolve, reject) {
        const comments = db.collection('Comments');

        comments.update({_id: commentid}, body, function(error, comment) {
            if (error) {
                console.log(error);
                reject();
            } else {
                // workaround, because findOneAndUpdate is not working
                comments.findOne({_id: commentid}, function(error, comment) {
                    if (error) {
                        console.log(error);
                        reject();
                    } else {
                        resolve(dateConverter.convertDate(comment));
                    }
                });
            }
        });
    });
};

