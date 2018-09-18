import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmaNetAccessListComponent } from './pharma-net-access-list.component';

describe('PharmaNetAccessListComponent', () => {
  let component: PharmaNetAccessListComponent;
  let fixture: ComponentFixture<PharmaNetAccessListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmaNetAccessListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmaNetAccessListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
