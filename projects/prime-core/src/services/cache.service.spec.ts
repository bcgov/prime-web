import { TestBed, inject } from '@angular/core/testing';

import { CacheService } from './cache.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BASE_URL } from './cache-api.service';

describe('CacheService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        { provide: BASE_URL, useValue: '/api/reg/rest' }
      ]
    });
  });

  it('should be created', inject([CacheService], (service: CacheService) => {
    expect(service).toBeTruthy();
  }));
});
