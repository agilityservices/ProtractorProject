import { browser, by, element, protractor, ExpectedConditions } from 'protractor';

export class BasePageObjects {

  btnMyProfile = element(by.className('user-image'));


  async getCurrentUrl() {
    return await browser.getCurrentUrl();
  }

  async getTitle() {
    return await browser.getTitle();
  }

  async isdisplayed(locator: any) {
    return true;
  }

  async getHeaderName() {
    let data: string;
    let Headers = element.all(by.tagName("h2")).first();
    await Headers.getText().then(function (text) {
      //console.log("Navigated to " + text + " page");          
      data = text;
    });
    return data;
  }
  
  async waitUntilPageLoad(name: any, time?: number) {
    return await  browser.wait( ExpectedConditions.visibilityOf(name), time)
  }
  async logOut() {
    await this.btnMyProfile.click();
    await element(by.buttonText('Sign out')).click();

  }


  // async login(): Promise<any> {
  //   let submit = await element(by.buttonText('SIGN IN'));
  //   await this.typeUsername("skumarvenkat@agility.com");
  //   await this.typePassword("Microeforms@1");
  //   return await submit.click();
  // }
}
