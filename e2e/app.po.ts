import { browser, by, element } from 'protractor';

export class AppPage {

  async getCurrentUrl() {
    return await browser.getCurrentUrl();
  }

  async getTitle() {
    return await browser.getTitle();
  }
  async isdisplayed(locator: any) {
 
    return true;
  }

  async verifyHeader() {
    let data: string;
    let Headers = element.all(by.tagName("h2")).first();
    await Headers.getText().then(function (text) {
      //console.log("Navigated to " + text + " page");          
      data = text;
    });
    return data;
  }




  // async typeUsername(un: string) {

  //   let usernameInput = await element(by.model('$ctrl.loginInfo.email'));
  //   await usernameInput.sendKeys(un);
  // }

  // async typePassword(password: string) {
  //   let passwordInput = await element(by.model('$ctrl.loginInfo.password'));
  //   await passwordInput.sendKeys(password);
  // }
  // async login(): Promise<any> {
  //   let submit = await element(by.buttonText('SIGN IN'));
  //   await this.typeUsername("skumarvenkat@agility.com");
  //   await this.typePassword("Microeforms@1");
  //   return await submit.click();
  // }

  //async menuclick_verifyHeader(){
  //   let Headers = element.all(by.tagName("h2")).first();
  //   //element(by.className(classname)).click();    
  //   browser.sleep(3000);
  //   Headers.getText().then(await function (text) {
  //   return text;
  //   });

  // }




}
