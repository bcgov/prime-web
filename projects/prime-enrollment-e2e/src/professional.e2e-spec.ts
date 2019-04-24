import { ProfessionalPage } from './registration.po';
import { browser } from 'protractor';
import { PrimeConstants } from '../../../src/app/models/prime-constants';
import { FakeDataMohReg } from './registration.data';
import { PrimeTestPage } from '../../../e2e/src/app.po';

fdescribe('BCSC Registration - Professional Page', () => {
    let page: ProfessionalPage;
    const data = new FakeDataMohReg();
    let professionalData;
    const PROFESSIONAL_PAGE_URL = `enrollment/professional`;
    const SELF_DECLARATION_PAGE_URL = `enrollment/self-declaration`;

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
        // expect(page.getContinueButton()).toBe(false);
    });

});
