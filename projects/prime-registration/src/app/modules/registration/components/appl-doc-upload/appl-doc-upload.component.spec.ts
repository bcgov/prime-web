import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplDocUploadComponent } from './appl-doc-upload.component';
import { FormsModule, NgForm } from '@angular/forms';
import { SharedCoreModule } from 'moh-common-lib';

describe('ApplDocUploadComponent', () => {
  let component: ApplDocUploadComponent;
  let fixture: ComponentFixture<ApplDocUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ApplDocUploadComponent
       ],
       imports: [
        FormsModule,
        SharedCoreModule
      ],
      providers: [
        NgForm
      ]
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
