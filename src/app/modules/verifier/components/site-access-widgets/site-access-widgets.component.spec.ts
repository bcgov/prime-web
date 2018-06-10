import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteAccessWidgetsComponent } from './site-access-widgets.component';
import {InfoButtonComponent} from '../../../../core/user-info-button/user-info-button.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {TooltipModule} from 'ngx-bootstrap';
import {FormsModule} from '@angular/forms';
import {DatepickerComponent} from '../../../../core/datepicker/datepicker.component';
import {PillBadgeComponent} from '../../../../core/pill-badge/pill-badge.component';
import {NgxMyDatePickerModule} from 'ngx-mydatepicker';
import {VerifierService} from '../../../../services/verifier.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('SiteAccessWidgetsComponent', () => {
  let component: SiteAccessWidgetsComponent;
  let fixture: ComponentFixture<SiteAccessWidgetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteAccessWidgetsComponent, InfoButtonComponent, DatepickerComponent, PillBadgeComponent],
      imports: [NgxChartsModule, TooltipModule.forRoot(), FormsModule, NgxMyDatePickerModule.forRoot(), BrowserAnimationsModule],
      providers: [VerifierService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteAccessWidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
