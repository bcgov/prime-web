import { browser } from 'protractor';
import { PrimeConstants } from '../../../src/app/models/prime-constants';
import { PrimeTestPage } from '../../../e2e/src/app.po';
import { ProfilePage, ContactPage, ProfessionalPage, SelfDeclarationPage, PharmanetAccessPage } from './enrollment.po';
import { FakeDataEnrollment } from './enrollment.data';

fdescribe('BCSC Enrollment - End to End', () => {
    let profilePage: ProfilePage;
    let contactPage: ContactPage;
    let professionalPage: ProfessionalPage;
    let selfDeclarationPage: SelfDeclarationPage;
    let pharmanetAccessPage: PharmanetAccessPage;
    const data = new FakeDataEnrollment();
    let profileData, contactData;
    const PROFILE_PAGE_URL = `enrollment/profile`;
    const CONTACT_PAGE_URL = `enrollment/contact`;

    beforeEach(() => {
        profilePage = new ProfilePage();
        contactPage = new ContactPage();
        professionalPage = new ProfessionalPage();
        selfDeclarationPage = new SelfDeclarationPage();
        pharmanetAccessPage = new PharmanetAccessPage();
        profileData = data.profileInfo();
        contactData = data.contactInfo();
        data.setSeed(123);
        profileData['country'] = 'Canada'; // forced the country to be Canada so the faker will generate a province
    });

    fit('01. should go through from Profile to Review page when all required fields are filled out', () => {
        profilePage.navigateTo();
        profilePage.continue();
        contactPage.typeContactMethod();
        contactPage.fillContactInfo(contactData);
        contactPage.continue();
        professionalPage.clickOption('collegeCert', 'No');
        professionalPage.clickOption('deviceProvider', 'dpfalse');
        professionalPage.clickOption('onBehalfOf', 'oboFalse');
        professionalPage.continue();
        selfDeclarationPage.clickOption('conviction', 'fcfalse');
        selfDeclarationPage.clickOption('regSuspension', 'fcfalse');
        selfDeclarationPage.clickOption('tAndC', 'fcfalse');
        selfDeclarationPage.clickOption('pharmaSuspension', 'fcfalse');
        selfDeclarationPage.continue();
        pharmanetAccessPage.clickButton('btn btn-secondary');
        pharmanetAccessPage.selectTypeOfOrg('Health Authority');
        pharmanetAccessPage.typeValue('organization', 'a');
        pharmanetAccessPage.typeValue('city', 'a');
        pharmanetAccessPage.clickButton('btn btn-md');
        pharmanetAccessPage.clickCheckBox('Vancouver Island Health');
        pharmanetAccessPage.clickButton('btn btn-primary');
        pharmanetAccessPage.selectDate();
        pharmanetAccessPage.continue();
        browser.sleep(1000 * 5);
    });

});
