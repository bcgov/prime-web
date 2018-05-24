/** The reason we're showing the notification in the first place. */
export enum EnrollmentStatus {
  Initiated = "Initiated",
  Pending = "Pending",
  Incomplete = "Incomplete",
  Returned = "Returned to applicant",
  Declined = "Declined",
  // Approved = "Approved", //Same as active?
  Active = "Active",
  Expired = "Expired",
}
