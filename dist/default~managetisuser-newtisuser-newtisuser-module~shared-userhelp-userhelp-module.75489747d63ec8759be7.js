(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~managetisuser-newtisuser-newtisuser-module~shared-userhelp-userhelp-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/managetisuser/newtisuser/newtisuser.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/managetisuser/newtisuser/newtisuser.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template *ngIf=\"cannotViewPage then notShowAddUser ; else showAddUser\">\r\n</ng-template>\r\n<ng-template #notShowAddUser>\r\n  <h2>{{'Add_User.No Valid Permission' | translate}}</h2>\r\n  <button mat-raised-button (click)=\"homePageNav()\" type=\"button\" class=\"homePage\" color=\"primary\">\r\n    {{'HOME.Ok' | translate}}\r\n  </button>\r\n</ng-template>\r\n<ng-template #showAddUser>\r\n  <mat-toolbar class = \"applicationTitleToolbar\" color=\"primary\">\r\n    <span><img src=\"./assets/STAR_logo.png\" style=\"width:50px;height:50px;padding-top: 10px;\"></span>\r\n    <div class=\"far-end\">\r\n      <span class=\"space-reducer\"> {{'HOME.Application name' | translate}}</span>\r\n      <span class=\"space-reducer\"> {{starHubUserTocName}}</span>\r\n    </div>\r\n    <span class=\"filler\"></span>\r\n    <button mat-button (click)=\"homePageNav()\" class=\"homePage\" [disabled]=\"saveButtonClicked\"  *ngIf=\"showToolbarButtons\" class=\"application-titlebar-text-style\">\r\n      <mat-icon >home</mat-icon>\r\n      <span class=\"application-titlebar-text-style\">{{'HOME.Home' | translate}}</span>\r\n    </button>\r\n    <button mat-button type=\"button\"  *ngIf=\"showToolbarButtons\" [disabled]=\"saveButtonClicked\" (click)=\"logout()\" class=\"application-titlebar-text-style\">\r\n      <mat-icon >logout</mat-icon>\r\n      <span class=\"application-titlebar-text-style\">{{'HOME.Logout' | translate}}</span>\r\n    </button>\r\n    <button mat-button type=\"button\"  (click)=\"addUserHelpClick()\" *ngIf=\"showToolbarButtons\" [disabled]=\"saveButtonClicked\"  class=\"application-titlebar-text-style\">\r\n      <mat-icon>help</mat-icon>\r\n      <span class=\"application-titlebar-text-style\">{{'HOME.Help' | translate}}</span>\r\n    </button>\r\n    <button mat-icon-button type=\"button\" *ngIf=\"!showToolbarButtons\" [matMenuTriggerFor]=\"menu\" class=\"application-titlebar-text-style1\">\r\n      <mat-icon>more_vert</mat-icon>\r\n  </button>\r\n  </mat-toolbar>\r\n  <mat-menu  #menu=\"matMenu\">\r\n    <button mat-menu-item (click)=\"homePageNav()\">\r\n      <span>{{'HOME.Home' | translate}}</span>\r\n    </button>\r\n    <button mat-menu-item (click)=\"logout()\">\r\n      <span>{{'HOME.Logout' | translate}}</span>\r\n    </button>\r\n    <button mat-menu-item (click)=\"addUserHelpClick()\">\r\n      <span>{{'HOME.Help' | translate}}</span>\r\n    </button>\r\n  </mat-menu>\r\n  <!-- Header message for screen -->\r\n  <fieldset class=\"headerFieldset\">\r\n    <h2 style=\"text-align:center\" [title]=\"title\">{{ title }}</h2>\r\n  </fieldset>\r\n     <mat-card class=\"formFieldset-matcard\">\r\n    <mat-card-content>\r\n      <div>\r\n        <form [formGroup]=\"newUserForm\">\r\n          <fieldset [disabled]=\"saveButtonClicked\" class=\"formFieldset\">\r\n             <!-- Show spinner while fetching data from service -->\r\n              <div *ngIf=\"saveButtonClicked\" class=\"lds-ellipsis\">\r\n                <div></div>\r\n                <div></div>\r\n                <div></div>\r\n                <div></div>\r\n              </div>\r\n            <table>\r\n              <tr>\r\n                <td>\r\n                  <p [ngClass]=\"{ 'has-error': isSubmitted && formControls.employeeId.errors }\">\r\n                    <!-- Empluyee ID field -->\r\n                    <mat-form-field>\r\n                      <mat-label>{{'Add_User.EmpId' | translate}}</mat-label>\r\n                      <input tabindex=\"1\" formControlName=\"employeeId\" matInput required minlength=\"1\" onkeypress=\"return /[a-zA-Z0-9]/i.test(event.key)\" maxlength=\"12\" name=\"employeeId\"\r\n                        required>\r\n                      <mat-error *ngIf=\"newUserForm.invalid\">{{'Add_User.EmployeeId Validation' | translate}}\r\n                      </mat-error>\r\n                    </mat-form-field>\r\n                  </p>\r\n                </td>\r\n                <td class=\"tablePaddingAlign\" rowspan=\"4\">\r\n                  <!-- Roles field -->\r\n                  <fieldset class=\"roleFieldset\" style=\"width:160px\">\r\n                    <legend>{{'Add_User.RoleOutLine' | translate}}</legend>\r\n                    <!-- Handle if roles are available or show message for no roles -->\r\n                    <div class=\"rolesFieldset\">\r\n                      <ng-template *ngIf=\"showHideRoles;then showBlock; else notShowBlock\">\r\n                      </ng-template>\r\n                      <ng-template #showBlock>\r\n                        <ng-container *ngFor=\"let role of roles\"> \r\n                          <mat-checkbox class=\"checkBoxDisplay\" [disabled]=\"disableEnableRoles || saveButtonClicked\" tabindex=\"8\"\r\n                            [checked]=\"role.isChecked\" align='left' formArrayName=\"roles\"\r\n                            (change)=\"changeSelectedRole($event)\" [value]=\"role.id\" required>\r\n                            {{role.description}}\r\n                          </mat-checkbox>\r\n                        </ng-container>\r\n                      </ng-template>\r\n                      <ng-template #notShowBlock>\r\n                        {{'Add_User.NO_ROLES_EXISTS' | translate}}\r\n                      </ng-template>\r\n                    </div>\r\n                  </fieldset>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>\r\n                  <p [ngClass]=\"{ 'has-error': isSubmitted && formControls.firstName.errors }\">\r\n                    <!-- First Name field -->\r\n                    <mat-form-field class=\"full-width\">\r\n                      <mat-label>{{'Add_User.FirstName' | translate}}</mat-label>\r\n                      <input tabindex=\"2\" formControlName=\"firstName\" onkeypress=\"return /[a-z]/i.test(event.key)\" (input)=\"userDataModified()\" maxlength=\"16\"\r\n                        matInput required name=\"firstName\" required>\r\n                      <mat-error *ngIf=\"newUserForm.invalid\">{{'Add_User.FirstName Validation' | translate}}</mat-error>\r\n                    </mat-form-field>\r\n                  </p>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>\r\n                  <p [ngClass]=\"{ 'has-error': isSubmitted && formControls.lastName.errors }\">\r\n                    <!-- Last name field -->\r\n                    <mat-form-field class=\"full-width\">\r\n                      <mat-label>{{'Add_User.LastName' | translate}}</mat-label>\r\n                      <input tabindex=\"3\" formControlName=\"lastName\" onkeypress=\"return /[a-z]/i.test(event.key)\" (input)=\"userDataModified()\" maxlength=\"35\"\r\n                        matInput name=\"lastName\" required>\r\n                      <mat-error *ngIf=\"newUserForm.invalid\">{{'Add_User.LastName Validation' | translate}}</mat-error>\r\n                    </mat-form-field>\r\n                  </p>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>\r\n                  <p [ngClass]=\"{ 'has-error': isSubmitted && formControls.emailAddress.errors }\">\r\n                    <!-- Email Address field -->\r\n                    <mat-form-field class=\"full-width\">\r\n                      <mat-label>{{'Add_User.EmailID' | translate}}</mat-label>\r\n                      <input tabindex=\"4\" matInput=\"email\" (input)=\"userDataModified()\" formControlName=\"emailAddress\">\r\n                      <mat-error *ngIf=\"newUserForm.invalid\">{{'Add_User.Email Validation' | translate}}</mat-error>\r\n                    </mat-form-field>\r\n                  </p>\r\n                </td>\r\n              </tr>\r\n              <ng-container *ngIf=\"hasDeletePermissions\">\r\n                <tr>\r\n                  <td>\r\n                    <ng-container *ngIf=\"edit\">\r\n                      <!-- New user field -->\r\n                      <mat-checkbox tabindex=\"5\" name=\"markUserActiveInactive\" [checked]=\"setUserActiveInactive\"\r\n                        (change)=\"changeUserStatus($event)\">\r\n                        {{activeInactiveCaption}}</mat-checkbox>\r\n                    </ng-container>\r\n                  </td>\r\n                  <td class=\"termination-date\">\r\n                    <ng-container class=\"termination-date\" *ngIf=\"showHideTerminationDate\">\r\n                      <mat-label class=\"termination-date\">{{'Edit_User.TerminationDate' | translate}}\r\n                        {{populateUserDetail.terminationDate |  date:'dd MMMM yyyy'}}</mat-label>\r\n                    </ng-container>\r\n                  </td>\r\n                </tr>\r\n              </ng-container>\r\n              <tr>\r\n                <td class=\"tableForcePasswordChangePadding\">\r\n                  <ng-container *ngIf=\"edit\">\r\n                    <!-- New user field -->\r\n                    <mat-checkbox tabindex=\"6\" name=\"forcePasswordChange\" [disabled]=\"disableEnableForcedPwdChange\"\r\n                      [checked]=\"isForcedPwdChangeRequired\" (change)=\"changeForcePasswordChange($event)\">\r\n                      {{'Edit_User.ForcePasswordChange' | translate}}</mat-checkbox>\r\n                  </ng-container>\r\n                </td>\r\n                <td></td>\r\n              </tr>\r\n            </table>\r\n\r\n            <!-- Save and Reset button enable/disable based on different criteria Add/Edit/Form No Dirty etc.. -->\r\n            <ng-template *ngIf=\"edit; then saveDisableForEdit; else saveForNewUser\">\r\n            </ng-template>\r\n            <ng-template #saveDisableForEdit>\r\n              <p>\r\n                <button tabindex=\"9\"  mat-button class = \"button-style\" mat-raised-button\r\n                  [disabled]=\"!newUserForm.valid || !formEdited || saveButtonClicked\" (click)=\"save()\" type=\"button\"\r\n                  color=\"primary\">{{'Add_User.Save' | translate}}</button>\r\n                <button tabindex=\"10\"  mat-button class = \"button-style\" mat-raised-button\r\n                  [disabled]=\"!formEdited || saveButtonClicked\" (click)=\"reset()\" type=\"button\"\r\n                  color=\"primary\"> {{'Add_User.Reset' | translate}}\r\n                </button>\r\n              </p>\r\n            </ng-template>\r\n            <ng-template #saveForNewUser>\r\n              <p>\r\n                <button tabindex=\"9\"  mat-button class = \"button-style\" mat-raised-button [disabled]=\"!newUserForm.valid || saveButtonClicked\"\r\n                  (click)=\"save()\" type=\"button\" \r\n                  color=\"primary\">{{'Add_User.Save' | translate}}</button>\r\n              </p>\r\n            </ng-template>\r\n          </fieldset>\r\n        </form>\r\n      </div>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</ng-template>\r\n");

