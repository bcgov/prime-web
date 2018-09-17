# prime-web 
PharmaNet Revisions for Information Management Enhancements

Prime-web used [angular-scaffold](https://github.com/bcgov/angular-scaffold) as it's starting off point.  The original angular-scaffold readme can be found in `angular-scaffold-readme.md`.

## Setup

### Prerequisites

1. yarn `npm i -g yarn`
2. angular-cli `npm i -g @angular/cli`
3. Node 6.9.x or greater

Verify angular-cli is installed by running `ng -v`. Since `ng -v` is dependent upon the folder it's executed in (i.e. it looks in `node_modules/`), it's fine if some of the fields show "error." 

### Installation

```bash
git clone https://github.com/bcgov/prime-web
cd prime-web
yarn
npm start # Runs a local dev server
```

There currently is a bug in the latest version of Yarn (1.0.1) which will lead to multiple "unmet peer dependency" warnings when installing. These errors can safely be ignored, or you can force downgrade to 0.27.5 ([Issue 1](https://github.com/angular/angular-cli/issues/7658), [Issue 2](https://github.com/yarnpkg/yarn/issues/4433))

After install, it's recommended you run tests below to ensure everything is working.


## Testing

This app has both unit tests and e2e tests written. At the time of this writing, all tests are passing.

```bash
npm run test # Runs `ng test`
npm run e2e # Runs `ng e2e --environment prod`, necessary for e2e tests.
```

You can run the `ng` commands above directly if you prefer. However, it's necessary you keep the `--environment prod` on the e2e command or they'll fail because of dummy data in the development environment.

More information on tests can be found in the [Angular Documentation](https://angular.io/guide/testing).

### e2e testing

The e2e files are in the `/e2e/` folder

The e2e tests run through the entirety of the web app, filling in data on fields and then navigating to the review and submit page to verify that the data is correct.  In the environment files there's a `useDummyData` flag, which if true will lead to the tests failing as the e2e tests assume blank inputs.

The classes for the tests are written in `/e2e/app.po.ts` and and well documented via jsDocs.


Currently the e2e test runs through every screen of the app, filling in data on the inputs, then 

### Linting

`ng lint`

This is not specifically testing *per se*, but related. AngularCLI, with TSLint, will statically analyze the whole project and look for things like poorly indented code, untyped variables, inconsistent usage of single/double quotes, inconsistent class names.  It is recommended you run `ng lint` periodically. This ensures the code is consistent across the entire app.

Some, but not all, of the issues it identifies it can fix via the `ng lint --fix` command.

## Application Details

### Folder Structure

The base folder structure is largely defined by [angular-scaffold](https://github.com/bcgov/angular-scaffold), however that does not extend to files in the `src/` folder. This section seeks to explain the `src/` folder structure that's unique to prime-web.


```bash
prime-web/src/
├── assets/  # from angular-scaffold
├── environments/ # from angular-scaffold
│   └── environment.ts # used by default
│   └── environment.prod.ts # used with --prod or --environment prod
└── app/
    ├── core/ # re-usable components , e.g. date selector or toggle.
    ├── models/ # data models, interfaces, enums.
    └── pages/ # one component for each page, e.g. contact-info, site-access
    └── services/ # angular services
    └── validation/ # directives for frontend validation, discussed below
    └── app-routing.module.ts # routes are defined here
    └── app.component.* # contains app-wide configs and header/footer.
    └── app.module.ts
    └── variables.scss # app wide scss variables, copied from MSP.
```

### Dummy Data

Disable/Enable in `/src/environments/environment.ts`

When developing, sometimes having Dummy Data pre-populated into the app can be convenient.  You can toggle this via the `useDummyData` environment flag, i.e. by either editing environment.ts if you're in dev, or environment.prod.ts if you're in prod. You can toggle the variable freely, but know that the e2e tests fail when dummy data is used.

All dummy data is defined in `src/app/services/dummy-data.service.ts`.


### Validation

#### Using Validation

Currently the app only handles front-end validation. This section is only about front-end validation.

In the `src/app/validation` we define the primeDirective directive that can be applied directly to the input element. You can pass in validation options to the directive. If no options are provided, it defaults to "required."
 
```html
<!-- These two are equivalent. "required" is default. -->
 <input type="text"
  class="form-control"
  name='lastName'
  id='lastName'
  primeRequired
  [(ngModel)]="applicant.lastName">

<input type="text"
  class="form-control"
  name='lastName'
  id='lastName'
  primeRequired="required"
  [(ngModel)]="applicant.lastName">
```

The other options you can currently pass are "phone" and "email."  They can be provided as a CSV (order does not matter). 

```html

<input type="text"
  class="form-control"
  name='phoneNumber'
  id='phoneNumber'
  primeRequired="phone,required"
  [(ngModel)]="applicant.phoneNumber">

  <!-- These two are NOT equivalent. "required" is not included, so field can
  can be blank. But IF it's non-blank, must pass phone validation.-->

  <input type="text"
  class="form-control"
  name='altphoneNumber'
  id='altphoneNumber'
  #altPhoneNumber
  primeRequired="phone"
  [ngModel]="applicant.altPhoneNumber"
  (ngModelChange)="onAlternateFieldChange()">
```

#### Understanding & Extending Validation

The primeRequired directive looks at the options, and then loads a different class for each validation option.  That process is defined in `/src/app/validation/prime-required.directive.ts::loadValidationComponents()`. For example, `/src/app/validation/phone-validation/` has all the logic for validating phone numbers. Each validation class is responsible for both the validation logic, and the error template. 

Validation classes must extend from `BaseValidationComponent`. If your validation can be handled with a single regex, then all you need to do is extend `BaseValidationComponent` and overwrite the `regex` value.  If you need more, simply re-define the `validate()` method.  For an example of regex validation look at `PhoneValidationComponent`, for an example of overwriting `validate()` look at `RequiredValidationErrorsComponent`.

The validation components only gets the input element itself, and due to the static methods cannot retain state. It can't look between multiple elements, or anywhere else outside the input it's validating. If you need more complex validation, try a different approach. 

### Environments

prime uses the default AngularCLI approach to environments. [Documentation.](https://github.com/angular/angular-cli/wiki/build)

In brief, `/src/environments/environment.ts` is for the dev environment, and `/src/environments/environment.prod.ts` is for prod.  The default environment is dev, and you dictate other environments via command line arguments:

```bash
ng serve -o # uses dev by default
ng serve -o --environment=prod # uses prod
ng build # uses dev
ng build --prod # uses prod. normal way to get a prod build.
ng build --target=prod # uses prod environment, but omits other --prod flags.
ng e2e # uses dev
ng e2e --environment=prod # uses prod

# uses dev environment, but takes the rest of the --prod flags
ng build --prod --environment=dev
```

For more details, read the documentation linked above.

## Pending Task List

This project has temporarily been put on hold.  There are a few tasks that have been put on hold, and should be resolved when the project resumes.

#### Reintegrate CAPTCHA

This app should use the CAPTCHA widget, as found in `review-submit.html:388`. However, due to an issue with the widget failing `ng build --prod` it has temporarily been removed.

[Details of the issue can be found here.](https://github.com/bcgov/MyGovBC-CAPTCHA-Widget/issues/3)

Once the issue has been resolved, and the CAPTCHA widget updated, the plugin should be reintegrated. Verify that `ng build --prod`, and `ng build --aot=true` work fine with CAPTCHA integrated.
