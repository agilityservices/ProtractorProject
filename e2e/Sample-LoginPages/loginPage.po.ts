import { browser, element, by } from 'protractor';
import { BasePageObjects } from '../basePageObjects';

export class LoginPages{

    public email_Input = element(by.model('$ctrl.loginInfo.email'));
    public password_Input = element(by.model('$ctrl.loginInfo.password'));
    public Signin_Button = element(by.buttonText('SIGN IN'));



    async enterUsername(un: string) {
        let usernameInput = await element(by.model('$ctrl.loginInfo.email'));
        await usernameInput.sendKeys(un);
    }

    async enterPassword(password: string) {
        let passwordInput = await element(by.model('$ctrl.loginInfo.password'));
        await passwordInput.sendKeys(password);
    }
    async login(username: string, password: string) {
        await this.email_Input.sendKeys(username);
        await this.password_Input.sendKeys(password);
        browser.sleep(3000);

    }
    async submit() {
        await this.Signin_Button.click();


    }







}