import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'enroll-mailing-address-block',
  templateUrl: './mailing-address-block.component.html',
  styleUrls: ['./mailing-address-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MailingAddressBlockComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
