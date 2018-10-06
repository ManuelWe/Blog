import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';


@Injectable()
export class RecordsService {
  allArticles;
  constructor(private http: HttpClient) {
  }

  getAllArticles() {
    return this.http.get('http://localhost:3000/api/articles');
      // .pipe(catchError(this.errorHandler.handleError));
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

  createComment(createCommentObject) {
    return this.http.post('http://localhost:3000/api/comments', createCommentObject);
  }
}
