(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-provisioner-provisioner-module~app-modules-verifier-verifier-module"],{

/***/ "./src/app/core/enrollment-list/enrollment-list.class.ts":
/*!***************************************************************!*\
  !*** ./src/app/core/enrollment-list/enrollment-list.class.ts ***!
  \***************************************************************/
/*! exports provided: defaultViewSelector, EnrollmentList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultViewSelector", function() { return defaultViewSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnrollmentList", function() { return EnrollmentList; });
/* harmony import */ var _base_base_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/base.class */ "./src/app/core/base/base.class.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Define for constant string
var defaultViewSelector = 'View All';
var EnrollmentList = /** @class */ (function (_super) {
    __extends(EnrollmentList, _super);
    function EnrollmentList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Valid values: EnrollmentStatus enums + "All"
        _this.viewTypeSelector = defaultViewSelector;
        return _this;
    }
    /**
     * Filters all expandable rows, making sure changes propagate up to the top
     * level rows. Just pass in a function which will filter, with its only
     * parameter being the ExpandableRow/SiteAccess
     *
     * @private
     * @param {(sa: SiteAccess) => boolean} fn Takes a SiteAccess as a parameter
     * @memberof ApplEnrollmentListComponent
     */
    EnrollmentList.prototype.deepSearch = function (fn) {
        // Clone the source data so our changes do not wind up persisting in the underlying data
        var cloned = this.rowItems.map(function (x) { return Object.assign({}, x); });
        this.data = cloned.map(function (enrollmentRow) {
            // Hide all subrows that don't match search results.
            enrollmentRow.expandableRows = enrollmentRow.expandableRows
                .filter(function (expandableRow) {
                return fn(expandableRow);
            });
            return enrollmentRow;
        }).filter(function (enrollmentRow) {
            // Only show rows with search results
            return enrollmentRow.expandableRows.length;
        });
    };
    // Searches based on the expandable rows, per business requirements (i.e. site name, NOT collection name!)
    EnrollmentList.prototype.searchSites = function (phrase) {
        if (phrase.length === 0) {
            return this.data = this.rowItems;
        }
        this.deepSearch(function (expandableRow) {
            return expandableRow.title.toLowerCase().indexOf(phrase.toLowerCase()) !== -1;
        });
    };
    // Searches based on the top level row (i.e. user name)
    EnrollmentList.prototype.searchUsers = function (phrase) {
        this.data = this.rowItems.filter(function (x) {
            return x.title.toLowerCase().indexOf(phrase.toLowerCase()) !== -1;
        });
    };
    /**
     * Can be overwritten by EnrollmentList, but by default will reverse rowItems
     */
    EnrollmentList.prototype.sort = function () {
        this.rowItems.reverse();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Array)
    ], EnrollmentList.prototype, "rowItems", void 0);
    return EnrollmentList;
}(_base_base_class__WEBPACK_IMPORTED_MODULE_0__["Base"]));



/***/ }),

/***/ "./src/app/modules/verifier/components/enrollment-list/enrollment-list.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/verifier/components/enrollment-list/enrollment-list.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"enrollment-list-controls bg-light\">\n  <form class=\"form-inline\">\n    <span class=\"has-float-label\">\n        <input class=\"form-control bg-transparent\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\" (input)=\"search($event.target.value)\">\n        <span>Search</span>\n    </span>\n  </form>\n\n  <form class=\"form-inline\">\n\n    <label class=\"has-float-label\">\n      <button class='btn btn-default mr-3' (click)=\"sort()\">\n        <i class=\"fa fa-sort-alpha-asc\" aria-hidden=\"true\"></i>\n      </button>\n      <prime-add-user-button\n        *ngIf=\"primaryType === 'User'\"\n        (onAddNewUser)='configureUserWithOrgs($event)'>\n      </prime-add-user-button>\n    </label>\n    <!--\n      <label class=\"has-float-label\">\n        <select id=\"enrollmentViewSelector\" class=\"form-control enrollment-view-selector\" [value]=\"viewTypeSelector\" (change)=\"viewTypes($event.target.value)\">\n            <option value=\"View All\">All</option>\n            <option *ngFor=\"let status of EnrollmentStatus\" value=\"{{status}}\">\n              {{status}}\n            </option>\n        </select>\n        <span>View</span>\n      </label>\n      -->\n  </form>\n</div>\n\n<div class=\"enrollment-item-container\">\n  <div class=\"enrollment-item-inner\">\n    <prime-enrollment-row\n      *ngFor=\"let item of data\"\n      [rowData]='item'\n      [primaryType]='primaryType'\n      (onRowOpened)='rowOpened($event)'>\n    </prime-enrollment-row>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/verifier/components/enrollment-list/enrollment-list.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/verifier/components/enrollment-list/enrollment-list.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".enrollment-item-container {\n  border-top: none;\n  height: 25rem;\n  overflow-y: scroll; }\n  .enrollment-item-container .enrollment-item-inner {\n    border-right: 2px solid #dee2e6;\n    border-left: 2px solid #dee2e6;\n    border-bottom: 2px solid #dee2e6;\n    min-height: 100%; }\n  .enrollment-list-controls {\n  border: 2px solid #dee2e6;\n  min-height: 4em;\n  padding: 1em;\n  border-bottom: none;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between; }\n  .enrollment-view-selector {\n  min-width: 5em; }\n  .has-float-label + .has-float-label {\n  margin-top: initial; }\n  .has-float-label + .has-float-label select {\n    height: auto; }\n"

/***/ }),

/***/ "./src/app/modules/verifier/components/enrollment-list/enrollment-list.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/verifier/components/enrollment-list/enrollment-list.component.ts ***!
  \******************************************************************************************/
/*! exports provided: EnrollmentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnrollmentListComponent", function() { return EnrollmentListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_verifier_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/verifier.service */ "./src/app/services/verifier.service.ts");
/* harmony import */ var _enrollment_row_enrollment_row_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enrollment-row/enrollment-row.component */ "./src/app/modules/verifier/components/enrollment-row/enrollment-row.component.ts");
/* harmony import */ var _core_enrollment_list_enrollment_list_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/enrollment-list/enrollment-list.class */ "./src/app/core/enrollment-list/enrollment-list.class.ts");
/* harmony import */ var _services_prime_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/prime-data.service */ "./src/app/services/prime-data.service.ts");
/* harmony import */ var _models_organization_access_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../models/organization-access.model */ "./src/app/models/organization-access.model.ts");
/* harmony import */ var _models_sites_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../models/sites.model */ "./src/app/models/sites.model.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EnrollmentListComponent = /** @class */ (function (_super) {
    __extends(EnrollmentListComponent, _super);
    function EnrollmentListComponent(verifierService, dataService) {
        var _this = _super.call(this) || this;
        _this.verifierService = verifierService;
        _this.dataService = dataService;
        /** What the primary/top level rows are. Changes labels and some other layout configurations. */
        _this.primaryType = "Site";
        verifierService.$enrollmentViewType.subscribe(function (viewType) {
            _this.viewTypeSelector = viewType;
            _this.viewTypes(viewType);
        });
        return _this;
    }
    Object.defineProperty(EnrollmentListComponent.prototype, "EnrollmentStatus", {
        //Convert enum to iterable array
        get: function () {
            return Object.keys(this.verifierService.VerifierEnrollmentStatus);
            // return [ EnrollmentStatus.Active]
        },
        enumerable: true,
        configurable: true
    });
    EnrollmentListComponent.prototype.ngOnInit = function () {
        this.data = this.rowItems;
    };
    EnrollmentListComponent.prototype.ngOnChanges = function (changes) {
        // Handle rows being added to rowItems, such as the "Add User Button" when on the user view
        if (changes.rowItems && changes.rowItems.currentValue && changes.rowItems.previousValue
            && changes.rowItems.currentValue.length > changes.rowItems.previousValue.length) {
            this.data = this.rowItems;
        }
    };
    EnrollmentListComponent.prototype.ngOnDestroy = function () {
        this.verifierService.enrollmentViewTypeSelector = _core_enrollment_list_enrollment_list_class__WEBPACK_IMPORTED_MODULE_3__["defaultViewSelector"];
    };
    EnrollmentListComponent.prototype.rowOpened = function (item) {
        // console.log("rowOpened", { item, rowElements: this.rowElements });
        this.rowElements.filter(function (x) { return x !== item; })
            .map(function (x) { return x.closeRow(); });
    };
    EnrollmentListComponent.prototype.search = function (phrase) {
        if (this.primaryType === 'Site') {
            this.searchSites(phrase);
        }
        else if (this.primaryType === 'User') {
            this.searchUsers(phrase);
        }
    };
    // NOTE: This doesn't work properly with search. Fine for prototype for now, but will need to be resolved in future.
    EnrollmentListComponent.prototype.viewTypes = function (type) {
        if (type.toLowerCase() === "view all") {
            return this.data = this.rowItems;
        }
        this.deepSearch(function (expandableRow) {
            return expandableRow.status.includes(type);
        });
    };
    EnrollmentListComponent.prototype.sort = function () {
        // Temporary solution for prototype before actual sorting is implemented.
        this.rowItems.reverse();
    };
    EnrollmentListComponent.prototype.configureUserWithOrgs = function (person) {
        var _this = this;
        var orgs = this.dataService.organizations.slice(0, 2);
        orgs.map(function (org) {
            var orgAccess = new _models_organization_access_model__WEBPACK_IMPORTED_MODULE_5__["OrganizationAccess"](person, org);
            person.organizationAccess.push(orgAccess);
            org.organizationAccess.push(orgAccess);
            _this.dataService.organizationAccess.push(orgAccess);
            // Associate with all sites for now
            org.members.map(function (site) {
                var sa = new _models_sites_model__WEBPACK_IMPORTED_MODULE_6__["SiteAccess"]();
                sa.site = site;
                sa.person = person;
                site.siteAccess.push(sa);
                person.siteAccess.push(sa);
                _this.dataService.siteAccesses.push(sa);
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(_enrollment_row_enrollment_row_component__WEBPACK_IMPORTED_MODULE_2__["EnrollmentRowComponent"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], EnrollmentListComponent.prototype, "rowElements", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], EnrollmentListComponent.prototype, "primaryType", void 0);
    EnrollmentListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'prime-enrollment-list',
            template: __webpack_require__(/*! ./enrollment-list.component.html */ "./src/app/modules/verifier/components/enrollment-list/enrollment-list.component.html"),
            styles: [__webpack_require__(/*! ./enrollment-list.component.scss */ "./src/app/modules/verifier/components/enrollment-list/enrollment-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_verifier_service__WEBPACK_IMPORTED_MODULE_1__["VerifierService"], _services_prime_data_service__WEBPACK_IMPORTED_MODULE_4__["PrimeDataService"]])
    ], EnrollmentListComponent);
    return EnrollmentListComponent;
}(_core_enrollment_list_enrollment_list_class__WEBPACK_IMPORTED_MODULE_3__["EnrollmentList"]));



/***/ }),

