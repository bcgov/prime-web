import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MohProfileComponent } from './moh-profile.component';
import { RegistrationModule } from '../../../registration/registration.module';
import { SharedCoreModule } from 'moh-common-lib';
import { PrimeDataService } from '../../../../services/prime-data.service';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('MohProfileComponent', () => {
  let component: MohProfileComponent;
  let fixture: ComponentFixture<MohProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MohProfileComponent ],
      imports: [
        RegistrationModule,
        SharedCoreModule,
        FormsModule,
        RouterTestingModule
      ],
      providers: [
        PrimeDataService
      ]
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
