import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RecordsService} from '../records.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  allArticles;
  articles = [];
  authors = [];
  pictures = [];
  constructor(private route: ActivatedRoute, private blogService: RecordsService) {
    this.blogService.getAllArticles().subscribe(data => {
      this.allArticles = data;
      this.articles.push(this.allArticles[0]);
      this.articles.push(this.allArticles[1]);
      this.articles.push(this.allArticles[2]);
      this.blogService.getUser(this.articles[0].author).subscribe(data1 => {
        this.authors.push(data1);
      });
      this.blogService.getUser(this.articles[1].author).subscribe(data1 => {
        this.authors.push(data1);
      });
      this.blogService.getUser(this.articles[2].author).subscribe(data1 => {
        this.authors.push(data1);
      });
      this.blogService.getArticle(this.articles[0]._id).subscribe( data1 => {
        // @ts-ignore
        this.pictures.push(data1.picture);
      });
      this.blogService.getArticle(this.articles[1]._id).subscribe(data1 => {
        // @ts-ignore
        this.pictures.push(data1.picture);
      });
      this.blogService.getArticle(this.articles[2]._id).subscribe(data1 => {
        // @ts-ignore
        this.pictures.push(data1.picture);
      });
    });
  }
  ngOnInit() {
  }
}
