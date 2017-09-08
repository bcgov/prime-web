import { browser, element, by } from 'protractor';

export class BasePrimePage {
  private continueElement;
  private backElement;

  constructor() {
    this.continueElement = element(by.css('prime-form-footer .btn-primary'));
    this.backElement = element(by.css('prime-form-footer .btn-default'));
  }

  /**
   * Navigates to the component's related page. Defaults to the first page.
   */
  navigateTo(): void {
    browser.get('/');
  }

  canContinue() {
    this.continueElement.isEnabled();
  }

  continue() {
    this.continueElement.click();

    // Doesn't seem necessary but other people required a sleep after navigating to new routes.
    // browser.waitForAngular() OR browser.sleep(10);
  }

  back() {
    return this.backElement.click();
  }

  get url() {
    return browser.getCurrentUrl();
  }


  /** Necessary on all tests, since we always must click the checkbox on a new session */
  clickInfoConsentCheckbox() {
    return element(by.css('prime-consent-modal #agree')).click();
  }

  /** Necessary on all tests, since we always must click the checkbox on a new session */
  clickModalSubmit() {
    return element(by.css('prime-consent-modal .modal-footer .btn')).click();
  }

  sleep(ms: number){
    browser.sleep(ms);
  }
}

export class ProfessionalInfoPage extends BasePrimePage {

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  checkModalUnlocked() {
    return element(by.css('prime-consent-modal .modal-footer .btn')).isEnabled();
  }

  checkModalDisplayed() {
    return element(by.css('prime-consent-modal > .modal')).isDisplayed();
  }
}

export class ContactInfoPage extends BasePrimePage {

  navigateTo() {
    browser.get('/');
    this.clickInfoConsentCheckbox();
    this.clickModalSubmit();
    this.continue(); //site-access
    this.continue(); //contact-info
  }

  fillContactInfo() {
    element(by.css('#firstName')).sendKeys("Bill");
    element(by.css('#middleName')).sendKeys("Henry");
    element(by.css('#lastName')).sendKeys("Gates");
    element.all(by.css('#dateOfBirth select option')).get(3).click();
    element(by.css('#dateOfBirth .dayInput')).sendKeys(11);
    element(by.css('#dateOfBirth .yearInput')).sendKeys(1999);
    element(by.css('#phoneNumber')).sendKeys("250-555-1234");
    element(by.css('#email')).sendKeys("billg@microsoft.com");
    element(by.css('#altphoneNumber')).sendKeys("250-555-9999");
    element(by.css('#altEmail')).sendKeys("billg@hotmail.com");
  }

  fillAddressInfo() {
    element(by.css('#streetNum')).sendKeys("103");
    element.all(by.css('#streetSuffix option')).get(2).click();
    element(by.css('#suite')).sendKeys("345");
    element(by.css('prime-address input[name="street"]')).sendKeys("Yates");
    element.all(by.css('#streetType option')).get(3).click();
    element.all(by.css('#streetDirection option')).get(2).click();
    element(by.css('prime-address input[name="city"]')).sendKeys("Victoria");
    element(by.css('prime-address input[name="residentialAddressProvince"]')).sendKeys("British Columbia");
    element(by.css('prime-address input[name="residentialAddressCountry"]')).sendKeys("Canada");
  }

  fillSecurityQuestions(){
    element.all(by.css('#securityQuestion1 > select option')).get(3).click();
    element.all(by.css('#securityQuestion2 > select option')).get(4).click();
    element.all(by.css('#securityQuestion3 > select option')).get(5).click();
    element(by.css('#securityAnswer1')).sendKeys("Steve Jobs");
    element(by.css('#securityAnswer2')).sendKeys("Joe");
    element(by.css('#securityAnswer3')).sendKeys("Nottinghamfordshire");
  }
}
