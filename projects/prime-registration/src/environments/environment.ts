// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  /** Front-end development without backend */
  useMockBackend: false,


  /** Base url for all requests.
   * Note: This should be a relative URL, not absolute, so it can properly map to dev/test/prod.
   */
  baseAPIUrl: '/api/reg/rest/',
  /** URL for log service */
  loggingURL: '/api/logging'
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
