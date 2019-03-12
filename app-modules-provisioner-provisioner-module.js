(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-provisioner-provisioner-module"],{

/***/ "./src/app/modules/provisioner/components/provisioner-list/provisioner-list.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/provisioner/components/provisioner-list/provisioner-list.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"enrollment-list-controls bg-light\">\n  <form class=\"form-inline\">\n    <input class=\"form-control\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\" (input)=\"search($event.target.value)\">\n  </form>\n\n  <form class=\"form-inline\">\n\n    <button class='btn btn-default mr-3' (click)=\"sort()\">\n      <i class=\"fa fa-sort-alpha-asc\" aria-hidden=\"true\"></i>\n    </button>\n\n    <label for=\"enrollmentViewSelector\" class='d-none d-sm-flex mr-0 mr-sm-2'>View</label>\n    <select id=\"enrollmentViewSelector\" class=\"form-control enrollment-view-selector\" [value]=\"viewTypeSelector\" (change)=\"viewTypes($event.target.value)\">\n      <option value=\"View All\">View All</option>\n      <option *ngFor=\"let status of EnrollmentStatus\" value=\"{{status}}\">\n        {{status}}\n      </option>\n    </select>\n  </form>\n\n</div> -->\n\n<div class=\"enrollment-list-controls bg-light\">\n    <div>\n     <!-- <form class=\"form-inline\">\n        <span class=\"has-float-label\">\n          <input class=\"form-control bg-transparent\" type=\"search\" placeholder=\"Sites\" aria-label=\"Sites\" (input)=\"search($event.target.value)\">\n          <span>Sites</span>\n        </span>\n\n        <label class=\"has-float-label mx-2\">\n          <select id=\"enrollmentViewSelector\" class=\"form-control enrollment-view-selector\" [value]=\"viewTypeSelector\" (change)=\"viewTypes($event.target.value)\">\n            <option value=\"View All\">All</option>\n            <option *ngFor=\"let status of EnrollmentStatus\" value=\"{{status}}\">\n              {{status}}\n            </option>\n          </select>\n          <span>View</span>\n        </label>\n      </form>-->\n    </div>\n    <div>\n      <prime-alert inlineBlock='true' *ngIf=\"showSaveMessage\" [@fadeIn] dismissable='' type='success'>Saved....</prime-alert>\n\n      <button [disabled]=\"!updated\" type=\"button\" class=\"btn btn-default mx-2\" (click)=\"cancel()\">Cancel</button>\n      <button [disabled]=\"!updated\" type=\"button\" class=\"btn btn-primary mx-2\" (click)=\"save()\" [primeLoadingSpinner]=\"loadingSpinner\" >Save</button>\n      <prime-add-user-button *ngIf=\"primaryType === 'Site'\" (onAddNewUser)=\"onAddNewPerson($event)\">\n      </prime-add-user-button>\n    </div>\n  </div>\n\n\n<div class=\"enrollment-item-container\">\n  <div class=\"enrollment-item-inner\">\n    <prime-provisioner-row\n      *ngFor=\"let item of data\"\n      [rowData]='item'\n      [primaryType]='primaryType'\n      (onRowOpened)='rowOpened($event)'\n      (siteAccessChange)='onSiteAccessChange($event)'>\n    </prime-provisioner-row>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/modules/provisioner/components/provisioner-list/provisioner-list.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/provisioner/components/provisioner-list/provisioner-list.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".enrollment-item-container {\n  border-top: none;\n  height: 25rem;\n  overflow-y: scroll; }\n  .enrollment-item-container .enrollment-item-inner {\n    border-right: 2px solid #dee2e6;\n    border-left: 2px solid #dee2e6;\n    border-bottom: 2px solid #dee2e6;\n    min-height: 100%; }\n  .enrollment-list-controls {\n  border: 2px solid #dee2e6;\n  min-height: 4em;\n  padding: 1em;\n  border-bottom: none;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between; }\n  .enrollment-view-selector {\n  min-width: 5em; }\n  .has-float-label + .has-float-label {\n  margin-top: initial; }\n  .has-float-label + .has-float-label select {\n    height: auto; }\n  .enrollment-list-controls {\n  border: 2px solid #dee2e6; }\n  .enrollment-item-container {\n  border-top: none;\n  overflow-y: scroll;\n  height: 25rem;\n  overflow-x: hidden; }\n  .enrollment-item-container .enrollment-item-inner {\n    border-right: 2px solid #dee2e6;\n    border-left: 2px solid #dee2e6;\n    border-bottom: 2px solid #dee2e6;\n    min-height: 100%; }\n  .enrollment-list-controls {\n  min-height: 4em;\n  padding: 1em;\n  border-bottom: none;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between; }\n  .enrollment-view-selector {\n  min-width: 5em; }\n"

/***/ }),

/***/ "./src/app/modules/provisioner/components/provisioner-list/provisioner-list.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/provisioner/components/provisioner-list/provisioner-list.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ProvisionerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvisionerListComponent", function() { return ProvisionerListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_enrollment_list_enrollment_list_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/enrollment-list/enrollment-list.class */ "./src/app/core/enrollment-list/enrollment-list.class.ts");
/* harmony import */ var _models_enrollment_status_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../models/enrollment-status.enum */ "./src/app/models/enrollment-status.enum.ts");
/* harmony import */ var _provisioner_row_provisioner_row_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../provisioner-row/provisioner-row.component */ "./src/app/modules/provisioner/components/provisioner-row/provisioner-row.component.ts");
/* harmony import */ var _models_sites_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../models/sites.model */ "./src/app/models/sites.model.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_prime_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/prime-data.service */ "./src/app/services/prime-data.service.ts");
/* harmony import */ var _animations_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../animations/animations */ "./src/app/animations/animations.ts");
/* harmony import */ var _models_organization_access_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../models/organization-access.model */ "./src/app/models/organization-access.model.ts");
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









