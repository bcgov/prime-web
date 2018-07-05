import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'prime-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AlertComponent implements OnInit {
  @Input() type: string = 'warning';
  /** If the component is inlineBlock it will remove the bottom margin and make sure it's css display is inline-block. Useful when the alert should be on the same level as other components (e.g. form controls)*/
  @Input() inlineBlock: boolean = false;
  @Input() dismissable: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  onClose() {
    // console.log('on close');
  }

}