/***/ "./src/app/modules/verifier/components/enrollment-row/enrollment-row.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/verifier/components/enrollment-row/enrollment-row.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"rowData\" class=\"enrollment-list-item\" (click)=\"toggleRow()\" [@openStateDisable]=\"openState\">\n\n    <div class=\"enrollment-text-container\">\n      <span class=\"enrollment-text-main no-separator\">{{rowData.title}}</span>\n       <!--\n       <ng-container *ngIf=\"primaryType === 'Site'\">\n          <span *ngIf=\"rowData.sites != null\" class=\"enrollment-text-extra\">({{rowData.sites.length}}) Sites</span>\n          <span *ngIf=\"rowData.sites != null\" class=\"enrollment-text-extra\">({{rowData.users.length}}) Users</span>\n       </ng-container>\n\n       <ng-container *ngIf=\"primaryType === 'User'\">\n          <span class=\"enrollment-text-extra\">({{rowData.collections.length}}) Collections</span>\n          <span class=\"enrollment-text-extra\">({{rowData.sites.length}}) Sites</span>\n       </ng-container>\n       -->\n      <span *ngIf=\"primaryType === 'User'\">\n       <prime-info-button\n          class='mx-2'\n          [targetId]=\"rowData.associatedObjectId\">\n       </prime-info-button>\n      </span>\n    </div>\n\n    <div *ngIf=\"primaryType === 'User'\" class=\"enrollment-actions\">\n      <span class=\"enrollment-icons\">\n        <prime-pill-badge\n          [alerts]=\"allChildAlerts\"\n          [iconOnly]='false'>\n        </prime-pill-badge>\n        <i class=\"fa fa-edit text-muted mr-2\" (click)=\"goToEnrollmentPage(rowData.associatedObjectId)\"></i>\n      </span>\n    </div>\n  </div>\n\n\n\n  <div [@openState]=\"openState\">\n    <div [@openStateChild]=\"openState\"  class=\"expandable-container\">\n\n        <div class=\"enrollment-expandable\" *ngFor=\"let siteAccess of siteAccessRequiringAttention\"\n            (click)=\"expandedRowClick(siteAccess)\"\n          >\n          <div class=\"enrollment-text-container\">\n            <span class=\"enrollment-text-main\">{{siteAccess.title}}</span>\n\n            <prime-info-button\n              class='mx-2'\n              [targetId]=\"siteAccess.site.objectId\">\n            </prime-info-button>\n\n          </div>\n          <div class=\"enrollment-actions\">\n              <span class=\"enrollment-icons mr-5\">\n\n                  <prime-pill-badge\n                    *ngIf='primaryType === \"User\"'\n                    [alerts]=\"[siteAccess.alert]\">\n                  </prime-pill-badge>\n\n                  <i class=\"fa fa-edit text-muted mr-2\" (click)=\"goToEnrollmentPage(siteAccess.site.objectId)\"></i>\n                  \n              </span>\n              \n          </div>\n          <!--\n          <prime-enrollment-progress-row\n            [open]='siteAccess.open'\n            [data]='siteAccess'>\n          </prime-enrollment-progress-row>\n          -->\n        </div>\n\n\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/modules/verifier/components/enrollment-row/enrollment-row.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/verifier/components/enrollment-row/enrollment-row.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  background: #e9ecef; }\n\n.enrollment-icons,\n.enrollment-list-item,\n.enrollment-expandable {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end; }\n\n.enrollment-list-item {\n  border: 1px solid #adb5bd;\n  border-left: none;\n  border-right: none;\n  min-height: 4em;\n  background: white;\n  z-index: 1;\n  position: relative; }\n\n.enrollment-expandable,\n.enrollment-list-item {\n  transition: 0.25s; }\n\n.enrollment-expandable:hover,\n  .enrollment-list-item:hover {\n    background: #f9f9f9; }\n\n.enrollment-expandable {\n  color: #495057;\n  min-height: 4em;\n  border: 1px solid #adb5bd;\n  flex-wrap: wrap;\n  background: #e9ecef; }\n\n.enrollment-actions {\n  display: flex;\n  align-items: center;\n  align-self: stretch; }\n\n.enrollment-actions .btn-block {\n    border-radius: 0;\n    border-top: 0;\n    border-right: 0;\n    border-bottom: 0;\n    height: 100%; }\n\n.enrollment-text-container {\n  min-height: 4em;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  flex: 5;\n  padding-left: 1em;\n  margin-right: 2em; }\n\n.enrollment-text-container .enrollment-text-main {\n    font-size: 1.072rem; }\n\n.enrollment-text-container > span:not(:last-of-type):not(.no-separator):after {\n    font-size: 1rem;\n    color: #6c757d;\n    content: \" / \"; }\n\n@media (max-width: 575.98px) {\n    .enrollment-text-container > span:first-of-type:after {\n      content: \"\";\n      display: block; } }\n\n.enrollment-text-container > span:not(.enrollment-text-main) {\n    color: #6c757d;\n    margin-left: 0.1rem; }\n\n.enrollment-icons > i {\n  padding: 0 5px;\n  font-size: 18px;\n  cursor: pointer; }\n\n.enrollment-icons > i.fa-edit {\n    font-size: 1.75rem; }\n"

/***/ }),

/***/ "./src/app/modules/verifier/components/enrollment-row/enrollment-row.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/verifier/components/enrollment-row/enrollment-row.component.ts ***!
  \****************************************************************************************/
