import { Component, OnInit, Input, forwardRef, Output, EventEmitter } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { Base } from 'moh-common-lib/models';

@Component({
  selector: 'prime-phone-number',
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.scss'],
  /* Re-use the same ngForm that it's parent is using. The component will show
   * up in its parents `this.form`, and will auto-update `this.form.valid`
   */
  viewProviders: [ { provide: ControlContainer, useExisting: forwardRef(() => NgForm ) } ]

})
export class PhoneNumberComponent extends Base implements OnInit {

  @Input() displayMask: boolean = true;
  @Input() label: string = 'Mobile/SMS';
  @Input() phoneNumber: string;
  @Input() disabled: boolean = false;
  @Input() required: boolean = true;

  @Output() phoneNumberChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    super();
  }

  ngOnInit() {
  }

  /**
   * Passes the value entered back to the calling component
   * @param value value the was entered by
   */
  setPhoneNumber( value: string ) {
    this.phoneNumberChange.emit( value );
  }

}
