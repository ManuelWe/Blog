import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CreateArticleComponent} from './create-article.component';
import {AppComponent} from '../app.component';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {RecordsService} from '../records.service';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from '../main-page/main-page.component';
import {ArticleComponent} from '../article/article.component';
import {AllarticlesComponent} from '../allarticles/allarticles.component';
import {APP_BASE_HREF} from '@angular/common';
import {CommentsComponent} from '../comments/comments.component';
import {CreateCommentComponent} from '../create-comment/create-comment.component';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';

describe('CreateArticleComponent', () => {
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
    let component: CreateArticleComponent;
    let fixture: ComponentFixture<CreateArticleComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
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
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA,
                NO_ERRORS_SCHEMA
            ],
            providers: [
                RecordsService,
                {provide: APP_BASE_HREF, useValue : '/' }
            ],
            imports: [
                BrowserModule,
                FormsModule,
                HttpClientModule,
                MDBBootstrapModule.forRoot(),
                RouterModule.forRoot(routes)
            ]
        }).compileComponents();
    }));

    beforeEach( () => {
        fixture = TestBed.createComponent(CreateArticleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
