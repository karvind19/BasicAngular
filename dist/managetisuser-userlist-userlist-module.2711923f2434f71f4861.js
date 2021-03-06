(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["managetisuser-userlist-userlist-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/managetisuser/userlist/userlist.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/managetisuser/userlist/userlist.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Material toolbar Header -->\r\n<mat-toolbar color=\"primary\">\r\n  <span><img src=\"./assets/STAR_logo.png\" style=\"width:50px;height:50px;padding-top: 10px;\"></span>\r\n  <div class=\"far-end\">\r\n    <span class=\"space-reducer\"> {{'HOME.Application name' | translate}}</span>\r\n    <span class=\"space-reducer\"> {{starHubUserTocName}}</span>\r\n  </div>\r\n  <span class=\"filler\"></span>\r\n  <ng-container *ngIf=\"hasAddPermissions\">\r\n    <button mat-button (click)=\"addTISUserClick()\" *ngIf=\"showToolbarButtons\" type=\"button\"\r\n      class=\"application-titlebar-text-style\">\r\n      <mat-icon>add</mat-icon>\r\n      <span class=\"application-titlebar-text-style\">{{'Maintain_User.Add' | translate}}</span>\r\n    </button>\r\n  </ng-container>\r\n  <button mat-button type=\"button\" *ngIf=\"showToolbarButtons\" (click)=\"logout()\" class=\"application-titlebar-text-style\">\r\n    <mat-icon>logout</mat-icon>\r\n    <span class=\"application-titlebar-text-style\">{{'HOME.Logout' | translate}}</span>\r\n  </button>\r\n  <button mat-button type=\"button\"  (click)=\"userHelpClick()\" *ngIf=\"showToolbarButtons\" class=\"application-titlebar-text-style\">\r\n    <mat-icon>help</mat-icon>\r\n    <span class=\"application-titlebar-text-style\">{{'HOME.Help' | translate}}</span>\r\n  </button>\r\n  <button mat-icon-button *ngIf=\"!showToolbarButtons\" [matMenuTriggerFor]=\"menu\"\r\n    class=\"application-titlebar-text-style1\">\r\n    <mat-icon>more_vert</mat-icon>\r\n  </button>\r\n\r\n</mat-toolbar>\r\n<mat-menu #menu=\"matMenu\">\r\n  <ng-container *ngIf=\"hasAddPermissions\">\r\n    <button mat-menu-item (click)=\"addTISUserClick()\">\r\n      <span>{{'Maintain_User.Add' | translate}}</span>\r\n    </button>\r\n  </ng-container>\r\n  <button mat-menu-item (click)=\"logout()\" >\r\n    <span>{{'HOME.Logout' | translate}}</span>\r\n  </button>\r\n  <button mat-menu-item  (click)=\"userHelpClick()\">\r\n    <span>{{'HOME.Help' | translate}}</span>\r\n  </button>\r\n</mat-menu>\r\n\r\n<!-- Header message for screen -->\r\n<fieldset class=\"headerFieldset\">\r\n  <h2 style=\"text-align:center;\">{{'Maintain_User.Heading' | translate}}</h2>\r\n</fieldset>\r\n<div class=\"search-div\">\r\n  <mat-form-field class=\"search-form-field\">\r\n    <input matInput [(ngModel)]=\"searchKey\" placeholder=\"Filter\" autocomplete=\"off\" (keyup)=\"applyFilter()\">\r\n    <Button mat-button matSuffix mat-icon-button aria-label=\"Clear\" *ngIf=\"searchKey\" (click)=\"onSearchClear()\">\r\n      <mat-icon>close</mat-icon>\r\n    </Button>\r\n  </mat-form-field>\r\n</div>\r\n<div>\r\n  <div class=\"mat-table-scroll\">\r\n    <mat-table [dataSource]=\"userDetailsdataSource\" class=\"mat-elevation-z8\" matSort (matSortChange)=\"sortData($event)\">\r\n      <!-- Icon actions Column -->\r\n      <ng-container class=\"mat-cell-headeraction\" matColumnDef=\"actions\">\r\n        <mat-header-cell class=\"mat-cell-headeraction\" *matHeaderCellDef> </mat-header-cell>\r\n        <mat-cell class=\"mat-cell-headeraction\" *matCellDef=\"let row\">\r\n          <button (click)=\"getUserDetails(row.toc, row.employeeId)\">\r\n            <mat-icon matTooltip='Edit user details' class=\"icon\">edit</mat-icon>\r\n          </button>\r\n        </mat-cell>\r\n      </ng-container>\r\n\r\n      <!-- Id Column -->\r\n      <ng-container matColumnDef=\"employeeId\">\r\n        <mat-header-cell class=\"mat-cell-headers\" *matHeaderCellDef mat-sort-header> {{'Maintain_User.Id' | translate}}\r\n        </mat-header-cell>\r\n        <mat-cell class=\"mat-cell-id\" *matCellDef=\"let element\"> {{element.employeeId}} </mat-cell>\r\n      </ng-container>\r\n\r\n      <!-- First Name Column -->\r\n      <ng-container matColumnDef=\"firstName\">\r\n        <mat-header-cell class=\"mat-cell-headers\" *matHeaderCellDef mat-sort-header>\r\n          {{'Maintain_User.FirstName' | translate}} </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let element\"> {{element.firstName}} </mat-cell>\r\n      </ng-container>\r\n\r\n      <!-- Last Name Column -->\r\n      <ng-container matColumnDef=\"lastName\">\r\n        <mat-header-cell class=\"mat-cell-headers\" *matHeaderCellDef mat-sort-header>\r\n          {{'Maintain_User.LastName' | translate}} </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let element\"> {{element.lastName}} </mat-cell>\r\n      </ng-container>\r\n\r\n      <!-- TOC Column -->\r\n      <ng-container matColumnDef=\"status\">\r\n        <mat-header-cell class=\"mat-cell-headers\" *matHeaderCellDef mat-sort-header>\r\n          {{'Maintain_User.Status' | translate}} </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let element\"> {{element.status}} </mat-cell>\r\n      </ng-container>\r\n\r\n      <!-- Footer to show message loading if list is empty -->\r\n      <ng-container matColumnDef=\"loading\">\r\n        <mat-footer-cell *matFooterCellDef colspan=6> {{'Maintain_User.LoadingData' | translate}} </mat-footer-cell>\r\n      </ng-container>\r\n      <!-- Footer to show message no data if list is empty -->\r\n      <ng-container matColumnDef=\"noData\">\r\n        <mat-footer-cell *matFooterCellDef colspan=6> {{'Maintain_User.NoData' | translate}} </mat-footer-cell>\r\n      </ng-container>\r\n\r\n      <mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></mat-header-row>\r\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n\r\n      <mat-footer-row *matFooterRowDef=\"['noData']\"\r\n        [ngClass]=\"{'hide':!(userDetailsdataSource!=null &&  userDetailsdataSource.data.length== 0)}\"></mat-footer-row>\r\n    </mat-table>\r\n     <!-- Paging in userlist page -->\r\n     <mat-paginator [pageSizeOptions]=\"pageSizeOptions\" [pageSize]=\"loggedPageSize\"\r\n     (page)=\"pageEvent = getPageSize($event)\" showFirstLastButtons> </mat-paginator>\r\n  </div>\r\n    <!-- Show spinner while fetching data from service -->\r\n    <mat-card *ngIf=\"userDetailsdataSource==null\" style=\"display: flex; justify-content: center; align-items: center\">\r\n      <div class=\"lds-ellipsis\">\r\n        <div></div>\r\n        <div></div>\r\n        <div></div>\r\n        <div></div>\r\n      </div>\r\n    </mat-card>\r\n</div>");

/***/ }),

