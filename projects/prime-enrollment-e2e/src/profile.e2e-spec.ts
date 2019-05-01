import { browser } from 'protractor';
import { PrimeTestPage } from '../../../e2e/src/app.po';
import { ProfilePage } from './enrollment.po';
import { FakeDataEnrollment } from './enrollment.data';

describe('BCSC Enrollment - Profile Page', () => {
    let page: ProfilePage;
    const data = new FakeDataEnrollment();
    let profileData;
    const PROFILE_PAGE_URL = `enrolment/profile`;
    const CONTACT_PAGE_URL = `enrolment/contact`;

    beforeEach(() => {
        page = new ProfilePage();
        profileData = data.profileInfo();
        data.setSeed(123);
        profileData['country'] = 'Canada'; // forced the country to be Canada so the faker will generate a province
    });

    it('01. should load the page without issue', () => {
        page.navigateTo();
        expect(browser.getCurrentUrl()).toContain(PROFILE_PAGE_URL);
        expect(page.formErrors().count()).toBe(0, 'should be no errors on page load');
    });

    it('02. should let user continue without filling out any fields', () => {
        page.navigateTo();
        page.continue();
        expect(browser.getCurrentUrl()).toContain(CONTACT_PAGE_URL, 'should navigate to the Contact page');
        expect(page.formErrors()).toEqual([], 'should be no errors as form should be valid');
    });

    it('03. should let users set their own mailing address', () => {
        page.navigateTo();
        page.scrollDown();
        page.clickDiffMailAddress();
        page.fillMailingAddress(profileData);
        page.continue();

        expect(browser.getCurrentUrl()).toContain(CONTACT_PAGE_URL, 'should navigate to the Contact page');
        expect(page.formErrors()).toEqual([], 'should be no errors as form should be valid');
    });

    xit('04. should NOT let users continue with an incomplete mailing address', () => {
        page.navigateTo();
        page.scrollDown();
        page.clickDiffMailAddress();
        page.continue();

        expect(browser.getCurrentUrl()).toContain(PROFILE_PAGE_URL, 'url should not change');
        expect(page.formErrors().count()).toEqual(3, 'page should show 3 error texts on continue');
    });

    it('05. should let users partially fill out a mailing address but uncheck it, and continue', () => {
        page.navigateTo();
        page.scrollDown();
        page.clickDiffMailAddress();
        page.fillMailingAddress(profileData);
        page.checkDiffMailAddress();
        page.continue();

        expect(browser.getCurrentUrl()).toContain(CONTACT_PAGE_URL, 'should navigate to the Accounts page');
        expect(page.formErrors()).toEqual([], 'should be no errors as form should be valid');
    });

    it('06. should let users set Preferred First, Middle, and Last name', () => {
        page.navigateTo();
        page.fillPreferredName(profileData);
        browser.sleep(1000 * 5);
        page.continue();

        expect(browser.getCurrentUrl()).toContain(CONTACT_PAGE_URL, 'should navigate to the Accounts page');
        expect(page.formErrors()).toEqual([], 'should be no errors as form should be valid');
    });

    it('07. should not be able to edit read-only information (just check that the fields are disabled)', () => {
        page.navigateTo();
        expect(page.checkEnabled()).toBe(false);
    });

    // if the individual has no legal first name, they may provide a preferred last name only
    // Where the mailing address Country is 'Canada', chosen from a list of all Canadian Provinces and Territories, defaulted to 'BC'
    // Where the mailing address is NOT Canada, must be entered as free format text
    // If Country is Canada the postal code must be in the standard format of a Canadian postal code (e.g. A1A 2E2)
    // If Country is 'Other', the entry is free format text

    /* FOR FUTURE TESTS */
    // When Registration information is not being used and Country is Canada,
    // the solution must validate the PRIME mailing information captured.
});
