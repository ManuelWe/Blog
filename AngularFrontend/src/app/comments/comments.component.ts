import {Component, Input, OnInit} from '@angular/core';
import {RecordsService} from '../records.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  @Input()
  comment;
  commentAuthor;

  allUsers;
  errorText;
  author = {
        'id': null,
        'email': '',
        'password': ''
  };

  constructor(private blogService: RecordsService) {
      this.blogService.getAllUsers().subscribe( data => {
          this.allUsers = data;
      });
  }

  ngOnInit() {
      this.blogService.getUser(this.comment.author).subscribe(data => {
          this.commentAuthor = data;
      });
  }

  login() {
      this.errorText = '';
        if (this.commentAuthor.email === this.author.email) {
            this.author.id = this.commentAuthor._id;
        }
        if (this.author.id != null) {
            this.blogService.login(this.author).subscribe(data1 => {
                // @ts-ignore
                if (data1.correctPassword) {
                    this.deleteComment();
                } else {
                    this.errorText = 'Authentication failed: E-Mail or password incorrect';
                }
            });
        } else {
            this.errorText = 'Authentication failed: E-Mail or password incorrect';
        }
    }
    deleteComment() {
        this.blogService.deleteComment(this.comment._id).subscribe( data => {
            console.log(data);
        });
        location.reload();
    }
}
