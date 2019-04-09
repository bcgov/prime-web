import { TestBed, async, inject } from '@angular/core/testing';

import { StepperGuard } from './stepper.guard';

describe('StepperGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StepperGuard]
    });
  });

  it('should ...', inject([StepperGuard], (guard: StepperGuard) => {
    expect(guard).toBeTruthy();
  }));
});
