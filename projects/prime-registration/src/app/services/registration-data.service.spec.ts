import { TestBed, inject } from '@angular/core/testing';

import { RegistrationDataService } from '@prime-registration/services/registration-data.service';

describe('RegistrationDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegistrationDataService]
    });
  });

  it('should be created', inject([RegistrationDataService], (service: RegistrationDataService) => {
    expect(service).toBeTruthy();
  }));
});
