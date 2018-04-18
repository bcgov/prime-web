
export interface EnrollmentRowItem {
  title: string,
  // TODO: Replace any with new interfaces
  sites: any[],
  users: any[],

  // For Site Enrollment, this would be people. However, potentially from User Enrollment this could be sites(?). Decision still being made, so kept generic.
  // expandableChildren?: {title: string, hasWarning: boolean, hasAlert: boolean}[]
  expandableChildren?: EnrollmentRowChild[];

}

// Expanded child for a row. For Site Enrollment, this is people. However, from User Enrollment, this would be a person.
export interface EnrollmentRowChild {
  title: string,
  alerts: NotificationItem[],

  // Hide from filter results
  hidden?: boolean,
}

export interface NotificationItem {
  // title: string,
  level: BadgeLevel,
  status: EnrollmentStatus,
}


// Corresponds to the Bootstrap classes we're using for notifications.
// Lower case for CSS classes
export enum BadgeLevel {
  Warning = "warning",
  Danger = "danger",
}

/** The reason we're showing the notification in the first place. */
export enum EnrollmentStatus {
  Declined = "Declined",
  Incomplete = "Incomplete",
  Pending = "Pending",
  Approved = "Approved"
}
