import { browser, by, element, $$ } from 'protractor';

export class BaseMohRegistrationPage {
    private continueButton;

    constructor() {
        this.continueButton = element(by.css('.form-bar .submit'));
    }

    navigateTo() {
        return browser.get('/moh-registration/profile');
    }

    // getParagraphText() {
    //     return element(by.css('app-root span')).getText();
    // }

    continue() {
        this.continueButton.click();
    }

    // TODO - Move these to a generic class for all e2e tests
    // url() {
    //     return browser.getCurrentUrl();
    // }

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
}

