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
  allUsers;
  randomArticle = '';

  loggedIn: boolean;
  loginEmail /*= 'bernd@blog.com'*/;
  loginPassword /*= 'Pa$$w0rd'*/;
  loginUserId;

  registerObject;
  registerFirstname;
  registerLastname;
  registerEmail;
  registerCity;
  registerZipcode;
  registerStreet;
  registerStreetnumber;
  registerPicture;
  registerPassword;


  signupFormModalName = new FormControl('', Validators.required);
  signupFormModalEmail = new FormControl('', Validators.email);
  signupFormModalPassword = new FormControl('', Validators.required);

  constructor( private myFirstService: RecordsService) {
    this.myFirstService.getAllArticles().subscribe(data => {
      this.allArticles = data;
    });
    this.myFirstService.getAllUsers().subscribe(data => {
      this.allUsers = data;
    });
  }
  setRandomArticle() {
    this.randomArticle = this.allArticles[Math.floor(Math.random() * (this.allArticles.length + 1))]._id;
  }
  login() {
    for (let user of this.allUsers) {
      if (user.email === this.loginEmail) {
        this.loginUserId = user._id;
      }
    }
    this.myFirstService.login(this.loginUserId, this.loginPassword).subscribe(data => {
      // @ts-ignore
      this.loggedIn = data.correctPassword;
    });
  }
  getLoginPassword(loginPassword1) {
    this.loginPassword = loginPassword1;
  }
  getLoginEmail(loginEmail) {
    this.loginEmail = loginEmail;
  }
  logout() {
    this.loginEmail = '';
    this.loginPassword = '';
    this.loginUserId = '';
    this.loggedIn = false;
  }
  register() {
    for (let user of this.allUsers) {
      if (user.email === this.loginEmail) {
        return; // do a e-mail validation here
      }
    }
    this.registerObject = {
      "zipCode": this.registerZipcode,
      "firstname": this.registerFirstname,
      "password": this.registerPassword,
      "city": this.registerCity,
      "streetNumber": this.registerStreetnumber,
      "street": this.registerStreet,
      "email": this.registerEmail,
      "picture": this.registerPicture,
      "lastname": this.registerLastname
    }
    this.myFirstService.register(this.registerObject);
  }
}


