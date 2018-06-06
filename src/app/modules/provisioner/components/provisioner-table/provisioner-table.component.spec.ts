import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvisionerTableComponent } from './provisioner-table.component';

describe('ProvisionerTableComponent', () => {
  let component: ProvisionerTableComponent;
  let fixture: ComponentFixture<ProvisionerTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvisionerTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvisionerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
