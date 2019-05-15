import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { EnrollmentStateService } from '../../services/enrollment-state.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MaskModel, NUMBER, SPACE } from 'moh-common-lib/models';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ContactOpts } from '@prime-enrollment/core/interfaces';
import { phoneNumberValidator } from '../../models/validators';
import { debounceTime, takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent implements OnInit {
  fg$: Observable<FormGroup>;
  mask: (string | RegExp)[];
  mask2: (string | RegExp)[];
  placeholder: string;
  displayMask = true;
  contactOpts = ['Email', 'Phone', 'Both'];
  resetSub$ = new Subject<boolean>();

  constructor(public stateSvc: EnrollmentStateService) {
    this.fg$ = this.stateSvc.contactForm;
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
    [...this.mask2] = [...this.mask];
    this.placeholder = '+1 (555) 555-5555';
  }

  ngOnInit() {
    // TODO: add subscription for this.

    this.stateSvc.contactForm.pipe(debounceTime(50)).subscribe(obs => {
      console.log('run');
      obs.controls.voicePhone.valueChanges
        .pipe(
          debounceTime(50),
          takeUntil(this.resetSub$)
        )
        .subscribe(vpObs => {
          const fg = this.stateSvc.contactForm$.value;
          const fc = fg.controls.voicePhone as FormControl;
          if (fc.value.length < 1) {
            fc.clearValidators();
            fc.updateValueAndValidity();
            fg.updateValueAndValidity({ emitEvent: true });
            this.resetSub$.next(true);
            return setTimeout(() => this.stateSvc.contactForm$.next(fg), 50);
          } else {
            fc.setValidators([Validators.required]);
            fg.updateValueAndValidity({ emitEvent: true });
            return this.stateSvc.contactForm$.next(fg);
          }
        });
    });
  }
  vpBlur(evt) {
    console.log(evt);
  }
  onCountryChange(evt: any, maskNum: number) {
    const num = evt.dialCode;
    const index = this.mask.indexOf('(');
    const code = ['+', ...evt.dialCode.split(''), ' '];
    const mask = this.mask.slice(index);
    const newArr = [...code, ...mask];
    maskNum === 1 ? (this.mask = newArr) : (this.mask2 = newArr);
  }

  toggleInputFields(fg: FormGroup, val: ContactOpts) {
    switch (val) {
      case 'phone': {
        fg.controls.phone.setValidators(Validators.required);
        fg.controls.phone.enable();
        fg.controls.email.clearValidators();
        // fg.controls.email.setValue(null);
        fg.updateValueAndValidity({ emitEvent: true });
        fg.controls.email.disable();
        this.stateSvc.contactForm$.next(fg);

        break;
      }
      case 'email': {
        fg.controls.email.setValidators(Validators.required);
        fg.controls.email.enable();
        fg.controls.phone.clearValidators();
        fg.controls.phone.disable();
        // fg.controls.phone.setValue(null);
        fg.updateValueAndValidity({ emitEvent: true });
        this.stateSvc.contactForm$.next(fg);

        break;
      }
      case 'both': {
        fg.controls.email.setValidators(Validators.required);
        fg.controls.phone.setValidators(Validators.required);
        fg.controls.email.enable();
        fg.controls.phone.enable();
        fg.updateValueAndValidity({ emitEvent: true });
        this.stateSvc.contactForm$.next(fg);
        break;
      }
    }
  }
  // TODO: add validator or remove validator depending on state
}