/*! exports provided: EnrollmentRowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnrollmentRowComponent", function() { return EnrollmentRowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _animations_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../animations/animations */ "./src/app/animations/animations.ts");
/* harmony import */ var _core_enrollment_row_enrollment_row_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/enrollment-row/enrollment-row.class */ "./src/app/core/enrollment-row/enrollment-row.class.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EnrollmentRowComponent = /** @class */ (function (_super) {
    __extends(EnrollmentRowComponent, _super);
    function EnrollmentRowComponent(router) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.primaryType = "Site";
        return _this;
    }
    EnrollmentRowComponent.prototype.ngOnInit = function () {
        if (!this.rowData) {
            return;
        }
        this.siteAccessRequiringAttention.map(function (x) { return x.open = false; });
    };
    EnrollmentRowComponent.prototype.toggleRow = function () {
        if (this.canOpen()) {
            this.openState = this.openState === _core_enrollment_row_enrollment_row_class__WEBPACK_IMPORTED_MODULE_3__["RowState"].Opened ? _core_enrollment_row_enrollment_row_class__WEBPACK_IMPORTED_MODULE_3__["RowState"].Closed : _core_enrollment_row_enrollment_row_class__WEBPACK_IMPORTED_MODULE_3__["RowState"].Opened;
            if (this.openState === _core_enrollment_row_enrollment_row_class__WEBPACK_IMPORTED_MODULE_3__["RowState"].Opened) {
                this.onRowOpened.emit(this);
                // First row is open by default
                this.siteAccessRequiringAttention[0].open = open;
            }
        }
    };
    EnrollmentRowComponent.prototype.canOpen = function () {
        if (this.primaryType === "User")
            return false;
        else
            return true;
    };
    EnrollmentRowComponent.prototype.ngOnDestroy = function () {
        // Set all child rows to closed.
        this.siteAccessRequiringAttention.map(function (x) { return x.open = false; });
    };
    Object.defineProperty(EnrollmentRowComponent.prototype, "siteAccessRequiringAttention", {
        // Abstract function
        /** This function is responsible for generating site access row titles depending on dashboard type */
        get: function () {
            if (!this.rowData || !this.rowData.expandableRows) {
                return [];
            }
            // All this function does is generate titles for Site Access rows.
            if (this.primaryType === "Site") {
                return this.rowData.expandableRows.map(function (siteAccess) {
                    siteAccess.title = "" + siteAccess.site.name;
                    return siteAccess;
                });
            }
            else {
                return this.rowData.expandableRows.map(function (siteAccess) {
                    siteAccess.title = "" + siteAccess.site.name;
                    return siteAccess;
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    EnrollmentRowComponent.prototype.goToEnrollmentPage = function (objectId) {
        console.log('goToEnrollmentPage', objectId);
        //If user selects details from verifier dash, then go to verifier details
        if (this.router.url.indexOf('/verifier/') > -1) {
            var link = '/verifier/details/' + this.primaryType.toLowerCase();
            this.router.navigate([link, this.rowData.associatedObjectId]);
            //Else if user selects details from provisioner dash, then go to provisioner details
        }
        else if (this.router.url.indexOf('/provisioner/') > -1) {
            var link = '/provisioner/details/' + this.primaryType.toLowerCase();
            console.log('URL', [link, objectId]);
            this.router.navigate([link, objectId]);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EnrollmentRowComponent.prototype, "rowData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], EnrollmentRowComponent.prototype, "primaryType", void 0);
    EnrollmentRowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'prime-enrollment-row',
            template: __webpack_require__(/*! ./enrollment-row.component.html */ "./src/app/modules/verifier/components/enrollment-row/enrollment-row.component.html"),
            styles: [__webpack_require__(/*! ./enrollment-row.component.scss */ "./src/app/modules/verifier/components/enrollment-row/enrollment-row.component.scss")],
            animations: [_animations_animations__WEBPACK_IMPORTED_MODULE_2__["openState"], _animations_animations__WEBPACK_IMPORTED_MODULE_2__["openStateChild"], _animations_animations__WEBPACK_IMPORTED_MODULE_2__["loadInOut"], _animations_animations__WEBPACK_IMPORTED_MODULE_2__["openStateDisable"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], EnrollmentRowComponent);
    return EnrollmentRowComponent;
}(_core_enrollment_row_enrollment_row_class__WEBPACK_IMPORTED_MODULE_3__["EnrollmentRow"]));



/***/ }),

/***/ "./src/app/modules/verifier/components/miller-columns/miller-columns.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/verifier/components/miller-columns/miller-columns.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"config\" class=\"miller-header d-flex justify-content-between p-3 my-3\">\n  <span><a [routerLink]=\"backLink()\">Dashboard</a> /\n    <strong *ngIf=\"IS_PEOPLE_TABLE\">User Enrollment</strong>\n    <strong *ngIf=\"!IS_PEOPLE_TABLE\">Site Enrollment</strong>\n  </span>\n\n  <span class='d-inline-flex align-items-center'>\n    <div class=\"mb-2 mr-sm-2 bg-info\" *ngIf=\"saveSuccess\">\n      Enrolment has been updated\n    </div>\n\n    <button type=\"button\" class=\"btn btn-default mx-2\" [disabled]=\"!changesMade\" (click)=\"cancel()\">Cancel</button>\n    <button type=\"button\" class=\"btn btn-primary mx-2\" [disabled]=\"!changesMade\" (click)=\"save()\" [primeLoadingSpinner]=\"showLoadingSpinner\" >Submit</button>\n  </span>\n</div>\n\n<div class=\"miller-container\">\n  <div class=\"miller-column\" *ngFor=\"let column of columns; let colIndex = index;\" [@loadInOut]>\n    <div class='miller-column-title'>\n      <prime-expanding-search\n        (onChange)=\"filterColumn($event, colIndex)\"\n        placeholder=\"{{column.title}}\"\n        alwaysShow=true\n        class='mr-2'>\n      </prime-expanding-search>\n\n      <prime-add-user-button\n        *ngIf=\"column.title.toLowerCase() === 'people'\"\n        iconOnly=true\n        (onAddNewUser)=\"refreshFinalColumn()\"\n        class='fix-right'>\n      </prime-add-user-button>\n    </div>\n\n\n\n\n    <ul class=\"miller-items-container\">\n\n      <!-- First Two Columns,  single-selection. -->\n      <ng-container *ngIf=\"colIndex !== 2\">\n        <li class=\"miller-item\" *ngFor=\"let item of column['items']\" [ngClass]=\"{\n          'open': item.open,\n          'has-children': item.hasChildren,\n          'd-none': item.hidden && !item.open\n        }\">\n          <a (click)=\"onItemClick(item)\" class='miller-item-link'>\n            <span class=\"item-title\">{{item.name}}</span>\n            <span class=\"icons-group d-flex\">\n\n              <!-- TODO: Update these two. Currently they never work. We either need to pre-calculate hasAlert/hasWarning on parents based on children, or change the approach. -->\n                <i *ngIf=\"item.hasAlert\" class=\"fa fa-exclamation-triangle text-danger\"></i>\n                <i *ngIf=\"item.hasWarning\"class=\"fa fa-exclamation-circle text-warning\"></i>\n\n                <prime-info-button [targetId]=\"item.objectId\" ></prime-info-button>\n            </span>\n          </a>\n        </li>\n      </ng-container>\n\n      <!-- Final Column, multi-selection plus custom logic. -->\n      <ng-container *ngIf=\"colIndex === 2\">\n        <prime-miller-item-checkbox\n          [items]=\"column['items']\"\n          [selectedSiteAccess]='getSelectedSiteAccess()'\n          [primarySelection]='getSelection()'\n          (onPendingChanges)=\"onCheck($event)\">\n        </prime-miller-item-checkbox>\n\n      </ng-container>\n\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/verifier/components/miller-columns/miller-columns.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/verifier/components/miller-columns/miller-columns.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".miller-container {\n  display: flex;\n  position: relative;\n  -webkit-perspective: 800px;\n          perspective: 800px; }\n\n.miller-column {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 100% !important;\n  flex: 1;\n  border: 1px #ccc solid;\n  overflow: auto;\n  margin: 0 10px;\n  background: #f8f9fa; }\n\n.miller-column:last-of-type {\n    margin-right: 0; }\n\n@media (min-width: 768px) {\n    .miller-column {\n      position: initial;\n      max-width: 33% !important; }\n      .miller-column:first-of-type {\n        margin-left: 0; } }\n\n.miller-column.ng-animating {\n    z-index: 9999; }\n\n@media (min-width: 768px) {\n      .miller-column.ng-animating {\n        z-index: -1; } }\n\n.miller-items-container {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  max-height: 25rem;\n  min-height: 25rem;\n  overflow-y: scroll; }\n\n.miller-item {\n  margin: 0;\n  padding: 0;\n  border-bottom: 1px #495057 solid;\n  cursor: pointer;\n  position: relative;\n  background: #fcfcfc; }\n\n.miller-item:hover {\n    background: #f8f9fa; }\n\n.miller-item.open, .miller-item.open:hover {\n    background-color: #ced4da; }\n\n.miller-item .has-children {\n    color: red !important; }\n\n.miller-item-link {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1em;\n  text-decoration: none; }\n\n.item-title {\n  font-weight: 800;\n  font-size: 1.072rem; }\n\n.miller-column-title {\n  padding: 1em;\n  font-size: 1.072rem;\n  background: #e9ecef;\n  border-bottom: 1px solid #212529;\n  margin-bottom: 0;\n  min-height: 4rem;\n  display: flex;\n  justify-content: space-between; }\n\n.miller-column-title > i.fa {\n    color: rgba(73, 73, 73, 0.75); }\n\n.miller-column-title > h4 {\n    margin-bottom: 0;\n    -ms-grid-row-align: center;\n        align-self: center; }\n\n.icons-group {\n  font-size: 1.5rem; }\n\n.miller-header {\n  background: #e9ecef;\n  align-items: center; }\n"

/***/ }),

/***/ "./src/app/modules/verifier/components/miller-columns/miller-columns.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/verifier/components/miller-columns/miller-columns.component.ts ***!
  \****************************************************************************************/
/*! exports provided: MillerColumnsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MillerColumnsComponent", function() { return MillerColumnsComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _models_sites_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../models/sites.model */ "./src/app/models/sites.model.ts");
/* harmony import */ var _services_prime_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/prime-data.service */ "./src/app/services/prime-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TIMING = '500ms';
var MillerColumnsComponent = /** @class */ (function () {
    function MillerColumnsComponent(router, dataService) {
        this.router = router;
        this.dataService = dataService;
        this.columnOrder = ['Collections', 'Sites', 'People'];
        this.changesMade = false;
        this.declarationCheck = false;
        this.saveSuccess = false;
        this.showLoadingSpinner = false;
    }
    MillerColumnsComponent.prototype.ngOnInit = function () {
        if (!this.config) {
            return;
        }
        // Modify column ordering based on config
        if (this.config.options &&
            this.config.options.primaryColumn &&
            this.config.options.primaryColumn.toLowerCase() === 'people') {
            this.columnOrder = ['People', 'Collections', 'Sites'];
        }
        // Setup first column
        this._columns = [
            {
                title: this.columnOrder[0],
                items: this.config.data[this.columnOrder[0].toLowerCase()],
                index: 0,
            }
        ];
        // Check if there's a pre-selected id in the config
        if (this.config.options && this.config.options.preselectObjectId) {
            var preselectObjectId_1 = this.config.options.preselectObjectId;
            // Selected item will be in first column, regardless of primaryColumn
            var preselectItem = this._columns[0].items
                .find(function (item) { return item.objectId === preselectObjectId_1; });
            if (!preselectItem) {
                console.error('MillerColumnsComponent config.options.preselectObjectId refers to an object which does not exist! Removed objectId from url.');
                this.router.navigate(['/verifier/enrollment/']);
                return;
            }
            this.openColumnFromItem(preselectItem);
            //Only open second column if they're not a new user and we are only displaying; we don't want to pre-open columns that are also pre-checked
            if (!this.shouldPreCheckAllBoxes()) {
                // Open second column too. Currently just opens the top item, no advanced logic. Potentially could open an item it does not have SA's with, but should be rare.
                this.openColumnFromItem(this._columns[1].items[0]);
            }
        }
        // Save the original columns so we can restore it if the user wants to cancel changes
        this._originalColumnSnapshot = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(this._columns);
    };
    Object.defineProperty(MillerColumnsComponent.prototype, "columns", {
        // get columns() : MillerItem[][] {
        get: function () {
            return this._columns;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MillerColumnsComponent.prototype, "IS_PEOPLE_TABLE", {
        get: function () {
            return !!(this.config.options &&
                this.config.options.primaryColumn &&
                this.config.options.primaryColumn.toLowerCase() === 'people');
        },
        enumerable: true,
        configurable: true
    });
    MillerColumnsComponent.prototype.filterColumn = function (phrase, colIndex) {
        this._columns[colIndex]['items'] = this._columns[colIndex]['items']
            .map(function (x) {
            // Remove from search results without modifying array order.
            x.hidden = x.name.toLowerCase().indexOf(phrase.toLowerCase()) === -1;
            return x;
        });
    };
    MillerColumnsComponent.prototype.onItemClick = function (item) {
        if (item.open) {
            return;
        } //It's already open, don't re-create it.
        this.openColumnFromItem(item);
    };
    MillerColumnsComponent.prototype.openColumnFromItem = function (item) {
        var colIndex = this.findColumnIndexFromItem(item);
        // Close other items in the same column
        this._columns[colIndex]['items'].filter(function (x) { return x !== item; })
            .map(function (x) { return x.open = false; });
        // Close open items in child columns
        this.cleanUpChildColumns(colIndex);
        // Open the selection
        item.open = true;
        this.addColumnFromItem(item, colIndex);
    };
    // TODO: Column interface/type
    MillerColumnsComponent.prototype.onClickColTitle = function (column) {
        this.closeColumn(column);
    };
    MillerColumnsComponent.prototype.onCheck = function (pending) {
        this.saveSuccess = false;
        this.changesMade = pending.length >= 1;
        this.pendingSiteAccess = pending;
        console.log('onCheck', pending);
    };
    //TODO: Column interface + move fn location
    MillerColumnsComponent.prototype.closeColumn = function (column) {
        this.closeColumnByIndex(column.index);
    };
    //TODO: Column interface + move fn location
    MillerColumnsComponent.prototype.closeColumnByIndex = function (index) {
        this.cleanUpChildColumns(index);
        this._columns = this._columns.slice(0, index).slice();
    };
    /**
     * Creates (and destroys) columns as necessary based on item user has clicked.
     */
    MillerColumnsComponent.prototype.addColumnFromItem = function (item, colIndex) {
        var newIndex = colIndex + 1;
        var newItems = this.findItemsAtColIndex(item, newIndex);
        if (newItems.length) {
            var newCol = {
                title: this.columnOrder[newIndex],
                items: newItems,
                index: newIndex,
            };
            this._columns = this._columns.slice(0, newIndex).concat([newCol]);
        }
        else {
            this.closeColumnByIndex(newIndex);
        }
    };
    /** Saves the data and updates the UI */
    MillerColumnsComponent.prototype.save = function () {
        var _this = this;
        this.showLoadingSpinner = true;
        // The user is no longer 'New' once they've had enrollments saved.
        if (this.shouldPreCheckAllBoxes()) {
            var user = this.getUserSelection();
            user.isNewUser = false;
        }
        this.saveData();
        this.changesMade = false;
        setTimeout(function () {
            _this.showLoadingSpinner = false;
            _this.saveSuccess = true;
        }, 3000);
    };
    /** Cancels the users changes and reverts back to previous state, including what columns are open.  */
    MillerColumnsComponent.prototype.cancel = function () {
        this._columns = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(this._originalColumnSnapshot);
        this.changesMade = false;
    };
    MillerColumnsComponent.prototype.backLink = function () {
        var linkType = this.IS_PEOPLE_TABLE ? 'user' : 'site';
        return "/verifier/dashboard/" + linkType;
    };
    /** Handles data operations necessary to save, does not handle UI per se, but statuses will update due to changes in underlying data. */
    MillerColumnsComponent.prototype.saveData = function () {
        var _this = this;
        this.pendingSiteAccess.map(function (siteAccess) {
            //Go from our copy to the original in dataService
            var orig = _this.dataService.findSiteAccessByObjectId(siteAccess.objectId);
            // Value exists, so we need to update it
            if (orig) {
                orig.status = siteAccess.status;
                orig.endDate = siteAccess.endDate;
                orig.startDate = siteAccess.startDate;
                orig.declinedReason = siteAccess.declinedReason;
                orig.progress = _models_sites_model__WEBPACK_IMPORTED_MODULE_4__["SiteAccessProgressSteps"].Applicant;
                console.log('Updating existing SiteAccess', siteAccess);
            }
            else {
                // SiteAccess doesn't exist, so it's a brand new one. We just need to insert it.
                var origPerson = void 0, origSite = void 0;
                if (_this.IS_PEOPLE_TABLE) {
                    var objectId = _this.getUserSelection().objectId;
                    origPerson = _this.dataService.findPersonByObjectId(objectId);
                    origSite = _this.dataService.findSiteByObjectId(siteAccess.site.objectId);
                }
                else {
                    var objectId = _this.getSiteSelection().objectId;
                    origSite = _this.dataService.findSiteByObjectId(objectId);
                    origPerson = _this.dataService.findPersonByObjectId(siteAccess.person.objectId);
                }
                siteAccess.progress = _models_sites_model__WEBPACK_IMPORTED_MODULE_4__["SiteAccessProgressSteps"].Applicant;
                siteAccess.person = origPerson;
                siteAccess.site = origSite;
                origSite.siteAccess.push(siteAccess);
                origPerson.siteAccess.push(siteAccess);
                _this.dataService.siteAccesses.push(siteAccess);
                console.log('Saving new SiteAccess', siteAccess);
            }
        });
        this.pendingSiteAccess = this.pendingSiteAccess.map(function (siteAccess) {
            siteAccess.pendingChanges = false;
            return siteAccess;
        });
        this._originalColumnSnapshot = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(this._columns);
    };
    /**
     * Returns the column that the provided item belongs to (from this._columns)
     */
    MillerColumnsComponent.prototype.findColumnIndexFromItem = function (item) {
        for (var colIndex = 0; colIndex < this._columns.length; colIndex++) {
            var column = this._columns[colIndex];
            // Loop through items in columns to find match
            for (var i = 0; i < column['items'].length; i++) {
                var colItem = column['items'][i];
                if (colItem === item) {
                    return colIndex;
                }
            }
        }
        return null;
    };
    MillerColumnsComponent.prototype.findItemsAtColIndex = function (item, targetColIndex) {
        // First, filter out data that doesn't apply to get our column data
        var data = this.config.data[this.columnOrder[targetColIndex].toLowerCase()]
            .filter(function (x) {
            if (!x.associationId)
                return true;
            if (x.isNewUser)
                return true;
            return x.associationId.indexOf(item.objectId) !== -1;
        });
        // Second, update new column attributes on selections in previous columns
        data = this.recalculateColumnStatus(data, item);
        return data;
    };
    MillerColumnsComponent.prototype.isSiteColumn = function (col) {
        return col[0]._isSite !== undefined;
    };
    MillerColumnsComponent.prototype.isPeopleColumn = function (col) {
        return col[0].firstName !== undefined;
    };
    MillerColumnsComponent.prototype.recalculateColumnStatus = function (column, originalSelection) {
        // Clone the column so that when we filter out irrelevant data it doesn't destroy the underlying data.
        column = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(column);
        // Special filtering operations for last column for 2 table types
        if (this.IS_PEOPLE_TABLE && this.isSiteColumn(column)) {
            var selection_1 = this.getUserSelection();
            column = column.map(function (site) {
                site.siteAccess = site.siteAccess.filter(function (sa) {
                    // Since we clone, we have to check on ID not pure identity
                    return sa.person.objectId === selection_1.objectId;
                });
                return site;
            });
            // Now that we've filtered out irrelevant SA's, we can easily check items
            // that have Active SAs.
            if (this.shouldPreCheckAllBoxes()) {
                console.log('Should precheck all items!');
                var preChecked = column.map(function (item) { return item.checked = true; });
                if (preChecked.length)
                    this.changesMade = true;
            }
            else {
                column
                    .filter(function (item) { return item.siteAccess.length; })
                    .filter(function (item) { return item.siteAccess[0].status === 'Active' || item.siteAccess[0].status === 'New' || item.siteAccess[0].status === 'Initiated'; })
                    .map(function (item) { return item.checked = true; });
            }
        }
        else if (!this.IS_PEOPLE_TABLE && this.isPeopleColumn(column)) {
            var selection_2 = this.getSiteSelection();
            column = column.map(function (person) {
                person.siteAccess = person.siteAccess.filter(function (sa) {
                    return sa.site.objectId === selection_2.objectId;
                });
                return person;
            });
            column
                .filter(function (item) { return item.siteAccess.length; })
                .filter(function (item) { return item.siteAccess[0].status === 'Active' || item.siteAccess[0].status === 'New' || item.siteAccess[0].status === 'Initiated'; })
                .map(function (item) { return item.checked = true; });
        }
        // Sort so all checked items are at the top
        column.sort(function (a, b) {
            if (a.checked || b.checked) {
                return b.checked ? 1 : 0;
            }
            else {
                // Sort remainder alphabetically
                return a.name > b.name ? 1 : 0;
            }
        });
        // Add "Active" badge
        return column;
    };
    MillerColumnsComponent.prototype.refreshFinalColumn = function () {
        // Just need to re-open the last column by re-opening the current open item in the penultimate column
        this.openColumnFromItem(this._columns[1].items.filter(function (x) { return x.open; })[0]);
    };
    MillerColumnsComponent.prototype.getUserSelection = function () {
        if (this.IS_PEOPLE_TABLE) {
            return this._columns[0].items.filter(function (x) { return x.open; })[0];
        }
        return null;
    };
    MillerColumnsComponent.prototype.getSiteSelection = function () {
        if (!this.IS_PEOPLE_TABLE) {
            return this._columns[1].items.filter(function (x) { return open; })[0];
        }
        return null;
    };
    MillerColumnsComponent.prototype.getSelection = function () {
        if (this.IS_PEOPLE_TABLE) {
            return this.getUserSelection();
        }
        else {
            return this.getSiteSelection();
        }
    };
    /** Returns all the SiteAccesses of the selected item in the primary (left
     * most) column. These are already existing site accesses, not new ones we
     * will have to save, etc. */
    MillerColumnsComponent.prototype.getSelectedSiteAccess = function () {
        if (this.IS_PEOPLE_TABLE) {
            return this._columns[0].items.filter(function (x) { return x.open; })[0].siteAccess;
        }
        else {
            return this._columns[0].items.filter(function (x) { return x.open; })[0].allSiteAccess;
        }
    };
    MillerColumnsComponent.prototype.shouldPreCheckAllBoxes = function () {
        var user = this.getUserSelection();
        return user && user.isNewUser;
    };
    MillerColumnsComponent.prototype.cleanUpChildColumns = function (index) {
        // De-select all cells in closed columns
        for (var i = index; i < this._columns.length; i++) {
            var column = this._columns[i];
            column['items'].map(function (x) { return x.open = false; });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], MillerColumnsComponent.prototype, "config", void 0);
    MillerColumnsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'prime-miller-columns',
            template: __webpack_require__(/*! ./miller-columns.component.html */ "./src/app/modules/verifier/components/miller-columns/miller-columns.component.html"),
            styles: [__webpack_require__(/*! ./miller-columns.component.scss */ "./src/app/modules/verifier/components/miller-columns/miller-columns.component.scss")],
            // Necessary so styles also apply to Miller-Item-Checkbox
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('loadInOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(TIMING, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateX(-100%) translateZ(-500px)', offset: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateX(15px)', offset: 0.3 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
                        ]))
                    ]),
                ]),
                // Alternate "flip" animation that matches Farzad's designs more.
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('flipInOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(TIMING, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'rotateX(-90deg)', offset: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'rotateX(0)', offset: 1.0 })
                        ]))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(TIMING, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'rotateX(0)', offset: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'rotateX(-90deg)', offset: 1.0 })
                        ]))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_prime_data_service__WEBPACK_IMPORTED_MODULE_5__["PrimeDataService"]])
    ], MillerColumnsComponent);
    return MillerColumnsComponent;
}());



