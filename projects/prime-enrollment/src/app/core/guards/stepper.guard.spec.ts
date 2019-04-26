import { TestBed, async, inject } from '@angular/core/testing';

import { StepperGuard } from './stepper.guard';
import { EnrollmentStateService } from '@prime-enrollment/modules/enrollment/services/enrollment-state.service';
import { RouterTestingModule } from '@angular/router/testing';
import { CacheService } from '@prime-core/services/cache.service';
import { CacheApiService } from '@prime-core/services/cache-api.service';
import { HttpClientModule } from '@angular/common/http';

describe('StepperGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      providers: [
        CacheService,
        StepperGuard,
        EnrollmentStateService,
        CacheApiService
      ]
    });
  });

  it('should ...', inject([StepperGuard], (guard: StepperGuard) => {
    expect(guard).toBeTruthy();
  }));
});
