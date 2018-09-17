import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPharmaNetOrganizationComponent } from './add-pharma-net-organization.component';

describe('AddPharmaNetOrganizationComponent', () => {
  let component: AddPharmaNetOrganizationComponent;
  let fixture: ComponentFixture<AddPharmaNetOrganizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPharmaNetOrganizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPharmaNetOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
