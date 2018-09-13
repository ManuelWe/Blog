import { Component } from '@angular/core';
import {RecordsService} from './records.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  page = 0; // mainPage = 0 articles = 1 allArticles = 2
  articleHeader;
  articlePicture;
  articleId;
  articleText;
  articleAuthor;
  articleAuthorPicture;
  articleDate;
  articleTopic;
  articleComments;
  allArticles;
  article;
  allComments;
  natureArticles;
  citiesArticles;
  peopleArticles;
  otherArticles;
  constructor(private myFirstService: RecordsService) {
    this.myFirstService.getArticles().subscribe(data => {
      this.allArticles = data;
    });
    this.myFirstService.getComments().subscribe(data => {
      this.allComments = data;
    });
  }
  randomArticle() {
    Math.floor(Math.random() * (this.allArticles.length + 1));
  }
  showAllArticles() {
    this.page = 2;
    let counter = 0;
    this.natureArticles = '';
    this.citiesArticles = '';
    this.peopleArticles = '';
    this.otherArticles = '';
    for (let entry of this.allArticles) {
      if (entry.topic.includes('Nature')) {
        this.natureArticles += '<h4 (click)="readMore(' + counter + ')">' + entry.headline + '</h4>';
      }
      else if (entry.topic.includes('Cities')) {
        this.citiesArticles += '<h4 (click)="readMore(' + counter + ')">' + entry.headline + '</h4>';
      }
      else if (entry.topic.includes('People')) {
        this.peopleArticles += '<h4 (click)="readMore(' + counter + ')">' + entry.headline + '</h4>';
      }
      else {
        this.otherArticles += '<h4 (click)="readMore(' + counter + ')">' + entry.headline + '</h4>';
      }
      counter++;
    }
  }
  mainPage() {
    this.page = 0;
  }
}


