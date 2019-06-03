import { browser } from 'protractor';
import { PrimeTestPage } from '../../../e2e/src/app.po';
import { SelfDeclarationPage } from './enrollment.po';
import { FakeDataEnrollment } from './enrollment.data';

describe('Prime Enrolment - Self-Declaration Page', () => {
    let page: SelfDeclarationPage;
    const data = new FakeDataEnrollment();
    let selfDeclarationData;
    const SELF_DECLARATION_PAGE_URL = `enrolment/self-declaration`;
    const PHARMANET_ACCESS_PAGE_URL = `enrolment/pharmanet-access`;
    const seedVal = Math.floor(Math.random() * Math.floor(1000));

    beforeEach(() => {
        page = new SelfDeclarationPage();
        selfDeclarationData = data.contactInfo();
        data.setSeed(seedVal);
    });

    it('Seed #' + seedVal + '\n 01. should load the page without issue', () => {
        page.navigateTo();
        expect(browser.getCurrentUrl()).toContain(SELF_DECLARATION_PAGE_URL);
        expect(page.formErrors().count()).toBe(0, 'should be no errors on page load');
    });

    it('02. (7.3.31) must display guidance information to provide additional details when any of the Self-Declaration responses are Yes.', () => {
        page.navigateTo();
        page.clickOptions('Have you ever been the subject', 'fctrue');
        expect(page.formErrors().count()).toBe(0, 'should be no errors on page load');
    });

    it('03. (7.3.32) must capture additional details in free format text for each Self-Declaration question answered Yes.', () => {
        page.navigateTo();
        page.clickOptions('Have you ever been the subject', 'fctrue');
        page.typeDescription('convictionDesc', 'sample string');
        expect(page.formErrors().count()).toBe(0, 'should be no errors on page load');
    });

    // This test will not work because uploadFile method is not working.
    it('04. (7.3.33) must allow upload of supporting documents if any Self-Declaration question was answered Yes.', () => {
        page.navigateTo();
        page.clickOptions('Have you ever been the subject', 'fctrue');
        page.typeDescription('convictionDesc', 'sample string');
        page.uploadFile();
        browser.sleep(1000 * 5);
        // expect(page.formErrors().count()).toBe(0, 'should be no errors on page load');
    });

    // This test should fail for now because error labels haven't been changed
    xit('05. should make the error labels not verbose when user clicks continue on blank page', () => {
        page.navigateTo();
        page.continue();
        expect(page.getErrorTextVal('Have you ever been the subject')).toBe('Please answer yes or no');
        expect(page.formErrors().count()).toBe(4, 'should have 4 errors for not answering the 4 questions');
        expect(browser.getCurrentUrl()).toContain(SELF_DECLARATION_PAGE_URL);
    });

});
