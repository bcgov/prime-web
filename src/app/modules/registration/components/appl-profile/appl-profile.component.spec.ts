import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplProfileComponent } from './appl-profile.component';

describe('ApplProfileComponent', () => {
  let component: ApplProfileComponent;
  let fixture: ComponentFixture<ApplProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