var ProvisionerListComponent = /** @class */ (function (_super) {
    __extends(ProvisionerListComponent, _super);
    function ProvisionerListComponent(dataService, cd) {
        var _this = _super.call(this) || this;
        _this.dataService = dataService;
        _this.cd = cd;
        _this.rowItems = [];
        _this.primaryType = 'User';
        _this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        _this.showSaveMessage = false;
        _this.loadingSpinner = false;
        _this._pendingUpdates = [];
        _this._enrollmentStatus = [
            _models_enrollment_status_enum__WEBPACK_IMPORTED_MODULE_2__["EnrollmentStatus"].Approved,
            _models_enrollment_status_enum__WEBPACK_IMPORTED_MODULE_2__["EnrollmentStatus"].Declined,
            _models_enrollment_status_enum__WEBPACK_IMPORTED_MODULE_2__["EnrollmentStatus"].New,
        ];
        return _this;
    }
    ProvisionerListComponent.prototype.ngOnInit = function () {
        if (this.rowItems) {
            // this.data = this.rowItems;
            this.data = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["cloneDeep"])(this.rowItems);
            console.log('OnInit (ProvisionerListComponent): ', this.data);
        }
    };
    ProvisionerListComponent.prototype.ngOnChanges = function (changes) {
        if (this.rowItems && this.data && this.rowItems.length !== this.data.length) {
            this.data = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["cloneDeep"])(this.rowItems);
        }
    };
    Object.defineProperty(ProvisionerListComponent.prototype, "EnrollmentStatus", {
        get: function () {
            return this._enrollmentStatus;
        },
        enumerable: true,
        configurable: true
    });
    ProvisionerListComponent.prototype.onAddNewPerson = function (person) {
        console.log('onAddNewPerson', person);
        var sa = new _models_sites_model__WEBPACK_IMPORTED_MODULE_4__["SiteAccess"]();
        sa.site = this.parentSite;
        sa.person = person;
        person.siteAccess.push(sa);
        this.parentSite.siteAccess.push(sa);
        // For prototype, we simulate as if the user already has org selected
        var orgs = this.dataService.findCollectionFromSite(this.parentSite);
        if (orgs.length) {
            var org = orgs[0];
            var orgAccess = new _models_organization_access_model__WEBPACK_IMPORTED_MODULE_8__["OrganizationAccess"](person, org);
            person.organizationAccess.push(orgAccess);
            org.organizationAccess.push(orgAccess);
            this.dataService.organizationAccess.push(orgAccess);
        }
        console.log('New Person created, associated with site');
        this.dataService.siteAccesses.push(sa);
    };
    ProvisionerListComponent.prototype.rowOpened = function (item) {
        console.log('rowOpened', { item: item, rowElements: this.rowElements });
        this.rowElements.filter(function (x) { return x !== item; })
            .map(function (x) { return x.closeRow(); });
    };
    ProvisionerListComponent.prototype.cancel = function () {
        console.log('Cancel');
        this._pendingUpdates = [];
        // Revert to orig data
        this.data = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["cloneDeep"])(this.rowItems);
    };
    ProvisionerListComponent.prototype.save = function () {
        var _this = this;
        console.log('Save!');
        this.loadingSpinner = true;
        setTimeout(function () {
            var now = new Date();
            _this._pendingUpdates.map(function (sa) {
                var orig = _this.dataService.findSiteAccessByObjectId(sa.objectId);
                if (sa.endDate && sa.endDate.getDate && now > sa.endDate) {
                    sa.status = _models_enrollment_status_enum__WEBPACK_IMPORTED_MODULE_2__["EnrollmentStatus"].Ended;
                }
                else {
                    sa.status = _models_enrollment_status_enum__WEBPACK_IMPORTED_MODULE_2__["EnrollmentStatus"].Provisioning;
                }
                _this.updateSiteAccess(orig, sa);
            });
            _this.loadingSpinner = false;
            _this.showSaveMessage = true;
            // Update orig copy of data now that user has saved them.
            _this.rowItems = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["cloneDeep"])(_this.data);
            _this._pendingUpdates = [];
        }, 3000);
    };
    ProvisionerListComponent.prototype.onSiteAccessChange = function (item) {
        this.showSaveMessage = false; //Now there are pending unsaved changes, so hide message.
        var found = this._pendingUpdates.find(function (sa) { return sa.objectId === item.objectId; });
        console.log('ProvList, onSiteAccessChange', { item: item, found: found });
        if (found) {
            this.updateSiteAccess(found, item);
        }
        else {
            this._pendingUpdates.push(item);
        }
    };
    ProvisionerListComponent.prototype.search = function (phrase) {
        console.log('ProvisionerList SEARCH:', phrase);
    };
    ProvisionerListComponent.prototype.viewTypes = function (type) {
        if (type === _core_enrollment_list_enrollment_list_class__WEBPACK_IMPORTED_MODULE_1__["defaultViewSelector"]) {
            return this.data = this.rowItems;
        }
        this.deepSearch(function (expandableRow) {
            return expandableRow.status.includes(type);
        });
    };
    Object.defineProperty(ProvisionerListComponent.prototype, "updated", {
        get: function () {
            return this._pendingUpdates.length >= 1 && !this.loadingSpinner;
        },
        enumerable: true,
        configurable: true
    });
    ProvisionerListComponent.prototype.updateSiteAccess = function (target, source) {
        console.log("status" + target.status);
        target.personalAccess = source.personalAccess;
        target.provisionedDate = source.provisionedDate;
        target.posUserId = source.posUserId;
        target.status = source.status;
        target.startDate = source.startDate;
        target.endDate = source.endDate;
        return target;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ProvisionerListComponent.prototype, "rowItems", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ProvisionerListComponent.prototype, "primaryType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProvisionerListComponent.prototype, "change", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_sites_model__WEBPACK_IMPORTED_MODULE_4__["Site"])
    ], ProvisionerListComponent.prototype, "parentSite", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(_provisioner_row_provisioner_row_component__WEBPACK_IMPORTED_MODULE_3__["ProvisionerRowComponent"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], ProvisionerListComponent.prototype, "rowElements", void 0);
    ProvisionerListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'prime-provisioner-list',
            template: __webpack_require__(/*! ./provisioner-list.component.html */ "./src/app/modules/provisioner/components/provisioner-list/provisioner-list.component.html"),
            styles: [__webpack_require__(/*! ./provisioner-list.component.scss */ "./src/app/modules/provisioner/components/provisioner-list/provisioner-list.component.scss")],
            animations: [_animations_animations__WEBPACK_IMPORTED_MODULE_7__["fadeIn"]]
        }),
        __metadata("design:paramtypes", [_services_prime_data_service__WEBPACK_IMPORTED_MODULE_6__["PrimeDataService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], ProvisionerListComponent);
    return ProvisionerListComponent;
}(_core_enrollment_list_enrollment_list_class__WEBPACK_IMPORTED_MODULE_1__["EnrollmentList"]));



/***/ }),

/***/ "./src/app/modules/provisioner/components/provisioner-row/provisioner-row.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/provisioner/components/provisioner-row/provisioner-row.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  *ngIf=\"primaryType === 'User'\" class=\"enrollment-list-item\" (click)=\"toggleRow()\">\n\n  <div class=\"enrollment-text-container\">\n    <span class=\"enrollment-text-main font-weight-bold\">\n      <i class='fa fa-caret-down' [@rotate180]='showProvisionerDetailsRowOverride ? \"opened\" : \"closed\"'></i>\n      {{orgName}}</span>\n  </div>\n</div>\n\n<div [@growVertical] class=\"provisioner-table-container site-table table-responsive ml-2 \" *ngIf=\" primaryType === 'Site'\">\n  <table  >\n    <tr>\n      <td class=\"enrollment-text-main font-weight-bold \" width = \"20%\"></td>\n      <td class=\"enrollment-text-main font-weight-bold\" width = \"10%\"> Start Date</td>\n      <td class=\"enrollment-text-main font-weight-bold\" width = \"10%\">End Date</td>\n      <td class=\"enrollment-text-main font-weight-bold\" width = \"10%\">Pos User ID</td>\n      <td class=\"enrollment-text-main font-weight-bold\" width = \"10%\"> Personal Access</td>\n      <td class=\"enrollment-text-main font-weight-bold\" width = \"10%\">Date Provisioned</td>\n      <td class=\"enrollment-text-main font-weight-bold\" width = \"10%\" align=\"center\">Status</td>\n\n    </tr>\n    <tr >\n      <td class=\"provision-element-text\">{{rowData.title}}\n        <prime-info-button [targetId]=\"rowData.associatedObjectId\"></prime-info-button>\n      </td>\n      <td>\n        <prime-datepicker size=\"mini\" (dateChange)=\"onChangeStartDate($event ,rowData.siteAccess[0])\" [(date)]=\"rowData.siteAccess[0].startDate\"\n          id=\"startDateShort\" name=\"startDateShort\" placeholder=\" \" dateFormat=\"yyyy/mm/dd\" tabindex=\"1\"></prime-datepicker>\n      </td>\n      <td>\n        <prime-datepicker size=\"mini\" (dateChange)=\"onChangeEndDate($event ,rowData.siteAccess[0])\" [(date)]=\"rowData.siteAccess[0].endDate\"\n          id=\"endDateShort\" name=\"endDateShort\" placeholder=\" \" dateFormat=\"yyyy/mm/dd\" tabindex=\"1\"></prime-datepicker>\n      </td>\n      <td class=\"provision-element-label\"> <input type=\"text\" class=\"form-control mb-2 mr-sm-2\" id=\"posuid\" (change)=\"onChange($event , rowData.siteAccess[0])\"\n          name=\"posuid\" placeholder=\" \" tabindex=\"1\" [(ngModel)]=\"rowData.siteAccess[0].posUserId\" (change)=\"onChange($event, rowData.siteAccess[0])\">\n      </td>\n      <!--Personal Access -->\n      <td class=\"provision-element-label\">\n\n        <select class=\"form-control access-type-selector mb-2\" [(ngModel)]='rowData.siteAccess[0].personalAccess' (change)=\"onChange($event, rowData.siteAccess[0])\" >\n          <option *ngFor=\"let status of accessType\"\n                  value=\"{{status}}\">\n            {{status}}\n          </option>\n        </select>\n\n      </td>\n\n      <!-- DateProvisioned -->\n      <td class=\"provision-element-label\">\n        <prime-datepicker size=\"mini\"  (dateChange)=\"onChangeprovisionedDate($event ,rowData.siteAccess[0])\" [(date)]='rowData.siteAccess[0].provisionedDate' id=\"provisionDateShort\" name=\"provisionDateShort\" placeholder=\" \"  dateFormat=\"yyyy/mm/dd\"  tabindex=\"1\"></prime-datepicker>\n      </td>\n      <!--status -->\n      <td class=\"provision-element-label\" align=\"right\">\n\n        <!-- <select class=\"form-control access-type-selector\" [(ngModel)]='rowData.siteAccess[0].status'>\n          <option value=\"{{rowData.siteAccess[0].status}}\">{{rowData.siteAccess[0].status}}\n          </option>\n        </select> -->\n\n\n        <prime-pill-badge\n          [alerts]=\"[rowData.siteAccess[0].alert]\"\n          [iconOnly]='false'>\n        </prime-pill-badge>\n\n\n        <!--    <prime-pill-badge\n              [alerts]=\"[rowDataSite.siteAccess[0].alert]\"\n              [iconOnly]='false'>\n            </prime-pill-badge>-->\n      </td>\n\n    </tr>\n  </table>\n</div>\n\n<div [@growVertical] class=\"provisioner-table-container table-responsive ml-2 \" *ngIf=\" (isNew || showProvisionerDetailsRowOverride) && primaryType === 'User'\" >\n  <table >\n    <tr class='flex-table-row'>\n      <td class=\"provision-element-label\" width = \"11%\"></td>\n      <td class=\"provision-element-label\" width = \"5%\">Site Type</td>\n      <td class=\"provision-element-label\" width = \"5%\">Start Date</td>\n      <td class=\"provision-element-label\" width = \"5%\">End Date</td>\n      <td class=\"provision-element-label\" width = \"6%\"> POS User ID</td>\n      <td class=\"provision-element-label\" width = \"6%\" >Personal Access</td>\n      <td class=\"provision-element-label\" width = \"5%\">Date Provisioned</td>\n      <td class=\"provision-element-label\" width = \"6%\" >Status</td>\n    </tr>\n    <tr class='flex-table-row' *ngFor=\"let rowDataSite of sites\">\n      <td class=\"provision-element-text\">\n        {{rowDataSite.name}}\n        <prime-info-button [targetId]=\"rowDataSite.objectId\"></prime-info-button>\n      </td>\n      <td class=\"provision-element-text\">\n        {{ rowDataSite.siteType }}\n      </td>\n\n      <td>\n        <!-- Start Date -->\n        <prime-datepicker size=\"mini\"\n                          (dateChange)=\"onChangeStartDate($event, getSiteAccessFromSite(rowDataSite))\"\n                          [date]=\"getSiteAccessFromSite(rowDataSite).startDate\"\n                          id=\"startDateShort\"\n                          name=\"startDateShort\"\n                          placeholder=\" \"\n                          dateFormat=\"yyyy/mm/dd\"\n                          tabindex=\"1\"></prime-datepicker>\n      </td>\n      <td>\n        <!-- End Date -->\n        <prime-datepicker size=\"mini\"\n                          (dateChange)=\"onChangeEndDate($event, getSiteAccessFromSite(rowDataSite))\"\n                          [date]=\"getSiteAccessFromSite(rowDataSite).endDate\"\n                          id=\"endDateShort\"\n                          name=\"endDateShort\"\n                          placeholder=\" \"\n                          dateFormat=\"yyyy/mm/dd\"\n                          tabindex=\"1\"></prime-datepicker>\n      </td>\n      <!-- POS User ID -->\n      <td class=\"provision-element-label\"> <input type=\"text\"\n               class=\"form-control mb-2 mr-sm-2\"\n               id=\"posuid\"\n               (change)=\"onChange($event , getSiteAccessFromSite(rowDataSite))\"\n               name=\"posuid\"\n               placeholder=\" \"\n               tabindex=\"1\"\n               [(ngModel)]=\"getSiteAccessFromSite(rowDataSite).posUserId\"\n               (change)=\"onChange($event, rowDataSite.siteAccess[0])\">\n      </td>\n      <!--Personal Access -->\n      <td class=\"provision-element-label\">\n\n        <select class=\"form-control access-type-selector mb-2 mr-sm-2\"\n                [(ngModel)]='getSiteAccessFromSite(rowDataSite).personalAccess'\n                (change)=\"onChange($event, getSiteAccessFromSite(rowDataSite) )\">\n          <option *ngFor=\"let status of accessType\"\n                  value=\"{{status}}\">\n            {{status}}\n          </option>\n        </select>\n\n      </td>\n      <!-- DateProvisioned -->\n      <td class=\"provision-element-label\">\n        <prime-datepicker size=\"mini\"\n                          (dateChange)=\"onChangeprovisionedDate($event ,getSiteAccessFromSite(rowDataSite))\"\n                          [(date)]='getSiteAccessFromSite(rowDataSite).provisionedDate'\n                          id=\"provisionDateShort\"\n                          name=\"provisionDateShort\"\n                          placeholder=\" \"\n                          dateFormat=\"yyyy/mm/dd\"\n                          tabindex=\"1\"></prime-datepicker>\n      </td>\n      <!--Status -->\n      <td class=\"provision-element-label\">\n        <!-- <select class=\"form-control status-dropdown mb-2\" [(ngModel)]='getSiteAccessFromSite(rowDataSite).status'>\n          <option value=\"{{getSiteAccessFromSite(rowDataSite).status}}\">{{ getSiteAccessFromSite(rowDataSite).status}}\n          </option>\n        </select> -->\n\n\n\n       <prime-pill-badge\n          [alerts]=\"[getSiteAccessFromSite(rowDataSite).alert]\"\n          [iconOnly]='false'>\n        </prime-pill-badge>\n       </td>\n\n\n    </tr>\n  </table>\n</div>\n<!--\n<div [@openState]=\"openState\">\n  <div [@openStateChild]=\"openState\"  class=\"expandable-container\">\n    <div class=\"enrollment-expandable\" >\n      <prime-enrollment-progress-row\n        [open]='true'\n        [data]='siteAccessObject'>\n      </prime-enrollment-progress-row>\n    </div>\n  </div>\n</div>\n-->\n"

