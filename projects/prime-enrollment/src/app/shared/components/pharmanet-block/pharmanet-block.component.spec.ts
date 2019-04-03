import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmanetBlockComponent } from './pharmanet-block.component';

describe('PharmanetBlockComponent', () => {
  let component: PharmanetBlockComponent;
  let fixture: ComponentFixture<PharmanetBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmanetBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmanetBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
