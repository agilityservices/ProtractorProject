import { browser,element,by } from '../../node_modules/protractor';

export class newRequestPage {  
    
    public newrequestIcon = element(by.className('new-request-container'));
    public formCodeIDLocator=element(by.className('formcode'));
    public allformCodeIDs=element.all(by.className('formcode flex'));
    public newRequestSearch = element(by.model('$ctrl.searchText'));
    public processCard = element(by.className('image__cell-menu'));
    public initiateLink = element(by.xpath('//button/span[contains(text(),"Initiate")]'));
    public phoneInput = element(by.name('Phone'));
    public singleline1Input = element(by.name('SingleLine'));
    public submitButton = element(by.xpath("//*[@aria-label='Save']/following::button[@type='submit']"));
    public toastmessge=element(by.className('toast-message'));
    
    public formCodeID:string;
    public newRequestformid:string;
    public new_Formcode:string;
    
 
	
    async submitrequest() {
        return this.submitButton.click();
    }
    async toastMessageDataverify(){
        return this.toastmessge.getText();
    }
    async formCodereturn(){
        return this.formCodeIDLocator.getText();
    }
    async returnAllFormcodes(){
        this.allformCodeIDs.getText().then(function(data){
            return data;
        })
    }
    
}
