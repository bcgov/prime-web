import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvisionerRowComponent } from '../provisioner-row/provisioner-row.component';
import {AlertModule, ProgressbarModule, TooltipModule} from 'ngx-bootstrap';
import { CoreModule } from '../../../core/core.module';
import { InfoButtonComponent } from '../../../verifier/components/user-info-button/user-info-button.component';
import { EnrollmentProgressRowComponent } from '../../../../core/enrollment-progress-row/enrollment-progress-row.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {ProgressBarComponent} from '../../../../core/progress-bar/progress-bar.component';
import {PillBadgeComponent} from '../../../../core/pill-badge/pill-badge.component';
import {DatepickerComponent} from '../../../../core/datepicker/datepicker.component';
import {NgxMyDatePickerModule} from 'ngx-mydatepicker';

describe('ProvisionerRowComponent', () => {
  let component: ProvisionerRowComponent;
  let fixture: ComponentFixture<ProvisionerRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvisionerRowComponent, InfoButtonComponent, EnrollmentProgressRowComponent, PillBadgeComponent, DatepickerComponent],
      imports: [ FormsModule, RouterTestingModule, ProgressbarModule.forRoot(), TooltipModule.forRoot(), NgxMyDatePickerModule.forRoot(), BrowserAnimationsModule],
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
