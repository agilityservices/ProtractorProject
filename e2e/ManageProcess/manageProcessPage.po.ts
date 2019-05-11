import { element, by } from '../../node_modules/protractor/built';


export class ManageProcessPage {

    public searchProcessInput = element(by.model('$ctrl.layoutService.searchText'));
    public viewProcessCard_link = element(by.className('md-primary no-margin no-padding md-button'));
    public processCard = element(by.className('image__cell'));
    public editProcessButton = element(by.xpath('//h2[(text()="Edit Form / Workflow")]'));
    public nextbutton = element(by.buttonText('Next'));
    public publishButton = element(by.buttonText('Publish'));
    public Headers = element.all(by.tagName("h2")).first();


    async verifyHeader() {
        let data: string;
        await this.Headers.getText().then(function (text) {
            console.log("Navigated to " + text + " page");
            //expect(text).toEqual(headerText);     
            data = text;
        });
        return data;
    }
}