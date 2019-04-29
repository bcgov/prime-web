import { TestBed } from '@angular/core/testing';

import { FormBuilderService } from './form-builder.service';

describe('FormBuilderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormBuilderService = TestBed.get(FormBuilderService);
    expect(service).toBeTruthy();
  });
});
