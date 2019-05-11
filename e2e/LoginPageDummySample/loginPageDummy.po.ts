import { browser, element, by, promise } from 'protractor';
import { inboxPage } from '../Inbox/inboxPage.po';

export class LoginPageDummy {
    
    public txtEmail = element(by.model('$ctrl.loginInfo.email'));
    public txtPassword = element(by.model('$ctrl.loginInfo.password'));
    public btnSignin = element(by.buttonText('SIGN IN'));
   

    async loginToApp(username: string, password: string){
        await this.txtEmail.sendKeys(username);
        await this.txtPassword.sendKeys(password);
        browser.sleep(3000);
        
    }
    async submit() : Promise<inboxPage>{
        await this.btnSignin.click();
        return new inboxPage();
    }
}

