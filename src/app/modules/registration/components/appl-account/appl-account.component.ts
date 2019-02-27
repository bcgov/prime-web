import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { PrimeDataService } from '../../../../services/prime-data.service';
import { Registrant, SecurityQuestionsAnswers } from '../../models/registrant.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { CacheService } from '../../../../services/cache.service';
import { PrimeConstants } from '../../models/prime-constants';

@Component({
  selector: 'prime-appl-account',
  templateUrl: './appl-account.component.html',
  styleUrls: ['./appl-account.component.scss'],
  /* Re-use the same ngForm that it's parent is using. The component will show
   * up in its parents `this.form`, and will auto-update `this.form.valid`
   */
  viewProviders: [ { provide: ControlContainer, useExisting: forwardRef(() => NgForm ) } ]
})
export class ApplAccountComponent implements OnInit {

  @Input() mohCredientials: boolean = true;

  /**
   * At least 3 of the following categories:
   *  a) Upper case characters (A-Z)
   *  b) Lower case characters (a-z)
   *  c) Numeral (0-9)
   *  d) Non-alphanumeric characters e.g. []?/\.<~#`!@#$%^&*()-+=|:"',>{}
   *
   * TODO: Figure out RegExp for achieving this using pattern, else need validation
   *       to be added to password component
   */
  public passwordCriteria = RegExp(
    '^((?=.*[^a-zA-Z\s])(?=.*[a-z])(?=.*[A-Z])|(?=.*[^a-zA-Z0-9\s])(?=.*\d)(?=.*[a-zA-Z])).*$'
    );

  public newPwdLabel: string = 'New Password';
  public newPwdErrorMsgs = {
    required: this.newPwdLabel + ' is required',
    minLength: this.newPwdLabel + ' must be at least ' + this.pwdMinLen + ' characters in length.',
    criteria: this.newPwdLabel + ' must contain characters from at least 3 of the following: ' +
              'Upper case characters (A-Z), Lower case characters (a-z), Numeral (0-9), and ' +
              'Non-alphanumeric symbols.'
  };

  public confirmPwdLabel: string = 'Confirm Password';
  public confirmPwdErrorMsgs = {
    required: this.confirmPwdLabel + ' is required',
    criteria: this.confirmPwdLabel + ' does not match.'
  };

  /** Maximum length as defined by database fields */
  public userIdMaxLen = PrimeConstants.USERID_MAXLEN;
  public emailMaxLen = PrimeConstants.EMAIL_MAXLEN;

  constructor( private primeDataService: PrimeDataService,
               private cache: CacheService ) {

    // initialize question/answer array
    for ( let i = 0; i < this.numSecQuestions; i++ ) {
      this.registrant.secQuestionsAnswer.push( {question: null, answer: null} );
    }
  }

  ngOnInit() {
  }

  get registrant(): Registrant {
    return this.primeDataService.registrant;
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
}
