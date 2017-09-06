import { TestBed } from '@angular/core/testing'
import { Applicant } from './applicant.model';
import { Colleges } from './colleges.enum';

describe('Applicant Model', () => {
  let applicant: Applicant;

  beforeEach(() => {
    applicant = new Applicant();
  });

  it('should create an applicant', () => {
    expect(applicant).toBeDefined();
  });

  it('should be able to go to a single college', () => {
    expect(applicant.goesToCollege()).toBeFalsy();
    applicant.college = [Colleges.CPBC];
    expect(applicant.goesToCollege(Colleges.CPBC)).toBe(true);
    expect(applicant.goesToCollege(Colleges.CPSBC)).toBe(false);
    expect(applicant.goesToCollege(Colleges.CRNBC)).toBe(false);
    expect(applicant.goesToCollege(Colleges.None)).toBe(false);
    expect(applicant.goesToCollege()).toBe(true);
  });

  it('should be able to go to multiple colleges', () => {
    applicant.college = [Colleges.CPBC, Colleges.CRNBC];
    expect(applicant.goesToCollege(Colleges.CPBC)).toBe(true);
    expect(applicant.goesToCollege(Colleges.CRNBC)).toBe(true);
    expect(applicant.goesToCollege(Colleges.CPSBC)).toBe(false);
    expect(applicant.goesToCollege(Colleges.None)).toBe(false);
    expect(applicant.goesToCollege()).toBe(true);
  });

  it('should have a full name field', () => {
    expect(applicant.fullName).toBeNull();
    applicant.firstName = "William";
    applicant.lastName = "Gates";
    expect(applicant.fullName).toBe("William Gates");
    applicant.middleName = "Henry";
    expect(applicant.fullName).toBe("William Henry Gates");
  });

  it('should detect the presence of security questions', () => {
    expect(applicant.hasSecurityQuestions).toBe(false);
    for (var i = 0; i < 3; i++) {
      applicant.securityQuestions.push({ question: null, answer: null });
    }
    expect(applicant.hasSecurityQuestions).toBe(false);
    for (var i = 0; i < 3; i++) {
      applicant.securityQuestions.push({ question: "Test", answer: "Test" });
    }
    expect(applicant.hasSecurityQuestions).toBe(true);

  });
})
