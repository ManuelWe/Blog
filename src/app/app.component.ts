import {Component, Injectable} from '@angular/core';
import {RecordsService} from './records.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
@Injectable()
export class AppComponent {
  allArticles;
  allUsers;
  errorText;
  httpResponse = '';
  regexp;

  registerObject = {
    'zipCode': null,
    'firstname': '',
    'password': '',
    'city': '',
    'streetNumber': null,
    'street': '',
    'email': '',
    'picture': null,
    'lastname': ''
  };

  constructor(private blogService: RecordsService) {
    this.blogService.getAllArticles().subscribe(data => {
      this.allArticles = data;
    });
    this.blogService.getAllUsers().subscribe(data => {
      this.allUsers = data;
    });
  }

  openErrorModal(error) {
    document.getElementById('errorMessage').innerHTML = error;
    const errorModal: HTMLElement = document.getElementById('showErrorModal') as HTMLElement;
    errorModal.click();
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
    this.blogService.register(this.registerObject).subscribe(data => {
    });
  }

  isValidEmail(): boolean {
    for (const user of this.allUsers) {
      if (user.email === this.registerObject.email) {
        return false;
      }
    }

    // tslint:disable-next-line:max-line-length
    this.regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return this.regexp.test(this.registerObject.email);
  }
}
