(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-registration-registration-module"],{

/***/ "./src/app/modules/registration/components/collection-notice/collection-notice.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/registration/components/collection-notice/collection-notice.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #template>\n\n  <div class=\"modal-header\">\n    <h2  class=\"modal-title\">Collection Notice</h2>\n  </div>\n\n  <div class=\"modal-body\">\n    <label>\n      The PRIME application collects personal information for the purposes of verification to authorize your access to PharmaNet. Your personal information is collected by the Ministry of Health under section 26(c) of the Freedom of Information and Protection of Privacy Act. Should you have any questions about the collection of this personal information, please contact PRIME@gov.bc.ca.\n    </label>\n  </div>\n\n  <div class=\"modal-footer\">\n\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"disagree()\" tabindex=\"1\">\n      Disagree\n    </button>\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"modalRef.hide()\" tabindex=\"1\">\n      I Agree\n    </button>\n\n  </div>\n\n</ng-template>\n\n"

/***/ }),

/***/ "./src/app/modules/registration/components/collection-notice/collection-notice.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/registration/components/collection-notice/collection-notice.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/registration/components/collection-notice/collection-notice.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/registration/components/collection-notice/collection-notice.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: CollectionNoticeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionNoticeComponent", function() { return CollectionNoticeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CollectionNoticeComponent = /** @class */ (function () {
    function CollectionNoticeComponent(modalService, router) {
        this.modalService = modalService;
        this.router = router;
    }
    CollectionNoticeComponent.prototype.ngOnInit = function () {
        this.openModal(this.templateRef);
    };
    CollectionNoticeComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    CollectionNoticeComponent.prototype.disagree = function () {
        this.modalRef.hide();
        this.router.navigate(['/login']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('template'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CollectionNoticeComponent.prototype, "templateRef", void 0);
    CollectionNoticeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'prime-collection-notice',
            template: __webpack_require__(/*! ./collection-notice.component.html */ "./src/app/modules/registration/components/collection-notice/collection-notice.component.html"),
            styles: [__webpack_require__(/*! ./collection-notice.component.scss */ "./src/app/modules/registration/components/collection-notice/collection-notice.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CollectionNoticeComponent);
    return CollectionNoticeComponent;
}());



/***/ }),

/***/ "./src/app/modules/registration/components/reg-login-mfa/reg-login-mfa.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/registration/components/reg-login-mfa/reg-login-mfa.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" class=\"btn btn-primary mx-2\" (click)=\"openModal(template)\">\n  Login\n</button>\n<ng-template #template>\n  <div class=\"modal-header\">\n    <h4 *ngIf=\"showOptions\" class=\"modal-title\">Select a method to verify yourself</h4>\n    <h4 *ngIf=\"showVerifyPIN\" class=\"modal-title\">Enter your Verification code</h4>\n\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n\n  <div *ngIf=\"showOptions\" class=\"modal-body\">\n    <form>\n      <div>\n        <input type=\"radio\" name=\"mfaOption\" value=\"sms\" [(ngModel)]=\"mfaSms\" />\n        <label>SMS/Text</label>\n        <label class=\"has-float-label\">\n          <input type=\"text\" class=\"form-control prime-input-large\" id=\"regMFAPhone\" name=\"regMFAPhone\" [ngModel]=\"this.registrant.mfaOptionSMSPhone ? this.maskPhone(this.registrant?.mfaOptionSMSPhone) : null\" placeholder=\" \" disabled>\n          <span>Phone</span>\n        </label>\n      </div>\n\n      <hr>\n\n      <div>\n        <input type=\"radio\" name=\"mfaOption\" value=\"key\" [(ngModel)]=\"mfaKey\" />\n        <label>Physical Security Key</label>\n        <label class=\"has-float-label\">\n          <input type=\"text\" class=\"form-control prime-input-large\" placeholder=\" \" disabled>\n          <span>Instructions to follow</span>\n        </label>\n      </div>\n\n      <hr>\n\n      <div>\n        <input type=\"radio\" name=\"mfaOption\" value=\"app\" [(ngModel)]=\"mfaApp\" >\n        <label>Mobile App Authentication</label>\n      </div>\n      <img class=\"img-thumbnail\" src=\"assets/mobile_app_icon_android.png\" alt=\"Generic placeholder image\">\n      <img class=\"img-thumbnail\" src=\"assets/mobile_app_icon_apple.png\" alt=\"Generic placeholder image\">\n      <img class=\"img-thumbnail\" src=\"assets/mobile_app_icon_windows.png\" alt=\"Generic placeholder image\">\n    </form>\n  </div>\n\n  <div *ngIf=\"showVerifyPIN\" class=\"modal-body\">\n    <form>\n      <div>\n        <label class=\"has-float-label\">\n          <input type=\"text\" id=\"pin\" name=\"pin\" class=\"form-control prime-input-large\" [(ngModel)]=\"pin\" placeholder=\" \">\n          <span>Verification code</span>\n        </label>\n      </div>\n\n      <div><a href=\"javascript:void(0)\" (click)=\"chooseOption()\">Try a different method</a>\n      </div>\n    </form>\n  </div>\n\n  <div *ngIf=\"showVerifiedPIN\" class=\"modal-body\">\n    <div style=\"text-align:center\">\n      <i class=\"fa fa-check-circle text-success fa-3x\" aria-hidden=\"true\"></i>\n      <h1>Code Verified</h1>\n      <span>To complete your account please continue to Identity Proofing</span>\n    </div>\n  </div>\n\n  <div class=\"modal-footer\">\n\n    <button *ngIf=\"!showVerifiedPIN\" type=\"button\" class=\"btn btn-default\" (click)=\"modalRef.hide()\" tabindex=\"1\">\n      Cancel\n    </button>\n    <button *ngIf=\"showVerifiedPIN\" type=\"button\" class=\"btn btn-default\" (click)=\"modalRef.hide()\" tabindex=\"1\">\n      Later\n    </button>\n\n    <button *ngIf=\"showOptions\" type=\"button\" class=\"btn btn-default\" (click)=\"sendPIN()\" tabindex=\"1\" [disabled]=\"!mfaOptionCheck()\">\n      Send Verification code\n    </button>\n    <button *ngIf=\"showVerifyPIN\" type=\"button\" class=\"btn btn-default\" (click)=\"verifyPIN()\" tabindex=\"1\" [disabled]=\"!pinCheck()\">\n      Verify Verification code\n    </button>\n    <button *ngIf=\"showVerifiedPIN\" type=\"button\" class=\"btn btn-default\" (click)=\"verifiedPIN()\" tabindex=\"1\">\n      Identity Proofing\n    </button>\n\n  </div>\n\n</ng-template>\n"

/***/ }),

/***/ "./src/app/modules/registration/components/reg-login-mfa/reg-login-mfa.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/registration/components/reg-login-mfa/reg-login-mfa.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/registration/components/reg-login-mfa/reg-login-mfa.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/registration/components/reg-login-mfa/reg-login-mfa.component.ts ***!
  \******************************************************************************************/
/*! exports provided: RegLoginMfaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegLoginMfaComponent", function() { return RegLoginMfaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _services_prime_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/prime-data.service */ "./src/app/services/prime-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegLoginMfaComponent = /** @class */ (function () {
    function RegLoginMfaComponent(primeDataService, modalService, router) {
        this.primeDataService = primeDataService;
        this.modalService = modalService;
        this.router = router;
        this.showOptions = true;
        this.showVerifyPIN = false;
        this.showVerifiedPIN = false;
        this.mfaSms = false;
        this.mfaKey = false;
        this.mfaApp = false;
    }
    RegLoginMfaComponent.prototype.ngOnInit = function () {
        /*if (registrant.mfaOptionSMSPhone) {
          console.log(this.maskPhone('2504741234');
          this.maskedPhone = this.maskPhone(this.registrant.mfaOptionSMSPhone);
        }*/
    };
    Object.defineProperty(RegLoginMfaComponent.prototype, "registrant", {
        get: function () {
            return this.primeDataService.user;
        },
        enumerable: true,
        configurable: true
    });
    RegLoginMfaComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    RegLoginMfaComponent.prototype.sendPIN = function () {
        this.showOptions = false;
        this.showVerifyPIN = true;
    };
    RegLoginMfaComponent.prototype.chooseOption = function () {
        this.showOptions = true;
        this.showVerifyPIN = false;
    };
    RegLoginMfaComponent.prototype.verifyPIN = function () {
        this.showVerifyPIN = false;
        this.showVerifiedPIN = true;
    };
    RegLoginMfaComponent.prototype.verifiedPIN = function () {
        this.modalRef.hide();
        this.router.navigate(['/register/id-proofing']);
    };
    RegLoginMfaComponent.prototype.pinCheck = function () {
        var result = false;
        if (this.pin != null) {
            result = this.pin.length > 0;
        }
        return result;
    };
    RegLoginMfaComponent.prototype.mfaOptionCheck = function () {
        var result = false;
        if (this.mfaSms || this.mfaKey || this.mfaApp) {
            result = true;
        }
        return result;
    };
    RegLoginMfaComponent.prototype.maskPhone = function (phoneNumber) {
        var noBrackets = phoneNumber.replace(/\(/g, '').replace(/\)/g, '');
        return '**' + noBrackets.substr(2, noBrackets.length - 4) + '***';
    };
    RegLoginMfaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'prime-reg-login-mfa',
            template: __webpack_require__(/*! ./reg-login-mfa.component.html */ "./src/app/modules/registration/components/reg-login-mfa/reg-login-mfa.component.html"),
            styles: [__webpack_require__(/*! ./reg-login-mfa.component.scss */ "./src/app/modules/registration/components/reg-login-mfa/reg-login-mfa.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_prime_data_service__WEBPACK_IMPORTED_MODULE_2__["PrimeDataService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegLoginMfaComponent);
    return RegLoginMfaComponent;
}());