/***/ "./src/app/managetisuser/userlist/userlist-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/managetisuser/userlist/userlist-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: userListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userListRoutingModule", function() { return userListRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _userlist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./userlist.component */ "./src/app/managetisuser/userlist/userlist.component.ts");
/* harmony import */ var src_app_shared_service_landing_page_resolver_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/service/landing-page-resolver.service */ "./src/app/shared/service/landing-page-resolver.service.ts");





// Route settings for user list users
var routes = [
    {
        path: '',
        component: _userlist_component__WEBPACK_IMPORTED_MODULE_3__["userListComponent"],
        resolve: { landingPage: src_app_shared_service_landing_page_resolver_service__WEBPACK_IMPORTED_MODULE_4__["LandingPageResolverService"] }
    }
];
var userListRoutingModule = /** @class */ (function () {
    function userListRoutingModule() {
    }
    userListRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], userListRoutingModule);
    return userListRoutingModule;
}());



/***/ }),

/***/ "./src/app/managetisuser/userlist/userlist.component.css":
/*!***************************************************************!*\
  !*** ./src/app/managetisuser/userlist/userlist.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Class file for user list */\r\ntable {\r\n    width: 100%;\r\n  }\r\n.hide {\r\n      display: none;\r\n  }\r\nmat-footer-row mat-footer-cell {\r\n      -webkit-box-pack: center;\r\n              justify-content: center;\r\n      font-style:italic;\r\n  }\r\n.headerFieldset {\r\n      background-color:#C5C5BF;\r\n      line-height: 20%;\r\n      border:1px solid #666;\r\n      border-radius:10px;\r\n      box-shadow:0 0 10px #666;\r\n  }\r\n.mat-toolbar {\r\n  /* position: relative; */\r\n  background-color: #3C3C35;\r\n  border:1px solid #666;\r\n  border-radius:10px;\r\n  box-shadow:0 0 10px #666;\r\n}\r\n.button:hover {\r\n  background: whitesmoke;\r\n}\r\n.filler {\r\n    -webkit-box-flex: 1;\r\n            flex: 1 1 auto;\r\n }\r\n.search-form-field {\r\n    width: 99%;\r\n    margin-left: 0px;\r\n    padding: 5px 10px;\r\n    background-color: white;\r\n    border-radius: 5px;\r\n}\r\n.mat-cell-id {\r\n  min-width: 10px;\r\n  /* max-width: 150px; */\r\n}\r\n.mat-table-scroll {\r\n max-height: 500px;\r\n /* height: 550px; */\r\n overflow: auto;\r\n border:0px solid #666;\r\n border-radius:2px;\r\n box-shadow:0 0 10px #666;\r\n}\r\n.mat-cell {\r\n  margin-left: 10px;\r\n  text-align: left;\r\n  /* padding: 8px 8px 8px 0; */\r\n}\r\n.mat-cell-headers {\r\n  margin-left: 15px;\r\n  text-align: left;\r\n  /* padding: 8px 8px 8px 0; */\r\n}\r\n.mat-cell-headeraction {\r\n  max-width: 60px;\r\n  width: 60px;\r\n  margin-right: 1.5%;\r\n}\r\n.search-form-field div.mat-form-field-underline {\r\n    display: none;\r\n}\r\n.search-form-field div.mat-form-field-infix {\r\n   border-top: 0px;\r\n}\r\n.search-form-field div.mat-form-field-wrapper {\r\n   padding-bottom : 0px;\r\n}\r\n.search-form-field div.mat-form-field-suffix button {\r\n   height: 32px;\r\n   width: 32px;\r\n}\r\n.mat-row:nth-child(even){\r\n    background-color:#E1E1E1;\r\n    }\r\n.mat-row:nth-child(odd){\r\n    background-color:#EFEFEF;\r\n    }\r\n.far-end{\r\n    font-size: medium;\r\n    padding-left: 7px;\r\n    padding-top: 7px;\r\n    display: inline-grid;\r\n    margin-bottom: auto;\r\n    color: white;\r\n    font-style: italic;\r\n    }\r\n.space-reducer{\r\n    max-height: 20px;\r\n}\r\n.icon-color{\r\n  background-color: white;\r\n}\r\n.application-titlebar-text-style{\r\n    /* color: white;\r\n    border: transparent;\r\n    font-size: medium; */\r\n    width: auto;\r\n}\r\n.mat-button:hover {\r\n  background: #455a64;\r\n}\r\n.application-titlebar-text-style1{\r\n  color: white;\r\n  font-size: medium;\r\n  text-align: center;\r\n  background-color: transparent;\r\n  border: transparent;\r\n}\r\n.lds-ellipsis {\r\n    position: absolute;\r\n    width: 80px;\r\n    height: 80px;\r\n  }\r\n.lds-ellipsis div {\r\n    position: absolute;\r\n    top: 33px;\r\n    width: 8px;\r\n    height: 8px;\r\n    border-radius: 50%;\r\n    background:#3C3C35;\r\n    -webkit-animation-timing-function: cubic-bezier(0, 1, 1, 0);\r\n            animation-timing-function: cubic-bezier(0, 1, 1, 0);\r\n  }\r\n.lds-ellipsis div:nth-child(1) {\r\n    left: 8px;\r\n    -webkit-animation: lds-ellipsis1 0.6s infinite;\r\n            animation: lds-ellipsis1 0.6s infinite;\r\n  }\r\n.lds-ellipsis div:nth-child(2) {\r\n    left: 8px;\r\n    -webkit-animation: lds-ellipsis2 0.6s infinite;\r\n            animation: lds-ellipsis2 0.6s infinite;\r\n  }\r\n.lds-ellipsis div:nth-child(3) {\r\n    left: 32px;\r\n    -webkit-animation: lds-ellipsis2 0.6s infinite;\r\n            animation: lds-ellipsis2 0.6s infinite;\r\n  }\r\n.lds-ellipsis div:nth-child(4) {\r\n    left: 56px;\r\n    -webkit-animation: lds-ellipsis3 0.6s infinite;\r\n            animation: lds-ellipsis3 0.6s infinite;\r\n  }\r\n@-webkit-keyframes lds-ellipsis1 {\r\n    0% {\r\n      -webkit-transform: scale(0);\r\n              transform: scale(0);\r\n    }\r\n    100% {\r\n      -webkit-transform: scale(1);\r\n              transform: scale(1);\r\n    }\r\n  }\r\n@keyframes lds-ellipsis1 {\r\n    0% {\r\n      -webkit-transform: scale(0);\r\n              transform: scale(0);\r\n    }\r\n    100% {\r\n      -webkit-transform: scale(1);\r\n              transform: scale(1);\r\n    }\r\n  }\r\n@-webkit-keyframes lds-ellipsis3 {\r\n    0% {\r\n      -webkit-transform: scale(1);\r\n              transform: scale(1);\r\n    }\r\n    100% {\r\n      -webkit-transform: scale(0);\r\n              transform: scale(0);\r\n    }\r\n  }\r\n@keyframes lds-ellipsis3 {\r\n    0% {\r\n      -webkit-transform: scale(1);\r\n              transform: scale(1);\r\n    }\r\n    100% {\r\n      -webkit-transform: scale(0);\r\n              transform: scale(0);\r\n    }\r\n  }\r\n@-webkit-keyframes lds-ellipsis2 {\r\n    0% {\r\n      -webkit-transform: translate(0, 0);\r\n              transform: translate(0, 0);\r\n    }\r\n    100% {\r\n      -webkit-transform: translate(24px, 0);\r\n              transform: translate(24px, 0);\r\n    }\r\n  }\r\n@keyframes lds-ellipsis2 {\r\n    0% {\r\n      -webkit-transform: translate(0, 0);\r\n              transform: translate(0, 0);\r\n    }\r\n    100% {\r\n      -webkit-transform: translate(24px, 0);\r\n              transform: translate(24px, 0);\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYWdldGlzdXNlci91c2VybGlzdC91c2VybGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QjtJQUNJLFdBQVc7RUFDYjtBQUVBO01BQ0ksYUFBYTtFQUNqQjtBQUVBO01BQ0ksd0JBQXVCO2NBQXZCLHVCQUF1QjtNQUN2QixpQkFBaUI7RUFDckI7QUFFQTtNQUNJLHdCQUF3QjtNQUN4QixnQkFBZ0I7TUFDaEIscUJBQXFCO01BQ3JCLGtCQUFrQjtNQUNsQix3QkFBd0I7RUFDNUI7QUFFRjtFQUNFLHdCQUF3QjtFQUN4Qix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQix3QkFBd0I7QUFDMUI7QUFFQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUVFO0lBQ0UsbUJBQWM7WUFBZCxjQUFjO0NBQ2pCO0FBRUE7SUFDRyxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCO0FBRUE7RUFDRSxlQUFlO0VBQ2Ysc0JBQXNCO0FBQ3hCO0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsbUJBQW1CO0NBQ25CLGNBQWM7Q0FDZCxxQkFBcUI7Q0FDckIsaUJBQWlCO0NBQ2pCLHdCQUF3QjtBQUN6QjtBQUdBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQiw0QkFBNEI7QUFDOUI7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsNEJBQTRCO0FBQzlCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjtBQUVBO0lBQ0ksYUFBYTtBQUNqQjtBQUVBO0dBQ0csZUFBZTtBQUNsQjtBQUVBO0dBQ0csb0JBQW9CO0FBQ3ZCO0FBRUE7R0FDRyxZQUFZO0dBQ1osV0FBVztBQUNkO0FBRUE7SUFDSSx3QkFBd0I7SUFDeEI7QUFFSjtJQUNJLHdCQUF3QjtJQUN4QjtBQUVKO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCO0FBRUo7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUVBO0lBQ0k7O3dCQUVvQjtJQUNwQixXQUFXO0FBQ2Y7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLG1CQUFtQjtBQUNyQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLDJEQUFtRDtZQUFuRCxtREFBbUQ7RUFDckQ7QUFDQTtJQUNFLFNBQVM7SUFDVCw4Q0FBc0M7WUFBdEMsc0NBQXNDO0VBQ3hDO0FBQ0E7SUFDRSxTQUFTO0lBQ1QsOENBQXNDO1lBQXRDLHNDQUFzQztFQUN4QztBQUNBO0lBQ0UsVUFBVTtJQUNWLDhDQUFzQztZQUF0QyxzQ0FBc0M7RUFDeEM7QUFDQTtJQUNFLFVBQVU7SUFDViw4Q0FBc0M7WUFBdEMsc0NBQXNDO0VBQ3hDO0FBQ0E7SUFDRTtNQUNFLDJCQUFtQjtjQUFuQixtQkFBbUI7SUFDckI7SUFDQTtNQUNFLDJCQUFtQjtjQUFuQixtQkFBbUI7SUFDckI7RUFDRjtBQVBBO0lBQ0U7TUFDRSwyQkFBbUI7Y0FBbkIsbUJBQW1CO0lBQ3JCO0lBQ0E7TUFDRSwyQkFBbUI7Y0FBbkIsbUJBQW1CO0lBQ3JCO0VBQ0Y7QUFDQTtJQUNFO01BQ0UsMkJBQW1CO2NBQW5CLG1CQUFtQjtJQUNyQjtJQUNBO01BQ0UsMkJBQW1CO2NBQW5CLG1CQUFtQjtJQUNyQjtFQUNGO0FBUEE7SUFDRTtNQUNFLDJCQUFtQjtjQUFuQixtQkFBbUI7SUFDckI7SUFDQTtNQUNFLDJCQUFtQjtjQUFuQixtQkFBbUI7SUFDckI7RUFDRjtBQUNBO0lBQ0U7TUFDRSxrQ0FBMEI7Y0FBMUIsMEJBQTBCO0lBQzVCO0lBQ0E7TUFDRSxxQ0FBNkI7Y0FBN0IsNkJBQTZCO0lBQy9CO0VBQ0Y7QUFQQTtJQUNFO01BQ0Usa0NBQTBCO2NBQTFCLDBCQUEwQjtJQUM1QjtJQUNBO01BQ0UscUNBQTZCO2NBQTdCLDZCQUE2QjtJQUMvQjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvbWFuYWdldGlzdXNlci91c2VybGlzdC91c2VybGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ2xhc3MgZmlsZSBmb3IgdXNlciBsaXN0ICovXHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmhpZGUge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgbWF0LWZvb3Rlci1yb3cgbWF0LWZvb3Rlci1jZWxsIHtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtc3R5bGU6aXRhbGljO1xyXG4gIH1cclxuXHJcbiAgLmhlYWRlckZpZWxkc2V0IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjojQzVDNUJGO1xyXG4gICAgICBsaW5lLWhlaWdodDogMjAlO1xyXG4gICAgICBib3JkZXI6MXB4IHNvbGlkICM2NjY7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6MTBweDtcclxuICAgICAgYm94LXNoYWRvdzowIDAgMTBweCAjNjY2O1xyXG4gIH1cclxuXHJcbi5tYXQtdG9vbGJhciB7XHJcbiAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzQzNDMzU7XHJcbiAgYm9yZGVyOjFweCBzb2xpZCAjNjY2O1xyXG4gIGJvcmRlci1yYWRpdXM6MTBweDtcclxuICBib3gtc2hhZG93OjAgMCAxMHB4ICM2NjY7XHJcbn1cclxuXHJcbi5idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XHJcbn1cclxuXHJcbiAgLmZpbGxlciB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuIH1cclxuXHJcbiAuc2VhcmNoLWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDk5JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4ubWF0LWNlbGwtaWQge1xyXG4gIG1pbi13aWR0aDogMTBweDtcclxuICAvKiBtYXgtd2lkdGg6IDE1MHB4OyAqL1xyXG59XHJcblxyXG4ubWF0LXRhYmxlLXNjcm9sbCB7XHJcbiBtYXgtaGVpZ2h0OiA1MDBweDtcclxuIC8qIGhlaWdodDogNTUwcHg7ICovXHJcbiBvdmVyZmxvdzogYXV0bztcclxuIGJvcmRlcjowcHggc29saWQgIzY2NjtcclxuIGJvcmRlci1yYWRpdXM6MnB4O1xyXG4gYm94LXNoYWRvdzowIDAgMTBweCAjNjY2O1xyXG59XHJcblxyXG5cclxuLm1hdC1jZWxsIHtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIC8qIHBhZGRpbmc6IDhweCA4cHggOHB4IDA7ICovXHJcbn1cclxuXHJcbi5tYXQtY2VsbC1oZWFkZXJzIHtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIC8qIHBhZGRpbmc6IDhweCA4cHggOHB4IDA7ICovXHJcbn1cclxuXHJcbi5tYXQtY2VsbC1oZWFkZXJhY3Rpb24ge1xyXG4gIG1heC13aWR0aDogNjBweDtcclxuICB3aWR0aDogNjBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEuNSU7XHJcbn1cclxuXHJcbi5zZWFyY2gtZm9ybS1maWVsZCBkaXYubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5zZWFyY2gtZm9ybS1maWVsZCBkaXYubWF0LWZvcm0tZmllbGQtaW5maXgge1xyXG4gICBib3JkZXItdG9wOiAwcHg7XHJcbn1cclxuXHJcbi5zZWFyY2gtZm9ybS1maWVsZCBkaXYubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XHJcbiAgIHBhZGRpbmctYm90dG9tIDogMHB4O1xyXG59XHJcblxyXG4uc2VhcmNoLWZvcm0tZmllbGQgZGl2Lm1hdC1mb3JtLWZpZWxkLXN1ZmZpeCBidXR0b24ge1xyXG4gICBoZWlnaHQ6IDMycHg7XHJcbiAgIHdpZHRoOiAzMnB4O1xyXG59XHJcblxyXG4ubWF0LXJvdzpudGgtY2hpbGQoZXZlbil7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNFMUUxRTE7XHJcbiAgICB9XHJcblxyXG4ubWF0LXJvdzpudGgtY2hpbGQob2RkKXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I0VGRUZFRjtcclxuICAgIH1cclxuICAgIFxyXG4uZmFyLWVuZHtcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA3cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogN3B4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWdyaWQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgfVxyXG4gICAgXHJcbi5zcGFjZS1yZWR1Y2Vye1xyXG4gICAgbWF4LWhlaWdodDogMjBweDtcclxufVxyXG5cclxuLmljb24tY29sb3J7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5hcHBsaWNhdGlvbi10aXRsZWJhci10ZXh0LXN0eWxle1xyXG4gICAgLyogY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiB0cmFuc3BhcmVudDtcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtOyAqL1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbi5tYXQtYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNDU1YTY0O1xyXG59XHJcblxyXG4uYXBwbGljYXRpb24tdGl0bGViYXItdGV4dC1zdHlsZTF7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4ubGRzLWVsbGlwc2lzIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gIH1cclxuICAubGRzLWVsbGlwc2lzIGRpdiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDMzcHg7XHJcbiAgICB3aWR0aDogOHB4O1xyXG4gICAgaGVpZ2h0OiA4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiMzQzNDMzU7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMCwgMSwgMSwgMCk7XHJcbiAgfVxyXG4gIC5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCgxKSB7XHJcbiAgICBsZWZ0OiA4cHg7XHJcbiAgICBhbmltYXRpb246IGxkcy1lbGxpcHNpczEgMC42cyBpbmZpbml0ZTtcclxuICB9XHJcbiAgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDIpIHtcclxuICAgIGxlZnQ6IDhweDtcclxuICAgIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMiAwLjZzIGluZmluaXRlO1xyXG4gIH1cclxuICAubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMykge1xyXG4gICAgbGVmdDogMzJweDtcclxuICAgIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMiAwLjZzIGluZmluaXRlO1xyXG4gIH1cclxuICAubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoNCkge1xyXG4gICAgbGVmdDogNTZweDtcclxuICAgIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMyAwLjZzIGluZmluaXRlO1xyXG4gIH1cclxuICBAa2V5ZnJhbWVzIGxkcy1lbGxpcHNpczEge1xyXG4gICAgMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMyB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgIH1cclxuICB9XHJcbiAgQGtleWZyYW1lcyBsZHMtZWxsaXBzaXMyIHtcclxuICAgIDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjRweCwgMCk7XHJcbiAgICB9XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/managetisuser/userlist/userlist.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/managetisuser/userlist/userlist.component.ts ***!
  \**************************************************************/
/*! exports provided: userListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userListComponent", function() { return userListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/fesm5/ngx-logger.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_app_shared_service_user_management_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/service/user-management.service */ "./src/app/shared/service/user-management.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/utils/constants */ "./src/app/shared/utils/constants.ts");
/* harmony import */ var src_app_shared_utils_errorconstants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/utils/errorconstants */ "./src/app/shared/utils/errorconstants.ts");
/* harmony import */ var src_app_shared_model_AuthResponse__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/model/AuthResponse */ "./src/app/shared/model/AuthResponse.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! aws-amplify */ "./node_modules/aws-amplify/lib-esm/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
















