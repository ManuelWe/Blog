'use strict';

const db = require('../utils/db').db;
const dateConverter = require('../utils/dateConverter');

/**
 * Delete an existing article and all of his comments
 *
 * @param {String} articleid
 * @return {Promise} no response value expected for this operation
 **/
exports.apiArticlesArticleidDELETE = function(articleid) {
  return new Promise(function(resolve, reject) {
    // Delete all comments that belong to the article
    const comments = db.collection('Comments');
    const articles = db.collection('Articles');

    comments.remove({articleId: articleid}, function(err) {
      if (err) {
        console.log(err);
        reject();
      }
    });

    articles.remove({_id: articleid}, function(error, item) {
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
 * Retrieve a specific article
 *
 * @param {String} articleid
 * @return {Promise.Article} article object
 **/
exports.apiArticlesArticleidGET = function(articleid) {
  return new Promise(function(resolve, reject) {
    const articles = db.collection('Articles');

    articles.findOne({_id: articleid}, function(error, article) {
      if (error) {
        console.log(error);
        reject();
      } else {
        resolve(article);
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
    const comments = db.collection('Comments');
    comments.find({articleId: Number(articleid)}).toArray(function(err, comments) {
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
    const articles = db.collection('Articles');

    articles.find({}).toArray(function(error, articles) {
      if (error) {
        console.log(error);
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
    const articles = db.collection('Articles');

    articles.insert(body, function(error, article) {
      if (error) {
        console.log(error);
      } else {
        resolve(article[0]);
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
    const articles = db.collection('Articles');

    articles.update({_id: articleid}, body, function(error, article) {
      if (error) {
        console.log(error);
        reject();
      } else {
        // workaround, because findOneAndUpdate is not working
        articles.findOne({_id: articleid}, function(error, article) {
          if (error) {
            console.log(error);
            reject();
          } else {
            resolve(article);
          }
        });
      }
    });
  });
};
