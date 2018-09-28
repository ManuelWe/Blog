import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {HttpClientModule} from '@angular/common/http';
import {RecordsService} from './records.service';
import { RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { MainPageComponent } from './main-page/main-page.component';
import { ArticleComponent } from './article/article.component';
import { AllarticlesComponent } from './allarticles/allarticles.component';
import { CommentsComponent } from './comments/comments.component';
import { CreateArticleComponent } from './create-article/create-article.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  {
    path: 'index',
    component: MainPageComponent
  },
  {
    path: 'article/:id',
    component: ArticleComponent
  },
  {
    path: 'allArticles',
    component: AllarticlesComponent
  },
  {
    path: 'createArticle',
    component: CreateArticleComponent,
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ArticleComponent,
    AllarticlesComponent,
    CommentsComponent,
    CreateArticleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [RecordsService],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ],
})
export class AppModule { }
