import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {
  IPreferredContactInput,
  ContactValueOption
} from '@prime-prov/core/interfaces/ipreferred-contact-input';
import { EnrolmentStateService } from '../../services/enrolment-state.service';
import { FormGroup, Validators } from '@angular/forms';
import { phoneNumberValidator } from '@prime-prov/core/models/validators';

import { MaskModel, NUMBER, SPACE } from 'moh-common-lib/models';
// TODO: set standard page views

// TODO: create the header component

@Component({
  selector: 'prov-contact',
  template: `
    <common-page-framework layout="blank">
      <prov-page-header
        [title]="title"
        [helperText]="helperText"
      ></prov-page-header>
      <common-page-section layout="tips">
        <prov-subheader
          [title]="subTitle"
          [helperText]="subHelperText"
        ></prov-subheader>
        <form [formGroup]="stateSvc.contactForm">
          <prov-radio-control
            (selection)="
              preferredContactValueChange($event, stateSvc.contactForm)
            "
            formControlName="preferredContact"
            [controls]="contactOptions"
          ></prov-radio-control>
          <div class="form-group">
            <label for="email" class="control-label">Email</label>
            <input
              class="form-control"
              formControlName="email"
              id="email"
              placeholder="user@example.com"
            />
          </div>
          <div class="form-group phone">
            <label for="email" class="control-label">Phone</label>

            <input
              class="form-control"
              name="phone"
              formControlName="phone"
              [textMask]="{ mask: mask }"
              [placeholder]="placeholder"
            />
          </div>
          <prov-subheader
            [title]="voicePhoneTitle"
            [helperText]="voicePhoneHelperText"
          ></prov-subheader>
          <label class="control-label" for="phone">
            Phone Number for Voice Contact
          </label>
          <div class="form-group">
            <input
              class="form-control"
              name="voicePhone"
              formControlName="voicePhone"
              [textMask]="{ mask: mask }"
              [placeholder]="placeholder"
            />
          </div>
          <div class="form-group">
            <label for="ext" class="control-label"
              >Extension Number (Optional)</label
            >
            <input
              class="form-control col-sm-3 col-md-3 col-lg-3"
              formControlName="ext"
              id="ext"
              placeholder="555"
            />
          </div>
        </form>
        <aside>Tips</aside>
      </common-page-section>
    </common-page-framework>
    <!--

  TODO: email input (note - check email validator)

  TODO: Phone number

 -->
  `,
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent implements OnInit {
  // component headers
  title = 'Contact Information';
  helperText = 'Contact Information - helper text';
  subTitle = 'Preferred Contact Method';
  subHelperText = 'This contact is for text message communication';
  voicePhoneTitle = 'Voice Contact';
  voicePhoneHelperText = 'Used for voice calls. ie: Business Phone';
  contactOptions: IPreferredContactInput[];
  mask: (string | RegExp)[];
  placeholder: string;

  // TODO: manage the state of the selected preferrence
  //

  // TODO: dynamically add the validators

  constructor(public stateSvc: EnrolmentStateService) {
    const preferredContact = [
      {
        name: 'email',
        value: 'email',
        id: 'email',
        label: 'Email'
      },
      {
        name: 'phone',
        value: 'phone',
        id: 'phone',
        label: 'Text Phone Number'
      },
      {
        name: 'both',
        value: 'both',
        id: 'both',
        label: 'Both (Email & Text Phone Number)'
      }
    ] as IPreferredContactInput[];
    this.contactOptions = preferredContact;
    this.mask = [
      '+',
      '1',
      SPACE,
      '(',
      NUMBER,
      NUMBER,
      NUMBER,
      ')',
      SPACE,
      NUMBER,
      NUMBER,
      NUMBER,
      '-',
      NUMBER,
      NUMBER,
      NUMBER,
      NUMBER
    ];
    this.placeholder = '+1 (555) 555-5555';
  }

  ngOnInit() {}

  preferredContactValueChange(itm: ContactValueOption, fg: FormGroup) {
    switch (itm) {
      case 'email':
        fg.controls.email.enable();
        fg.controls.email.setValidators([
          Validators.required,
          Validators.email
        ]);
        fg.controls.phone.clearValidators();
        fg.controls.phone.disable();
        fg.updateValueAndValidity({ emitEvent: true });
        this.stateSvc.contactForm = fg;
        break;
      case 'phone':
        fg.controls.phone.enable();
        fg.controls.phone.setValidators([
          Validators.required,
          phoneNumberValidator()
        ]);
        fg.controls.email.clearValidators();
        fg.controls.email.disable();
        fg.updateValueAndValidity({ emitEvent: true });
        this.stateSvc.contactForm = fg;

        break;
      case 'both':
        fg.controls.phone.enable();
        fg.controls.phone.setValidators([
          Validators.required,
          phoneNumberValidator()
        ]);
        fg.controls.email.enable();
        fg.controls.email.setValidators([
          Validators.required,
          Validators.email
        ]);
        fg.updateValueAndValidity({ emitEvent: true });
        this.stateSvc.contactForm = fg;

        break;
    }
    console.log(fg);
  }
}
