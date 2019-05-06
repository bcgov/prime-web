import { browser, by, element, WebElement, $$, protractor } from 'protractor';

/**
 * This class is for GENERAL functions, and all those that target components
 * from the moh-common-lib.  The long-term plan will be to move these over to
 * `moh-common-lib/testing` once created. That way different Angular projects
 * can use the same e2e starting board.
 */
export class PrimeTestPage {
  protected continueButton: WebElement;
  protected diffMailAddressButton: WebElement;
  protected diffMailAddressCheckbox: WebElement;
  protected skipToContentButton: WebElement;

  constructor() {
    this.continueButton = element(by.css('.form-bar .submit'));
    this.diffMailAddressButton = element(by.css('.mail-address-container .btn'));
    this.diffMailAddressCheckbox = element(by.css('.custom-checkbox .custom-control-label'));
    this.skipToContentButton = element(by.css('.skip-to-content'));
  }

  /** Every class should override this to point to the page it is testing.  */
  navigateTo() {
    return browser.get('/');
  }

  continue() {
    this.continueButton.click();
  }

  getContinueButton() {
    return this.continueButton;
  }

  /** Scrolls down to the bottom of the page */
  scrollDown() {
    browser.executeScript('window.scrollTo(0, document.body.scrollHeight)');
  }

  clickDiffMailAddress() {
    this.diffMailAddressButton.click();
  }

  checkDiffMailAddress() {
    this.diffMailAddressCheckbox.click();
  }

  clickSkipToContent() {
    this.skipToContentButton.click();
  }

  /** Returns the input for an associated human readable label. If the label is a duplicate, it will grab the first one only. */
  async getNameComponent(labelName: string): Promise<WebElement> {
    const label = element.all(by.cssContainingText('lib-prime-name label', labelName)).first();
    return element(by.id(await label.getAttribute('for')));
  }

  // Simple helper to keep tests less verbose with tonnes of awaits.
  async getNameComponentVal(labelName: string): Promise<string> {
    return (await this.getNameComponent(labelName)).getAttribute('value');
  }

  formErrors() {
    return $$('[role=alert] .text-danger');
  }

  /**
   * Selects from an ng-select component.
   *
   * TODO - Need to test this works! Right now just copied from GitHub with minor tweaks.
   * IDEA - Mirror getNameComponent, where we lookup via the label text and use the 'for' attribute.
   *
   * @param labelId corresponds to labelForId on the <ng-select>
   * @param optionText the option we want to select
   */
  selectOption(labelId: string, optionText: string) {
    element(by.css(`ng-select[id="${labelId}"]`)).click(); // opens dropdown
    element(by.cssContainingText('span.ng-option-label', optionText)).click(); // selects option by provided text
  }

  typeOption(labelId: string, data: string) {
    element(by.css(`ng-select[id="${labelId}"]`)).click(); // opens dropdown
    element(by.css(`input[role="combobox"]`)).sendKeys(data); // type option
    browser.actions().sendKeys(protractor.Key.ENTER).perform(); // hit enter key
  }

  typeText(labelId: string, text: string) {
    element(by.css(`input[ng-reflect-name^="${labelId}"]`)).sendKeys(text);
  }

  clickButton(labelId: string, value: string) {
    element(by.cssContainingText(`button[class^="${labelId}"]`, value)).click();
  }

  clickCheckBox(labelRefName: string) {
    element(by.css(`input[ng-reflect-name="${labelRefName}"]`)).click();
  }
}
