import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandingSearchComponent } from './expanding-search.component';
import {FormsModule, NgForm} from '@angular/forms';

describe('ExpandingSearchComponent', () => {
  let component: ExpandingSearchComponent;
  let fixture: ComponentFixture<ExpandingSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpandingSearchComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandingSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
