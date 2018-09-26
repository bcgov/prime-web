/** The reason we're showing the notification in the first place.
 * TODO:  Verify that definition for enrollment statuses are correct - determine what statuses are required
 * should be same for all pages (verifier, applicant, provisioner)
 */
export enum EnrollmentStatus {
  /**
   * Applicant has active enrollment and site access granted
   */
  Active = 'Active',
  Approved = 'Approved', // TODO: figure out whether this is required if so when does it happen
  /**
   * Applicant and provisioner can decline site access
   * verifier can decline enrollment for site access
   */
  Declined = 'Declined',
  /**
   * Applicant general enrollment expired for PharmaNet access
   */
  Expired = 'Expired',
  Incomplete = 'Incomplete', // TODO: figure out when this happens
  /**
   * Verifier initiates enrollment
   */
  Initiated = 'Initiated',
  /**
   * New site/site access for applicant to accept or decline
   */
  New = 'New',
  /**
   * Provisioner to grant site access for applicant
   */
  Provisioning = 'Provisioning Requested',
  Returned = 'Returned to applicant',

   /**
   * MoH reviews
   */
  Review = 'Review',

  Ended = 'Ended',
}
