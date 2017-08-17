import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { BaseComponent } from '../../core/base-component/base-component.component'
import { ConsentModalContent } from './content/consent-modal-content.component';

@Component({
  selector: 'app-consent-modal',
  templateUrl: './consent-modal.component.html',
  styleUrls: ['./consent-modal.component.scss']
})
export class ConsentModalComponent extends BaseComponent implements OnInit {
  bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) {
    super();
  }

  ngOnInit() {
    this.openModal();
  }

  openModal() {
    console.log('openModal called');
    this.bsModalRef = this.modalService.show(ConsentModalContent);
  }

}
