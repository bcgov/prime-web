import {
  Component,
  OnInit,
  Input,
  forwardRef
} from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { MaskModel, NUMBER, SPACE } from 'moh-common-lib/models';

@Component({
  selector: 'prime-phone-number',
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.scss'],
  /* Re-use the same ngForm that it's parent is using. The component will show
   * up in its parents `this.form`, and will auto-update `this.form.valid`
   */
  viewProviders: [
    { provide: ControlContainer, useExisting: forwardRef(() => NgForm) }
  ]
})
export class PhoneNumberComponent extends MaskModel implements OnInit {
  @Input() displayMask: boolean = true;
  @Input() label: string = 'Mobile/SMS';
  @Input() objectID: string = 'phone_' + this.objectId;
  @Input() maxlen: string = '30';

  constructor() {
    super();

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
}
