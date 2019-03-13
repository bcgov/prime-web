import { Component, OnInit, Input, forwardRef, Output, EventEmitter, ViewChildren, QueryList } from '@angular/core';
import { PrimeDataService } from '../../../../services/prime-data.service';
import { Registrant, SecurityQuestionsAnswers } from '../../models/registrant.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { CacheService } from '../../../../services/cache.service';
import { PrimeConstants } from '../../../../models/prime-constants';
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
  @Output() dataValid: EventEmitter<boolean> = new EventEmitter<boolean>();

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

  constructor( private primeDataService: PrimeDataService,
               private cache: CacheService,
               private form: NgForm ) {
  }

  ngOnInit() {

    if (!this.registrant.secQuestionsAnswer.length) {
      // initialize question/answer array
      for (let i = 0; i < this.numSecQuestions; i++) {
        this.registrant.secQuestionsAnswer.push({ question: null, answer: null });
      }
    }

    // Listen form submission
    this.form.ngSubmit.subscribe(val => this.validateAccountInfo(val));
  }

  private validateAccountInfo(val: any) {

    if ( this.mohCredientials && this.registrant.password ) {
      this.verifyPassword();

      // User has entered both passwords, compare to see if they match
      if ( this.confirmPassword && ( this.confirmPassword !== this.registrant.password ) ) {
        this.form.form.setErrors( {'noPasswordMatch': true} );
      }
    }

    this.dataValid.emit(this.form.valid);
  }

  get registrant(): Registrant {
    return this.primeDataService.registrant;
  }

  get formErrors() {
    return this.form.errors;
  }

  isCanada(): boolean {
    return this.primeDataService.isCanada();
  }

  /**
   * Cached items
   */
  get pwdMinLen(): string {
    return this.cache.pwdMinLen;
  }

  get userIdMinLen(): string {
    return this.cache.userIDMinLen;
  }

  get numSecQuestions(): number {
    return this.cache.numSecQuestion;
  }

  get secQuestionList(): string[] {
    return this.cache.secQuestionList;
  }

  // private method
  private verifyPassword() {

    /**
     * At least 3 of the following categories:
     *  a) Upper case characters (A-Z)
     *  b) Lower case characters (a-z)
     *  c) Numeral (0-9)
     *  d) Non-alphanumeric characters e.g. ?/.<~#`!@#$%^&*()+=|:"',>{}
     *  e) no userID and no names
     */
    const upperChars = RegExp( '^(?=.*?[A-Z]).*$' ).test(this.registrant.password) ? 1 : 0;
    const lowerChars = RegExp( '^(?=.*?[a-z]).*$' ).test(this.registrant.password) ? 1 : 0;
    const numerals = RegExp( '^(?=.*?[0-9]).*$' ).test(this.registrant.password) ? 1 : 0;
    const symbols = RegExp( '^(?=.*[?/\.<~#`!@#$%^&*()+=|:\"\',>{}]).*$' ).test(this.registrant.password) ? 1 : 0;

    console.log('Validate password (categories): ',
      {symbols: symbols, numerals: numerals, lowercase: lowerChars, uppercase: upperChars} );

    if ( upperChars + lowerChars + numerals + symbols < 3 ) {
      this.form.form.setErrors( {'failCriteria': true} );
      return;
    }

    // Check for user ID or names in password
    if ( (this.registrant.userID &&
          this.registrant.password.includes( this.registrant.userID )  ||
        this.primeDataService.userNameList.map( x => {
          if ( x.length > 1 ) { // ignore initials for names
            return this.registrant.password.includes( x );
          }
        }).filter( item => item === true ).length > 0 ) ) {
      this.form.form.setErrors( {'containsUserNames': true} );
    }
  }
}
