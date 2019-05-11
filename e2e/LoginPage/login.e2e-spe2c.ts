import { LoginPage } from "./LoginPage.po";

import { browser, element, by } from 'protractor';


describe('Login Demo', () => {

    let loginPage: LoginPage; 
    loginPage = new LoginPage();
   
    beforeEach(async () => {
        browser.get("http://tr-qa/account/login");        
        browser.sleep(3000);
        browser.ignoreSynchronization = true

    });

    it('verify Login to application', async function () {
        await loginPage.loginToApp("gmaddirala@agility.com", "Microeforms@1");
        await loginPage.Signin_Button.click();
        browser.sleep(3000);
        
        
    });

});