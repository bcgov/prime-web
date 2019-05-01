import { TestBed } from '@angular/core/testing';

import { OrganizationStateService } from './organization-state.service';

describe('OrganizationStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrganizationStateService = TestBed.get(OrganizationStateService);
    expect(service).toBeTruthy();
  });
});
