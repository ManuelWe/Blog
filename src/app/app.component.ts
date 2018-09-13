import { Component } from '@angular/core';
import {RecordsService} from './records.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  allArticles;
  constructor( private myFirstService: RecordsService) {
    this.myFirstService.getArticles().subscribe(data => {
      this.allArticles = data;
    });
  }
  getRandomArticle() {
    return this.allArticles[Math.floor(Math.random() * (this.allArticles.length + 1))]._id;
  }
}


