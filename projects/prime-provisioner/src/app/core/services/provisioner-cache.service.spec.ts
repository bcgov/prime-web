import { TestBed } from '@angular/core/testing';

import { ProvisionerCacheService } from './provisioner-cache.service';

describe('ProvisionerCacheService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProvisionerCacheService = TestBed.get(ProvisionerCacheService);
    expect(service).toBeTruthy();
  });
});
