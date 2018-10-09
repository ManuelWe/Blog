import { AppPage } from './app.po';
import {by, element} from 'protractor';

describe('test tests', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('About this blog');
  });

  it('should display correct article', () => {
    element(by.id('articleHeader')).getText().then(function(text) {
      console.log(text);
      element(by.id('readMoreBtn')).click();
      expect(element(by.id('articleHeader')).getText()).toEqual(text);
    });
  });
});
