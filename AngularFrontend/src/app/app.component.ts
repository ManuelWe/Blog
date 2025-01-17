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
    httpResponse = '';
    regexp;

    inputObject = {
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
            this.inputObject.picture = myReader.result;
        };
        myReader.readAsDataURL(file);
    }

    register() {
        this.registerObject = this.inputObject;
        this.inputObject = {
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
        this.blogService.getAllUsers().subscribe(data => {
            this.allUsers = data;
        });
        if (!this.isValidEmail()) {
            this.openErrorModal('Register failed: E-mail is not valid');
            return;
        }
        if (this.emailTaken()) {
            this.openErrorModal('Register failed: E-mail is already registered');
            return;
        }
        if (this.registerObject.password.length < 8) {
            this.openErrorModal('Register failed: Password must be at least 8 characters');
            return;
        }
        if (this.registerObject.zipCode == null) {
            delete this.registerObject.zipCode;
        }
        if (this.registerObject.streetNumber == null) {
            delete this.registerObject.streetNumber;
        }
        if (this.registerObject.street === '') {
            delete this.registerObject.street;
        }
        if (this.registerObject.city === '') {
            delete this.registerObject.city;
        }
        this.blogService.register(this.registerObject).subscribe(data => {
            // @ts-ignore
            if (data.email === this.registerObject.email) {
                this.openErrorModal('Register successful');
                const registerModal: HTMLElement = document.getElementById('closeRegisterModal') as HTMLElement;
                registerModal.click();
            }
        });
    }

    emailTaken(): boolean {
        for (const user of this.allUsers) {
            if (user.email.toLowerCase() === this.registerObject.email.toLowerCase()) {
                return true;
            }
        }
        return false;
    }

    isValidEmail(): boolean {
        // tslint:disable-next-line:max-line-length
        this.regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        return this.regexp.test(this.registerObject.email);
    }
}
