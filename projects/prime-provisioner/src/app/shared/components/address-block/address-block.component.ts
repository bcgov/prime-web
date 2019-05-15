import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { Address } from 'moh-common-lib/models';

@Component({
  selector: 'prov-address-block',
  template: `
    <ng-container *ngIf="address$ | async as add">
      <label class="font-weight-lighter">Country</label>
      <span class="font-weight-bolder text-capitalize ">{{
        country | async | lowercase
      }}</span>
      <label class="font-weight-lighter">Province</label>
      <span class="font-weight-bolder">{{ province | async }}</span>
      <label class="font-weight-lighter">Street Address</label>
      <span class="font-weight-bolder">{{ add.street }}</span>
      <label class="font-weight-lighter">City</label>
      <span class="font-weight-bolder">{{ add.city }}</span>
      <label class="font-weight-lighter">Postal Code</label>
      <span class="font-weight-bolder">{{ add.postal }}</span>
    </ng-container>
  `,
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
