import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegCompleteComponent } from './reg-complete.component';

describe('RegCompleteComponent', () => {
  let component: RegCompleteComponent;
  let fixture: ComponentFixture<RegCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
