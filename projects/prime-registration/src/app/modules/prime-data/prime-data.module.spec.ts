import { PrimeDataModule } from './prime-data.module';

describe('PrimeDataModule', () => {
  let primeDataModule: PrimeDataModule;

  beforeEach(() => {
    primeDataModule = new PrimeDataModule();
  });

  it('should create an instance', () => {
    expect(primeDataModule).toBeTruthy();
  });
});
