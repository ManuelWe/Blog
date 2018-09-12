'use strict';

let Article = require('../../db/models/articles');
let Comment = require('../../db/models/comments');
let dateConverter = require('../utils/dateConverter');

/**
 * Delete an existing article
 *
 * @articleid String Article ID
 * @return no response value expected for this operation
 **/
exports.apiArticlesArticleidDELETE = function(articleid) {
  return new Promise(function(resolve, reject) {
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
 * articleid String Article ID
 * returns Article
 **/
exports.apiArticlesArticleidGET = function(articleid) {
  return new Promise(function(resolve, reject) {
    Article.findById(articleid, function(err, articles) {
      if (err) {
        console.log(err);
        reject();
      } else {
        if (Object.keys(articles).length > 0) {
          resolve(dateConverter.convertDate(articles));
        } else {
          resolve();
        }
      }
    });
  });
};


/**
 * Retrieve all comments from an article
 *
 * articleid String Article ID
 * returns List
 **/
exports.apiArticlesCommentsArticleidGET = function(articleid) {
  return new Promise(function(resolve, reject) {
    Comment.find({articleId: articleid}, function(err, comments) {
      if (err) {
        console.log(err);
        reject();
      } else {
        if (Object.keys(comments).length > 0) {
          resolve(dateConverter.convertDate(comments));
        } else {
          resolve();
        }
      }
    });
  });
};


/**
 * Retrieve all available articles
 *
 * returns List
 **/
exports.apiArticlesGET = function() {
  return new Promise(function(resolve, reject) {
    Article.find({}, function(err, articles) {
      if (err) {
        console.log(err);
        reject();
      } else {
        if (Object.keys(articles).length > 0) {
          resolve(dateConverter.convertDate(articles));
        } else {
          resolve();
        }
      }
    });
  });
};


/**
 * Create a new article
 *
 * body ArticleCreate Article to be created
 * returns List
 **/
exports.apiArticlesPOST = function(body) {
  return new Promise(function(resolve, reject) {
    let newArticle = new Article({
      date: body.date,
      author: body.author,
      topic: body.topic,
      text: body.text,
      headline: body.headline,
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
 * articleid String Article ID
 * body ArticleCreate Article to be updated
 * returns List
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
