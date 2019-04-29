import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormBuilderService {
  constructor() // private fb: FormBuilder
  {
    // const this.fb.group()
  }

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
  }

  static selfDeclarationForm() {}

  static organizationForm() {}

  static reviewForm() {}
}
