import { Component, OnInit, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import { EnrollmentRowItem } from './enrollment-row.interface';

const TIMING = "250ms";
@Component({
  selector: 'prime-enrollment-row',
  templateUrl: './enrollment-row.component.html',
  styleUrls: ['./enrollment-row.component.scss'],
  animations: [
    trigger('openState', [
      state('closed', style({
        overflow: 'hidden',
        height: '0',
      })),
      state('opened', style({
        overflow: 'hidden',
        height: '*',
      })),
      transition('closed => opened', animate(`${TIMING} ease-in`)),
      transition('opened => closed', animate(`${TIMING} ease-out`))
    ]),
    trigger('openStateChild', [
      state('closed', style({
        transform: 'translateY(-100%)',
      })),
      state('opened', style({
        transform: 'translateY(0px)',
      })),
      transition('closed => opened', animate(`${TIMING} ease-in`)),
      transition('opened => closed', animate(`${TIMING} ease-out`))
    ]),

    trigger('loadInOut', [

      transition('void => *', [
        animate(TIMING, keyframes([
          style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
          style({opacity: 1, transform: 'translateX(15px)',  offset: 0.3}),
          style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
        ]))
      ]),
      transition('* => void', [
        animate(TIMING, keyframes([
          style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
          style({opacity: 1, transform: 'translateX(-15px)', offset: 0.5}),
          style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
        ]))
      ])

    ])
  ]
})
export class EnrollmentRowComponent implements OnInit {

  @Input() rowData: EnrollmentRowItem;
  @Output() onRowOpened = new EventEmitter<any>();
  public openState: string = 'closed';

  constructor() { }

  ngOnInit() {
  }

  @HostBinding('@loadInOut') true;

  toggleRow() {
    this.openState = this.openState === 'opened' ? 'closed' : 'opened';
    if (this.openState === 'opened'){
      this.onRowOpened.emit(this);
    }
  }

  closeRow() {
    this.openState = 'closed';
  }

}