/***/ }),

/***/ "./src/app/modules/registration/components/registration-container/registration-container.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/registration/components/registration-container/registration-container.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<prime-core-breadcrumb>\n  <prime-wizard-progress-bar-simple\n    class='d-none d-lg-block p-md-2 col-md-4 offset-md-4'\n    center\n    [progressSteps]=\"progressSteps\"\n    [allowLinks]=\"allowLinks\">\n  </prime-wizard-progress-bar-simple>\n\n  <span right class='d-flex'>\n    <div class='controls'>\n      <div *ngIf=\"router.url != '/register/security';then continueButton else submitButton\"></div>\n      <ng-template #continueButton>\n        <button type=\"button\" class=\"btn btn-primary mx-2\" (click)=\"continue()\" [disabled]=\"!canContinue()\">{{'Continue'}}</button>\n      </ng-template>\n      <ng-template #submitButton>\n        <button type=\"button\" class=\"btn btn-primary mx-2\" (click)=\"submit()\" [disabled]=\"!canContinue()\">{{'Submit'}}</button>\n      </ng-template>\n\n\n    </div>\n  </span>\n\n</prime-core-breadcrumb>\n\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/modules/registration/components/registration-container/registration-container.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/registration/components/registration-container/registration-container.component.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/registration/components/registration-container/registration-container.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/registration/components/registration-container/registration-container.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: RegistrationContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationContainerComponent", function() { return RegistrationContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _registration_page_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../registration-page-routing.module */ "./src/app/modules/registration/registration-page-routing.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_prime_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/prime-data.service */ "./src/app/services/prime-data.service.ts");
/**
 * NOTE:  We may want to use this module for applicant, modify to be prime-breadcrumb-container
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegistrationContainerComponent = /** @class */ (function () {
    function RegistrationContainerComponent(router, primeDataService) {
        this.router = router;
        this.primeDataService = primeDataService;
        this.allowLinks = !_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production ? true : false;
    }
    RegistrationContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.progressSteps = _registration_page_routing_module__WEBPACK_IMPORTED_MODULE_1__["pageRoutes"].map(function (x) {
            return {
                title: _this.convertRouteToTitle(x.path),
                route: x.path,
            };
        });
        // Disable the document upload page if user has used BCSC
        if (this.registrant.pairingCode) {
            this.progressSteps = this.progressSteps.filter(function (step) {
                return step.route !== 'document-upload';
            });
        }
    };
    Object.defineProperty(RegistrationContainerComponent.prototype, "registrant", {
        get: function () {
            return this.primeDataService.user;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Converts a lower case string of a route in a user readable title.  e.g.
     * "document-upload" -> "Document Upload"
     *
     * @param {string} routePath
     */
    RegistrationContainerComponent.prototype.convertRouteToTitle = function (routePath) {
        return routePath.split('-').map(function (x) { return x[0].toUpperCase() + x.slice(1); }).join(' ');
    };
    RegistrationContainerComponent.prototype.canContinue = function () {
        var retVal = false;
        //Profile Page
        if (this.router.url === '/register/profile') {
            if (this.registrant.lastName && this.registrant.firstName && this.registrant.dateOfBirth &&
                this.registrant.address && this.registrant.address.city && this.registrant.address.province &&
                this.registrant.address.postal && this.registrant.address.country && this.registrant.phone &&
                this.registrant.email) {
                retVal = true;
            }
        }
        //Document Upload Page
        if (this.router.url === '/register/document-upload') {
            // User must select at least one document type and provide expiry date
            if (this.registrant.hasDriversLicense && this.registrant.driverLicenseExpiry) {
                return true;
            }
            if (this.registrant.hasPassport && this.registrant.passportExpiry) {
                return true;
            }
        }
        //Document Security Page
        if (this.router.url === '/register/security') {
            if (this.registrant.pairingCode && this.registrant.securityAnswer1 && this.registrant.securityAnswer2 && this.registrant.securityAnswer3) {
                return true;
            }
            //User must select at least one mfa option
            if (this.registrant.primeUserId && this.registrant.securityAnswer1 && this.registrant.securityAnswer2 &&
                this.registrant.securityAnswer3 &&
                (this.registrant.mfaOptionSMS || this.registrant.mfaOptionKey || this.registrant.mfaOptionApp)) {
                //If the user selects the phone mfa option, they must have a phone number
                if (this.registrant.mfaOptionSMS) {
                    if (this.registrant.mfaOptionSMSPhone) {
                        retVal = true;
                    }
                }
                else {
                    retVal = true;
                }
            }
        }
        return retVal;
    };
    /**
     * Navigates through the pages
     */
    RegistrationContainerComponent.prototype.continue = function () {
        var _this = this;
        // Find current index of URL
        var idx = this.progressSteps.findIndex(function (x) {
            return _this.router.url.endsWith(x.route);
        });
        // Case were route is blank
        if (-1 === idx) {
            idx = 0;
        }
        // Navigate next page
        if (this.progressSteps.length > idx + 1) {
            // Get URL prefix
            var idxEndPrefix = this.router.url.lastIndexOf('/');
            var prefix = (idxEndPrefix === 0) ? this.router.url : this.router.url.slice(0, idxEndPrefix);
            this.router.navigate([prefix + '/' + this.progressSteps[idx + 1].route]);
        }
    };
    /*
    //KPS Back button was removed from registration process so this code is no longer needed
    back() {
      let url;
  
      // Find current index of URL
      let idx = this.progressSteps.findIndex( x => {
        return this.router.url.endsWith( x.route ); } );
  
      // Case were route is blank
      if ( -1 === idx ) {
        idx = 0;
      }
  
      // Navigate previous page
        // Get URL prefix
        const idxEndPrefix = this.router.url.lastIndexOf( '/' );
        const prefix = (idxEndPrefix === 0 ) ? this.router.url : this.router.url.slice( 0 , idxEndPrefix );
  
        this.router.navigate( [prefix + '/' + this.progressSteps[idx - 1].route ] );
    }
    */
    RegistrationContainerComponent.prototype.submit = function () {
        var url = '/register/registration-complete';
        if (this.registrant.pairingCode) {
            url = 'register/id-proofing';
        }
        this.router.navigate([url]);
    };
    RegistrationContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'prime-registration-container',
            template: __webpack_require__(/*! ./registration-container.component.html */ "./src/app/modules/registration/components/registration-container/registration-container.component.html"),
            styles: [__webpack_require__(/*! ./registration-container.component.scss */ "./src/app/modules/registration/components/registration-container/registration-container.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_prime_data_service__WEBPACK_IMPORTED_MODULE_4__["PrimeDataService"]])
    ], RegistrationContainerComponent);
    return RegistrationContainerComponent;
}());



/***/ }),

/***/ "./src/app/modules/registration/pages/bcsc-login/bcsc-login.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/registration/pages/bcsc-login/bcsc-login.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<prime-alert type='danger'>\n  Please note this screen is an example of the BC Services Card Identity Proofing and Authentication online services.\n  BC Services Card allows card holders to acquire an electronic credential through an online process. This credential\n  can be used to access Province of BC online services. For the purpose of this prototype the BC Services Card process\n  will not be presented. For more information please visit:\n  <a href=\"https://www2.gov.bc.ca/gov/content/governments/services-for-government/information-management-technology/identity-and-authentication-services/bc-services-card-authentication-service\">https://www2.gov.bc.ca/gov/content/governments/services-for-government/information-management-technology/identity-and-authentication-services/bc-services-card-authentication-service</a>\n\n</prime-alert>\n\n  <img class=\"img-responsive\" src=\"assets/bcsc_login_page.png\" alt=\"BC Services Card Login Page\">\n  <!-- <h3>1. Open the BC Services Card app on your mobile device</h3>\n  <h3>2. Choose to pair with another device and enter this pairing code. It's only used once, you don't need to remember it.<p></p>\n  <h3>3. Return to this website to enter pairing code and continue.</h3>\n\n  <form>\n    <div>\n      <label class=\"has-float-label\">\n        <input type=\"text\" class=\"form-control prime-input-large\" id=\"regLastName\" name=\"regPairingCode\" [ngModel]=\"registrant.pairingCode\" (ngModelChange)='onPairingCode($event)' placeholder=\" \">\n        <span>Pairing Code</span>\n      </label>\n    </div> -->\n    <div class=\"card-footer d-flex justify-content-between\">\n      <button type=\"button\"\n              class=\"h-25 btn btn-primary btn-lg btn-block\"\n              (click)=\"continue()\">Continue</button>\n    </div>\n  <!-- </form> -->\n"

/***/ }),

