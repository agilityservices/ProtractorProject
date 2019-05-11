import { browser, element, by } from '../../node_modules/protractor';

export class LoginPage {
    
    public email_Input = element(by.model('$ctrl.loginInfo.email'));
    public password_Input = element(by.model('$ctrl.loginInfo.password'));
    public Signin_Button = element(by.buttonText('SIGN IN'));


    async loginToApp(username: string, password: string) {
        await this.email_Input.sendKeys(username);
        await this.password_Input.sendKeys(password);
        browser.sleep(3000);
        
    }
    async submit(){
        await this.Signin_Button.click();
       

    }
    






}