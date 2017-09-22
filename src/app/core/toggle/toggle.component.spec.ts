import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeToggleComponent } from './toggle.component';

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

  it('should have both options unselected on init', () => {
    expect(component.data).toBeUndefined();
    expect(fixture.nativeElement.querySelectorAll('.btn-radio').length).toEqual(0);
  });

  it('should allow for toggling values', () => {
    component.data = true;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('.btn-radio').length).toEqual(1);
    expect(fixture.nativeElement.querySelectorAll('.btn-radio')[0].textContent).toEqual('Yes');

    component.data = false;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('.btn-radio').length).toEqual(1);
    expect(fixture.nativeElement.querySelectorAll('.btn-radio')[0].textContent).toEqual('No');
    expect(component.data).toBeFalsy();
  });

});
