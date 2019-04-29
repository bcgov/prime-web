import { TestBed } from '@angular/core/testing';

import { EnrolmentCacheService } from './enrolment-cache.service';

describe('EnrolmentCacheService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnrolmentCacheService = TestBed.get(EnrolmentCacheService);
    expect(service).toBeTruthy();
  });
});
