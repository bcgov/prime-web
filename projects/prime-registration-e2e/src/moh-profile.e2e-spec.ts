import { MohProfileTestPage } from './registration.po';
import { browser } from 'protractor';
import { FakeDataMohReg } from './registration.data';
import { PrimeTestPage } from '../../../e2e/src/app.po';
import { RegistrationConstants } from '@prime-registration/modules/registration/models/registration-constants.model';

xdescribe('MoH Registration - Profile Page', () => {
    let page: MohProfileTestPage;
    let accountPage: PrimeTestPage;
    const data = new FakeDataMohReg();
    let profileData;
    const PAGE_URL = `${RegistrationConstants.MOH_REGISTRATION}/${RegistrationConstants.PROFILE_PG}`;
    const NEXT_PAGE_URL =  `${RegistrationConstants.MOH_REGISTRATION}/${RegistrationConstants.DOC_UPLD_PG}`;

    beforeEach(() => {
        page = new MohProfileTestPage();
        accountPage = new PrimeTestPage();
        profileData = data.profileInfo();
        data.setSeed(123);
        // profileData['firstName'] = "John";
        // profileData['lastName'] = "Doe";
        // profileData['birthDate'] = new Date();
        // profileData['preferredFirstName'] = "John";
        // profileData['preferredLastName'] = "Doe";
        profileData['country'] = 'Canada'; // forced the country to be Canada so the faker will generate a province
    });


    it('01. should load the page without issue', () => {
        page.navigateTo();
        expect(browser.getCurrentUrl()).toContain(PAGE_URL);
        browser.sleep(1000 * 5);
    });


    it('02. should not let user continue before completing page', () => {
        page.navigateTo();
        expect(page.formErrors().count()).toBe(0, 'should be no errors on page load');
        page.continue();

        // user should see errors and not move forward pages
        // 5 errors - last name, birthdate, address, city, postal
        expect(page.formErrors().count()).toEqual(5, 'page should show 5 error texts on continue');
        expect(browser.getCurrentUrl()).toContain(PAGE_URL, 'url should not change');
    });


    it('03. should let the user continue when the form is filled out (Canada)', () => {
        page.navigateTo();
        page.fillPage(profileData);
        page.continue();

        expect(browser.getCurrentUrl()).toContain(NEXT_PAGE_URL, 'should navigate to the Document Upload page');
        expect(page.formErrors()).toEqual([], 'should be no errors as form should be valid');
    });


    it('04. should let the user continue when the form is filled out (United States)', () => {
      profileData['country'] = 'United States';
      profileData['province'] = 'California';

      page.navigateTo();
      page.fillPage(profileData);
      page.continue();

      expect(page.formErrors()).toEqual([], 'should be no errors as form is valid');
      expect(browser.getCurrentUrl()).toContain(NEXT_PAGE_URL, 'should navigate to the Document Upload page');
      // expect(page.formErrors().count()).toBe(0, 'should be no errors as form should be valid');
    });

    it('05. should allow first name to be blank', () => {
      profileData['firstName'] = '';

      page.navigateTo();
      page.fillPage(profileData);
      // browser.sleep(1000 * 10);
      page.continue();

      expect(browser.getCurrentUrl()).toContain(NEXT_PAGE_URL, 'should navigate to the Document Upload page');
      expect(page.formErrors()).toEqual([], 'should be no errors as form should be valid');
    });

    it('06. should not allow last name to be blank', () => {
      profileData['lastName'] = '';

      page.navigateTo();
      page.fillPage(profileData);
      // browser.sleep(1000 * 10);
      page.continue();

      expect(page.formErrors().count()).toEqual(1, 'page should show 1 error texts on continue');
      expect(browser.getCurrentUrl()).toContain(PAGE_URL, 'url should not change');
    });


    // should not let user continue if mailing address is empty
      // -- form has been filled out and is valid
      // -- then click 'My Mailing Address is Different'
      // -- form should NOT be valid now
    it('07. should not let user continue if mailing address is empty', () => {
      page.navigateTo();
      page.fillPage(profileData);
      page.clickDiffMailAddress(); // clicks the "My Mailing address is different" button
      page.continue();

      expect(page.formErrors().count()).toEqual(3, 'page should show 3 error texts on continue');
      expect(browser.getCurrentUrl()).toContain(PAGE_URL, 'url should not change');
      // browser.sleep(1000 * 10);
    });


    it('08. should show mailing address when checkbox is unchecked', () => {
      page.navigateTo();
      page.fillPage(profileData);
      page.scrollDown();
      // browser.sleep(1000 * 10);
      page.checkDiffMailAddress(); // unchecks the "This is my mailing address" checkbox
      page.continue();

      expect(page.formErrors().count()).toEqual(3, 'page should show 3 error texts on continue');
      expect(browser.getCurrentUrl()).toContain(PAGE_URL, 'url should not change');
      // browser.sleep(1000 * 10);
    });


    // THIS is identical to "should not let user continue if mailing address is empty" test
    it('09. should show mailing address when button is pressed', () => {
      page.navigateTo();
      page.fillPage(profileData);
      page.clickDiffMailAddress(); // clicks the "My Mailing address is different" button
      // browser.sleep(1000 * 10);
      page.continue();

      expect(page.formErrors().count()).toEqual(3, 'page should show 3 error texts on continue');
      expect(browser.getCurrentUrl()).toContain(PAGE_URL, 'url should not change');

    });


    it('10. should hide mailing address when checkbox is re-checked', () => {
      page.navigateTo();
      page.fillPage(profileData);
      page.scrollDown();
      page.checkDiffMailAddress(); // unchecks the "This is my mailing address" checkbox
      page.checkDiffMailAddress(); // rechecks it
      // browser.sleep(1000 * 10);
      page.continue();

      expect(browser.getCurrentUrl()).toContain(NEXT_PAGE_URL, 'should navigate to the Document Upload page');
      expect(page.formErrors()).toEqual([], 'should be no errors as form should be valid');
    });


    it('11. should hide mailing address when checkbox is re-checked after button press', () => {
      page.navigateTo();
      page.fillPage(profileData);
      page.scrollDown();
      page.clickDiffMailAddress(); // clicks the "My Mailing address is different" button
      page.checkDiffMailAddress(); // checks the "This is my mailing address" checkbox
      // browser.sleep(1000 * 10);
      page.continue();

      expect(browser.getCurrentUrl()).toContain(NEXT_PAGE_URL, 'should navigate to the Document Upload page');
      expect(page.formErrors()).toEqual([], 'should be no errors as form should be valid');
    });


      // -- bonus if you can use protractor's "isDisplayed()"
    it('12. should show a blue "Continue" button on the bottom', () => {
        page.navigateTo();
        expect(page.getContinueButton().isDisplayed()).toBe(true); // should be visible at the bottom of the page
        // browser.sleep(1000 * 10);
    });

    // todo - get some tests about Preferred Name. will have to fix the
    // getNameComponent method as it can't select them now. maybe a parent
    // selector?


    it('13. should make the preferred name fields optional', () => {
      profileData['preferredFirstName'] = '';
      profileData['preferredMiddleName'] = '';
      profileData['preferredLastName'] = '';

      page.navigateTo();
      page.fillPage(profileData);
      // browser.sleep(1000 * 10);
      page.continue();

      expect(browser.getCurrentUrl()).toContain(NEXT_PAGE_URL, 'should navigate to the Document Upload page');
      expect(page.formErrors()).toEqual([], 'should be no errors as form should be valid');
    });

    /*
    xit('14. should make sure that preferred first name must be filled out if preferred last name field is filled out', async () => {
      page.navigateTo();
      page.fillPage(profileData);
      // browser.sleep(1000 * 20);
      page.continue();

      if (profileData['preferredLastName'] != null) {
        const nameVal = await accountPage.getNameComponentVal('Preferred First Name');
        expect(nameVal).toEqual(profileData['preferredFirstName']);
      }
    });


    xit('15. should make sure that preferred last name must be filled out if preferred first name field is filled out', async () => {
      page.navigateTo();
      page.fillPage(profileData);
      // browser.sleep(1000 * 20);
      page.continue();

      if (profileData['preferredFirstName'] != null) {
        const nameVal = await accountPage.getNameComponent('Preferred Last Name');
        // browser.wait(5000);
        expect(nameVal).toEqual(profileData['preferredLastName']);
      }
    });*/

    fit('make sure skip to main content feature is working', async () => {
      page.navigateTo();
      page.fillPage(profileData);
      page.clickSkipToContent();

      const PAGE_URL2 = `${RegistrationConstants.MOH_REGISTRATION}/${RegistrationConstants.PROFILE_PG}#content`;
      expect(browser.getCurrentUrl()).toContain(PAGE_URL2);
    });

});
