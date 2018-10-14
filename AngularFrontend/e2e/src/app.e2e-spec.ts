import {AppPage} from './app.po';
import {by, element} from 'protractor';
import * as path from 'path';


describe('Basic User Actions', () => {
    let page: AppPage;
    const fileToUpload = '../../src/assets/Logo.png',
        absolutePath = path.resolve(__dirname, fileToUpload);
    // email has to be unique
    const userEmail = 'Hans' + Math.floor(Math.random() * 999) + 1 + '@Dieters.com';
    const userPassword = 'Pa$$w0rd';

    beforeEach(() => {
        page = new AppPage();
    });

    it('should display welcome message', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('Welcome to our Blog!');
    });

    it('should display correct article', () => {
        element(by.id('article1Headline')).getText().then(function (text) {
            element(by.id('readMoreBtn1')).click();
            expect(element(by.id('articleHeadline')).getText()).toEqual(text);
        });
    });

    it('should display correct article categories', () => {
        element(by.id('allArticlesBtn')).click();
        expect(element(by.id('categorie1')).getText()).toEqual('Nature');
        expect(element(by.id('categorie2')).getText()).toEqual('Cities');
        expect(element(by.id('categorie3')).getText()).toEqual('People');
    });

    it('should create a user', () => {
        element(by.id('registerBtn')).click();
        element(by.id('firstnameField')).sendKeys('Hans');
        element(by.id('lastnameField')).sendKeys('Dieters');
        element(by.id('emailField')).sendKeys(userEmail);
        element(by.id('passwordField')).sendKeys(userPassword);

        element(by.css('input[type="file"]')).sendKeys(absolutePath);
        element(by.id('createUserBtn')).click();

        element(by.id('closeBtn')).click();
    });

    it('should create an article', () => {
        element(by.id('createArticleBtn')).click();

        element(by.id('headlineField')).sendKeys('End to End Tests are great!');
        element(by.id('topicField')).sendKeys('Nature');
        element(by.id('textField')).sendKeys('Bla bla bla......');
        element(by.id('emailField')).sendKeys(userEmail);
        element(by.id('passwordField')).sendKeys(userPassword);

        element(by.css('input[type="file"]')).sendKeys(absolutePath);
        element(by.id('createBtn')).click();

        expect(element(by.id('articleHeadline')).getText()).toEqual('End to End Tests are great!');
    });

    it('should delete an article', () => {
        element(by.id('deleteArticleBtn')).click();

        element(by.id('emailField')).sendKeys(userEmail);
        element(by.id('passwordField')).sendKeys(userPassword);

        element(by.id('deleteBtn')).click();

        expect(page.getParagraphText()).toEqual('Welcome to our Blog!');
    });
});

