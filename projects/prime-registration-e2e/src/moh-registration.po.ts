import { browser, by, element, WebElement } from 'protractor';
import { ProfilePageTest } from './moh-registration.data';
import { PrimeTestPage } from '../../../e2e/src/app.po';

export class BaseMohRegTestPage extends PrimeTestPage {
    private continueButton: WebElement;
    private diffMailAddressButton: WebElement;
    private diffMailAddressCheckbox: WebElement;


    constructor() {
        super();
        this.continueButton = element(by.css('.form-bar .submit'));
        this.diffMailAddressButton = element(by.css('.mail-address-container .btn'));
        this.diffMailAddressCheckbox = element(by.css('.custom-checkbox .custom-control-label'));
    }

    navigateTo() {
        return browser.get('/moh-registration/profile');
    }

    continue() {
        this.continueButton.click();
    }

    clickDiffMailAddress(){
        this.diffMailAddressButton.click();
    }

    checkDiffMailAddress(){
        this.diffMailAddressCheckbox.click();
    }

    getContinueButton(){
        return this.continueButton;
    }

    scrollDown(){
        browser.executeScript('window.scrollTo(0, document.body.scrollHeight)');
    }
}

export class MohProfileTestPage extends BaseMohRegTestPage {

    /** Fill out the entire page. Page will be valid after.  */
    fillPage(data: ProfilePageTest) {
      this.fillName(data);
      this.fillPreferredName(data);
      this.fillBirthDate(data.birthDate);
      this.fillAddress(data);
    }

    async fillName(data: ProfilePageTest) {
        (await this.getNameComponent('First Name')).sendKeys(data.firstName);
        if (data.middleName) {
            (await this.getNameComponent('Middle Name')).sendKeys(data.middleName);
        }
        (await this.getNameComponent('Last Name')).sendKeys(data.lastName);
    }

    async fillPreferredName(data: ProfilePageTest) {
      (await this.getNameComponent('Preferred First Name')).sendKeys(data.preferredFirstName);
      if (data.preferredMiddleName) {
          (await this.getNameComponent('Preferred Middle Name')).sendKeys(data.preferredMiddleName);
      }
      (await this.getNameComponent('Preferred Last Name')).sendKeys(data.preferredLastName);
    }

    fillBirthDate(date: Date) {
        // TODO: Abstract to general function to fill out date components - move to PrimePage for now.
        const birthDateCSS = '[ng-reflect-label="Birthdate"]';
        const month = date.getMonth();
        const year = date.getFullYear();
        const day = date.getDate();
        element.all(by.css(`${birthDateCSS} select option`)).get(month).click();

        element.all(by.css(`${birthDateCSS} [name^="year"]`)).sendKeys(year);
        element.all(by.css(`${birthDateCSS} [name^="day"]`)).sendKeys(day);
    }

    // TODO - This could be refactored to actually use the Geocoder / typeahead part
    fillAddress(data: ProfilePageTest) {
      // country

      // first - try and scroll down
      const countryEl = element(by.cssContainingText('prime-address [id^="country"] option', data.country));
      browser.actions().mouseMove(countryEl).perform();
      
      countryEl.click();

      // Provine does NOT exist by default on object,
      // is only added manually in tests
      if (data.province) {
        this.fillProvince(data);
      }

      element(by.css('prime-address [id^="street"]')).sendKeys(data.address);
      element(by.css('prime-address [id^="city"]')).sendKeys(data.city);
      element(by.css('prime-address [id^="postal"]')).sendKeys(data.postal);
    }


    // Handles filling province, changing logic if it's US / Canada or international
  private fillProvince(data: any) {
    if (['Canada', 'United States'].includes(data.country)) {
      // Province is dropdown
      element(by.cssContainingText('prime-address [id^="province"] option', data.province)).click();
    } else {
      // Province is text input
      element(by.css('prime-address [id^="province"]')).sendKeys(data.province);
    }
  }
}


export class MohAccountTestPage extends BaseMohRegTestPage {

  fillPrimeAccount() { }

  navigateTo() {
    return browser.get('/moh-registration/account');
}

}

