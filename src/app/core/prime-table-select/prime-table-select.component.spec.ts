import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeTableSelectComponent } from './prime-table-select.component';

describe('PrimeTableSelectComponent', () => {
  let component: PrimeTableSelectComponent;
  let fixture: ComponentFixture<PrimeTableSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeTableSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeTableSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
