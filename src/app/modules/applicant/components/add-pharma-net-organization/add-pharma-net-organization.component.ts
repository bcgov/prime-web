import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'prime-add-pharma-net-organization',
  templateUrl: './add-pharma-net-organization.component.html',
  styleUrls: ['./add-pharma-net-organization.component.scss']
})
export class AddPharmaNetOrganizationComponent implements OnInit {

  public modalRef: BsModalRef;
  public searchQuery: {orgName?: string, orgCity?: string, orgType?: string} = {};

  public orgTypes = ['todo', 'test', 'get list'];

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  openModal(event){
    this.modalService.show(event);
  }

}
