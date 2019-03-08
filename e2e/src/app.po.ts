import { browser, by, element, WebElement, $$ } from 'protractor';

/**
 * This class is for GENERAL functions, and all those that target components
 * from the moh-common-lib.  The long-term plan will be to move these over to
 * `moh-common-lib/testing` once created. That way different Angular projects
 * can use the same e2e starting board.
 */
export class PrimePage {
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
}
