import { MohAccountTestPage } from './moh-registration.po';
import { browser } from 'protractor';
import { PrimeConstants } from '../../../src/app/models/prime-constants';
import { FakeDataMohReg } from './moh-registration.data';

describe('MoH Registration - Account Page', () => {
    let page: MohAccountTestPage;
    const data = new FakeDataMohReg();
    const PAGE_URL = `${PrimeConstants.MOH_REGISTRATION}/${PrimeConstants.ACCOUNT_PG}`;
    const NEXT_PAGE_URL =  `${PrimeConstants.MOH_REGISTRATION}/${PrimeConstants.SECURITY_PG}`;

    beforeEach(() => {
        page = new MohAccountTestPage();
    });

    it('should load the page without issue', () => {
        page.navigateTo();
        expect(browser.getCurrentUrl()).toContain(PAGE_URL);
    });

});
