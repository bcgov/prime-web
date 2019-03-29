import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchOrganizationModalComponent } from './search-organization-modal.component';

describe('SearchOrganizationModalComponent', () => {
  let component: SearchOrganizationModalComponent;
  let fixture: ComponentFixture<SearchOrganizationModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchOrganizationModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchOrganizationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
