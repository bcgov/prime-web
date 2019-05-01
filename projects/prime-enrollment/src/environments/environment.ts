// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  /** URL for log service */
  loggingURL: '/api/logging',

  /**
   *  TODO: updated to when enrol implemented,
   *  also decision - will cache be retrieved
   *  from existing registration integration layer or will new cache service created
   *  for enrolment?
   */
  baseAPIUrl: '/api/reg/rest'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
