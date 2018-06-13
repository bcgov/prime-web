import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvisionerDashByUserComponent } from './provisioner-dash-by-user.component';

describe('ProvisionerDashByUserComponent', () => {
  let component: ProvisionerDashByUserComponent;
  let fixture: ComponentFixture<ProvisionerDashByUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvisionerDashByUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvisionerDashByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
