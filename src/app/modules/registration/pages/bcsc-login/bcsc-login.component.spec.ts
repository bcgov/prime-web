import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BcscLoginComponent } from './bcsc-login.component';

describe('BcscLoginComponent', () => {
  let component: BcscLoginComponent;
  let fixture: ComponentFixture<BcscLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BcscLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BcscLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
