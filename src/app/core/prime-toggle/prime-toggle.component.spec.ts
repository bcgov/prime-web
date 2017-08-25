import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeToggleComponent } from './prime-toggle.component';

describe('PrimeToggleComponent', () => {
  let component: PrimeToggleComponent;
  let fixture: ComponentFixture<PrimeToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
