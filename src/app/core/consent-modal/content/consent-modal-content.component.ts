import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
  selector: 'modal-content',
  templateUrl: './consent-modal-content.html'
})
export class ConsentModalContent {
  @Output() onClose = new EventEmitter<boolean>();

  constructor(
    public bsModalRef: BsModalRef,
    private router: Router) { }

  continue() {
    this.bsModalRef.hide();
    this.onClose.emit(true);
  }
}
