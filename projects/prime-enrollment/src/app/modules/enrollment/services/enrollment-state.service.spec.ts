import { TestBed } from '@angular/core/testing';

import { EnrollmentStateService } from './enrollment-state.service';
import { ActivatedRoute } from '@angular/router';
import { MockActivatedRoute } from '../mocks/mock-activated-route';
import { RouterTestingModule } from '@angular/router/testing';

describe('EnrollmentStateService', () => {
  let activeRoute = new MockActivatedRoute();

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule]
    })
  );

  it('should be created', () => {
    const service: EnrollmentStateService = TestBed.get(EnrollmentStateService);
    expect(service).toBeTruthy();
  });
});
