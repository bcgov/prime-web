import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { EnrollmentStateService } from '../../services/enrollment-state.service';
import { FormGroup, FormControl } from '@angular/forms';
import { MaskModel, NUMBER, SPACE } from 'moh-common-lib/models';
import { BehaviorSubject, Observable } from 'rxjs';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent implements OnInit {
  fg$: Observable<FormGroup>;
  mask: (string | RegExp)[];
  placeholder: string;
  displayMask = true;
  contactOpts = ['Email', 'Phone', 'Both'];

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
    this.placeholder = '+1 (555) 555-5555';
  }

  ngOnInit() {
    this.stateSvc.contactForm$.value.valueChanges.subscribe(obs =>
      console.log(obs)
    );
  }

  onCountryChange(evt: any) {
    const num = evt.dialCode;
    const index = this.mask.indexOf('(');
    const code = ['+', ...evt.dialCode.split(''), ' '];
    const mask = this.mask.slice(index);
    const newArr = [...code, ...mask];
    this.mask = newArr;
    // this.mask.filter(itm => )
  }
}
