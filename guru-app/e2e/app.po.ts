import { browser, element, by } from 'protractor';

export class GuruAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('guru-root h1')).getText();
  }
}
