import { TestBed } from '@angular/core/testing';

import { EnrollmentCacheService } from './enrollment-cache.service';

describe('EnrollmentCacheService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnrollmentCacheService = TestBed.get(EnrollmentCacheService);
    expect(service).toBeTruthy();
  });
});
