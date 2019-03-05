import { TestBed, inject } from '@angular/core/testing';

import { RegisterRespService } from './register-resp.service';

describe('RegisterRespService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisterRespService]
    });
  });

  it('should be created', inject([RegisterRespService], (service: RegisterRespService) => {
    expect(service).toBeTruthy();
  }));
});
