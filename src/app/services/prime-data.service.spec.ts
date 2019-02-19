import { TestBed, inject } from '@angular/core/testing';

import { PrimeDataService } from './prime-data.service';

describe('PrimeDataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrimeDataService]
    });
  });

  it('should be created', inject([PrimeDataService], (service: PrimeDataService) => {
    expect(service).toBeTruthy();
  }));
});
