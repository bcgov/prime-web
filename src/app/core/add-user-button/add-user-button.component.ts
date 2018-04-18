import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'prime-add-user-button',
  templateUrl: './add-user-button.component.html',
  styleUrls: ['./add-user-button.component.scss']
})
export class AddUserButtonComponent implements OnInit {
  modalRef: BsModalRef;
  progress: any = []
  // Can be changed at runtime depending on user behaviour
  maxProgressSteps: number = 3;
  currentProgressStep: number = 0;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  incrementProgress(){
    if (this.currentProgressStep >= this.maxProgressSteps) return;
    this.currentProgressStep++;
  }


}
