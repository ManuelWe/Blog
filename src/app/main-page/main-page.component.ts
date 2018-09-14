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
  constructor(private route: ActivatedRoute, private myFirstService: RecordsService) {
    this.myFirstService.getAllArticles().subscribe(data => {
      this.allArticles = data;
      this.articles.push(this.allArticles[0]);
      this.articles.push(this.allArticles[1]);
      this.articles.push(this.allArticles[2]);
      this.myFirstService.getUser(this.articles[0].author).subscribe(data1 => {
        this.authors.push(data1);
      });
      this.myFirstService.getUser(this.articles[1].author).subscribe(data1 => {
        this.authors.push(data1);
      });
      this.myFirstService.getUser(this.articles[2].author).subscribe(data1 => {
        this.authors.push(data1);
      });
    });
  }
  ngOnInit() {
  }
}
/*this.myFirstService.getArticle('5b9ba476305e3d1dd8781615').subscribe(data => {
      this.articles.push(data);
    });
    this.myFirstService.getArticle('5b9ba4c9305e3d1dd8781616').subscribe(data => {
      this.articles.push(data);
    });
    this.myFirstService.getArticle('5b9ba595305e3d1dd8781618').subscribe(data => {
      this.articles.push(data);
    });
    this.myFirstService.getUser(this.articles[0].author).subscribe(data => {
      this.authors.push(data);
    });
    this.myFirstService.getUser(this.articles[1].author).subscribe(data => {
      this.authors.push(data);
    });
    this.myFirstService.getUser(this.articles[2].author).subscribe(data => {
      this.authors.push(data);
    });*/
