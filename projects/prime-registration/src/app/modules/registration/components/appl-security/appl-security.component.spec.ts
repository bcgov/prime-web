import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplSecurityComponent } from './appl-security.component';

describe('ApplSecurityComponent', () => {
  let component: ApplSecurityComponent;
  let fixture: ComponentFixture<ApplSecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplSecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
