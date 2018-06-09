import { TestBed, inject } from '@angular/core/testing';

import { ProvisionerService } from './provisioner.service';

describe('ProvisionerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProvisionerService]
    });
  });

  it('should be created', inject([ProvisionerService], (service: ProvisionerService) => {
    expect(service).toBeTruthy();
  }));
});
