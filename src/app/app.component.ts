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
  articleDateString;
  articleTopic;
  articleComments;
  allArticles = [{
    topic: [],
    _id: '',
    date: '',
    author: '',
    text: '',
    headline: ''},
    {
      topic: [],
      _id: '',
      date: '',
      author: '',
      text: '',
      headline: ''},
    {
      topic: [],
      _id: '',
      date: '',
      author: '',
      text: '',
      headline: ''}];
  article;
  allComments;
  constructor(private myFirstService: RecordsService) {
    this.myFirstService.getArticles().subscribe(data => {
      console.log(data);
      this.allArticles = data;
    });
    this.myFirstService.getComments().subscribe(data => {
      console.log(data);
      this.allComments = data;
    });
  }
  randomArticle() {
    this.readMore(Math.floor(Math.random() * (this.allArticles.length + 1)));
  }
  showAllArticles() {
    this.page = 2;
  }
  readMore(id) {
    this.article = this.allArticles[id];
    this.articleId = this.article._id;
    this.articleHeader = this.article.headline;
    this.articlePicture = 'https://mdbootstrap.com/img/Photos/Others/images/81.jpg';
    this.articleText = this.article.text;
    this.articleAuthorPicture = './assets/CyberEgg.jpg';
    this.articleAuthor = this.article.author;
    this.articleDate = new Date(this.article.date);
    this.articleDateString = this.articleDate.getDate() + '/' + (this.articleDate.getMonth() + 1) + '/' + this.articleDate.getFullYear();
    this.articleTopic = this.article.topic.join(', ');
    this.page = 1;

    /*console.log(this.allComments);
    console.log(this.articleId);*/
    this.articleComments = '';
    for (const entry of this.allComments) {
      /*console.log('Start');
      console.log(entry.articleId);
      console.log(this.articleId);
      console.log(entry);
      console.log('End');*/
      if (entry.articleId === this.articleId) {
        this.articleComments += '<div class="row comments">' +
          '          <div class="label col-2">' +
          '            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(17)-mini.jpg" class="rounded-circle z-depth-1-half"/>' +
          '          </div>' +
          '          <div class="label col-9">' +
          '            <div class="author">' +
          '              <a class="font-weight-bold dark-grey-text">' + entry.author + '</a> ' + entry.date +
          '            </div>' +
          '            <div class="comment">' +
          '              <a class="name">' + entry.text + '</a>' +
          '            </div>' +
          '          </div>' +
          '        </div>';
      }
    }
  }
  mainPage() {
    this.page = 0;
  }
}
