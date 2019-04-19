import { PrimeConstants } from 'prime-core';


export class RegistrationConstants extends PrimeConstants {

  // Registration Contants - based off database fields
  public static USERID_MAXLEN = '250';

  // Routes
  public static MOH_REGISTRATION = 'moh-registration';
  public static BCSC_REGISTRATION = 'bcsc-registration';

  // Pages
  public static PROFILE_PG = 'profile';
  public static DOC_UPLD_PG = 'upload-documents';
  public static ACCOUNT_PG = 'account';
  public static SECURITY_PG = 'security';
  public static CONFIRMATION_PG = 'confirmation';


  // System Parameter Codes for Registration
  public static SEC_QUEST_CNT = 'REG_SECQUES_CNT';
  public static REG_CLIENTNAME = 'REG_CLIENT_NAME';

}
