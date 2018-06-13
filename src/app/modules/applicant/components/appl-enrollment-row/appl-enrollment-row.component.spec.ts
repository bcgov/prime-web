import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplEnrollmentRowComponent } from './appl-enrollment-row.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from '../../../core/core.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('ApplEnrollmentRowComponent', () => {
  let component: ApplEnrollmentRowComponent;
  let fixture: ComponentFixture<ApplEnrollmentRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplEnrollmentRowComponent ],
      imports: [NoopAnimationsModule, CoreModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplEnrollmentRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
