

import { browser,element,by } from 'protractor';


describe('Firewall Auth Login', () => {
    

    beforeEach(async () => {
        browser.get("http://10.138.104.1:1000/");        
        browser.ignoreSynchronization = true
    });
    it('Verify login', async ()=>{
        element(by.name('username')).sendKeys("gmaddirala");
        element(by.name('password')).sendKeys("Microeforms@1");

        element(by.xpath('//*[@type="submit"]')).click();
        browser.sleep(3000);
        element(by.linkText('click here')).click();
        expect(browser.getTitle()).toContain('MSN');
        
    })
});