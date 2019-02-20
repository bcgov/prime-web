import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplProfileComponent } from './appl-profile.component';
import { FormsModule } from '@angular/forms';
import { SharedCoreModule } from 'moh-common-lib';
import { RegistrationModule } from '../../registration.module';
import { PageSectionsComponent } from '../page-sections/page-sections.component';
import { AddressComponent } from '../address/address.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PrimeDataService } from '../../../../services/prime-data.service';

describe('ApplProfileComponent', () => {
  let component: ApplProfileComponent;
  let fixture: ComponentFixture<ApplProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ApplProfileComponent,
        PageSectionsComponent,
        AddressComponent
      ],
      imports: [
        FormsModule,
        SharedCoreModule,
        HttpClientTestingModule
      ],
      providers: [
        PrimeDataService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
