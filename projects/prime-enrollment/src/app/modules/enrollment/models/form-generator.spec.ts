import { FormGenerator } from './form-generator';

describe('FormGenerator', () => {
  it('should create an instance', () => {
    // const model = new FormGenerator();
    expect(FormGenerator.contactForm).toBeTruthy();
    const form = FormGenerator.contactForm;
  });
});
