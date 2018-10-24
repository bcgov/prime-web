import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBarComponent } from './dashboard-bar.component';
import {AddUserButtonComponent} from '../add-user-button/add-user-button.component';
import {MiniProgressBarComponent} from '../mini-progress-bar/mini-progress-bar.component';
import {FormsModule} from '@angular/forms';
import {DatepickerComponent} from '../datepicker/datepicker.component';
import {BsModalService, ComponentLoaderFactory, PositioningService, ProgressbarModule} from 'ngx-bootstrap';
import {NgxMyDatePickerModule} from 'ngx-mydatepicker';
import {PrimeDataService} from '../../services/prime-data.service';
import {DummyDataService} from '../../services/dummy-data.service';
import { RouterModule } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import {PostalCodeComponent} from "../../modules/core/components/postal-code/postal-code.component";
import {TextMaskModule} from "angular2-text-mask";
import {PhoneNumberComponent} from "../../modules/core/components/phone-number/phone-number.component";



describe('DashboardBarComponent', () => {
  let component: DashboardBarComponent;
  let fixture: ComponentFixture<DashboardBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardBarComponent, AddUserButtonComponent, MiniProgressBarComponent, DatepickerComponent, PostalCodeComponent, PhoneNumberComponent],
      imports: [FormsModule, ProgressbarModule.forRoot(), NgxMyDatePickerModule.forRoot(), TextMaskModule,
                RouterModule.forRoot([
                  {
                    path: '**',
                    redirectTo: 'dashboard'
                  }
                ])
      ],
      providers: [{provide: APP_BASE_HREF, useValue: '/'},
        ComponentLoaderFactory, BsModalService, PositioningService, PrimeDataService, DummyDataService]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
