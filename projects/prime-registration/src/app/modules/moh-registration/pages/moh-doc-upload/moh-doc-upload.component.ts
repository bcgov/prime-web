import { Component, OnInit } from '@angular/core';
import { AbstractForm } from 'moh-common-lib/models';
import { Router } from '@angular/router';
import { PrimeConstants } from '@prime-core/models/prime-constants';
import { DocumentType, Document } from '@prime-core/models/documents.interface';
import { RegCacheService } from '../../../../services/reg-cache.service';
import { RegistrationDataService } from '../../../../services/registration-data.service';

@Component({
  selector: 'app-moh-doc-upload',
  templateUrl: './moh-doc-upload.component.html',
  styleUrls: ['./moh-doc-upload.component.scss']
})
export class MohDocUploadComponent extends AbstractForm implements OnInit {

  public docTypesList: DocumentType[];
  public documents: Document[];

  constructor( protected router: Router,
               private cacheService: RegCacheService,
               private dataService: RegistrationDataService  ) {
    super(router);
  }

  ngOnInit() {
    this.documents = this.dataService.documents; // this is basically an alias, since arrays are pass-by-reference,
    this.docTypesList = this.cacheService.documentTypes;
  }

  get registrant() {
    return this.dataService.registrant;
  }

  continue() {
    console.log('MoH form', {valid: this.form.valid, submitted: this.form.submitted}, this.form);

    this.registrant.documents = this.documents;
    
    if (this.form.valid) {
      // Navigate to next page
      this.navigate( PrimeConstants.MOH_REGISTRATION + '/' + PrimeConstants.ACCOUNT_PG );

    } else {
      // Errors exist on form
      // Mark all fields as touched to display errors
      this.markAllInputsTouched();
    }
  }
}
