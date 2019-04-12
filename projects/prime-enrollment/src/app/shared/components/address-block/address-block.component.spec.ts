import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressBlockComponent } from './address-block.component';

describe('AddressBlockComponent', () => {
  let component: AddressBlockComponent;
  let fixture: ComponentFixture<AddressBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
