import { browser, by, element, WebElement } from 'protractor';
import { PrimePage } from '../app.po';

export class BaseMohRegistrationPage extends PrimePage {
    private continueButton: WebElement;

    constructor() {
        super();
        this.continueButton = element(by.css('.form-bar .submit'));
    }

    navigateTo() {
        return browser.get('/moh-registration/profile');
    }

    continue() {
        this.continueButton.click();
    }
}

export class MohProfilePage extends BaseMohRegistrationPage {
    // TODO - TYPE THIS DATA! Either interface or maybe use the `type` operator?
    async fillName(data) {
        (await this.getNameComponent('First Name')).sendKeys(data.firstName);
        if (data.middleName) {
            (await this.getNameComponent('Middle Name')).sendKeys(data.middleName);
        }
        (await this.getNameComponent('Last Name')).sendKeys(data.lastName);
    }

    async fillBirthDate(date: Date) {
        // TODO: Abstract to general function to fill out date components - move to PrimePage for now.
        const birthDateCSS = '[ng-reflect-label="Birthdate"]';
        const month = date.getMonth();
        const year = date.getFullYear();
        const day = date.getDate();
        element.all(by.css(`${birthDateCSS} select option`)).get(month).click();

        element.all(by.css(`${birthDateCSS} [name^="year"]`)).sendKeys(year);
        element.all(by.css(`${birthDateCSS} [name^="day"]`)).sendKeys(day);
    }

    // need to type this interface like fillName()
    fillAddress(data) {
      // TODO - This could be refactored to actually use the Geocoder / typeahead part
      // For now it just treats it as a simple input.
      element(by.css('prime-address [id^="street"]')).sendKeys(data.address);
      element(by.css('prime-address [id^="city"]')).sendKeys(data.city);
      element(by.css('prime-address [id^="postal"]')).sendKeys(data.postal);
    }



}

