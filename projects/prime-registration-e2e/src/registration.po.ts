import { browser, by, element, WebElement, protractor } from 'protractor';
import { ProfilePageTest } from './registration.data';
import { PrimeTestPage } from '../../../e2e/src/app.po';

export class BaseMohRegTestPage extends PrimeTestPage {

    constructor() {
        super();
    }

    navigateTo() {
        return browser.get('/moh-registration/profile');
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

export class BCSCRegistrationPage extends MohProfileTestPage {

  constructor() {
    super();
  }

  navigateTo() {
    return browser.get('/bcsc-registration/profile');
  }

  async fillPreferredName(data: ProfilePageTest) {
    (await this.getNameComponent('Preferred First Name')).sendKeys(data.preferredFirstName);
    if (data.preferredMiddleName) {
        (await this.getNameComponent('Preferred Middle Name')).sendKeys(data.preferredMiddleName);
    }
    (await this.getNameComponent('Preferred Last Name')).sendKeys(data.preferredLastName);
  }

  fillMailingAddress(data: ProfilePageTest) {
    element(by.css('prime-address:nth-child(1) [id^="street"]')).sendKeys(data.address);
    element(by.css('prime-address:nth-child(1) [id^="city"]')).sendKeys(data.city);
    element(by.css('prime-address:nth-child(1) [id^="postal"]')).sendKeys(data.postal);
  }
}

export class MohAccountTestPage extends BaseMohRegTestPage {

  fillPrimeAccount() { }

  navigateTo() {
    return browser.get('/moh-registration/account');
}

}

export class BCSCAccountTestPage extends MohAccountTestPage {

  fillPrimeAccount() { }

// tslint:disable-next-line: member-ordering
  private completeRegistrationButton: WebElement;

  constructor() {
      super();
      this.completeRegistrationButton = element(by.css('.submit'));
  }

  navigateTo() {
    return browser.get('/bcsc-registration/account');
  }

  completeRegistration() {
    this.completeRegistrationButton.click();
  }

  fillData(data: ProfilePageTest) {
    element(by.css('[id^="phone"]')).sendKeys(data.mobile);
    element(by.css('[id^="user_email"]')).sendKeys(data.email);
  }

  selectSecurityQuestions(data: ProfilePageTest) {
    this.selectSecurityQuestion(0, { answer: data.secAns1 });
    this.selectSecurityQuestion(1, { answer: data.secAns2 });
    this.selectSecurityQuestion(2, { answer: data.secAns3 });
  }

  private selectSecurityQuestion(index: number, data: {answer: string}){
    const fieldSelector = `[id^="sec_question_${index}"]`;
    const questionSelector = `ng-select[ng-reflect-name="sec_question_${index}"] .ng-option:nth-of-type(${index + 1})`;
    const answerSelector = `[id^="sec_answer_${index}"]`;

    element(by.css(fieldSelector)).click();
    element(by.css(questionSelector)).click();
    element(by.css(answerSelector)).sendKeys(data.answer);
  }

  fillSecurityQuestions(data: ProfilePageTest) {
    this.fillSecurityQuestion(0, {question: data.secQues1, answer: data.secAns1 });
    this.fillSecurityQuestion(1, {question: data.secQues2, answer: data.secAns2 });
    this.fillSecurityQuestion(2, {question: data.secQues3, answer: data.secAns3 });
  }

  private fillSecurityQuestion(index: number, data: {question: string, answer: string}){
    const questionSelector = `[id^="sec_question_${index}"]`;
    const answerSelector = `[id^="sec_answer_${index}"]`;
    element(by.css(questionSelector)).sendKeys(data.question);
    browser.actions().sendKeys(protractor.Key.ENTER).perform();
    element(by.css(answerSelector)).sendKeys(data.answer);
  }

  totalNumOfSecurityQuestions() {
    element(by.css('ng-select[ng-reflect-name="sec_question_0"]')).click();
    return element.all(by.css('ng-select[ng-reflect-name="sec_question_0"] .ng-option'));
  }
}

