import { browser, by, element, WebElement, $$ } from 'protractor';

/**
 * This class is for GENERAL functions, and all those that target components
 * from the moh-common-lib.  The long-term plan will be to move these over to
 * `moh-common-lib/testing` once created. That way different Angular projects
 * can use the same e2e starting board.
 */
export class PrimeTestPage {
  /** Every class should override this to point to the page it is testing.  */
  navigateTo() {
    return browser.get('/');
  }

  /** Returns the input for an associated human readable label. If the label is a duplicate, it will grab the first one only. */
  async getNameComponent(labelName: string): Promise<WebElement> {
    const label = element.all(by.cssContainingText('prime-name label', labelName)).first();
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
    element(by.css(`ng-select[ng-reflect-for-id="${labelId}"]`)).click(); // opens dropdown
    element(by.cssContainingText('span.ng-option-label', optionText)).click(); // selects option by provided text
  }
}