/***/ "./src/app/modules/registration/pages/bcsc-login/bcsc-login.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/registration/pages/bcsc-login/bcsc-login.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/registration/pages/bcsc-login/bcsc-login.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/registration/pages/bcsc-login/bcsc-login.component.ts ***!
  \*******************************************************************************/
/*! exports provided: BcscLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BcscLoginComponent", function() { return BcscLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_prime_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/prime-data.service */ "./src/app/services/prime-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BcscLoginComponent = /** @class */ (function () {
    function BcscLoginComponent(router, primeDataService) {
        this.router = router;
        this.primeDataService = primeDataService;
    }
    BcscLoginComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(BcscLoginComponent.prototype, "registrant", {
        get: function () {
            return this.primeDataService.user;
        },
        enumerable: true,
        configurable: true
    });
    BcscLoginComponent.prototype.onPairingCode = function (code) {
        // If user sets pairing code, we pull up dummy data from a generated user
        // This is us simulating getting data from a backend
        this.primeDataService.user = this.primeDataService.people[0];
        this.primeDataService.user.organizationAccess = [];
        this.primeDataService.user.phone = undefined;
        this.primeDataService.user.phoneExtension = undefined;
        this.primeDataService.user.email = undefined;
        this.primeDataService.user.pairingCode = code;
    };
    /**
     * Returns the URL with appropriate prefix
     * @param {string} route
     * @returns {string}
     */
    BcscLoginComponent.prototype.getRoute = function (route) {
        var idx = this.router.url.lastIndexOf('/');
        var prefix = this.router.url.slice(0, idx + 1);
        return prefix + route;
    };
    BcscLoginComponent.prototype.continue = function () {
        // Simulate a pairingCode has been added, as that's how we consider BCSC to be completed
        this.onPairingCode('123');
        this.router.navigate(['/register/profile']);
    };
    BcscLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'prime-bcsc-login',
            template: __webpack_require__(/*! ./bcsc-login.component.html */ "./src/app/modules/registration/pages/bcsc-login/bcsc-login.component.html"),
            styles: [__webpack_require__(/*! ./bcsc-login.component.scss */ "./src/app/modules/registration/pages/bcsc-login/bcsc-login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_prime_data_service__WEBPACK_IMPORTED_MODULE_1__["PrimeDataService"]])
    ], BcscLoginComponent);
    return BcscLoginComponent;
}());



/***/ }),

/***/ "./src/app/modules/registration/pages/complete/reg-complete.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/registration/pages/complete/reg-complete.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<prime-page-framework>\n\n  <h2 id=\"regInfo\">Account Created Successfully</h2>\n  <!--\n  <div>\n    <label class=\"has-float-label\">\n      <input type=\"text\" class=\"form-control prime-input-large\" id=\"regCompleteRegID\" name=\"regCompleteRegID\" [ngModel]=\"registrant.primeUserId\" placeholder=\" \" disabled>\n      <span>User ID</span>\n    </label>\n  </div>\n  -->\n  Your registration account has been created successfully. Your User ID is <b>{{registrant.primeUserId}}</b>\n\n\n  <h2 id='contactInfo'>Complete Identity Proofing</h2>\n  Please log in to complete identity proofing. This is required for you to finish the registration process and obtain a Ministry of Health login credential.\n  <form >\n    <div>\n      <label class=\"has-float-label\">\n        <input type=\"text\" class=\"form-control prime-input-large\" id=\"regCompleteUserID\" name=\"regCompleteUserID\" [(ngModel)]=\"registrant.primeUserId\" [disabled]=\"true\" placeholder=\" \">\n        <span>User ID</span>\n      </label>\n\n      <label class=\"has-float-label\">\n        <input type=\"password\" class=\"form-control prime-input-large\" id=\"regCompletePW\" name=\"regCompletePW\" placeholder=\" \">\n        <span>Password</span>\n      </label>\n      <prime-reg-login-mfa>\n      </prime-reg-login-mfa>\n    </div>\n  </form>\n</prime-page-framework>\n\n"

/***/ }),

/***/ "./src/app/modules/registration/pages/complete/reg-complete.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/registration/pages/complete/reg-complete.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/registration/pages/complete/reg-complete.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/registration/pages/complete/reg-complete.component.ts ***!
  \*******************************************************************************/
/*! exports provided: RegCompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegCompleteComponent", function() { return RegCompleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_prime_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/prime-data.service */ "./src/app/services/prime-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegCompleteComponent = /** @class */ (function () {
    function RegCompleteComponent(primeDataService) {
        this.primeDataService = primeDataService;
    }
    RegCompleteComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(RegCompleteComponent.prototype, "registrant", {
        get: function () {
            return this.primeDataService.user;
        },
        enumerable: true,
        configurable: true
    });
    RegCompleteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'prime-complete',
            template: __webpack_require__(/*! ./reg-complete.component.html */ "./src/app/modules/registration/pages/complete/reg-complete.component.html"),
            styles: [__webpack_require__(/*! ./reg-complete.component.scss */ "./src/app/modules/registration/pages/complete/reg-complete.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_prime_data_service__WEBPACK_IMPORTED_MODULE_1__["PrimeDataService"]])
    ], RegCompleteComponent);
    return RegCompleteComponent;
}());



