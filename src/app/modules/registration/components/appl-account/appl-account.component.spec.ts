import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplAccountComponent } from './appl-account.component';

describe('ApplAccountComponent', () => {
  let component: ApplAccountComponent;
  let fixture: ComponentFixture<ApplAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
