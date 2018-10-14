import {Component, Input, OnInit} from '@angular/core';
import {RecordsService} from '../records.service';

@Component({
    selector: 'app-create-comment',
    templateUrl: './create-comment.component.html',
    styleUrls: ['./create-comment.component.scss']
})
export class CreateCommentComponent implements OnInit {
    errorText;
    successText;
    allUsers;
    author = {
        'id': null,
        'email': '',
        'password': ''
    };
    createCommentObject = {
        'date': '',
        'author': null,
        'articleId': null,
        'text': ''
    };
    @Input()
    articleId;

    constructor(public blogService: RecordsService) {
        this.blogService.getAllUsers().subscribe(data => {
            this.allUsers = data;
        });
    }

    ngOnInit() {
    }

    login() {
        this.successText = '';
        for (const user of this.allUsers) {
            if (user.email === this.author.email) {
                this.author.id = user._id;
            }
        }
        if (this.author.id != null) {
            this.blogService.login(this.author).subscribe(data1 => {
                // @ts-ignore
                if (data1.correctPassword) {
                    this.upload();
                } else {
                    this.errorText = 'Authentication failed: E-Mail or password incorrect';
                }
            });
        } else {
            this.errorText = 'Authentication failed: E-Mail or password incorrect';
        }
    }

    upload() {
        this.createCommentObject.author = +this.author.id;
        this.createCommentObject.date = new Date().toISOString();
        this.createCommentObject.articleId = +this.articleId;
        this.blogService.createComment(this.createCommentObject).subscribe(data => {
            this.errorText = ''; // do something with the return value
            this.author.email = '';
            this.author.password = '';
            this.createCommentObject = {
                'date': '',
                'author': '',
                'articleId': '',
                'text': ''
            };
            location.reload();
        });
        this.errorText = '';
    }

}
