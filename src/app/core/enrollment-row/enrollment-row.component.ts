import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
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
