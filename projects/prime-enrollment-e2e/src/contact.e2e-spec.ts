import { browser } from 'protractor';
import { PrimeConstants } from '../../../src/app/models/prime-constants';
import { PrimeTestPage } from '../../../e2e/src/app.po';
import { ContactPage } from './enrollment.po';
import { FakeDataEnrollment } from './enrollment.data';

describe('BCSC Enrollment- Contact Page', () => {
    let page: ContactPage;
    const data = new FakeDataEnrollment();
    let contactData;
    const CONTACT_PAGE_URL = `enrollment/contact`;
    const PROFESSIONAL_PAGE_URL = `enrollment/professional`;

    beforeEach(() => {
        page = new ContactPage();
        contactData = data.contactInfo();
        data.setSeed(123);
    });

    it('01. should load the page without issue', () => {
        page.navigateTo();
        expect(browser.getCurrentUrl()).toContain(CONTACT_PAGE_URL);
        expect(page.formErrors().count()).toBe(0, 'should be no errors on page load');
    });

    it('02. should NOT let the user to continue when the required fields are not filled out', () => {
        page.navigateTo();
        page.continue();
        expect(browser.getCurrentUrl()).toContain(CONTACT_PAGE_URL);
        // expect(page.getContinueButton()).toBe(false);
    });

    it('03. should let user to continue when all the fields are filled out', () => {
        page.navigateTo();
        page.clickContactMethod();
        page.fillContactInfo(contactData);
        browser.sleep(1000 * 5);
        page.continue();
        expect(browser.getCurrentUrl()).toContain(PROFESSIONAL_PAGE_URL);
    });

    it('04. should let user type the preferred contact method', () => {
        page.navigateTo();
        page.typeContactMethod();
        page.fillContactInfo(contactData);
        browser.sleep(1000 * 5);
        page.continue();
        expect(browser.getCurrentUrl()).toContain(PROFESSIONAL_PAGE_URL);
    });

    it('05. should let user to continue even if extension number is not filled out (because it is optional)', () => {
        contactData['extension'] = '';
        page.navigateTo();
        page.clickContactMethod();
        page.fillContactInfo(contactData);
        browser.sleep(1000 * 5);
        page.continue();
        expect(browser.getCurrentUrl()).toContain(PROFESSIONAL_PAGE_URL);
    });

    /* FOR FUTURE TESTS */
    // should make sure email address is unique

});
