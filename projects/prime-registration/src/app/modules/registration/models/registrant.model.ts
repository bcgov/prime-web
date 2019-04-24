import { SecurityQuestionsAnswers } from './register-api.model';
import {
  Document,
  PrimePerson,
  AssuranceLevel,
  ProviderCode
} from 'prime-core';

export class Registrant extends PrimePerson {

  /** Account information */
  public userAccountName: string; // UserID for MOH, PDID for BCSC
  public password: string;
  public emailAddress: string;
  public smsPhone: string;
  public secQuestionsAnswer: SecurityQuestionsAnswers[] = [];

  /* Documents */
  public documents: Document[] = [];

  public assuranceLevel: AssuranceLevel; // Level 1 or 3
  public providerCode: ProviderCode; // MOH or BCSC

  /** Multi-factor authenication */
  public useMfaSMS: boolean = false;
  public mfaSMSphone: string;
  public useMfaSecurityKey: boolean = false;
  public useMfaApp: boolean = false;

  hasMfaMethod(): boolean {
    return this.useMfaApp || this.useMfaSMS || this.useMfaSecurityKey;
  }

  /* Copy function */
  copy( object: Registrant ) {
    super.copy(object);

    this.userAccountName = object.userAccountName;
    this.password = object.password;
    this.emailAddress = object.emailAddress;
    this.smsPhone = object.smsPhone;

    this.secQuestionsAnswer = object.secQuestionsAnswer;

    this.useMfaSMS = object.useMfaSMS;
    this.mfaSMSphone = object.mfaSMSphone;
    this.useMfaSecurityKey = object.useMfaSecurityKey;
    this.useMfaApp = object.useMfaApp;
  }
}
