
import { browser,element,by } from 'protractor';


describe('Firewall Auth Login', () => {
    

    beforeEach(async () => {
        //browser.get("http://10.138.104.1:1000/fgtauth?0581ab2275945abd");        
        browser.ignoreSynchronization = true
    });
    it('Verify login', async ()=>{
        // element(by.name('username')).sendKeys("gmaddirala");
        // element(by.name('password')).sendKeys("Microeforms@1");

        // element(by.xpath('//*[@type="submit"]')).click();
        // browser.sleep(3000);
        // element(by.linkText('click here')).click();
        // expect(browser.getTitle()).toContain('MSN');
        function addNumbers(a: number, b: number) { 
            return a + b; 
        } 
        var Amount: number = addNumbers(10,15) 
        var abc:any;
        abc=20
        console.log('Sum of the two numbers is: ' +Amount); 

    })
});