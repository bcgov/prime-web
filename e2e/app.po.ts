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
  firstName: string = "Bill";
  middleName: string = "Henry";
  lastName: string = "Gates";
  dateOfBirthDay: number = 11;
  dayOfBirthYear: number = 1999;
  phoneNumber: string = "250-555-1234";
  email: string = "billg@microsoft.com";
  altPhoneNumber: string = "250-555-9999"
  altEmail: string = "billg@hotmail.com";

  streetNum: string = "103"
  suite: string = "345"
  street: string = "Yates"
  city: string = "Victoria"
  province: string = "British Columbia"
  country: string = "Canada"
  securityAnswer1: string = "Steve Jobs";
  securityAnswer2: string = "Joe";
  securityAnswer3: string = "Nottinghamfordshire";

  navigateTo() {
    browser.get('/');
    this.clickInfoConsentCheckbox();
    this.clickModalSubmit();
    this.continue(); //site-access
    this.continue(); //contact-info
  }

  fillAllContactInfo(){
    this.fillContactInfo();
    this.fillAddressInfo();
    this.fillSecurityQuestions();
  }

  fillContactInfo() {
    element(by.css('#firstName')).sendKeys(this.firstName);
    element(by.css('#middleName')).sendKeys(this.middleName);
    element(by.css('#lastName')).sendKeys(this.lastName);
    element.all(by.css('#dateOfBirth select option')).get(3).click();
    element(by.css('#dateOfBirth .dayInput')).sendKeys(11);
    element(by.css('#dateOfBirth .yearInput')).sendKeys(1999);
    element(by.css('#phoneNumber')).sendKeys(this.phoneNumber);
    element(by.css('#email')).sendKeys(this.email);
    element(by.css('#altphoneNumber')).sendKeys(this.altPhoneNumber);
    element(by.css('#altEmail')).sendKeys(this.altEmail);
  }

  fillAddressInfo() {
    element(by.css('#streetNum')).sendKeys(this.streetNum);
    element.all(by.css('#streetSuffix option')).get(2).click();
    element(by.css('#suite')).sendKeys(this.suite);
    element(by.css('prime-address input[name="street"]')).sendKeys(this.street);
    element.all(by.css('#streetType option')).get(3).click();
    element.all(by.css('#streetDirection option')).get(2).click();
    element(by.css('prime-address input[name="city"]')).sendKeys(this.city);
    element(by.css('prime-address input[name="residentialAddressProvince"]')).sendKeys(this.province);
    element(by.css('prime-address input[name="residentialAddressCountry"]')).sendKeys(this.country);
  }

  fillSecurityQuestions(){
    element.all(by.css('#securityQuestion1 > select option')).get(3).click();
    element.all(by.css('#securityQuestion2 > select option')).get(4).click();
    element.all(by.css('#securityQuestion3 > select option')).get(5).click();
    element(by.css('#securityAnswer1')).sendKeys(this.securityAnswer1);
    element(by.css('#securityAnswer2')).sendKeys(this.securityAnswer2);
    element(by.css('#securityAnswer3')).sendKeys(this.securityAnswer3);
  }
}

/**
 * Intentionally extends from ContactInfo page, and UserAcceptance should extend from this one.
 * The reason is so that the final ReviewSubmit component is capable of filling out every page as it navigates through them.
 */
export class SelfDeclarationPage extends ContactInfoPage {
  navigateTo() {
    browser.get('/');
    this.clickInfoConsentCheckbox();
    this.clickModalSubmit();
    this.continue(); //site-access
    this.continue(); //contact-info
    this.continue(); //self-declaration
  }

  fillDeclarations(){
    this.toggleAndFill('haveBeenSubjectOfOrderOrConviction')
    this.toggleAndFill('haveBeenSuspendedOrCancelled')
    this.toggleAndFill('haveHadLimitsImposed')
    this.toggleAndFill('haveBeenSuspendedOrRevokedFromPharmaNet')
    this.toggleAndFill('hasRevocationBeenResolved')
  }

  private toggleAndFill(toggleID: string){
    element.all(by.css(`#${toggleID} + prime-toggle .btn`)).first().click();
    element(by.css(`#${toggleID}Details`)).sendKeys("Lorem ipsum dolor sit, amet consectetur adipisicing elit. In quas inventore consequuntur tempore facere exercitationem numquam necessitatibus nostrum eaque provident odio quasi, libero adipisci nihil magnam harum excepturi eos voluptatibus!")
  }

}

/**
 * Also responsible for User Acceptance page for now, since that page is so minor.
 */
// export class ReviewSubmit extends SelfDeclarationPage {
export class AllPrimePages extends SelfDeclarationPage {

  navigateTo() {
    browser.get('/');
    this.clickInfoConsentCheckbox();
    this.clickModalSubmit();
  }

  /** Navigates to the end while filling out all fields. */
  navigateToEnd(){
    this.continue(); //site-access
    this.continue(); //contact-info
    this.fillAllContactInfo();
    this.continue(); //self-declaration
    this.fillDeclarations();
    this.continue(); //user-acceptance
    this.checkUserAcceptanceCheckbox();
    this.continue(); //review-submit
    this.checkAuthorizeCheckbox();
  }

  /** On the User-Acceptance page */
  checkUserAcceptanceCheckbox(){
    return element(by.css('app-user-acceptance #agree-acceptance')).click();
  }

  /** On Review-Submit page */
  checkAuthorizeCheckbox(){
    return element(by.css('app-review-submit #authorize')).click();
  }

  // verifyReviewContent(){
  //   element(by.css('app-review-submit #agree-acceptance'))
  // }

  // verifyReviewContent(selector: string, text: string): boolean{
  //   return element(by.css(`app-review-submit ${selector}`)).getText();
  // }
  find(selector: string) {
    return element(by.css(`app-review-submit ${selector}`)).getText();
  }




}


