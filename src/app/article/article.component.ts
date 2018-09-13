import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RecordsService} from '../records.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  allArticles;
  allComments;
  article;
  articleId: string;
  articlePicture;
  articleAuthorPicture;
  articleComments = [];
  data2;

  constructor(private route: ActivatedRoute, private myFirstService: RecordsService) {
    this.route.params.subscribe(params => {
      this.articleId = params['id'].toString();
    });
    this.myFirstService.getArticles().subscribe(data => {
      this.allArticles = data;
      for (let entry of this.allArticles) {
        if (entry._id === this.articleId) {
          this.article = entry;
        }
      }
    });
    this.articlePicture = 'https://mdbootstrap.com/img/Photos/Others/images/81.jpg';
    this.articleAuthorPicture = './assets/CyberEgg.jpg';
    this.myFirstService.getComments().subscribe(data1 => {
      this.allComments = data1;
      for (const comment of this.allComments) {
        if (comment.articleId === this.articleId) {
          this.articleComments.push(comment);
        }
      }
    });
  }
  ngOnInit() {
  }
}
