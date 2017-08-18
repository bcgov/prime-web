/**
 * Professional Information college choices
 */
export enum Colleges {
  /** Not valid choice for applicant. Necessary when instantiating select2 form elements */
  Unselected = '',
  /**Applicant has not gone to a college. Valid choice. */
  None = "none",
  /**College of Physicians and Surgeons of BC (CPSBC)*/
  CPSBC = "91",
  /**College of Pharmacists Of BC (CPBC)*/
  CPBC = "P1",
  /**College of Registered Nurses of BC (CRNBC)*/
  CRNBC = "96",
}

/**
 * Used for select2 lists.
 */
export interface CollegeList {
  id: Colleges;
  text: string;
}
