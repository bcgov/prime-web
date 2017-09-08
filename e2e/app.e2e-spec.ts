import { ProfessionalInfoPage } from './app.po';
import { ContactInfoPage } from './app.po';
import { BasePrimePage } from './app.po';


describe('PRIME Consent Modal Tests', () => {
  let page: ProfessionalInfoPage;

  beforeEach(() => {
    page = new ProfessionalInfoPage();
    page.navigateTo();
  });

  it('should display message saying app works', () => {
    expect(page.getParagraphText()).toEqual('Professional Information');
  });

  it('should have to check Info Consent checkbox to unlock modal', () => {
    expect(page.checkModalDisplayed()).toBeTruthy();
    expect(page.checkModalUnlocked()).toBeFalsy();
    page.clickInfoConsentCheckbox();
    expect(page.checkModalUnlocked()).toBeTruthy();
  });

  it('should not be able to close Info Consent modal before clicking checkbox', () => {
    page.clickModalSubmit();
    expect(page.checkModalDisplayed()).toBeTruthy();
  });

  it('should be able to close Info Consent modal', () => {
    page.clickInfoConsentCheckbox();
    page.clickModalSubmit();
    expect(page.checkModalDisplayed()).toBeFalsy();
  });

});


describe('PRIME Base Navigation Tests', () => {
  let page: BasePrimePage;

  beforeEach(() => {

    page = new BasePrimePage();
    page.navigateTo();
    //Always clear the modal for these tests.
    page.clickInfoConsentCheckbox();
    page.clickModalSubmit();
  });

  /**
   * Note - This function assumes the user can just Continue on each page,
   * i.e. there's no form validation required before continuing.
   *
   * Once validation is required, this function will require changes. We'll have
   * to fill out fields and pass validation before advancing.
   */
  it('should navigate through each page to the end', () => {
    expect(page.url).toContain('/professional-info');
    page.continue();
    expect(page.url).toContain('/site-access');
    page.continue();
    expect(page.url).toContain('/contact-info');
    page.continue();
    expect(page.url).toContain('/self-declaration');
    page.continue();
    expect(page.url).toContain('/user-acceptance');
    page.continue();
    expect(page.url).toContain('/review-submit');
  });

});

describe('PRIME Contact Info', () => {
  let page: ContactInfoPage;

  beforeEach(() => {
    page = new ContactInfoPage();
    page.navigateTo();
  });


  it('should fill out contact info page', () => {
    page.fillContactInfo();
    page.fillAddressInfo();
    page.fillSecurityQuestions();
    page.sleep(5000);
  });

});
