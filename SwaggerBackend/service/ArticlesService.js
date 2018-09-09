'use strict';

let Article = require('../../db/models/articles');
let Comment = require('../../db/models/comments');

/**
 * Delete an existing article
 *
 * articleId String Article ID
 * no response value expected for this operation
 **/
exports.apiArticlesArticle_idDELETE = function(articleId) {
  console.log("hi");
  return new Promise(function(resolve, reject) {
    Article.findByIdAndDelete(articleId, function(err) {
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
 * articleId String Article ID
 * returns Article
 **/
exports.apiArticlesArticle_idGET = function(articleId) {
  console.log('hu');
  return new Promise(function(resolve, reject) {
    console.log(articleId);
    Article.find({_id: articleId}, function(err, articles) {
      if (err) {
        console.log(err);
        reject();
      } else {
        if (Object.keys(articles).length > 0) {
          resolve(articles);
        } else {
          resolve();
        }
      }
    });
  });
};

// TODO Test
/**
 * Retrieve all comments from an article
 *
 * articleId String Article ID
 * returns List
 **/
exports.apiArticlesCommentsArticle_idGET = function(articleId) {
  return new Promise(function(resolve, reject) {
    Comment.find({articleId: articleId}, function(err, articles) {
      if (err) {
        console.log(err);
        reject();
      } else {
        if (Object.keys(articles).length > 0) {
          resolve(articles);
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
          resolve(articles);
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

    newArticle.save(function(err, Article) {
      if (err) {
        console.log(err);
        reject();
      } else {
        resolve(Article);
      }
    });
  });
};