/***/ }),

/***/ "./src/app/modules/provisioner/components/provisioner-row/provisioner-row.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/provisioner/components/provisioner-row/provisioner-row.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  background: #e9ecef; }\n\n.enrollment-icons,\n.enrollment-list-item,\n.enrollment-expandable {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end; }\n\n.enrollment-list-item {\n  border: 1px solid #adb5bd;\n  border-left: none;\n  border-right: none;\n  min-height: 4em;\n  background: white;\n  z-index: 1;\n  position: relative; }\n\n.enrollment-expandable,\n.enrollment-list-item {\n  transition: 0.25s; }\n\n.enrollment-expandable:hover,\n  .enrollment-list-item:hover {\n    background: #f9f9f9; }\n\n.enrollment-expandable {\n  color: #495057;\n  min-height: 4em;\n  border: 1px solid #adb5bd;\n  flex-wrap: wrap;\n  background: #e9ecef; }\n\n.enrollment-actions {\n  display: flex;\n  align-items: center;\n  align-self: stretch; }\n\n.enrollment-actions .btn-block {\n    border-radius: 0;\n    border-top: 0;\n    border-right: 0;\n    border-bottom: 0;\n    height: 100%; }\n\n.enrollment-text-container {\n  min-height: 4em;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  flex: 5;\n  padding-left: 1em;\n  margin-right: 2em; }\n\n.enrollment-text-container .enrollment-text-main {\n    font-size: 1.072rem; }\n\n.enrollment-text-container > span:not(:last-of-type):not(.no-separator):after {\n    font-size: 1rem;\n    color: #6c757d;\n    content: \" / \"; }\n\n@media (max-width: 575.98px) {\n    .enrollment-text-container > span:first-of-type:after {\n      content: \"\";\n      display: block; } }\n\n.enrollment-text-container > span:not(.enrollment-text-main) {\n    color: #6c757d;\n    margin-left: 0.1rem; }\n\n.enrollment-icons > i {\n  padding: 0 5px;\n  font-size: 18px;\n  cursor: pointer; }\n\n.enrollment-icons > i.fa-edit {\n    font-size: 1.75rem; }\n\n:host {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  background: #e9ecef; }\n\n.enrollment-icons,\n.enrollment-list-item,\n.enrollment-expandable {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: space-between; }\n\n.enrollment-list-item {\n  border: 1px solid #adb5bd;\n  border-left: none;\n  border-right: none;\n  min-height: 4em;\n  background: white;\n  z-index: 1;\n  position: relative; }\n\n.enrollment-expandable,\n.enrollment-list-item {\n  transition: 0.25s; }\n\n.enrollment-expandable:hover,\n  .enrollment-list-item:hover {\n    background: #f9f9f9; }\n\n.enrollment-expandable {\n  color: #495057;\n  min-height: 4em;\n  border: 1px solid #adb5bd;\n  flex-wrap: wrap;\n  background: #e9ecef; }\n\n.enrollment-actions {\n  display: flex;\n  align-items: center;\n  align-self: stretch; }\n\n.enrollment-actions .btn-block {\n    border-radius: 0;\n    border-top: 0;\n    border-right: 0;\n    border-bottom: 0;\n    height: 100%; }\n\ntable {\n  width: 100%;\n  border-collapse: separate; }\n\n.provision-element-label {\n  font-size: 0.85rem; }\n\n.color {\n  background-color: lightgrey; }\n\n.enrollment-text-container {\n  min-height: 4em;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  flex: 5;\n  padding-left: 1em;\n  margin-right: 2em; }\n\n.enrollment-text-container .enrollment-text-main {\n    font-size: 1.072rem; }\n\n.enrollment-text-container .enrollment-text-bold {\n    font-weight: bolder; }\n\n.enrollment-text-container > span:not(:last-of-type):after {\n    font-size: 1rem;\n    color: #6c757d;\n    content: \" / \"; }\n\n@media (max-width: 575.98px) {\n    .enrollment-text-container > span:first-of-type:after {\n      content: \"\";\n      display: block; } }\n\n.enrollment-text-container > span:not(.enrollment-text-main) {\n    color: #6c757d;\n    margin-left: 0.1rem; }\n\n.enrollment-icons > i {\n  padding: 0 5px;\n  font-size: 18px;\n  cursor: pointer; }\n\n.enrollment-icons > i.fa-edit {\n    font-size: 1.75rem; }\n\n.btn-circle {\n  border-radius: 15px; }\n\nprime-datepicker {\n  background: #fcfcfc;\n  display: inline-block; }\n\n.status-dropdown {\n  width: auto;\n  min-width: 100%;\n  white-space: normal; }\n\n.flex-table-row {\n  display: flex; }\n\n.flex-table-row > td {\n  flex: 1; }\n\n.flex-table-row > td:first-child {\n    flex: 1.5; }\n\n.flex-table-row > td:nth-child(2) {\n    flex: 0.5; }\n"

/***/ }),

