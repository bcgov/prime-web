import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MohAccountComponent } from './moh-account.component';
import { RegistrationModule } from '../../../registration/registration.module';
import { SharedCoreModule } from 'moh-common-lib';

describe('MohAccountComponent', () => {
  let component: MohAccountComponent;
  let fixture: ComponentFixture<MohAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MohAccountComponent ],
      imports: [
        RegistrationModule,
        SharedCoreModule
      ]
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
