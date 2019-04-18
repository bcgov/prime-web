import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
  TemplateRef
} from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { EnrollmentStateService } from '../../services/enrollment-state.service';
import { SearchOrganizationModalComponent } from '../search-organization-modal/search-organization-modal.component';
import { EnrollmentDataService } from '../../services/enrollment-data.service';
import { Observable, of, BehaviorSubject, Subscription } from 'rxjs';
import { INgxMyDpOptions } from 'ngx-mydatepicker';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
const headers = ['Organization Name', 'Type', 'City'];
@Component({
  selector: 'app-pharmanet-access',
  templateUrl: './pharmanet-access.component.html',
  styleUrls: ['./pharmanet-access.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PharmanetAccessComponent implements OnInit, OnDestroy {
  fa$: BehaviorSubject<FormGroup[]> = new BehaviorSubject(null);
  results = false;
  modalRef: BsModalRef;
  dateOptions: INgxMyDpOptions = {
    // other options...
    dateFormat: 'dd.mm.yyyy',
    openSelectorTopOfInput: true,
    showSelectorArrow: false
  };
  // sub: Subscription;

  constructor(
    private stateSvc: EnrollmentStateService,
    private modalSvc: BsModalService
  ) {}

  ngOnInit() {
    if (!!this.stateSvc.organizationForm$.value) this.results = true;
    this.fa$ = this.stateSvc.organizationForm$;
  }

  ngOnDestroy(): void {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalSvc.show(template, {
      backdrop: true,
      ignoreBackdropClick: false,
      class: 'modal-md'
    });
  }

  modalResult(evt: any) {
    const arr = this.stateSvc.organizationForm$.value;
    this.stateSvc.organizationForm$.next(evt);
    // this.fa$.next(this.stateSvc.organizationForm);
    this.results = true;
  }

  modalSubmit() {
    return this.modalRef.hide();
  }

  remove(i: number) {
    const fa = this.stateSvc.removeFormGroup(this.fa$.value, i);
    // this.stateSvc.organizationForm$fa;
  }
}
