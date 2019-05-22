import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import { FormsModule, NgForm } from '@angular/forms';
import { SharedCoreModule } from 'moh-common-lib';
import { AddressComponent } from '../address/address.component';
import { NameComponent } from '../name/name.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgSelectModule } from '@ng-select/ng-select';
import { TextMaskModule } from 'angular2-text-mask';
import { TypeaheadModule } from 'ngx-bootstrap';
import { BASE_URL } from '../../../services/cache-api.service';
import { VerifyPreferNameDirective } from './verify-prefer-name.directive';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProfileComponent,
        AddressComponent,
        NameComponent,
        VerifyPreferNameDirective
      ],
      imports: [
        FormsModule,
        HttpClientTestingModule,
        NgSelectModule,
        TextMaskModule,
        TypeaheadModule.forRoot(),
        SharedCoreModule
      ],
      providers: [
        NgForm,
        { provide: BASE_URL, useValue: '/api/reg/rest' }, ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
