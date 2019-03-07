import { MohProfilePage } from './moh-registration.po';
import { browser } from 'protractor';
import { PrimeConstants } from '../../../src/app/models/prime-constants';

describe('workspace-project App', () => {
  let page: MohProfilePage;
  const PAGE_URL = `${PrimeConstants.MOH_REGISTRATION}/${PrimeConstants.PROFILE_PG}`;

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
    console.log('before continue, errors');
    browser.sleep(1000 * 10);
    expect(page.formErrors().count()).toBeGreaterThanOrEqual(1, 'should be at least one error displayed if user tries to continue');
    expect(browser.getCurrentUrl()).toContain(PAGE_URL, 'url should not change');

    // we also expect validation errors to appear to user

    // expect(browser.getCurrentUrl()).toContain(PAGE_URL);
  });

  // should not let user continue before completing page

  // should allow the first name to NOT be entered
});