/***/ }),

/***/ "./src/app/managetisuser/newtisuser/newtisuser-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/managetisuser/newtisuser/newtisuser-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: NewtisuserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewtisuserRoutingModule", function() { return NewtisuserRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _newtisuser_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./newtisuser.component */ "./src/app/managetisuser/newtisuser/newtisuser.component.ts");
/* harmony import */ var src_app_shared_service_user_details_resolver_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/service/user-details-resolver.service */ "./src/app/shared/service/user-details-resolver.service.ts");
/* harmony import */ var src_app_shared_service_tocs_resolver_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/service/tocs-resolver.service */ "./src/app/shared/service/tocs-resolver.service.ts");
/* harmony import */ var src_app_shared_service_landing_page_resolver_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/service/landing-page-resolver.service */ "./src/app/shared/service/landing-page-resolver.service.ts");







/**
 * Routes defined for Addition and Updation of TIS users along with resolver services
 */
var routes = [
    {
        path: '',
        component: _newtisuser_component__WEBPACK_IMPORTED_MODULE_3__["NewtisuserComponent"],
        resolve: { userDetail: src_app_shared_service_user_details_resolver_service__WEBPACK_IMPORTED_MODULE_4__["UserDetailsResolverService"], tocs: src_app_shared_service_tocs_resolver_service__WEBPACK_IMPORTED_MODULE_5__["TocsResolverService"], landingPage: src_app_shared_service_landing_page_resolver_service__WEBPACK_IMPORTED_MODULE_6__["LandingPageResolverService"] }
    }
];
var NewtisuserRoutingModule = /** @class */ (function () {
    function NewtisuserRoutingModule() {
    }
    NewtisuserRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], NewtisuserRoutingModule);
    return NewtisuserRoutingModule;
}());



/***/ }),

