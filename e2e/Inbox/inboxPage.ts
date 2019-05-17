import { BasePageObjects } from '../basePageObjects';

import { by, element, browser, ExpectedConditions } from 'protractor';

export class InboxPage extends BasePageObjects {
    //This is inbox page
    getInboxMenuIcon = element(by.className('Inbox active'));
   



    async waitUntilPageLoad() {
        return  await browser.wait( ExpectedConditions.visibilityOf(this.getInboxMenuIcon));
    }

}       