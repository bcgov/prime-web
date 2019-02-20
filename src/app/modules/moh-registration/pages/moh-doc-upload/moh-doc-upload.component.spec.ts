import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MohDocUploadComponent } from './moh-doc-upload.component';

describe('MohDocUploadComponent', () => {
  let component: MohDocUploadComponent;
  let fixture: ComponentFixture<MohDocUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MohDocUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MohDocUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
