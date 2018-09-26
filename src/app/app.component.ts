import { Component } from '@angular/core';
import {RecordsService} from './records.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  allArticles;
  allUsers;
  randomArticle = '';

  loginObject = {
    'email': ''/*Klaus@blog.com*/,
    'id': '',
    'password': ''/*Pa$$w0rd*/,
    'loggedIn': false
  };

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
  onFileChanged(event) {
    const file: File = event.target.files[0];
    const myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.registerObject.picture = myReader.result;
    };
    myReader.readAsDataURL(file);
  }
  setRandomArticle() {
    this.randomArticle = this.allArticles[Math.floor(Math.random() * (this.allArticles.length + 1))]._id;
  }
  login() {
    this.myFirstService.getAllUsers().subscribe(data => {
      this.allUsers = data;
    });
    for (const user of this.allUsers) {
      if (user.email === this.loginObject.email) {
        this.loginObject.id = user._id;
      }
    }
    if (this.loginObject != null) {
      this.myFirstService.login(this.loginObject).subscribe(data => {
        // @ts-ignore
        this.loginObject.loggedIn = data.correctPassword;
      });
    }
  }
  logout() {
    this.loginObject.id = null;
    this.loginObject.email = null;
    this.loginObject.password = null;
    this.loginObject.loggedIn = false;
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