/***/ }),

/***/ "./src/app/modules/verifier/components/miller-item-checkbox/miller-item-checkbox.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/verifier/components/miller-item-checkbox/miller-item-checkbox.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<li class=\"miller-item\" *ngFor=\"let item of items\" [ngClass]=\"{\n  'open': item.open,\n  'has-children': item.hasChildren,\n  'd-none': item.hidden && !item.checked\n}\">\n\n  <a (click)=\"onItemClick($event, item)\" class='miller-item-link'>\n    <div class=\"form-check\">\n        <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"millerCheckbox{{item.objectId}}\" [(ngModel)]='item.checked'>\n        <label class=\"form-check-label\" for=\"millerCheckbox{{item.objectId}}\">\n          <span class=\"item-title\">{{item.name}}</span>\n        </label>\n    </div>\n\n\n    <span class=\"icons-group d-flex align-items-center\">\n        <prime-pill-badge\n          *ngIf=\"getSiteAccessForItem(item)?.alert\"\n          [alerts]=\"[getSiteAccessForItem(item)?.alert]\">\n        </prime-pill-badge>\n\n        <!-- <i class=\"fa fa-info-circle text-muted ml-1\"></i> -->\n        <prime-info-button [targetId]=\"item.objectId\" ></prime-info-button>\n    </span>\n  </a>\n  <div *ngIf=\"showNewEnrollment(item)\" class='d-flex justify-content-around' [@growVertical]>\n    <span class='d-inline-flex align-items-baseline mb-1'>Start\n      <prime-datepicker size='mini' dateFormat=\"yyyy/mm/dd\"\n      [(date)]=getSiteAccessForItem(item).startDate\n      class='ml-1'></prime-datepicker>\n    </span>\n\n    <span class='d-inline-flex align-items-baseline mb-1'>End\n      <prime-datepicker size='mini' dateFormat=\"yyyy/mm/dd\"  [(date)]=\"getSiteAccessForItem(item).endDate\" class='ml-1'></prime-datepicker>\n    </span>\n  </div>\n\n  <div *ngIf=\"showEndEnrollment(item)\" class='d-flex justify-content-around' [@growVertical]>\n      <span class='d-inline-flex align-items-baseline mb-1'>End\n        <prime-datepicker size='mini' dateFormat=\"yyyy/mm/dd\"\n        [(date)]=selectedSiteAccess[0].endDate\n        class='ml-1'></prime-datepicker>\n      </span>\n\n      <select name=\"reasonForDeactivation\" id=\"reasonForDeactivation\" class='mx-2' [(ngModel)]=\"getSiteAccessForItem(item).declinedReason\">\n        <option value=\"noLongerEmployee\">No Longer employed</option>\n        <option value=\"contractExpiration\">Contract termination</option>\n        <option value=\"tempAccess\">Temp Access</option>\n        <option value=\"changedLocation\">No longer works at this site</option>\n      </select>\n\n\n\n    </div>\n\n\n</li>\n"

