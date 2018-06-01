import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvisionerWidgetsComponent } from './provisioner-widgets.component';

describe('ProvisionerWidgetsComponent', () => {
  let component: ProvisionerWidgetsComponent;
  let fixture: ComponentFixture<ProvisionerWidgetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvisionerWidgetsComponent ]
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
