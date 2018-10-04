import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule} from '@angular/forms';
import { PrimeDataService} from '../../../../services/prime-data.service';
import { RegLoginMfaComponent } from './reg-login-mfa.component';
import {
  AlertModule,
  BsModalService,
  ComponentLoaderFactory,
  PositioningService,
  ProgressbarModule,
  TooltipModule
} from 'ngx-bootstrap';
import {Router} from "@angular/router";
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {RouterTestingModule} from "@angular/router/testing";
import {NgxMyDatePickerModule} from "ngx-mydatepicker";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {APP_BASE_HREF} from "@angular/common";

describe('RegLoginMfaComponent', () => {
  let component: RegLoginMfaComponent;
  let fixture: ComponentFixture<RegLoginMfaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RegLoginMfaComponent
      ],
      providers: [
        PrimeDataService,
        BsModalService,
        ComponentLoaderFactory,
        PositioningService,
        {provide: APP_BASE_HREF, useValue: '/'}
      ],

      imports: [ TooltipModule.forRoot(),  ProgressbarModule.forRoot(), FormsModule, RouterTestingModule, NgxMyDatePickerModule.forRoot(), NgxChartsModule, NoopAnimationsModule, AlertModule.forRoot()]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegLoginMfaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
