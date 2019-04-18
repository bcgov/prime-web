import { TestBed } from '@angular/core/testing';

import { PrimeCoreService } from './prime-core.service';

describe('PrimeCoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrimeCoreService = TestBed.get(PrimeCoreService);
    expect(service).toBeTruthy();
  });
});
