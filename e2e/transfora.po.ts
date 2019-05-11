import { browser, by, element } from 'protractor';

export class Transfora {
  navigateTo() {
    return browser.getCurrentUrl();
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
    