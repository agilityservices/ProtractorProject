// import { element, by, browser, protractor } from "../node_modules/protractor";
// import { async, TestBed } from '../node_modules/@angular/core/testing';
// import { LoginPage } from './LoginPage/LoginPage.po';
// import { newRequestPage } from './InitiateRequest/newRequestPage.po';
// import { asQueryList } from '../node_modules/@angular/core/src/view';
// import { conditionallyCreateMapObjectLiteral } from '../node_modules/@angular/compiler/src/render3/view/util';
// import { ManageProcessPage } from './ManageProcess/manageProcessPage.po';

// describe('Protractor Demo App', () => {
//   let loginPage: LoginPage;
//   let newrequestpage: newRequestPage;
//   let ManageprocessPage: ManageProcessPage;

//   loginPage = new LoginPage();
//   newrequestpage = new newRequestPage();
//   ManageprocessPage = new ManageProcessPage();

//   let leftMenu = element(by.xpath("//div[@class='mCSB_container']/ul"));
//   let Headers = element.all(by.tagName("h2")).first();
//   let new_Formcode;

//   beforeEach(async () => {
//     browser.get("http://tr-qa/account/login");
//     //await loginPage.login("skumarvenkat@agility.com", "Microeforms@1");
//     browser.sleep(3000);
//     browser.ignoreSynchronization = true


//   });
//   xit('Verify Manage process', async () => {
//     await leftMenu.all(by.tagName("li")).then(function (menus) {
//       console.log("Left Menu count is: " + menus.length);
//       for (var i = 1; i <= 4; i++) {
//         // var xpathIndividualMenus = '//*[@id="mCSB_1_container"]/ul/li[' + i + ']/a/span/md-icon';
//         var xpathIndividualMenus = `//div[@class='mCSB_container']/ul/li[${i}]/a`;
//         console.log(i + " " + xpathIndividualMenus);
//         browser.sleep(3000);
//         element(by.xpath(xpathIndividualMenus)).getAttribute('aria-label').then(async function (s) {
//           console.log(s);
//           console.log(xpathIndividualMenus);
//           await element(by.xpath(xpathIndividualMenus)).click();
//           await Headers.getText().then(async function (text) {
//             console.log("Navigated to " + text + " page");
//             expect(await text).toEqual(s);
//           });
//         })

//       }
//     })

//   })
//   xit('verify inbox', async () => {
//     expect(await browser.getTitle()).toEqual("Transfora");
//     //await loginPage.menuclick('Inbox-active');
//     let data = await loginPage.menuclick_verifyHeader('Inbox-active');
//     expect(data).toBe('Inbox');

//   });
//   xit('verify Manage process', async () => {
//     let data = await loginPage.menuclick_verifyHeader('Manage Processes');
//     expect(data).toBe('Manage Process');
//     ManageprocessPage.searchProcessInput.sendKeys('Sql injection testing');
//     browser.sleep(1000);
//     await browser.actions().mouseMove(ManageprocessPage.processCard).perform();
//     browser.sleep(1000);
//     await ManageprocessPage.viewProcessCard_link.click();
//     browser.sleep(2000);
//     await ManageprocessPage.editProcessButton.click();
//     browser.sleep(2000);
//     await ManageprocessPage.nextbutton.click();
//     browser.sleep(2000);
//     await ManageprocessPage.nextbutton.click();
//     browser.sleep(2000);
//     await ManageprocessPage.nextbutton.click();
//     browser.sleep(3000);
//     await ManageprocessPage.publishButton.click();
//     browser.sleep(5000);//it is taking more time if not failing 
//     let processIndexHeader = await ManageprocessPage.verifyHeader();
//     browser.sleep(1000);
//     //console.log(await processIndexHeader)
//     expect(processIndexHeader).toBe('Process Index');

//   });
//   xit('verify Reports', async () => {
//     let data = await loginPage.menuclick_verifyHeader('Reports');
//     expect(data).toBe('Reports');
//   });
//   xit('verify Administration', async () => {
//     let data = await loginPage.menuclick_verifyHeader('Administration');
//     expect(data).toBe('Administration');
//   });

//   xit('verify Sql injection testing process:Initiate request', async function () {
//     await loginPage.login("gmaddirala@agility.com", "Microeforms@1");
//     browser.sleep(3000);
//     await newrequestpage.newrequestIcon.click();
//     browser.sleep(2000);

//     await newrequestpage.newRequestSearch.sendKeys('sql injection');
//     await browser.actions().mouseMove(newrequestpage.processCard).perform();
//     browser.sleep(2000);
//     await newrequestpage.initiateLink.click();
//     browser.sleep(2000);
//     newrequestpage.newRequestformid = await newrequestpage.formCodereturn();
//     new_Formcode = newrequestpage.newRequestformid;
//     console.log(new_Formcode);
//     browser.sleep(2000);
//     await newrequestpage.singleline1Input.sendKeys('a');

//     browser.sleep(2000);

//     await newrequestpage.phoneInput.sendKeys(9521456);

//     browser.sleep(3000);
//     await newrequestpage.submitrequest();
//     browser.sleep(5000);
//     let data = await newrequestpage.toastMessageDataverify();
//     expect(data).toContain('Reddy Aleti');

//   });
//   xit('verify Sql injection testing process:Submit to Line manager', async function () {

//     await loginPage.login("raleti@agility.com", "Microeforms@1");
//     // console.log('the data is ' + single_formcode);
//     browser.sleep(3000);
//     //console.log(newrequestpage.returnAllFormcodes());
//     // await newrequestpage.allformCodeIDs.getText().then(async function (data: any) {
//     //   console.log(data);
//     //   await data.forEach(async element => {
//     //     // console.log(element);
//     //     if (element == single_formcode) {

//     //       console.log('Haiiii')
//     //       await element(by.xpath("//*[(text()='" + new_Formcode + "')]")).click();
//     //       browser.sleep(3000);
//     //       newrequestpage.submitButton.click();
//     //     }

//     //   });

//     //   
//     // })
//     let SqlinjectionFormcode = await element(by.xpath("//*[(text()='" + new_Formcode + "')]"))
//     browser.sleep(3000);    
//     browser.actions().mouseMove(SqlinjectionFormcode).click().perform();
//   });

//   afterEach(async () => {
//     //loginPage.logout();

//   });
// });
