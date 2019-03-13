import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MohDocUploadComponent } from './moh-doc-upload.component';
import { RegistrationModule } from '../../../registration/registration.module';
import { SharedCoreModule } from 'moh-common-lib';

describe('MohDocUploadComponent', () => {
  let component: MohDocUploadComponent;
  let fixture: ComponentFixture<MohDocUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MohDocUploadComponent ],
      imports: [
        RegistrationModule,
        SharedCoreModule
      ]
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
