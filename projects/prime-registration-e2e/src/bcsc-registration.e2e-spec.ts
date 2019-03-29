import { BCSCRegistrationPage, BCSCAccountTestPage } from './registration.po';
import { FakeDataMohReg } from './registration.data';
import { PrimeConstants } from '../../../src/app/models/prime-constants';
import { browser } from 'protractor';

fdescribe('BCSC Registration - End to end', () => {
    let page1: BCSCRegistrationPage;
    let page2: BCSCAccountTestPage;
    let profileData;

    const data = new FakeDataMohReg();
    const PAGE1_URL = `${PrimeConstants.BCSC_REGISTRATION}/${PrimeConstants.PROFILE_PG}`;
    const PAGE2_URL = `${PrimeConstants.BCSC_REGISTRATION}/${PrimeConstants.ACCOUNT_PG}`;
    const PAGE3_URL = `${PrimeConstants.BCSC_REGISTRATION}/${PrimeConstants.CONFIRMATION_PG}`;

    beforeEach(() => {
        page1 = new BCSCRegistrationPage;
        page2 = new BCSCAccountTestPage;
        profileData = data.profileInfo();
        data.setSeed(123);
    });

// tslint:disable-next-line: max-line-length
    it ('01. should be able to go through from Profile to Account page without filling out any fields then shows an error when the user clicks Complete Registration if the user didnt filled out the required fields', () => {
        page1.navigateTo();
        expect(browser.getCurrentUrl()).toContain(PAGE1_URL);

        page1.continue();
        expect(browser.getCurrentUrl()).toContain(PAGE2_URL, 'should navigate to the Accounts page');
        expect(page1.formErrors()).toEqual([], 'should be no errors as form should be valid');

        page2.completeRegistration();
        expect(page2.formErrors().count()).toEqual(8, 'page should show 8 error texts on continue');
        expect(browser.getCurrentUrl()).toContain(PAGE2_URL, 'url should not change');
    });

    it ('02. should be able to go through Account page THEN Confirmation page only if all the required fiellds are filled out', () => {
        page1.navigateTo();
        expect(browser.getCurrentUrl()).toContain(PAGE1_URL);
        page1.scrollDown();
        browser.sleep(1000 * 10);
        page1.continue();
        expect(browser.getCurrentUrl()).toContain(PAGE2_URL, 'should navigate to the Accounts page');
        expect(page1.formErrors()).toEqual([], 'should be no errors as form should be valid');

        browser.sleep(1000 * 10);
        page2.fillSecurityQuestions(profileData);
        page2.scrollDown();
        page2.fillData(profileData);
        browser.sleep(1000 * 10);
        page2.completeRegistration();
        expect(page2.formErrors().count()).toBe(0, 'should be no errors');
        // expect(browser.getCurrentUrl()).toContain(PAGE3_URL, 'should navigate to the Confirmation page');
    });

// tslint:disable-next-line: max-line-length
    it ('03. should be able to go through Account page when Mailing Address is filled out and NOT go through Confirmation page if required fields are not filled out', () => {
        page1.navigateTo();
        page1.scrollDown();
        page1.clickDiffMailAddress();
        page1.fillMailingAddress(profileData);
        page1.continue();
        expect(browser.getCurrentUrl()).toContain(PAGE2_URL);
        expect(page1.formErrors().count()).toBe(0, 'should be no errors');

        page2.completeRegistration();
        expect(page2.formErrors().count()).toEqual(8, 'page should show 8 error texts on continue');
        expect(browser.getCurrentUrl()).toContain(PAGE2_URL, 'url should not change');
    });

// tslint:disable-next-line: max-line-length
    it ('04. should be able to go through Account page when Mailing Address is filled out THEN go through Confirmation page when required fields are filled out', () => {
        page1.navigateTo();
        page1.scrollDown();
        page1.clickDiffMailAddress();
        page1.fillMailingAddress(profileData);
        page1.continue();
        expect(browser.getCurrentUrl()).toContain(PAGE2_URL);
        expect(page1.formErrors().count()).toBe(0, 'should be no errors');

        page2.fillSecurityQuestions(profileData);
        page2.scrollDown();
        page2.fillData(profileData);
        browser.sleep(1000 * 5);
        page2.completeRegistration();
        expect(page2.formErrors().count()).toBe(0, 'should be no errors');
        // expect(browser.getCurrentUrl()).toContain(PAGE3_URL, 'should navigate to the Confirmation page');
    });

// tslint:disable-next-line: max-line-length
    it ('05. should be able to go through Account page when Mailing Address is filled out then unchecked the checkbox AND go through Confirmation page if required fields are filled out', () => {
        page1.navigateTo();
        page1.scrollDown();
        page1.clickDiffMailAddress();
        page1.fillMailingAddress(profileData);
        page1.checkDiffMailAddress();
        page1.continue();
        expect(browser.getCurrentUrl()).toContain(PAGE2_URL);
        expect(page1.formErrors().count()).toBe(0, 'should be no errors');

        page2.fillSecurityQuestions(profileData);
        page2.scrollDown();
        page2.fillData(profileData);
        browser.sleep(1000 * 5);
        page2.completeRegistration();
        expect(page2.formErrors().count()).toBe(0, 'should be no errors');
        // expect(browser.getCurrentUrl()).toContain(PAGE3_URL, 'should navigate to the Confirmation page');
    });

// tslint:disable-next-line: max-line-length
    it ('06. should be able to go through Account page when Preferred Name is filled out AND go through Confirmation page if required fields are filled out', () => {
        page1.navigateTo();
        page1.fillPreferredName(profileData);
        browser.sleep(1000 * 5);
        page1.continue();
        expect(browser.getCurrentUrl()).toContain(PAGE2_URL);
        expect(page1.formErrors().count()).toBe(0, 'should be no errors');

        page2.fillSecurityQuestions(profileData);
        page2.scrollDown();
        page2.fillData(profileData);
        browser.sleep(1000 * 5);
        page2.completeRegistration();
        expect(page2.formErrors().count()).toBe(0, 'should be no errors');
        // expect(browser.getCurrentUrl()).toContain(PAGE3_URL, 'should navigate to the Confirmation page');
    });

// tslint:disable-next-line: max-line-length
    it ('07. should be able to go through Account page when BOTH Preferred Name and Mailing Address are filled out THEN go through Confirmation page if required fields are filled out', () => {
        page1.navigateTo();
        page1.fillPreferredName(profileData);
        page1.scrollDown();
        page1.clickDiffMailAddress();
        page1.fillMailingAddress(profileData);
        browser.sleep(1000 * 5);
        page1.continue();
        expect(browser.getCurrentUrl()).toContain(PAGE2_URL);
        expect(page1.formErrors().count()).toBe(0, 'should be no errors');

        page2.fillSecurityQuestions(profileData);
        page2.scrollDown();
        page2.fillData(profileData);
        browser.sleep(1000 * 5);
        page2.completeRegistration();
        expect(page2.formErrors().count()).toBe(0, 'should be no errors');
        // expect(browser.getCurrentUrl()).toContain(PAGE3_URL, 'should navigate to the Confirmation page');
    });
});
