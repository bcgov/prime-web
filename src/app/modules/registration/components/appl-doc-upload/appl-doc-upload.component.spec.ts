import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplDocUploadComponent } from './appl-doc-upload.component';

describe('ApplDocUploadComponent', () => {
  let component: ApplDocUploadComponent;
  let fixture: ComponentFixture<ApplDocUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplDocUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplDocUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
