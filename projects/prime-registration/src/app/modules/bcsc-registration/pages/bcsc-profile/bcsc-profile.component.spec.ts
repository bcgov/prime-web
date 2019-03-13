import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BcscProfileComponent } from './bcsc-profile.component';
import { RegistrationModule } from '../../../registration/registration.module';
import { SharedCoreModule } from 'moh-common-lib';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { RegistrationDataService } from '@prime-registration/services/registration-data.service';
import { DummyDataService } from '../../../../services/dummy-data.service';

describe('BcscProfileComponent', () => {
  let component: BcscProfileComponent;
  let fixture: ComponentFixture<BcscProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BcscProfileComponent ],
      imports: [
        RegistrationModule,
        SharedCoreModule,
        FormsModule,
        RouterTestingModule
      ],
      providers: [
        RegistrationDataService,
        DummyDataService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BcscProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