/***/ }),

/***/ "./src/app/modules/verifier/components/miller-item-checkbox/miller-item-checkbox.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/verifier/components/miller-item-checkbox/miller-item-checkbox.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".badge-pill {\n  font-size: 0.75rem; }\n"

/***/ }),

/***/ "./src/app/modules/verifier/components/miller-item-checkbox/miller-item-checkbox.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/verifier/components/miller-item-checkbox/miller-item-checkbox.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: MillerItemCheckboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MillerItemCheckboxComponent", function() { return MillerItemCheckboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animations_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../animations/animations */ "./src/app/animations/animations.ts");
/* harmony import */ var _models_enrollment_status_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../models/enrollment-status.enum */ "./src/app/models/enrollment-status.enum.ts");
/* harmony import */ var _models_person_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models/person.model */ "./src/app/models/person.model.ts");
/* harmony import */ var _models_sites_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../models/sites.model */ "./src/app/models/sites.model.ts");
/* harmony import */ var _core_base_base_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/base/base.class */ "./src/app/core/base/base.class.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MillerItemCheckboxComponent = /** @class */ (function (_super) {
    __extends(MillerItemCheckboxComponent, _super);
    function MillerItemCheckboxComponent() {
        var _this = _super.call(this) || this;
        _this.onPendingChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Incomplete! Idea is it will store all pending changes, and after the user
         * clicks 'Save' then we empty this array and store the data in the real data
         * stores (and cancel just clears it). */
        _this._allPendingChanges = [];
        return _this;
    }
    MillerItemCheckboxComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.items) {
            return;
        }
        var today = new Date();
        this.today = { year: today.getFullYear(), month: today.getMonth() + 1, day: today.getDate() };
        // Preprocess pre-checked items for 'New' users by pre-selecting all fields
        this.items
            .filter(function (x) { return x.checked && _this.getSiteAccessForItem(x) === undefined; })
            .map(function (x) { return _this.initiateSiteAccess(x); });
        // If any pending changes created due to the above pre-processing
        if (this._allPendingChanges.length) {
            this.onPendingChanges.emit(this._allPendingChanges);
        }
    };
    MillerItemCheckboxComponent.prototype.ngOnDestroy = function () {
        [].concat.apply([], this.items.map(function (site) { return site.siteAccess; })).map(function (sa) { return sa.pendingChanges = false; });
    };
    MillerItemCheckboxComponent.prototype.onItemClick = function (event, item) {
        var sa = this.getSiteAccessForItem(item);
        if (sa) {
            sa.pendingChanges = true;
        }
        if (typeof sa === 'undefined') {
            // User has selected a blank item, creating new SA.
            // console.log('onItemClick1', {item, sa})
            this.initiateSiteAccess(item);
        }
        if (item.checked && this._allPendingChanges.includes(sa)) {
            // User is undoing a change they haven't saved. Delete SA.
            // console.log('onItemClick2', {item, sa})
            this.deleteInitiatedSiteAccess(item, sa);
            sa.pendingChanges = false;
        }
        if (item.checked && sa && (sa.status === _models_enrollment_status_enum__WEBPACK_IMPORTED_MODULE_2__["EnrollmentStatus"].Active || sa.status === _models_enrollment_status_enum__WEBPACK_IMPORTED_MODULE_2__["EnrollmentStatus"].New)) {
            // console.log('onItemClick4-NEW, unchecking active/new', {item, sa})
            this.removeExistingEnrollment(item, sa);
        }
        if (!item.checked && sa && sa.status === null) {
            // console.log('onItemClick5-NEW, undoing, restoring active', {item, sa})
            this.undoRemoveExistingEnrollment(item, sa);
        }
        // console.log('onItemClick-END', {item, sa})
        item.checked = !item.checked;
        this.onPendingChanges.emit(this._allPendingChanges);
        if (event.target.type !== 'checkbox') {
            // Stop the event from double-firing.
            return false;
        }
    };
    MillerItemCheckboxComponent.prototype.showNewEnrollment = function (item) {
        var sa = this.getSiteAccessForItem(item);
        if (item.checked && sa) {
            return sa.pendingChanges && sa.status === _models_enrollment_status_enum__WEBPACK_IMPORTED_MODULE_2__["EnrollmentStatus"].Initiated;
        }
        return false;
    };
    MillerItemCheckboxComponent.prototype.showEndEnrollment = function (item) {
        var sa = this.getSiteAccessForItem(item);
        if (!item.checked && sa) {
            return sa.pendingChanges && sa.status !== _models_enrollment_status_enum__WEBPACK_IMPORTED_MODULE_2__["EnrollmentStatus"].Initiated;
        }
        return false;
    };
    MillerItemCheckboxComponent.prototype.removeExistingEnrollment = function (item, sa) {
        sa.status = null;
        sa.declinedReason = 'noLongerEmployee';
        sa.pendingChanges = true;
        this._allPendingChanges.push(sa);
    };
    MillerItemCheckboxComponent.prototype.undoRemoveExistingEnrollment = function (item, sa) {
        sa.pendingChanges = false;
        if (sa.status === null) {
            sa.status = _models_enrollment_status_enum__WEBPACK_IMPORTED_MODULE_2__["EnrollmentStatus"].Active;
        }
        this._allPendingChanges = this._allPendingChanges.filter(function (x) { return x !== sa; });
    };
    MillerItemCheckboxComponent.prototype.initiateSiteAccess = function (item) {
        var sa = new _models_sites_model__WEBPACK_IMPORTED_MODULE_4__["SiteAccess"]();
        sa.pendingChanges = true;
        sa.status = _models_enrollment_status_enum__WEBPACK_IMPORTED_MODULE_2__["EnrollmentStatus"].Initiated;
        item.siteAccess.push(sa);
        // Assign SA to the item depending on type of item (person or site)
        if (_models_person_model__WEBPACK_IMPORTED_MODULE_3__["Person"].isPersonGuard(item) && _models_sites_model__WEBPACK_IMPORTED_MODULE_4__["Site"].isSiteGuard(this.primarySelection)) {
            sa.startDate = item.defaultStartDate;
            sa.endDate = item.defaultEndDate;
            sa.person = item;
            sa.site = this.primarySelection;
        }
        else if (_models_sites_model__WEBPACK_IMPORTED_MODULE_4__["Site"].isSiteGuard(item) && _models_person_model__WEBPACK_IMPORTED_MODULE_3__["Person"].isPersonGuard(this.primarySelection)) {
            sa.startDate = this.primarySelection.defaultStartDate;
            sa.endDate = this.primarySelection.defaultEndDate;
            sa.person = this.primarySelection;
            sa.site = item;
        }
        // Set dates by getting person's defaultStartDate / defaultEndDate
        this._allPendingChanges.push(sa);
    };
    MillerItemCheckboxComponent.prototype.deleteInitiatedSiteAccess = function (item, sa) {
        // Remove from arrays
        item.siteAccess = item.siteAccess.filter(function (x) { return x !== sa; });
        this._allPendingChanges = this._allPendingChanges.filter(function (x) { return x !== sa; });
        sa = null;
    };
    MillerItemCheckboxComponent.prototype.getSiteAccessForItem = function (item) {
        return item.siteAccess[0];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MillerItemCheckboxComponent.prototype, "items", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MillerItemCheckboxComponent.prototype, "selectedSiteAccess", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MillerItemCheckboxComponent.prototype, "primarySelection", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], MillerItemCheckboxComponent.prototype, "onPendingChanges", void 0);
    MillerItemCheckboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'prime-miller-item-checkbox',
            template: __webpack_require__(/*! ./miller-item-checkbox.component.html */ "./src/app/modules/verifier/components/miller-item-checkbox/miller-item-checkbox.component.html"),
            styles: [__webpack_require__(/*! ./miller-item-checkbox.component.scss */ "./src/app/modules/verifier/components/miller-item-checkbox/miller-item-checkbox.component.scss")],
            animations: [_animations_animations__WEBPACK_IMPORTED_MODULE_1__["growVertical"]]
        }),
        __metadata("design:paramtypes", [])
    ], MillerItemCheckboxComponent);
    return MillerItemCheckboxComponent;
}(_core_base_base_class__WEBPACK_IMPORTED_MODULE_5__["Base"]));



