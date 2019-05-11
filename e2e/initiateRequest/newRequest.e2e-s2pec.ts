import { LoginPage } from "../LoginPage/LoginPage.po";
import { newRequestPage } from './newRequestPage.po';
import { browser, element, by } from 'protractor';

describe('Protractor Demo App', () => {

    let loginPage=  new LoginPage();
    let newrequestpage= new newRequestPage();

  
    //newrequestpage = new newRequestPage();
    beforeEach(async () => {
        browser.get("http://tr-qa/account/login");
        // await loginPage.login("gmaddirala@agility.com", "Microeforms@1");
        browser.sleep(3000);
        browser.ignoreSynchronization = true

    });

    it('verify Sql injection testing process:Initiate request', async function () {
        await loginPage.loginToApp("gmaddirala@agility.com", "Microeforms@1");
        await loginPage.Signin_Button.click();
        browser.sleep(3000);
        
        await newrequestpage.newrequestIcon.click();
        browser.sleep(2000);

        await newrequestpage.newRequestSearch.sendKeys('sql injection');
        await browser.actions().mouseMove(newrequestpage.processCard).perform();
        browser.sleep(2000);
        await newrequestpage.initiateLink.click();
        browser.sleep(2000);        
        newrequestpage.new_Formcode = await newrequestpage.formCodereturn();
        console.log("Form code is: " + newrequestpage.new_Formcode);
        browser.sleep(2000);
        await newrequestpage.singleline1Input.sendKeys('a');
        browser.sleep(2000);
        await newrequestpage.phoneInput.sendKeys(9521456);
        browser.sleep(3000);
        await newrequestpage.submitrequest();
        browser.sleep(5000);
        let data = await newrequestpage.toastMessageDataverify();
        expect(data).toContain('Reddy Aleti');
    });
    xit('verify Sql injection testing process:Submit to Line manager', async function () {
        await loginPage.loginToApp("raleti@agility.com", "Microeforms@1");
        browser.sleep(3000);
        //console.log(newrequestpage.returnAllFormcodes());
        // await newrequestpage.allformCodeIDs.getText().then(async function (data: any) {
        //console.log(data);
        //await data.forEach(async element => {
        //console.log(element);
        //if (element == single_formcode) {

        //console.log('Haiiii')
        //await element(by.xpath("//*[(text()='" + new_Formcode + "')]")).click();
        //browser.sleep(3000);
        //newrequestpage.submitButton.click();
        //  }    
        //}); 
        // })
        var SqlinjectionFormcode = await element(by.xpath("//*[(text()='" + newrequestpage.new_Formcode + "')]"))
        browser.sleep(3000);
        browser.actions().mouseMove(SqlinjectionFormcode).click().perform();

    });
    afterEach(async () => {
       // loginPage.logout();
    });

});