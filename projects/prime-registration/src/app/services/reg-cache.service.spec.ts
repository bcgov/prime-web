import { TestBed, inject } from '@angular/core/testing';

import { RegCacheService } from './reg-cache.service';

describe('RegCacheService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegCacheService]
    });
  });

  it('should be created', inject([RegCacheService], (service: RegCacheService) => {
    expect(service).toBeTruthy();
  }));
});
