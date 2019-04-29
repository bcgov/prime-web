import { TestBed } from '@angular/core/testing';

import { EnrolmentDataService } from './enrolment-data.service';

describe('EnrolmentDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnrolmentDataService = TestBed.get(EnrolmentDataService);
    expect(service).toBeTruthy();
  });
});
