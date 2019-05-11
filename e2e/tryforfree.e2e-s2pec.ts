import { browser, by, element } from "../node_modules/protractor";
import { Transfora } from './transfora.po';


describe("This is testcase1",function(){
    let transfora: Transfora;
    transfora = new Transfora();
    it("Login to App",function(){
  transfora.navigateTo();
    element(by.xpath("//a[contains(text(),'Free Trial')]")).click();   
    element(by.xpath("//input[@name='name']")).sendKeys("Protractor Admin");
    element(by.xpath("//input[@type='email']")).sendKeys("ProtractorAdmin@test.com");
    element(by.xpath("//input[@name='companyname']")).sendKeys("ProtractorAdmin");
    element(by.xpath("//input[@type='password' and @name='password']")).sendKeys("Microeforms@1");
    element(by.xpath("//input[@type='password' and @name='confirmPasswrod']")).sendKeys("Microeforms@1");
    element(by.xpath("//div[@class='recaptcha-checkbox-checkmark']")).click();
    element(by.model("$ctrl.gCaptchaResponse")).click();
    // expect(browser.getCurrentUrl()).toMatch('http://tryout.transfora.com/inbox');
    // expect(inboxHomepage.getText()).toMatch('Inbox');
    //inboxHomepage.getText().then(function(text){
    //console.log(text);
    //});
    });
    
    
    });