/**
 * @title Pull TIS users details from from server and display on UI
 */
var userListComponent = /** @class */ (function () {
    /**
     * Constructor with injected route and NGXLogger.
     * @param ActivatedRoute For managing the routing.
     * @param logger Service that translates messages to other languages.
     * @param userManagementService Service for API calls
     * @param translate Multilingual support
     */
    function userListComponent(route, router, logger, userManagementService, translate, location, media) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.logger = logger;
        this.userManagementService = userManagementService;
        this.translate = translate;
        this.location = location;
        this.media = media;
        /** List of columns for search details. */
        this.displayedColumns = src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_9__["Constants"].COLUMN_DETAILS_USERLIST_PAGE;
        /** Array object to hold users details returned from API and bind into DataTable. */
        this.usersDetails = [];
        /** Member variable to check and manage user does not exist popup. */
        this.showPopupIfUserDoesNotExists = true;
        /** Supported application languages. */
        this.lang = src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_9__["Constants"].SUPPORTED_LANGUAGES;
        /**Set flag to hide/display edit user button after validating permissions. */
        this.hasEditPermissions = false;
        /**Set flag to hide/display edit user button after validating permissions. */
        this.hasAddPermissions = false;
        /** Member variable for storing star hub user TOC. */
        this.starHubUserToc = "";
        /** Member variable for storing star hub user TOC Name. */
        this.starHubUserTocName = "";
        /** Member variable to store Tocs returned from API and Bind with control. */
        this.tocs = [];
        /** Holds current screen width, updated as a result of media change. */
        this.currentScreenWidth = '';
        /** Show/hide toolbar buttons based on screen width.  */
        this.showToolbarButtons = true;
        this.defaultLang = src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_9__["Constants"].DEFAULT_LANGUAGE;
        translate.addLangs(this.lang);
        translate.setDefaultLang(this.defaultLang);
        this.flexMediaWatcher = media.media$.subscribe(function (change) {
            if (change.mqAlias !== _this.currentScreenWidth) {
                _this.currentScreenWidth = change.mqAlias;
                _this.setupTable();
            }
        });
    }
    Object.defineProperty(userListComponent.prototype, "defaultLang", {
        /**
         * Accessor for the defaultLang property
         * @return Current value of the language property.
         */
        get: function () {
            return this._defaultLang;
        },
        /**
         * Mutator for the defaultLang property
         * @param language New value of the language property.
         */
        set: function (value) {
            this._defaultLang = value;
        },
        enumerable: true,
        configurable: true
    });
    /** Define columns to be displayed as screen width changes. */
    userListComponent.prototype.setupTable = function () {
        this.displayedColumns = src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_9__["Constants"].COLUMN_DETAILS_USERLIST_PAGE;
        if (this.currentScreenWidth == src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_9__["Constants"].SCREEN_SIZE_VERY_SMALL ||
            this.currentScreenWidth == src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_9__["Constants"].SCREEN_SIZE_SMALL) {
            if (this.hasEditPermissions) {
                this.displayedColumns = src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_9__["Constants"].COLUMN_DETAILS_USERLIST_SMALL_PAGE;
            }
            else {
                this.displayedColumns = src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_9__["Constants"].COLUMN_DETAILS_USERLIST_SMALL_PAGE_NO_EDITPERMISSION;
            }
            this.showToolbarButtons = false;
        }
        else {
            if (this.hasEditPermissions) {
                this.displayedColumns = src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_9__["Constants"].COLUMN_DETAILS_USERLIST_PAGE;
            }
            else {
                this.displayedColumns = src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_9__["Constants"].COLUMN_DETAILS_USERLIST_PAGE_NO_EDITPERMISSION;
            }
            this.showToolbarButtons = true;
        }
    };
    /**
     * Implement OnInit's `ngOnInit` method.
     */
    userListComponent.prototype.ngOnInit = function () {
        //Reading data for current user info from resolver to find star hub user info.
        this.currentUserInfo = this.route.snapshot.data[src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_9__["Constants"].LANDING_PAGE_RESOLVER_FIELD];
        var authResponse = new src_app_shared_model_AuthResponse__WEBPACK_IMPORTED_MODULE_11__["AuthResponse"](this.currentUserInfo);
        this.hasAddPermissions = authResponse.hasAddPermissions;
        this.hasEditPermissions = authResponse.hasEditPermissions;
        this.defaultPageSize = src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_9__["Constants"].DEFAULT_PAGE_SIZE;
        this.starHubUserToc = authResponse.defaultToc;
        //Hide/unhide Action edit button based on user's permission  
        this.setupTable();
        //Checking if page size is set on page load.
        var selectedPageSize = localStorage.getItem('loggedPageSize');
        //This would be null when the application loads for the first time.
        if (null != selectedPageSize) {
            this.loggedPageSize = selectedPageSize;
        }
        else {
            //Excepting the selected value by user after coming back
            // from different components and setting that value.
            this.loggedPageSize = this.defaultPageSize.toString();
        }
        this.getTocs();
        this.getUsersDetails(this.starHubUserToc);
        this.pageSizeOptions = src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_9__["Constants"].PAGE_SIZE_OPTION;
    };
    /**Method to clear the filter from the search box. */
    userListComponent.prototype.onSearchClear = function () {
        this.searchKey = "";
        this.applyFilter();
    };
    /**Applying filter to keep search string in lowercase. */
    userListComponent.prototype.applyFilter = function () {
        this.userDetailsdataSource.filter = this.searchKey.trim().toLowerCase();
    };
    /**
     * Method to capture user selected sort order
     * and store it in local storage for reference.
     * @param sort
     */
    userListComponent.prototype.sortData = function (sort) {
        var changedPageSize;
        if (null != localStorage.getItem('loggedPageSize')) {
            changedPageSize = localStorage.getItem('loggedPageSize');
        }
        //Clearing local storage to retain only last selected column header sort order.
        localStorage.clear();
        if (sort.active == src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_9__["Constants"].COLUMN_HEADER_FIRSTNAME) {
            localStorage.setItem(src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_9__["Constants"].COLUMN_HEADER_FIRSTNAME, sort.direction);
        }
        else if (sort.active == src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_9__["Constants"].COLUMN_HEADER_LASTNAME) {
            localStorage.setItem(src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_9__["Constants"].COLUMN_HEADER_LASTNAME, sort.direction);
        }
        else if (sort.active == src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_9__["Constants"].COLUMN_HEADER_STATUS) {
            localStorage.setItem(src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_9__["Constants"].COLUMN_HEADER_STATUS, sort.direction);
        }
        else if (sort.active == src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_9__["Constants"].COLUMN_HEADER_EMPLOYEED_ID) {
            localStorage.setItem(src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_9__["Constants"].COLUMN_HEADER_EMPLOYEED_ID, sort.direction);
        }
        if (null != changedPageSize) {
            localStorage.setItem('loggedPageSize', changedPageSize);
        }
    };
    /**
     * Method to capture page size event change and store this in local stoage
     * to display same value after routing to different pages.
     * @param event - Event that captures page size selected by the user.
     */
    userListComponent.prototype.getPageSize = function (event) {
        if (event.pageSize != this.defaultPageSize) {
            localStorage.setItem('loggedPageSize', event.pageSize.toString());
        }
    };
    /**
     * Method to handle Add User button click event.
     */
    userListComponent.prototype.addTISUserClick = function () {
        this.router.navigate([src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_9__["Constants"].USER_FORM]);
    };
    /**
    * Method to navigate to landing page help.
    */
    userListComponent.prototype.userHelpClick = function () {
        localStorage.setItem('sourcePageOfHelp', src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_9__["Constants"].USER_LIST_FORM);
        //Navigate to the landing page help.
        window.open(src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_9__["Constants"].USER_HELP_FORM, "umUserHelp");
    };
    /**
     * Fetch TOCs from API.
     */
    userListComponent.prototype.getTocs = function () {
        var _this = this;
        this.userManagementService.getTocs().subscribe(function (data) {
            if (data != null) {
                if (data.length > 0) {
                    _this.tocs = data;
                    var filterResult = _this.tocs.filter(function (u) {
                        return u.internalTocCode == _this.starHubUserToc;
                    });
                    if (filterResult != null && filterResult.length > 0) {
                        var tocObject = filterResult[0];
                        _this.starHubUserTocName = tocObject.toc;
                    }
                }
            }
            else {
                _this.tocs = [];
            }
        }, function (error) {
            _this.logger.error(error);
        });
    };
    /**
     * Fetch UsersDetails from API.
     * @param getUsersToc - Toc internal code for which list of users will be fetched
     */
    userListComponent.prototype.getUsersDetails = function (getUsersToc) {
        var _this = this;
        this.usersDetails = [];
        this.userManagementService.getUsersDetails(getUsersToc).subscribe(function (data) {
            if (data != null && data.length > 0) {
                // Typecast returned object to UserDetails
                _this.usersDetails = data;
                /*
                Iterate through API returned user details and set Status to deleted/active
                based in termination date field value
                */
                _this.usersDetails.forEach(function (childobject) {
                    if (childobject.terminationDate == null) {
                        childobject.status = src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_9__["Constants"].USER_ACTIVE;
                    }
                    else {
                        childobject.status = src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_9__["Constants"].USER_DELETED;
                    }
                });
                //Default sorting on Last name in ascending order
                _this.usersDetails.sort(function (a, b) { return (a.lastName > b.lastName) ? 1 : -1; });
            }
            // Final binding of returned users details with Data Table
            _this.userDetailsdataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.usersDetails);
            // Set paging in datatable
            _this.userDetailsdataSource.paginator = _this.paginator;
            //Set sorting in datatable.
            _this.userDetailsdataSource.sort = _this.sort;
        }, function (error) {
            _this.userDetailsdataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.usersDetails);
            _this.logger.error(error);
        });
    };
    /**
     * Capture data table pagesize changed event.
     * @param value - Page size changed event
     */
    userListComponent.prototype.pageEvent = function (value) {
    };
    /*
     * Method to control auth logout. User will be redirected to
     * login page. Also, all local storage/cache for
     * page size would be cleared.
     */
    userListComponent.prototype.logout = function () {
        aws_amplify__WEBPACK_IMPORTED_MODULE_14__["Auth"].signOut().then(function (x) {
            //Clearing the local storage when the user has signed out.
            localStorage.clear();
            //Redirecting the user to login page after validating that
            //the current user is not logged in.
            var redirectUrlParams = window.location.href;
            window.location.href = src_environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].auth_ui_url + '?redirect=' + redirectUrlParams;
        });
    };
    /**
     * Handle action edit button event and re-direct ro edit TIS user page
     * @param selectedEmployeeId - Employee id of selected row for edit
     * @param selectedToc - TOC for selected row for edit
     */
    userListComponent.prototype.getUserDetails = function (selectedToc, selectedEmployeeId) {
        var _this = this;
        this.userManagementService.getUserDetails(selectedToc, selectedEmployeeId).subscribe(function (data) {
            var userDetails = [];
            if (data != null && data.length > 0) {
                // Typecast returned object to UserDetails
                userDetails = data;
                _this.router.navigate([
                    src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_9__["Constants"].USER_FORM, src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_9__["Constants"].EDIT, userDetails[0].toc, userDetails[0].employeeId
                ]);
            }
        }, function (error) {
            _this.logger.error(error);
            _this.errorMessagelogging = error;
            if (_this.errorMessagelogging.errorMessage.includes('$')) {
                if (_this.errorMessagelogging.errorMessage.split('$')[0].includes(src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_9__["Constants"].HTTP_STATUS_PAGE_NOT_FOUND.toString())) {
                    _this.showPopupIfUserDoesNotExists = false;
                    alert(src_app_shared_utils_errorconstants__WEBPACK_IMPORTED_MODULE_10__["ErrorConstants"].MESSAGE_USERID_CANNOT_EDITED);
                }
            }
        });
    };
    userListComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
        { type: ngx_logger__WEBPACK_IMPORTED_MODULE_5__["NGXLogger"] },
        { type: src_app_shared_service_user_management_service__WEBPACK_IMPORTED_MODULE_7__["UserManagementService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_12__["LocationStrategy"] },
        { type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__["MediaObserver"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], userListComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], userListComponent.prototype, "sort", void 0);
    userListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-userlist',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./userlist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/managetisuser/userlist/userlist.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./userlist.component.css */ "./src/app/managetisuser/userlist/userlist.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            ngx_logger__WEBPACK_IMPORTED_MODULE_5__["NGXLogger"],
            src_app_shared_service_user_management_service__WEBPACK_IMPORTED_MODULE_7__["UserManagementService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_12__["LocationStrategy"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__["MediaObserver"]])
    ], userListComponent);
    return userListComponent;
}());



