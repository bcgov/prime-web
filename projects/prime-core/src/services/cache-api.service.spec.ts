import { TestBed } from '@angular/core/testing';

import { CacheApiService } from './cache-api.service';

describe('CacheApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CacheApiService = TestBed.get(CacheApiService);
    expect(service).toBeTruthy();
  });
});
