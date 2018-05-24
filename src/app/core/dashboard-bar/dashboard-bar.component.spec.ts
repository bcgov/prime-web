import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBarComponent } from './dashboard-bar.component';
import {AddUserButtonComponent} from '../add-user-button/add-user-button.component';

describe('DashboardBarComponent', () => {
  let component: DashboardBarComponent;
  let fixture: ComponentFixture<DashboardBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardBarComponent,AddUserButtonComponent]
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
