import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { Address } from 'moh-common-lib/models';

@Component({
  selector: 'enroll-address-block',
  templateUrl: './address-block.component.html',
  styleUrls: ['./address-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddressBlockComponent implements OnInit {
  @Input() address: Address;
  @Input() country: Subject<string>;
  @Input() province: Subject<string>;
  address$: Observable<any>;

  constructor() {}

  ngOnInit() {
    this.address$ = of(this.address);
  }
}
