import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class RecordsService {
  allArticles;

  constructor(private http: HttpClient) {
  }

  getAllArticles() {
    return this.http.get('http://localhost:3000/api/articles');
  }

  getAllUsers() {
    return this.http.get('http://localhost:3000/api/users');
  }

  getArticle(articleId) {
    return this.http.get('http://localhost:3000/api/articles/' + articleId);
  }

  getComments(articleId) {
    return this.http.get('http://localhost:3000/api/articles/comments/' + articleId);
  }

  getUser(userId) {
    return this.http.get('http://localhost:3000/api/users/' + userId);
  }

  login(loginObject) {
    return this.http.post('http://localhost:3000/api/users/' + loginObject.id + '/authenticate', loginObject);
  }

  register(registerObject) {
    return this.http.post('http://localhost:3000/api/users/', registerObject);
  }

  createArticle(createArticleObject) {
    return this.http.post('http://localhost:3000/api/articles', createArticleObject);
  }

  deleteArticle(articleId) {
      return this.http.delete('http://localhost:3000/api/articles/' + articleId);
  }

  createComment(createCommentObject) {
    return this.http.post('http://localhost:3000/api/comments', createCommentObject);
  }

  deleteComment(commentId) {
    return this.http.delete('http://localhost:3000/api/comments/' + commentId);
  }
}
