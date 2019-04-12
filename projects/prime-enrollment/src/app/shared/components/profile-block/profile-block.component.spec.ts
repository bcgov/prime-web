import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileBlockComponent } from './profile-block.component';

describe('ProfileBlockComponent', () => {
  let component: ProfileBlockComponent;
  let fixture: ComponentFixture<ProfileBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
