import { MohProfilePage } from './moh-registration.po';
import { browser } from 'protractor';
import { PrimeConstants } from '../../../src/app/models/prime-constants';
import { FakeDataMohReg } from './moh-registration.data';

describe('MoH Registration - Profile Page', () => {
    let page: MohProfilePage;
    const data = new FakeDataMohReg();
    const PAGE_URL = `${PrimeConstants.MOH_REGISTRATION}/${PrimeConstants.PROFILE_PG}`;
    const NEXT_PAGE_URL =  `${PrimeConstants.MOH_REGISTRATION}/${PrimeConstants.DOC_UPLD_PG}`;

    beforeEach(() => {
        page = new MohProfilePage();
    });

    it('should navigate to the moh-registration/profile page without route guards', () => {
        page.navigateTo();
        browser.sleep(25); // Total guess - giving time to see if route guards fire.
        expect(browser.getCurrentUrl()).toContain(PAGE_URL);
    });

    it('should not let user continue before completing page', () => {
        page.navigateTo();
        expect(page.formErrors().count()).toBe(0, 'should be no errors on page load');
        page.continue();
        // user should see errors and not move forward pages
        // 5 errors - last name, birthdate, address, city, postal
        expect(page.formErrors().count()).toEqual(5, 'page should show 5 error texts on continue');
        expect(browser.getCurrentUrl()).toContain(PAGE_URL, 'url should not change');
    });

    fit('should let the user continue when the form is filled out (Canada)', async () => {
        const profileData = data.profileInfo();
        page.navigateTo();

        // potentially have a - fullPage(data) fn that calls lower ones as helper
        page.fillName(profileData);
        page.fillBirthDate(profileData.birthDate);
        page.fillAddress(profileData);

        browser.sleep(1 * 1000);
        page.continue();
        expect(browser.getCurrentUrl()).toContain(NEXT_PAGE_URL, 'should navigate to the Document Upload page')
        expect(page.formErrors().count()).toBe(0, 'should be no errors as form should be valid');

        // expect(await page.getNameComponentVal('First Name'))
        // .toEqual(profileData.firstName, 'first name should match');

        // expect(page.getNameComponentVal('Last Name'))
        // .toEqual(profileData.lastName, 'last name should match');



      // expect(browser.)
        // expect()

        // const elName = page.getNameElement()

        // expect(profileData.firstName).to

        browser.sleep(2 * 1000);
    });

    //
    // should not let user continue before completing page
    // should allow the first name to NOT be entered
});
