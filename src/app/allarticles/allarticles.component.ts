import { Component, OnInit } from '@angular/core';
import {RecordsService} from '../records.service';

@Component({
  selector: 'app-allarticles',
  templateUrl: './allarticles.component.html',
  styleUrls: ['./allarticles.component.scss']
})
export class AllarticlesComponent implements OnInit {
  allArticles;
  natureArticles = [];
  citiesArticles = [];
  peopleArticles = [];
  otherArticles = [];
  constructor(private myFirstService: RecordsService) {
    this.myFirstService.getArticles().subscribe(data => {
      this.allArticles = data;
      for (let article of this.allArticles) {
        if (article.topic.includes('Nature')) {
          this.natureArticles.push(article);
        }
        else if (article.topic.includes('Cities')) {
          this.citiesArticles.push(article);
        }
        else if (article.topic.includes('People')) {
          this.peopleArticles.push(article);
        }
        else {
          this.otherArticles.push(article);
        }
      }
    });
  }

  ngOnInit() {
  }

}