/***/ }),

/***/ "./src/app/modules/registration/pages/document-upload/document-upload.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/registration/pages/document-upload/document-upload.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<prime-page-framework>\n  <h2 class='prime-title' id=\"regDocUp\">Identity Documents</h2>\n  <div>Prior to identity-proofing, please upload the front and back of a valid government-issued photo ID.\n  </div>\n\n\n  <div class=\"row mt-4\">\n    <div class=\"col-6 mt-4\">\n      <div class=''>\n        <span>\n          <input type=\"checkbox\" id=\"dl\" name=\"dl\" [(ngModel)]=\"registrant.hasDriversLicense\"/>\n          <label for=\"dl\">Driver's Licence</label>\n        </span>\n        <prime-datepicker *ngIf='registrant.hasDriversLicense'\n                          [(date)]='registrant.driverLicenseExpiry'\n                          id=\"dlExpiry\"\n                          name=\"dlExpiry\"\n                          placeholder=\" \"\n                          dateFormat=\"yyyy/mm/dd\"\n                          labelText=\"Licence Expiry\"\n                          class=''\n                          tabindex=\"1\"></prime-datepicker>\n\n\n      </div>\n\n      <div class=''>\n        <input type=\"checkbox\" id=\"passport\" name=\"passport\" [(ngModel)]=\"registrant.hasPassport\"/>\n        <label for=\"passport\">Passport</label>\n        <prime-datepicker *ngIf='registrant.hasPassport'\n                          [(date)]='registrant.passportExpiry'\n                          id=\"passportExpiry\"\n                          name=\"passportExpiry\"\n                          placeholder=\" \"\n                          dateFormat=\"yyyy/mm/dd\"\n                          labelText=\"Licence Expiry\"\n                          class=''\n                          tabindex=\"1\"></prime-datepicker>\n      </div>\n    </div>\n    <div class=\"col-6\">\n      <div class=\"d-flex justify-content-start align-items-center\">\n        <i class=\"fa fa-upload fa-2x mx-2\" aria-label=\"Delete\"></i>\n        <h2>Upload your documents</h2>\n      </div>\n      <span class=\"note\">Scan the document, or take a photo of it. Make sure that it's:</span>\n      <ul class=\"note\">\n        <li>The entire document, from corner to corner</li>\n        <li>At least 1000 pixels wide x 1500 pixels tall</li>\n        <li>Rotated correctly (not upside down or sideways)</li>\n        <li>In focus and easy to read</li>\n        <li>A JPG, PNG, GIF, BMP or PDF file</li>\n      </ul>\n      <prime-file-uploader #fileUploader  [images]=\"registrant.images\"  (onAddDocument)=\"addDocument($event)\" >\n        <span class=\"note\">Please upload required supporting  documents</span>\n      </prime-file-uploader>\n    </div>\n  </div>\n</prime-page-framework>\n"

/***/ }),

/***/ "./src/app/modules/registration/pages/document-upload/document-upload.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/registration/pages/document-upload/document-upload.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/registration/pages/document-upload/document-upload.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/registration/pages/document-upload/document-upload.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: DocumentUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentUploadComponent", function() { return DocumentUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_prime_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/prime-data.service */ "./src/app/services/prime-data.service.ts");
/* harmony import */ var _core_file_uploader_file_uploader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/file-uploader/file-uploader.component */ "./src/app/core/file-uploader/file-uploader.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DocumentUploadComponent = /** @class */ (function () {
    function DocumentUploadComponent(primeDataService) {
        this.primeDataService = primeDataService;
    }
    DocumentUploadComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(DocumentUploadComponent.prototype, "registrant", {
        get: function () {
            return this.primeDataService.user;
        },
        enumerable: true,
        configurable: true
    });
    DocumentUploadComponent.prototype.addDocument = function (evt) {
        console.log('------addDocument-----');
        this.primeDataService.user.images = this.primeDataService.user.images.concat(evt);
        this.fileUploader.forceRender();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('fileUploader'),
        __metadata("design:type", _core_file_uploader_file_uploader_component__WEBPACK_IMPORTED_MODULE_2__["FileUploaderComponent"])
    ], DocumentUploadComponent.prototype, "fileUploader", void 0);
    DocumentUploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'prime-document-upload',
            template: __webpack_require__(/*! ./document-upload.component.html */ "./src/app/modules/registration/pages/document-upload/document-upload.component.html"),
            styles: [__webpack_require__(/*! ./document-upload.component.scss */ "./src/app/modules/registration/pages/document-upload/document-upload.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_prime_data_service__WEBPACK_IMPORTED_MODULE_1__["PrimeDataService"]])
    ], DocumentUploadComponent);
    return DocumentUploadComponent;
}());



/***/ }),

/***/ "./src/app/modules/registration/pages/id-proofing/id-proofing.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/registration/pages/id-proofing/id-proofing.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<prime-alert *ngIf=\"!usedBCSC\">\n  Account: Please complete the \"Identity Proofing\" video chat to complete your registration.\n</prime-alert>\n\n<section class='dashboard-cards row'>\n  <div class=\"col\">\n    <div class=\"card\">\n      <div class=\"card-header d-flex justify-content-between\">\n        Profile\n        <a [routerLink]=\"getRoute( 'profile' )\">\n          <i class=\"fa fa-edit fa-2x text-muted\"></i>\n        </a>\n      </div>\n      <div class=\"card-body d-flex justify-content-between\">\n        <div class=\"photocol\" *ngIf=\"usedBCSC\">\n          <img class=\"photo\" src=\"assets/photoPlaceholder.png\" alt=\"Generic placeholder image\">\n        </div>\n        <div class=\"appcol\">\n          <p>{{registrant.name}}</p>\n          <p>{{registrant.phone}}</p>\n          <p>{{registrant.email}}</p>\n        </div>\n        <i class=\"fa fa-check-circle text-success fa-3x pull-right\" aria-hidden=\"true\"></i>\n      </div>\n    </div>\n  </div>\n  <div class=\"col\" *ngIf=\"!usedBCSC\">\n    <div class=\"card\">\n      <div class=\"card-header d-flex justify-content-between\">\n        Document\n        <a [routerLink]=\"getRoute( 'document-upload' )\">\n          <i class=\"fa fa-edit fa-2x text-muted\"></i>\n        </a>\n      </div>\n      <div class=\"card-body d-flex justify-content-between\">\n        <div class=\"photocol\">\n          <img class=\"photo\" src=\"assets/photoPlaceholder.png\" alt=\"Generic placeholder image\">\n        </div>\n        <div class=\"appcol\">\n          <p *ngIf=\"registrant.hasDriversLicense\">Driver's Licence</p>\n          <p *ngIf=\"registrant.hasPassport\">Passport</p>\n        </div>\n        <i class=\"fa fa-check-circle text-success fa-3x pull-right\" aria-hidden=\"true\"></i>\n      </div>\n    </div>\n  </div>\n  <div class=\"col\">\n    <div class=\"card\">\n      <div class=\"card-header d-flex justify-content-between\">\n        Security\n        <a [routerLink]=\"getRoute( 'security' )\">\n          <i class=\"fa fa-edit fa-2x text-muted\"></i>\n        </a>\n      </div>\n      <div class=\"card-body d-flex justify-content-between\">\n        <div class=\"appcol\">\n          <p>Security Questions</p>\n          <p *ngIf=\"!usedBCSC\">Multi-Factor Authentication Methods</p>\n        </div>\n        <i class=\"fa fa-check-circle text-success fa-3x pull-right\" aria-hidden=\"true\"></i>\n     </div>\n    </div>\n  </div>\n</section>\n\n<div>\n\n  <h2>Identity Proofing</h2>\n  <hr>\n  <div class=\"container\" style=\"border:1px solid lightgrey\">\n    <div class=\"leftpane\">\n      <img style=\"padding:5px;\" src=\"assets/live_video_chat.png\" alt=\"Generic placeholder image\">\n    </div>\n    <div class=\"rightpane\" *ngIf=\"!usedBCSC; else hasBSCSNoIDProofing\">\n      <label>\n        <!-- Please complete Identity Proofing by verifying your account information with a PRIME agent. Once you are ready, start the live video chat. -->\n        Please complete Identity Proofing by verifying your account information with a PRIME agent. Once you are ready, start the live video chat.\n      </label>\n      <ul>\n        <li>Turn webcam on</li>\n        <li>Check your audio</li>\n        <li>Start live video chat when you're ready</li>\n      </ul>\n    </div>\n    <div class='text-center'>\n      <i *ngIf=\"!usedBCSC\" class=\"fa fa-exclamation-triangle text-warning fa-3x\" aria-hidden=\"true\"></i>\n      <i *ngIf=\"usedBCSC\" class=\"fa fa-check-circle text-success fa-3x\" aria-hidden=\"true\"></i>\n    </div>\n    <div >\n      <button *ngIf=\"!usedBCSC\" type=\"button\" class=\"btn btn-primary mx-2\">Start Live Video Chat</button>\n    </div>\n  </div>\n\n</div>\n\n<ng-template #hasBSCSNoIDProofing>\n  <p class=\"label mt-4\">Identity Proofing has been completed as part of the BC Services Card setup.</p>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/modules/registration/pages/id-proofing/id-proofing.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/registration/pages/id-proofing/id-proofing.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  height: 100%; }\n\n.photocol {\n  height: 70%;\n  width: 25%; }\n\n.photo {\n  width: 95%;\n  height: 80%; }\n\n.appcol {\n  width: 65%; }\n\n.container {\n  overflow: hidden;\n  position: relative;\n  width: 100%; }\n\n.leftpane {\n  width: 65%;\n  height: 100%;\n  float: left;\n  border-collapse: collapse; }\n\n.rightpane {\n  width: 35%;\n  height: 100%;\n  position: relative;\n  float: right;\n  border-collapse: collapse; }\n"

