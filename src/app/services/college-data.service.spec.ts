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

  it('should return 4 items in college list', inject([CollegeDataService], (service: CollegeDataService) =>{
    expect(service.defaultCollegeList().length === 4).toBeTruthy();
    expect(service.defaultCollegeList()[0].text === "None").toBeTruthy();
  }))
});
