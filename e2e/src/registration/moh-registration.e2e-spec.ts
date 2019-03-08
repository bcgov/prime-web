import { MohProfileTestPage } from './moh-registration.po';
import { browser } from 'protractor';
import { PrimeConstants } from '../../../src/app/models/prime-constants';
import { FakeDataMohReg } from './moh-registration.data';

describe('MoH Registration - Profile Page', () => {
    let page: MohProfileTestPage;
    const data = new FakeDataMohReg();
    const PAGE_URL = `${PrimeConstants.MOH_REGISTRATION}/${PrimeConstants.PROFILE_PG}`;
    const NEXT_PAGE_URL =  `${PrimeConstants.MOH_REGISTRATION}/${PrimeConstants.DOC_UPLD_PG}`;

    beforeEach(() => {
        page = new MohProfileTestPage();
    });

    it('should load the page without issue', () => {
        page.navigateTo();
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

    it('should let the user continue when the form is filled out (Canada)', () => {
        const profileData = data.profileInfo();
        profileData['country'] = 'Canada';

        page.navigateTo();
        page.fillPage(profileData);
        page.continue();

        expect(browser.getCurrentUrl()).toContain(NEXT_PAGE_URL, 'should navigate to the Document Upload page');
        // todo - improve this, so that it properly shows the error names if they exist
        expect(page.formErrors().count()).toBe(0, 'should be no errors as form should be valid');
    });

    it('should let the user continue when the form is filled out (United States)', () => {
      const profileData = data.profileInfo();
      profileData['country'] = 'United States';
      profileData['province'] = 'California';

      page.navigateTo();
      page.fillPage(profileData);
      page.continue();

      expect(browser.getCurrentUrl()).toContain(NEXT_PAGE_URL, 'should navigate to the Document Upload page');
      expect(page.formErrors().count()).toBe(0, 'should be no errors as form should be valid');
  });

    // should allow first name to be blank
    // should not allow last name to be blank

    // should not let user continue if mailing address is empty
      // -- form has been filled out and is valid
      // -- then click 'My Mailing Address is Different'
      // -- form should NOT be valid now

    // should show mailing address when checkbox is unchecked
    // should show mailing address when button is pressed
    // should hide mailing address when checkbox is re-checked
    // should hide mailing address when checkbox is re-checked after button press

    // should show a blue "Continue" button on the bottom
      // -- bonus if you can use protractor's "isDisplayed()"

    // todo - get some tests about Preferred Name. will have to fix the
    // getNameComponent method as it can't select them now. maybe a parent
    // selector?
});