/***/ }),

/***/ "./src/app/modules/verifier/components/site-access-widgets/site-access-widgets.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/verifier/components/site-access-widgets/site-access-widgets.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\n    <div class=\"col\">\n      <div class=\"card\">\n        <div class=\"card-header d-flex justify-content-between\">\n          Upcoming Renewals\n\n          <span class='d-flex align-items-baseline'>\n            <div class=\"btn-group\">\n              <button class=\"btn btn-default\" ngDefaultControl (click)=\"renewalDateCutoff = 30\" [ngClass]=\"{active: renewalDateCutoff === 30 }\" btnRadio=\"30\" tabindex=\"0\" role=\"button\">30</button>\n              <button class=\"btn btn-default\" ngDefaultControl (click)=\"renewalDateCutoff = 60\" [ngClass]=\"{active: renewalDateCutoff === 60 }\" btnRadio=\"60\" tabindex=\"0\" role=\"button\">60</button>\n              <button class=\"btn btn-default\" ngDefaultControl (click)=\"renewalDateCutoff = 90\" [ngClass]=\"{active: renewalDateCutoff === 90 }\" btnRadio=\"90\" tabindex=\"0\" role=\"button\">90</button>\n            </div>\n            <i class=\"fa fa-reply fa-flip-horizontal ml-2\" aria-hidden=\"true\"></i>\n          </span>\n\n        </div>\n        <ul class=\"list-group list-group-flush\">\n          <li class=\"list-group-item d-flex justify-content-between\" *ngFor=\"let person of upcomingRenewals(renewalDateCutoff)\">\n            <span>{{person.name}}</span>\n            <span class='d-inline-flex align-items-center'>\n              <span class='mr-2' tooltip=\"{{ person.daysUntilRenewalDate }} days\" container=\"body\" delay=350>\n                {{formatDate(person.renewalDate)}}\n              </span>\n              <prime-info-button [targetId]=\"person.objectId\">\n              </prime-info-button>\n            </span>\n          </li>\n        </ul>\n      </div>\n    </div>\n\n    <div class=\"col\">\n      <div class=\"card\">\n        <div class=\"card-header d-flex justify-content-between\">\n          User status\n          <i class=\"fa fa-reply fa-flip-horizontal\" aria-hidden=\"true\"></i>\n        </div>\n        <div class=\"card-body pie-chart-container\" #pieChartContainer>\n          <ngx-charts-pie-chart\n            [view]='pieChartDimension'\n            [results]=\"pieChartData\"\n            [scheme]=\"'natural'\"\n            legend=true\n            legendTitle=''\n            (select)='onPieChartClick($event)'>\n          </ngx-charts-pie-chart>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col\">\n      <div class=\"card\">\n        <div class=\"card-header d-flex justify-content-between\">\n          Application Progress\n\n          <form class=\"form-inline\">\n            <select id=\"applicationProgressType\" class=\"form-control enrollment-view-selector\" [value]=\"applicationProgressSelector\"\n              (change)=\"applicationProgressSelector = $event.target.value\">\n              <option *ngFor=\"let type of SiteAccessProgressSteps\" value=\"{{type}}\">\n                {{type}}\n              </option>\n            </select>\n            <i class=\"fa fa-reply fa-flip-horizontal ml-2\" aria-hidden=\"true\"></i>\n          </form>\n\n        </div>\n        <ul class=\"list-group list-group-flush\">\n          <li class=\"list-group-item d-flex justify-content-between\" *ngFor=\"let siteAccess of applicationProgress()\">\n            <span class='application-text' tooltip=\"{{ siteAccess.person.name }} &ndash; {{ siteAccess.site.name}}\" container=\"body\"\n              delay=350>\n              {{ siteAccess.person.name }} &ndash; {{ siteAccess.site.name}}\n            </span>\n            <prime-info-button [targetId]=\"siteAccess.person.objectId\">\n            </prime-info-button>\n          </li>\n        </ul>\n      </div>\n    </div>\n\n  </div>\n"

/***/ }),

/***/ "./src/app/modules/verifier/components/site-access-widgets/site-access-widgets.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/verifier/components/site-access-widgets/site-access-widgets.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "prime-site-access-widgets .application-text {\n  white-space: nowrap;\n  display: inline-block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: calc(100% - 3rem); }\n\nprime-site-access-widgets .list-group, prime-site-access-widgets .card-body {\n  height: 17rem;\n  overflow-y: scroll;\n  position: relative; }\n\nprime-site-access-widgets .list-group .list-group-item, prime-site-access-widgets .card-body .list-group-item {\n    min-height: 44px; }\n\n.ngx-charts {\n  float: right !important;\n  margin-right: -7.5%; }\n\n.legend-labels {\n  width: 100px !important;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  max-height: unset !important; }\n\n.legend-labels > li:first-of-type {\n    padding-top: 1.75rem; }\n\n.chart-legend .legend-label {\n  color: #495057 !important; }\n\n.chart-legend .legend-label .active .legend-label-text {\n    text-decoration: underline; }\n\n.chart-legend .legend-label > ngx-charts-legend-entry > span {\n    display: block;\n    transition: -webkit-transform 0.2s;\n    transition: transform 0.2s;\n    transition: transform 0.2s, -webkit-transform 0.2s;\n    -webkit-font-smoothing: subpixel-antialiased;\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    -webkit-transform: translateZ(0);\n            transform: translateZ(0); }\n\n.chart-legend .legend-label .active {\n    transition: -webkit-transform 0.2s;\n    transition: transform 0.2s;\n    transition: transform 0.2s, -webkit-transform 0.2s;\n    -webkit-transform: translateY(-2.5px) scale(1.05) translateZ(0);\n            transform: translateY(-2.5px) scale(1.05) translateZ(0); }\n\n.pie-chart-container {\n  padding: 0; }\n"

/***/ }),