/***/ "./src/app/managetisuser/newtisuser/newtisuser.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/managetisuser/newtisuser/newtisuser.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* @import \"~@angular/material/prebuilt-themes/indigo-pink.css\"; */\r\n.newUserForm{\r\n    min-width: 150px;\r\n    max-width: 450px;\r\n    width: 100%;\r\n  }\r\nmat-form-field {\r\n    /* color: #FFBF00 !important; */\r\n    margin-left: 10px;\r\n    font-size: 1.0em!important;\r\n}\r\nmat-checkbox {\r\n    margin-left: 10px;\r\n}\r\n.lastname{\r\nbackground-color: white;\r\n}\r\n.fieldset {\r\n    padding-left: 40px;\r\n    display: inline-block;\r\n   \r\n}\r\n.termination-date {\r\n    margin-left: 20px;\r\n}\r\n.toc-width {\r\n    width: 255px;\r\n    max-width: 255px;\r\n}\r\nbutton {\r\n    margin-left: 10px;\r\n}\r\n.formFieldset {\r\n    background-color: #EFEFEF; \r\n    min-width: 500px;\r\n    width: 32%;\r\n    border: white;\r\n    box-shadow:0 0 10px #666;\r\n   }\r\n.formFieldset-matcard {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    margin-top: 1%; \r\n    padding-top: 0%;\r\n    min-width: 500px; \r\n    -webkit-box-pack: center; \r\n            justify-content: center; \r\n    -webkit-box-align: center; \r\n            align-items: center\r\n   }\r\n.filler {\r\n    -webkit-box-flex: 1;\r\n            flex: 1 1 auto;\r\n }\r\n.applicationTitleToolbar {\r\n    background-color: #3C3C35;\r\n    border:1px solid #666;\r\n    border-radius:10px;\r\n    box-shadow:0 0 10px #666;\r\n}\r\n.roleFieldset {\r\n    border: 0;\r\n}\r\n.headerFieldset {\r\n      background-color:#C5C5BF;\r\n      line-height: 20%;\r\n      border:1px solid #666;\r\n      border-radius:10px;\r\n      box-shadow:0 0 10px #666;\r\n  }\r\n.application-titlebar-text-style{\r\n    /* color: white;\r\n    border: transparent;\r\n    font-size: medium; */\r\n    width: auto;\r\n}\r\n.icon-color{\r\n    background-color: white;\r\n  }\r\n.menu-overflow-hidden {\r\n    overflow: hidden !important;\r\n  }\r\n.application-titlebar-text-style1{\r\n  color: white;\r\n  font-size: medium;\r\n  text-align: center;\r\n  background-color: transparent;\r\n  border: transparent;\r\n}\r\n.tablePaddingAlign{\r\n    padding-left: 10px;\r\n    vertical-align : top;\r\n    padding-top: 28px;\r\n}\r\n.mat-button:hover {\r\n    background: #455a64;\r\n  }\r\n.tableTocPadding{\r\n    padding-left: 10px;\r\n    padding-top: 0px;\r\n}\r\n.tableForcePasswordChangePadding{\r\n    padding-top: 5px;\r\n}\r\n.checkBoxDisplay {\r\n    display: block;\r\n    /* background-color: #C5C5BF; */\r\n  }\r\n.rolesFieldset {\r\n    width: 258px;\r\n    max-width: 260px;\r\n    max-height: 250px;\r\n    overflow-y: auto;\r\n    overflow-x: auto;\r\n    border: 1px solid black;\r\n\r\n}\r\n::ng-deep .mat-checkbox .mat-checkbox-frame {\r\n    border-color: #C5C5BF;\r\n  }\r\n/* ::ng-deep .mat-checkbox-focused .mat-checkbox-focused {\r\n    background-color: darkgreen !important;\r\n  }\r\n  \r\n  ::ng-deep .mat-checkbox-checked .mat-checkbox-background {\r\n    background-color: darkgreen !important;\r\n  } */\r\n.far-end{\r\n    font-size: medium;\r\n    padding-left: 7px;\r\n    padding-top: 7px;\r\n    display: inline-grid;\r\n    margin-bottom: auto;\r\n    color: white;\r\n    font-style: italic;\r\n    }\r\n.space-reducer{\r\n    max-height: 20px;\r\n}\r\n.button-style{\r\n    /* background-color: #263238;\r\n    color: white;\r\n    width: 80px; */\r\n    font-size: medium;\r\n    /* height: 30px; */\r\n}\r\n.lds-ellipsis {\r\n  background-color: #EFEFEF; \r\n  position: absolute;\r\n  width: 10px;\r\n  height: 5px;\r\n  top: 1.2%;\r\n  left: 45%;\r\n}\r\n.lds-ellipsis div {\r\n  position: absolute;\r\n  top: 2px;\r\n  width: 8px;\r\n  height: 8px;\r\n  border-radius: 50%;\r\n  background:#3C3C35;\r\n  -webkit-animation-timing-function: cubic-bezier(0, 1, 1, 0);\r\n          animation-timing-function: cubic-bezier(0, 1, 1, 0);\r\n}\r\n.lds-ellipsis div:nth-child(1) {\r\n  left: 8px;\r\n  -webkit-animation: lds-ellipsis1 0.6s infinite;\r\n          animation: lds-ellipsis1 0.6s infinite;\r\n}\r\n.lds-ellipsis div:nth-child(2) {\r\n  left: 8px;\r\n  -webkit-animation: lds-ellipsis2 0.6s infinite;\r\n          animation: lds-ellipsis2 0.6s infinite;\r\n}\r\n.lds-ellipsis div:nth-child(3) {\r\n  left: 32px;\r\n  -webkit-animation: lds-ellipsis2 0.6s infinite;\r\n          animation: lds-ellipsis2 0.6s infinite;\r\n}\r\n.lds-ellipsis div:nth-child(4) {\r\n  left: 56px;\r\n  -webkit-animation: lds-ellipsis3 0.6s infinite;\r\n          animation: lds-ellipsis3 0.6s infinite;\r\n}\r\n@-webkit-keyframes lds-ellipsis1 {\r\n  0% {\r\n    -webkit-transform: scale(0);\r\n            transform: scale(0);\r\n  }\r\n  100% {\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n  }\r\n}\r\n@keyframes lds-ellipsis1 {\r\n  0% {\r\n    -webkit-transform: scale(0);\r\n            transform: scale(0);\r\n  }\r\n  100% {\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n  }\r\n}\r\n@-webkit-keyframes lds-ellipsis3 {\r\n  0% {\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n  }\r\n  100% {\r\n    -webkit-transform: scale(0);\r\n            transform: scale(0);\r\n  }\r\n}\r\n@keyframes lds-ellipsis3 {\r\n  0% {\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n  }\r\n  100% {\r\n    -webkit-transform: scale(0);\r\n            transform: scale(0);\r\n  }\r\n}\r\n@-webkit-keyframes lds-ellipsis2 {\r\n  0% {\r\n    -webkit-transform: translate(0, 0);\r\n            transform: translate(0, 0);\r\n  }\r\n  100% {\r\n    -webkit-transform: translate(24px, 0);\r\n            transform: translate(24px, 0);\r\n  }\r\n}\r\n@keyframes lds-ellipsis2 {\r\n  0% {\r\n    -webkit-transform: translate(0, 0);\r\n            transform: translate(0, 0);\r\n  }\r\n  100% {\r\n    -webkit-transform: translate(24px, 0);\r\n            transform: translate(24px, 0);\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYWdldGlzdXNlci9uZXd0aXN1c2VyL25ld3Rpc3VzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrRUFBa0U7QUFDbEU7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7RUFDYjtBQUVGO0lBQ0ksK0JBQStCO0lBQy9CLGlCQUFpQjtJQUNqQiwwQkFBMEI7QUFDOUI7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUVBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCOztBQUV6QjtBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBR0E7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGFBQWE7SUFDYix3QkFBd0I7R0FDekI7QUFFQTtJQUNDLG9CQUFhO0lBQWIsYUFBYTtJQUNiLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIseUJBQWtCO1lBQWxCO0dBQ0Q7QUFFSDtJQUNJLG1CQUFjO1lBQWQsY0FBYztDQUNqQjtBQUVBO0lBQ0cseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsd0JBQXdCO0FBQzVCO0FBRUM7SUFDRyxTQUFTO0FBQ2I7QUFFQTtNQUNNLHdCQUF3QjtNQUN4QixnQkFBZ0I7TUFDaEIscUJBQXFCO01BQ3JCLGtCQUFrQjtNQUNsQix3QkFBd0I7RUFDNUI7QUFFQTtJQUNFOzt3QkFFb0I7SUFDcEIsV0FBVztBQUNmO0FBRUE7SUFDSSx1QkFBdUI7RUFDekI7QUFFQTtJQUNFLDJCQUEyQjtFQUM3QjtBQUVGO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLG1CQUFtQjtBQUNyQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLG1CQUFtQjtFQUNyQjtBQUVGO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxjQUFjO0lBQ2QsK0JBQStCO0VBQ2pDO0FBRUY7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLHVCQUF1Qjs7QUFFM0I7QUFFQTtJQUNJLHFCQUFxQjtFQUN2QjtBQUVBOzs7Ozs7S0FNRztBQUVMO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCO0FBRUo7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJOztrQkFFYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxTQUFTO0VBQ1QsU0FBUztBQUNYO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQiwyREFBbUQ7VUFBbkQsbURBQW1EO0FBQ3JEO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsOENBQXNDO1VBQXRDLHNDQUFzQztBQUN4QztBQUNBO0VBQ0UsU0FBUztFQUNULDhDQUFzQztVQUF0QyxzQ0FBc0M7QUFDeEM7QUFDQTtFQUNFLFVBQVU7RUFDViw4Q0FBc0M7VUFBdEMsc0NBQXNDO0FBQ3hDO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsOENBQXNDO1VBQXRDLHNDQUFzQztBQUN4QztBQUNBO0VBQ0U7SUFDRSwyQkFBbUI7WUFBbkIsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSwyQkFBbUI7WUFBbkIsbUJBQW1CO0VBQ3JCO0FBQ0Y7QUFQQTtFQUNFO0lBQ0UsMkJBQW1CO1lBQW5CLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsMkJBQW1CO1lBQW5CLG1CQUFtQjtFQUNyQjtBQUNGO0FBQ0E7RUFDRTtJQUNFLDJCQUFtQjtZQUFuQixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLDJCQUFtQjtZQUFuQixtQkFBbUI7RUFDckI7QUFDRjtBQVBBO0VBQ0U7SUFDRSwyQkFBbUI7WUFBbkIsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSwyQkFBbUI7WUFBbkIsbUJBQW1CO0VBQ3JCO0FBQ0Y7QUFDQTtFQUNFO0lBQ0Usa0NBQTBCO1lBQTFCLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UscUNBQTZCO1lBQTdCLDZCQUE2QjtFQUMvQjtBQUNGO0FBUEE7RUFDRTtJQUNFLGtDQUEwQjtZQUExQiwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLHFDQUE2QjtZQUE3Qiw2QkFBNkI7RUFDL0I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21hbmFnZXRpc3VzZXIvbmV3dGlzdXNlci9uZXd0aXN1c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBAaW1wb3J0IFwifkBhbmd1bGFyL21hdGVyaWFsL3ByZWJ1aWx0LXRoZW1lcy9pbmRpZ28tcGluay5jc3NcIjsgKi9cclxuLm5ld1VzZXJGb3Jte1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIG1heC13aWR0aDogNDUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICAvKiBjb2xvcjogI0ZGQkYwMCAhaW1wb3J0YW50OyAqL1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDEuMGVtIWltcG9ydGFudDtcclxufVxyXG5cclxubWF0LWNoZWNrYm94IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4ubGFzdG5hbWV7XHJcbmJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZmllbGRzZXQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICBcclxufVxyXG5cclxuLnRlcm1pbmF0aW9uLWRhdGUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcblxyXG4udG9jLXdpZHRoIHtcclxuICAgIHdpZHRoOiAyNTVweDtcclxuICAgIG1heC13aWR0aDogMjU1cHg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG4uZm9ybUZpZWxkc2V0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRkVGRUY7IFxyXG4gICAgbWluLXdpZHRoOiA1MDBweDtcclxuICAgIHdpZHRoOiAzMiU7XHJcbiAgICBib3JkZXI6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzowIDAgMTBweCAjNjY2O1xyXG4gICB9XHJcblxyXG4gICAuZm9ybUZpZWxkc2V0LW1hdGNhcmQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi10b3A6IDElOyBcclxuICAgIHBhZGRpbmctdG9wOiAwJTtcclxuICAgIG1pbi13aWR0aDogNTAwcHg7IFxyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IFxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxyXG4gICB9XHJcblxyXG4uZmlsbGVyIHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gfVxyXG4gXHJcbiAuYXBwbGljYXRpb25UaXRsZVRvb2xiYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNDM0MzNTtcclxuICAgIGJvcmRlcjoxcHggc29saWQgIzY2NjtcclxuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcclxuICAgIGJveC1zaGFkb3c6MCAwIDEwcHggIzY2NjtcclxufVxyXG5cclxuIC5yb2xlRmllbGRzZXQge1xyXG4gICAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG4uaGVhZGVyRmllbGRzZXQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNDNUM1QkY7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMCU7XHJcbiAgICAgIGJvcmRlcjoxcHggc29saWQgIzY2NjtcclxuICAgICAgYm9yZGVyLXJhZGl1czoxMHB4O1xyXG4gICAgICBib3gtc2hhZG93OjAgMCAxMHB4ICM2NjY7XHJcbiAgfVxyXG5cclxuICAuYXBwbGljYXRpb24tdGl0bGViYXItdGV4dC1zdHlsZXtcclxuICAgIC8qIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTsgKi9cclxuICAgIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG4uaWNvbi1jb2xvcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgLm1lbnUtb3ZlcmZsb3ctaGlkZGVuIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4uYXBwbGljYXRpb24tdGl0bGViYXItdGV4dC1zdHlsZTF7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4udGFibGVQYWRkaW5nQWxpZ257XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbiA6IHRvcDtcclxuICAgIHBhZGRpbmctdG9wOiAyOHB4O1xyXG59XHJcblxyXG4ubWF0LWJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDU1YTY0O1xyXG4gIH1cclxuXHJcbi50YWJsZVRvY1BhZGRpbmd7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG59XHJcblxyXG4udGFibGVGb3JjZVBhc3N3b3JkQ2hhbmdlUGFkZGluZ3tcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5jaGVja0JveERpc3BsYXkge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjQzVDNUJGOyAqL1xyXG4gIH1cclxuXHJcbi5yb2xlc0ZpZWxkc2V0IHtcclxuICAgIHdpZHRoOiAyNThweDtcclxuICAgIG1heC13aWR0aDogMjYwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAyNTBweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcblxyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1jaGVja2JveCAubWF0LWNoZWNrYm94LWZyYW1lIHtcclxuICAgIGJvcmRlci1jb2xvcjogI0M1QzVCRjtcclxuICB9XHJcbiAgXHJcbiAgLyogOjpuZy1kZWVwIC5tYXQtY2hlY2tib3gtZm9jdXNlZCAubWF0LWNoZWNrYm94LWZvY3VzZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZWVuICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIDo6bmctZGVlcCAubWF0LWNoZWNrYm94LWNoZWNrZWQgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmVlbiAhaW1wb3J0YW50O1xyXG4gIH0gKi9cclxuXHJcbi5mYXItZW5ke1xyXG4gICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDdweDtcclxuICAgIHBhZGRpbmctdG9wOiA3cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcclxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICB9XHJcbiAgICBcclxuLnNwYWNlLXJlZHVjZXJ7XHJcbiAgICBtYXgtaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uYnV0dG9uLXN0eWxle1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzI2MzIzODtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiA4MHB4OyAqL1xyXG4gICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICAvKiBoZWlnaHQ6IDMwcHg7ICovXHJcbn1cclxuXHJcbi5sZHMtZWxsaXBzaXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFRkVGRUY7IFxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTBweDtcclxuICBoZWlnaHQ6IDVweDtcclxuICB0b3A6IDEuMiU7XHJcbiAgbGVmdDogNDUlO1xyXG59XHJcbi5sZHMtZWxsaXBzaXMgZGl2IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAycHg7XHJcbiAgd2lkdGg6IDhweDtcclxuICBoZWlnaHQ6IDhweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZDojM0MzQzM1O1xyXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLCAxLCAxLCAwKTtcclxufVxyXG4ubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMSkge1xyXG4gIGxlZnQ6IDhweDtcclxuICBhbmltYXRpb246IGxkcy1lbGxpcHNpczEgMC42cyBpbmZpbml0ZTtcclxufVxyXG4ubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMikge1xyXG4gIGxlZnQ6IDhweDtcclxuICBhbmltYXRpb246IGxkcy1lbGxpcHNpczIgMC42cyBpbmZpbml0ZTtcclxufVxyXG4ubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMykge1xyXG4gIGxlZnQ6IDMycHg7XHJcbiAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMyIDAuNnMgaW5maW5pdGU7XHJcbn1cclxuLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDQpIHtcclxuICBsZWZ0OiA1NnB4O1xyXG4gIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMyAwLjZzIGluZmluaXRlO1xyXG59XHJcbkBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMSB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIGxkcy1lbGxpcHNpczMge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBsZHMtZWxsaXBzaXMyIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyNHB4LCAwKTtcclxuICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/managetisuser/newtisuser/newtisuser.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/managetisuser/newtisuser/newtisuser.component.ts ***!
  \******************************************************************/
