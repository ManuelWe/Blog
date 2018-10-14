import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {ErrorHandler, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {HttpClientModule} from '@angular/common/http';
import {RecordsService} from './records.service';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {MainPageComponent} from './main-page/main-page.component';
import {ArticleComponent} from './article/article.component';
import {AllarticlesComponent} from './allarticles/allarticles.component';
import {CommentsComponent} from './comments/comments.component';
import {CreateArticleComponent} from './create-article/create-article.component';
import {CreateCommentComponent} from './create-comment/create-comment.component';
import {ErrorsHandler} from './errorHandler.service';
import {NgProgressModule} from '@ngx-progressbar/core';
import {NgProgressHttpModule} from '@ngx-progressbar/http';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

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
    },
    {
        path: 'not-found',
        component: PageNotFoundComponent
    },
    {
        path: '**',
        redirectTo: 'not-found',
    }
];

@NgModule({
    declarations: [
        AppComponent,
        MainPageComponent,
        ArticleComponent,
        AllarticlesComponent,
        CommentsComponent,
        CreateArticleComponent,
        CreateCommentComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        NgProgressModule.forRoot(),
        NgProgressHttpModule.forRoot(),
        MDBBootstrapModule.forRoot(),
        RouterModule.forRoot(routes)
    ],
    providers: [RecordsService,
        AppComponent,
        {
            provide: ErrorHandler,
            useClass: ErrorsHandler
        }],
    bootstrap: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {
}
