import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'prime-appl-confirmation',
  templateUrl: './appl-confirmation.component.html',
  styleUrls: ['./appl-confirmation.component.scss']
})
export class ApplConfirmationComponent implements OnInit {

  @Input() displayIcon: string = '0';
  @Input() hasQrCode: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
