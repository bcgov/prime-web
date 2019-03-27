import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'enroll-yes-no',
  templateUrl: './yes-no.component.html',
  styleUrls: ['./yes-no.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class YesNoComponent implements OnInit {
  @Input() fc: FormControl = new FormControl('');
  @Input() label: string;
  constructor() {}

  ngOnInit() {}
}
