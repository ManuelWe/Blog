import { Component } from '@angular/core';
import {RecordsService} from './records.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  page = 0; // mainPage = 0 articles = 1
  articleHeader;
  articlePicture;
  articleText;
  articleAuthor;
  articleAuthorPicture;
  articleDate;
  articleDateString;
  articleTopic;
  allArticles;
  article;
  constructor(private myFirstService: RecordsService) {
    this.myFirstService.getData().subscribe(data => {
      console.log(data);
      this.allArticles = data;
    });
  }
  readMore(id) {
    this.article = this.allArticles[id];
    this.articleHeader = this.article.headline;
    this.articlePicture = 'https://mdbootstrap.com/img/Photos/Others/images/81.jpg';
    this.articleText = this.article.text;
    this.articleAuthorPicture = './assets/CyberEgg.jpg';
    this.articleAuthor = this.article.author;
    this.articleDate = new Date(this.article.date);
    this.articleDateString = this.articleDate.getDate() + '/' + (this.articleDate.getMonth() + 1) + '/' + this.articleDate.getFullYear();
    this.articleTopic = this.article.topic.join(', ');
    this.page = 1;
  }
}
