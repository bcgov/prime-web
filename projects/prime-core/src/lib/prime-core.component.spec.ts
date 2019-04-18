import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeCoreComponent } from './prime-core.component';

describe('PrimeCoreComponent', () => {
  let component: PrimeCoreComponent;
  let fixture: ComponentFixture<PrimeCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
