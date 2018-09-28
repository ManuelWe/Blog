import {Component, Input, OnInit} from '@angular/core';
import {RecordsService} from '../records.service';

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
    'picture': '',
    'date': ''
};
  topicString;
  constructor(private myFirstService: RecordsService) {
    this.myFirstService.getAllUsers().subscribe(data => {
      this.allUsers = data;
    });
  }
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
    this.createArticleObject.author = this.author.id;
    this.createArticleObject.date = new Date().toISOString();
    this.createArticleObject.topic = this.topicString.split(';');
    this.myFirstService.createArticle(this.createArticleObject).subscribe(data => {
      console.log(data); // do something with the return value
    });
  }
}
