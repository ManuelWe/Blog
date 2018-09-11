import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http';
import {RecordsService} from './records.service';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [RecordsService],
  bootstrap: [AppComponent, NavbarComponent, FooterComponent],
  schemas: [ NO_ERRORS_SCHEMA ],
})
export class AppModule { }