/***/ }),

/***/ "./src/app/modules/registration/pages/id-proofing/id-proofing.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/registration/pages/id-proofing/id-proofing.component.ts ***!
  \*********************************************************************************/
/*! exports provided: IdProofingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdProofingComponent", function() { return IdProofingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_prime_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/prime-data.service */ "./src/app/services/prime-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IdProofingComponent = /** @class */ (function () {
    function IdProofingComponent(router, primeDataService) {
        this.router = router;
        this.primeDataService = primeDataService;
    }
    IdProofingComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(IdProofingComponent.prototype, "registrant", {
        get: function () {
            return this.primeDataService.user;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the URL with appropriate prefix
     * @param {string} route
     * @returns {string}
     */
    IdProofingComponent.prototype.getRoute = function (route) {
        var idx = this.router.url.lastIndexOf('/');
        var prefix = this.router.url.slice(0, idx + 1);
        return prefix + route;
    };
    Object.defineProperty(IdProofingComponent.prototype, "usedBCSC", {
        get: function () {
            return !!this.registrant.pairingCode;
        },
        enumerable: true,
        configurable: true
    });
    IdProofingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'prime-dashboard',
            template: __webpack_require__(/*! ./id-proofing.component.html */ "./src/app/modules/registration/pages/id-proofing/id-proofing.component.html"),
            styles: [__webpack_require__(/*! ./id-proofing.component.scss */ "./src/app/modules/registration/pages/id-proofing/id-proofing.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_prime_data_service__WEBPACK_IMPORTED_MODULE_2__["PrimeDataService"]])
    ], IdProofingComponent);
    return IdProofingComponent;
}());



/***/ }),

/***/ "./src/app/modules/registration/pages/new-account/new-account.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/registration/pages/new-account/new-account.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<prime-collection-notice></prime-collection-notice>\n\n<div class=\"p-md-2\">\n<h1>Application Guidance</h1>\n  There are two ways to obtain login credentials for PRIME.\n  If you have a BC Services Card, register with your BC Services\n  Card. Otherwise, register with the Ministry of Health\n</div>\n\n\n<section class='dashboard-cards row'>\n  <div class=\"col\">\n    <div class=\"card\">\n      <div class=\"card-header d-flex justify-content-between\">\n        <p class=\"card-text\">BC Services Card</p>\n      </div>\n      <div class=\"card-body d-flex justify-content-between\">\n        <div class=\"card-text\">If you have BC Services Card please start your registration process here.</div>\n\n          <img class=\"img-responsive\" src=\"assets/bc_services_card.png\" alt=\"BC Services Card Image\">\n\n      </div>\n      <div class=\"card-footer d-flex justify-content-between\">\n        <button type=\"button\"\n                class=\"h-25 btn btn-primary btn-lg btn-block\"\n                (click)=\"bcscLogin()\">{{'BCSC Register'}}</button>\n      </div>\n    </div>\n  </div>\n  <div class=\"col\">\n    <div class=\"card\">\n      <div class=\"card-header d-flex justify-content-between\">\n        BC Ministry of Health\n      </div>\n      <div class=\"card-body d-flex justify-content-between\">\n        <div class=\"card-text\">For standard registration please start your registration here.</div>\n      </div>\n      <div class=\"card-footer d-flex justify-content-between\">\n        <button type=\"button\"\n                class=\"h-25 btn btn-primary btn-lg btn-block\"\n                (click)=\"continueStandardReg()\">{{'Register'}}</button>\n      </div>\n    </div>\n  </div>\n</section>\n\n\n"

/***/ }),

/***/ "./src/app/modules/registration/pages/new-account/new-account.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/registration/pages/new-account/new-account.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  height: 100%; }\n"

/***/ }),

/***/ "./src/app/modules/registration/pages/new-account/new-account.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/registration/pages/new-account/new-account.component.ts ***!
  \*********************************************************************************/
/*! exports provided: NewAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewAccountComponent", function() { return NewAccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_prime_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/prime-data.service */ "./src/app/services/prime-data.service.ts");
/* harmony import */ var _models_person_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models/person.model */ "./src/app/models/person.model.ts");
/* harmony import */ var _models_addresses_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../models/addresses.model */ "./src/app/models/addresses.model.ts");
/* harmony import */ var _services_logger_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/logger.service */ "./src/app/services/logger.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NewAccountComponent = /** @class */ (function () {
    function NewAccountComponent(router, primeDataService, logger) {
        this.router = router;
        this.primeDataService = primeDataService;
        this.logger = logger;
    }
    NewAccountComponent.prototype.ngOnInit = function () {
    };
    /**
     *
     */
    NewAccountComponent.prototype.continueStandardReg = function () {
        // Reset the user to a non BCSC user
        this.primeDataService.user = new _models_person_model__WEBPACK_IMPORTED_MODULE_3__["Person"]();
        this.primeDataService.user.address = new _models_addresses_model__WEBPACK_IMPORTED_MODULE_4__["Address"]();
        this.primeDataService.user.pairingCode = undefined;
        // NOTE - This new user is NOT in the user list for provisoiner as it's not in dataService.people
        // Navigate next page
        this.logger.log({ event: 'standardReg' });
        this.router.navigate([this.getUrlPrefix(this.router.url) + '/' + 'profile']);
    };
    /**
     *
     */
    NewAccountComponent.prototype.continueIdProofing = function () {
        // Navigate next page
        this.router.navigate([this.getUrlPrefix(this.router.url) + '/' + 'id-proofing']);
    };
    NewAccountComponent.prototype.bcscLogin = function () {
        // Navigate to the bcsc registration
        this.logger.log({ event: 'bcscReg' });
        this.router.navigate([this.getUrlPrefix(this.router.url) + '/' + 'bcsc-login']);
    };
    /**
     *
     * @param {string} url
     * @returns {string}
     */
    NewAccountComponent.prototype.getUrlPrefix = function (url) {
        // Get URL prefix
        var idxEndPrefix = this.router.url.lastIndexOf('/');
        return (idxEndPrefix === 0) ? this.router.url : this.router.url.slice(0, idxEndPrefix);
    };
    NewAccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'prime-new-account',
            template: __webpack_require__(/*! ./new-account.component.html */ "./src/app/modules/registration/pages/new-account/new-account.component.html"),
            styles: [__webpack_require__(/*! ./new-account.component.scss */ "./src/app/modules/registration/pages/new-account/new-account.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_prime_data_service__WEBPACK_IMPORTED_MODULE_2__["PrimeDataService"], _services_logger_service__WEBPACK_IMPORTED_MODULE_5__["Logger"]])
    ], NewAccountComponent);
    return NewAccountComponent;
}());



