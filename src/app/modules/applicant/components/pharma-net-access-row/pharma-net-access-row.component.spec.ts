import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmaNetAccessRowComponent } from './pharma-net-access-row.component';

describe('PharmaNetAccessRowComponent', () => {
  let component: PharmaNetAccessRowComponent;
  let fixture: ComponentFixture<PharmaNetAccessRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmaNetAccessRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmaNetAccessRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
