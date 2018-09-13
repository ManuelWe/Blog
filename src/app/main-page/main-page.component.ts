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
  mainPageArticles = [];
  constructor(private route: ActivatedRoute, private myFirstService: RecordsService) {
    this.myFirstService.getArticles().subscribe(data => {
      this.allArticles = data;
      this.mainPageArticles.push(this.allArticles[0]);
      this.mainPageArticles.push(this.allArticles[1]);
      this.mainPageArticles.push(this.allArticles[2]);
    });
  }

  ngOnInit() {
  }

}
