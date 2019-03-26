import { BCSCRegistrationPage } from './registration.po';
import { browser } from 'protractor';
import { PrimeConstants } from '../../../src/app/models/prime-constants';
import { FakeDataMohReg } from './registration.data';
import { PrimeTestPage } from '../../../e2e/src/app.po';

fdescribe('BCSC Registration - Profile Page', () => {
    let page: BCSCRegistrationPage;
    let page2: PrimeTestPage;
    const data = new FakeDataMohReg();
    let profileData;
    const PAGE_URL = `${PrimeConstants.BCSC_REGISTRATION}/${PrimeConstants.PROFILE_PG}`;
    const NEXT_PAGE_URL =  `${PrimeConstants.BCSC_REGISTRATION}/${PrimeConstants.DOC_UPLD_PG}`;

    beforeEach(() => {
        page = new BCSCRegistrationPage();
        // page2 = new PrimeTestPage();  
        profileData = data.profileInfo();
        data.setSeed(123);
        //profileData['firstName'] = "John";
        //profileData['lastName'] = "Doe";
        //profileData['birthDate'] = new Date();
        //profileData['preferredFirstName'] = "John";
        //profileData['preferredLastName'] = "Doe";
        profileData['country'] = 'Canada'; // forced the country to be Canada so the faker will generate a province
    });


    it('01. should load the page without issue', () => {
        page.navigateTo();
        expect(browser.getCurrentUrl()).toContain(PAGE_URL);
    });


   

});
