import { Component, OnInit, forwardRef, Output, EventEmitter, Input } from '@angular/core';
import { RegistrationDataService } from '@prime-registration/services/registration-data.service';
import { Registrant } from '../../models/registrant.model';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'prime-appl-security',
  templateUrl: './appl-security.component.html',
  styleUrls: ['./appl-security.component.scss'],
  viewProviders: [ { provide: ControlContainer, useExisting: forwardRef(() => NgForm ) } ]
})
export class ApplSecurityComponent implements OnInit {

  @Input() isCanada: boolean = true;
  @Input() isSubmitted: boolean = false;
  @Input() data: Registrant;
  @Output() dataChange: EventEmitter<Registrant> = new EventEmitter<Registrant>();

  constructor() {}

  ngOnInit() {}

  set mfaSMSphone( phone: string ) {
    this.data.mfaSMSphone = phone;
    this.dataChange.emit( this.data );
  }

  get mfaSMSphone() {
    return this.data.mfaSMSphone;
  }

  hasMfaMethod(): boolean {
    return this.data.hasMfaMethod();
  }

  setUseMfaApp( useMethod: boolean ) {
    this.data.useMfaApp = useMethod;
    this.dataChange.emit( this.data );
  }

  setUseMfaSMS( useMethod: boolean ) {
    this.data.useMfaSMS = useMethod;
    this.dataChange.emit( this.data );
  }

  setUseMfaSecurityKey( useMethod: boolean ) {
    this.data.useMfaSecurityKey = useMethod;
    this.dataChange.emit( this.data );
  }
}
