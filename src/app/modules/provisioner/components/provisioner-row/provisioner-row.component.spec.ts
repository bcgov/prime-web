import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvisionerRowComponent } from '../provisioner-row/provisioner-row.component';
import { AlertModule } from 'ngx-bootstrap';
import { CoreModule } from '../../../core/core.module';
import { InfoButtonComponent } from '../../../verifier/components/user-info-button/user-info-button.component';
import { EnrollmentProgressRowComponent } from '../../../../core/enrollment-progress-row/enrollment-progress-row.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {PillBadgeComponent} from '../../../../core/pill-badge/pill-badge.component';
import {ProgressBarComponent} from '../../../../core/progress-bar/progress-bar.component';

describe('ProvisionerRowComponent', () => {
  let component: ProvisionerRowComponent;
  let fixture: ComponentFixture<ProvisionerRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvisionerRowComponent, InfoButtonComponent, EnrollmentProgressRowComponent,  ProgressBarComponent],
      imports: [ AlertModule, CoreModule, FormsModule, RouterTestingModule, NoopAnimationsModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvisionerRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
