import { Component, OnInit, Input, forwardRef, ViewChildren, QueryList } from '@angular/core';
import { Registrant } from '../../models/registrant.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { PrimeConstants } from '@prime-core/models/prime-constants';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'prime-appl-account',
  templateUrl: './appl-account.component.html',
  styleUrls: ['./appl-account.component.scss'],
  /* Re-use the same ngForm that it's parent is using. The component will show
   * up in its parents `this.form`, and will auto-update `this.form.valid`
   */
  viewProviders: [{ provide: ControlContainer, useExisting: forwardRef(() => NgForm) }]
})
export class ApplAccountComponent implements OnInit {

  @Input() mohCredientials: boolean = true;
  @Input() userNameList: string[];
  @Input() isCanada: boolean = true;
  @Input() cache: any;
  @Input() data: Registrant;

  @ViewChildren('questionRef') questionList: QueryList<NgSelectModule>;

  public newPwdLabel: string = 'New Password';

  // Express did not work with the following symbols: []\-
  public pwdValidChars = '[a-zA-Z0-9?/\.<~#`!@#$%^&*()+=|:\"\',>{}]*';

  public confirmPwdLabel: string = 'Confirm Password';
  public confirmPassword: string;

  // Do not display default messages for min length & criteria(pattern)
  public confirmPwdMsg = {minLength: ' ', criteria: ' '};

  /** Maximum length as defined by database fields */
  public userIdMaxLen = PrimeConstants.USERID_MAXLEN;
  public emailMaxLen = PrimeConstants.EMAIL_MAXLEN;

  // TODO: Need to know valid characters for email.
  public emailCriteria = /^([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/;

  private form: NgForm;

  constructor( private cntrlContainer: ControlContainer ) {
  }

  ngOnInit() {
    this.form = (this.cntrlContainer as NgForm) ;
  }

  get formErrors() {
    return this.form.errors;
  }

  /**
   * Cached items
   */
  get pwdMinLen(): string {
    return (this.cache ? this.cache.pwdMinLen : null);
  }

  get userIdMinLen(): string {
    return (this.cache ? this.cache.userIDMinLen : null);
  }

  get secQuestionList(): string[] {
    return (this.cache ? this.cache.secQuestionList : [] );
  }

  setNewPassword( pswd: string ) {

    this.data.password = pswd;

    // Criteria
    if ( this.data.password && this.data.password.length >= Number( this.pwdMinLen ) ) {
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
        this.form.form.setErrors( {'failCriteria': true} );
        return;
      }
    }

    // Check for user ID or names in password
    if ( (this.data.userID &&
          this.data.password.includes( this.data.userID )  ||
          ( this.userNameList && this.userNameList.map( x => {
          if ( x.length > 1 ) { // ignore initials for names
            return this.data.password.includes( x );
          }
        }).filter( item => item === true ).length > 0 ) ) ) {
      this.form.form.setErrors( {'containsUserNames': true} );
    }
  }

  setConfirmPassword( pswd: string ) {
    this.confirmPassword = pswd;

    // User has entered both passwords, compare to see if they match
    if ( this.confirmPassword && this.data.password &&
       ( this.confirmPassword.length >= this.data.password.length) &&
      ( this.confirmPassword !== this.data.password ) ) {
      this.form.form.setErrors( {'noPasswordMatch': true} );
    }
  }
}
