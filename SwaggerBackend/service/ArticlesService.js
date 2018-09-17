'use strict';

let Article = require('../../db/models/articles');
let Comment = require('../../db/models/comments');
let dateConverter = require('../utils/dateConverter');

/**
 * Delete an existing article
 *
 * @param {String} articleid
 * @return {Promise} no response value expected for this operation
 **/
exports.apiArticlesArticleidDELETE = function(articleid) {
  return new Promise(function(resolve, reject) {
    // Delete all comments that belong to the article
    Comment.deleteMany({articleId: articleid}, function(err) {
      if (err) {
        console.log(err);
        reject();
      }
    });
    Article.findByIdAndDelete(articleid, function(err) {
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
 * Retrieve a specific article
 *
 * @param {String} articleid
 * @return {Promise.Article} article object
 **/
exports.apiArticlesArticleidGET = function(articleid) {
  return new Promise(function(resolve, reject) {
    Article.findById(articleid, function(err, article) {
      if (err) {
        console.log(err);
        reject();
      } else {
        resolve(dateConverter.convertDate(article));
      }
    });
  });
};


/**
 * Retrieve all comments from an article
 *
 * @param {String} articleid
 * @return {Promise.Comment[]} array of comment objects
 **/
exports.apiArticlesCommentsArticleidGET = function(articleid) {
  return new Promise(function(resolve, reject) {
    Comment.find({articleId: articleid}, function(err, comments) {
      if (err) {
        console.log(err);
        reject();
      } else {
        let commentsCopy = JSON.parse(JSON.stringify(comments));
        for (let i in commentsCopy) {
          if ({}.hasOwnProperty.call(commentsCopy, i)) {
            delete commentsCopy[i].picture;
          }
        }
        resolve(dateConverter.convertDate(commentsCopy));
      }
    });
  });
};


/**
 * Retrieve all available articles
 *
 * @return {Promise.Article[]} array of article objects
 **/
exports.apiArticlesGET = function() {
  return new Promise(function(resolve, reject) {
    Article.find({}, function(err, articles) {
      if (err) {
        console.log(err);
        reject();
      } else {
        let articlesCopy = JSON.parse(JSON.stringify(articles));
        for (let i in articlesCopy) {
          if ({}.hasOwnProperty.call(articlesCopy, i)) {
            delete articlesCopy[i].picture;
          }
        }
        resolve(dateConverter.convertDate(articlesCopy));
      }
    });
  });
};


/**
 * Create a new article
 *
 * @param {Article} body new article
 * @return {Promise.Article} article object
 **/
exports.apiArticlesPOST = function(body) {
  return new Promise(function(resolve, reject) {
    let newArticle = new Article({
      date: body.date,
      author: body.author,
      topic: body.topic,
      text: body.text,
      headline: body.headline,
      picture: body.picture,
    });

    newArticle.save(function(err, article) {
      if (err) {
        console.log(err);
        reject();
      } else {
        resolve(article);
      }
    });
  });
};

/**
 * Update an existing article
 *
 * @param {String} articleid
 * @param {Article} body updated article object
 * @return {Promise.Article} updated article object
 **/
exports.apiArticlesArticleidPUT = function(articleid, body) {
  return new Promise(function(resolve, reject) {
    Article.findByIdAndUpdate(articleid, body, {new: true}, function(err, article) {
      if (err) {
        console.log(err);
        reject();
      } else {
        resolve(article);
      }
    });
  });
};
