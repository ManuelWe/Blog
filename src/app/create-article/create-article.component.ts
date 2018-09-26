import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RecordsService} from '../records.service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit {
  createArticleObject = {
    'headline': '',
    'topicString': '',
    'author': '',
    'topic': [],
    'text': '',
    'picture': '',
    'date': ''
};
  constructor(private route: ActivatedRoute, private myFirstService: RecordsService) {
    this.createArticleObject.author = this.route.snapshot.params['author'];
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
  upload() {
    this.createArticleObject.date = new Date().toISOString();
    this.createArticleObject.topic = this.createArticleObject.topicString.split(';');
    console.log(this.createArticleObject);
    this.myFirstService.register(this.createArticleObject).subscribe(data => {
      console.log(data); // do something with the return value
    });
  }
}
