import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvisionerListComponent } from './provisioner-list.component';

describe('ProvisionerListComponent', () => {
  let component: ProvisionerListComponent;
  let fixture: ComponentFixture<ProvisionerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvisionerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvisionerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
