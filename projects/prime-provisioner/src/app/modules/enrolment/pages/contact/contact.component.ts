import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IPreferredContactInput } from '@prime-prov/core/interfaces/ipreferred-contact-input';
import { EnrolmentStateService } from '../../services/enrolment-state.service';
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
      <form [formGroup]="stateSvc.contactForm">
        <prov-radio-control
          formControlName="preferredContact"
          [controls]="contactOptions"
        ></prov-radio-control>
      </form>
    </common-page-framework>
    <!--
  TODO: multi-selected preferred contact method

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
  contactOptions: IPreferredContactInput[];

  // TODO: add the form

  // TODO: manage the state of the selected preferrence

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
  }

  ngOnInit() {}
}
