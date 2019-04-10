
/** Common to all PRIME applications */
export class PrimeConstants {

  // Email length from database
  public static EMAIL_MAXLEN = '200';

  // Address Constants
  public static CANADA = 'CAN';
  public static BRITISH_COLUMBIA = 'BC';

  // Address field lengths will need to be checked on continue
  public static CITY_MAXLEN = '100';
  public static STREET_RURAL_MAXLEN = '1000';
}

/**
 * Identity provider
 */
export enum ProviderCode {
  MOH = 'MOH',
  BCSC = 'BCSC'
}

/**
 * Security assurance level for the person.
 */
export enum AssuranceLevel {
  LEVEL_1 = '1',
  LEVEL_2 = '2',
  LEVEL_3 = '3'
}
