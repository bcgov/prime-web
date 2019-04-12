import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';
import { Observable, of } from 'rxjs';
import { Address } from 'moh-common-lib/models';

@Component({
  selector: 'enroll-address-block',
  templateUrl: './address-block.component.html',
  styleUrls: ['./address-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddressBlockComponent implements OnInit {
  @Input() address: Address;
  address$: Observable<any>;

  constructor() {}

  ngOnInit() {
    console.log(this.address);
    this.address$ = of(this.address);
  }
}
