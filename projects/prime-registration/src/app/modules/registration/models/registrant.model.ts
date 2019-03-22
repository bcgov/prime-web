import { Person, Address } from 'moh-common-lib/models';
import { Document } from '@prime-core/models/documents.interface';

export interface SecurityQuestionsAnswers {
  name: string;
  value: string;
}

export class Registrant extends Person {

  /** Parts of a person's name */
  public preferredFirstName: string;
  public preferredMiddleName: string;
  public preferredLastName: string;

  /** Identify and mailing addresses */
  public address: Address = new Address();
  public mailAddress: Address = new Address();
  public identityIsMailingAddress = true;

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

  /** BSCS Registration attributes */
  public assuranceLevel: number;

  /* Copy function */
  copy( object: Registrant ) {
    super.copy( object );
    this.preferredFirstName = object.preferredFirstName;
    this.preferredMiddleName = object.preferredMiddleName;
    this.preferredLastName = object.preferredLastName;

    this.address.copy( object.address );
    this.mailAddress.copy( object.mailAddress );

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
