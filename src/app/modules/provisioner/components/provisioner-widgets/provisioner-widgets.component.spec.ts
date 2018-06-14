import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvisionerWidgetsComponent } from './provisioner-widgets.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { TooltipModule } from 'ngx-bootstrap';
import { InfoButtonComponent } from '../../../../core/user-info-button/user-info-button.component';
import { FormsModule } from '@angular/forms';
import { PillBadgeComponent } from '../../../../core/pill-badge/pill-badge.component';
import { DatepickerComponent } from '../../../../core/datepicker/datepicker.component';
import { NgxMyDatePickerModule } from 'ngx-mydatepicker';
import { ProvisionerService } from '../../../../services/provisioner.service';
import { PrimeDataService } from '../../../../services/prime-data.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('ProvisionerWidgetsComponent', () => {
  let component: ProvisionerWidgetsComponent;
  let fixture: ComponentFixture<ProvisionerWidgetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvisionerWidgetsComponent, InfoButtonComponent, DatepickerComponent, PillBadgeComponent ],
      imports: [NgxChartsModule, TooltipModule.forRoot(), FormsModule, NgxMyDatePickerModule.forRoot(), NoopAnimationsModule],
      providers: [ProvisionerService, PrimeDataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvisionerWidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
