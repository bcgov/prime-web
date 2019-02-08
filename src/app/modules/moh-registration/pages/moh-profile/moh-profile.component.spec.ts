import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MohProfileComponent } from './moh-profile.component';

describe('MohProfileComponent', () => {
  let component: MohProfileComponent;
  let fixture: ComponentFixture<MohProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MohProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MohProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
