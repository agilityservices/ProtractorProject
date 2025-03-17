
import { browser, element, by, protractor } from 'protractor';
import { LoginPage } from './loginPage';



describe('Transfora Login Functionality', () => {

    let loginPage = new LoginPage();

    beforeEach(async () => {
        browser.get("http://tr-qa/account/login");
        //loginPage.waitForVisibilityOfElement(loginPage.btnSignin);
        browser.ignoreSynchronization = true
    });

    it('Should login to application', async function () {
        // user enters username
        await loginPage.enterUsername("gmaddirala@gmail.com");

        // user enters password
        await loginPage.enterPassword("Microeforms@1");
        
        // user clicks on submit button
        var inbox = await loginPage.submit();

        // expected result
        expect(await inbox.getHeaderName()).toBe('Inbox');
        

    });

});
