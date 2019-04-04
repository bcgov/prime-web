import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { EnrollmentStateService } from '../../services/enrollment-state.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent implements OnInit {
  fg: FormGroup;

  constructor(public stateSvc: EnrollmentStateService) {
    this.fg = this.stateSvc.contactForm;
  }

  ngOnInit() {
    this.fg.controls.ext.enable();
  }

  toggleExtension(fc: FormControl) {
    console.log(fc);
    return fc.parent.controls['sms'].value ? fc.enable() : fc.disable();
  }
}
