import { TestBed } from '@angular/core/testing';

import { DocumentUploaderService } from './document-uploader.service';

describe('DocumentUploaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DocumentUploaderService = TestBed.get(DocumentUploaderService);
    expect(service).toBeTruthy();
  });
});
