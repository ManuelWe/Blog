import {AppComponent} from './app.component';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {RecordsService} from './records.service';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {ArticleComponent} from './article/article.component';
import {AllarticlesComponent} from './allarticles/allarticles.component';
import {CreateArticleComponent} from './create-article/create-article.component';
import {CreateCommentComponent} from './create-comment/create-comment.component';
import {CommentsComponent} from './comments/comments.component';
import {APP_BASE_HREF} from '@angular/common';


describe('AppComponent', () => {
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
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async( () => {
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
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should verify an e-mail', () => {
        component.registerObject.email = 'Klaus@blog.com';
        component.allUsers = [];
        expect(component.isValidEmail()).toBeTruthy();
    });

    it('should falsify an wrong e-mail', () => {
        component.registerObject.email = 'NotValidEmail';
        component.allUsers = [];
        expect(component.isValidEmail()).toBeFalsy();
    });
});
