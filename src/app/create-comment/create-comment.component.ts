import {Component, Input, OnInit} from '@angular/core';
import {RecordsService} from '../records.service';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.scss']
})
export class CreateCommentComponent implements OnInit {
  allUsers;
  author = {
    'id': null,
    'email': '',
    'password': ''
  };
  createCommentObject = {
    'date': '',
    'author': '',
    'articleId': '1234',
    'text': ''
  };
  @Input()
  articleId;
  constructor(private myFirstService: RecordsService) {
    this.myFirstService.getAllUsers().subscribe(data => {
      this.allUsers = data;
    });
  }

  ngOnInit() {
  }
  createComment() {
    for (const user of this.allUsers) {
      if (user.email === this.author.email) {
        this.author.id = user._id;
      }
    }
    if (this.author.id != null) {
      this.myFirstService.login(this.author).subscribe(data1 => {
        // @ts-ignore
        if (data1.correctPassword) {
          this.upload();
        }
        else {
          console.log('login Failed'); // do something with the authentication error
        }
      });
    }
  }
  upload() {
    this.createCommentObject.author = this.author.id;
    this.createCommentObject.date = new Date().toISOString();
    this.createCommentObject.articleId = this.articleId;
    this.myFirstService.createComment(this.createCommentObject).subscribe(data => {
      console.log(data); // do something with the return value
    });
  }

}
