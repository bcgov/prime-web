import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';

@Component({
  selector: 'enroll-professional-information-block',
  templateUrl: './professional-information-block.component.html',
  styleUrls: ['./professional-information-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfessionalInformationBlockComponent implements OnInit {
  @Input() license: string = 'P1-2389';
  @Input() college: string = 'BC Pharmacy';
  @Input() class: string = 'Full Pharmacist';
  @Input() renewal: string = '01/12/2019';

  constructor() {}

  ngOnInit() {}
}
