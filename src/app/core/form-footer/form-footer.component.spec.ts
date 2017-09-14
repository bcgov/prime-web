import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeFormFooterComponent } from './form-footer.component';

describe('PrimeFormFooterComponent', () => {
  let component: PrimeFormFooterComponent;
  let fixture: ComponentFixture<PrimeFormFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeFormFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeFormFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
