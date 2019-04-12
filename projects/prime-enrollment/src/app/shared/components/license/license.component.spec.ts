import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseComponent } from './license.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('LicenseComponent', () => {
  let component: LicenseComponent;
  let fixture: ComponentFixture<LicenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [LicenseComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
