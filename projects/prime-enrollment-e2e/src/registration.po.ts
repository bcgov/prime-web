import { browser, by, element, WebElement, protractor } from 'protractor';
import { ProfilePageTest, ContactPageTest } from './registration.data';
import { PrimeTestPage } from '../../../e2e/src/app.po';
import { NgSelectOption } from '@angular/forms';

export class BaseEnrollmentTestPage extends PrimeTestPage {
    protected continueButton: WebElement;

    constructor() {
        super();
        this.continueButton = element(by.css('.form-bar .submit'));
    }

    navigateTo() {
        return browser.get('/enrollment/profile');
    }

    continue() {
        this.continueButton.click();
    }

    scrollDown() {
        browser.executeScript('window.scrollTo(0, document.body.scrollHeight)');
    }
}

export class ProfilePage extends BaseEnrollmentTestPage {

    private diffMailAddressButton: WebElement;
    private diffMailAddressCheckbox: WebElement;
    private streetField: WebElement;

    constructor() {
      super();
      this.diffMailAddressButton = element(by.css('.mail-address-container .btn'));
      this.diffMailAddressCheckbox = element(by.css('.custom-checkbox .custom-control-label'));
      this.streetField = element(by.css('prime-address [id^="street"]'));
    }

    clickDiffMailAddress() {
        this.diffMailAddressButton.click();
    }

    checkDiffMailAddress() {
        this.diffMailAddressCheckbox.click();
    }

    checkEnabled() {
      return this.streetField.isEnabled();
    }

    async fillPreferredName(data: ProfilePageTest) {
      (await this.getNameComponent('Preferred First Name')).sendKeys(data.preferredFirstName);
      if (data.preferredMiddleName) {
          (await this.getNameComponent('Preferred Middle Name')).sendKeys(data.preferredMiddleName);
      }
      (await this.getNameComponent('Preferred Last Name')).sendKeys(data.preferredLastName);
    }

    fillMailingAddress(data: ProfilePageTest) {
      element(by.css('prime-address:nth-child(1) [id^="street"]')).sendKeys(data.address);
      element(by.css('prime-address:nth-child(1) [id^="city"]')).sendKeys(data.city);
      element(by.css('prime-address:nth-child(1) [id^="postal"]')).sendKeys(data.postal);
    }
}

export class ContactPage extends BaseEnrollmentTestPage {

    private contactMethod: string[] = ['Email', 'Phone', 'Both'];
    private num: number = Math.floor(Math.random() * Math.floor(this.contactMethod.length));

    constructor() {
      super();
    }

    navigateTo() {
        return browser.get('/enrollment/contact');
    }

    getContinueButton() {
        return this.continueButton.isEnabled();
    }

    clickContactMethod() {
        this.selectOption('contactMethod', this.contactMethod[this.num]);
    }

    typeContactMethod() {
        this.typeOption('contactMethod', this.contactMethod[this.num]);
    }

    fillContactInfo(data: ContactPageTest){
        element(by.css('[ng-reflect-name^="phone"]')).sendKeys(data.mobile);
        element(by.css('[id^="email"]')).sendKeys(data.email);
        element(by.css('[ng-reflect-name^="voicePhone"]')).sendKeys(data.mobile);
        element(by.css('[id^="ext"]')).sendKeys(data.extension);
    }
}

export class ProfessionalPage extends BaseEnrollmentTestPage {

    constructor() {
      super();
    }

    navigateTo() {
        return browser.get('/enrollment/professional');
    }

    clickYesForCollegeCert() {
        element(by.css('enroll-radio-button[ng-reflect-name="collegeCert"] label[for="Yes"]')).click();
    }

    selectCollegeCert(option: string) {
        this.selectOption('collegeCert', option);
    }

    selectLicenseClass(option: string) {
        this.selectOption('licenseClass', option);
    }

    typeLicenseNumber(licenseNum: string) {
        element(by.css('input[ng-reflect-name="licenseNum"]')).sendKeys(licenseNum);
    }

    typeRenewalDate(renewalDate: string) {
        element(by.css('input[ng-reflect-name="datepicker-"]')).sendKeys(renewalDate);
    }

    checkDeviceProvider(inputVal: string) {
        return element(by.css(`label[for="${inputVal}"]`)).isSelected();
    }

    clickYesForDeviceProvider() {
        element(by.css('enroll-radio-button[name="dp"] label[for="dptrue"]')).click();
    }

    typeDeviceProviderNum(dpNum: string) {
        element(by.css('input[id="device"]')).sendKeys(dpNum);
    }
}

export class SelfDeclarationPage extends BaseEnrollmentTestPage {

    constructor() {
      super();
    }

    navigateTo() {
        return browser.get('/enrollment/self-declaration');
    }

    clickOption(label: string, answer: string){
        element(by.css(`enroll-yes-no[ng-reflect-label="${label}"] label[for^="${answer}"]`)).click();
    }

    checkTips() {
        element(by.css('aside[_ngcontent-c10]')).isDisplayed();
    }

    typeDescription(label: string, text: string){
        element(by.css(`textarea[ng-reflect-name="${label}"]`)).sendKeys(text);
    }
}
