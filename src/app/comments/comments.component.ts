
import {Component, Input, OnInit} from '@angular/core';
import {RecordsService} from '../records.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  commentAuthor;
  @Input()
  comment;
  constructor(private myFirstService: RecordsService) {
  }
  ngOnInit() {
    console.log(this.comment);
    /*this.myFirstService.getUser(this.comment.author).subscribe( data => {
      this.commentAuthor = data;
    });*/
  }
}
