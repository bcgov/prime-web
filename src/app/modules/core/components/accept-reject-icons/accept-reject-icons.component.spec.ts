import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptRejectIconsComponent } from './accept-reject-icons.component';

describe('AcceptRejectIconsComponent', () => {
  let component: AcceptRejectIconsComponent;
  let fixture: ComponentFixture<AcceptRejectIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptRejectIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptRejectIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
