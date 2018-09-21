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

  registerObject  = {
    'zipCode': null,
    'firstname': '',
    'password': '',
    'city': '',
    'streetNumber': null,
    'street': '',
    'email': '',
    'picture': '',
    'lastname': ''
  };

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
  getLoginPassword(loginPassword1) {
    this.loginPassword = loginPassword1;
  }
  getLoginEmail(loginEmail) {
    this.loginEmail = loginEmail;
  }
  login() {
    this.myFirstService.getAllUsers().subscribe(data => {
      this.allUsers = data;
    });
    for (const user of this.allUsers) {
      if (user.email === this.loginEmail) {
        this.loginUserId = user._id;
      }
    }
    if (this.loginUserId != null) {
      this.myFirstService.login(this.loginUserId, this.loginPassword).subscribe(data => {
        // @ts-ignore
        this.loggedIn = data.correctPassword;
      });
    }
  }
  logout() {
    /*this.loginEmail = '';
    this.loginPassword = '';*/
    this.loginUserId = null;
    this.loggedIn = false;
  }
  getRegisterZipcode(registerZipcode) {
    this.registerObject.zipCode = +registerZipcode;
  }
  getRegisterFirstname(registerFirstname) {
    this.registerObject.firstname = registerFirstname;
  }
  getRegisterPassword(registerPassword) {
    this.registerObject.password = registerPassword;
  }
  getRegisterCity(registerCity) {
    this.registerObject.city = registerCity;
  }
  getRegisterStreetNumber(registerStreetNumber) {
    this.registerObject.streetNumber = +registerStreetNumber;
  }
  getRegisterStreet(registerStreet) {
    this.registerObject.street = registerStreet;
  }
  getRegisterEmail(registerEmail) {
    this.registerObject.email = registerEmail;
  }
  getRegisterPicture(registerPicture) {
    this.registerObject.picture = registerPicture;
  }
  getRegisterLastname(registerLastname) {
    this.registerObject.lastname = registerLastname;
  }
  register() {
    for (const user of this.allUsers) {
      /*if (user.email === this.loginEmail) {
        return; // do a e-mail validation here
      }*/
    }
    this.myFirstService.register(this.registerObject).subscribe(data => {
      console.log(data); // do something with the return value
    });
  }
}


