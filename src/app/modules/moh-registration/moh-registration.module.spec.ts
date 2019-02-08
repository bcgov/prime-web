import { MohRegistrationModule } from './moh-registration.module';

describe('MohRegistrationModule', () => {
  let mohRegistrationModule: MohRegistrationModule;

  beforeEach(() => {
    mohRegistrationModule = new MohRegistrationModule();
  });

  it('should create an instance', () => {
    expect(mohRegistrationModule).toBeTruthy();
  });
});
