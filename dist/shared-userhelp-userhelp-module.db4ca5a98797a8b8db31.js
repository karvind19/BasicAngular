(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shared-userhelp-userhelp-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/userhelp/userhelp.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/userhelp/userhelp.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"tableOfContentContainer\">\r\n   <div class=\"tableOfContent docs-toc-container\">\r\n    <button mat-icon-button type=\"button\" [matMenuTriggerFor]=\"menu\" *ngIf=\"!showNavListButtons\" \r\n    class=\"application-titlebar-text-style1\">\r\n      <mat-icon color=\"primary\">more_vert</mat-icon>\r\n  </button>\r\n  <mat-menu  #menu=\"matMenu\">\r\n    <button mat-menu-item>\r\n      <span>{{'User_Help.Content' | translate}}</span>\r\n    </button>\r\n    <button mat-menu-item (click)=\"navClicked('feature')\">\r\n      <span>{{'User_Help.Features' | translate}}</span>\r\n    </button>\r\n    <button mat-menu-item (click)=\"navClicked('userAccount')\">\r\n      <span>{{'User_Help.STARhub_Account' | translate}}</span>\r\n    </button>\r\n    <button mat-menu-item (click)=\"navClicked('userList')\">\r\n      <span>{{'User_Help.List_TIS_Users' | translate}}</span>\r\n    </button>\r\n    <button mat-menu-item (click)=\"navClicked('addUser')\">\r\n      <span>{{'User_Help.Add_TIS_User' | translate}}</span>\r\n    </button>\r\n    <button mat-menu-item (click)=\"navClicked('editUser')\">\r\n      <span>{{'User_Help.Edit_TIS_User' | translate}}</span>\r\n    </button>\r\n    <button mat-menu-item (click)=\"navClicked('makeUserInactive')\">\r\n      <span>{{'User_Help.Make_User_Inactive' | translate}}</span>\r\n    </button>\r\n    <button mat-menu-item (click)=\"navClicked('forcePasswordChange')\">\r\n      <span>{{'User_Help.Password_Change' | translate}}</span>\r\n    </button>\r\n    <button mat-menu-item (click)=\"navClicked('error')\">\r\n      <span>{{'User_Help.Error_outline' | translate}}</span>\r\n    </button>\r\n  </mat-menu>\r\n    <div *ngIf=\"showNavListButtons\" class=\"contentTopMargin\">{{'User_Help.Content' | translate}}</div>\r\n     <nav *ngIf=\"showNavListButtons\" class=\"listTopMargin\">\r\n      <a  (click)=\"navClicked('feature')\">{{'User_Help.Features' | translate}}</a>\r\n      <br />\r\n      <a  (click)=\"navClicked('userAccount')\">{{'User_Help.STARhub_Account' | translate}}</a>\r\n      <br />\r\n      <a  (click)=\"navClicked('userList')\" >{{'User_Help.List_TIS_Users' | translate}}</a>\r\n      <br />\r\n      <a  (click)=\"navClicked('addUser')\">{{'User_Help.Add_TIS_User' | translate}}</a>\r\n      <br />\r\n      <a  (click)=\"navClicked('editUser')\">{{'User_Help.Edit_TIS_User' | translate}}</a>\r\n      <br />\r\n      <a  (click)=\"navClicked('makeUserInactive')\">{{'User_Help.Make_User_Inactive' | translate}}</a>\r\n      <br />\r\n      <a  (click)=\"navClicked('forcePasswordChange')\">{{'User_Help.Password_Change' | translate}}</a>\r\n      <br />\r\n      <a  (click)=\"navClicked('error')\">{{'User_Help.Error_outline' | translate}}</a>\r\n      <br />\r\n     </nav>\r\n    </div>\r\n</div>\r\n<body scrolling=\"no\" style=\"overflow: hidden;\">\r\n  <div>\r\n    <iframe scrolling=\"yes\" class=\"iframecontent\" [src]=\"urlSafe\"></iframe>\r\n  </div>\r\n</body>\r\n  ");

/***/ }),

/***/ "./src/app/shared/userhelp/userhelp-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/userhelp/userhelp-routing.module.ts ***!
  \************************************************************/
/*! exports provided: UserhelpRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserhelpRoutingModule", function() { return UserhelpRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _userhelp_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./userhelp.component */ "./src/app/shared/userhelp/userhelp.component.ts");




// Route settings for user help
var routes = [
    {
        path: '',
        component: _userhelp_component__WEBPACK_IMPORTED_MODULE_3__["UserhelpComponent"],
    }
];
var UserhelpRoutingModule = /** @class */ (function () {
    function UserhelpRoutingModule() {
    }
    UserhelpRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], UserhelpRoutingModule);
    return UserhelpRoutingModule;
}());



/***/ }),

