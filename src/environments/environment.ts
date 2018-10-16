// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  loggingURL: '/fpcare/api/logging',
  /** Configures dummy data in a way that's convenient for developers, such as having values which already pass validation. */
  skipRedirects: true,
  /** console.log() HTTP requests from our API and Log services */
  logHTTPRequestsToConsole: true,
  /** Should logs be sent to Splunk? If false, no logs are made. */
  enableLogging: false,
};
