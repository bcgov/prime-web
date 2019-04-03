import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmanetOrganizationBlockComponent } from './pharmanet-organization-block.component';

describe('PharmanetOrganizationBlockComponent', () => {
  let component: PharmanetOrganizationBlockComponent;
  let fixture: ComponentFixture<PharmanetOrganizationBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmanetOrganizationBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmanetOrganizationBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
