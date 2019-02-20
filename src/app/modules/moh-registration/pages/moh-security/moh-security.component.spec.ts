import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MohSecurityComponent } from './moh-security.component';

describe('MohSecurityComponent', () => {
  let component: MohSecurityComponent;
  let fixture: ComponentFixture<MohSecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MohSecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MohSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
