import {Component, OnInit} from '@angular/core';
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

  constructor(private route: ActivatedRoute, private blogService: RecordsService) {
    this.route.params.subscribe(params => {
      this.articleId = params['id'].toString();
    });
    this.blogService.getArticle(this.articleId).subscribe(data => {
      this.article = data;
      this.blogService.getUser(this.article.author).subscribe(data1 => {
        this.user = data1;
      });
    });
    this.blogService.getComments(this.articleId).subscribe(data => {
      this.comments = data;
    });
  }

  ngOnInit() {
  }
}