/***/ "./src/app/shared/userhelp/userhelp.component.css":
/*!********************************************************!*\
  !*** ./src/app/shared/userhelp/userhelp.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" .tableOfContentContainer{\r\n    padding-top: 10px;\r\n    padding-left: 1px;\r\n    position: fixed;\r\n}\r\n.docs-toc-container {\r\n    border-left: 4px solid #3f51b5;\r\n    font-weight: 700;\r\n}\r\n.tableOfContent{\r\n  padding: 5px 0 10px 10px;\r\n  font-size: 23px;\r\n}\r\n.contentTopMargin{\r\n  margin-top: 20px;\r\n}\r\n.listTopMargin{\r\n  margin-top: -8px;\r\n}\r\na {\r\n  font-size: large;\r\n    text-decoration: none;\r\n    color: #737373;\r\n    font-weight: 400 !important;\r\n}\r\na:hover{\r\n    color: #3f51b5;\r\n    cursor: pointer;\r\n}\r\n.iframecontent{\r\n  position: absolute; \r\n  margin-left: 16%; \r\n  width: 82.5%; \r\n  height: 98%; \r\n  border: none;\r\n}\r\n.application-titlebar-text-style1{\r\n  color: white;\r\n  left: 0px;\r\n  font-size: medium;\r\n  text-align: center;\r\n  background-color: transparent;\r\n  border: transparent;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3VzZXJoZWxwL3VzZXJoZWxwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUM7SUFDRyxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLDhCQUE4QjtJQUM5QixnQkFBZ0I7QUFDcEI7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZ0JBQWdCO0lBQ2QscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25CO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBRUE7RUFDRSxZQUFZO0VBQ1osU0FBUztFQUNULGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC91c2VyaGVscC91c2VyaGVscC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIC50YWJsZU9mQ29udGVudENvbnRhaW5lcntcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxcHg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbn1cclxuLmRvY3MtdG9jLWNvbnRhaW5lciB7XHJcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkICMzZjUxYjU7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4udGFibGVPZkNvbnRlbnR7XHJcbiAgcGFkZGluZzogNXB4IDAgMTBweCAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjNweDtcclxufVxyXG5cclxuLmNvbnRlbnRUb3BNYXJnaW57XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLmxpc3RUb3BNYXJnaW57XHJcbiAgbWFyZ2luLXRvcDogLThweDtcclxufVxyXG5cclxuYSB7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjNzM3MzczO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xyXG59XHJcbmE6aG92ZXJ7XHJcbiAgICBjb2xvcjogIzNmNTFiNTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmlmcmFtZWNvbnRlbnR7XHJcbiAgcG9zaXRpb246IGFic29sdXRlOyBcclxuICBtYXJnaW4tbGVmdDogMTYlOyBcclxuICB3aWR0aDogODIuNSU7IFxyXG4gIGhlaWdodDogOTglOyBcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5hcHBsaWNhdGlvbi10aXRsZWJhci10ZXh0LXN0eWxlMXtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbGVmdDogMHB4O1xyXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IHRyYW5zcGFyZW50O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/shared/userhelp/userhelp.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/userhelp/userhelp.component.ts ***!
  \*******************************************************/
/*! exports provided: UserhelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserhelpComponent", function() { return UserhelpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/constants */ "./src/app/shared/utils/constants.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! aws-amplify */ "./node_modules/aws-amplify/lib-esm/index.js");








