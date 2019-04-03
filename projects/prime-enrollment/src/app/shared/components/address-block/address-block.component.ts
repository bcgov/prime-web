import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'enroll-address-block',
  templateUrl: './address-block.component.html',
  styleUrls: ['./address-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddressBlockComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
