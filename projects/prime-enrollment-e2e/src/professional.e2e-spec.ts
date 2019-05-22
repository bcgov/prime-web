import { browser } from 'protractor';
import { PrimeTestPage } from '../../../e2e/src/app.po';
import { ProfessionalPage } from './enrollment.po';
import { FakeDataEnrollment } from './enrollment.data';

fdescribe('Prime Enrolment - Professional Page', () => {
    let page: ProfessionalPage;
    const data = new FakeDataEnrollment();
    let professionalData;
    const PROFESSIONAL_PAGE_URL = `enrolment/professional`;
    const SELF_DECLARATION_PAGE_URL = `enrolment/self-declaration`;

    beforeEach(() => {
        page = new ProfessionalPage();
        professionalData = data.contactInfo();
        data.setSeed(123);
    });

    it('01. should load the page without issue', () => {
        page.navigateTo();
        expect(browser.getCurrentUrl()).toContain(PROFESSIONAL_PAGE_URL);
        expect(page.formErrors().count()).toBe(0, 'should be no errors on page load');
    });

    it('02. should NOT let the user to continue when no radio buttons are clicked', () => {
        page.navigateTo();
        page.continue();
        expect(browser.getCurrentUrl()).toContain(PROFESSIONAL_PAGE_URL);
    });

    it('03. (7.3.17.) capture the college reference number for each of the individual\'s professional college association.', () => {
        page.navigateTo();
        page.clickOption('collegeCert', 'Yes');
        page.selectOption('collegeCert', 'College of Physicians and Surgeons of BC');
        expect(page.getNameComponent('basic-addon1')).toContain('91');
    });

    it('04. (7.3.19) The solution must display and capture the License Class based on selected registered college', () => {
        page.navigateTo();
        page.clickOption('collegeCert', 'Yes');
        page.selectOption('collegeCert', 'College of Pharmacists of BC (CPBC)');
        page.selectOption('licenseClass', 'Full Pharmacist');
        expect(page.formErrors().count()).toBe(0, 'should be no errors');
    });

    // This test should fail for now because the default value is NOT no.
    xit('05. (7.3.24) capture if the individual is registered with PharmaCare as a Device Provider. The default value for this must be No.', () => {
        page.navigateTo();
        page.clickOption('collegeCert', 'Yes');
        page.selectOption('collegeCert', 'College of Pharmacists of BC (CPBC)');
        page.typeText('licenseNum', '0');
        page.selectOption('licenseClass', 'Full Pharmacist');
        page.typeText('datepicker-', '2020/01/01');
        expect(page.checkDeviceProvider('dpfalse')).toBe(true);
        expect(page.formErrors().count()).toBe(0, 'should be no errors');
    });

    it('06. (7.3.25) must capture the Device Provider Number when the individual has identified as a Device Provider.', () => {
        page.navigateTo();
        page.clickOption('collegeCert', 'Yes');
        page.selectOption('collegeCert', 'College of Pharmacists of BC (CPBC)');
        page.typeText('licenseNum', '0');
        page.selectOption('licenseClass', 'Full Pharmacist');
        page.typeText('datepicker-', '2020/01/01');
        page.scrollDown();
        page.clickYesForDeviceProvider();
        page.typeDeviceProviderNum('0');
        expect(page.formErrors().count()).toBe(0, 'should be no errors');
    });

    // This test should fail for now because user can do no-no-no answers
    xit('07. should be able to require user to select at least one "Yes" to all the questions', () => {
        page.navigateTo();
        page.clickOption('collegeCert', 'No');
        page.clickOption('deviceProvider', 'dpfalse');
        page.clickOption('onBehalfOf', 'oboFalse');
        page.continue();
        expect(page.formErrors().count()).toBe(1, 'should have at least one option to be Yes.');
        expect(browser.getCurrentUrl()).toContain(PROFESSIONAL_PAGE_URL, 'should stay on the same page');
    });

    // e2e hasn't been tested using IE so this test will not work for now in IE
    it('08. should be able to select a date using Calendar Control in Renewal Date field (for IE)', () => {
        page.navigateTo();
        page.clickOption('collegeCert', 'Yes');
        page.selectOption('collegeCert', 'College of Pharmacists of BC (CPBC)');
        page.typeText('licenseNum', '0');
        page.selectOption('licenseClass', 'Full Pharmacist');
        page.typeText('datepicker-', '2020/01/01');
        expect(page.formErrors().count()).toBe(0, 'should be no errors');
    });

    // This test should fail for now because Job Title is not yet required
    it('09. should be able to require user to fill out Job Title field', () => {
        page.navigateTo();
        page.clickOption('collegeCert', 'No');
        page.clickOption('deviceProvider', 'dpfalse');
        page.clickOption('onBehalfOf', 'oboTrue');
        page.continue();
        expect(page.getErrorTextVal('Job title')).toBe('Job title is required');
        expect(browser.getCurrentUrl()).toContain(PROFESSIONAL_PAGE_URL, 'should stay on the same page');
    });

    /*
        FOR FUTURE TESTS
        7.3.18. capture Practitioner College ID -  alphanumeric free format text, the solution must validate Practitioner College ID against PharmaNet
        7.3.20. must capture any Limits and Conditions that have been placed on the PharmaNet User's licence, for each College Licence entered.
        7.3.21. capture a License End Date for each of the individual's professional college associations with a Time Limited License Class
        The date entered must be one year or less from today's date. The list of Time Limited License Classes will be provided by the Ministry.
        7.3.22. College Registration Renewal Date - must be in the future and must be within a configurable time period e.g. must be one year or less in the future
        7.3.26. must capture the On-Behalf-Of job title when the individual has not identified as a Regulated User or Device Provider
    */

});
