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
        // return this.formErrors().length === 0;
        return this.formErrors().count();
    }

    formErrors() {
        // return element.all(by.css('[role=alert] .text-danger'));
        return $$('[role=alert] .text-danger');
    }
}

export class MohProfilePage extends BaseMohRegistrationPage {
    // firstName
    // first check can't continue
    private fakeData = new FakeData();

    async getNameElement(labelName): Promise<WebElement> {
        const label = element(by.cssContainingText('prime-name label', labelName));
        return element(by.id(await label.getAttribute('for')));
    }


    async fillName(data = this.fakeData.randomProfileInfo()) {
        // element(by.cssContainingText('prime-name label', 'First Name')).sendKeys(data.firstName);
        // const label = element(by.cssContainingText('prime-name label', 'First Name'));
        // // label.getAttributes
        // label.getAttribute('for');
        // const input =
        // const input = label.
        // element().sendKeys(data.firstName);

        (await this.getNameElement('First Name')).sendKeys(data.firstName);
    }

    fillBirthDate() {

    }



}

