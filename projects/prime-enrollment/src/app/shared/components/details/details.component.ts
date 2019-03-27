import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'enroll-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsComponent implements OnInit {
  @Input() fc: FormControl;
  constructor() {}

  ngOnInit() {}
}
