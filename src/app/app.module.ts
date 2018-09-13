import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {HttpClientModule} from '@angular/common/http';
import {RecordsService} from './records.service';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './main-page/main-page.component';
import { ArticleComponent } from './article/article.component';
import { AllarticlesComponent } from './allarticles/allarticles.component';
import { CommentsComponent } from './comments/comments.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'events',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'article/:id',
    component: ArticleComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    MainPageComponent,
    ArticleComponent,
    AllarticlesComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [RecordsService],
  bootstrap: [AppComponent, FooterComponent/*, NavbarComponent*/],
  schemas: [ NO_ERRORS_SCHEMA ],
})
export class AppModule { }
