/**
 * NOTE:  We may want to use this module for applicant, modify to be prime-breadcrumb-container
 */


import { Component, OnInit } from '@angular/core';
import {pageRoutes} from '../../registration-page-routing.module';
import {WizardProgressItem} from '../../../core/components/wizard-progress-bar/wizard-progress-bar.component';
import {Router} from '@angular/router';
import {environment} from '../../../../../environments/environment';
import {PrimeDataService} from "../../../../services/prime-data.service";
import {Person} from "../../../../models/person.model";

@Component({
  selector: 'prime-registration-container',
  templateUrl: './registration-container.component.html',
  styleUrls: ['./registration-container.component.scss']
})
export class RegistrationContainerComponent implements OnInit {

  public allowLinks: boolean = !environment.production ? true : false;

  constructor( public router: Router, private primeDataService: PrimeDataService ) { }

  ngOnInit() {
    this.progressSteps = pageRoutes.map(x => {
      return {
        title: this.convertRouteToTitle(x.path),
        route: x.path,
      };
    });

    // Disable the document upload page if user has used BCSC
    if (this.registrant.pairingCode){
      this.progressSteps = this.progressSteps.filter(step => {
        return step.route !== 'document-upload';
      })
    }
  }

  get registrant(): Person {
    return this.primeDataService.user;
  }

  progressSteps: WizardProgressItem[];

  /**
   * Converts a lower case string of a route in a user readable title.  e.g.
   * "document-upload" -> "Document Upload"
   *
   * @param {string} routePath
   */
  convertRouteToTitle(routePath: string): string{
    return routePath.split('-').map(x => x[0].toUpperCase() + x.slice(1)).join(' ');
  }

  canContinue() {
    let retVal: boolean = false;

    //Profile Page
    if (this.router.url === '/register/profile') {
      if (this.registrant.lastName && this.registrant.firstName && this.registrant.dateOfBirth &&
          this.registrant.address && this.registrant.address.city && this.registrant.address.province &&
          this.registrant.address.postal && this.registrant.address.country && this.registrant.phone &&
          this.registrant.email) {
          retVal = true;
      }
    }

    //Document Upload Page
    if (this.router.url === '/register/document-upload') {
      // User must select at least one document type and provide expiry date
      if (this.registrant.hasDriversLicense && this.registrant.driverLicenseExpiry){
        return true;
      }

      if (this.registrant.hasPassport && this.registrant.passportExpiry){
        return true;
      }
    }

    //Document Security Page
    if (this.router.url === '/register/security') {

      if (this.registrant.pairingCode && this.registrant.securityAnswer1 && this.registrant.securityAnswer2 && this.registrant.securityAnswer3){
        return true;
      }

      //User must select at least one mfa option
      if (this.registrant.primeUserId && this.registrant.securityAnswer1 && this.registrant.securityAnswer2 &&
          this.registrant.securityAnswer3 &&
         (this.registrant.mfaOptionSMS || this.registrant.mfaOptionKey || this.registrant.mfaOptionApp)
      ) {
        //If the user selects the phone mfa option, they must have a phone number
        if (this.registrant.mfaOptionSMS) {
          if (this.registrant.mfaOptionSMSPhone) {
            retVal = true;
          }
        } else {
          retVal = true;
        }
      }
    }
    return retVal;
  }

  /**
   * Navigates through the pages
   */
  continue() {
    // Find current index of URL
    let idx = this.progressSteps.findIndex( x => {
      return this.router.url.endsWith( x.route );
    });

    // Case were route is blank
    if ( -1 === idx ) {
      idx = 0;
    }

    // Navigate next page
    if (this.progressSteps.length > idx + 1) {
      // Get URL prefix
      const idxEndPrefix = this.router.url.lastIndexOf( '/' );
      const prefix = (idxEndPrefix === 0 ) ? this.router.url : this.router.url.slice( 0 , idxEndPrefix );

      this.router.navigate( [prefix + '/' + this.progressSteps[idx + 1].route ] );
    }
  }

  back() {
    let url;

    // Find current index of URL
    let idx = this.progressSteps.findIndex( x => {
      return this.router.url.endsWith( x.route ); } );

    // Case were route is blank
    if ( -1 === idx ) {
      idx = 0;
    }

    // Navigate previous page
      // Get URL prefix
      const idxEndPrefix = this.router.url.lastIndexOf( '/' );
      const prefix = (idxEndPrefix === 0 ) ? this.router.url : this.router.url.slice( 0 , idxEndPrefix );

      this.router.navigate( [prefix + '/' + this.progressSteps[idx - 1].route ] );
  }

  submit() {
    let url = '/register/registration-complete';

    if (this.registrant.pairingCode){
      url = 'register/id-proofing';
    }

    this.router.navigate([url]);
  }
}
