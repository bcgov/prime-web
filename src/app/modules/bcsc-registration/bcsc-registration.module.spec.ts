import { BcscRegistrationModule } from './bcsc-registration.module';

describe('BcscRegistrationModule', () => {
  let bcscRegistrationModule: BcscRegistrationModule;

  beforeEach(() => {
    bcscRegistrationModule = new BcscRegistrationModule();
  });

  it('should create an instance', () => {
    expect(bcscRegistrationModule).toBeTruthy();
  });
});
