import { Component, OnInit, forwardRef, Output, EventEmitter } from '@angular/core';
import { PrimeDataService } from '../../../../services/prime-data.service';
import { Registrant } from '../../models/registrant.model';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'prime-appl-security',
  templateUrl: './appl-security.component.html',
  styleUrls: ['./appl-security.component.scss'],
  viewProviders: [ { provide: ControlContainer, useExisting: forwardRef(() => NgForm ) } ]
})
export class ApplSecurityComponent implements OnInit {

  @Output() dataValid: EventEmitter<boolean> = new EventEmitter<boolean>();

  // MFA options
  public useMobile: boolean = false;
  public useSecurity: boolean = false;
  public useApp: boolean = false;

  public submitted: boolean = false;

  constructor( private primeDataService: PrimeDataService,
               private form: NgForm ) {
  }

  ngOnInit() {
    // Listen for submission of form
    this.form.ngSubmit.subscribe( val => this.validateInfo( val ) );
  }

  get registrant(): Registrant {
    return this.primeDataService.registrant;
  }


  isCanada(): boolean {
    return this.primeDataService.isCanada();
  }

  private validateInfo( val: any ) {

    let valid: boolean = false;

    // form has been submitted
    this.submitted = true;

    if ( this.form.valid ) {
      // Need to verify MFA options selected
      // Token has to have Canadian address otherwise not valid option
      valid  = (this.useApp || this.useMobile || this.useSecurity);
    }
    this.dataValid.emit( valid );
  }
}