/*! exports provided: NewtisuserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewtisuserComponent", function() { return NewtisuserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/fesm5/ngx-logger.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/utils/constants */ "./src/app/shared/utils/constants.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_model_tisuser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/model/tisuser */ "./src/app/shared/model/tisuser.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_app_shared_service_user_management_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/service/user-management.service */ "./src/app/shared/service/user-management.service.ts");
/* harmony import */ var src_app_shared_model_UserDetails__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/model/UserDetails */ "./src/app/shared/model/UserDetails.ts");
/* harmony import */ var src_app_shared_model_PasswordChange__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/model/PasswordChange */ "./src/app/shared/model/PasswordChange.ts");
/* harmony import */ var src_app_shared_model_UserStatus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/model/UserStatus */ "./src/app/shared/model/UserStatus.ts");
/* harmony import */ var src_app_shared_model_AuthResponse__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/model/AuthResponse */ "./src/app/shared/model/AuthResponse.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/confirm-dialog/confirm-dialog.component */ "./src/app/shared/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! aws-amplify */ "./node_modules/aws-amplify/lib-esm/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




















/**
 * User Maintenance related code to capture details from the form.
 * Make API call with given parameters and render the results.
 */
var NewtisuserComponent = /** @class */ (function () {
    /**
     * Constructor with injected route, NGXLogger, formBuilder, router, userManagementService,
     * location, media, translate, toastr, dialog.
     * @param route - The route that resulted in the loading of this page.
     * @param logger - Loggers to maintain application logs.
     * @param formBuilder - Instance of form builder to control form related events.
     * @param router - Roter object used to navigate on different pages.
     * @param userManagementService - Instance of created service to call different services.
     * @param media - Obser service of media to get the size of screen.
     * @param translate - Service that translates messages to other languages.
     * @param toastr - Toaster Service to show success and error banners.
     * @param dialog - Mat Dialog instance to popup confirmation message on page.
     */
    function NewtisuserComponent(route, logger, formBuilder, router, userManagementService, media, translate, toastr, dialog) {
        var _this = this;
        this.route = route;
        this.logger = logger;
        this.formBuilder = formBuilder;
        this.router = router;
        this.userManagementService = userManagementService;
        this.media = media;
        this.translate = translate;
        this.toastr = toastr;
        this.dialog = dialog;
        /** Show 'No Roles available' if no roles fetched from API else show all the roles fetched from API. */
        this.showHideRoles = false;
        /** Boolean variable to handle enable/disable of Save button until service response not received. */
        this.saveButtonClicked = false;
        /** This array is used for specifying user types. */
        this.userTypes = [
            { value: src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].LIVE_USER_CODE, display: 'Live User' }
        ];
        /** This array is used for specifying lanuages in the drop down. */
        this.languages = [
            { value: src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].DEFAULT_LANGUAGE_CODE, display: 'English UK' }
        ];
        /** This array is used for specifying default Star mobile app. */
        this.applicationNames = [
            { val: src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].STAR_MOBILE_APP_CODE, disp: 'STARMobile app' }
        ];
        /** Array object to hold user details for edit returned from API. */
        this.userDetails = [];
        /** Member variable to store Tocs returned from API and Bind with control. */
        this.tocs = [];
        /** Member variable to roles to store roles returned from API and Bind with control. */
        this.roles = [];
        /**
         * Member variable to bind with new password control and use its value to pass while
         * calling API.
         */
        this.isForcedPwdChangeRequired = false;
        /**
         * Member variable to bind with markUserActiveInactive control and use its value to pass while
         * calling API.
         */
        this.setUserActiveInactive = false;
        /** Member variable disable/enable new password control. */
        this.disableEnableForcedPwdChange = false;
        /**
         * Member variable disable/enable roles controls
         * based on status of user returned from API.
         */
        this.disableEnableRoles = false;
        /** Member variable to show/hide termination date label. */
        this.showHideTerminationDate = false;
        /**
         * Member variable to roles to store roles returned from API for editable
         * user and Bind with control.
         */
        this.userRoles = [];
        /** Supported application languages. */
        this.lang = src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].SUPPORTED_LANGUAGES;
        /** Field for diffrentiating if edit user is to be loaded or new user. */
        this.editUser = src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].EDIT;
        /** Member boolian variable to check for form is in edit mode. */
        this.edit = false;
        /** Member variable to keep save button disable when first time form loads in edit mode and so on. */
        this.formEdited = false;
        /** Member variable to handle pop-up message if form is edited and user wants to leave */
        this.windowSelectionCheck = false;
        /**Set flag to hide/display edit user button after validating permissions. */
        this.hasEditPermissions = false;
        /** Set flag to hide/display edit user button after validating permissions. */
        this.hasAddPermissions = false;
        /**
         * Set flag to hide/display inActive checkbox and Terminationdate label
         * after validating permissions.
         */
        this.hasDeletePermissions = false;
        /** Member variable for storing star hub user TOC. */
        this.starHubUserToc = "";
        /** Member variable for storing star hub user TOC Name. */
        this.starHubUserTocName = "";
        /**
         * Member variable to hold caption of activeInactive
         * checkbox based earlier user status.
         */
        this.activeInactiveCaption = "";
        /** Flag to allow or restrict viewing the add/edit component as per valid permissions. */
        this.cannotViewPage = false;
        /** Member variable to store and check URL for add or edit. */
        this.href = "";
        /** Member variable to identify and set the page title as per Add/edit. */
        this.title = "";
        /** Capture Ok/Cancel value returned from value changed alert messgae from user. */
        this.alertResult = false;
        /** Holds current screen width, updated as a result of media change. */
        this.currentScreenWidth = '';
        /** Show/hide toolbar buttons based on screen width.  */
        this.showToolbarButtons = true;
        this.defaultLang = src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].DEFAULT_LANGUAGE;
        translate.addLangs(this.lang);
        translate.setDefaultLang(this.defaultLang);
        this.passwordChange = new src_app_shared_model_PasswordChange__WEBPACK_IMPORTED_MODULE_11__["PasswordChange"]();
        this.flexMediaWatcher = media.media$.subscribe(function (change) {
            if (change.mqAlias !== _this.currentScreenWidth) {
                _this.currentScreenWidth = change.mqAlias;
                _this.setupTable();
            }
        });
    }
    Object.defineProperty(NewtisuserComponent.prototype, "defaultLang", {
        /**
         * Accessor for the defaultLang property.
         * @return Current value of the language property.
         */
        get: function () {
            return this._defaultLang;
        },
        /**
         * Mutator for the defaultLang property.
         * @param language New value of the language property.
         */
        set: function (value) {
            this._defaultLang = value;
        },
        enumerable: true,
        configurable: true
    });
    /** Define columns to be displayed as screen width changes. */
    NewtisuserComponent.prototype.setupTable = function () {
        if (this.currentScreenWidth == 'xs' || this.currentScreenWidth == 'sm') {
            this.showToolbarButtons = false;
        }
        else {
            this.showToolbarButtons = true;
        }
    };
    /**
     * Implement OnInit's `ngOnInit` method
     * Read form controls using form builder.
     */
    NewtisuserComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Reading data for current user info from resolver to find star hub user info.
        this.currentUserInfo = this.route.snapshot.data[src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].LANDING_PAGE_RESOLVER_FIELD];
        var authResponse = new src_app_shared_model_AuthResponse__WEBPACK_IMPORTED_MODULE_13__["AuthResponse"](this.currentUserInfo);
        this.hasAddPermissions = authResponse.hasAddPermissions;
        this.hasEditPermissions = authResponse.hasEditPermissions;
        this.hasDeletePermissions = authResponse.hasDeletePermissions;
        this.starHubUserToc = authResponse.defaultToc;
        // Read the parameters from URL. 
        var parameters = this.route.snapshot.paramMap;
        // Call createUserForm() method to create user form.
        this.createUserForm();
        var selectDefaultUserType = this.userTypes.find(function (c) { return c.value == src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].LIVE_USER_CODE; });
        this.newUserForm.get('userType').setValue(selectDefaultUserType.value);
        var defaultAppName = this.applicationNames.find(function (c) { return c.val == src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].STAR_MOBILE_APP_CODE; });
        this.newUserForm.get('Applications').setValue(defaultAppName.val);
        this.href = this.router.url;
        if (this.href.includes(src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].EDIT)) {
            this.title = src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].TITLE_EDIT_USERS;
            if (!this.hasEditPermissions) {
                this.cannotViewPage = true;
            }
        }
        else if (this.href.includes(src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].USER_FORM)) {
            this.title = src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].TITLE_ADD_USERS;
            if (!this.hasAddPermissions) {
                this.cannotViewPage = true;
            }
        }
        // Load user deatils using Resolver service.
        this.userDetails = this.route.snapshot.data['userDetail'];
        if (this.userDetails && this.userDetails.length > 0) {
            this.userDetail = this.userDetails[0];
            this.edit = true;
            this.patchValuesToFormFields();
        }
        else {
            if (this.href.includes(src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].USER_FORM)) {
                this.fetchTocRoles(this.starHubUserToc);
            }
            else {
                //Navigates to the landing page in case it is an invalid url.
                this.router.navigate([src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].USER_LIST_FORM]);
            }
        }
        // Load tocs using Resolver service.
        this.tocs = this.route.snapshot.data['tocs'];
        // Sort TOCs data in ascending order.
        if (this.tocs != null) {
            var filterResult = this.tocs.filter(function (u) {
                return u.internalTocCode == _this.starHubUserToc;
            });
            if (filterResult != null && filterResult.length > 0) {
                var tocObject = filterResult[0];
                this.starHubUserTocName = tocObject.toc;
            }
            this.tocs.sort(function (a, b) { return a.toc.localeCompare(b.toc); });
        }
    };
    /**
     * Method to navigate to add/edit user help page.
     */
    NewtisuserComponent.prototype.addUserHelpClick = function () {
        //Check if user is adding or editing a user.
        if (this.edit) {
            localStorage.setItem('sourcePageOfHelp', src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].EDIT_USER_FORM);
        }
        else {
            localStorage.setItem('sourcePageOfHelp', src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].ADD_USER_FORM);
        }
        //Navigate to add/ edit user help page.
        window.open(src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].USER_HELP_FORM, "umUserHelp");
    };
    /**
     * Create user form with validators.
     */
    NewtisuserComponent.prototype.createUserForm = function () {
        this.newUserForm = this.formBuilder.group({
            employeeId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].EMP_ID_MIN_LENGTH), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[a-zA-Z0-9\']+')])],
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[a-zA-Z\']+')])],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, , _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[a-zA-Z\']+')])],
            emailAddress: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email]],
            Applications: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            languageCode: [src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].DEFAULT_LANGUAGE_CODE, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            toc: [this.starHubUserToc, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            password: [src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].DEFAULT_PASSWORD],
            userType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            operatorId: [''],
            manualPriceAuthorisation: [src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].MANUAL_PRICE_AUTH_CODE],
            storeId: [src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].STORE_ID],
            roles: this.formBuilder.array(this.roles, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            forcePasswordChange: []
        });
    };
    /**
     *  Patch values to the fields on loading the form for edit for the user selected from user list
     *  resettin these values when user selects reset of the edited form values in the edit user page.
     */
    NewtisuserComponent.prototype.patchValuesToFormFields = function () {
        if (this.edit == true) {
            if (this.userDetail != null) {
                this.populateUserDetail = Object.assign({}, this.userDetail);
                // Applying logic of Deep copy to keep original roles returned from API for editable user seperate
                // than binding objects and later on when user click on reset button
                // these same roles can be copied to control binding objects.
                if (this.userRoles.length > 0) {
                    this.userDetail.roles = [];
                    this.populateUserDetail.roles = [];
                    for (var i = 0; i < this.userRoles.length; i++) {
                        this.userDetail.roles.push(this.userRoles[i]);
                        this.populateUserDetail.roles.push(this.userRoles[i]);
                    }
                }
                else {
                    for (var i = 0; i < this.userDetail.roles.length; i++) {
                        this.userRoles.push(this.userDetail.roles[i]);
                    }
                }
                // ToDo: Later on this can also be fetched using resolver service for editing user
                this.fetchTocRoles(this.populateUserDetail.toc);
                // Populate force password member variable with value returned from API
                if (this.userDetail.forcePwdChange) {
                    this.isForcedPwdChangeRequired = true;
                    this.disableEnableForcedPwdChange = true;
                    this.passwordChange.isForcedPwdChangeRequired = true;
                }
                else {
                    this.isForcedPwdChangeRequired = false;
                    this.passwordChange.isForcedPwdChangeRequired = false;
                    this.disableEnableForcedPwdChange = false;
                }
                // Populate markUserActiveInactive control with value returned from API
                if (!this.userDetail.terminationDate || this.userDetail.terminationDate == null) {
                    this.disableEnableRoles = false;
                    this.setUserActiveInactive = false;
                    this.showHideTerminationDate = false;
                    this.activeInactiveCaption = src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].MAKE_INACTIVE;
                }
                else {
                    this.showHideTerminationDate = true;
                    this.activeInactiveCaption = src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].MAKE_ACTIVE;
                    this.setUserActiveInactive = false;
                    this.disableEnableRoles = true;
                    this.disableEnableForcedPwdChange = true;
                    this.newUserForm.controls['firstName'].disable();
                    this.newUserForm.controls['lastName'].disable();
                    this.newUserForm.controls['emailAddress'].disable();
                    this.newUserForm.controls['roles'].disable();
                    this.newUserForm.controls['forcePasswordChange'].disable();
                }
                // Populate fields using returned object from API for edit.
                this.newUserForm.patchValue({
                    employeeId: this.populateUserDetail.employeeId,
                    toc: this.populateUserDetail.toc,
                    firstName: this.populateUserDetail.firstName,
                    lastName: this.populateUserDetail.lastName,
                    role: this.populateUserDetail.roles,
                    emailAddress: this.populateUserDetail.emailAddress
                });
                this.newUserForm.controls['employeeId'].disable();
            }
        }
    };
    /**
     * Capture selected Application's value from drop down use the same later on while
     * fetching Roles from API.
     * @param event - To be used to get selected Application's value from Application drop down
     */
    NewtisuserComponent.prototype.changeSelectedApplication = function (event) {
        this.selectedAppId = event.value;
    };
    /**
     * Capture checked/unchecked value of forcePasswordChange checkbox.
     * @param event - To be used to get forcePasswordChange checkbox checked value.
     */
    NewtisuserComponent.prototype.changeForcePasswordChange = function (event) {
        this.formEdited = true;
        this.isForcedPwdChangeRequired = event.checked;
        this.passwordChange.isForcedPwdChangeRequired = event.checked;
        if (event.checked) {
            this.setUserActiveInactive = false;
        }
    };
    /**
     * Method to control auth logout. User will be redirected to
     * login page. Also, all local storage/cache for
     * page size would be cleared.
     */
    NewtisuserComponent.prototype.logout = function () {
        aws_amplify__WEBPACK_IMPORTED_MODULE_17__["Auth"].signOut().then(function (x) {
            //Clearing the local storage when the user has signed out.
            localStorage.clear();
            //Redirecting the user to login page after validating that
            //the current user is not logged in.
            var redirectUrlParams = window.location.href;
            window.location.href = src_environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].auth_ui_url + '?redirect=' + redirectUrlParams;
        });
    };
    /**
     * Capture checked/unchecked value of setUserInActive checkbox
     * @param event - To be used to get setUserInActive checkbox checked value
     */
    NewtisuserComponent.prototype.changeUserStatus = function (event) {
        if (!this.disableEnableForcedPwdChange && this.isForcedPwdChangeRequired) {
            this.isForcedPwdChangeRequired = false;
            this.passwordChange.isForcedPwdChangeRequired = false;
        }
        this.formEdited = true;
        this.setUserActiveInactive = event.checked;
    };
    /**
     * User fields modified event.
     */
    NewtisuserComponent.prototype.userDataModified = function () {
        if (this.edit) {
            this.formEdited = true;
        }
    };
    /**
     * Method to handle home page navigation click event
     */
    NewtisuserComponent.prototype.homePageNav = function () {
        var _this = this;
        if (this.edit && this.newUserForm.valid && this.formEdited == true) {
            var dialogData = new src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_15__["ConfirmDialogModel"]();
            var dialogRef = this.dialog.open(src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_15__["ConfirmDialogComponent"], { data: dialogData });
            dialogRef.afterClosed().subscribe(function (dialogResult) {
                _this.alertResult = dialogResult;
                if (_this.alertResult) {
                    _this.router.navigate([src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].USER_LIST_FORM]);
                }
            });
        }
        else {
            this.router.navigate([src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].USER_LIST_FORM]);
        }
    };
    /**
     * Fetch TOC roles from API
     * @param tocCode The TOC code for which roles are required.
     * @return The list of roles available for the the given TOC.
     */
    NewtisuserComponent.prototype.fetchTocRoles = function (tocCode) {
        var _this = this;
        this.logger.info('TOC Code send to service for pulling out roles details :' + tocCode);
        this.userManagementService.getUserRoles(tocCode, this.selectedAppId).subscribe(function (data) {
            _this.roles = [];
            _this.showHideRoles = false;
            if (data != null) {
                var roleObjects = data;
                if (roleObjects.length > 0) {
                    _this.showHideRoles = true;
                    _this.roles = roleObjects;
                    _this.roles.sort(function (a, b) { return a.description.localeCompare(b.description); });
                    // Push all the roles of edit record into controls by matching Role Id.
                    if (_this.edit) {
                        _this.setRolesForEditUser();
                    }
                }
            }
        }, function (error) {
            _this.logger.error(error);
        });
    };
    /**
     * Set roles for the edit user details in control.
     */
    NewtisuserComponent.prototype.setRolesForEditUser = function () {
        if (this.roles.length > 0) {
            var mobileRoles = this.newUserForm.get('roles');
            var rolesObject = this.populateUserDetail.roles;
            for (var j = 0; j < rolesObject.length; j++) {
                for (var i = 0; i < this.roles.length; i++) {
                    if (this.roles[i].id == rolesObject[j]) {
                        this.roles[i].isChecked = true;
                        mobileRoles.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.roles[i].id));
                    }
                }
            }
        }
    };
    /**
     * Change event method to capture the roles selected during user creation.
     * @param event  Handle selection and di-selection of roles.
     */
    NewtisuserComponent.prototype.changeSelectedRole = function (event) {
        this.formEdited = true;
        var mobileRoles = this.newUserForm.get('roles');
        if (event.checked) {
            mobileRoles.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](event.source.value));
            if (this.edit) {
                this.populateUserDetail.roles.push(event.source.value);
            }
        }
        else {
            var i = mobileRoles.controls.findIndex(function (x) { return x.value === event.source.value; });
            mobileRoles.removeAt(i);
            if (this.edit) {
                var index = this.populateUserDetail.roles.indexOf(event.source.value);
                if (index !== -1) {
                    this.populateUserDetail.roles.splice(index, 1);
                }
            }
        }
    };
    /**
     * ToDo: Review it later and check how this can be handled from spec file
     * Mark a role selected in Roles checkbox based on provided fixed value of TOC
     * @param roleId - provided numeric role if
     */
    NewtisuserComponent.prototype.selectMatCheckBox = function (roleId) {
        var mobileRoles = this.newUserForm.get('roles');
        mobileRoles.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](roleId));
    };
    /**
     * Reset form data
     */
    NewtisuserComponent.prototype.reset = function () {
        this.roles = [];
        this.populateUserDetail.roles = [];
        var mobileRoles = this.newUserForm.get('roles');
        var selectedRoles = [];
        if (mobileRoles != null && mobileRoles.length != 0) {
            selectedRoles = mobileRoles.value.toString().split(',');
            var _loop_1 = function (i) {
                var j = mobileRoles.controls.findIndex(function (x) { return x.value == selectedRoles[i]; });
                mobileRoles.removeAt(j);
                var index = this_1.populateUserDetail.roles.indexOf(selectedRoles[i]);
                if (index !== -1) {
                    this_1.populateUserDetail.roles.splice(index, 1);
                }
            };
            var this_1 = this;
            for (var i = 0; i < selectedRoles.length; i++) {
                _loop_1(i);
            }
        }
        this.patchValuesToFormFields();
        this.formEdited = false;
    };
    /**
     * Save method enabled when all required fields are added correctly.
     * Shows the success toastr.
     * Reset the form fields conditionally in case of Add user.
     * Navigate to landing page in case of success for edit user.
     */
    NewtisuserComponent.prototype.save = function () {
        var _this = this;
        var firstName;
        var lastName;
        var eMail;
        var empId;
        Object.keys(this.newUserForm.controls).forEach(function (key) {
            var abstractControl = _this.newUserForm.get(key);
            if (abstractControl instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]) {
            }
            else if ((key) == 'employeeId') {
                empId = abstractControl.value;
                _this.newUserForm.get('operatorId').setValue(abstractControl.value);
            }
            else if ((key) == 'firstName') {
                firstName = abstractControl.value;
            }
            else if ((key) == 'lastName') {
                lastName = abstractControl.value;
            }
            else if ((key) == 'emailAddress') {
                eMail = abstractControl.value;
            }
            else {
                _this.logger.info("Save button clicked" + abstractControl.value);
            }
        });
        // This will capture the service response based on the edit user service inputs.
        if (this.edit == true) {
            var updatedUser = new src_app_shared_model_UserDetails__WEBPACK_IMPORTED_MODULE_10__["UserDetails"];
            updatedUser = this.populateUserDetail;
            updatedUser.firstName = firstName;
            updatedUser.lastName = lastName;
            updatedUser.emailAddress = eMail;
            updatedUser.storeId = src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].STORE_ID;
            // Set emailaddress to null incase of blank
            if (updatedUser.emailAddress == '') {
                updatedUser.emailAddress = null;
            }
            this.saveButtonClicked = true;
            if (this.userDetail.forcePwdChange != this.passwordChange.isForcedPwdChangeRequired) {
                // Call to updateForcePasswordChangeFlag method to 
                // update isForcedPwdChangeRequired field for user into DB through API call
                this.updateForcePasswordChangeFlag(empId, updatedUser);
            }
            else {
                if (this.setUserActiveInactive) {
                    // Call updateUserStatus method to update status of user in DB through API
                    this.updateUserStatus(empId, updatedUser);
                }
                else {
                    // Call updateUserDetails method to update user details in DB though API
                    this.updateUserDetails(updatedUser);
                }
            }
        }
        else {
            // Call updateUserDetails method to update user details in DB though API
            this.addUserDeatils();
        }
    };
    /**
     * Method to update user status through API call.
     * @param tocAfterReset - TOC code from which Star Hub user belongs
     * @param empId - User Id of user being updated
     * @param updatedUser - object carrying details for updating user
     */
    NewtisuserComponent.prototype.updateUserStatus = function (empId, updatedUser) {
        var _this = this;
        this.logger.info('Json send to service for updating user status field for user:');
        this.userStatus = new src_app_shared_model_UserStatus__WEBPACK_IMPORTED_MODULE_12__["UserStatus"]();
        if (this.setUserActiveInactive) {
            if (!this.showHideTerminationDate) {
                this.userStatus.activeStateChangeAction = src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].USER_TERMINATE;
            }
            else {
                this.userStatus.activeStateChangeAction = src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].USER_REACTIVATE;
            }
        }
        this.userManagementService.postChangeUserStatus(this.starHubUserToc, empId, this.userStatus).subscribe(function (data) {
            // after success response from save force passwordchange field api call update user info method
            if (_this.checkModifiedFields()) {
                _this.updateUserDetails(updatedUser);
            }
            else {
                _this.toastr.successToastr(src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].USER_UPDATED_SUCCESS_SECONDARY, src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].USER_UPDATED_SUCCESS_PRIMARY);
                _this.logger.info('Logging success updated user status by calling API ' +
                    src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].USER_UPDATED_SUCCESS_SECONDARY, src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].USER_UPDATED_SUCCESS_PRIMARY);
                _this.logger.info(data);
                _this.router.navigate(['userlist']);
            }
        }, function (error) {
            _this.saveButtonClicked = false;
            _this.errorMessagelogging = error;
            if (_this.errorMessagelogging.errorMessage.includes('$')) {
                _this.toastr.errorToastr(_this.errorMessagelogging.errorMessage.split('$')[1], _this.errorMessagelogging.errorMessage.split('$')[0]);
                _this.logger.error('Logging error on post service call for userStatus -' +
                    _this.errorMessagelogging.errorMessage.split('$')[1], _this.errorMessagelogging.errorMessage.split('$')[0]);
            }
            else {
                _this.toastr.errorToastr(_this.errorMessagelogging.errorMessage);
                _this.logger.error(_this.errorMessagelogging.errorObject);
            }
            _this.logger.error(_this.userStatus);
        });
    };
    /**
     * Method to update forcepasswordchange flag for user through API call.
     * @param tocAfterReset - TOC code from which Star Hub user belongs
     * @param empId - User Id of user being updated
     * @param updatedUser - object carrying details for updating user
     */
    NewtisuserComponent.prototype.updateForcePasswordChangeFlag = function (empId, updatedUser) {
        var _this = this;
        this.logger.info('Json send to service for updating forcepasswordchange field for user:');
        this.userManagementService.postForcePasswordChange(this.starHubUserToc, empId, this.passwordChange).subscribe(function (data) {
            // after success response from save force passwordchange field api call update user info method
            if (_this.checkModifiedFields()) {
                _this.updateUserDetails(updatedUser);
            }
            else {
                _this.toastr.successToastr(src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].USER_UPDATED_SUCCESS_SECONDARY, src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].USER_UPDATED_SUCCESS_PRIMARY);
                _this.logger.info('Logging success updated forcepasswordchange by calling API ' +
                    src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].USER_UPDATED_SUCCESS_SECONDARY, src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].USER_UPDATED_SUCCESS_PRIMARY);
                _this.logger.info(data);
                _this.router.navigate(['userlist']);
            }
        }, function (error) {
            _this.saveButtonClicked = false;
            _this.errorMessagelogging = error;
            if (_this.errorMessagelogging.errorMessage.includes('$')) {
                _this.toastr.errorToastr(_this.errorMessagelogging.errorMessage.split('$')[1], _this.errorMessagelogging.errorMessage.split('$')[0]);
                _this.logger.error('Logging error on post service call for forcepasswrodreset -' +
                    _this.errorMessagelogging.errorMessage.split('$')[1], _this.errorMessagelogging.errorMessage.split('$')[0]);
            }
            else {
                _this.toastr.errorToastr(_this.errorMessagelogging.errorMessage);
                _this.logger.error(_this.errorMessagelogging.errorObject);
            }
            _this.logger.error(_this.passwordChange);
        });
    };
    /**
     * Method to check if either of FirsrtName, LastName, Roles, E-Mail Address is modified
     * @return True/False based on checked criteria of modified fields.
     */
    NewtisuserComponent.prototype.checkModifiedFields = function () {
        var returnObject = false;
        if (this.populateUserDetail.firstName != this.userDetail.firstName) {
            returnObject = true;
        }
        if (this.populateUserDetail.lastName != this.userDetail.lastName) {
            returnObject = true;
        }
        if (this.populateUserDetail.emailAddress != this.userDetail.emailAddress) {
            returnObject = true;
        }
        if (JSON.stringify(this.populateUserDetail.roles) != JSON.stringify(this.userRoles)) {
            returnObject = true;
        }
        return returnObject;
    };
    /**
     * update method enabled when all required fields are added correctly.
     * Shows the success toastr.
     * Navigate to landing page in case of success for edit user.
     * @param updatedUser object carrying details for updating user
     */
    NewtisuserComponent.prototype.updateUserDetails = function (updatedUser) {
        var _this = this;
        this.logger.info('Json send to service for updating user details for user:');
        this.userManagementService.postUpdateUserDetails(updatedUser).subscribe(function (data) {
            _this.saveButtonClicked = false;
            if (data instanceof Object) {
                _this.updatedUserResponse = data;
                _this.toastr.successToastr(src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].USER_UPDATED_SUCCESS_SECONDARY, src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].USER_UPDATED_SUCCESS_PRIMARY);
                _this.logger.info('Logging success update Put API call - ' +
                    src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].USER_UPDATED_SUCCESS_SECONDARY, src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].USER_UPDATED_SUCCESS_PRIMARY);
                _this.logger.info(data);
                _this.router.navigate(['userlist']);
            }
            else {
                _this.postApiCallTestResponse = data;
                if (_this.postApiCallTestResponse != null) {
                    var splits = _this.postApiCallTestResponse.split('$');
                    if (splits[0].toString().includes(src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].HTTP_STATUS_BADREQUEST.toString()) ||
                        (splits[0].includes(src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].HTTP_STATUS_UNAUTHORIZED_ACCESS.toString())) ||
                        (splits[0].includes(src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].HTTP_STATUS_FORBIDDEN.toString())) ||
                        (splits[0].includes(src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].HTTP_STATUS_PAGE_NOT_FOUND.toString())) ||
                        (splits[0].includes(src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].HTTP_STATUS_NOT_ALLOWED.toString()))) {
                        _this.toastr.errorToastr(splits[1], splits[0]);
                        _this.logger.error('Logging error on update Put service call Test -' + splits[1], splits[0]);
                        _this.logger.info(data);
                    }
                    else {
                        _this.toastr.successToastr(splits[1], splits[0]);
                        _this.logger.info('Logging success update Put API call Test - ' + splits[1], splits[0]);
                        _this.logger.info(data);
                        _this.router.navigate(['userlist']);
                    }
                }
            }
        }, function (error) {
            _this.saveButtonClicked = false;
            _this.errorMessagelogging = error;
            if (_this.errorMessagelogging.errorMessage.includes('$')) {
                _this.toastr.errorToastr(_this.errorMessagelogging.errorMessage.split('$')[1], _this.errorMessagelogging.errorMessage.split('$')[0]);
                _this.logger.error('Logging error on update Put service call -' +
                    _this.errorMessagelogging.errorMessage.split('$')[1], _this.errorMessagelogging.errorMessage.split('$')[0]);
            }
            else {
                _this.toastr.errorToastr(_this.errorMessagelogging.errorMessage);
                _this.logger.error(_this.errorMessagelogging.errorObject);
            }
            _this.logger.error(updatedUser);
        });
    };
    /**
     * add method enabled when all required fields are added correctly.
     * Shows the success toastr.
     * @param toc - TOC code from which Star Hub user belongs
     */
    NewtisuserComponent.prototype.addUserDeatils = function () {
        var _this = this;
        // This will capture the service response based on the add user service inputs.
        var enteredUser = new src_app_shared_model_tisuser__WEBPACK_IMPORTED_MODULE_6__["NewUser"]();
        enteredUser = this.newUserForm.value;
        if (enteredUser.emailAddress == '') {
            enteredUser.emailAddress = null;
        }
        this.logger.info('Jason send to service for saving New TIS user:' + enteredUser);
        this.saveButtonClicked = true;
        this.userManagementService.postUserDetails(enteredUser).subscribe(function (data) {
            _this.saveButtonClicked = false;
            if (data instanceof Object) {
                _this.roles = [];
                _this.fetchTocRoles(_this.starHubUserToc);
                _this.createdUserResponse = data;
                _this.toastr.successToastr(src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].USER_SAVE_SUCCESS_SECONDARY, src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].USER_SAVE_SUCCESS_PRIMARY);
                _this.logger.info('Logging success post API call - ' +
                    src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].USER_SAVE_SUCCESS_SECONDARY, src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].USER_SAVE_SUCCESS_PRIMARY);
                _this.logger.info(data);
                _this.newUserForm.reset();
                _this.ngOnInit();
            }
            else {
                _this.postApiCallTestResponse = data;
                if (_this.postApiCallTestResponse != null) {
                    var splits = _this.postApiCallTestResponse.split('$');
                    if (splits[0].toString().includes(src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].HTTP_STATUS_BADREQUEST.toString()) ||
                        (splits[0].includes(src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].HTTP_STATUS_UNAUTHORIZED_ACCESS.toString())) ||
                        (splits[0].includes(src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].HTTP_STATUS_FORBIDDEN.toString())) ||
                        (splits[0].includes(src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].HTTP_STATUS_NOT_ALLOWED.toString()))) {
                        _this.toastr.errorToastr(splits[1], splits[0]);
                        _this.logger.error('Logging error on post service call Test -' + splits[1], splits[0]);
                        _this.logger.info(data);
                    }
                    else if (splits[0].includes(src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].HTTP_STATUS_CONFLICT.toString())) {
                        _this.toastr.warningToastr(splits[1], splits[0]);
                        _this.logger.error('Logging error on post service call Test -' + splits[1], splits[0]);
                        _this.logger.info(data);
                    }
                    else {
                        _this.roles = [];
                        _this.fetchTocRoles(_this.starHubUserToc);
                        _this.toastr.successToastr(splits[1], splits[0]);
                        _this.logger.info('Logging success post API call Test - ' + splits[1], splits[0]);
                        _this.logger.info(data);
                        _this.newUserForm.reset();
                        _this.ngOnInit();
                    }
                }
            }
        }, function (error) {
            _this.saveButtonClicked = false;
            _this.errorMessagelogging = error;
            if (_this.errorMessagelogging.errorMessage.includes('$')) {
                if (_this.errorMessagelogging.errorMessage.split('$')[0].includes(src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].HTTP_STATUS_CONFLICT.toString())) {
                    _this.toastr.warningToastr(_this.errorMessagelogging.errorMessage.split('$')[1], _this.errorMessagelogging.errorMessage.split('$')[0]);
                    _this.logger.error('Logging error on post service call -' +
                        _this.errorMessagelogging.errorMessage.split('$')[1], _this.errorMessagelogging.errorMessage.split('$')[0]);
                }
                else {
                    _this.toastr.errorToastr(_this.errorMessagelogging.errorMessage.split('$')[1], _this.errorMessagelogging.errorMessage.split('$')[0]);
                    _this.logger.error('Logging error on post service call -' +
                        _this.errorMessagelogging.errorMessage.split('$')[1], _this.errorMessagelogging.errorMessage.split('$')[0]);
                }
            }
            else {
                _this.toastr.errorToastr(_this.errorMessagelogging.errorMessage);
                _this.logger.error(_this.errorMessagelogging.errorObject);
            }
            _this.logger.error(enteredUser);
        });
        this.newUserForm.markAsPristine();
        this.newUserForm.markAsUntouched();
    };
    NewtisuserComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: ngx_logger__WEBPACK_IMPORTED_MODULE_2__["NGXLogger"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_shared_service_user_management_service__WEBPACK_IMPORTED_MODULE_9__["UserManagementService"] },
        { type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__["MediaObserver"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
        { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_8__["ToastrManager"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDialog"] }
    ]; };
    NewtisuserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-newtisuser',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./newtisuser.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/managetisuser/newtisuser/newtisuser.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./newtisuser.component.css */ "./src/app/managetisuser/newtisuser/newtisuser.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            ngx_logger__WEBPACK_IMPORTED_MODULE_2__["NGXLogger"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_shared_service_user_management_service__WEBPACK_IMPORTED_MODULE_9__["UserManagementService"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__["MediaObserver"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_8__["ToastrManager"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDialog"]])
    ], NewtisuserComponent);
    return NewtisuserComponent;
}());



