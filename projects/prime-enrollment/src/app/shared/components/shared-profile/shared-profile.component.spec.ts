import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedProfileComponent } from './shared-profile.component';

describe('SharedProfileComponent', () => {
  let component: SharedProfileComponent;
  let fixture: ComponentFixture<SharedProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
