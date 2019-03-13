import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MohAccountComponent } from './moh-account.component';
import { RegistrationModule } from '../../../registration/registration.module';
import { SharedCoreModule } from 'moh-common-lib';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { RegistrationDataService } from '@prime-registration/services/registration-data.service';

describe('MohAccountComponent', () => {
  let component: MohAccountComponent;
  let fixture: ComponentFixture<MohAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MohAccountComponent ],
      imports: [
        RegistrationModule,
        SharedCoreModule,
        FormsModule,
        RouterTestingModule
      ],
      providers: [
        RegistrationDataService
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
