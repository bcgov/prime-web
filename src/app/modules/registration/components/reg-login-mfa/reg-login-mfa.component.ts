import {Component, OnInit, TemplateRef} from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {PrimeDataService} from "../../../../services/prime-data.service";
import {Person} from "../../../../models/person.model";
import { cloneDeep } from 'lodash';


@Component({
  selector: 'prime-reg-login-mfa',
  templateUrl: './reg-login-mfa.component.html',
  styleUrls: ['./reg-login-mfa.component.scss']
})
export class RegLoginMfaComponent implements OnInit {

  modalRef: BsModalRef;
  private _user: Person;
  showOptions = true;
  showVerifyPIN = false;

  constructor(private primeDataService: PrimeDataService, private modalService: BsModalService){ }

  ngOnInit() {
    this._user = cloneDeep(this.primeDataService.user);
    this._user.phone = '(604) 2** **84';
  }

  get registrant(): Person {
    return this._user;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  sendPIN() {
    this.showOptions = false;
    this.showVerifyPIN = true;
  }

  chooseOption() {
    this.showOptions = true;
    this.showVerifyPIN = false;
  }

}