/***/ "./src/app/modules/provisioner/components/provisioner-row/provisioner-row.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/provisioner/components/provisioner-row/provisioner-row.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ProvisionerRowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvisionerRowComponent", function() { return ProvisionerRowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_sites_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../models/sites.model */ "./src/app/models/sites.model.ts");
/* harmony import */ var _animations_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../animations/animations */ "./src/app/animations/animations.ts");
/* harmony import */ var _models_enrollment_status_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models/enrollment-status.enum */ "./src/app/models/enrollment-status.enum.ts");
/* harmony import */ var _models_colleges_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../models/colleges.enum */ "./src/app/models/colleges.enum.ts");
/* harmony import */ var _core_enrollment_row_enrollment_row_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/enrollment-row/enrollment-row.class */ "./src/app/core/enrollment-row/enrollment-row.class.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_prime_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/prime-data.service */ "./src/app/services/prime-data.service.ts");
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








var today = new Date();
var ProvisionerRowComponent = /** @class */ (function (_super) {
    __extends(ProvisionerRowComponent, _super);
    function ProvisionerRowComponent(dataService) {
        var _this = _super.call(this) || this;
        _this.dataService = dataService;
        _this.onRowOpened = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.siteAccessChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Force showing of the provisioner details row outside of the default business logic. This is used when clicking on the row; */
        _this.showProvisionerDetailsRowOverride = false;
        _this.declinedReasonSelector = 'pleaseSelect';
        _this.accessType = Object.keys(_models_sites_model__WEBPACK_IMPORTED_MODULE_1__["PersonalAccessType"]);
        _this.provisionedStatusType = Object.keys(_models_sites_model__WEBPACK_IMPORTED_MODULE_1__["ProvisionedStatus"]);
        _this._enrollmentStatus = [
            _models_enrollment_status_enum__WEBPACK_IMPORTED_MODULE_3__["EnrollmentStatus"].Active,
            _models_enrollment_status_enum__WEBPACK_IMPORTED_MODULE_3__["EnrollmentStatus"].Declined,
            _models_enrollment_status_enum__WEBPACK_IMPORTED_MODULE_3__["EnrollmentStatus"].New,
        ];
        return _this;
    }
    Object.defineProperty(ProvisionerRowComponent.prototype, "siteAccessRequiringAttention", {
        get: function () {
            if (!this.rowData) {
                return [];
            }
            return this.rowData.siteAccess;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProvisionerRowComponent.prototype, "sites", {
        get: function () {
            if (!this.rowData) {
                return [];
            }
            return this.rowData.site;
        },
        enumerable: true,
        configurable: true
    });
    ProvisionerRowComponent.prototype.ngOnInit = function () {
        if (!this.rowData) {
            return;
        }
        this.siteAccessObject = this.rowData.siteAccess[0];
        this.siteStatus = this.siteAccessObject.status;
        this.rowDataOnInit = Object(lodash__WEBPACK_IMPORTED_MODULE_6__["cloneDeep"])(this.rowData);
    };
    ProvisionerRowComponent.prototype.onChangeStartDate = function (ev, item) {
        item.startDate = ev;
        this.siteAccessChange.emit(item);
    };
    ProvisionerRowComponent.prototype.onChangeEndDate = function (ev, item) {
        item.endDate = ev;
        this.siteAccessChange.emit(item);
    };
    ProvisionerRowComponent.prototype.onChangeprovisionedDate = function (ev, item) {
        item.provisionedDate = ev;
        this.siteAccessChange.emit(item);
    };
    ProvisionerRowComponent.prototype.getProvisionedStatus = function (item) {
        return item.provisionedStatus == _models_sites_model__WEBPACK_IMPORTED_MODULE_1__["ProvisionedStatus"].PROVISIONED ? "PROVISIONED" : "NEW";
    };
    ProvisionerRowComponent.prototype.onChange = function (ev, item) {
        this.siteAccessChange.emit(item);
    };
    Object.defineProperty(ProvisionerRowComponent.prototype, "title", {
        get: function () {
            if (this.primaryType === 'User') {
                var name_1 = this.rowData.title;
                return 'Site ' + name_1.substring(name_1.lastIndexOf(' ') + 1);
            }
            else {
                //TODO
                return 'TITLE SITE';
            }
        },
        enumerable: true,
        configurable: true
    });
    ProvisionerRowComponent.prototype.getSiteAccessFromSite = function (site) {
        // we have a list of siteAccess, need to check if it inclues site
        var sa = this.rowData.siteAccess.find(function (sa) { return sa.site.objectId === site.objectId; });
        if (!sa) {
            var user = this.dataService.findPersonByObjectId(this.rowData.associatedObjectId);
            var org = this.dataService.findCollectionFromSite(site)[0];
            var origSite = org.members.find(function (originalSite) { return originalSite.objectId === site.objectId; });
            sa = new _models_sites_model__WEBPACK_IMPORTED_MODULE_1__["SiteAccess"]();
            sa.person = user;
            sa.site = origSite;
            user.siteAccess.push(sa);
            origSite.siteAccess.push(sa);
            this.dataService.siteAccesses.push(sa);
            this.rowData.siteAccess.push(sa);
        }
        return sa;
    };
    Object.defineProperty(ProvisionerRowComponent.prototype, "orgName", {
        get: function () {
            var name = this.rowData.title;
            return name;
        },
        enumerable: true,
        configurable: true
    });
    ProvisionerRowComponent.prototype.getCollegeNumber = function () {
        if (this.primaryType !== 'Site') {
            // In current designs, we should NEVER care about college except for Site tables.
            return null;
        }
        if (!this.rowData.collegeNumber || this.rowData.collegeNumber.length === 0 || this.rowData.collegeNumber === 'pleaseSelect') {
            return 'n/a';
        }
        return _models_colleges_enum__WEBPACK_IMPORTED_MODULE_4__["CollegeTypes"][this.rowData.collegeNumber];
    };
    ProvisionerRowComponent.prototype.getLicenceNumber = function () {
        if (this.primaryType !== 'Site') {
            // In current designs, we should NEVER care about college except for Site tables.
            return null;
        }
        if (!this.rowData.licenceNumber || this.rowData.licenceNumber.length === 0) {
            return 'n/a';
        }
        return this.rowData.licenceNumber;
    };
    ProvisionerRowComponent.prototype.declinedReasonValue = function (selection) {
        return _models_sites_model__WEBPACK_IMPORTED_MODULE_1__["DeclinedReasons"][selection];
    };
    Object.defineProperty(ProvisionerRowComponent.prototype, "DeclinedReasons", {
        get: function () {
            return Object.keys(_models_sites_model__WEBPACK_IMPORTED_MODULE_1__["DeclinedReasons"]);
        },
        enumerable: true,
        configurable: true
    });
    ProvisionerRowComponent.prototype.declinedReasonCurrValue = function () {
        var selection = this.declinedReasonSelector;
        return _models_sites_model__WEBPACK_IMPORTED_MODULE_1__["DeclinedReasons"][selection] ? _models_sites_model__WEBPACK_IMPORTED_MODULE_1__["DeclinedReasons"][selection] : '';
    };
    ProvisionerRowComponent.prototype.getRandomElFromArray = function (arr) {
        return arr[Math.ceil(Math.random() * arr.length) - 1];
    };
    ProvisionerRowComponent.prototype.toggleRow = function () {
        if (this.canOpen()) {
            this.openState = this.openState === _core_enrollment_row_enrollment_row_class__WEBPACK_IMPORTED_MODULE_5__["RowState"].Opened ? _core_enrollment_row_enrollment_row_class__WEBPACK_IMPORTED_MODULE_5__["RowState"].Closed : _core_enrollment_row_enrollment_row_class__WEBPACK_IMPORTED_MODULE_5__["RowState"].Opened;
            if (this.openState === _core_enrollment_row_enrollment_row_class__WEBPACK_IMPORTED_MODULE_5__["RowState"].Opened) {
                this.onRowOpened.emit(this);
            }
        }
        // Custom provisioner functionality: Also toggle visibility of the override row.
        this.showProvisionerDetailsRowOverride = !this.showProvisionerDetailsRowOverride;
    };
    ProvisionerRowComponent.prototype.closeRow = function () {
        this.openState = _core_enrollment_row_enrollment_row_class__WEBPACK_IMPORTED_MODULE_5__["RowState"].Closed;
    };
    ProvisionerRowComponent.prototype.canOpen = function () {
        return this.siteStatus === 'Declined';
    };
    ProvisionerRowComponent.prototype.accept = function () {
        this.siteStatus = 'AcceptEnrollment';
        this.siteAccessObject.provisionedDate = new Date();
        this.siteAccessObject.provisionedStatus = _models_sites_model__WEBPACK_IMPORTED_MODULE_1__["ProvisionedStatus"].PROVISIONED;
        this.siteAccessObject.status = _models_enrollment_status_enum__WEBPACK_IMPORTED_MODULE_3__["EnrollmentStatus"].Active;
        this.siteAccessChange.emit(this.siteAccessObject);
    };
    ProvisionerRowComponent.prototype.reject = function () {
        this.siteStatus = 'DeclinedEnrollment';
        this.siteAccessObject.provisionedStatus = _models_sites_model__WEBPACK_IMPORTED_MODULE_1__["ProvisionedStatus"].REJECTED;
        this.siteAccessObject.status = _models_enrollment_status_enum__WEBPACK_IMPORTED_MODULE_3__["EnrollmentStatus"].Declined;
        // this.rowData.siteAccess[0].status = EnrollmentStatus.Declined; //old
        this.siteAccessChange.emit(this.siteAccessObject);
    };
    Object.defineProperty(ProvisionerRowComponent.prototype, "isAccepted", {
        // TODO - Replace SiteStatus with these calls
        get: function () {
            return this.siteAccessObject.isProvisioned;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProvisionerRowComponent.prototype, "isRejected", {
        get: function () {
            return this.siteAccessObject.provisionedStatus === _models_sites_model__WEBPACK_IMPORTED_MODULE_1__["ProvisionedStatus"].REJECTED;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProvisionerRowComponent.prototype, "isNew", {
        get: function () {
            if (!this.siteAccessObject)
                return false;
            if (!(this.siteAccessObject.status === _models_enrollment_status_enum__WEBPACK_IMPORTED_MODULE_3__["EnrollmentStatus"].New || this.siteAccessObject.status === _models_enrollment_status_enum__WEBPACK_IMPORTED_MODULE_3__["EnrollmentStatus"].Provisioning)) {
                return false;
            }
            if (!(this.siteAccessObject.provisionedStatus === _models_sites_model__WEBPACK_IMPORTED_MODULE_1__["ProvisionedStatus"].NOT_PROVISIONED)) {
                return false;
            }
            return true;
            // return this.siteAccessObject.status === EnrollmentStatus.New && this.siteAccessObject.provisionedStatus === ProvisionedStatus.NOT_PROVISIONED;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProvisionerRowComponent.prototype, "isPreviouslyRejected", {
        // If the row was declined prior to any user action (on the page at this time)
        get: function () {
            // We need to check if it was 'rejected' at the time of component load.
            return this.rowDataOnInit.siteAccess[0].status === _models_enrollment_status_enum__WEBPACK_IMPORTED_MODULE_3__["EnrollmentStatus"].Declined;
        },
        enumerable: true,
        configurable: true
    });
    ProvisionerRowComponent.prototype.goToNotePage = function () {
        console.log('todo');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProvisionerRowComponent.prototype, "rowData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ProvisionerRowComponent.prototype, "primaryType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProvisionerRowComponent.prototype, "onRowOpened", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProvisionerRowComponent.prototype, "siteAccessChange", void 0);
    ProvisionerRowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'prime-provisioner-row',
            template: __webpack_require__(/*! ./provisioner-row.component.html */ "./src/app/modules/provisioner/components/provisioner-row/provisioner-row.component.html"),
            styles: [__webpack_require__(/*! ./provisioner-row.component.scss */ "./src/app/modules/provisioner/components/provisioner-row/provisioner-row.component.scss")],
            animations: [_animations_animations__WEBPACK_IMPORTED_MODULE_2__["openState"], _animations_animations__WEBPACK_IMPORTED_MODULE_2__["openStateChild"], _animations_animations__WEBPACK_IMPORTED_MODULE_2__["loadInOut"], _animations_animations__WEBPACK_IMPORTED_MODULE_2__["openStateDisable"], _animations_animations__WEBPACK_IMPORTED_MODULE_2__["growVertical"], _animations_animations__WEBPACK_IMPORTED_MODULE_2__["rotate180"]]
        }),
        __metadata("design:paramtypes", [_services_prime_data_service__WEBPACK_IMPORTED_MODULE_7__["PrimeDataService"]])
    ], ProvisionerRowComponent);
    return ProvisionerRowComponent;
}(_core_enrollment_row_enrollment_row_class__WEBPACK_IMPORTED_MODULE_5__["EnrollmentRow"]));



/***/ }),

/***/ "./src/app/modules/provisioner/components/provisioner-widgets/provisioner-widgets.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/provisioner/components/provisioner-widgets/provisioner-widgets.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col\">\n    <div class=\"card\">\n      <div class=\"card-header d-flex justify-content-between\">\n        User status\n        <i class=\"fa fa-reply fa-flip-horizontal\" aria-hidden=\"true\"></i>\n      </div>\n      <div class=\"card-body pie-chart-container\" #pieChartContainer>\n        <ngx-charts-pie-chart\n          [view]='pieChartDimension'\n          [results]=\"pieChartData\"\n          [scheme]=\"'natural'\"\n          legend=true\n          legendTitle=''\n          (select)='onPieChartClick($event)'>\n        </ngx-charts-pie-chart>\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"col\">\n    <div class=\"card\">\n      <div class=\"card-header d-flex justify-content-between\">\n        Application Progress\n\n        <form class=\"form-inline\">\n          <select id=\"applicationProgressType\" class=\"form-control enrollment-view-selector\" [value]=\"applicationProgressSelector\"\n                  (change)=\"applicationProgressSelector = $event.target.value\">\n            <option *ngFor=\"let type of SiteAccessProgressSteps\" value=\"{{type}}\">\n              {{type}}\n            </option>\n          </select>\n          <i class=\"fa fa-reply fa-flip-horizontal ml-2\" aria-hidden=\"true\"></i>\n        </form>\n\n      </div>\n      <ul class=\"list-group list-group-flush\">\n        <li class=\"list-group-item d-flex justify-content-between\" *ngFor=\"let siteAccess of applicationProgress()\">\n            <span class='application-text' tooltip=\"{{ siteAccess.person.name }} &ndash; {{ siteAccess.site.name}}\" container=\"body\"\n                  delay=350>\n              {{ siteAccess.person.name }} &ndash; {{ siteAccess.site.name}}\n            </span>\n          <prime-info-button [targetId]=\"siteAccess.person.objectId\">\n          </prime-info-button>\n        </li>\n      </ul>\n    </div>\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/modules/provisioner/components/provisioner-widgets/provisioner-widgets.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/provisioner/components/provisioner-widgets/provisioner-widgets.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "prime-provisioner-widgets .application-text {\n  white-space: nowrap;\n  display: inline-block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: calc(100% - 3rem); }\n\nprime-provisioner-widgets .list-group, prime-provisioner-widgets .card-body {\n  height: 17rem;\n  overflow-y: scroll;\n  position: relative; }\n\nprime-provisioner-widgets .list-group .list-group-item, prime-provisioner-widgets .card-body .list-group-item {\n    min-height: 44px; }\n\n.ngx-charts {\n  float: right !important;\n  margin-right: -7.5%; }\n\n.legend-labels {\n  width: 100px !important;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  max-height: unset !important; }\n\n.legend-labels > li:first-of-type {\n    padding-top: 1.75rem; }\n\n.chart-legend .legend-label {\n  color: #495057 !important; }\n\n.chart-legend .legend-label .active .legend-label-text {\n    text-decoration: underline; }\n\n.chart-legend .legend-label > ngx-charts-legend-entry > span {\n    display: block;\n    transition: -webkit-transform 0.2s;\n    transition: transform 0.2s;\n    transition: transform 0.2s, -webkit-transform 0.2s;\n    -webkit-font-smoothing: subpixel-antialiased;\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    -webkit-transform: translateZ(0);\n            transform: translateZ(0); }\n\n.chart-legend .legend-label .active {\n    transition: -webkit-transform 0.2s;\n    transition: transform 0.2s;\n    transition: transform 0.2s, -webkit-transform 0.2s;\n    -webkit-transform: translateY(-2.5px) scale(1.05) translateZ(0);\n            transform: translateY(-2.5px) scale(1.05) translateZ(0); }\n\n.pie-chart-container {\n  padding: 0; }\n"

/***/ }),

