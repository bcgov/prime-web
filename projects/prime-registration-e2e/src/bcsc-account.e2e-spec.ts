import { BCSCAccountTestPage } from './registration.po';
import { browser } from 'protractor';
import { PrimeConstants } from '../../../src/app/models/prime-constants';
import { FakeDataMohReg } from './registration.data';

fdescribe('BCSC Registration - Account Page', () => {
    let page: BCSCAccountTestPage;
    const data = new FakeDataMohReg();
    const PAGE_URL = `${PrimeConstants.BCSC_REGISTRATION}/${PrimeConstants.ACCOUNT_PG}`;
    const NEXT_PAGE_URL =  `${PrimeConstants.BCSC_REGISTRATION}/${PrimeConstants.SECURITY_PG}`;

    beforeEach(() => {
        // TODO - Should be BCSCAccountTestPage() - create new class and extend from MoHAccountTestPage
        page = new BCSCAccountTestPage();
        // just like we do for BCSCProfileTestPage
        // page = new MohAccountTestPage();
    });

    it('should load the page without issue', () => {
        page.navigateTo();
        expect(browser.getCurrentUrl()).toContain(PAGE_URL);
    });

    xit('02. should not let users continue without filling out form', () => {
        page.navigateTo();
        expect(page.formErrors().count()).toBe(0, 'should be no errors on page load');
  
        page.completeRegistration();
        expect(page.formErrors().count()).toEqual(6, 'page should show 6 error texts on continue');
        expect(browser.getCurrentUrl()).toContain(PAGE_URL, 'url should not change');
    });

    xit('03. should require users fill out Mobile/SMS and Email', () => {
        
    });

	//should require security questions to be filled out
	//should require security questions to be unique
	//should have default security questions

});
