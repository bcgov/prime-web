import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeContainerComponent } from './prime-container.component';

describe('PrimeContainerComponent', () => {
  let component: PrimeContainerComponent;
  let fixture: ComponentFixture<PrimeContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
