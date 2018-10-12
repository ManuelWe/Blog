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

        component.author.email = 'Jan@email.com';
        component.author.password = 'Pa$$w0rd';
        component.topicString = 'Topic1;Topic2;Topic3';
        component.createArticleObject = {
            author: null,
            date: '2018-10-11',
            headline: 'Headline',
            // tslint:disable-next-line:max-line-length
            picture: 'data:image/jpeg;base64,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',
            text: 'TestTextTestText',
            topic: []
        };
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    /*it('should login', () => {
        component.blogService.getAllUsers().subscribe(data => {
            component.allUsers = data;
            component.login();
            expect(component.errorText).toBe('');
        });
    });*/

   /* it('should not login because e-mail is wrong', () => {
        component.author.email = 'NotAvalidEmail';
        component.blogService.getAllUsers().subscribe(data => {
            component.allUsers = data;
            component.login();
            expect(component.author.id).toBe(null);
        });
    });

    it('should not login because password is wrong', () => {
        component.author.password = 'NotValidPassword';
        component.blogService.getAllUsers().subscribe(data => {
            component.allUsers = data;
            component.login();
            expect(component.author.id).toBe(!null);
            expect(component.errorText).toBe('Authentication failed: E-Mail or password incorrect');
        });
    });*/

    /*it('should upload a article', () => {
        component.author.email = 'Jan@email.com';
        component.author.password = 'Pa$$w0rd';
        component.upload();
        expect(component.errorText).toBe('');
    });*/

    afterEach ( () => {
        component.author.email = '';
        component.author.password = '';
        component.author.id = null;
        // component.allUsers = null;
        component.topicString = '';
        component.createArticleObject = {
            author: '',
            date: '',
            headline: '',
            picture: '',
            text: '',
            topic: []
        };
    });
});
