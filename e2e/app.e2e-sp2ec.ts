import { AppPage } from './app.po';
import  { browser,  logging,  element,  by,  protractor  }  from  'protractor';

describe('Login page suite', () => {
  let page: AppPage;

  beforeEach(async () => {
    page = new AppPage();

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