import { ProfessionalInfoPage } from './app.po';
import { ContactInfoPage } from './app.po';
import { BasePrimePage } from './app.po';
import { SelfDeclarationPage } from './app.po';
import { AllPrimePages } from './app.po';

/**
 * TODO - Write more actual tests. I've writen filling out each input already,
 * but we need to verify and validate results.
 *
 * TODO - Need to find a way to ensure environment.useDummyData = false
 * Maybe force production environment?
 */


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


/**
 * Commented out until we write specific tests for this page.
 * Currently it's functionality is duplicated in AllPrimePages
 */
// describe('PRIME Base Navigation Tests', () => {
//   let page: BasePrimePage;

//   beforeEach(() => {

//     page = new BasePrimePage();
//     page.navigateTo();
//     //Always clear the modal for these tests.
//     page.clickInfoConsentCheckbox();
//     page.clickModalSubmit();
//   });

//   /**
//    * Note - This function assumes the user can just Continue on each page,
//    * i.e. there's no form validation required before continuing.
//    *
//    * Once validation is required, this function will require changes. We'll have
//    * to fill out fields and pass validation before advancing.
//    */
//   it('should navigate through each page to the end', () => {
//     expect(page.url).toContain('/professional-info');
//     page.continue();
//     expect(page.url).toContain('/site-access');
//     page.continue();
//     expect(page.url).toContain('/contact-info');
//     page.continue();
//     expect(page.url).toContain('/self-declaration');
//     page.continue();
//     expect(page.url).toContain('/user-acceptance');
//     page.continue();
//     expect(page.url).toContain('/review-submit');
//   });

// });

/**
 * Commented out until we write specific tests for this page.
 * Currently it's functionality is duplicated in AllPrimePages
 */

// describe('PRIME Contact Info', () => {
//   let page: ContactInfoPage;

//   beforeEach(() => {
//     page = new ContactInfoPage();
//     page.navigateTo();
//   });


//   it('should fill out contact info page', () => {
//     page.fillContactInfo();
//     page.fillAddressInfo();
//     page.fillSecurityQuestions();
//   });

// });

/**
 * Commented out until we write specific tests for this page.
 * Currently it's functionality is duplicated in AllPrimePages
 */

// describe('PRIME Self Declaration', () => {
//   let page: SelfDeclarationPage;

//   beforeEach(() => {
//     page = new SelfDeclarationPage();
//     page.navigateTo();
//   });


//   it('should fill out self declaration page', () => {
//     page.fillDeclarations();
//   });

// });

describe('PRIME All Pages', () => {
  let page: AllPrimePages;

  beforeEach(() => {
    page = new AllPrimePages();
    page.navigateTo();
  });


  it('should have urls update as it fills out all pages and navigates to the end', () => {
    expect(page.url).toContain('/professional-info');
    page.continue();
    expect(page.url).toContain('/site-access');
    page.continue();
    expect(page.url).toContain('/contact-info');
    page.fillAllContactInfo();
    page.continue();
    expect(page.url).toContain('/self-declaration');
    page.fillDeclarations();
    page.continue();
    expect(page.url).toContain('/user-acceptance');
    page.checkUserAcceptanceCheckbox();
    page.continue();
    expect(page.url).toContain('/review-submit');
    page.checkAuthorizeCheckbox();
    // page.sleep(5000);
  });

  it('should verify that data entered on earlier pages is correct on review-submit page', () => {
    page.navigateToEnd();

    expect(page.find('#name')).toEqual(`${page.firstName} ${page.middleName} ${page.lastName}`);
    expect(page.find('#phone')).toEqual(page.phoneNumber);
    expect(page.find('#email')).toEqual(page.email);
    expect(page.find('#altPhone')).toEqual(page.altPhoneNumber);
    expect(page.find('#altEmail')).toEqual(page.altEmail);
    expect(page.find('#streetNum')).toEqual(page.streetNum);
    //TODO - Write more tests here.


    page.sleep(5000);
  });

});
