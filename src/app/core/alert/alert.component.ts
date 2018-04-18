import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'prime-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  @Input() type: string = "warning";
  public dismissable: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  onClose() {
    // console.log('on close');
  }

}
