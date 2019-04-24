import { Component, OnInit } from '@angular/core';
import { AbstractForm } from 'moh-common-lib/models';
import { Router } from '@angular/router';
import { Document } from 'prime-core';
import { RegCacheService } from '@prime-registration/services/reg-cache.service';
import { RegistrationDataService } from '@prime-registration/services/registration-data.service';
import { RegistrationConstants } from '../../../registration/models/registration-constants.model';

@Component({
  selector: 'app-moh-doc-upload',
  templateUrl: './moh-doc-upload.component.html',
  styleUrls: ['./moh-doc-upload.component.scss']
})
export class MohDocUploadComponent extends AbstractForm implements OnInit {

  public documents: Document[];

  constructor( protected router: Router,
               private cacheService: RegCacheService,
               private dataService: RegistrationDataService  ) {
    super(router);
  }

  ngOnInit() {
    this.documents = this.dataService.documents; // this is basically an alias, since arrays are pass-by-reference,
  }

  get registrant() {
    return this.dataService.registrant;
  }

  get cache() {
    return this.cacheService;
  }

  continue() {
    console.log('MoH form', {valid: this.form.valid, submitted: this.form.submitted}, this.form);

    this.registrant.documents = this.documents;

    if (this.form.valid) {
      // Navigate to next page
      this.navigate( RegistrationConstants.MOH_REGISTRATION + '/' + RegistrationConstants.ACCOUNT_PG );

    } else {
      // Errors exist on form
      // Mark all fields as touched to display errors
      this.markAllInputsTouched();
    }
  }
}
