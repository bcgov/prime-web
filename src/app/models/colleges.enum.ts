
/**
 * Professional Information college choices
 */
export enum CollegeTypes {
  CPBC  = 'P1' /**College of Pharmacists Of BC (CPBC)*/,
  CRNBC = '96' /**College of Registered Nurses of BC (CRNBC)*/,
  CPSBC = '91' /**College of Physicians and Surgeons of BC (CPSBC)*/
}

/**
 * CPBC related licence classes
 */
export enum LicenceClassCPTypes {
  FULL    = 'Full Pharmacist',
  LIMITED = 'Limited Pharmacist'
}

/**
 * CRNBC related licence classes
 */
export enum LicenceClassCRNTypes {
  REGISTERED = 'Registered Nurse',
  TEMP       = 'Temp. Registered Nurse'
}

/**
 * CPSBC related licence classes
 */
export enum LicenceClassCPSTypes {
  GENERAL   = 'Full - General',
  SPECIALTY = 'Full - Specialty'
}

/**
 * CRNBC related Advanced Practice Certification
 */
export enum AdvancedPracticeCertificationTypes {
  REMOTE       = 'Remote Practice',
  REPRODUCTIVE = 'Reproductive Care',
  STI          = 'Sexually Transmitted Infection',
  NONE         = 'None'
}

/**
 * Entries related to Working on-behalf
 */
export enum WorkingOnBehalfTitleTypes {
  MEDICA = 'Medica Office Assistant',
  OTHER  = 'Other'
}

/**
 * Entries related to Working on-behalf
 */
export enum MaxLengthTypes {
  LICENCE_NUMBER          = 12,
  DEVICE_PROVIDER_NUMBER  = 12
}


/**
 * Interface for self declaration
 */
export interface ISelfDeclaration {
  flag: boolean,
  detail: string;
}


// /** @deprecated */
// export interface CollegeList {
//   id: Colleges;
//   text: string;
// }
