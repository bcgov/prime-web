import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BcscAccountComponent } from './bcsc-account.component';
import { RegistrationModule } from '../../../registration/registration.module';
import { SharedCoreModule } from 'moh-common-lib';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { PrimeDataService } from '../../../../services/prime-data.service';

describe('BcscAccountComponent', () => {
  let component: BcscAccountComponent;
  let fixture: ComponentFixture<BcscAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BcscAccountComponent ],
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
    fixture = TestBed.createComponent(BcscAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