/***/ }),

/***/ "./src/app/managetisuser/newtisuser/newtisuser.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/managetisuser/newtisuser/newtisuser.module.ts ***!
  \***************************************************************/
/*! exports provided: HttpLoaderFactory, NewtisuserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewtisuserModule", function() { return NewtisuserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _newtisuser_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./newtisuser-routing.module */ "./src/app/managetisuser/newtisuser/newtisuser-routing.module.ts");
/* harmony import */ var _newtisuser_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./newtisuser.component */ "./src/app/managetisuser/newtisuser/newtisuser.component.ts");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/fesm5/ngx-logger.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/material.module */ "./src/app/shared/material.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");












function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__["TranslateHttpLoader"](http);
}
var NewtisuserModule = /** @class */ (function () {
    function NewtisuserModule() {
    }
    NewtisuserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                // AppRoutingModule,
                src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                _newtisuser_routing_module__WEBPACK_IMPORTED_MODULE_3__["NewtisuserRoutingModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]]
                    }
                }),
                ngx_logger__WEBPACK_IMPORTED_MODULE_5__["LoggerModule"].forRoot(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].logging)
            ],
            declarations: [_newtisuser_component__WEBPACK_IMPORTED_MODULE_4__["NewtisuserComponent"]]
        })
    ], NewtisuserModule);
    return NewtisuserModule;
}());



