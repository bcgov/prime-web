import { browser } from 'protractor';
import { PrimeTestPage } from '../../../e2e/src/app.po';
import { ContactPage } from './enrollment.po';
import { FakeDataEnrollment } from './enrollment.data';

describe('Prime Enrolment - Contact Page', () => {
    let page: ContactPage;
    const data = new FakeDataEnrollment();
    let contactData;
    const CONTACT_PAGE_URL = `enrolment/contact`;
    const PROFESSIONAL_PAGE_URL = `enrolment/professional`;

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
    });

    it('03. should let user to continue when all the fields are filled out', () => {
        page.navigateTo();
        page.fillContactMethod(contactData);
        page.fillOptionalFields(contactData);
        page.continue();
        expect(browser.getCurrentUrl()).toContain(PROFESSIONAL_PAGE_URL);
    });

    it('04. should let user to continue even if voice phone and extension num are not filled out (they are optional)', () => {
        page.navigateTo();
        page.fillContactMethod(contactData);
        page.continue();
        expect(page.formErrors().count()).toBe(0, 'should be no errors');
        expect(browser.getCurrentUrl()).toContain(PROFESSIONAL_PAGE_URL);
    });

    // This test should fail for now because the error text is not yet changed
    xit('05. If user enters "test" as email it says "email is required." It SHOULD say "email format wrong"', () => {
        contactData.email = 'test';
        page.navigateTo();
        page.fillSpecificContactMethod(contactData);
        page.continue();
        browser.sleep(1000 * 5);
        expect(page.getErrorTextVal('Email')).toBe('Incorrect email format');
        expect(page.formErrors().count()).toBe(1, 'should be an error on email address');
        expect(browser.getCurrentUrl()).toContain(CONTACT_PAGE_URL);
    });

    it('06. should be able to enter international phone number in Voice Contact field', () => {
        contactData.mobile = '07712345678'; // sample UK phone number
        page.navigateTo();
        page.fillContactMethod(contactData);
        page.fillOptionalFields(contactData);
        expect(page.getInputTextVal('voicePhone')).toBe('07712345678');
        page.continue();
        expect(page.formErrors().count()).toBe(0, 'should be no errors');
        expect(browser.getCurrentUrl()).toContain(PROFESSIONAL_PAGE_URL);
    });

    /*
        FOR FUTURE TESTS
            01. should make sure email address is unique (need back-end data)
    */
});
