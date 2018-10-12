import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RecordsService} from '../records.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  article;
  successText;
  errorText;
  user;
  allUsers;
  articleId: string;
  comments;
  author = {
    'id': null,
    'email': '',
    'password': ''
  };

  constructor(private route: ActivatedRoute, private blogService: RecordsService, private router: Router) {
      this.blogService.getAllUsers().subscribe( data => {
          this.allUsers = data;
      });
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

  login() {
    console.log(this.allUsers);
    this.successText = '';

    for (const user of this.allUsers) {
        if (user.email === this.author.email) {
            this.user.id = user._id;
        }
    }
    console.log(this.author.email);
    console.log(this.user.email);
    console.log(this.user.id);
    if (this.user.email === this.author.email) {
        this.author.id = this.user.id;
    }
    if (this.author.id != null) {
        this.blogService.login(this.author).subscribe(data1 => {
            // @ts-ignore
            if (data1.correctPassword) {
                this.deleteArticle();
            } else {
                console.log("I fail here");
                this.errorText = 'Authentication failed: E-Mail or password incorrect';
            }
        });
    } else {
        console.log("I fail here 1");
        this.errorText = 'Authentication failed: E-Mail or password incorrect';
    }
  }
  deleteArticle() {
      this.blogService.deleteArticle(this.articleId).subscribe( data => {
        console.log(data);
      });
      // this.router.navigate(['index']);
  }
}
