import { Component, OnInit, Input, forwardRef, Output, EventEmitter } from '@angular/core';
import { PrimeDataService } from '../../../../services/prime-data.service';
import { Registrant } from '../../models/registrant.model';
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
  @Output() dataValid: EventEmitter<boolean> = new EventEmitter<boolean>();

  public newPwdLabel: string = 'New Password';

  public confirmPwdLabel: string = 'Confirm Password';
  public confirmPassword: string;

  /** Maximum length as defined by database fields */
  public userIdMaxLen = PrimeConstants.USERID_MAXLEN;
  public emailMaxLen = PrimeConstants.EMAIL_MAXLEN;

  constructor( private primeDataService: PrimeDataService,
               private cache: CacheService,
               private form: NgForm ) {
  }

  ngOnInit() {

    if ( !this.registrant.secQuestionsAnswer.length ) {
      // initialize question/answer array
      for ( let i = 0; i < this.numSecQuestions; i++ ) {
        this.registrant.secQuestionsAnswer.push( {question: null, answer: null} );
      }
    }

    // Listen form submission
    this.form.ngSubmit.subscribe( val => this.validateAccountInfo( val ) );
  }

  private validateAccountInfo( val: any ) {
    let valid = false;
    console.log( 'Validate Account Info' );
    if ( this.form.valid ) {

      /* TODO:
       *  a) Check password criteria
       *  b) Check passwords match
       *  c) Make REST call REG_10
       *
   * At least 3 of the following categories:
   *  a) Upper case characters (A-Z)
   *  b) Lower case characters (a-z)
   *  c) Numeral (0-9)
   *  d) Non-alphanumeric characters e.g. []?/\.<~#`!@#$%^&*()-+=|:"',>{}

   no userID and no names

   At least one upper case English letter, (?=.*?[A-Z])
At least one lower case English letter, (?=.*?[a-z])
At least one digit, (?=.*?[0-9])
At least one special character, (?=.*?[#?!@$%^&*-])

  private validPassword(): boolean {
    const pwdCriteria = RegExp(
      '^((?=.*[A-Za-z])(?=.*\d)[A-Za-z0-9])*$'
    );

    // '^((?=.*[^a-zA-Z\s])(?=.*[a-z])(?=.*[A-Z])|(?=.*[^a-zA-Z0-9\s])(?=.*\d)(?=.*[a-zA-Z])).*$'
    console.log( 'Validate password criteria: ', pwdCriteria );

   //
    const password = this.primeDataService.registrant.password;


    console.log( 'Validate password password: ', password );
    console.log('Validate password: ', pwdCriteria.test( password ) );


    return false;
  }
   */


      valid = true;


    }
    this.dataValid.emit( valid );
  }

  get registrant(): Registrant {
    return this.primeDataService.registrant;
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
}
