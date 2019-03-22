import { TestBed } from '@angular/core/testing';

import { EnrollmentDataService } from './enrollment-data.service';

describe('EnrollmentDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnrollmentDataService = TestBed.get(EnrollmentDataService);
    expect(service).toBeTruthy();
  });
});
