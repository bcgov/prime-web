import { browser } from 'protractor';
import { PrimeTestPage } from '../../../e2e/src/app.po';
import { ContactPage } from './enrollment.po';
import { FakeDataEnrollment } from './enrollment.data';

describe('BCSC Enrollment- Contact Page', () => {
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
        page.clickContactMethod();
        page.fillContactInfo(contactData);
        browser.sleep(1000 * 5);
        page.continue();
        expect(browser.getCurrentUrl()).toContain(PROFESSIONAL_PAGE_URL);
    });

    it('04. should let user to continue even if extension number is not filled out (because it is optional)', () => {
        contactData['extension'] = '';
        page.navigateTo();
        page.clickContactMethod();
        page.fillContactInfo(contactData);
        browser.sleep(1000 * 5);
        page.continue();
        expect(browser.getCurrentUrl()).toContain(PROFESSIONAL_PAGE_URL);
    });

    /* FOR FUTURE TESTS */
    /*
            01. should make sure email address is unique
            02. If user enters "test" as email it says "email is required." It SHOULD say "email format wrong"
            03. Phone Number for Voice Contact
                - should be freeform text (i.e. user is NOT forced to start numbers with a 1. should be able to start with 0 for UK #).
                - needs to be optional - update label and field logic
    */
});
