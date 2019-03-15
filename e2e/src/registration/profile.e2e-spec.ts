import { MohProfileTestPage } from './moh-registration.po';
import { browser } from 'protractor';
import { PrimeConstants } from '../../../src/app/models/prime-constants';
import { FakeDataMohReg } from './moh-registration.data';
import { PrimeTestPage } from '../app.po';

fdescribe('MoH Registration - Profile Page', () => {
    let page: MohProfileTestPage;
    let page2: PrimeTestPage;
    const data = new FakeDataMohReg();
    let profileData;
    const PAGE_URL = `${PrimeConstants.MOH_REGISTRATION}/${PrimeConstants.PROFILE_PG}`;
    const NEXT_PAGE_URL =  `${PrimeConstants.MOH_REGISTRATION}/${PrimeConstants.DOC_UPLD_PG}`;

    beforeEach(() => {
        page = new MohProfileTestPage();
        page2 = new PrimeTestPage();
        profileData = data.profileInfo();
        profileData['firstName'] = "John";
        profileData['lastName'] = "Doe";
        profileData['preferredFirstName'] = "John";
        profileData['preferredLastName'] = "Doe";
        profileData['country'] = 'Canada'; // forced the country to be Canada so the faker will generate a province
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
        page.navigateTo();
        page.fillPage(profileData);
        page.continue();

        expect(browser.getCurrentUrl()).toContain(NEXT_PAGE_URL, 'should navigate to the Document Upload page');
        expect(page.formErrors()).toEqual([], 'should be no errors as form should be valid');
    });

    it('should let the user continue when the form is filled out (United States)', () => {
      profileData['country'] = 'United States';
      profileData['province'] = 'California';

      page.navigateTo();
      page.fillPage(profileData);
      page.continue();

      expect(browser.getCurrentUrl()).toContain(NEXT_PAGE_URL, 'should navigate to the Document Upload page');
      // expect(page.formErrors().count()).toBe(0, 'should be no errors as form should be valid');

      expect(page.formErrors()).toEqual([], 'should be no errors as form is valid');
    });

    // should allow first name to be blank
    it('should allow first name to be blank', () => {
      profileData['firstName'] = '';

      page.navigateTo();
      page.fillPage(profileData);
      //browser.sleep(1000 * 10);
      page.continue();

      expect(browser.getCurrentUrl()).toContain(NEXT_PAGE_URL, 'should navigate to the Document Upload page');
      expect(page.formErrors()).toEqual([], 'should be no errors as form should be valid');
    });
    
    // should not allow last name to be blank
    it('should not allow last name to be blank', () => {
      profileData['lastName'] = '';

      page.navigateTo();
      page.fillPage(profileData);
      page.continue();
      
      expect(page.formErrors().count()).toEqual(1, 'page should show 1 error texts on continue');
      expect(browser.getCurrentUrl()).toContain(PAGE_URL, 'url should not change');
      //browser.sleep(1000 * 10);
    });

    // should not let user continue if mailing address is empty
      // -- form has been filled out and is valid
      // -- then click 'My Mailing Address is Different'
      // -- form should NOT be valid now
    it('should not let user continue if mailing address is empty', () => {
      page.navigateTo();
      page.fillPage(profileData);
      page.clickDiffMailAddress(); // clicks the "My Mailing address is different" button
      page.continue();
      
      expect(page.formErrors().count()).toEqual(3, 'page should show 3 error texts on continue');
      expect(browser.getCurrentUrl()).toContain(PAGE_URL, 'url should not change');
      //browser.sleep(1000 * 10);
    });

    // should show mailing address when checkbox is unchecked
    it('should show mailing address when checkbox is unchecked', () => {
      page.navigateTo();
      page.fillPage(profileData);
      //browser.sleep(1000 * 10);
      page.checkDiffMailAddress(); // unchecks the "This is my mailing address" checkbox
      page.continue();
      
      expect(page.formErrors().count()).toEqual(3, 'page should show 3 error texts on continue');
      expect(browser.getCurrentUrl()).toContain(PAGE_URL, 'url should not change');
      //browser.sleep(1000 * 10);
    });

    // THIS is identical to "should not let user continue if mailing address is empty" test
    // should show mailing address when button is pressed 
    it('should show mailing address when button is pressed', () => {
      page.navigateTo();
      page.fillPage(profileData);
      page.clickDiffMailAddress(); // clicks the "My Mailing address is different" button
      page.continue();
      
      expect(page.formErrors().count()).toEqual(3, 'page should show 3 error texts on continue');
      expect(browser.getCurrentUrl()).toContain(PAGE_URL, 'url should not change');
      //browser.sleep(1000 * 10);
    });

    // should hide mailing address when checkbox is re-checked
    it('should hide mailing address when checkbox is re-checked', () => {
      page.navigateTo();
      page.fillPage(profileData);
      page.checkDiffMailAddress(); // unchecks the "This is my mailing address" checkbox
      page.checkDiffMailAddress(); // rechecks it
      //browser.sleep(1000 * 10);
      page.continue();
      
      expect(browser.getCurrentUrl()).toContain(NEXT_PAGE_URL, 'should navigate to the Document Upload page');
      expect(page.formErrors()).toEqual([], 'should be no errors as form should be valid');
    });

    // should hide mailing address when checkbox is re-checked after button press
    it('should hide mailing address when checkbox is re-checked after button press', () => {
      page.navigateTo();
      page.fillPage(profileData);
      page.clickDiffMailAddress(); // clicks the "My Mailing address is different" button
      page.checkDiffMailAddress(); // checks the "This is my mailing address" checkbox
      //browser.sleep(1000 * 10);
      page.continue();
      
      expect(browser.getCurrentUrl()).toContain(NEXT_PAGE_URL, 'should navigate to the Document Upload page');
      expect(page.formErrors()).toEqual([], 'should be no errors as form should be valid');
    });

    // should show a blue "Continue" button on the bottom
      // -- bonus if you can use protractor's "isDisplayed()"
    it('should hide mailing address when checkbox is re-checked after button press', () => {
        page.navigateTo();
        expect(page.getContinueButton().isDisplayed()).toBe(true); // should be visible at the bottom of the page
        //browser.sleep(1000 * 10);
    });

    // todo - get some tests about Preferred Name. will have to fix the
    // getNameComponent method as it can't select them now. maybe a parent
    // selector?

    // Tests for Preferred Name:
    // -- should make the preferred name fields optional
    it('should make the preferred name fields optional', () => {
      profileData['preferredFirstName'] = '';
      profileData['preferredMiddleName'] = '';
      profileData['preferredLastName'] = '';
      page.navigateTo();
      page.fillPage(profileData);
      //browser.sleep(1000 * 10);
      page.continue();

      expect(browser.getCurrentUrl()).toContain(NEXT_PAGE_URL, 'should navigate to the Document Upload page');
      expect(page.formErrors()).toEqual([], 'should be no errors as form should be valid');
    });

    // -- should make sure that preferred first and last name must be filled out if any preferred name field is filled out
    it('should make sure that preferred first and last name must be filled out if any preferred name field is filled out', () => {
      page.navigateTo();
      page.fillPage(profileData);
      //browser.sleep(1000 * 20);
      page.continue();

      if(expect(page2.getNameComponent("Preferred First Name")) != null){
        expect(page2.getNameComponent("Preferred Last Name")).toBeTruthy();
        //expect(profileData['preferredLastName']).toBe(!null, 'last name should be filled out');
      }
      if(expect(page2.getNameComponent("Preferred Last Name")) != null){
        expect(page2.getNameComponent("Preferred First Name")).toBeTruthy();
      //  expect(profileData['preferredFirstName'].isPresent()).toBe(true);
      }
      //expect(page.formErrors()).toEqual([], 'should be no errors as form should be valid');
    });
});
