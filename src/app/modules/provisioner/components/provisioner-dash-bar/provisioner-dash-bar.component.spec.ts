import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {AlertComponent} from '../../../../core/alert/alert.component';
import { ProvisionerDashBarComponent } from './provisioner-dash-bar.component';

describe('ProvisionerDashBarComponent', () => {
  let component: ProvisionerDashBarComponent;
  let fixture: ComponentFixture<ProvisionerDashBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvisionerDashBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvisionerDashBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
