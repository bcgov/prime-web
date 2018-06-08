
/**
 * Professional Information college choices
 */
export enum CollegeTypes {
  CPBC  = 'P1' /**College of Pharmacists Of BC (CPBC)*/,
  CRNBC = '96' /**College of Registered Nurses of BC (CRNBC)*/,
  CPSBC = '91' /**College of Physicians and Surgeons of BC (CPSBC)*/
}

/**
 * CPBC related license classes
 */
export enum LicenseClassCPTypes {
  FULL    = 'Full Pharmacist',
  LIMITED = 'Limited Pharmacist'
}

/**
 * CRNBC related license classes
 */
export enum LicenseClassCRNTypes {
  REGISTERED = 'Registered Nurse',
  TEMP       = 'Temp. Registered Nurse'
}

/**
 * CPSBC related license classes
 */
export enum LicenseClassCPSTypes {
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
export enum JobTitleTypes {
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


// /** @deprecated */
// export interface CollegeList {
//   id: Colleges;
//   text: string;
// }


// NEW Colleges Layout... Need to wait until Applicant section is done before solidifying what Collegs implementation we use.
// export enum Colleges {
//   None = "None",
//   CPSBC = "College of Physicians and Surgeons of BC (CPSBC",
//   CPBC = "College of Pharmacists Of BC (CPBC)",
//   CRNBC = "College of Registered Nurses of BC (CRNBC)"
// }
