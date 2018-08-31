import {Component, OnInit, TemplateRef, ElementRef, ViewChild} from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {Router} from '@angular/router';

@Component({
  selector: 'prime-collection-notice',
  templateUrl: './collection-notice.component.html',
  styleUrls: ['./collection-notice.component.scss']
})
export class CollectionNoticeComponent implements OnInit {
  // Reference firstNameInput variable inside Component
  @ViewChild('template') templateRef: ElementRef;
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService, private router: Router) { }

  ngOnInit() {
    this.openModal(this.templateRef);
  }

  openModal(template: any) {
    this.modalRef = this.modalService.show(template);
  }

  disagree() {
    this.modalRef.hide();
    this.router.navigate(['/login']);
  }

}
