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
  errorText;
  regexp;
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
  register() {
    this.errorText = '';
    if (!this.isValidEmail()) {
      this.errorText = 'Register failed: E-mail is not valid';
      return;
    }
    if (this.registerObject.password.length < 8) {
      this.errorText = 'Register failed: Password must be at least 8 characters';
      return;
    }
    this.myFirstService.register(this.registerObject).subscribe(data => {
      console.log(data); // do something with the return value
    });
  }

  isValidEmail(): boolean {
    for (const user of this.allUsers) {
      if (user.email === this.registerObject.email) {
        return false;
      }
    }
    this.regexp = new RegExp('/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@' +
        '((\[[0-9]{1, 3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/');
    return this.regexp.test(this.registerObject.email);
  }
}


