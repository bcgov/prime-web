import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentProgressRowComponent } from './enrollment-progress-row.component';
import {BsModalService, ProgressbarModule} from 'ngx-bootstrap';
import {ProgressBarComponent} from '../progress-bar/progress-bar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

describe('EnrollmentProgressRowComponent', () => {
  let component: EnrollmentProgressRowComponent;
  let fixture: ComponentFixture<EnrollmentProgressRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrollmentProgressRowComponent, ProgressBarComponent],
      imports: [ProgressbarModule, RouterTestingModule, FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollmentProgressRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
