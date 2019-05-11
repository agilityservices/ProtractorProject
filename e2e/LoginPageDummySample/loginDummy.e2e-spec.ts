
import { browser, element, by } from 'protractor';
import { LoginPageDummy } from './loginPageDummy.po';


describe('Login Demo Dummy', () => {
    let login_pagedummy=new LoginPageDummy();
   
    beforeEach(async () => {
        browser.get("http://tr-qa/account/login");             
        browser.ignoreSynchronization = true
    });
  
    it('verify Login to application', async function () {
        login_pagedummy.loginToApp('skumarvenkat@agility.com','Microeforms@1');
        var inboxPage= await login_pagedummy.submit();
        browser.sleep(3000);  
        expect(inboxPage.getCurrentUrl()).toContain('inbox'); 
    });

});