import { BCSCRegistrationPage, BCSCAccountTestPage } from './registration.po';
import { FakeDataMohReg } from './registration.data';
import { PrimeConstants } from '../../../src/app/models/prime-constants';
import { browser } from 'protractor';

describe('BCSC Registration - End to end', () => {
    let profilePage: BCSCRegistrationPage;
    let accountPage: BCSCAccountTestPage;
    let profileData;

    const data = new FakeDataMohReg();
    const profilePage_URL = `${PrimeConstants.BCSC_REGISTRATION}/${PrimeConstants.PROFILE_PG}`;
    const accountPage_URL = `${PrimeConstants.BCSC_REGISTRATION}/${PrimeConstants.ACCOUNT_PG}`;
    const PAGE3_URL = `${PrimeConstants.BCSC_REGISTRATION}/${PrimeConstants.CONFIRMATION_PG}`;

    beforeEach(() => {
        profilePage = new BCSCRegistrationPage;
        accountPage = new BCSCAccountTestPage;
        profileData = data.profileInfo();
        data.setSeed(123);
    });

// tslint:disable-next-line: max-line-length
    it ('01. should be able to go through from Profile to Account page without filling out any fields then shows an error when the user clicks Complete Registration if the user didnt filled out the required fields', () => {
        profilePage.navigateTo();
        profilePage.continue();
        expect(browser.getCurrentUrl()).toContain(accountPage_URL, 'should navigate to the Accounts page');
        expect(profilePage.formErrors()).toEqual([], 'should be no errors as form should be valid');

        accountPage.completeRegistration();
        expect(accountPage.formErrors().count()).toEqual(8, 'page should show 8 error texts on continue');
        expect(browser.getCurrentUrl()).toContain(accountPage_URL, 'url should not change');
    });

    it ('02. should be able to go through Account page THEN Confirmation page only if all the required fiellds are filled out', () => {
        profilePage.navigateTo();
        profilePage.continue();
        expect(browser.getCurrentUrl()).toContain(accountPage_URL, 'should navigate to the Accounts page');
        expect(profilePage.formErrors()).toEqual([], 'should be no errors as form should be valid');

        accountPage.fillSecurityQuestions(profileData);
        accountPage.scrollDown();
        accountPage.fillData(profileData);
        accountPage.completeRegistration();
        expect(accountPage.formErrors().count()).toBe(0, 'should be no errors');
        // expect(browser.getCurrentUrl()).toContain(PAGE3_URL, 'should navigate to the Confirmation page');
    });

// tslint:disable-next-line: max-line-length
    it ('03. should be able to go through Account page when Mailing Address is filled out and NOT go through Confirmation page if required fields are not filled out', () => {
        profilePage.navigateTo();
        profilePage.scrollDown();
        profilePage.clickDiffMailAddress();
        profilePage.fillMailingAddress(profileData);
        profilePage.continue();
        expect(browser.getCurrentUrl()).toContain(accountPage_URL);
        expect(profilePage.formErrors().count()).toBe(0, 'should be no errors');

        accountPage.completeRegistration();
        expect(accountPage.formErrors().count()).toEqual(8, 'page should show 8 error texts on continue');
        expect(browser.getCurrentUrl()).toContain(accountPage_URL, 'url should not change');
    });

// tslint:disable-next-line: max-line-length
    it ('04. should be able to go through Account page when Mailing Address is filled out THEN go through Confirmation page when required fields are filled out', () => {
        profilePage.navigateTo();
        profilePage.scrollDown();
        profilePage.clickDiffMailAddress();
        profilePage.fillMailingAddress(profileData);
        profilePage.continue();
        expect(browser.getCurrentUrl()).toContain(accountPage_URL);
        expect(profilePage.formErrors().count()).toBe(0, 'should be no errors');

        accountPage.fillSecurityQuestions(profileData);
        accountPage.scrollDown();
        accountPage.fillData(profileData);
        accountPage.completeRegistration();
        expect(accountPage.formErrors().count()).toBe(0, 'should be no errors');
        // expect(browser.getCurrentUrl()).toContain(PAGE3_URL, 'should navigate to the Confirmation page');
    });

// tslint:disable-next-line: max-line-length
    it ('05. should be able to go through Account page when Mailing Address is filled out then unchecked the checkbox AND go through Confirmation page if required fields are filled out', () => {
        profilePage.navigateTo();
        profilePage.scrollDown();
        profilePage.clickDiffMailAddress();
        profilePage.fillMailingAddress(profileData);
        profilePage.checkDiffMailAddress();
        profilePage.continue();
        expect(browser.getCurrentUrl()).toContain(accountPage_URL);
        expect(profilePage.formErrors().count()).toBe(0, 'should be no errors');

        accountPage.fillSecurityQuestions(profileData);
        accountPage.scrollDown();
        accountPage.fillData(profileData);
        accountPage.completeRegistration();
        expect(accountPage.formErrors().count()).toBe(0, 'should be no errors');
        // expect(browser.getCurrentUrl()).toContain(PAGE3_URL, 'should navigate to the Confirmation page');
    });

// tslint:disable-next-line: max-line-length
    it ('06. should be able to go through Account page when Preferred Name is filled out AND go through Confirmation page if required fields are filled out', () => {
        profilePage.navigateTo();
        profilePage.fillPreferredName(profileData);
        profilePage.scrollDown();
        browser.sleep(1000 * 2);
        profilePage.continue();
        expect(browser.getCurrentUrl()).toContain(accountPage_URL);
        expect(profilePage.formErrors().count()).toBe(0, 'should be no errors');

        accountPage.fillSecurityQuestions(profileData);
        accountPage.scrollDown();
        accountPage.fillData(profileData);
        browser.sleep(1000 * 2);
        accountPage.completeRegistration();
        expect(accountPage.formErrors().count()).toBe(0, 'should be no errors');
        // expect(browser.getCurrentUrl()).toContain(PAGE3_URL, 'should navigate to the Confirmation page');
    });

// tslint:disable-next-line: max-line-length
    it ('07. should be able to go through Account page when BOTH Preferred Name and Mailing Address are filled out THEN go through Confirmation page if required fields are filled out', () => {
        profilePage.navigateTo();
        profilePage.fillPreferredName(profileData);
        profilePage.scrollDown();
        profilePage.clickDiffMailAddress();
        profilePage.fillMailingAddress(profileData);
        profilePage.continue();
        expect(browser.getCurrentUrl()).toContain(accountPage_URL);
        expect(profilePage.formErrors().count()).toBe(0, 'should be no errors');

        accountPage.fillSecurityQuestions(profileData);
        accountPage.scrollDown();
        accountPage.fillData(profileData);
        accountPage.completeRegistration();
        expect(accountPage.formErrors().count()).toBe(0, 'should be no errors');
        // expect(browser.getCurrentUrl()).toContain(PAGE3_URL, 'should navigate to the Confirmation page');
    });

    it ('08. should be able to have 3 security questions show up', () => {
        profilePage.navigateTo();
        profilePage.continue();
        expect(browser.getCurrentUrl()).toContain(accountPage_URL);
        expect(profilePage.formErrors().count()).toBe(0, 'should be no errors');

        accountPage.fillSecurityQuestions(profileData);
        accountPage.scrollDown();
        accountPage.fillData(profileData);
        accountPage.completeRegistration();
        expect(accountPage.formErrors().count()).toBe(0, 'should be no errors');
        // expect(browser.getCurrentUrl()).toContain(PAGE3_URL, 'should navigate to the Confirmation page');
    });

    it ('09. should have 9 pre-written questions to chose from', () => {
        profilePage.navigateTo();
        profilePage.continue();
        expect(browser.getCurrentUrl()).toContain(accountPage_URL);
        expect(profilePage.formErrors().count()).toBe(0, 'should be no errors');
        expect(accountPage.totalNumOfSecurityQuestions().count()).toEqual(9);
    });

    it ('10. should be able to select a pre-written question', () => {
        profilePage.navigateTo();
        profilePage.continue();
        expect(browser.getCurrentUrl()).toContain(accountPage_URL);
        expect(profilePage.formErrors().count()).toBe(0, 'should be no errors');

        accountPage.selectSecurityQuestions(profileData);
        accountPage.scrollDown();
        accountPage.fillData(profileData);
        accountPage.completeRegistration();
        expect(accountPage.formErrors().count()).toBe(0, 'should be no errors');
    });
});

