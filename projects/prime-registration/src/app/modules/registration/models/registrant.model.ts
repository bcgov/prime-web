import { Document } from '@prime-core/models/documents.interface';
import { PrimePerson } from '@prime-core/models/prime-person.model';
export interface SecurityQuestionsAnswers {
  name: string;
  value: string;
}

export class Registrant extends PrimePerson {

  /** Account information */
  public userID: string;
  public password: string;
  public emailAddress: string;
  public smsPhone: string;

  public secQuestionsAnswer: SecurityQuestionsAnswers[] = [];

  /* Documents */
  public documents: Document[] = [];

  /** Multi-factor authenication */
  public useMfaSMS: boolean = false;
  public mfaSMSphone: string;
  public useMfaSecurityKey: boolean = false;
  public useMfaApp: boolean = false;

  hasMfaMethod(): boolean {
    return this.useMfaApp || this.useMfaSMS || this.useMfaSecurityKey;
  }

  /* Copy function */
  copy(object: Registrant) {
    super.copy(object);

    this.userID = object.userID;
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
