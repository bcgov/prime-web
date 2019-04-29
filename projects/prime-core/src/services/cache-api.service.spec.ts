import { TestBed } from '@angular/core/testing';

import { CacheApiService, BASE_URL } from './cache-api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CacheApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
    ],
    providers: [
      { provide: BASE_URL, useValue: '/api/reg/rest' },
    ]
  }));

  it('should be created', () => {
    const service: CacheApiService = TestBed.get(CacheApiService);
    expect(service).toBeTruthy();
  });
});
