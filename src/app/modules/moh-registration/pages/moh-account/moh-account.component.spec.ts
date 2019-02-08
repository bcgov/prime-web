import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MohAccountComponent } from './moh-account.component';

describe('MohAccountComponent', () => {
  let component: MohAccountComponent;
  let fixture: ComponentFixture<MohAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MohAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MohAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