/***/ "./src/app/modules/verifier/components/site-access-widgets/site-access-widgets.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/verifier/components/site-access-widgets/site-access-widgets.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: SiteAccessWidgetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteAccessWidgetsComponent", function() { return SiteAccessWidgetsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_verifier_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/verifier.service */ "./src/app/services/verifier.service.ts");
/* harmony import */ var _models_sites_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models/sites.model */ "./src/app/models/sites.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SiteAccessWidgetsComponent = /** @class */ (function () {
    function SiteAccessWidgetsComponent(verifierService) {
        this.verifierService = verifierService;
        this.siteAccess = [];
        this.people = [];
        this.renewalDateCutoff = 30;
        //Current max width, but doesn't really play nice with mobile views
        this.pieChartDimension = [];
        this.colorScheme = {
            // primary/secondary/etc, from variables.scss
            domain: ['#036', '#fcba19', '#486446', '#96c0e6']
        };
    }
    SiteAccessWidgetsComponent.prototype.ngOnInit = function () {
        this.applicationProgressSelector = _models_sites_model__WEBPACK_IMPORTED_MODULE_3__["SiteAccessProgressSteps"].Verifier;
        this.pieChartData = this.calculatePieChartData();
        // Very hacky and should be for prototype only! Possibly remove/replace
        // entire chart library because this one does not play nicely and on re-size
        // it continually breaks / infinitely grows.  The height value determines if
        // the entire legend is visible.
        this.pieChartDimension = [
            // HACKFIX! Changing the first value here necessary for UX changes and adding site-wide container. Need to fix and do CSS changes later when there's time.
            this.pieChartContainer.nativeElement.offsetWidth - 50,
            this.pieChartContainer.nativeElement.offsetHeight,
        ];
    };
    Object.defineProperty(SiteAccessWidgetsComponent.prototype, "SiteAccessProgressSteps", {
        // Make enum accessible to template
        get: function () {
            return Object.keys(_models_sites_model__WEBPACK_IMPORTED_MODULE_3__["SiteAccessProgressSteps"]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SiteAccessWidgetsComponent.prototype, "EnrollmentStatus", {
        // Make enum iterable strings accessible in template
        // get EnrollmentStatus() {
        //   return Object.keys(EnrollmentStatus);
        // }
        get: function () {
            return Object.keys(this.verifierService.VerifierEnrollmentStatus);
        },
        enumerable: true,
        configurable: true
    });
    //days: 30/60/90
    // TODO: CHange this so it filters on PEOPLE RENEWAL DATE! Not SA daysUntilExpiry
    SiteAccessWidgetsComponent.prototype.upcomingRenewals = function (days) {
        // Copy the array so our sorting doesn't mess up other places
        // Don't get records that have a null renewal date
        var people = this.people.concat().filter(function (p) { return p.renewalDate; });
        // Expiring soon = Beginning of array
        people.sort(function (a, b) {
            return a.renewalDate.getTime() - b.renewalDate.getTime();
        });
        return people.filter(function (person) { return person.daysUntilRenewalDate <= days; });
    };
    SiteAccessWidgetsComponent.prototype.applicationProgress = function () {
        var selection = this.applicationProgressSelector;
        // Copy the array so our sorting doesn't mess up other places
        var result = this.siteAccess.concat();
        // Filter to only show 'problem' results, to match enrollment list
        result = result.filter(function (x) { return x.alert; });
        return result.filter(function (sa) { return sa.progress === selection; });
    };
    SiteAccessWidgetsComponent.prototype.calculatePieChartData = function () {
        var _this = this;
        return this.EnrollmentStatus.map(function (status) {
            return {
                name: status,
                value: _this.siteAccess.filter(function (sa) { return sa.status === status; }).length
            };
        });
    };
    SiteAccessWidgetsComponent.prototype.onPieChartClick = function ($event) {
        // console.log('onPieChartClick', $event);
        this.verifierService.enrollmentViewTypeSelector = $event.name;
    };
    SiteAccessWidgetsComponent.prototype.formatDate = function (date) {
        return moment__WEBPACK_IMPORTED_MODULE_1__(date).format('DD/MM/YYYY');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SiteAccessWidgetsComponent.prototype, "siteAccess", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SiteAccessWidgetsComponent.prototype, "people", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('pieChartContainer'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SiteAccessWidgetsComponent.prototype, "pieChartContainer", void 0);
    SiteAccessWidgetsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'prime-site-access-widgets',
            template: __webpack_require__(/*! ./site-access-widgets.component.html */ "./src/app/modules/verifier/components/site-access-widgets/site-access-widgets.component.html"),
            styles: [__webpack_require__(/*! ./site-access-widgets.component.scss */ "./src/app/modules/verifier/components/site-access-widgets/site-access-widgets.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_services_verifier_service__WEBPACK_IMPORTED_MODULE_2__["VerifierService"]])
    ], SiteAccessWidgetsComponent);
    return SiteAccessWidgetsComponent;
}());



/***/ }),

/***/ "./src/app/modules/verifier/pages/dashboard-page/dashboard-by-site/dashboard-by-site.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/verifier/pages/dashboard-page/dashboard-by-site/dashboard-by-site.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<prime-enrollment-list\n  [rowItems]=\"enrollmentBySiteData\"\n  primaryType='Site'\n></prime-enrollment-list>\n\n"

/***/ }),

/***/ "./src/app/modules/verifier/pages/dashboard-page/dashboard-by-site/dashboard-by-site.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/verifier/pages/dashboard-page/dashboard-by-site/dashboard-by-site.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/verifier/pages/dashboard-page/dashboard-by-site/dashboard-by-site.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/verifier/pages/dashboard-page/dashboard-by-site/dashboard-by-site.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: DashboardBySiteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardBySiteComponent", function() { return DashboardBySiteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_prime_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../services/prime-data.service */ "./src/app/services/prime-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardBySiteComponent = /** @class */ (function () {
    function DashboardBySiteComponent(dataService) {
        this.dataService = dataService;
    }
    Object.defineProperty(DashboardBySiteComponent.prototype, "enrollmentBySiteData", {
        get: function () {
            return this.dataService.getEnrollmentBySite();
        },
        enumerable: true,
        configurable: true
    });
    DashboardBySiteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'prime-dashboard-by-site',
            template: __webpack_require__(/*! ./dashboard-by-site.component.html */ "./src/app/modules/verifier/pages/dashboard-page/dashboard-by-site/dashboard-by-site.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-by-site.component.scss */ "./src/app/modules/verifier/pages/dashboard-page/dashboard-by-site/dashboard-by-site.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_prime_data_service__WEBPACK_IMPORTED_MODULE_1__["PrimeDataService"]])
    ], DashboardBySiteComponent);
    return DashboardBySiteComponent;
}());



/***/ }),

/***/ "./src/app/modules/verifier/pages/dashboard-page/dashboard-by-user/dashboard-by-user.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/verifier/pages/dashboard-page/dashboard-by-user/dashboard-by-user.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<prime-enrollment-list\n  [rowItems]=\"enrollmentByUserData\"\n  [primaryType]='\"User\"'\n></prime-enrollment-list>\n"

/***/ }),

/***/ "./src/app/modules/verifier/pages/dashboard-page/dashboard-by-user/dashboard-by-user.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/verifier/pages/dashboard-page/dashboard-by-user/dashboard-by-user.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/verifier/pages/dashboard-page/dashboard-by-user/dashboard-by-user.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/verifier/pages/dashboard-page/dashboard-by-user/dashboard-by-user.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: DashboardByUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardByUserComponent", function() { return DashboardByUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_prime_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../services/prime-data.service */ "./src/app/services/prime-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardByUserComponent = /** @class */ (function () {
    function DashboardByUserComponent(dataService) {
        this.dataService = dataService;
    }
    Object.defineProperty(DashboardByUserComponent.prototype, "enrollmentByUserData", {
        get: function () {
            return this.dataService.getEnrollmentByUser();
        },
        enumerable: true,
        configurable: true
    });
    DashboardByUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'prime-dashboard-by-user',
            template: __webpack_require__(/*! ./dashboard-by-user.component.html */ "./src/app/modules/verifier/pages/dashboard-page/dashboard-by-user/dashboard-by-user.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-by-user.component.scss */ "./src/app/modules/verifier/pages/dashboard-page/dashboard-by-user/dashboard-by-user.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_prime_data_service__WEBPACK_IMPORTED_MODULE_1__["PrimeDataService"]])
    ], DashboardByUserComponent);
    return DashboardByUserComponent;
}());



/***/ }),

/***/ "./src/app/modules/verifier/pages/dashboard-page/dashboard-page.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/verifier/pages/dashboard-page/dashboard-page.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<prime-alert>\n  System Notification: Server will be down for 2 hours maintenance at 14:30 PT.\n</prime-alert>\n\n<prime-dashboard-bar>\n</prime-dashboard-bar>\n\n<!-- <router-outlet name=\"dashboard\"></router-outlet> -->\n<router-outlet></router-outlet>\n\n<hr>\n\n<prime-site-access-widgets\n  [siteAccess]=\"siteAccesses\"\n  [people]=\"people\">\n</prime-site-access-widgets>\n"

/***/ }),

/***/ "./src/app/modules/verifier/pages/dashboard-page/dashboard-page.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/verifier/pages/dashboard-page/dashboard-page.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/verifier/pages/dashboard-page/dashboard-page.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/verifier/pages/dashboard-page/dashboard-page.component.ts ***!
  \***********************************************************************************/
/*! exports provided: DashboardPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageComponent", function() { return DashboardPageComponent; });
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


var DashboardPageComponent = /** @class */ (function () {
    function DashboardPageComponent(dataService) {
        this.dataService = dataService;
    }
    DashboardPageComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(DashboardPageComponent.prototype, "siteAccesses", {
        get: function () {
            return this.dataService.siteAccesses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardPageComponent.prototype, "people", {
        get: function () {
            return this.dataService.people;
        },
        enumerable: true,
        configurable: true
    });
    DashboardPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'prime-dashboard-page',
            template: __webpack_require__(/*! ./dashboard-page.component.html */ "./src/app/modules/verifier/pages/dashboard-page/dashboard-page.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-page.component.scss */ "./src/app/modules/verifier/pages/dashboard-page/dashboard-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_prime_data_service__WEBPACK_IMPORTED_MODULE_1__["PrimeDataService"]])
    ], DashboardPageComponent);
    return DashboardPageComponent;
}());



/***/ }),

/***/ "./src/app/modules/verifier/pages/site-enrollment/site-enrollment.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/verifier/pages/site-enrollment/site-enrollment.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<prime-miller-columns [config]=\"millerColumnByCollection\"></prime-miller-columns>\n"

/***/ }),

/***/ "./src/app/modules/verifier/pages/site-enrollment/site-enrollment.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/verifier/pages/site-enrollment/site-enrollment.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/verifier/pages/site-enrollment/site-enrollment.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/verifier/pages/site-enrollment/site-enrollment.component.ts ***!
  \*************************************************************************************/
/*! exports provided: SiteEnrollmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteEnrollmentComponent", function() { return SiteEnrollmentComponent; });
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



var SiteEnrollmentComponent = /** @class */ (function () {
    function SiteEnrollmentComponent(dataService, route) {
        this.dataService = dataService;
        this.route = route;
    }
    SiteEnrollmentComponent.prototype.ngOnInit = function () {
        this.millerColumnByCollection = this.dataService.getMillerColumnDataByCollection();
        var id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.millerColumnByCollection.options.preselectObjectId = id;
        }
    };
    SiteEnrollmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'prime-site-enrollment',
            template: __webpack_require__(/*! ./site-enrollment.component.html */ "./src/app/modules/verifier/pages/site-enrollment/site-enrollment.component.html"),
            styles: [__webpack_require__(/*! ./site-enrollment.component.scss */ "./src/app/modules/verifier/pages/site-enrollment/site-enrollment.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_prime_data_service__WEBPACK_IMPORTED_MODULE_2__["PrimeDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], SiteEnrollmentComponent);
    return SiteEnrollmentComponent;
}());



