import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  name = 'Manuel';
  user;

  buttonClick() {
    this.user = 'Jan';
  }
}
