import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class RecordsService {
  constructor(private http: HttpClient) {
  }
  allArticles;
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
  login(userId, password) {
    const loginObject = {
      'password': password
    };
    return this.http.post('http://localhost:3000/api/users/' + userId + '/authenticate', loginObject);
  }
  register(registerObject) {
    console.log(this.http.post('http://localhost:3000/api/users/', <JSON> registerObject));
  }
}