/***/ }),

/***/ "./src/app/modules/registration/pages/profile/profile.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/modules/registration/pages/profile/profile.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<prime-page-framework>\n\n  <h2 class='prime-title' id=\"regInfo\">Registration Information</h2>\n  <div *ngIf=\"!usedBCSC\">Enter your identity information exactly as it appears on any valid government-issued photo ID.</div>\n  <div *ngIf=\"usedBCSC\">Your identity information comes from your BC Services Card.</div>\n\n  <form>\n    <div>\n      <label class=\"has-float-label\">\n        <input type=\"text\" class=\"form-control prime-input-large\" id=\"regLastName\" name=\"regLastName\" [(ngModel)]=\"registrant.lastName\" placeholder=\" \" [disabled]=\"usedBCSC\">\n        <span>Last Name</span>\n      </label>\n\n      <label class=\"has-float-label\">\n        <input type=\"text\" class=\"form-control prime-input-large\" id=\"regMiddleName\" name=\"regMiddleName\" [(ngModel)]=\"registrant.middleName\" placeholder=\" \" [disabled]=\"usedBCSC\">\n        <span>Middle Name</span>\n      </label>\n\n      <label class=\"has-float-label\">\n        <input type=\"text\" class=\"form-control prime-input-large\" id=\"regFirstName\" name=\"regFirstName\" [(ngModel)]=\"registrant.firstName\" placeholder=\" \" [disabled]=\"usedBCSC\">\n        <span>First Name</span>\n      </label>\n\n      <div *ngIf=\"!usedBCSC; else dobReadOnly\" class=\"applicant-row--item prime-input-large\">\n        <prime-datepicker  dateFormat=\"yyyy/mm/dd\" [(date)]=\"registrant.dateOfBirth\" labelText=\"Date of Birth\" ></prime-datepicker>\n      </div>\n\n      <ng-template #dobReadOnly>\n        <label class=\"has-float-label\">\n          <input type=\"text\" class=\"form-control prime-input-large\" id=\"dob\" name=\"dob\" disabled [value]=\"registrant.dateOfBirthShort\">\n          <span>Date of Birth</span>\n        </label>\n      </ng-template>\n\n\n      <label class=\"has-float-label\">\n        <input type=\"text\" class=\"form-control prime-input-large\" id=\"regAddress\" name=\"regAddress\" [(ngModel)]=\"registrant.address.street\" placeholder=\" \" [disabled]=\"usedBCSC\">\n        <span>Address</span>\n      </label>\n\n      <label class=\"has-float-label\">\n        <input type=\"text\" class=\"form-control prime-input-large\" id=\"regCity\" name=\"regCity\" [(ngModel)]=\"registrant.address.city\" placeholder=\" \" [disabled]=\"usedBCSC\">\n        <span>City</span>\n      </label>\n\n      <label class=\"has-float-label\">\n        <input type=\"text\" class=\"form-control prime-input-large\" id=\"regProvince\" name=\"regProvince\" [(ngModel)]=\"registrant.address.province\" placeholder=\" \" [disabled]=\"usedBCSC\">\n        <span>Province</span>\n      </label>\n\n      <!-- For some reason [disabled] is broken on postal code, this is a quick little workaround. -->\n      <prime-postal-code *ngIf='usedBCSC' [(value)]=\"registrant.address.postal\" disabled></prime-postal-code>\n      <prime-postal-code *ngIf='!usedBCSC' [(value)]=\"registrant.address.postal\"></prime-postal-code>\n\n      <label class=\"has-float-label\">\n        <input type=\"text\" class=\"form-control prime-input-large\" id=\"regCountry\" name=\"regCountry\" [(ngModel)]=\"registrant.address.country\" placeholder=\" \" [disabled]=\"usedBCSC\">\n        <span>Country</span>\n      </label>\n    </div>\n  </form>\n\n  <h2 class='prime-title' id=\"prefName\">Preferred Name (optional)</h2>\n  If you have a name that is different than your legal name that people know you by, enter your full preferred name\n  <form>\n\n    <div>\n\n      <div class=\"has-float-label\">\n        <input type=\"text\" class=\"form-control prime-input-large\" id=\"prefLastName\" name=\"prefLastName\" [(ngModel)]=\"registrant.preferLastName\" placeholder=\" \">\n        <label for=\"prefLastName\">Preferred Last Name</label>\n      </div>\n\n      <div class=\"has-float-label\">\n        <input type=\"text\" class=\"form-control prime-input-large\" id=\"prefMiddleName\" name=\"prefMiddleName\" [(ngModel)]=\"registrant.preferMiddleName\" placeholder=\" \">\n        <label for=\"prefMiddleName\">Preferred Middle Name</label>\n      </div>\n\n      <div class=\"has-float-label\">\n        <input type=\"text\" class=\"form-control prime-input-large\" id=\"prefFirstName\" name=\"prefFirstName\" [(ngModel)]=\"registrant.preferFirstName\" placeholder=\" \">\n        <label for=\"prefFirstName\">Preferred First Name</label>\n      </div>\n\n    </div>\n\n  </form>\n\n  <h2 class='prime-title' id='contactInfo'>Contact Information</h2>\n  Enter your personal phone number and email.\n  <form>\n    <div>\n      <label class=\"has-float-label\">\n        <input type=\"text\" class=\"form-control prime-input-large\" id=\"phone\" name=\"phone\" [(ngModel)]=\"registrant.phone\" placeholder=\" \" [textMask]='{mask: getPhoneMask()}'>\n        <span>Phone</span>\n      </label>\n\n      <label class=\"has-float-label\">\n        <input type=\"text\" class=\"form-control prime-input-large\" id=\"phoneExt\" name=\"phoneExt\" [(ngModel)]=\"registrant.phoneExtension\" placeholder=\" \">\n        <span>Extension Number (optional)</span>\n      </label>\n\n      <label class=\"has-float-label\">\n        <input type=\"text\" class=\"form-control prime-input-large\" id=\"email\" name=\"email\" [(ngModel)]=\"registrant.email\" placeholder=\" \">\n        <span>Email</span>\n      </label>\n    </div>\n  </form>\n</prime-page-framework>\n"

/***/ }),

