import { BasePageObjects } from './basePageObjects';
import  { browser,  logging,  element,  by,  protractor  }  from  'protractor';

describe('Login page suite', () => {
  let page: BasePageObjects;

  beforeEach(async () => {
    page = new BasePageObjects();

    browser.get("http://tr-qa/account/login");
    //await page.login();
    browser.sleep(3000);
    browser.ignoreSynchronization = true
  });

  it('verify url',async () => {
   // browser.sleep(3000)
   // console.log("am in inbox page")
    //expect(await page.navigateTo()).toContain('inboxm');
  });

  xit("verify title of the page",async ()  => {
    expect(await page.getTitle()).toEqual('Transfora');
  });

  afterEach(async () => {
    
  });

})