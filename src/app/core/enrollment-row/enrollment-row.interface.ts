
export interface EnrollmentRowItem {
  title: string,
  // TODO: Replace any with new interfaces
  sites: any[],
  users: any[],

  // For Site Enrollment, this would be people. However, potentially from User Enrollment this could be sites(?). Decision still being made, so kept generic.
  expandableChildren?: {title: string, hasWarning: boolean, hasAlert: boolean}[]
}
