import { SelfDeclarationPage } from './registration.po';
import { browser } from 'protractor';
import { PrimeConstants } from '../../../src/app/models/prime-constants';
import { FakeDataMohReg } from './registration.data';
import { PrimeTestPage } from '../../../e2e/src/app.po';

fdescribe('BCSC Registration - Self-Declaration Page', () => {
    let page: SelfDeclarationPage;
    const data = new FakeDataMohReg();
    let selfDeclarationData;
    const SELF_DECLARATION_PAGE_URL = `enrollment/self-declaration`;
    const PHARMANET_ACCESS_PAGE_URL = `enrollment/pharmanet-access`;

    beforeEach(() => {
        page = new SelfDeclarationPage();
        selfDeclarationData = data.contactInfo();
        data.setSeed(123);
    });

    it('01. should load the page without issue', () => {
        page.navigateTo();
        expect(browser.getCurrentUrl()).toContain(SELF_DECLARATION_PAGE_URL);
        expect(page.formErrors().count()).toBe(0, 'should be no errors on page load');
    });

    it('02. must display guidance information to provide additional details when any of the Self-Declaration responses are Yes.', () => {
        page.navigateTo();
        page.clickOption('Have you ever been the subject', 'fctrue');
        // expect(page.checkTips()).toBe(true);
        // browser.sleep(1000 * 5);
        expect(page.formErrors().count()).toBe(0, 'should be no errors on page load');
    });

    it('03. must capture additional details in free format text for each Self-Declaration question answered Yes.', () => {
        page.navigateTo();
        page.clickOption('Have you ever been the subject', 'fctrue');
        page.typeDescription('convictionDesc', 'sample string');
        expect(page.formErrors().count()).toBe(0, 'should be no errors on page load');
    });

});
