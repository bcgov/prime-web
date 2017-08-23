import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteAccessComponent } from './site-access.component';

describe('SiteAccessComponent', () => {
  let component: SiteAccessComponent;
  let fixture: ComponentFixture<SiteAccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteAccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
