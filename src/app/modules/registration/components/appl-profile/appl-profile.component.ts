import { Component, OnInit, Input } from '@angular/core';
import { Address } from '../../../../shared-core/models/address.model';

/** Interface for names */
export interface NameObj {
  first: string;
  middle: string;
  last: string;
}

@Component({
  selector: 'prime-appl-profile',
  templateUrl: './appl-profile.component.html',
  styleUrls: ['./appl-profile.component.scss']
})
export class ApplProfileComponent implements OnInit {

  @Input() editIdentityInfo: boolean = true;
  @Input() legalName: NameObj;
  @Input() preferName: NameObj;
  @Input() address: Address;
  @Input() mailAddress: Address;

  constructor() { }

  ngOnInit() {
  }
}
