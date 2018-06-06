import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreBreadcrumbComponent } from './core-breadcrumb.component';

describe('CoreBreadcrumbComponent', () => {
  let component: CoreBreadcrumbComponent;
  let fixture: ComponentFixture<CoreBreadcrumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreBreadcrumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
