import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'prime-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit {

  @Input() message: string;


  @Output() result: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor( private bsModalRef: BsModalRef ) { }

  ngOnInit() {
  }

  confirm() {
    console.log( 'Confirm' );

    this.bsModalRef.hide();
    this.result.emit(true);
  }

  decline() {
    console.log( 'Declined' );

    this.bsModalRef.hide();
    this.result.emit(false);
  }
}
