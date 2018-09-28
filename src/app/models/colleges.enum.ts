
/**
 * Professional Information college choices
 */
export enum CollegeTypes {
  //These should appear in alphanum order according to the name, not acronym or number
  CPBC  = 'P1' /**College of Pharmacists Of BC (CPBC)*/,
  CPSBC = '91' /**College of Physicians and Surgeons of BC (CPSBC)*/,
  CRNBC = '96' /**College of Registered Nurses of BC (CRNBC)*/
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
        fullName = 'College of Pharmacists of BC (CPBC)';
        break;
      case CollegeTypes.CPSBC:
        fullName = 'College of Physicians and Surgeons of BC (CPSBC)';
        break;
      case CollegeTypes.CRNBC:
        fullName = 'BC College of Nursing Professionals (BCCNP)';
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
  TEMP       = 'Temporary Registered Nurse'
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
  MEDICA = 'Medical Office Assistant',
  MIDWIVES = 'Midwife',
  NURSE = 'Nurse (not Nurse Practitioner)',
  PHARM_ASSIST = 'Pharmacy Assistant',
  PHARM_TECH = 'Pharmacy Technician',
  REG_CLERK = 'Registration Clerk',
  WARD_CLERK = 'Ward Clerk',
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