/***/ "./src/app/modules/registration/pages/profile/profile.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/modules/registration/pages/profile/profile.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/registration/pages/profile/profile.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/registration/pages/profile/profile.component.ts ***!
  \*************************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_prime_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/prime-data.service */ "./src/app/services/prime-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NUMBER = /\d/;
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(primeDataService) {
        this.primeDataService = primeDataService;
        this.phoneMask = ['(', NUMBER, NUMBER, NUMBER, ')', '-', NUMBER, NUMBER, NUMBER, '-', NUMBER, NUMBER, NUMBER, NUMBER];
        this.hasChanged = false;
        this.hasEverChanged = false;
        /** Did the user use a BC Services Card to register before? If so, some info is read-only. */
        this.usedBCSC = false;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.usedBCSC = !!this.registrant.pairingCode;
    };
    Object.defineProperty(ProfileComponent.prototype, "registrant", {
        get: function () {
            return this.primeDataService.user;
        },
        enumerable: true,
        configurable: true
    });
    ProfileComponent.prototype.getPhoneMask = function () {
        if (!this.registrant.hasInternationalPhoneNumber) {
            // return  { mask: this.phoneMask };
            return this.phoneMask;
        }
        return false;
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'prime-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/modules/registration/pages/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/modules/registration/pages/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_prime_data_service__WEBPACK_IMPORTED_MODULE_1__["PrimeDataService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/modules/registration/pages/security/security.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/registration/pages/security/security.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<prime-page-framework>\n\n  <ng-container *ngIf=\"!usedBCSC\">\n    <h2 class='prime-title' id=\"secPrimeAccount\">PRIME Account</h2>\n    <form>\n      <div>\n        <label class=\"has-float-label\">\n          <input type=\"text\" class=\"form-control prime-input-large\" id=\"secUserID\" name=\"secUserID\" [(ngModel)]=\"registrant.primeUserId\" placeholder=\" \">\n          <span>User ID</span>\n        </label>\n\n        <label class=\"has-float-label\">\n          <input type=\"password\" class=\"form-control prime-input-large\" id=\"secPwd\" name=\"secPwd\" placeholder=\" \">\n          <span>New Password</span>\n        </label>\n\n        <label class=\"has-float-label\">\n          <input type=\"password\" class=\"form-control prime-input-large\" id=\"secPwdConfirm\" name=\"secPwdConfirm\" placeholder=\" \">\n          <span>Confirm Password</span>\n        </label>\n      </div>\n    </form>\n  </ng-container>\n  <h2 class='prime-title' id=\"secStep1\">Security Questions</h2>\n    <form>\n      <div class=\"prime-input-large\">\n        <label class=\"has-float-label\">\n          <select class=\"form-control\" name=\"secQ1\" [(ngModel)]=\"registrant.securityQuestion1\">\n            <option value=\"pet\">What is the name of your first pet?</option>\n            <option value=\"teacher\">What was the last name of your favourite teacher?</option>\n            <option value=\"town\">What town was your mother born in?</option>\n            <option value=\"book\">What is your favourite book?</option>\n            <option value=\"spouse\">Where did you meet your spouse?</option>\n          </select>\n          <span>Security Question 1</span>\n        </label>\n      </div>\n      <label class=\"has-float-label\">\n        <input type=\"text\" class=\"form-control prime-input-large\" id=\"secQ1Answer\" name=\"secQ1Answer\" [(ngModel)]=\"registrant.securityAnswer1\">\n        <span>Security Question 1 Answer</span>\n      </label>\n\n      <hr class='invisible'>\n\n      <div class=\"prime-input-large\">\n        <label class=\"has-float-label\">\n          <select class=\"form-control\" name=\"secQ2\" [(ngModel)]=\"registrant.securityQuestion2\">\n            <option value=\"pet\">What is the name of your first pet?</option>\n            <option value=\"teacher\">What was the last name of your favourite teacher?</option>\n            <option value=\"town\">What town was your mother born in?</option>\n            <option value=\"book\">What is your favourite book?</option>\n            <option value=\"spouse\">Where did you meet your spouse?</option>\n          </select>\n          <span>Security Question 2</span>\n        </label>\n      </div>\n      <label class=\"has-float-label\">\n        <input type=\"text\" class=\"form-control prime-input-large\" id=\"secQ2Answer\" name=\"secQ2Answer\" [(ngModel)]=\"registrant.securityAnswer2\">\n        <span>Security Question 2 Answer</span>\n      </label>\n\n      <hr class='invisible'>\n\n      <div class=\"prime-input-large\">\n        <label class=\"has-float-label\">\n          <select class=\"form-control\" name=\"secQ3\" [(ngModel)]=\"registrant.securityQuestion3\">\n            <option value=\"pet\">What is the name of your first pet?</option>\n            <option value=\"teacher\">What was the last name of your favourite teacher?</option>\n            <option value=\"town\">What town was your mother born in?</option>\n            <option value=\"book\">What is your favourite book?</option>\n            <option value=\"spouse\">Where did you meet your spouse?</option>\n          </select>\n          <span>Security Question 3</span>\n        </label>\n      </div>\n      <label class=\"has-float-label\">\n        <input type=\"text\" class=\"form-control prime-input-large\" id=\"secQ3Answer\" name=\"secQ3Answer\" [(ngModel)]=\"registrant.securityAnswer3\">\n        <span>Security Question 3 Answer</span>\n      </label>\n    </form>\n    <ng-container *ngIf=\"!usedBCSC\">\n      <h2 class='prime-title' id=\"secStep2\">Multi-Factor Authentication Methods</h2>\n      <span>Secondary Security (please select at least one)</span>\n      <form>\n        <div>\n          <input type=\"checkbox\" id=\"secSms\" name=\"secSms\" [(ngModel)]=\"registrant.mfaOptionSMS\"/>\n          <label for=\"secSms\">SMS/Text</label>\n          <label class=\"has-float-label\">\n            <input type=\"text\" [textMask]=\"{mask: getPhoneMask()}\" class=\"form-control prime-input-large\" id=\"secPhone\" name=\"secPhone\" [(ngModel)]=\"registrant.mfaOptionSMSPhone\" placeholder=\" \">\n            <span>Phone</span>\n          </label>\n        </div>\n\n        <hr>\n        <div>\n          <input type=\"checkbox\" id=\"secFob\" name=\"secFob\" [(ngModel)]=\"registrant.mfaOptionKey\"/>\n          <label for=\"secFob\">Physical Security Key</label>\n          <label class=\"has-float-label\">\n            <input type=\"text\" class=\"form-control prime-input-large\" id=\"secFobInstr\" name=\"secFobInstr\" placeholder=\" \" disabled>\n            <span>Instructions to follow</span>\n          </label>\n        </div>\n\n        <hr>\n        <div>\n          <input type=\"checkbox\" id=\"secApp\" name=\"secApp\" [(ngModel)]=\"registrant.mfaOptionApp\"/>\n          <label for=\"secApp\">Mobile App Authentication</label>\n        </div>\n        <img class=\"img-thumbnail\" src=\"assets/mobile_app_icon_android.png\" alt=\"Generic placeholder image\">\n        <img class=\"img-thumbnail\" src=\"assets/mobile_app_icon_apple.png\" alt=\"Generic placeholder image\">\n        <img class=\"img-thumbnail\" src=\"assets/mobile_app_icon_windows.png\" alt=\"Generic placeholder image\">\n      </form>\n      </ng-container>\n\n</prime-page-framework>\n"

/***/ }),

/***/ "./src/app/modules/registration/pages/security/security.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/registration/pages/security/security.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".leftpane {\n  width: 25%;\n  height: 40%;\n  float: left;\n  border-collapse: collapse; }\n\n.rightpane {\n  width: 75%;\n  height: 40%;\n  position: relative;\n  float: right;\n  border-collapse: collapse; }\n"

/***/ }),

/***/ "./src/app/modules/registration/pages/security/security.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/registration/pages/security/security.component.ts ***!
  \***************************************************************************/
