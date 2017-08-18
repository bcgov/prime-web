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

/**
 * Used for select2 lists.
 */
export interface CollegeList {
  id: Colleges;
  text: string;
  disabled?: boolean;

  //Dummy field you can change to force Angular to refresh
  //not sure if working! verify / remove
  _refresh?: any;
}
