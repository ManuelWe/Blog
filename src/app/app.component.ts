import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  allArticles;
  article;
  constructor() {
  }
  randomArticle() {
    Math.floor(Math.random() * (this.allArticles.length + 1));
  }
}


