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
    if (!!this.stateSvc.organizationForm) this.results = true;
    this.fa$.next(this.stateSvc.organizationForm);
  }

  ngOnDestroy(): void {
    // if (this.sub) this.sub.unsubscribe();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalSvc.show(template, {
      backdrop: true,
      ignoreBackdropClick: false,
      class: 'modal-md'
    });
    // const dialog = this.dialog;
    // const ref = dialog.open(SearchOrganizationModalComponent, {
    //   panelClass: 'test',
    //   disableClose: true,
    //   position: { top: '25px' },
    //   minWidth: '50vw'
    // });
    // this.sub = ref.afterClosed().subscribe(obs => {
    //   if (!obs) return;
    //   const arr = this.stateSvc.organizationForm;
    //   this.stateSvc.organizationForm = obs;
    //   this.fa$.next(this.stateSvc.organizationForm);
    //   this.results = true;
    // });
  }

  modalResult(evt: any) {
    const arr = this.stateSvc.organizationForm;
    this.stateSvc.organizationForm = evt;
    this.fa$.next(this.stateSvc.organizationForm);
    this.results = true;
    // this.stateSvc.organizaitonForm
  }

  modalSubmit() {
    return this.modalRef.hide();
  }

  remove(i: number) {
    const fa = this.stateSvc.removeFormGroup(this.fa$.value, i);
    this.stateSvc.organizationForm = fa;
  }
}
