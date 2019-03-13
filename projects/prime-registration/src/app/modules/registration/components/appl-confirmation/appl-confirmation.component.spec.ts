import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplConfirmationComponent } from './appl-confirmation.component';

describe('ApplConfirmationComponent', () => {
  let component: ApplConfirmationComponent;
  let fixture: ComponentFixture<ApplConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
