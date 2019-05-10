import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessGroupBlockComponent } from './access-group-block.component';

describe('AccessGroupBlockComponent', () => {
  let component: AccessGroupBlockComponent;
  let fixture: ComponentFixture<AccessGroupBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessGroupBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessGroupBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
