
import { browser, element, by, protractor } from 'protractor';
import { LoginPageDummy } from './loginPageDummy.po';


describe('Login Demo Dummy', () => {
    let login_pagedummy=new LoginPageDummy();
    let EC = protractor.ExpectedConditions;

    beforeEach(async () => {        
        browser.get("http://tr-qa/account/login");   
        
        browser.wait(EC.visibilityOf(element(by.buttonText('SIGN IN'))));
        browser.ignoreSynchronization = true
    });
  
    it('verify Login to application', async function () {       
        await login_pagedummy.loginToApp('skumarvenkat@agility.com','Microeforms@1');
        let inboxPage= await login_pagedummy.submit();
        
        browser.wait(EC.visibilityOf(element(by.className('Inbox active'))));
        let page_Header=await inboxPage.verifyHeader();
        expect(page_Header).toBe('Inbox');
       
        
    });
    

});