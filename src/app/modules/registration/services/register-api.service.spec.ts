import { TestBed, inject } from '@angular/core/testing';

import { RegisterApiService } from './register-api.service';

describe('RegisterApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisterApiService]
    });
  });

  it('should be created', inject([RegisterApiService], (service: RegisterApiService) => {
    expect(service).toBeTruthy();
  }));
});
