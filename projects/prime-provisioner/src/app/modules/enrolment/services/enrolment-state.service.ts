import { Injectable } from '@angular/core';
import { Registrant } from '../../../../../../prime-registration/src/app/modules/registration/models/registrant.model';
import { SimpleDate } from 'moh-common-lib/models/simple-date.interface';
import { FormBuilder } from '@angular/forms';
import { EnrolmentFormBuilder } from '@prime-prov/core/models/form-builder.model';

const dateOfBirth = {
  day: 26,
  month: 4,
  year: 1984
} as SimpleDate;

@Injectable({
  providedIn: 'root'
})
export class EnrolmentStateService {
  profileForm = new Registrant();
  contactForm = EnrolmentFormBuilder.contactForm(this.fb);
  constructor(private fb: FormBuilder) {
    this.profileForm.address.street = '123 fake st';
    this.profileForm.address.postal = 'V9L 3W8';
    this.profileForm.address.country = 'CAN';
    this.profileForm.address.province = 'BC';
    this.profileForm.address.city = 'Victoria';

    this.profileForm.firstName = 'Sean';
    this.profileForm.lastName = 'Hamilton';
    this.profileForm.dateOfBirth = dateOfBirth;
    // console.log(this);
  }
}
