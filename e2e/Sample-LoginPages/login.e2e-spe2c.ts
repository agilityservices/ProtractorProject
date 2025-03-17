import { LoginPages } from "./LoginPage.po";

import { browser, element, by } from 'protractor';
import { LoginPage } from '../LoginPage/loginPage';


describe('Login Demo', () => {

    let login= new LoginPage();
    
   
    beforeEach(async () => {
        browser.get("http://tr-qa/account/login");        
        browser.sleep(3000);
        browser.ignoreSynchronization = true

    });

    it('verify Login to application', async function () {
     
        await login.submit();
        browser.sleep(3000);
        
        
    });

});
