import { browser, by, element, $$, WebElement } from 'protractor';
import { FakeData } from '../fake-data';

export class BaseMohRegistrationPage {
    private continueButton;

    constructor() {
        this.continueButton = element(by.css('.form-bar .submit'));
    }

    navigateTo() {
        return browser.get('/moh-registration/profile');
    }

    continue() {
        this.continueButton.click();
    }

    // TODO - Move these to a generic class for all e2e tests

    noFormErrors() {
        return this.formErrors().count();
    }

    formErrors() {
        return $$('[role=alert] .text-danger');
    }
}

export class MohProfilePage extends BaseMohRegistrationPage {
    // private fakeData = new FakeData();

    // TODO - Move to generic parent / abstract
    async getNameElement(labelName): Promise<WebElement> {
        const label = element(by.cssContainingText('prime-name label', labelName));
        return element(by.id(await label.getAttribute('for')));
    }


    // TODO - TYPE THIS DATA! Either interface or maybe use the `type` operator?
    async fillName(data) {
        (await this.getNameElement('First Name')).sendKeys(data.firstName);
        if (data.middleName) {
            (await this.getNameElement('Middle Name')).sendKeys(data.middleName);
        }
        (await this.getNameElement('Last Name')).sendKeys(data.lastName);
    }

    fillBirthDate() {
        // TODO - figure out how to select from dropdown
        // old prime did - element.all(by.css('#dateOfBirth select option')).get(3).click();
    }



}

