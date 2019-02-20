import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BcscProfileComponent } from './bcsc-profile.component';
import { RegistrationModule } from '../../../registration/registration.module';
import { SharedCoreModule } from '../../../../shared-core/shared-core.module';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { PrimeDataService } from '../../../../services/prime-data.service';
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
        PrimeDataService,
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
