import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RecordsService} from '../records.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  article;
  articleId: string;
  articlePicture;
  articleAuthorPicture;
  articleComments;

  constructor(private route: ActivatedRoute, private myFirstService: RecordsService) {
    this.route.params.subscribe(params => {
      this.articleId = params['id'].toString();
    });
    this.myFirstService.getArticle(this.articleId).subscribe(data => {
      this.article = data;
    });
    this.articlePicture = 'https://mdbootstrap.com/img/Photos/Others/images/81.jpg';
    this.articleAuthorPicture = './assets/CyberEgg.jpg';
    this.myFirstService.getComments(this.articleId).subscribe(data => {
      this.articleComments = data;
    });
  }
  ngOnInit() {
  }
}
