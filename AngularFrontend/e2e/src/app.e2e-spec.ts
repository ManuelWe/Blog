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
    element(by.id('article1Headline')).getText().then(function(text) {
      element(by.id('readMoreBtn1')).click();
      expect(element(by.id('articleHeadline')).getText()).toEqual(text);
    });
  });
});
