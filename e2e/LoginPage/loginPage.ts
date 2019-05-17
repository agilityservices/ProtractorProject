import { browser, element, by, promise } from 'protractor';
import { InboxPage } from '../Inbox/inboxPage';
import { BasePageObjects } from '../basePageObjects';

export class LoginPage extends BasePageObjects {

     txtEmail = element(by.model('$ctrl.loginInfo.email')); // byModel("");
     txtPassword = element(by.model('$ctrl.loginInfo.password')); // byId("");
     btnSignin = element(by.buttonText('SIGN IN'));
   

    async enterUsername(userName: string) {
        let usernameInput = await element(by.model('$ctrl.loginInfo.email'));
        await usernameInput.sendKeys(userName);
    }

    async enterPassword(password: string) {
        let passwordInput = await element(by.model('$ctrl.loginInfo.password'));
        await passwordInput.sendKeys(password);
    }

    async submit(): Promise<InboxPage> {
        await this.btnSignin.click();
        var inbox =await new InboxPage();
        await inbox.waitUntilPageLoad();
        return inbox;
    }

    
}

