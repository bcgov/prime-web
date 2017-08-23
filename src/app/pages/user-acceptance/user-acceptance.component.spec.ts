import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAcceptanceComponent } from './user-acceptance.component';

describe('UserAcceptanceComponent', () => {
  let component: UserAcceptanceComponent;
  let fixture: ComponentFixture<UserAcceptanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAcceptanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAcceptanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
