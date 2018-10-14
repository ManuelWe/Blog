import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RecordsService} from '../records.service';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
    allArticles;
    articlesId = [];
    articles = [];
    authors = [];

    constructor(private route: ActivatedRoute, private blogService: RecordsService) {
        this.blogService.getAllArticles().subscribe(data => {
            this.allArticles = data;
            try {
                this.articlesId.push(this.allArticles[0]._id);
                this.articlesId.push(this.allArticles[1]._id);
                this.articlesId.push(this.allArticles[2]._id);
            } catch (err) {
                throw new Error('Less than three articles');
            }
            this.blogService.getArticle(this.articlesId[0]).subscribe(data1 => {
                // @ts-ignore
                this.articles.push(data1);
                // @ts-ignore
                this.blogService.getUser(data1.author).subscribe(data2 => {
                    this.authors.push(data2);
                });
            });
            this.blogService.getArticle(this.articlesId[1]).subscribe(data1 => {
                // @ts-ignore
                this.articles.push(data1);
                // @ts-ignore
                this.blogService.getUser(data1.author).subscribe(data2 => {
                    this.authors.push(data2);
                });
            });
            this.blogService.getArticle(this.articlesId[2]).subscribe(data1 => {
                // @ts-ignore
                this.articles.push(data1);
                // @ts-ignore
                this.blogService.getUser(data1.author).subscribe(data2 => {
                    this.authors.push(data2);
                });
            });


        });
    }

    ngOnInit() {
    }
}