/***/ }),

/***/ "./src/app/shared/model/PasswordChange.ts":
/*!************************************************!*\
  !*** ./src/app/shared/model/PasswordChange.ts ***!
  \************************************************/
/*! exports provided: PasswordChange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordChange", function() { return PasswordChange; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

/**
 *  Represents the model structure to handle force password change in UI.
 */
var PasswordChange = /** @class */ (function () {
    function PasswordChange() {
    }
    return PasswordChange;
}());



/***/ }),

/***/ "./src/app/shared/model/UserDetails.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/model/UserDetails.ts ***!
  \*********************************************/
/*! exports provided: UserDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetails", function() { return UserDetails; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

/**
 *  Represents the model structure for Edit User returned from API.
 */
var UserDetails = /** @class */ (function () {
    function UserDetails() {
    }
    return UserDetails;
}());



/***/ }),

/***/ "./src/app/shared/model/UserStatus.ts":
/*!********************************************!*\
  !*** ./src/app/shared/model/UserStatus.ts ***!
  \********************************************/
/*! exports provided: UserStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserStatus", function() { return UserStatus; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

/**
 *  Represents the model structure to handle user status change in UI.
 */
var UserStatus = /** @class */ (function () {
    function UserStatus() {
    }
    return UserStatus;
}());



