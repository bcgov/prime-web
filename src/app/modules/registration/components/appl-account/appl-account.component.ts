import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { PrimeDataService } from '../../../../services/prime-data.service';
import { Registrant, SecurityQuestionsAnswers } from '../../models/registrant.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { CacheService } from '../../../../services/cache.service';
import { PrimeConstants } from '../../../../models/prime-constants';

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

  public newPwdLabel: string = 'New Password';

  public confirmPwdLabel: string = 'Confirm Password';

  /** Maximum length as defined by database fields */
  public userIdMaxLen = PrimeConstants.USERID_MAXLEN;
  public emailMaxLen = PrimeConstants.EMAIL_MAXLEN;

  constructor( private primeDataService: PrimeDataService,
               private cache: CacheService ) {
  }

  ngOnInit() {

    if ( !this.registrant.secQuestionsAnswer.length ) {
      // initialize question/answer array
      for ( let i = 0; i < this.numSecQuestions; i++ ) {
        this.registrant.secQuestionsAnswer.push( {question: null, answer: null} );
      }
    }
  }

  get registrant(): Registrant {
    return this.primeDataService.registrant;
  }

  // Unable to use pattern in password module causes unterminated string
  set confirmPassword( password: string ) {
    this.primeDataService.confirmPassword = password;
  }
  get confirmPassword(): string {
    return this.primeDataService.confirmPassword;
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

  isCanada(): boolean {

    if ( !this.registrant.address ) {
      return true; // Default to Canada
    } else if ( this.registrant.identityIsMailingAddress ) {
      return (this.registrant.address.country === PrimeConstants.CANADA);
    }
    return (this.registrant.mailAddress.country === PrimeConstants.CANADA);
  }

}
