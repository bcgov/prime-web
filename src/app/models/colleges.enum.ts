/**
 * Professional Information college choices
 */
export enum Colleges {
  None = "none",
  /**College of Physicians and Surgeons of BC (CPSBC)*/
  CPSBC = "91",
  /**College of Pharmacists Of BC (CPBC)*/
  CPBC = "P1",
  /**College of Registered Nurses of BC (CRNBC)*/
  CRNBC = "96",
}

//ARC TODO - Make this extend from or just use Select2OptionsData?
/**
 * Used for select2 lists.
 */
export interface CollegeList {
  id: Colleges;
  text: string;
  disabled?: boolean;
}
