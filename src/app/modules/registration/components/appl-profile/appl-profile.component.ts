import { Component, OnInit, Input } from '@angular/core';
import { Address } from '../../../../shared-core/models/address.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { SimpleDate } from 'src/app/shared-core/interfaces/simple-date.interface';

/** Interface for names */
export interface NameObj {
  first: string;
  middle: string;
  last: string;
}

@Component({
  selector: 'prime-appl-profile',
  templateUrl: './appl-profile.component.html',
  styleUrls: ['./appl-profile.component.scss'],
     /* Re-use the same ngForm that it's parent is using. The component will show
   * up in its parents `this.form`, and will auto-update `this.form.valid`
   */
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class ApplProfileComponent implements OnInit {

  @Input() editIdentityInfo: boolean = true;



  public legalName: NameObj;
  public preferName: NameObj;
  public address: Address;
  public mailAddress: Address;


  public dob: SimpleDate = { month: null, day: null, year: null };

  constructor() { }

  ngOnInit() {
  }
}
