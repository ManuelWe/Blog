import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class RecordsService {
  constructor(private http: HttpClient) {
  }

  getArticles() {
    return this.http.get('http://localhost:3000/api/articles');
  }
  getComments() {
    return this.http.get('http://localhost:3000/api/comments');
  }
}