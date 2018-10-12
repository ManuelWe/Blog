import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CreateCommentComponent} from './create-comment.component';
import {AppComponent} from '../app.component';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {RecordsService} from '../records.service';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from '../main-page/main-page.component';
import {ArticleComponent} from '../article/article.component';
import {AllarticlesComponent} from '../allarticles/allarticles.component';
import {CreateArticleComponent} from '../create-article/create-article.component';
import {CommentsComponent} from '../comments/comments.component';
import {APP_BASE_HREF} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

describe('CreateCommentComponent', () => {
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
    let component: CreateCommentComponent;
    let fixture: ComponentFixture<CreateCommentComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                MainPageComponent,
                ArticleComponent,
                AllarticlesComponent,
                CommentsComponent,
                CreateArticleComponent,
                CreateCommentComponent
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
        fixture = TestBed.createComponent(CreateCommentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        component.author.email = 'Klaus@blog.com';
        component.author.password = 'Pa$$w0rd';
        component.createCommentObject = {
            'date': '',
            'author': '',
            'articleId': '5b9ba476305e3d1dd8781615',
            'text': 'TestTextTestText'
        };
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should login', () => {
        component.blogService.getAllUsers().subscribe(data => {
            component.allUsers = data;
            component.login();
            expect(component.errorText).toBe('');
        });
    });

    it('should not login because e-mail is wrong', () => {
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
    });

    it('should upload a article', () => {
        component.author.email = 'Klaus@blog.com';
        component.author.password = 'Pa$$w0rd';
        component.upload();
        expect(component.errorText).toBe('');
    });

    afterEach ( () => {
        component.author.email = '';
        component.author.password = '';
        component.author.id = '';
        // component.allUsers = null;
        component.createCommentObject = {
            'date': '',
            'author': '',
            'articleId': '',
            'text': ''
        };
    });
});
