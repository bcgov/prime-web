
/** Common to all PRIME applications */
export class PrimeConstants {

  // Email length from database
  public static EMAIL_MAXLEN = '256';

  // Address Constants
  public static CANADA = 'CAN';
  public static BRITISH_COLUMBIA = 'BC';
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
