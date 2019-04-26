import { TestBed } from '@angular/core/testing';

import { EnrollmentCacheService } from './enrollment-cache.service';
import { HttpClientModule } from '@angular/common/http';

describe('EnrollmentCacheService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    })
  );

  it('should be created', () => {
    const service: EnrollmentCacheService = TestBed.get(EnrollmentCacheService);
    expect(service).toBeTruthy();
  });
});
