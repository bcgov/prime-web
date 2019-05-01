import { TestBed, async, inject } from '@angular/core/testing';

import { StepperGuard } from './stepper.guard';
import { EnrollmentStateService } from '@prime-enrollment/modules/enrollment/services/enrollment-state.service';
import { RouterTestingModule } from '@angular/router/testing';
import { CacheService , CacheApiService} from 'prime-core';
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
