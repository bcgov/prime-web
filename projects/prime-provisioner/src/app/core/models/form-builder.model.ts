import { Registrant } from '../../../../../prime-registration/src/app/modules/registration/models/registrant.model';
import { FormBuilder, Validators } from '@angular/forms';

export abstract class EnrolmentFormBuilder {
  static profileForm() {
    return new Registrant();
  }

  static contactForm(fb: FormBuilder) {
    const fg = fb.group({
      preferredContact: [null, Validators.required],
      email: [null],
      phone: [null],
      voicePhone: [null],
      ext: [null]
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
    return fg;
  }

  static organizationForm(fb: FormBuilder) {
    const fg = fb.group({});
  }
}
