import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'enroll-phone-input',
  templateUrl: './phone-input.component.html',
  styleUrls: ['./phone-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhoneInputComponent implements OnInit {
  @Input() fc: FormControl;
  @Input() fg: FormGroup;
  @Input() label: string;
  @Input() placeholder: string;

  constructor() {}

  ngOnInit() {}
}
