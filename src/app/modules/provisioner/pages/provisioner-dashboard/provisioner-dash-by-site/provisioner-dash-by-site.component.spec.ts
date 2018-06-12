import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvisionerDashBySiteComponent } from './provisioner-dash-by-site.component';

describe('ProvisionerDashBySiteComponent', () => {
  let component: ProvisionerDashBySiteComponent;
  let fixture: ComponentFixture<ProvisionerDashBySiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvisionerDashBySiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvisionerDashBySiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
