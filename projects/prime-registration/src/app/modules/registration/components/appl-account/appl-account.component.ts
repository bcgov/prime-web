import { Component, OnInit, Input, forwardRef, ViewChildren, QueryList, OnDestroy, ChangeDetectorRef, OnChanges } from '@angular/core';
import { Registrant } from '../../models/registrant.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { RegistrationConstants } from '../../models/registration-constants.model';
import { BehaviorSubject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

export interface AccountErrorInterface {
  // We allow any other properties/values in the interface
  [key: string]: any;
}

@Component({
  selector: 'prime-appl-account',
  templateUrl: './appl-account.component.html',
  styleUrls: ['./appl-account.component.scss'],
  /* Re-use the same ngForm that it's parent is using. The component will show
   * up in its parents `this.form`, and will auto-update `this.form.valid`
   */
  viewProviders: [{ provide: ControlContainer, useExisting: forwardRef(() => NgForm) }]
})
export class ApplAccountComponent implements OnInit, OnChanges, OnDestroy {

  @Input() mohCredientials: boolean = true;
  @Input() userNameList: string[];
  @Input() isCanada: boolean = true;
  @Input() data: Registrant;
  @Input() secQuestionList: string[] = [];
  @Input() pwdMinLen: string;
  @Input() userIdMinLen: string;
  @Input() accountErrMsg: AccountErrorInterface;

  @ViewChildren('questionRef') questionList: QueryList<NgSelectModule>;

  public newPwdLabel: string = 'New Password';

  // Express did not work with the following symbols: []\-
  public pwdValidChars = '[a-zA-Z0-9?/\.<~#`!@#$%^&*()+=|:\"\',>{}]*';

  public confirmPwdLabel: string = 'Confirm Password';
  public confirmPassword: string;

  // Do not display default messages for min length & criteria(pattern)
  public confirmPwdMsg = {minLength: ' ', criteria: ' '};

  /** Maximum length as defined by database fields */
  public userIdMaxLen = RegistrationConstants.USERID_MAXLEN;
  public emailMaxLen = RegistrationConstants.EMAIL_MAXLEN;

  // TODO: Need to know valid characters for email.
  public emailCriteria = /^([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/;

  private form: NgForm;

  private errMsgChange = new BehaviorSubject(null );

  constructor( private cntrlContainer: ControlContainer,
               private cdref: ChangeDetectorRef ) {
  }

  ngOnInit() {
    this.form = (this.cntrlContainer as NgForm) ;

    // Setup listener for error message chanages
    this.errMsgChange.pipe(
      distinctUntilChanged(),
      debounceTime(200),
    ).subscribe(_ => {

      if ( !this.accountErrMsg ) {
        return;
      }

      // Since we use debounceTime(), updates can happen after Angular change
      // detection is done, so we have to manually invoke it.
      this.cdref.detectChanges();
    });
  }

  ngOnDestroy() {
    this.errMsgChange.unsubscribe();
  }

  ngOnChanges( changes ) {

    if ( changes.accountErrMsg  && this.form ) {

      this.form.controls['user_email'].setErrors(
        this.accountErrMsg.email ? { 'duplicateEmail': true } : null
      );

      this.form.controls['mobile_phone'].setErrors(
        this.accountErrMsg.mobile ? { 'duplicateMobile': true } : null
      );
    }
  }

  // Get the errors for field
  hasError( fieldName: string ) {
    return this.form.controls[fieldName] ? this.form.controls[fieldName].errors : null;
  }

  /**
   * MoH provider requires password and user ID
   */
  checkPswdCriteria( $event ) {

    /**
     * At least 3 of the following categories:
     *  a) Upper case characters (A-Z)
     *  b) Lower case characters (a-z)
     *  c) Numeral (0-9)
     *  d) Non-alphanumeric characters e.g. ?/.<~#`!@#$%^&*()+=|:"',>{}
     *  e) no userID and no names
     */
    const upperChars = RegExp( '^(?=.*?[A-Z]).*$' ).test(this.data.password) ? 1 : 0;
    const lowerChars = RegExp( '^(?=.*?[a-z]).*$' ).test(this.data.password) ? 1 : 0;
    const numerals = RegExp( '^(?=.*?[0-9]).*$' ).test(this.data.password) ? 1 : 0;
    const symbols = RegExp( '^(?=.*[?/\.<~#`!@#$%^&*()+=|:\"\',>{}]).*$' ).test(this.data.password) ? 1 : 0;

    console.log('Validate password (categories): ',
      {symbols: symbols, numerals: numerals, lowercase: lowerChars, uppercase: upperChars} );

    if ( upperChars + lowerChars + numerals + symbols < 3  ) {
      this.form.controls['new_password'].setErrors( {'failCriteria': true} );
      return;
    }


    // Check for user ID or names in password
    if ( (this.data.userAccountName &&
      this.data.password.includes( this.data.userAccountName )  ||
      ( this.userNameList && this.userNameList.map( x => {
      if ( x.length > 1 ) { // ignore initials for names
        return this.data.password.includes( x );
      }
    }).filter( item => item === true ).length > 0 ) ) ) {
      this.form.controls['new_password'].setErrors( {'containsUserNames': true} );
    }
  }

  checkConfirmPswd($event) {
    console.log( 'check confirm password' );
    // User has entered both passwords, compare to see if they match
    if ( this.confirmPassword && this.data.password &&
      ( this.confirmPassword.length >= this.data.password.length) &&
     ( this.confirmPassword !== this.data.password ) ) {
     this.form.controls['confirm_password'].setErrors( {'noPasswordMatch': true} );
   }
  }
}
