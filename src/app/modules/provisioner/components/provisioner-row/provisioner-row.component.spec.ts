import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvisionerRowComponent } from '../provisioner-row/provisioner-row.component';

describe('ProvisionerTableComponent', () => {
  let component: ProvisionerRowComponent;
  let fixture: ComponentFixture<ProvisionerRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvisionerRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvisionerRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
