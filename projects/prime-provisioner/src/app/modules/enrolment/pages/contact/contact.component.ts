import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
      <!--
  TODO: multi-selected preferred contact method

  TODO: email input (note - check email validator)

  TODO: Phone number

 -->
    </common-page-framework>
  `,
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent implements OnInit {
  // component headers
  title = 'Contact Information';
  helperText = 'Contact Information - helper text';
  // TODO: manage the state of the selected preferrence

  // TODO: dynamically add the validators

  constructor() {}

  ngOnInit() {}
}