/***/ "./src/app/modules/provisioner/components/provisioner-widgets/provisioner-widgets.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/provisioner/components/provisioner-widgets/provisioner-widgets.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ProvisionerWidgetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvisionerWidgetsComponent", function() { return ProvisionerWidgetsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_provisioner_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/provisioner.service */ "./src/app/services/provisioner.service.ts");
/* harmony import */ var _models_sites_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models/sites.model */ "./src/app/models/sites.model.ts");
/* harmony import */ var _models_enrollment_status_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../models/enrollment-status.enum */ "./src/app/models/enrollment-status.enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProvisionerWidgetsComponent = /** @class */ (function () {
    function ProvisionerWidgetsComponent(provisionerService) {
        this.provisionerService = provisionerService;
        this.siteAccess = [];
        this.people = [];
        //Current max width, but doesn't really play nice with mobile views
        this.pieChartDimension = [];
        this.colorScheme = {
            // primary/secondary/etc, from variables.scss
            domain: ['#036', '#fcba19', '#486446', '#96c0e6']
        };
    }
    ProvisionerWidgetsComponent.prototype.ngOnInit = function () {
        this.applicationProgressSelector = _models_sites_model__WEBPACK_IMPORTED_MODULE_3__["SiteAccessProgressSteps"].Provisioner;
        this.pieChartData = this.calculatePieChartData();
        // Very hacky and should be for prototype only! Possibly remove/replace
        // entire chart library because this one does not play nicely and on re-size
        // it continually breaks / infinitely grows.  The height value determines if
        // the entire legend is visible.
        this.pieChartDimension = [
            this.pieChartContainer.nativeElement.offsetWidth,
            this.pieChartContainer.nativeElement.offsetHeight,
        ];
    };
    Object.defineProperty(ProvisionerWidgetsComponent.prototype, "SiteAccessProgressSteps", {
        // Make enum accessible to template
        get: function () {
            return Object.keys(_models_sites_model__WEBPACK_IMPORTED_MODULE_3__["SiteAccessProgressSteps"]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProvisionerWidgetsComponent.prototype, "EnrollmentStatus", {
        // Make enum iterable strings accessible in template
        get: function () {
            return Object.keys(_models_enrollment_status_enum__WEBPACK_IMPORTED_MODULE_4__["EnrollmentStatus"]);
        },
        enumerable: true,
        configurable: true
    });
    ProvisionerWidgetsComponent.prototype.applicationProgress = function () {
        var selection = this.applicationProgressSelector;
        // Copy the array so our sorting doesn't mess up other places
        var result = this.siteAccess.concat();
        // Filter to only show 'problem' results, to match enrollment list
        result = result.filter(function (x) { return x.alert; });
        return result.filter(function (sa) { return sa.progress === selection; });
    };
    ProvisionerWidgetsComponent.prototype.calculatePieChartData = function () {
        var _this = this;
        var validStatusNamesArr = [_models_enrollment_status_enum__WEBPACK_IMPORTED_MODULE_4__["EnrollmentStatus"].Active.valueOf(), _models_enrollment_status_enum__WEBPACK_IMPORTED_MODULE_4__["EnrollmentStatus"].Provisioning.valueOf()];
        var statusArr = this.EnrollmentStatus.map(function (status) {
            return {
                name: status,
                value: _this.siteAccess.filter(function (sa) { return sa.status === status; }).length
            };
        });
        return statusArr.filter(function (itm) {
            return validStatusNamesArr.indexOf(itm.name) > -1;
        });
    };
    ProvisionerWidgetsComponent.prototype.onPieChartClick = function ($event) {
        // console.log('onPieChartClick', $event);
        this.provisionerService.enrollmentViewTypeSelector = $event.name;
    };
    ProvisionerWidgetsComponent.prototype.formatDate = function (date) {
        return moment__WEBPACK_IMPORTED_MODULE_1__(date).format('DD/MM/YYYY');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ProvisionerWidgetsComponent.prototype, "siteAccess", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ProvisionerWidgetsComponent.prototype, "people", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('pieChartContainer'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ProvisionerWidgetsComponent.prototype, "pieChartContainer", void 0);
    ProvisionerWidgetsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'prime-provisioner-widgets',
            template: __webpack_require__(/*! ./provisioner-widgets.component.html */ "./src/app/modules/provisioner/components/provisioner-widgets/provisioner-widgets.component.html"),
            styles: [__webpack_require__(/*! ./provisioner-widgets.component.scss */ "./src/app/modules/provisioner/components/provisioner-widgets/provisioner-widgets.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_services_provisioner_service__WEBPACK_IMPORTED_MODULE_2__["ProvisionerService"]])
    ], ProvisionerWidgetsComponent);
    return ProvisionerWidgetsComponent;
}());



/***/ }),

