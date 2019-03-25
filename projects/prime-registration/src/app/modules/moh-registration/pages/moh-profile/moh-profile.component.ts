import { Component, OnInit, OnChanges } from '@angular/core';
import { AbstractForm } from 'moh-common-lib/models';
import { Router } from '@angular/router';
import { PrimeConstants } from '@prime-core/models/prime-constants';
import { ConfirmModalComponent } from '../../../registration/components/confirm-modal/confirm-modal.component';
import { BsModalService } from 'ngx-bootstrap';
import { RegistrationDataService } from '../../../../services/registration-data.service';
import { RegCacheService } from '../../../../services/reg-cache.service';
import { PrimePerson } from '@prime-core/models/prime-person.model';

@Component({
  selector: 'prime-moh-profile',
  templateUrl: './moh-profile.component.html',
  styleUrls: ['./moh-profile.component.scss']
})
export class MohProfileComponent extends AbstractForm implements OnInit {

  private _firstNameCtrl = 'first_name';
  private _requiredError = {required: true};

  constructor( protected router: Router,
               private modalService: BsModalService,
               private registrantService: RegistrationDataService,
               private regCacheService: RegCacheService ) {
    super( router );
  }

  ngOnInit() {
  }

  get registrant() {
    return  this.registrantService.registrant;
  }

  get cache() {
    return this.regCacheService;
  }

  continue() {

    console.log(`form`, {valid: this.form.valid, submitted: this.form.submitted}, this.form);

    if (this.form.invalid) {

      // Errors exist on form
      // Mark all fields as touched to display errors
      this.markAllInputsTouched();
      return;
    }

    this.loading = true;


    if ( !this.form.controls[this._firstNameCtrl].value ) {

      this.confirm( 'Did you forget your legal first name?' );
      return;
    }

    this.loading = false;

    if ( this.form.valid ) {
      this.navigateNext();
    }
  }

  private navigateNext() {
    // Navigate to next page
    this.navigate( PrimeConstants.MOH_REGISTRATION + '/' + PrimeConstants.DOC_UPLD_PG );
  }

  confirm( message: string ) {
    const modal = this.modalService.show(
              ConfirmModalComponent,
              {
                initialState: {message: message},
                class: 'modal-sm',
                ignoreBackdropClick: true,
                keyboard: false
              } );

    modal.content.result.subscribe( result => {
      this.setCntrolError( this._firstNameCtrl, (result ? this._requiredError : null) );

      this.loading = false;

      if ( this.form.valid ) {
        this.navigateNext();
      }
    });
  }

  private setCntrolError( ctrlName: string, error: any ) {
    this.form.controls[ctrlName].setErrors( error );
    this.form.controls[ctrlName].markAsTouched();
  }
}
