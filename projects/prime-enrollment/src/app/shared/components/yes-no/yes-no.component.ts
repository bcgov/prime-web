import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'enroll-yes-no',
  templateUrl: './yes-no.component.html',
  styleUrls: ['./yes-no.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class YesNoComponent implements OnInit {
  @Input() fc: string;
  @Input() label: string;
  @Input() fg: FormGroup;
  random: number;
  constructor() {
    this.random = Math.random();
  }

  ngOnInit() {}
}
