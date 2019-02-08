import { SharedCoreModule } from './shared-core.module';

describe('SharedCoreModule', () => {
  let sharedCoreModule: SharedCoreModule;

  beforeEach(() => {
    sharedCoreModule = new SharedCoreModule();
  });

  it('should create an instance', () => {
    expect(sharedCoreModule).toBeTruthy();
  });
});
