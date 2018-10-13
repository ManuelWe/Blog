import {Component, Input, OnInit} from '@angular/core';
import {RecordsService} from '../records.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit {
  allUsers;
  author = {
    'id': null,
    'email': '',
    'password': ''
  };
  createArticleObject = {
    'headline': '',
    'author': '',
    'topic': [],
    'text': '',
    'picture': null,
    'date': ''
  };
  topicString;

  constructor(public blogService: RecordsService, private router: Router) {
      this.blogService.getAllUsers().subscribe(data => {
          this.allUsers = data;
      });
  }

  errorText;

  ngOnInit() {
  }

  onFileChanged(event) {
    const file: File = event.target.files[0];
    const myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.createArticleObject.picture = myReader.result;
    };
    myReader.readAsDataURL(file);
  }

  login() {
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
    this.createArticleObject.author = this.author.id;
    this.createArticleObject.date = new Date().toISOString();
    this.createArticleObject.topic = this.topicString.split(';');
    this.blogService.createArticle(this.createArticleObject).subscribe(data => {
      this.errorText = ''; // do something with the return value
      this.author.email = '';
      this.author.password = '';
      this.createArticleObject.headline = '';
      this.createArticleObject.text = '';
      this.createArticleObject.author = null;
      this.topicString = '';
      // @ts-ignore
      this.router.navigateByUrl('/article/' + data._id);
    });
    this.errorText = '';
  }
}
