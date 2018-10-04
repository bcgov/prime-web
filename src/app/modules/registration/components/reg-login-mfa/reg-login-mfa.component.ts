import {Component, OnInit, TemplateRef} from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {PrimeDataService} from '../../../../services/prime-data.service';
import {Person} from '../../../../models/person.model';
import { cloneDeep } from 'lodash';
import {Router} from '@angular/router';



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
  showVerifiedPIN = false;
  pin: string;
  mfaSms: boolean = false;
  mfaKey: boolean = false;
  mfaApp: boolean = false;
  maskedPhone: String;

  constructor(private primeDataService: PrimeDataService, private modalService: BsModalService, private router: Router){ }

  ngOnInit() {
    /*if (registrant.mfaOptionSMSPhone) {
      console.log(this.maskPhone('2504741234');
      this.maskedPhone = this.maskPhone(this.registrant.mfaOptionSMSPhone);
    }*/

  }

  get registrant(): Person {
    return this.primeDataService.user;
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

  verifyPIN() {
    this.showVerifyPIN = false;
    this.showVerifiedPIN = true;
  }

  verifiedPIN() {
    this.modalRef.hide();
    this.router.navigate(['/register/id-proofing']);
  }

  pinCheck() {
    let result = false;
    if (this.pin != null) {
      result = this.pin.length > 0;
    }
    return result;
  }

  mfaOptionCheck() {
    let result = false;
    if (this.mfaSms || this.mfaKey || this.mfaApp) {
      result = true;
    }
    return result;
  }

  maskPhone(phoneNumber: String) {
    const noBrackets = phoneNumber.replace(/\(/g , '').replace(/\)/g, '');
    return '**' + noBrackets.substr(2, noBrackets.length - 4) + '***';
  }
}
