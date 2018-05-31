import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeHeaderComponent } from './prime-header.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('PrimeHeaderComponent', () => {
  let component: PrimeHeaderComponent;
  let fixture: ComponentFixture<PrimeHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeHeaderComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
