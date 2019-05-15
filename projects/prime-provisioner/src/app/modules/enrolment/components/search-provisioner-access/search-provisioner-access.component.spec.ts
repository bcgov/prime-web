import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchProvisionerAccessComponent } from './search-provisioner-access.component';

describe('SearchProvisionerAccessComponent', () => {
  let component: SearchProvisionerAccessComponent;
  let fixture: ComponentFixture<SearchProvisionerAccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchProvisionerAccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchProvisionerAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
