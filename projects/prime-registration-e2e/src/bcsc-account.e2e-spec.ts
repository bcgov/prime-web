import { BCSCAccountTestPage } from './registration.po';
import { browser } from 'protractor';
import { FakeDataMohReg } from './registration.data';
import faker = require('faker');
import { RegistrationConstants } from '../../prime-registration/src/app/modules/registration/models/registration-constants.model';

describe('BCSC Registration - Account Page', () => {
    let page: BCSCAccountTestPage;
    let profileData;
    const data = new FakeDataMohReg();
    const PAGE_URL = `${RegistrationConstants.BCSC_REGISTRATION}/${RegistrationConstants.ACCOUNT_PG}`;
    const NEXT_PAGE_URL =  `${RegistrationConstants.BCSC_REGISTRATION}/${RegistrationConstants.CONFIRMATION_PG}`;

    beforeEach(() => {
        // TODO - Should be BCSCAccountTestPage() - create new class and extend from MoHAccountTestPage
        page = new BCSCAccountTestPage();
        profileData = data.profileInfo();
        // just like we do for BCSCProfileTestPage
        // page = new MohAccountTestPage();
    });

    it('should load the page without issue', () => {
        page.navigateTo();
        expect(browser.getCurrentUrl()).toContain(PAGE_URL);
    });

    it('02. should not let users continue without filling out form', () => {
        page.navigateTo();
        expect(page.formErrors().count()).toBe(0, 'should be no errors on page load');
        page.scrollDown();
        page.completeRegistration();
        expect(page.formErrors().count()).toEqual(8, 'page should show 8 error texts on continue');
        expect(browser.getCurrentUrl()).toContain(PAGE_URL, 'url should not change');
    });

    it('03. should require users fill out Mobile/SMS and Email', () => {
        page.navigateTo();
        page.scrollDown();
        page.fillData(profileData);
        page.completeRegistration();
        expect(page.formErrors().count()).toEqual(6, 'page should show 6 error texts on continue');
        expect(browser.getCurrentUrl()).toContain(PAGE_URL, 'url should not change');
    });

    it('04. should require security questions to be filled out', () => {
        page.navigateTo();
        page.fillSecurityQuestions(profileData);
        page.scrollDown();
        page.fillData(profileData);
        page.completeRegistration();
        expect(page.formErrors().count()).toBe(0, 'should be no errors');
        // expect(browser.getCurrentUrl()).toContain(NEXT_PAGE_URL, 'should navigate to the Confirmation page');
    });

    it('05. should show errors if the user input duplicate questions/if questions are not unique', () => {
        // Question 1 and 2 will be the same to test if it's checking where the question is unique or not
        profileData['secQues1'] = faker.lorem.sentence();
        profileData['secQues2'] = profileData['secQues1'];

        page.navigateTo();
        page.fillSecurityQuestions(profileData);
        page.scrollDown();
        page.fillData(profileData);
        page.completeRegistration();
        expect(page.formErrors().count()).toEqual(1, 'page should show 1 error text on continue');
        expect(browser.getCurrentUrl()).toContain(PAGE_URL, 'url should not change');
        // expect(browser.getCurrentUrl()).toContain(NEXT_PAGE_URL, 'should navigate to the Confirmation page');
    });
});
