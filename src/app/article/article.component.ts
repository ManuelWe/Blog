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
  user;
  articleId: string;
  comments;

  constructor(private route: ActivatedRoute, private myFirstService: RecordsService) {
    console.log('Hello world');
    this.route.params.subscribe(params => {
      this.articleId = params['id'].toString();
    });
    this.myFirstService.getComments(this.articleId).subscribe(data => {
      this.comments = data;
      console.log(this.comments);
    });
    console.log(this.articleId);
    /*this.myFirstService.getArticle(this.articleId).subscribe(data => {
      this.article = data;
      console.log(this.article.author);
      this.myFirstService.getUser(this.article.author).subscribe(data1 => {
        this.user = data1;
      });
    });*/
  }
  ngOnInit() {
  }
}
