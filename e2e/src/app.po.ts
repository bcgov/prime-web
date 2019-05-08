import { browser, by, element, WebElement, $$, protractor } from 'protractor';
import { AbstractTestPage } from 'moh-common-lib/e2e';
/**
 * This class is for GENERAL functions, and all those that target components
 * from the moh-common-lib.  The long-term plan will be to move these over to
 * `moh-common-lib/testing` once created. That way different Angular projects
 * can use the same e2e starting board.
 */
export class PrimeTestPage extends AbstractTestPage {

  protected diffMailAddressButton: WebElement = element(by.css('.mail-address-container .btn'));
  protected diffMailAddressCheckbox: WebElement = element(by.css('.custom-checkbox .custom-control-label'));

  /** Every class should override this to point to the page it is testing.  */
  navigateTo() {
    return browser.get('/');
  }

  clickDiffMailAddress() {
    this.diffMailAddressButton.click();
  }

  checkDiffMailAddress() {
    this.diffMailAddressCheckbox.click();
  }

  clickLink(label: string, text: string) {
    element(by.cssContainingText(label, text)).click();
  }

}