/***/ "./src/app/modules/provisioner/pages/provisioner-dashboard/provisioner-dash-by-site/provisioner-dash-by-site.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/modules/provisioner/pages/provisioner-dashboard/provisioner-dash-by-site/provisioner-dash-by-site.component.html ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<prime-enrollment-list\n  [rowItems]=\"enrollmentBySiteData\"\n  primaryType='Site'\n></prime-enrollment-list>\n"

/***/ }),

/***/ "./src/app/modules/provisioner/pages/provisioner-dashboard/provisioner-dash-by-site/provisioner-dash-by-site.component.scss":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/modules/provisioner/pages/provisioner-dashboard/provisioner-dash-by-site/provisioner-dash-by-site.component.scss ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/provisioner/pages/provisioner-dashboard/provisioner-dash-by-site/provisioner-dash-by-site.component.ts":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/modules/provisioner/pages/provisioner-dashboard/provisioner-dash-by-site/provisioner-dash-by-site.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: ProvisionerDashBySiteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvisionerDashBySiteComponent", function() { return ProvisionerDashBySiteComponent; });
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


var ProvisionerDashBySiteComponent = /** @class */ (function () {
    function ProvisionerDashBySiteComponent(dataService) {
        this.dataService = dataService;
    }
    Object.defineProperty(ProvisionerDashBySiteComponent.prototype, "enrollmentBySiteData", {
        get: function () {
            return this.dataService.getEnrollmentByOrganization();
        },
        enumerable: true,
        configurable: true
    });
    ProvisionerDashBySiteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'prime-provisioner-dash-by-site',
            template: __webpack_require__(/*! ./provisioner-dash-by-site.component.html */ "./src/app/modules/provisioner/pages/provisioner-dashboard/provisioner-dash-by-site/provisioner-dash-by-site.component.html"),
            styles: [__webpack_require__(/*! ./provisioner-dash-by-site.component.scss */ "./src/app/modules/provisioner/pages/provisioner-dashboard/provisioner-dash-by-site/provisioner-dash-by-site.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_prime_data_service__WEBPACK_IMPORTED_MODULE_1__["PrimeDataService"]])
    ], ProvisionerDashBySiteComponent);
    return ProvisionerDashBySiteComponent;
}());



/***/ }),

/***/ "./src/app/modules/provisioner/pages/provisioner-dashboard/provisioner-dash-by-user/provisioner-dash-by-user.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/modules/provisioner/pages/provisioner-dashboard/provisioner-dash-by-user/provisioner-dash-by-user.component.html ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<prime-enrollment-list\n  [rowItems]=\"enrollmentByUserData\"\n  [primaryType]='\"User\"'\n></prime-enrollment-list>\n"

/***/ }),

/***/ "./src/app/modules/provisioner/pages/provisioner-dashboard/provisioner-dash-by-user/provisioner-dash-by-user.component.scss":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/modules/provisioner/pages/provisioner-dashboard/provisioner-dash-by-user/provisioner-dash-by-user.component.scss ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/provisioner/pages/provisioner-dashboard/provisioner-dash-by-user/provisioner-dash-by-user.component.ts":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/modules/provisioner/pages/provisioner-dashboard/provisioner-dash-by-user/provisioner-dash-by-user.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: ProvisionerDashByUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvisionerDashByUserComponent", function() { return ProvisionerDashByUserComponent; });
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


var ProvisionerDashByUserComponent = /** @class */ (function () {
    function ProvisionerDashByUserComponent(dataService) {
        this.dataService = dataService;
    }
    Object.defineProperty(ProvisionerDashByUserComponent.prototype, "enrollmentByUserData", {
        get: function () {
            return this.dataService.getProvisionerByUser();
        },
        enumerable: true,
        configurable: true
    });
    ProvisionerDashByUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'prime-provisioner-dash-by-user',
            template: __webpack_require__(/*! ./provisioner-dash-by-user.component.html */ "./src/app/modules/provisioner/pages/provisioner-dashboard/provisioner-dash-by-user/provisioner-dash-by-user.component.html"),
            styles: [__webpack_require__(/*! ./provisioner-dash-by-user.component.scss */ "./src/app/modules/provisioner/pages/provisioner-dashboard/provisioner-dash-by-user/provisioner-dash-by-user.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_prime_data_service__WEBPACK_IMPORTED_MODULE_1__["PrimeDataService"]])
    ], ProvisionerDashByUserComponent);
    return ProvisionerDashByUserComponent;
}());



/***/ }),

/***/ "./src/app/modules/provisioner/pages/provisioner-dashboard/provisioner-dashboard.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/provisioner/pages/provisioner-dashboard/provisioner-dashboard.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<prime-alert>\n  System Notification: Server will be down for 2 hours maintenance at 14:30 PT.\n</prime-alert>\n\n<prime-dashboard-bar\n  hideAddUserButton = true>\n</prime-dashboard-bar>\n\n<!-- <router-outlet name=\"dashboard\"></router-outlet> -->\n<router-outlet></router-outlet>\n\n<hr>\n\n<!-- disable the pie chart etc..\n<prime-provisioner-widgets\n  [siteAccess]=\"siteAccesses\"\n  [people]=\"people\">\n</prime-provisioner-widgets>\n-->\n"

/***/ }),

/***/ "./src/app/modules/provisioner/pages/provisioner-dashboard/provisioner-dashboard.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/provisioner/pages/provisioner-dashboard/provisioner-dashboard.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/provisioner/pages/provisioner-dashboard/provisioner-dashboard.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/provisioner/pages/provisioner-dashboard/provisioner-dashboard.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ProvisionerDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvisionerDashboardComponent", function() { return ProvisionerDashboardComponent; });
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


var ProvisionerDashboardComponent = /** @class */ (function () {
    function ProvisionerDashboardComponent(dataService) {
        this.dataService = dataService;
    }
    ProvisionerDashboardComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(ProvisionerDashboardComponent.prototype, "siteAccesses", {
        get: function () {
            return this.dataService.siteAccesses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProvisionerDashboardComponent.prototype, "people", {
        get: function () {
            return this.dataService.people;
        },
        enumerable: true,
        configurable: true
    });
    ProvisionerDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'prime-provisioner-dashboard',
            template: __webpack_require__(/*! ./provisioner-dashboard.component.html */ "./src/app/modules/provisioner/pages/provisioner-dashboard/provisioner-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./provisioner-dashboard.component.scss */ "./src/app/modules/provisioner/pages/provisioner-dashboard/provisioner-dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_prime_data_service__WEBPACK_IMPORTED_MODULE_1__["PrimeDataService"]])
    ], ProvisionerDashboardComponent);
    return ProvisionerDashboardComponent;
}());



