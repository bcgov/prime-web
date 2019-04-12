import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { EnrollmentStateService } from '../../services/enrollment-state.service';
import { FormGroup, FormControl } from '@angular/forms';
import { MaskModel, NUMBER, SPACE } from 'moh-common-lib/models';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent implements OnInit {
  fg: FormGroup;
  mask: (string | RegExp)[];
  placeholder: string;
  displayMask = true;

  constructor(public stateSvc: EnrollmentStateService) {
    this.fg = this.stateSvc.contactForm;
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

  ngOnInit() {
    this.fg.valueChanges.subscribe(obs => console.log(obs));
    // this.fg.controls.ext.enable();
    // this.fg.controls.preferredContact.valueChanges.subscribe(obs => {
    //   this.fg.controls.sms.updateValueAndValidity();
    // });
  }

  // toggleExtension(fc: FormControl, fg: FormGroup) {
  //   if (!fc.parent.controls['sms']) {
  //     this.fg.controls.preferredContact.setValue('email');
  //   }
  //   this.fg.controls.preferredContact.updateValueAndValidity({
  //     emitEvent: true
  //   });
  //   return fc.parent.controls['sms'].value ? fc.enable() : fc.disable();
  // }
}
