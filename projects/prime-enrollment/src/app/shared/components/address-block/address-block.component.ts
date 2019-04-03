import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';

@Component({
  selector: 'enroll-address-block',
  templateUrl: './address-block.component.html',
  styleUrls: ['./address-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddressBlockComponent implements OnInit {
  @Input() country: string = 'Canada';
  @Input() province: string = 'B.C.';
  @Input() address: string = '123 Fake St';
  @Input() city: string = 'Victoria';
  @Input() postalCode: string = 'V8G8S1';

  constructor() {}

  ngOnInit() {}
}