/***/ }),

/***/ "./src/app/modules/provisioner/pages/provisioner-details/provisioner-details.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/provisioner/pages/provisioner-details/provisioner-details.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<prime-core-breadcrumb>\n  <div left>\n    <a routerLink=\"/provisioner/\">Dashboard</a> /\n    <strong>Provision by {{ IS_SHOWING_PERSON ? \"User\" : \"Site\" }}</strong>\n  </div>\n</prime-core-breadcrumb>\n\n<prime-page-framework>\n\n  <div class=\"row\" *ngIf=\"IS_SHOWING_PERSON; else siteDetails\">\n     <div class=\"col mx-3\">\n      <div class=\"form-group row has-float-label\">\n        <label for=\"legalName\">\n          Legal Name\n        </label>\n        <input type=\"text\" disabled class=\"form-control\" id=\"legalName\" name=\"legalName\" [value]=\"person?.legalName\">\n      </div>\n\n       <div class=\"form-group row has-float-label\">\n         <label for=\"DOB\">\n           Date of Birth\n         </label>\n         <input type=\"text\" disabled class=\"form-control\" id=\"DOB\" name=\"DOB\" [value]=\"person?.dateOfBirthShort\">\n       </div>\n\n       <div class=\"form-group row has-float-label\">\n         <label for=\"email\">\n           Email\n         </label>\n         <input type=\"text\" disabled class=\"form-control\" id=\"email\" name=\"email\" [value]=\"person?.email ? person.email : ''\">\n       </div>\n\n\n       <div class=\"form-group row has-float-label\">\n          <label for=\"userclass\">\n            User Class\n          </label>\n          <input type=\"text\" disabled class=\"form-control\" id=\"userclass\" name=\"userclass\" value=\"Pharmacist\">\n        </div>\n\n\n     </div>\n\n    <div class=\"col mx-3\">\n\n      <div class=\"form-group row has-float-label\">\n        <label for=\"prefName\">\n          Preferred Name\n        </label>\n        <input type=\"text\" disabled class=\"form-control\" id=\"prefName\" name=\"prefName\" [value]=\"person?.name\">\n      </div>\n\n      <div class=\"form-group row has-float-label\">\n        <label for=\"phone\">\n          Phone Number\n        </label>\n        <input type=\"text\" disabled class=\"form-control\" id=\"phone\" name=\"phone\" [value]=\"person?.phone ? person.phone : ''\">\n      </div>\n\n      <div class=\"form-group row has-float-label\">\n          <label for=\"postcalCode\">\n            Postal Code\n          </label>\n          <input type=\"text\" disabled class=\"form-control\" id=\"postcalCode\" name=\"postcalCode\" [value]=\"person?.address.postal\">\n        </div>\n\n\n\n\n\n        <div class=\"form-group row has-float-label\">\n          <label for=\"limits\">\n            Practitioner College ID\n          </label>\n          <input type=\"text\" disabled class=\"form-control\" id=\"limits\" name=\"limits\"  [value]=\"person?.getLicenseNumber()\">\n        </div>\n    </div>\n\n\n\n  </div>\n\n  <div class=\"row\"  *ngIf=\"IS_SHOWING_PERSON;\">\n    <div class=\"col mx-3\">\n      <div class=\"form-group row has-float-label\">\n        <label for=\"limits\">\n          Limits and Conditions\n        </label>\n        <input type=\"text\" disabled class=\"form-control\" id=\"limits\" name=\"limits\"  value=\" \">\n      </div>\n    </div>\n\n    <!-- Removed as a result of prime-229\n    <div class=\"col mx-3\">\n      <div class=\"form-group row has-float-label\">\n        <label for=\"renewalDate\">\n          Renewal Date\n        </label>\n        <input type=\"text\" disabled class=\"form-control\" id=\"renewalDate\" name=\"renewalDate\" [value]=\"person?.renewalDateShort\" >\n      </div>\n    </div>\n    -->\n\n  </div>\n\n  <ng-template #siteDetails>\n    <div class=\"row\">\n      <div class=\"col mx-3\">\n        <div class=\"form-group row has-float-label\">\n          <label for=\"collection\">\n            Organisation\n          </label>\n          <input type=\"text\" disabled class=\"form-control\" id=\"collection\" name=\"collection\" [value]=\"findCollectionFromSite(site)?.title\">\n        </div>\n      </div>\n      <div class=\"col mx-3\">\n        <div class=\"form-group row has-float-label\">\n          <label for=\"sitename\">\n            Site\n          </label>\n          <input type=\"text\" disabled class=\"form-control\" id=\"sitename\" name=\"sitename\" [value]=\"site?.name\">\n        </div>\n      </div>\n    </div>\n\n      <div class=\"row\">\n        <div class=\"col mx-3\">\n        <div class=\"form-group row has-float-label\">\n          <label for=\"address\">\n            Address\n          </label>\n          <input type=\"text\" disabled class=\"form-control\" id=\"address\" name=\"address\" [value]=\"site?.address\">\n        </div>\n      </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col mx-3\">\n          <div class=\"form-group row has-float-label\">\n            <label for=\"vendor\">\n              Vendor\n            </label>\n            <input type=\"text\" disabled class=\"form-control\" id=\"vendor\" name=\"vendor\" [value]=\"site?.vendor\">\n          </div>\n        </div>\n        <div class=\"col mx-3\">\n          <div class=\"form-group row has-float-label\">\n            <label for=\"siteType\">\n              Site Type\n            </label>\n            <input type=\"text\" disabled class=\"form-control\" id=\"siteType\" name=\"siteType\" [value]=\"site?.siteType\">\n          </div>\n         </div>\n      </div>\n\n\n  </ng-template>\n\n</prime-page-framework>\n\n<div *ngIf=\"IS_SHOWING_PERSON; else userList\">\n  <prime-provisioner-list\n    [rowItems]=\"provisionerOrgSiteData\"\n    primaryType='User'\n  ></prime-provisioner-list>\n</div>\n<ng-template #userList>\n  <prime-provisioner-list\n    [rowItems]=\"provisionerUserData\"\n    primaryType='Site'\n    [parentSite]='site'\n  ></prime-provisioner-list>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/modules/provisioner/pages/provisioner-details/provisioner-details.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/provisioner/pages/provisioner-details/provisioner-details.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/provisioner/pages/provisioner-details/provisioner-details.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/provisioner/pages/provisioner-details/provisioner-details.component.ts ***!
  \************************************************************************************************/
