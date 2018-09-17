import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmaNetPageComponent } from './pharma-net-page.component';

describe('PharmaNetPageComponent', () => {
  let component: PharmaNetPageComponent;
  let fixture: ComponentFixture<PharmaNetPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmaNetPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmaNetPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