var UserhelpComponent = /** @class */ (function () {
    /**
     * Constructor with injected sanitizer and translate.
     * @param sanitizer - To make url for rendering into iFram
     * @param translate - To support multi language
     */
    function UserhelpComponent(sanitizer, media, translate) {
        var _this = this;
        this.sanitizer = sanitizer;
        this.media = media;
        this.translate = translate;
        /** Supported application languages. */
        this.lang = _utils_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].SUPPORTED_LANGUAGES;
        /** URL for getting user help page. */
        this.helpUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].user_help_url;
        /**Member variable to identify source page of help clicked. */
        this.sourcePageName = _utils_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].USER_LIST_FORM;
        /** Show/hide navigation lists based on screen width.  */
        this.showNavListButtons = true;
        /** Holds current screen width, updated as a result of media change. */
        this.currentScreenWidth = '';
        this.defaultLang = _utils_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].DEFAULT_LANGUAGE;
        translate.addLangs(this.lang);
        translate.setDefaultLang(this.defaultLang);
        this.flexMediaWatcher = media.media$.subscribe(function (change) {
            if (change.mqAlias !== _this.currentScreenWidth) {
                _this.currentScreenWidth = change.mqAlias;
                if (_this.currentScreenWidth == 'xs' || _this.currentScreenWidth == 'sm') {
                    _this.showNavListButtons = false;
                }
                else {
                    _this.showNavListButtons = true;
                }
            }
        });
    }
    Object.defineProperty(UserhelpComponent.prototype, "defaultLang", {
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
    /**
     * Implement OnInit's `ngOnInit` method.
     */
    UserhelpComponent.prototype.ngOnInit = function () {
        if (null != aws_amplify__WEBPACK_IMPORTED_MODULE_7__["Auth"].currentAuthenticatedUser()) {
            // Default url for help page.
            this.helpUrl = this.helpUrl + this.defaultLang + _utils_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].FORWARD_SLASH + _utils_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].USER_HELP_MAIN;
            var helpSourcePage = localStorage.getItem('sourcePageOfHelp');
            if (null != helpSourcePage) {
                this.helpUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].user_help_url + this.defaultLang + _utils_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].FORWARD_SLASH;
                this.sourcePageName = helpSourcePage;
                if (this.sourcePageName == _utils_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].ADD_USER_FORM) {
                    this.helpUrl = this.helpUrl + _utils_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].USER_HELP_ADD;
                }
                else if (this.sourcePageName == _utils_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].EDIT_USER_FORM) {
                    this.helpUrl = this.helpUrl + _utils_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].USER_HELP_EDIT;
                }
                else if (this.sourcePageName == _utils_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].USER_LIST_FORM) {
                    this.helpUrl = this.helpUrl + _utils_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].USER_HELP_LANDING;
                }
            }
            this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.helpUrl);
        }
    };
    /**
     * Navigation list click event
     * @param selectedNavList - Paramenter to identify which help page needs to open
     */
    UserhelpComponent.prototype.navClicked = function (selectedNavList) {
        var _this = this;
        aws_amplify__WEBPACK_IMPORTED_MODULE_7__["Auth"].currentAuthenticatedUser().then(function (x) {
            _this.helpUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].user_help_url + _this.defaultLang + _utils_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].FORWARD_SLASH;
            if (selectedNavList == "feature") {
                _this.helpUrl = _this.helpUrl + _utils_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].USER_HELP_MAIN;
            }
            else if (selectedNavList == "userList") {
                _this.helpUrl = _this.helpUrl + _utils_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].USER_HELP_LANDING;
            }
            else if (selectedNavList == "addUser") {
                _this.helpUrl = _this.helpUrl + _utils_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].USER_HELP_ADD;
            }
            else if (selectedNavList == "editUser") {
                _this.helpUrl = _this.helpUrl + _utils_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].USER_HELP_EDIT;
            }
            else if (selectedNavList == "userAccount") {
                _this.helpUrl = _this.helpUrl + _utils_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].USER_HELP_LOGIN_OUT;
            }
            else if (selectedNavList == "forcePasswordChange") {
                _this.helpUrl = _this.helpUrl + _utils_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].USER_HELP_FORCE_PASSWORD;
            }
            else if (selectedNavList == "makeUserInactive") {
                _this.helpUrl = _this.helpUrl + _utils_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].USER_HELP_MAKE_INACTIVE;
            }
            else if (selectedNavList == "error") {
                _this.helpUrl = _this.helpUrl + _utils_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].USER_HELP_ERROR;
            }
            _this.urlSafe = _this.sanitizer.bypassSecurityTrustResourceUrl(_this.helpUrl);
        }).catch(function (y) {
            var redirectUrlParams = window.location.href;
            window.location.href = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].auth_ui_url + '?redirect=' + redirectUrlParams;
        });
    };
    UserhelpComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] },
        { type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["MediaObserver"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }
    ]; };
    UserhelpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-userhelp',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./userhelp.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/userhelp/userhelp.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./userhelp.component.css */ "./src/app/shared/userhelp/userhelp.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["MediaObserver"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
    ], UserhelpComponent);
    return UserhelpComponent;
}());



/***/ }),

/***/ "./src/app/shared/userhelp/userhelp.module.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/userhelp/userhelp.module.ts ***!
  \****************************************************/
/*! exports provided: UserhelpModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserhelpModule", function() { return UserhelpModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/material.module */ "./src/app/shared/material.module.ts");
/* harmony import */ var _userhelp_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./userhelp-routing.module */ "./src/app/shared/userhelp/userhelp-routing.module.ts");
/* harmony import */ var _userhelp_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./userhelp.component */ "./src/app/shared/userhelp/userhelp.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_app_managetisuser_newtisuser_newtisuser_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/managetisuser/newtisuser/newtisuser.module */ "./src/app/managetisuser/newtisuser/newtisuser.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");









// User help module.
var UserhelpModule = /** @class */ (function () {
    function UserhelpModule() {
    }
    UserhelpModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_userhelp_component__WEBPACK_IMPORTED_MODULE_5__["UserhelpComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
                        useFactory: src_app_managetisuser_newtisuser_newtisuser_module__WEBPACK_IMPORTED_MODULE_7__["HttpLoaderFactory"],
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
                    }
                }),
                _userhelp_routing_module__WEBPACK_IMPORTED_MODULE_4__["UserhelpRoutingModule"]
            ]
        })
    ], UserhelpModule);
    return UserhelpModule;
}());



/***/ })

}]);
//# sourceMappingURL=shared-userhelp-userhelp-module.db4ca5a98797a8b8db31.js.map