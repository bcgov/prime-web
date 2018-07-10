
/**
 * Professional Information college choices
 */
export enum CollegeTypes {
  CPBC  = 'P1' /**College of Pharmacists Of BC (CPBC)*/,
  CRNBC = '96' /**College of Registered Nurses of BC (CRNBC)*/,
  CPSBC = '91' /**College of Physicians and Surgeons of BC (CPSBC)*/
}

export class CollegeHelper {

  /** Takes a string of a key in CollegeTypes. Useful when you already are iterating on the CollegeTypes enum. */
  static getFullCollegeNameFromString(name: string): string{
    return CollegeHelper.getFullCollegeName(CollegeTypes[name])
  }

  /** Returns the full college name from the enum type  */
  static getFullCollegeName(collegeType: CollegeTypes): string{
    let fullName;
    switch (collegeType) {
      case CollegeTypes.CPBC:
        fullName = 'Pharmacists of BC (CPBC)';
        break;
      case CollegeTypes.CPSBC:
        fullName = 'College of Physicians and Surgeons of BC (CPSBC)';
        break;
      case CollegeTypes.CRNBC:
        fullName = 'College of Registered Nurses of BC (CRNBC)';
        break;
    }

    return fullName;
  }
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
  REG_CLERK = 'Registration Clerk',
  WARD_CLERK = 'Ward Clerk',
  PHARM_ASSIST = 'Pharmacy Assistant',
  PHARM_TECH = 'Pharmacy Technicain',
  NURSE = 'Nurse (not Nurse Practicitioner)',
  MIDWIVES = 'Midwives',
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
