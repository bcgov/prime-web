import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewListItemComponent } from './review-list-item.component';

describe('ReviewListItemComponent', () => {
  let component: ReviewListItemComponent;
  let fixture: ComponentFixture<ReviewListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
