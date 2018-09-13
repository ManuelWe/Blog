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
  articleIndex;
  articlePicture;
  articleAuthorPicture;
  articleComments = [];

  constructor(private route: ActivatedRoute, private myFirstService: RecordsService) {
    this.myFirstService.getArticles().subscribe(data => {
      this.allArticles = data
      this.article = this.allArticles[this.articleIndex];
      this.articlePicture = 'https://mdbootstrap.com/img/Photos/Others/images/81.jpg';
      this.articleAuthorPicture = './assets/CyberEgg.jpg';
      this.myFirstService.getComments().subscribe(data1 => {
        this.allComments = data1;
        for (const comment of this.allComments) {
          if (comment.articleId === this.article._id) {
            this.articleComments.push(comment);
          }
        }
      });
    });
    this.route.params.subscribe(params => {
      this.articleIndex = +params['id'];
    });
  }
  ngOnInit() {
  }
}