/*! exports provided: SecurityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityComponent", function() { return SecurityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_prime_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/prime-data.service */ "./src/app/services/prime-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NUMBER = /\d/;
var SecurityComponent = /** @class */ (function () {
    function SecurityComponent(primeDataService) {
        this.primeDataService = primeDataService;
        this.phoneMask = ['(', NUMBER, NUMBER, NUMBER, ')', '-', NUMBER, NUMBER, NUMBER, '-', NUMBER, NUMBER, NUMBER, NUMBER];
    }
    SecurityComponent.prototype.ngOnInit = function () {
        this.registrant.securityQuestion1 = 'pet';
        this.registrant.securityQuestion2 = 'pet';
        this.registrant.securityQuestion3 = 'pet';
    };
    Object.defineProperty(SecurityComponent.prototype, "registrant", {
        get: function () {
            return this.primeDataService.user;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SecurityComponent.prototype, "usedBCSC", {
        get: function () {
            return !!this.registrant.pairingCode;
        },
        enumerable: true,
        configurable: true
    });
    SecurityComponent.prototype.getPhoneMask = function () {
        if (!this.registrant.hasInternationalPhoneNumber) {
            // return  { mask: this.phoneMask };
            return this.phoneMask;
        }
    };
    SecurityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'prime-security',
            template: __webpack_require__(/*! ./security.component.html */ "./src/app/modules/registration/pages/security/security.component.html"),
            styles: [__webpack_require__(/*! ./security.component.scss */ "./src/app/modules/registration/pages/security/security.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_prime_data_service__WEBPACK_IMPORTED_MODULE_1__["PrimeDataService"]])
    ], SecurityComponent);
    return SecurityComponent;
}());



/***/ }),

/***/ "./src/app/modules/registration/registration-page-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/registration/registration-page-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: pageRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageRoutes", function() { return pageRoutes; });
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/profile/profile.component */ "./src/app/modules/registration/pages/profile/profile.component.ts");
/* harmony import */ var _pages_document_upload_document_upload_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/document-upload/document-upload.component */ "./src/app/modules/registration/pages/document-upload/document-upload.component.ts");
/* harmony import */ var _pages_security_security_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/security/security.component */ "./src/app/modules/registration/pages/security/security.component.ts");



var pageRoutes = [
    {
        path: 'profile',
        component: _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_0__["ProfileComponent"],
    },
    {
        path: 'document-upload',
        component: _pages_document_upload_document_upload_component__WEBPACK_IMPORTED_MODULE_1__["DocumentUploadComponent"],
    },
    {
        path: 'security',
        component: _pages_security_security_component__WEBPACK_IMPORTED_MODULE_2__["SecurityComponent"]
    }
];


/***/ }),

/***/ "./src/app/modules/registration/registration-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/registration/registration-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: routes, RegistrationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationRoutingModule", function() { return RegistrationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_new_account_new_account_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/new-account/new-account.component */ "./src/app/modules/registration/pages/new-account/new-account.component.ts");
/* harmony import */ var _pages_id_proofing_id_proofing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/id-proofing/id-proofing.component */ "./src/app/modules/registration/pages/id-proofing/id-proofing.component.ts");
/* harmony import */ var _pages_complete_reg_complete_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/complete/reg-complete.component */ "./src/app/modules/registration/pages/complete/reg-complete.component.ts");
/* harmony import */ var _components_registration_container_registration_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/registration-container/registration-container.component */ "./src/app/modules/registration/components/registration-container/registration-container.component.ts");
/* harmony import */ var _registration_page_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registration-page-routing.module */ "./src/app/modules/registration/registration-page-routing.module.ts");
/* harmony import */ var _pages_bcsc_login_bcsc_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/bcsc-login/bcsc-login.component */ "./src/app/modules/registration/pages/bcsc-login/bcsc-login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: 'id-proofing',
        component: _pages_id_proofing_id_proofing_component__WEBPACK_IMPORTED_MODULE_3__["IdProofingComponent"],
    },
    {
        path: 'new-account',
        component: _pages_new_account_new_account_component__WEBPACK_IMPORTED_MODULE_2__["NewAccountComponent"],
    },
    {
        path: 'registration-complete',
        component: _pages_complete_reg_complete_component__WEBPACK_IMPORTED_MODULE_4__["RegCompleteComponent"]
    },
    {
        path: 'bcsc-login',
        component: _pages_bcsc_login_bcsc_login_component__WEBPACK_IMPORTED_MODULE_7__["BcscLoginComponent"]
    },
    {
        path: '',
        component: _components_registration_container_registration_container_component__WEBPACK_IMPORTED_MODULE_5__["RegistrationContainerComponent"],
        children: _registration_page_routing_module__WEBPACK_IMPORTED_MODULE_6__["pageRoutes"]
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    }
];
var RegistrationRoutingModule = /** @class */ (function () {
    function RegistrationRoutingModule() {
    }
    RegistrationRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RegistrationRoutingModule);
    return RegistrationRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/registration/registration.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/registration/registration.module.ts ***!
  \*************************************************************/
/*! exports provided: RegistrationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationModule", function() { return RegistrationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _registration_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registration-routing.module */ "./src/app/modules/registration/registration-routing.module.ts");
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/profile/profile.component */ "./src/app/modules/registration/pages/profile/profile.component.ts");
/* harmony import */ var _pages_document_upload_document_upload_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/document-upload/document-upload.component */ "./src/app/modules/registration/pages/document-upload/document-upload.component.ts");
/* harmony import */ var _pages_security_security_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/security/security.component */ "./src/app/modules/registration/pages/security/security.component.ts");
/* harmony import */ var _pages_new_account_new_account_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/new-account/new-account.component */ "./src/app/modules/registration/pages/new-account/new-account.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/core.module */ "./src/app/modules/core/core.module.ts");
/* harmony import */ var _pages_id_proofing_id_proofing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/id-proofing/id-proofing.component */ "./src/app/modules/registration/pages/id-proofing/id-proofing.component.ts");
/* harmony import */ var _pages_complete_reg_complete_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/complete/reg-complete.component */ "./src/app/modules/registration/pages/complete/reg-complete.component.ts");
/* harmony import */ var _components_registration_container_registration_container_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/registration-container/registration-container.component */ "./src/app/modules/registration/components/registration-container/registration-container.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_reg_login_mfa_reg_login_mfa_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/reg-login-mfa/reg-login-mfa.component */ "./src/app/modules/registration/components/reg-login-mfa/reg-login-mfa.component.ts");
/* harmony import */ var _components_collection_notice_collection_notice_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/collection-notice/collection-notice.component */ "./src/app/modules/registration/components/collection-notice/collection-notice.component.ts");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular2-text-mask */ "./node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _pages_bcsc_login_bcsc_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/bcsc-login/bcsc-login.component */ "./src/app/modules/registration/pages/bcsc-login/bcsc-login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var RegistrationModule = /** @class */ (function () {
    function RegistrationModule() {
    }
    RegistrationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _registration_routing_module__WEBPACK_IMPORTED_MODULE_2__["RegistrationRoutingModule"],
                angular2_text_mask__WEBPACK_IMPORTED_MODULE_14__["TextMaskModule"]
            ],
            declarations: [
                _pages_new_account_new_account_component__WEBPACK_IMPORTED_MODULE_6__["NewAccountComponent"],
                _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"],
                _pages_document_upload_document_upload_component__WEBPACK_IMPORTED_MODULE_4__["DocumentUploadComponent"],
                _pages_security_security_component__WEBPACK_IMPORTED_MODULE_5__["SecurityComponent"],
                _pages_id_proofing_id_proofing_component__WEBPACK_IMPORTED_MODULE_8__["IdProofingComponent"],
                _pages_complete_reg_complete_component__WEBPACK_IMPORTED_MODULE_9__["RegCompleteComponent"],
                _components_registration_container_registration_container_component__WEBPACK_IMPORTED_MODULE_10__["RegistrationContainerComponent"],
                _components_reg_login_mfa_reg_login_mfa_component__WEBPACK_IMPORTED_MODULE_12__["RegLoginMfaComponent"],
                _pages_bcsc_login_bcsc_login_component__WEBPACK_IMPORTED_MODULE_15__["BcscLoginComponent"],
                _components_collection_notice_collection_notice_component__WEBPACK_IMPORTED_MODULE_13__["CollectionNoticeComponent"]
            ]
        })
    ], RegistrationModule);
    return RegistrationModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-modules-registration-registration-module.js.map