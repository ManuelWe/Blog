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

  constructor(private blogService: RecordsService) {
  }

  ngOnInit() {
    this.blogService.getUser(this.comment.author).subscribe(data => {
      this.commentAuthor = data;
    });
  }
}