/***/ }),

/***/ "./src/app/managetisuser/userlist/userlist.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/managetisuser/userlist/userlist.module.ts ***!
  \***********************************************************/
/*! exports provided: userListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userListModule", function() { return userListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _userlist_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./userlist-routing.module */ "./src/app/managetisuser/userlist/userlist-routing.module.ts");
/* harmony import */ var src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/material.module */ "./src/app/shared/material.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_app_app_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/fesm5/ngx-logger.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _userlist_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./userlist.component */ "./src/app/managetisuser/userlist/userlist.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");












var userListModule = /** @class */ (function () {
    function userListModule() {
    }
    userListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                // AppRoutingModule,
                src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                _userlist_routing_module__WEBPACK_IMPORTED_MODULE_3__["userListRoutingModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateLoader"],
                        useFactory: src_app_app_module__WEBPACK_IMPORTED_MODULE_6__["HttpLoaderFactory"],
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]]
                    }
                }),
                ngx_logger__WEBPACK_IMPORTED_MODULE_7__["LoggerModule"].forRoot(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].logging)
            ],
            declarations: [_userlist_component__WEBPACK_IMPORTED_MODULE_10__["userListComponent"]]
        })
    ], userListModule);
    return userListModule;
}());



/***/ })

}]);
//# sourceMappingURL=managetisuser-userlist-userlist-module.2711923f2434f71f4861.js.map