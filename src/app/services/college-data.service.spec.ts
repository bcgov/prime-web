import { TestBed, inject } from '@angular/core/testing';

import { CollegeDataService } from './college-data.service';

describe('CollegeDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CollegeDataService]
    });
  });

  it('should be created', inject([CollegeDataService], (service: CollegeDataService) => {
    expect(service).toBeTruthy();
  }));
});