/*! exports provided: ProvisionerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvisionerDetailsComponent", function() { return ProvisionerDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_prime_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/prime-data.service */ "./src/app/services/prime-data.service.ts");
/* harmony import */ var _models_colleges_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models/colleges.enum */ "./src/app/models/colleges.enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProvisionerDetailsComponent = /** @class */ (function () {
    function ProvisionerDetailsComponent(route, dataService, router, cd) {
        this.route = route;
        this.dataService = dataService;
        this.router = router;
        this.cd = cd;
    }
    ProvisionerDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.data
            .subscribe(function (data) {
            if (data.type) {
                _this.provisionByType = data.type;
                console.log('ProvisionerDetailsComponent initailized as:', _this.provisionByType);
            }
            else {
                throw "ProvisionerDetails unable to initialize. It depends on retrieving data from the route, but the data was not there.  Is provisioner-routing.module.ts configured with data for these routes?";
            }
        });
        var id = this.route.snapshot.paramMap.get('id');
        if (id) {
            if (this.IS_SHOWING_PERSON) {
                this.person = this.dataService.findPersonByObjectId(id);
            }
            else {
                this.site = this.dataService.findSiteByObjectId(id);
            }
        }
        // If no ID, or neither person or site is defined, we want to redirect back
        // This usually happens when the user refreshes the page and the objectId's are re-generated
        if (!id || id.length === 0 || (!this.person && !this.site)) {
            var url = this.router.url.split('/');
            url.pop(); //Remove objectID, which we know is last item in array
            var type = url.pop(); //Will be 'user' or 'string';
            this.router.navigate(["/provisioner/dashboard/" + type]);
            console.error('Provisioner Details objectId (in url) refers to an object which does not exist! Removed objectId from URl and navigated back to Provisioner Dashboard.');
            return;
        }
    };
    ProvisionerDetailsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    Object.defineProperty(ProvisionerDetailsComponent.prototype, "IS_SHOWING_PERSON", {
        get: function () {
            return this.provisionByType === ProvisionByType.user;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProvisionerDetailsComponent.prototype, "IS_SHOWING_SITE", {
        get: function () {
            return this.provisionByType === ProvisionByType.site;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProvisionerDetailsComponent.prototype, "provisionerSiteData", {
        // no longer used.removed as a part of PRIME-164
        get: function () {
            if (!this.person)
                return null;
            return this.dataService.getProvisionerDetailsByUser(this.person);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProvisionerDetailsComponent.prototype, "provisionerOrgSiteData", {
        get: function () {
            if (!this.person)
                return null;
            return this.dataService.getProvisionerOrgDetailsByUser(this.person);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProvisionerDetailsComponent.prototype, "provisionerUserData", {
        get: function () {
            if (!this.site)
                return null;
            return this.dataService.getProvisionerDetailsBySite(this.site);
        },
        enumerable: true,
        configurable: true
    });
    ProvisionerDetailsComponent.prototype.findCollectionFromSite = function (site) {
        return this.dataService.findCollectionFromSite(site)[0];
    };
    ProvisionerDetailsComponent.prototype.collegeCurrValue = function (selection) {
        return _models_colleges_enum__WEBPACK_IMPORTED_MODULE_3__["CollegeTypes"][selection] ? _models_colleges_enum__WEBPACK_IMPORTED_MODULE_3__["CollegeTypes"][selection] : '';
    };
    ProvisionerDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'prime-provisioner-details',
            template: __webpack_require__(/*! ./provisioner-details.component.html */ "./src/app/modules/provisioner/pages/provisioner-details/provisioner-details.component.html"),
            styles: [__webpack_require__(/*! ./provisioner-details.component.scss */ "./src/app/modules/provisioner/pages/provisioner-details/provisioner-details.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_prime_data_service__WEBPACK_IMPORTED_MODULE_2__["PrimeDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], ProvisionerDetailsComponent);
    return ProvisionerDetailsComponent;
}());

var ProvisionByType;
(function (ProvisionByType) {
    ProvisionByType["user"] = "user";
    ProvisionByType["site"] = "site";
})(ProvisionByType || (ProvisionByType = {}));


/***/ }),

/***/ "./src/app/modules/provisioner/provisioner-routing.modules.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/provisioner/provisioner-routing.modules.ts ***!
  \********************************************************************/
/*! exports provided: routes, ProvisionerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvisionerRoutingModule", function() { return ProvisionerRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_provisioner_dashboard_provisioner_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/provisioner-dashboard/provisioner-dashboard.component */ "./src/app/modules/provisioner/pages/provisioner-dashboard/provisioner-dashboard.component.ts");
/* harmony import */ var _pages_provisioner_details_provisioner_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/provisioner-details/provisioner-details.component */ "./src/app/modules/provisioner/pages/provisioner-details/provisioner-details.component.ts");
/* harmony import */ var _pages_provisioner_dashboard_provisioner_dash_by_site_provisioner_dash_by_site_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/provisioner-dashboard/provisioner-dash-by-site/provisioner-dash-by-site.component */ "./src/app/modules/provisioner/pages/provisioner-dashboard/provisioner-dash-by-site/provisioner-dash-by-site.component.ts");
/* harmony import */ var _pages_provisioner_dashboard_provisioner_dash_by_user_provisioner_dash_by_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/provisioner-dashboard/provisioner-dash-by-user/provisioner-dash-by-user.component */ "./src/app/modules/provisioner/pages/provisioner-dashboard/provisioner-dash-by-user/provisioner-dash-by-user.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: 'dashboard',
        component: _pages_provisioner_dashboard_provisioner_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["ProvisionerDashboardComponent"],
        children: [
            {
                path: 'user',
                component: _pages_provisioner_dashboard_provisioner_dash_by_user_provisioner_dash_by_user_component__WEBPACK_IMPORTED_MODULE_5__["ProvisionerDashByUserComponent"],
            },
            {
                path: 'site',
                component: _pages_provisioner_dashboard_provisioner_dash_by_site_provisioner_dash_by_site_component__WEBPACK_IMPORTED_MODULE_4__["ProvisionerDashBySiteComponent"],
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
            {
                path: 'user',
                component: _pages_provisioner_details_provisioner_details_component__WEBPACK_IMPORTED_MODULE_3__["ProvisionerDetailsComponent"],
                data: { type: 'user' }
            },
            {
                path: 'site',
                component: _pages_provisioner_details_provisioner_details_component__WEBPACK_IMPORTED_MODULE_3__["ProvisionerDetailsComponent"],
                data: { type: 'site' }
            },
            {
                path: 'user/:id',
                component: _pages_provisioner_details_provisioner_details_component__WEBPACK_IMPORTED_MODULE_3__["ProvisionerDetailsComponent"],
                data: { type: 'user' }
            },
            {
                path: 'site/:id',
                component: _pages_provisioner_details_provisioner_details_component__WEBPACK_IMPORTED_MODULE_3__["ProvisionerDetailsComponent"],
                data: { type: 'site' }
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
var ProvisionerRoutingModule = /** @class */ (function () {
    function ProvisionerRoutingModule() {
    }
    ProvisionerRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ProvisionerRoutingModule);
    return ProvisionerRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/provisioner/provisioner.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/provisioner/provisioner.module.ts ***!
  \***********************************************************/
/*! exports provided: ProvisionerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvisionerModule", function() { return ProvisionerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/index.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_provisioner_dashboard_provisioner_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/provisioner-dashboard/provisioner-dashboard.component */ "./src/app/modules/provisioner/pages/provisioner-dashboard/provisioner-dashboard.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/core.module */ "./src/app/modules/core/core.module.ts");
/* harmony import */ var _provisioner_routing_modules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./provisioner-routing.modules */ "./src/app/modules/provisioner/provisioner-routing.modules.ts");
/* harmony import */ var _verifier_verifier_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../verifier/verifier.module */ "./src/app/modules/verifier/verifier.module.ts");
/* harmony import */ var _components_provisioner_widgets_provisioner_widgets_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/provisioner-widgets/provisioner-widgets.component */ "./src/app/modules/provisioner/components/provisioner-widgets/provisioner-widgets.component.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _pages_provisioner_details_provisioner_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/provisioner-details/provisioner-details.component */ "./src/app/modules/provisioner/pages/provisioner-details/provisioner-details.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_provisioner_row_provisioner_row_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/provisioner-row/provisioner-row.component */ "./src/app/modules/provisioner/components/provisioner-row/provisioner-row.component.ts");
/* harmony import */ var _components_provisioner_list_provisioner_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/provisioner-list/provisioner-list.component */ "./src/app/modules/provisioner/components/provisioner-list/provisioner-list.component.ts");
/* harmony import */ var _pages_provisioner_dashboard_provisioner_dash_by_site_provisioner_dash_by_site_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/provisioner-dashboard/provisioner-dash-by-site/provisioner-dash-by-site.component */ "./src/app/modules/provisioner/pages/provisioner-dashboard/provisioner-dash-by-site/provisioner-dash-by-site.component.ts");
/* harmony import */ var _pages_provisioner_dashboard_provisioner_dash_by_user_provisioner_dash_by_user_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/provisioner-dashboard/provisioner-dash-by-user/provisioner-dash-by-user.component */ "./src/app/modules/provisioner/pages/provisioner-dashboard/provisioner-dash-by-user/provisioner-dash-by-user.component.ts");
/* harmony import */ var _services_prime_data_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/prime-data.service */ "./src/app/services/prime-data.service.ts");
/* harmony import */ var _services_dummy_data_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../services/dummy-data.service */ "./src/app/services/dummy-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var ProvisionerModule = /** @class */ (function () {
    // This constructor fires when (and only when) the module is lazyloaded, so
    // should be a max of once.
    function ProvisionerModule(dataService, dummyDataService) {
        this.dataService = dataService;
        this.dummyDataService = dummyDataService;
        this.dummyDataService.populateWithDemoData(this.dataService);
    }
    ProvisionerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
                _provisioner_routing_modules__WEBPACK_IMPORTED_MODULE_5__["ProvisionerRoutingModule"],
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__["NgxChartsModule"],
                _verifier_verifier_module__WEBPACK_IMPORTED_MODULE_6__["VerifierModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]
            ],
            providers: [
                _services_prime_data_service__WEBPACK_IMPORTED_MODULE_15__["PrimeDataService"],
                _services_dummy_data_service__WEBPACK_IMPORTED_MODULE_16__["DummyDataService"]
            ],
            declarations: [
                _pages_provisioner_dashboard_provisioner_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["ProvisionerDashboardComponent"],
                _components_provisioner_widgets_provisioner_widgets_component__WEBPACK_IMPORTED_MODULE_7__["ProvisionerWidgetsComponent"],
                _pages_provisioner_details_provisioner_details_component__WEBPACK_IMPORTED_MODULE_9__["ProvisionerDetailsComponent"],
                _components_provisioner_row_provisioner_row_component__WEBPACK_IMPORTED_MODULE_11__["ProvisionerRowComponent"],
                _components_provisioner_list_provisioner_list_component__WEBPACK_IMPORTED_MODULE_12__["ProvisionerListComponent"],
                _pages_provisioner_dashboard_provisioner_dash_by_site_provisioner_dash_by_site_component__WEBPACK_IMPORTED_MODULE_13__["ProvisionerDashBySiteComponent"],
                _pages_provisioner_dashboard_provisioner_dash_by_user_provisioner_dash_by_user_component__WEBPACK_IMPORTED_MODULE_14__["ProvisionerDashByUserComponent"]
            ]
        }),
        __metadata("design:paramtypes", [_services_prime_data_service__WEBPACK_IMPORTED_MODULE_15__["PrimeDataService"], _services_dummy_data_service__WEBPACK_IMPORTED_MODULE_16__["DummyDataService"]])
    ], ProvisionerModule);
    return ProvisionerModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-modules-provisioner-provisioner-module.js.map