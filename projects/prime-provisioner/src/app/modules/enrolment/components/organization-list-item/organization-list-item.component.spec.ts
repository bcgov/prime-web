import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationListItemComponent } from './organization-list-item.component';

describe('OrganizationListItemComponent', () => {
  let component: OrganizationListItemComponent;
  let fixture: ComponentFixture<OrganizationListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
