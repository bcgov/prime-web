import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';

@Component({
  selector: 'enroll-pharmanet-block',
  templateUrl: './pharmanet-block.component.html',
  styleUrls: ['./pharmanet-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PharmanetBlockComponent implements OnInit {
  @Input() name: string = 'V.I Health Authority';
  @Input() type: string = 'Authority';
  @Input() city: string = '-';
  @Input() startDate: string = '01/12/1989';
  @Input() endDate: string = '01/12/2019';

  constructor() {}

  ngOnInit() {}
}
