import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvisionerDetailsComponent } from './provisioner-details.component';

describe('ProvisionerDetailsComponent', () => {
  let component: ProvisionerDetailsComponent;
  let fixture: ComponentFixture<ProvisionerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvisionerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvisionerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
