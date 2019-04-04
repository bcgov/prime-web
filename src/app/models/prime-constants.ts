export class PrimeConstants {

  // Registration Contants - based off database fields
  public static USERID_MAXLEN = '250';
  public static EMAIL_MAXLEN = '200';


  // Address Constants
  public static CANADA = 'CAN';
  public static BRITISH_COLUMBIA = 'BC';

  // Address field lengths will need to be checked on continue
  public static CITY_MAXLEN = '100';
  public static STREET_RURAL_MAXLEN = '1000';

  // Routes
  public static MOH_REGISTRATION = 'moh-registration';
  public static BCSC_REGISTRATION = 'bcsc-registration';

  // Pages
  public static PROFILE_PG = 'profile';
  public static DOC_UPLD_PG = 'upload-documents';
  public static ACCOUNT_PG = 'account';
  public static SECURITY_PG = 'security';
  public static CONFIRMATION_PG = 'confirmation';
}

export enum RegCredTypes {
  MOH = 'MOH',
  BCSC = 'BCSC'
}

export enum AssuranceLevel {
  LEVEL_1 = '1',
  LEVEL_2 = '2',
  LEVEL_3 = '3'
}