/***/ }),

/***/ "./src/app/shared/model/tisuser.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/model/tisuser.ts ***!
  \*****************************************/
/*! exports provided: NewUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewUser", function() { return NewUser; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

/**
 *  Represents the model structure for NewUser returned from API.
 */
var NewUser = /** @class */ (function () {
    function NewUser() {
    }
    return NewUser;
}());



/***/ }),

/***/ "./src/app/shared/service/tocs-resolver.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/service/tocs-resolver.service.ts ***!
  \*********************************************************/
/*! exports provided: TocsResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TocsResolverService", function() { return TocsResolverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _user_management_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-management.service */ "./src/app/shared/service/user-management.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



/**
 * Resolver service to load TOCs data edit page before navigating to edit page from landing page
 */
var TocsResolverService = /** @class */ (function () {
    /**
     * Constructor for fetch tocs resolver service.
     * @param _userManagementService  Instance of UserManagementService to call service methods.
     */
    function TocsResolverService(_userManagementService) {
        this._userManagementService = _userManagementService;
    }
    /**
     * resolve method implementation to fetch tocs.
     * @param route Instance of ActivatedRouteSnapshot to handle params supplied in routing.
     * @param state Instance of RouterStateSnapshot to indicate current application state.
     */
    TocsResolverService.prototype.resolve = function (route, state) {
        return this._userManagementService.getTocs();
    };
    TocsResolverService.ctorParameters = function () { return [
        { type: _user_management_service__WEBPACK_IMPORTED_MODULE_1__["UserManagementService"] }
    ]; };
    TocsResolverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_management_service__WEBPACK_IMPORTED_MODULE_1__["UserManagementService"]])
    ], TocsResolverService);
    return TocsResolverService;
}());



/***/ })

}]);
//# sourceMappingURL=default~managetisuser-newtisuser-newtisuser-module~shared-userhelp-userhelp-module.75489747d63ec8759be7.js.map