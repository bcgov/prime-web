import { browser } from 'protractor';
import { PrimeTestPage } from '../../../e2e/src/app.po';
import { ProfilePage, ContactPage, ProfessionalPage, SelfDeclarationPage, PharmanetAccessPage, ReviewPage } from './enrollment.po';
import { FakeDataEnrollment } from './enrollment.data';

describe('Prime Enrolment - End to End', () => {
    let profilePage: ProfilePage;
    let contactPage: ContactPage;
    let professionalPage: ProfessionalPage;
    let selfDeclarationPage: SelfDeclarationPage;
    let pharmanetAccessPage: PharmanetAccessPage;
    let reviewPage: ReviewPage;
    const data = new FakeDataEnrollment();
    let profileData, contactData;
    const SUCCESS_PAGE_URL = `success`;

    beforeEach(() => {
        profilePage = new ProfilePage();
        contactPage = new ContactPage();
        professionalPage = new ProfessionalPage();
        selfDeclarationPage = new SelfDeclarationPage();
        pharmanetAccessPage = new PharmanetAccessPage();
        reviewPage = new ReviewPage();
        profileData = data.profileInfo();
        contactData = data.contactInfo();
        data.setSeed(123);
        profileData['country'] = 'Canada'; // forced the country to be Canada so the faker will generate a province
    });

    fit('01. should go through from Profile to Review page when all required fields are filled out', () => {
        profilePage.navigateTo();
        profilePage.continue();
        contactPage.fillContactMethod(contactData);
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
        pharmanetAccessPage.clickButton('btn btn-secondary', 'Add Organization');
        pharmanetAccessPage.selectTypeOfOrg('Health Authority');
        pharmanetAccessPage.typeValue('organization', 'a');
        pharmanetAccessPage.typeValue('city', 'a');
        pharmanetAccessPage.clickButton('btn btn-md', 'Find');
        pharmanetAccessPage.clickCheckBox('Vancouver Island Health');
        pharmanetAccessPage.clickButton('btn btn-primary', 'Add');
        pharmanetAccessPage.selectDate();
        pharmanetAccessPage.continue();
        browser.sleep(1000 * 5);
        reviewPage.scrollDown();
        reviewPage.clickSubmit();
        expect(browser.getCurrentUrl()).toContain(SUCCESS_PAGE_URL);
    }, 60000);

    it('02. should be able to edit fields when user reached the Review Page', () => {
        profilePage.navigateTo();
        profilePage.continue();
        contactPage.fillContactMethod(contactData);
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
        pharmanetAccessPage.clickButton('btn btn-secondary', 'Add Organization');
        pharmanetAccessPage.selectTypeOfOrg('Health Authority');
        pharmanetAccessPage.typeValue('organization', 'a');
        pharmanetAccessPage.typeValue('city', 'a');
        pharmanetAccessPage.clickButton('btn btn-md', 'Find');
        pharmanetAccessPage.clickCheckBox('Vancouver Island Health');
        pharmanetAccessPage.clickButton('btn btn-primary', 'Add');
        pharmanetAccessPage.selectDate();
        pharmanetAccessPage.continue();
        reviewPage.clickLink('h2', 'PharmaNet');
        pharmanetAccessPage.clickButton('btn delete', '');
        pharmanetAccessPage.clickButton('btn btn-secondary', 'Add Organization');
        pharmanetAccessPage.selectTypeOfOrg('Pharmacy');
        pharmanetAccessPage.typeValue('organization', 'a');
        pharmanetAccessPage.typeValue('city', 'a');
        pharmanetAccessPage.clickButton('btn btn-md', 'Find');
        pharmanetAccessPage.clickCheckBox('Shopper Drug Mart');
        pharmanetAccessPage.clickButton('btn btn-primary', 'Add');
        pharmanetAccessPage.selectDate();
        reviewPage.clickLink('span', 'Review');
        browser.sleep(1000 * 5);
        reviewPage.scrollDown();
        reviewPage.clickSubmit();
        expect(browser.getCurrentUrl()).toContain(SUCCESS_PAGE_URL);
    }, 60000);

});
