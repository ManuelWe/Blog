'use strict';


/**
 * Delete an existing article
 *
 * articleId Long Article ID
 * no response value expected for this operation
 **/
exports.articlesArticle_idDELETE = function(articleId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve a specific article
 *
 * articleId Long Article ID
 * returns Article
 **/
exports.articlesArticle_idGET = function(articleId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "date" : "2000-01-23",
  "author" : "author",
  "topic" : "topic",
  "id" : 0,
  "text" : "text",
  "headline" : "headline"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve all comments from an article
 *
 * articleId Long Article ID
 * returns List
 **/
exports.articlesCommentsArticle_idGET = function(articleId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "date" : "2000-01-23",
  "author" : "author",
  "articleId" : 6,
  "id" : 0,
  "text" : "text"
}, {
  "date" : "2000-01-23",
  "author" : "author",
  "articleId" : 6,
  "id" : 0,
  "text" : "text"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve all available articles
 *
 * returns List
 **/
exports.articlesGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "date" : "2000-01-23",
  "author" : "Manuel W",
  "topic" : "CS",
  "id" : 0,
  "text" : "text",
  "headline" : "headline"
}, {
  "date" : "2000-01-23",
  "author" : "Jan",
  "topic" : "topic",
  "id" : 0,
  "text" : "text",
  "headline" : "headline"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create a new article
 *
 * body ArticleCreate Article to be created
 * returns List
 **/
exports.articlesPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "date" : "2000-01-23",
  "author" : "author",
  "topic" : "topic",
  "id" : 0,
  "text" : "text",
  "headline" : "headline"
}, {
  "date" : "2000-01-23",
  "author" : "author",
  "topic" : "topic",
  "id" : 0,
  "text" : "text",
  "headline" : "headline"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