/***/ }),

/***/ "./src/app/modules/verifier/pages/user-enrollment/user-enrollment.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/verifier/pages/user-enrollment/user-enrollment.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<prime-miller-columns [config]=\"millerColumnByUser\"></prime-miller-columns>\n"

/***/ }),

/***/ "./src/app/modules/verifier/pages/user-enrollment/user-enrollment.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/verifier/pages/user-enrollment/user-enrollment.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/verifier/pages/user-enrollment/user-enrollment.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/verifier/pages/user-enrollment/user-enrollment.component.ts ***!
  \*************************************************************************************/
/*! exports provided: UserEnrollmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEnrollmentComponent", function() { return UserEnrollmentComponent; });
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



var UserEnrollmentComponent = /** @class */ (function () {
    function UserEnrollmentComponent(dataService, route) {
        this.dataService = dataService;
        this.route = route;
    }
    UserEnrollmentComponent.prototype.ngOnInit = function () {
        this.millerColumnByUser = this.dataService.getMillerColumnDataByUser();
        var id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.millerColumnByUser.options.preselectObjectId = id;
        }
    };
    UserEnrollmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'prime-user-enrollment',
            template: __webpack_require__(/*! ./user-enrollment.component.html */ "./src/app/modules/verifier/pages/user-enrollment/user-enrollment.component.html"),
            styles: [__webpack_require__(/*! ./user-enrollment.component.scss */ "./src/app/modules/verifier/pages/user-enrollment/user-enrollment.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_prime_data_service__WEBPACK_IMPORTED_MODULE_2__["PrimeDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], UserEnrollmentComponent);
    return UserEnrollmentComponent;
}());



/***/ }),

/***/ "./src/app/modules/verifier/verifier-routing.modules.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/verifier/verifier-routing.modules.ts ***!
  \**************************************************************/
/*! exports provided: VerifierRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifierRoutingModule", function() { return VerifierRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_dashboard_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/dashboard-page/dashboard-page.component */ "./src/app/modules/verifier/pages/dashboard-page/dashboard-page.component.ts");
/* harmony import */ var _pages_dashboard_page_dashboard_by_user_dashboard_by_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/dashboard-page/dashboard-by-user/dashboard-by-user.component */ "./src/app/modules/verifier/pages/dashboard-page/dashboard-by-user/dashboard-by-user.component.ts");
/* harmony import */ var _pages_dashboard_page_dashboard_by_site_dashboard_by_site_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/dashboard-page/dashboard-by-site/dashboard-by-site.component */ "./src/app/modules/verifier/pages/dashboard-page/dashboard-by-site/dashboard-by-site.component.ts");
/* harmony import */ var _pages_user_enrollment_user_enrollment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/user-enrollment/user-enrollment.component */ "./src/app/modules/verifier/pages/user-enrollment/user-enrollment.component.ts");
/* harmony import */ var _pages_site_enrollment_site_enrollment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/site-enrollment/site-enrollment.component */ "./src/app/modules/verifier/pages/site-enrollment/site-enrollment.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// MOVE THESE TWO


var routes = [
    {
        path: 'dashboard',
        component: _pages_dashboard_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_2__["DashboardPageComponent"],
        children: [
            {
                path: 'user',
                component: _pages_dashboard_page_dashboard_by_user_dashboard_by_user_component__WEBPACK_IMPORTED_MODULE_3__["DashboardByUserComponent"],
            },
            {
                path: 'site',
                component: _pages_dashboard_page_dashboard_by_site_dashboard_by_site_component__WEBPACK_IMPORTED_MODULE_4__["DashboardBySiteComponent"],
            },
            {
                path: '**',
                redirectTo: 'user'
            }
        ]
    },
    {
        path: 'details',
        children: [
            /**
             * Enrollment routes below must be duplicated, one with /:id and one
             * without. Using :id allows deep linking to specific items.
             */
            {
                path: 'user',
                component: _pages_user_enrollment_user_enrollment_component__WEBPACK_IMPORTED_MODULE_5__["UserEnrollmentComponent"],
            },
            {
                path: 'site',
                component: _pages_site_enrollment_site_enrollment_component__WEBPACK_IMPORTED_MODULE_6__["SiteEnrollmentComponent"],
            },
            {
                path: 'user/:id',
                component: _pages_user_enrollment_user_enrollment_component__WEBPACK_IMPORTED_MODULE_5__["UserEnrollmentComponent"],
            },
            {
                path: 'site/:id',
                component: _pages_site_enrollment_site_enrollment_component__WEBPACK_IMPORTED_MODULE_6__["SiteEnrollmentComponent"],
            },
            {
                path: '**',
                redirectTo: 'user'
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    }
];
var VerifierRoutingModule = /** @class */ (function () {
    function VerifierRoutingModule() {
    }
    VerifierRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], VerifierRoutingModule);
    return VerifierRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/verifier/verifier.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/verifier/verifier.module.ts ***!
  \*****************************************************/
/*! exports provided: VerifierModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifierModule", function() { return VerifierModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/index.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _verifier_routing_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./verifier-routing.modules */ "./src/app/modules/verifier/verifier-routing.modules.ts");
/* harmony import */ var _pages_dashboard_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/dashboard-page/dashboard-page.component */ "./src/app/modules/verifier/pages/dashboard-page/dashboard-page.component.ts");
/* harmony import */ var _pages_dashboard_page_dashboard_by_user_dashboard_by_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/dashboard-page/dashboard-by-user/dashboard-by-user.component */ "./src/app/modules/verifier/pages/dashboard-page/dashboard-by-user/dashboard-by-user.component.ts");
/* harmony import */ var _pages_dashboard_page_dashboard_by_site_dashboard_by_site_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/dashboard-page/dashboard-by-site/dashboard-by-site.component */ "./src/app/modules/verifier/pages/dashboard-page/dashboard-by-site/dashboard-by-site.component.ts");
/* harmony import */ var _pages_site_enrollment_site_enrollment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/site-enrollment/site-enrollment.component */ "./src/app/modules/verifier/pages/site-enrollment/site-enrollment.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/core.module */ "./src/app/modules/core/core.module.ts");
/* harmony import */ var _components_miller_item_checkbox_miller_item_checkbox_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/miller-item-checkbox/miller-item-checkbox.component */ "./src/app/modules/verifier/components/miller-item-checkbox/miller-item-checkbox.component.ts");
/* harmony import */ var _components_enrollment_list_enrollment_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/enrollment-list/enrollment-list.component */ "./src/app/modules/verifier/components/enrollment-list/enrollment-list.component.ts");
/* harmony import */ var _components_enrollment_row_enrollment_row_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/enrollment-row/enrollment-row.component */ "./src/app/modules/verifier/components/enrollment-row/enrollment-row.component.ts");
/* harmony import */ var _components_miller_columns_miller_columns_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/miller-columns/miller-columns.component */ "./src/app/modules/verifier/components/miller-columns/miller-columns.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pages_user_enrollment_user_enrollment_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/user-enrollment/user-enrollment.component */ "./src/app/modules/verifier/pages/user-enrollment/user-enrollment.component.ts");
/* harmony import */ var _components_site_access_widgets_site_access_widgets_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/site-access-widgets/site-access-widgets.component */ "./src/app/modules/verifier/components/site-access-widgets/site-access-widgets.component.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var VerifierModule = /** @class */ (function () {
    function VerifierModule() {
    }
    VerifierModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _verifier_routing_modules__WEBPACK_IMPORTED_MODULE_3__["VerifierRoutingModule"],
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__["NgxChartsModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_16__["TooltipModule"].forRoot()
            ],
            providers: [],
            declarations: [
                _pages_dashboard_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_4__["DashboardPageComponent"],
                _pages_dashboard_page_dashboard_by_user_dashboard_by_user_component__WEBPACK_IMPORTED_MODULE_5__["DashboardByUserComponent"],
                _pages_dashboard_page_dashboard_by_site_dashboard_by_site_component__WEBPACK_IMPORTED_MODULE_6__["DashboardBySiteComponent"],
                _pages_user_enrollment_user_enrollment_component__WEBPACK_IMPORTED_MODULE_14__["UserEnrollmentComponent"],
                _pages_site_enrollment_site_enrollment_component__WEBPACK_IMPORTED_MODULE_7__["SiteEnrollmentComponent"],
                _components_miller_item_checkbox_miller_item_checkbox_component__WEBPACK_IMPORTED_MODULE_9__["MillerItemCheckboxComponent"],
                _components_enrollment_list_enrollment_list_component__WEBPACK_IMPORTED_MODULE_10__["EnrollmentListComponent"],
                _components_enrollment_row_enrollment_row_component__WEBPACK_IMPORTED_MODULE_11__["EnrollmentRowComponent"],
                _components_miller_columns_miller_columns_component__WEBPACK_IMPORTED_MODULE_12__["MillerColumnsComponent"],
                _components_site_access_widgets_site_access_widgets_component__WEBPACK_IMPORTED_MODULE_15__["SiteAccessWidgetsComponent"]
            ],
            exports: [
                _components_miller_item_checkbox_miller_item_checkbox_component__WEBPACK_IMPORTED_MODULE_9__["MillerItemCheckboxComponent"],
                _components_enrollment_list_enrollment_list_component__WEBPACK_IMPORTED_MODULE_10__["EnrollmentListComponent"],
                _components_enrollment_row_enrollment_row_component__WEBPACK_IMPORTED_MODULE_11__["EnrollmentRowComponent"],
                _components_miller_columns_miller_columns_component__WEBPACK_IMPORTED_MODULE_12__["MillerColumnsComponent"]
            ]
        })
    ], VerifierModule);
    return VerifierModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-modules-provisioner-provisioner-module~app-modules-verifier-verifier-module.js.map