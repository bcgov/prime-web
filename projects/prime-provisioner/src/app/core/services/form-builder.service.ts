import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormBuilderService {
  constructor() {}

  static profileForm(fb: FormBuilder) {
    const fg = fb.group({});
  }

  static contactForm(fb: FormBuilder) {
    const fg = fb.group({
      preferredContact: [null, Validators.required],
      email: [null],
      phone: [null],
      voicePhone: [null]
    });
    return fg;
  }

  static selfDeclarationForm(fb: FormBuilder) {
    const fg = fb.group({
      conviction: [null, Validators.required],
      convictionDesc: [null],
      regSuspension: [null, Validators.required],
      regSuspensionDesc: [null],
      tAndC: [null, Validators.required],
      tAndCDesc: [null],
      pharmaSuspension: [null, Validators.required],
      pharmaSuspensionDesc: [null]
    });
  }

  static organizationForm(fb: FormBuilder) {
    const fg = fb.group({});
  }
}
