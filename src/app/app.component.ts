import { Component } from '@angular/core';
import {RecordsService} from './records.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  allArticles;
  randomArticle = '';
  loggedIn: boolean;

  loginPassword = new FormControl('', Validators.email);
  loginEmail = new FormControl('', Validators.required);
  signupFormModalName = new FormControl('', Validators.required);
  signupFormModalEmail = new FormControl('', Validators.email);
  signupFormModalPassword = new FormControl('', Validators.required);

  constructor( private myFirstService: RecordsService) {
    this.myFirstService.getAllArticles().subscribe(data => {
      this.allArticles = data;
    });
  }
  setRandomArticle() {
    this.randomArticle = this.allArticles[Math.floor(Math.random() * (this.allArticles.length + 1))]._id;
  }
  login() {

    this.loggedIn = true;
  }
  logout() {
    this.loggedIn = false;
  }
}


