import {Component} from '@angular/core';
import {RecordsService} from './records.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Frontend-App';
  name = 'Jan';
  records = {};
  constructor(private myFirstService : RecordsService) {
  }
  ngOnInit() {
    this.records = this.myFirstService.getData();
  }
}


