import { PharmanetAccessPage } from './registration.po';
import { browser } from 'protractor';
import { PrimeConstants } from '../../../src/app/models/prime-constants';
import { FakeDataMohReg } from './registration.data';
import { PrimeTestPage } from '../../../e2e/src/app.po';

fdescribe('BCSC Enrollment - Pharmanet-Access Page', () => {
    let page: PharmanetAccessPage;
    const data = new FakeDataMohReg();
    let pharmanetAccessData;
    const PHARMANET_ACCESS_PAGE_URL = `enrollment/pharmanet-access`;
    const REVIEW_PAGE_URL = `enrollment/review`;

    beforeEach(() => {
        page = new PharmanetAccessPage();
        pharmanetAccessData = data.contactInfo();
        data.setSeed(123);
    });

    it('01. should load the page without issue', () => {
        page.navigateTo();
        expect(browser.getCurrentUrl()).toContain(PHARMANET_ACCESS_PAGE_URL);
        expect(page.formErrors().count()).toBe(0, 'should be no errors on page load');
    });

// tslint:disable-next-line: max-line-length
    it('02. (7.3.34) must allow the PharmaNet User to search for an Organization.', () => {
        page.navigateTo();
        page.clickButton('btn btn-secondary');
        page.selectTypeOfOrg('Health Authority');
        page.typeValue('organization', 'a');
        page.typeValue('city', 'a');
        page.clickButton('btn btn-md');
        expect(page.formErrors().count()).toBe(0, 'should be no errors');
    });

    it('03. (7.3.36) must allow the PharmaNet User to select one or more Organization (s) to enroll at', () => {
        page.navigateTo();
        page.clickButton('btn btn-secondary');
        page.selectTypeOfOrg('Pharmacy');
        page.typeValue('organization', 'a');
        page.typeValue('city', 'a');
        page.clickButton('btn btn-md');
        page.clickCheckBox('Shopper Drug Mart');
        page.clickCheckBox('Save on Foods');
        page.clickButton('btn btn-primary');
        browser.sleep(1000 * 5);
        expect(page.formErrors().count()).toBe(0, 'should be no errors');
    });

    /* FOR FUTURE TESTS */
    // (7.3.35) solution must display all Organizations that match the search criteria for selection
    // (7.3.37) must display to the PharmaNet User their own Organization and Site associations.
    // (7.3.38) must capture if they will access PharmaNet themselves or if access will only be done by
    // an On-Behalf Of user working for them
    // (7.3.39) must allow a PharmaNet User to update the following PharmaNet Access information
});
