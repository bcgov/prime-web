import { browser } from 'protractor';
import { PrimeTestPage } from '../../../e2e/src/app.po';
import { PharmanetAccessPage } from './enrollment.po';
import { FakeDataEnrollment } from './enrollment.data';

describe('Prime Enrolment - Pharmanet-Access Page', () => {
    let page: PharmanetAccessPage;
    const data = new FakeDataEnrollment();
    let pharmanetAccessData;
    const PHARMANET_ACCESS_PAGE_URL = `enrolment/pharmanet-access`;
    const REVIEW_PAGE_URL = `enrolment/review`;

    beforeEach(() => {
        page = new PharmanetAccessPage();
        pharmanetAccessData = data.contactInfo();
        data.setSeed();
    });

    it('01. should load the page without issue', () => {
        page.navigateTo();
        expect(browser.getCurrentUrl()).toContain(PHARMANET_ACCESS_PAGE_URL);
        expect(page.formErrors().count()).toBe(0, 'should be no errors on page load');
    });

    it('02. (7.3.34) must allow the PharmaNet User to search for an Organization.', () => {
        page.navigateTo();
        page.clickButton('btn btn-secondary', 'Add Organization');
        page.selectTypeOfOrg('Health Authority');
        page.typeValue('organization', 'a');
        page.typeValue('city', 'a');
        page.clickButton('btn btn-md', 'Find');
        expect(page.formErrors().count()).toBe(0, 'should be no errors');
    });

    it('03. (7.3.36) must allow the PharmaNet User to select one or more Organization (s) to enroll at', () => {
        page.navigateTo();
        page.clickButton('btn btn-secondary', 'Add Organization');
        page.selectTypeOfOrg('Pharmacy');
        page.typeValue('organization', 'a');
        page.typeValue('city', 'a');
        page.clickButton('btn btn-md', 'Find');
        page.clickCheckBox('Shopper Drug Mart');
        page.clickCheckBox('Save on Foods');
        page.clickButton('btn btn-primary', 'Add');
        browser.sleep(1000 * 5);
        expect(page.formErrors().count()).toBe(0, 'should be no errors');
        expect(browser.getCurrentUrl()).toContain(PHARMANET_ACCESS_PAGE_URL);
    });

    // This test should fail for now because user can still search without filling out the required fields
    xit('04. Shouldnt be able to search if fields are invalid. Can currently search with blank pages.', () => {
        page.navigateTo();
        page.clickButton('btn btn-secondary', 'Add Organization');
        page.clickButton('btn btn-md', 'Find');
        expect(page.formErrors().count()).toBe(2, 'should have 2 errors for not filling out the 2 required fields');
        expect(browser.getCurrentUrl()).toContain(PHARMANET_ACCESS_PAGE_URL);
    });

    // This test should fail for now - issue on IE
    xit('05. should be able to enter End Field instead of deleting the record (for IE)', () => {
        page.navigateTo();
        page.clickButton('btn btn-secondary', 'Add Organization');
        page.selectTypeOfOrg('Health Authority');
        page.typeValue('organization', 'a');
        page.typeValue('city', 'a');
        page.clickButton('btn btn-md', 'Find');
        page.clickCheckBox('Vancouver Island Health');
        page.clickCheckBox('Shopper Drug Mart');
        page.clickButton('btn btn-primary', 'Add');
        page.selectDate('startDate', '10');
        page.selectDate('endDate', '25');
        expect(page.formErrors().count()).toBe(0, 'should be no errors');
    });

    // This test should fail for now because there's no delete button if only one record is present
    it('06. should be able to delete organization if there is only one listed', () => {
        page.navigateTo();
        page.clickButton('btn btn-secondary', 'Add Organization');
        page.selectTypeOfOrg('Health Authority');
        page.typeValue('organization', 'a');
        page.typeValue('city', 'a');
        page.clickButton('btn btn-md', 'Find');
        page.clickCheckBox('Vancouver Island Health');
        page.clickButton('btn btn-primary', 'Add');
        page.clickButton('btn delete', '');
        expect(page.formErrors().count()).toBe(0, 'should have no errors');
        expect(browser.getCurrentUrl()).toContain(PHARMANET_ACCESS_PAGE_URL);
    });

    // e2e hasn't been tested using IE so this test will not work for now in IE
    xit('07. should be able to require user to fill out Start Field (for IE)', () => {
        page.navigateTo();
        page.clickButton('btn btn-secondary', 'Add Organization');
        page.selectTypeOfOrg('Health Authority');
        page.typeValue('organization', 'a');
        page.typeValue('city', 'a');
        page.clickButton('btn btn-md', 'Find');
        page.clickCheckBox('Vancouver Island Health');
        page.clickButton('btn btn-primary', 'Add');
        page.selectDate('startDate', '10');
        page.selectDate('endDate', '25');
        expect(page.formErrors().count()).toBe(0, 'should have no errors');
        expect(browser.getCurrentUrl()).toContain(PHARMANET_ACCESS_PAGE_URL);
    });

    // This test should fail because Find button is not yet visible after the first search
    xit('08. should be able to do another search after the first search for adding organization', () => {
        page.navigateTo();
        page.clickButton('btn btn-secondary', 'Add Organization');
        page.selectTypeOfOrg('Health Authority');
        page.typeValue('organization', 'a');
        page.typeValue('city', 'a');
        page.clickButton('btn btn-md', 'Find');
        page.selectTypeOfOrg('Pharmacy');
        page.typeValue('organization', 'a');
        page.clickButton('btn btn-md', 'Find');
        expect(page.formErrors().count()).toBe(0, 'should have no errors');
        expect(browser.getCurrentUrl()).toContain(PHARMANET_ACCESS_PAGE_URL);
    });

    it('09. should be able to select start and end date by clicking the datepicker (dates have the same month)', () => {
        page.navigateTo();
        page.clickButton('btn btn-secondary', 'Add Organization');
        page.selectTypeOfOrg('Health Authority');
        page.typeValue('organization', 'a');
        page.typeValue('city', 'a');
        page.clickButton('btn btn-md', 'Find');
        page.clickCheckBox('Vancouver Island Health');
        page.clickButton('btn btn-primary', 'Add');
        page.selectDate('startDate', '10');
        page.selectDate('endDate', '25');
        // expect(page.checkDate('startDate')).toBe('2019/06/10', 'should be the start date selected earlier');
        expect(page.formErrors().count()).toBe(0, 'should have no errors');
        expect(browser.getCurrentUrl()).toContain(PHARMANET_ACCESS_PAGE_URL);
    });

    it('10. should be able to set past and future month and year for start date and end date respectively', () => {
        page.navigateTo();
        page.clickButton('btn btn-secondary', 'Add Organization');
        page.selectTypeOfOrg('Health Authority');
        page.typeValue('organization', 'a');
        page.typeValue('city', 'a');
        page.clickButton('btn btn-md', 'Find');
        page.clickCheckBox('Vancouver Island Health');
        page.clickButton('btn btn-primary', 'Add');
        page.selectSpecificDate('startDate', '2019', 'May', '10');
        page.selectSpecificDate('endDate', '2029', 'Dec', '25');
        expect(page.formErrors().count()).toBe(0, 'should have no errors');
        expect(browser.getCurrentUrl()).toContain(PHARMANET_ACCESS_PAGE_URL);
    });
    /*
        FOR FUTURE TESTS
        (7.3.35) solution must display all Organizations that match the search criteria for selection
        (7.3.37) must display to the PharmaNet User their own Organization and Site associations.
        (7.3.38) must capture if they will access PharmaNet themselves or if access will only be done by
                an On-Behalf Of user working for them
    */
});

