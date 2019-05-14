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
  fa$: BehaviorSubject<FormGroup[]> = this.stateSvc.organizationForm$;
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
    // this.fa$ = this.stateSvc.organizationForm$;
  }

  ngOnDestroy(): void {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalSvc.show(template, {
      backdrop: true,
      ignoreBackdropClick: true,
      class: 'modal-md',
      keyboard: false
    });
  }

  modalResult(evt: any) {
    // const arr = this.stateSvc.organizationForm$.value;
    console.log(evt);
    this.stateSvc.organizationForm$.next(evt);
    // this.fa$.next(this.stateSvc.organizationForm);
    this.results = true;
  }

  modalSubmit() {
    return this.modalRef.hide();
  }

  remove(i: number) {
    // const arr = [];
    const data = this.stateSvc.organizationForm$.value;
    // console.log(data);
    const val = [data[i]];
    const fa = this.stateSvc.removeFormGroup(this.fa$.value, i);
    if (fa.length === 0) this.results = false;
    // const arr = val.map(fg => {
    //   return {
    //     type: fg.value.type,
    //     name: fg.value.name,
    //     city: fg.value.city
    //   };
    // });
    const rem = Array.from(this.stateSvc._selectedOrgSet.values());
    rem.splice(i, 1);
    this.stateSvc.orgResultsForm(rem);
    this.stateSvc._selectedOrgSet = new Set(rem);
  }
}
