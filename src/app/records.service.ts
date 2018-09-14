import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class RecordsService {
  constructor(private http: HttpClient) {
  }

  getAllArticles() {
    return this.http.get('http://localhost:3000/api/articles');
  }
  getArticle(articleId) {
    return this.http.get('http://localhost:3000/api/articles/' + articleId);
  }
  getComments(articleId) {
    return this.http.get('http://localhost:3000/api/articles/comments/' + articleId);
  }
}
