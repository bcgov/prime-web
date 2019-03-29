import { BCSCRegistrationPage, BCSCAccountTestPage } from "./registration.po";
import { FakeDataMohReg } from "./registration.data";
import { PrimeConstants } from "@prime-core/models/prime-constants";

// TODO - This file tests BOTH Profile and Account pages, end-to-end.
// user should be able to navigate past first page, then fill out 2nd page, and submit.
describe('BCSC Registration - End to end', () => {
    let page1: BCSCRegistrationPage;
    let page2: BCSCAccountTestPage;
    let profileData;

    const data = new FakeDataMohReg();
    const PAGE1_URL = `${PrimeConstants.BCSC_REGISTRATION}/${PrimeConstants.PROFILE_PG}`;
    const PAGE2_URL = `${PrimeConstants.BCSC_REGISTRATION}/${PrimeConstants.ACCOUNT_PG}`;
    const PAGE3_URL = `${PrimeConstants.BCSC_REGISTRATION}/${PrimeConstants.CONFIRMATION_PG}`;

    beforeEach(() => {
        page1 = new BCSCRegistrationPage;
        page2 = new BCSCAccountTestPage;
        profileData = data.profileInfo();
        data.setSeed(123);
    });

    it ('01. should be able to go through Account page but NOT in Confirmation Page without filling out any fields', () => {

    });




});