(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"container\">\r\n  <router-outlet>    \r\n  </router-outlet>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/confirm-dialog/confirm-dialog.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/confirm-dialog/confirm-dialog.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>\r\n  do you want to continue \r\n</h1>\r\n<div mat-dialog-content>\r\n  <p>You have not saved your changes, do you want to lose them?</p>\r\n</div>\r\n\r\n<div mat-dialog-actions>\r\n  <button mat-button  (click)=\"onDismiss()\">No</button>\r\n  <button mat-raised-button color=\"primary\" (click)=\"onConfirm()\">Yes</button>\r\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var routes = [
    {
        path: 'newtisuser',
        loadChildren: function () { return Promise.all(/*! import() | managetisuser-newtisuser-newtisuser-module */[__webpack_require__.e("default~managetisuser-newtisuser-newtisuser-module~managetisuser-userlist-userlist-module~shared-use~38dacf90"), __webpack_require__.e("default~managetisuser-newtisuser-newtisuser-module~shared-userhelp-userhelp-module")]).then(__webpack_require__.bind(null, /*! ./managetisuser/newtisuser/newtisuser.module */ "./src/app/managetisuser/newtisuser/newtisuser.module.ts")).then(function (m) { return m.NewtisuserModule; }); }
    },
    {
        path: 'newtisuser/edit/:toc/:id',
        loadChildren: function () { return Promise.all(/*! import() | managetisuser-newtisuser-newtisuser-module */[__webpack_require__.e("default~managetisuser-newtisuser-newtisuser-module~managetisuser-userlist-userlist-module~shared-use~38dacf90"), __webpack_require__.e("default~managetisuser-newtisuser-newtisuser-module~shared-userhelp-userhelp-module")]).then(__webpack_require__.bind(null, /*! ./managetisuser/newtisuser/newtisuser.module */ "./src/app/managetisuser/newtisuser/newtisuser.module.ts")).then(function (m) { return m.NewtisuserModule; }); }
    },
    {
        path: 'userlist',
        loadChildren: function () { return Promise.all(/*! import() | managetisuser-userlist-userlist-module */[__webpack_require__.e("default~managetisuser-newtisuser-newtisuser-module~managetisuser-userlist-userlist-module~shared-use~38dacf90"), __webpack_require__.e("managetisuser-userlist-userlist-module")]).then(__webpack_require__.bind(null, /*! ./managetisuser/userlist/userlist.module */ "./src/app/managetisuser/userlist/userlist.module.ts")).then(function (m) { return m.userListModule; }); }
    },
    {
        path: 'userhelp',
        loadChildren: function () { return Promise.all(/*! import() | shared-userhelp-userhelp-module */[__webpack_require__.e("default~managetisuser-newtisuser-newtisuser-module~managetisuser-userlist-userlist-module~shared-use~38dacf90"), __webpack_require__.e("default~managetisuser-newtisuser-newtisuser-module~shared-userhelp-userhelp-module"), __webpack_require__.e("shared-userhelp-userhelp-module")]).then(__webpack_require__.bind(null, /*! ./shared/userhelp/userhelp.module */ "./src/app/shared/userhelp/userhelp.module.ts")).then(function (m) { return m.UserhelpModule; }); }
    },
    {
        path: '',
        redirectTo: 'userlist',
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes), _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* @import \"~@angular/material/prebuilt-themes/indigo-pink.css\"; */\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0VBQWtFIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBAaW1wb3J0IFwifkBhbmd1bGFyL21hdGVyaWFsL3ByZWJ1aWx0LXRoZW1lcy9pbmRpZ28tcGluay5jc3NcIjsgKi9cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_environments_environment_feature__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment.feature */ "./src/environments/environment.feature.ts");
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aws-amplify */ "./node_modules/aws-amplify/lib-esm/index.js");
/* harmony import */ var _shared_utils_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/utils/constants */ "./src/app/shared/utils/constants.ts");






/**
 * Root Component for User maintenance UI.
 */
var AppComponent = /** @class */ (function () {
    /**
     * Constructor with injected service.
     * @param TranslateService Service that translates messages to other languages.
     */
    function AppComponent(translate) {
        this.translate = translate;
        /** Supported application languages. */
        this.lang = _shared_utils_constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].SUPPORTED_LANGUAGES;
        this.defaultLang = _shared_utils_constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].DEFAULT_LANGUAGE;
        translate.addLangs(this.lang);
        translate.setDefaultLang(this.defaultLang);
    }
    Object.defineProperty(AppComponent.prototype, "defaultLang", {
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
     * Method to check current authenticated user.
     */
    AppComponent.prototype.userLoggedIn = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, aws_amplify__WEBPACK_IMPORTED_MODULE_4__["Auth"].currentAuthenticatedUser()
                            .then(function () { return true; })
                            .catch(function () { return false; })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Loads immediately when the application is loaded and checks for current authenticated user.
     */
    AppComponent.prototype.ngOnInit = function () {
        this.userLoggedIn().then(function (userLoggedIn) {
            if (!userLoggedIn) {
                var redirectUrlParams = window.location.href;
                window.location.href = src_environments_environment_feature__WEBPACK_IMPORTED_MODULE_3__["environment"].auth_ui_url + '?redirect=' + redirectUrlParams;
            }
        });
    };
    AppComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/material.module */ "./src/app/shared/material.module.ts");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/fesm5/ngx-logger.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _shared_service_user_management_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/service/user-management.service */ "./src/app/shared/service/user-management.service.ts");
/* harmony import */ var _shared_service_api_interceptor_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/service/api-interceptor.service */ "./src/app/shared/service/api-interceptor.service.ts");
/* harmony import */ var src_app_shared_service_user_details_resolver_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/service/user-details-resolver.service */ "./src/app/shared/service/user-details-resolver.service.ts");
/* harmony import */ var _shared_service_landing_page_resolver_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/service/landing-page-resolver.service */ "./src/app/shared/service/landing-page-resolver.service.ts");
/* harmony import */ var src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/confirm-dialog/confirm-dialog.component */ "./src/app/shared/confirm-dialog/confirm-dialog.component.ts");



















function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__["TranslateHttpLoader"](http);
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            ],
            entryComponents: [src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_18__["ConfirmDialogComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
                    }
                }),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_13__["ToastrModule"].forRoot(),
                ngx_logger__WEBPACK_IMPORTED_MODULE_10__["LoggerModule"].forRoot(src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].logging),
            ],
            providers: [_shared_service_user_management_service__WEBPACK_IMPORTED_MODULE_14__["UserManagementService"], src_app_shared_service_user_details_resolver_service__WEBPACK_IMPORTED_MODULE_16__["UserDetailsResolverService"], _shared_service_landing_page_resolver_service__WEBPACK_IMPORTED_MODULE_17__["LandingPageResolverService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: _shared_service_api_interceptor_service__WEBPACK_IMPORTED_MODULE_15__["APIInterceptorService"],
                    multi: true
                },
                {
                    provide: _shared_service_api_interceptor_service__WEBPACK_IMPORTED_MODULE_15__["DEFAULT_TIMEOUT"],
                    useValue: 20000
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/shared/confirm-dialog/confirm-dialog.component.css":
/*!********************************************************************!*\
  !*** ./src/app/shared/confirm-dialog/confirm-dialog.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".button-style-no{\r\n    background-color: #263238;\r\n    color: white;\r\n    width: 80px;\r\n    font-size: medium;\r\n    height: 30px;\r\n}\r\n\r\n.button-style-yes{\r\n    background-color: #263238;\r\n    color: white;\r\n    width: 80px;\r\n    margin-left: 20px;\r\n    font-size: medium;\r\n    height: 30px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbmZpcm0tZGlhbG9nL2NvbmZpcm0tZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osV0FBVztJQUNYLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb25maXJtLWRpYWxvZy9jb25maXJtLWRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbi1zdHlsZS1ub3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjMyMzg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4uYnV0dG9uLXN0eWxlLXllc3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjMyMzg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/shared/confirm-dialog/confirm-dialog.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/confirm-dialog/confirm-dialog.component.ts ***!
  \*******************************************************************/
/*! exports provided: ConfirmDialogComponent, ConfirmDialogModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function() { return ConfirmDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogModel", function() { return ConfirmDialogModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/constants */ "./src/app/shared/utils/constants.ts");





var ConfirmDialogComponent = /** @class */ (function () {
    /**
     * Constructor with injected dialogRef and translate.
     * @param dialogRef - MatDialog Referece.
     * @param data - Confirmation dialog instance.
     * @param translate - Multilingual support.
     */
    function ConfirmDialogComponent(dialogRef, translate) {
        this.dialogRef = dialogRef;
        this.translate = translate;
        /** Supported application languages. */
        this.lang = _utils_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].SUPPORTED_LANGUAGES;
        this.defaultLang = _utils_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].DEFAULT_LANGUAGE;
        translate.addLangs(this.lang);
        translate.setDefaultLang(this.defaultLang);
    }
    ;
    Object.defineProperty(ConfirmDialogComponent.prototype, "defaultLang", {
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
    ConfirmDialogComponent.prototype.ngOnInit = function () {
    };
    /**
     * Method to handle Yes button click event.
     */
    ConfirmDialogComponent.prototype.onConfirm = function () {
        // Close the dialog, return true
        this.dialogRef.close(true);
    };
    /**
     * Method to handle No button click event.
     */
    ConfirmDialogComponent.prototype.onDismiss = function () {
        // Close the dialog, return false
        this.dialogRef.close(false);
    };
    ConfirmDialogComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }
    ]; };
    ConfirmDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-confirm-dialog',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./confirm-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/confirm-dialog/confirm-dialog.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./confirm-dialog.component.css */ "./src/app/shared/confirm-dialog/confirm-dialog.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], ConfirmDialogComponent);
    return ConfirmDialogComponent;
}());

/**
 * Class to represent confirm dialog model.
 * It has been kept here to keep it as part of shared component.
 */
var ConfirmDialogModel = /** @class */ (function () {
    function ConfirmDialogModel() {
    }
    return ConfirmDialogModel;
}());



/***/ }),

/***/ "./src/app/shared/material.module.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/material.module.ts ***!
  \*******************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirm-dialog/confirm-dialog.component */ "./src/app/shared/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
            ],
            declarations: [_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogComponent"]]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/shared/model/ErrorLogging.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/model/ErrorLogging.ts ***!
  \**********************************************/
/*! exports provided: ErrorLogging */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorLogging", function() { return ErrorLogging; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

/**
 *  Represents the model structure for handling errors thrown by API at client side and showing meanigful message to user.
 */
var ErrorLogging = /** @class */ (function () {
    function ErrorLogging() {
    }
    return ErrorLogging;
}());



/***/ }),

/***/ "./src/app/shared/service/api-interceptor.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/service/api-interceptor.service.ts ***!
  \***********************************************************/
/*! exports provided: DEFAULT_TIMEOUT, APIInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_TIMEOUT", function() { return DEFAULT_TIMEOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIInterceptorService", function() { return APIInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/constants */ "./src/app/shared/utils/constants.ts");
/* harmony import */ var _utils_errorconstants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/errorconstants */ "./src/app/shared/utils/errorconstants.ts");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _model_ErrorLogging__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/ErrorLogging */ "./src/app/shared/model/ErrorLogging.ts");








var DEFAULT_TIMEOUT = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('defaultTimeout');
/**
 * Implements HTTP_INTERCEPTOR in order to handle error
 * while making any http request to any REST API service.
 */
var APIInterceptorService = /** @class */ (function () {
    /**
     *
     * @param defaultTimeout Provide default timeout duration.
     */
    function APIInterceptorService(defaultTimeout) {
        this.defaultTimeout = defaultTimeout;
    }
    APIInterceptorService.prototype.intercept = function (request, next) {
        var timeoutValue = Number(request.headers.get('timeout')) || this.defaultTimeout;
        /** Generate UID to trace a single request thread. */
        var UID = Object(uuid__WEBPACK_IMPORTED_MODULE_6__["v4"])();
        /** Adding generated UID to request header to trace sigle request thread. */
        var requestWithHeader = request.clone({
            setHeaders: { CID: UID }
        });
        return next.handle(requestWithHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["timeout"])(timeoutValue), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    /**
     * Method to Handle error while making get request to Rest API.
     * @param err Variable to hold httpErrorResponse.
     */
    APIInterceptorService.prototype.handleError = function (err) {
        /** Send error captured to APM server using apmAgent */
        var erroMessageLogging = new _model_ErrorLogging__WEBPACK_IMPORTED_MODULE_7__["ErrorLogging"]();
        var apiErrors;
        var sysErrors;
        if (!navigator.onLine) {
            // Handle offline error
            erroMessageLogging.errorMessage = _utils_errorconstants__WEBPACK_IMPORTED_MODULE_5__["ErrorConstants"].MESSAGE_NO_INTERNET_PRIMARY + '$' + _utils_errorconstants__WEBPACK_IMPORTED_MODULE_5__["ErrorConstants"].MESSAGE_NO_INTERNET_SECONDARY;
        }
        else if (err.error instanceof ErrorEvent) {
            // Client side or netwrok error occured.
            erroMessageLogging.errorMessage = _utils_errorconstants__WEBPACK_IMPORTED_MODULE_5__["ErrorConstants"].MESSAGE_CLIENTSIDE_ERROR + err.error.message;
        }
        else {
            if (err.status == _utils_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].HTTP_STATUS_BADREQUEST) {
                apiErrors = err.error;
                erroMessageLogging.errorMessage = _utils_errorconstants__WEBPACK_IMPORTED_MODULE_5__["ErrorConstants"].MESSAGE_INVALID_VALUE_SUPPLIED_PRIMARY + '$' +
                    _utils_errorconstants__WEBPACK_IMPORTED_MODULE_5__["ErrorConstants"].MESSAGE_INVALID_VALUE_SUPPLIED_SECONDARY;
                erroMessageLogging.errorObject = apiErrors.debugMessage;
            }
            else if (err.status == _utils_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].HTTP_STATUS_CONFLICT) {
                sysErrors = err.error;
                erroMessageLogging.errorMessage = _utils_errorconstants__WEBPACK_IMPORTED_MODULE_5__["ErrorConstants"].MESSAGE_USER_ALREADY_EXISTS_PRIMARY + '$' +
                    _utils_errorconstants__WEBPACK_IMPORTED_MODULE_5__["ErrorConstants"].MESSAGE_USER_ALREADY_EXISTS_SECONDARY;
                erroMessageLogging.errorObject = sysErrors.message;
            }
            else {
                erroMessageLogging.errorObject = err.message;
                switch (err.status) {
                    // Server side error based on status returned from API
                    case _utils_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].API_POST_ERROR_0: {
                        erroMessageLogging.errorMessage = _utils_errorconstants__WEBPACK_IMPORTED_MODULE_5__["ErrorConstants"].MESSAGE_SERVER_UNREACHABLE_PRIMARY + '$' +
                            _utils_errorconstants__WEBPACK_IMPORTED_MODULE_5__["ErrorConstants"].MESSAGE_SERVER_UNREACHABLE_SECONDARY;
                        break;
                    }
                    case _utils_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].HTTP_STATUS_UNAUTHORIZED_ACCESS: {
                        erroMessageLogging.errorMessage = _utils_errorconstants__WEBPACK_IMPORTED_MODULE_5__["ErrorConstants"].MESSAGE_UNAUTHORIZED_ACCESS_PRIMARY + '$' +
                            _utils_errorconstants__WEBPACK_IMPORTED_MODULE_5__["ErrorConstants"].MESSAGE_UNAUTHORIZED_ACCESS_SECONDARY;
                        break;
                    }
                    case _utils_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].HTTP_STATUS_FORBIDDEN: {
                        erroMessageLogging.errorMessage = _utils_errorconstants__WEBPACK_IMPORTED_MODULE_5__["ErrorConstants"].MESSAGE_FORBIDDEN_PRIMARY + '$' +
                            _utils_errorconstants__WEBPACK_IMPORTED_MODULE_5__["ErrorConstants"].MESSAGE_FORBIDDEN_SECONDARY;
                        break;
                    }
                    case _utils_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].HTTP_STATUS_NOT_ALLOWED: {
                        erroMessageLogging.errorMessage = _utils_errorconstants__WEBPACK_IMPORTED_MODULE_5__["ErrorConstants"].MESSAGE_HTTPMETHOD_NOT_ALLOWED_PRIMARY + '$' +
                            _utils_errorconstants__WEBPACK_IMPORTED_MODULE_5__["ErrorConstants"].MESSAGE_HTTPMETHOD_NOT_ALLOWED_SECONDARY;
                        break;
                    }
                    case _utils_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].HTTP_STATUS_PAGE_NOT_FOUND: {
                        erroMessageLogging.errorMessage = _utils_errorconstants__WEBPACK_IMPORTED_MODULE_5__["ErrorConstants"].MESSAGE_PAGE_NOT_FOUND_PRIMARY + '$' +
                            _utils_errorconstants__WEBPACK_IMPORTED_MODULE_5__["ErrorConstants"].MESSAGE_PAGE_NOT_FOUND_SECONDARY;
                        break;
                    }
                    default: {
                        erroMessageLogging.errorMessage = _utils_errorconstants__WEBPACK_IMPORTED_MODULE_5__["ErrorConstants"].MESSAGE_SERVER_ERROR + ':' + err.message;
                        break;
                    }
                }
            }
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(erroMessageLogging);
    };
    APIInterceptorService.ctorParameters = function () { return [
        { type: Number, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [DEFAULT_TIMEOUT,] }] }
    ]; };
    APIInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(DEFAULT_TIMEOUT)),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
    ], APIInterceptorService);
    return APIInterceptorService;
}());



/***/ }),

/***/ "./src/app/shared/service/landing-page-resolver.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/service/landing-page-resolver.service.ts ***!
  \*****************************************************************/
/*! exports provided: LandingPageResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageResolverService", function() { return LandingPageResolverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aws-amplify */ "./node_modules/aws-amplify/lib-esm/index.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__);




/**
 * Resolver service to load current user info to check for permissions before page loading.
 */
var LandingPageResolverService = /** @class */ (function () {
    /**
     * Constructor of landing page resolver service.
     */
    function LandingPageResolverService() {
    }
    /**
     * Resolve method implementation for landing page resolver service.
     * @param route Instance of ActivatedRouteSnapshot to handle params supplied in routing.
     * @param state Instance of RouterStateSnapshot to indicate current application state.
     * @returns Promise object which returns current user info details.
     */
    LandingPageResolverService.prototype.resolve = function (route, state) {
        return aws_amplify__WEBPACK_IMPORTED_MODULE_2__["Auth"].currentUserInfo();
    };
    LandingPageResolverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LandingPageResolverService);
    return LandingPageResolverService;
}());



/***/ }),

/***/ "./src/app/shared/service/user-details-resolver.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/service/user-details-resolver.service.ts ***!
  \*****************************************************************/
/*! exports provided: UserDetailsResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsResolverService", function() { return UserDetailsResolverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _user_management_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-management.service */ "./src/app/shared/service/user-management.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



/**
 * Resolver service to load user details on edit page before navigating to edit page from landing page
 */
var UserDetailsResolverService = /** @class */ (function () {
    /**
     * Constructor of user details resolver service.
     * @param _userManagementService Instance of UserManagementService to call service methods.
     */
    function UserDetailsResolverService(_userManagementService) {
        this._userManagementService = _userManagementService;
    }
    /**
     * Resolve method implementation for user details resolver service.
     * @param route Instance of ActivatedRouteSnapshot to handle params supplied in routing.
     * @param state Instance of RouterStateSnapshot to indicate current application state.
     */
    UserDetailsResolverService.prototype.resolve = function (route, state) {
        if (null != route.params.toc && null != route.params.id) {
            return this._userManagementService.getUserDetails(route.params.toc, route.params.id);
        }
    };
    UserDetailsResolverService.ctorParameters = function () { return [
        { type: _user_management_service__WEBPACK_IMPORTED_MODULE_1__["UserManagementService"] }
    ]; };
    UserDetailsResolverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_management_service__WEBPACK_IMPORTED_MODULE_1__["UserManagementService"]])
    ], UserDetailsResolverService);
    return UserDetailsResolverService;
}());



/***/ }),

/***/ "./src/app/shared/service/user-management.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/service/user-management.service.ts ***!
  \***********************************************************/
/*! exports provided: UserManagementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementService", function() { return UserManagementService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _utils_errorconstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/errorconstants */ "./src/app/shared/utils/errorconstants.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/constants */ "./src/app/shared/utils/constants.ts");







/**
 * Provides service for accessing REST API service for getting arrivals details.
 */
var UserManagementService = /** @class */ (function () {
    /**
     * Constructor to allow the injection of required services.
     * @param http HttpClient instance for accessing the Rest API.
     */
    function UserManagementService(http) {
        this.http = http;
        /** URL for new user post call. */
        this.saveUserURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].save_user_api_url;
        /** URL for saving force password change value post call. */
        this.saveForcePasswordChangeURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].save_force_password_change_api_url;
        /** URL for saving changed status of user post call. */
        this.saveUserStatusURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].save_user_status_api_url;
        /** URL for update user post call. */
        this.updateUserURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].update_user_api_url;
        /** URL for get Toc list call. */
        this.getTocsListURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].get_tocs_api_url;
        /** URL for get Roles call. */
        this.getRolesURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].get_roles_api_url;
        /** URL for getting all the users for a said TOC. */
        this.getUsersURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].get_users_api_url;
        /** URL for geting a particular user details for edit. */
        this.getUserURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].get_user_api_url;
        // Variable to hold test condition based on first name and last name
        this.testConditions = '';
    }
    /**
     * Method to post new user details to server using post Api.
     * @param opost - NewUser object
     */
    UserManagementService.prototype.postUserDetails = function (opost) {
        // Create test conditions if actual API is not in place
        this.testConditions = opost.firstName + opost.lastName;
        switch (this.testConditions) {
            case 'FujitsuXXTestTestXXFujitsu201': {
                this.respseReturn = _utils_constants__WEBPACK_IMPORTED_MODULE_6__["Constants"].USER_SAVE_SUCCESS_PRIMARY + '$' +
                    _utils_constants__WEBPACK_IMPORTED_MODULE_6__["Constants"].USER_SAVE_SUCCESS_SECONDARY;
                break;
            }
            case 'FujitsuXXTestTestXXFujitsu400': {
                this.respseReturn = _utils_errorconstants__WEBPACK_IMPORTED_MODULE_4__["ErrorConstants"].MESSAGE_INVALID_VALUE_SUPPLIED_PRIMARY + '$' +
                    _utils_errorconstants__WEBPACK_IMPORTED_MODULE_4__["ErrorConstants"].MESSAGE_INVALID_VALUE_SUPPLIED_SECONDARY;
                break;
            }
            case 'FujitsuXXTestTestXXFujitsu401': {
                this.respseReturn = _utils_errorconstants__WEBPACK_IMPORTED_MODULE_4__["ErrorConstants"].MESSAGE_UNAUTHORIZED_ACCESS_PRIMARY + '$' +
                    _utils_errorconstants__WEBPACK_IMPORTED_MODULE_4__["ErrorConstants"].MESSAGE_UNAUTHORIZED_ACCESS_SECONDARY;
                break;
            }
            case 'FujitsuXXTestTestXXFujitsu403': {
                this.respseReturn = _utils_errorconstants__WEBPACK_IMPORTED_MODULE_4__["ErrorConstants"].MESSAGE_FORBIDDEN_PRIMARY + '$' +
                    _utils_errorconstants__WEBPACK_IMPORTED_MODULE_4__["ErrorConstants"].MESSAGE_FORBIDDEN_SECONDARY;
                break;
            }
            case 'FujitsuXXTestTestXXFujitsu405': {
                this.respseReturn = _utils_errorconstants__WEBPACK_IMPORTED_MODULE_4__["ErrorConstants"].MESSAGE_HTTPMETHOD_NOT_ALLOWED_PRIMARY + '$' +
                    _utils_errorconstants__WEBPACK_IMPORTED_MODULE_4__["ErrorConstants"].MESSAGE_HTTPMETHOD_NOT_ALLOWED_SECONDARY;
                break;
            }
            case 'FujitsuXXTestTestXXFujitsu409': {
                this.respseReturn = _utils_errorconstants__WEBPACK_IMPORTED_MODULE_4__["ErrorConstants"].MESSAGE_USER_ALREADY_EXISTS_PRIMARY + '$' +
                    _utils_errorconstants__WEBPACK_IMPORTED_MODULE_4__["ErrorConstants"].MESSAGE_USER_ALREADY_EXISTS_SECONDARY;
                break;
            }
            default: {
                // Actual API call to add new user
                return this.http.post(this.saveUserURL, opost);
                break;
            }
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.respseReturn);
    };
    /**
     * Method to post force password change value for user to server using post Api.
     * @param toc - TOC code
     * @param userId - Employee ID
     * @param opost - PasswordChange object
     */
    UserManagementService.prototype.postForcePasswordChange = function (toc, userId, opost) {
        return this.http.post(this.saveForcePasswordChangeURL + _utils_constants__WEBPACK_IMPORTED_MODULE_6__["Constants"].TOC + toc.toUpperCase() + _utils_constants__WEBPACK_IMPORTED_MODULE_6__["Constants"].USERS +
            userId + _utils_constants__WEBPACK_IMPORTED_MODULE_6__["Constants"].FORCE_PWD_CHANGE, opost);
    };
    /**
     * Method to post user status value for user to server using post Api.
     * @param toc - TOC code
     * @param userId - Employee Id
     * @param opost - UserStatus object
     */
    UserManagementService.prototype.postChangeUserStatus = function (toc, userId, opost) {
        return this.http.post(this.saveUserStatusURL + _utils_constants__WEBPACK_IMPORTED_MODULE_6__["Constants"].TOC + toc.toUpperCase() + _utils_constants__WEBPACK_IMPORTED_MODULE_6__["Constants"].USERS +
            userId + _utils_constants__WEBPACK_IMPORTED_MODULE_6__["Constants"].ACTIVE_STATUS, opost);
    };
    /**
     * Method to post update user details to server using post Api.
     * @param opost - UserDetails object
     */
    UserManagementService.prototype.postUpdateUserDetails = function (opost) {
        // Create test conditions if actual API is not in place
        this.testConditions = opost.firstName + opost.lastName;
        switch (this.testConditions) {
            case 'FujitsuXXTestTestXXFujitsu201': {
                this.respseReturn = _utils_constants__WEBPACK_IMPORTED_MODULE_6__["Constants"].USER_UPDATED_SUCCESS_PRIMARY + '$' +
                    _utils_constants__WEBPACK_IMPORTED_MODULE_6__["Constants"].USER_UPDATED_SUCCESS_SECONDARY;
                break;
            }
            case 'FujitsuXXTestTestXXFujitsu400': {
                this.respseReturn = _utils_errorconstants__WEBPACK_IMPORTED_MODULE_4__["ErrorConstants"].MESSAGE_INVALID_VALUE_SUPPLIED_PRIMARY + '$' +
                    _utils_errorconstants__WEBPACK_IMPORTED_MODULE_4__["ErrorConstants"].MESSAGE_INVALID_VALUE_SUPPLIED_SECONDARY;
                break;
            }
            case 'FujitsuXXTestTestXXFujitsu401': {
                this.respseReturn = _utils_errorconstants__WEBPACK_IMPORTED_MODULE_4__["ErrorConstants"].MESSAGE_UNAUTHORIZED_ACCESS_PRIMARY + '$' +
                    _utils_errorconstants__WEBPACK_IMPORTED_MODULE_4__["ErrorConstants"].MESSAGE_UNAUTHORIZED_ACCESS_SECONDARY;
                break;
            }
            case 'FujitsuXXTestTestXXFujitsu403': {
                this.respseReturn = _utils_errorconstants__WEBPACK_IMPORTED_MODULE_4__["ErrorConstants"].MESSAGE_FORBIDDEN_PRIMARY + '$' +
                    _utils_errorconstants__WEBPACK_IMPORTED_MODULE_4__["ErrorConstants"].MESSAGE_FORBIDDEN_SECONDARY;
                break;
            }
            case 'FujitsuXXTestTestXXFujitsu405': {
                this.respseReturn = _utils_errorconstants__WEBPACK_IMPORTED_MODULE_4__["ErrorConstants"].MESSAGE_HTTPMETHOD_NOT_ALLOWED_PRIMARY + '$' +
                    _utils_errorconstants__WEBPACK_IMPORTED_MODULE_4__["ErrorConstants"].MESSAGE_HTTPMETHOD_NOT_ALLOWED_SECONDARY;
                break;
            }
            case 'FujitsuXXTestTestXXFujitsu404': {
                this.respseReturn =
                    _utils_errorconstants__WEBPACK_IMPORTED_MODULE_4__["ErrorConstants"].MESSAGE_PAGE_NOT_FOUND_PRIMARY + '$' +
                        _utils_errorconstants__WEBPACK_IMPORTED_MODULE_4__["ErrorConstants"].MESSAGE_PAGE_NOT_FOUND_SECONDARY;
                break;
            }
            default: {
                // Actual API call to update user
                return this.http.put(this.updateUserURL, opost, {
                    params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('toc', opost.toc.toUpperCase()).set('userId', opost.employeeId)
                });
                break;
            }
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.respseReturn);
    };
    /**
     * Method to get list of Roles based on TOC code using get Api for roles.
     * @param selectedToc - TOC code
     * @param selectedAppId - Application Id
     */
    UserManagementService.prototype.getUserRoles = function (selectedToc, selectedAppId) {
        if (selectedAppId != null) {
            return this.http.get(this.getRolesURL, {
                params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('toc', selectedToc.toUpperCase())
                    .set('appId', selectedAppId.toString())
            });
        }
        else {
            return this.http.get(this.getRolesURL, {
                params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('toc', selectedToc.toUpperCase())
            });
        }
    };
    /**
     * Method to get list of all TOCs using get Api for TOCs.
     */
    UserManagementService.prototype.getTocs = function () {
        return this.http.get(this.getTocsListURL);
    };
    /**
     * Method to get list of all Users with their details using get Api for Users.
     * @param getUsersToc - TOC Code
     */
    UserManagementService.prototype.getUsersDetails = function (getUsersToc) {
        return this.http.get(this.getUsersURL, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('toc', getUsersToc.toUpperCase())
        });
    };
    /**
     * Method to get user detail based on Employee ID and TOC using get Api for User.
     * @param getUsersToc - TOC Code
     * @param getEmployeeID - Employee ID
     */
    UserManagementService.prototype.getUserDetails = function (getUsersToc, getEmployeeID) {
        return this.http.get(this.getUserURL, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('toc', getUsersToc.toUpperCase())
                .set('userId', getEmployeeID.toString())
        });
    };
    UserManagementService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    UserManagementService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserManagementService);
    return UserManagementService;
}());



/***/ }),

/***/ "./src/app/shared/utils/constants.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/utils/constants.ts ***!
  \*******************************************/
/*! exports provided: Constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return Constants; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

/**
 * Constants defined.
 */
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.PARAMETERS_USERID = 'userid';
    Constants.MANUAL_PRICE_AUTH_CODE = 0;
    Constants.STAR_MOBILE_APP_CODE = 1;
    Constants.EMP_ID_MIN_LENGTH = 1;
    Constants.EMP_ID_MAX_LENGTH = 12;
    Constants.LIVE_USER_CODE = 4;
    Constants.STORE_ID = 94;
    Constants.DEFAULT_ROLE_ID = 100;
    Constants.GROUP_ID = 123;
    Constants.DEFAULT_LANGUAGE_CODE = 9;
    Constants.DEFAULT_PAGE_SIZE = 10;
    Constants.PAGE_SIZE_OPTION = [10, 25, 50, 100];
    Constants.USER_ACTIVE = 'Active';
    Constants.USER_DELETED = 'Inactive';
    Constants.FORCE_PWD_CHANGE = '/forcePwdChange';
    Constants.USER_REACTIVATE = 'REACTIVATE';
    Constants.USER_TERMINATE = 'TERMINATE';
    Constants.ACTIVE_STATUS = '/activeStatus';
    Constants.MAKE_ACTIVE = "Make active";
    Constants.MAKE_INACTIVE = "Make inactive";
    Constants.TOC = '/toc/';
    Constants.USERS = '/users/';
    Constants.COLUMN_DETAILS_USERLIST_PAGE = ['actions', 'employeeId', 'firstName', 'lastName', 'status'];
    Constants.COLUMN_DETAILS_USERLIST_PAGE_NO_EDITPERMISSION = ['employeeId', 'firstName', 'lastName', 'status'];
    Constants.SUPPORTED_LANGUAGES = ['en', 'fr'];
    Constants.DEFAULT_LANGUAGE = 'en';
    Constants.SCREEN_SIZE_SMALL = 'sm';
    Constants.SCREEN_SIZE_VERY_SMALL = 'xs';
    Constants.COLUMN_DETAILS_USERLIST_SMALL_PAGE = ['actions', 'employeeId', 'firstName', 'lastName'];
    Constants.COLUMN_DETAILS_USERLIST_SMALL_PAGE_NO_EDITPERMISSION = ['employeeId', 'firstName', 'lastName'];
    Constants.API_POST_ERROR_0 = 0;
    Constants.HTTP_STATUS_BADREQUEST = 400;
    Constants.HTTP_STATUS_UNAUTHORIZED_ACCESS = 401;
    Constants.HTTP_STATUS_FORBIDDEN = 403;
    Constants.HTTP_STATUS_PAGE_NOT_FOUND = 404;
    Constants.HTTP_STATUS_NOT_ALLOWED = 405;
    Constants.HTTP_STATUS_CONFLICT = 409;
    Constants.HTTP_STATUS_CREATED = '201';
    Constants.API_STATUS_OK = '200';
    Constants.DEFAULT_STAR_APP = 'STARmobile app';
    Constants.DEFAULT_PASSWORD = '0000';
    Constants.EDIT = 'edit';
    Constants.USER_SAVE_SUCCESS_PRIMARY = 'User Added';
    Constants.USER_SAVE_SUCCESS_SECONDARY = 'User details saved successfully';
    Constants.USER_UPDATED_SUCCESS_PRIMARY = 'User updated';
    Constants.USER_UPDATED_SUCCESS_SECONDARY = 'User details updated successfully';
    Constants.USER_GET_SUCCESS_SECONDARY = 'Data fetched successfully';
    Constants.USER_LIST_FORM = 'userlist';
    Constants.ADD_USER_FORM = 'adduser';
    Constants.EDIT_USER_FORM = 'edituser';
    Constants.USER_FORM = 'newtisuser';
    Constants.USER_HELP_FORM = 'userhelp';
    Constants.ATTRIBUTES_FIELD = 'attributes';
    Constants.LANDING_PAGE_RESOLVER_FIELD = 'landingPage';
    Constants.CUSTOM_PERMISSIONS_FIELD = 'custom:permissions';
    Constants.CUSTOM_TOC = 'custom:toc';
    Constants.ADD_USER_PERMISSION_VALUE = '10-01';
    Constants.EDIT_USER_PERMISSION_VALUE = '10-02';
    Constants.DELETE_USER_PERMISSION_VALUE = '10-03';
    Constants.SPLIT_COMMA_FOR_PERMISSIONS = ',';
    Constants.SPLIT_COLON_FOR_PERMISSIONS = ':';
    Constants.SPLIT_PIPE_FOR_PERMISSIONS = '|';
    Constants.REMOVE_QUOTE_FROM_PERMISSIONS = '"';
    Constants.COLUMN_HEADER_FIRSTNAME = 'firstName';
    Constants.COLUMN_HEADER_LASTNAME = 'lastName';
    Constants.COLUMN_HEADER_EMPLOYEED_ID = 'employeeId';
    Constants.COLUMN_HEADER_STATUS = 'status';
    Constants.DESCENDING_ORDER = 'desc';
    Constants.TITLE_EDIT_USERS = 'Edit TIS User';
    Constants.TITLE_ADD_USERS = 'Add TIS User';
    Constants.USER_HELP_LANDING = 'UMListTisUsers.html';
    Constants.USER_HELP_EDIT = 'UMEditTisUser.html';
    Constants.USER_HELP_ADD = 'UMAddTisUser.html';
    Constants.USER_HELP_FORCE_PASSWORD = 'UMForcePassword.html';
    Constants.USER_HELP_MAIN = 'UMMain.html';
    Constants.USER_HELP_MAKE_INACTIVE = 'UMMakeInactive.html';
    Constants.USER_HELP_ERROR = 'UMErrors.html';
    Constants.USER_HELP_LOGIN_OUT = 'UMSTARhubLoginOut.html';
    Constants.USER_HELP_V_FORCE_PASSWORD = 'vUMForcePassword.html';
    Constants.FORWARD_SLASH = '/';
    return Constants;
}());



/***/ }),

/***/ "./src/app/shared/utils/errorconstants.ts":
/*!************************************************!*\
  !*** ./src/app/shared/utils/errorconstants.ts ***!
  \************************************************/
/*! exports provided: ErrorConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorConstants", function() { return ErrorConstants; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

/**
 * Error Constants defined.
 */
var ErrorConstants = /** @class */ (function () {
    function ErrorConstants() {
        this.account_validation_messages = {
            'userId': [
                { type: 'required', message: 'userId is required' },
                { type: 'minlength', message: 'userId must be at least 4 characters long' },
                { type: 'maxlength', message: 'userId cannot be more than 12 characters long' },
                { type: 'pattern', message: 'Your userId must contain only numbers ' },
                { type: 'validUsername', message: 'Your username has already been taken' }
            ],
            'email': [
                { type: 'required', message: 'Email is required' },
                { type: 'pattern', message: 'Enter a valid email' }
            ],
            'confirm_password': [
                { type: 'required', message: 'Confirm password is required' },
                { type: 'areEqual', message: 'Password mismatch' }
            ],
            'password': [
                { type: 'required', message: 'Password is required' },
                { type: 'minlength', message: 'Password must be at least 5 characters long' },
                { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number' }
            ],
            'lastName': [
                { type: 'pattern', message: 'You must accept terms and conditions' }
            ]
        };
    }
    ErrorConstants.INVALID_FORM = 'Form is invalid';
    ErrorConstants.MESSAGE_NO_INTERNET_PRIMARY = 'No Internet Connection';
    ErrorConstants.MESSAGE_NO_INTERNET_SECONDARY = 'Please check and try again';
    ErrorConstants.MESSAGE_CLIENTSIDE_ERROR = 'Client side error occured: ';
    ErrorConstants.MESSAGE_API_ERROR = 'Error: API Issue, please report this interface failure!';
    ErrorConstants.MESSAGE_SERVER_UNREACHABLE_PRIMARY = 'Server Error';
    ErrorConstants.MESSAGE_SERVER_UNREACHABLE_SECONDARY = 'Please report this failure';
    ErrorConstants.MESSAGE_INVALID_VALUE_SUPPLIED_PRIMARY = 'Field contains an invalid value (400)';
    ErrorConstants.MESSAGE_INVALID_VALUE_SUPPLIED_SECONDARY = 'Please correct data and try again';
    ErrorConstants.MESSAGE_UNAUTHORIZED_ACCESS_PRIMARY = 'Unauthorised Access (401)';
    ErrorConstants.MESSAGE_UNAUTHORIZED_ACCESS_SECONDARY = 'Please report this failure';
    ErrorConstants.MESSAGE_FORBIDDEN_PRIMARY = 'Access Forbidden (403)';
    ErrorConstants.MESSAGE_FORBIDDEN_SECONDARY = 'Please report this failure';
    ErrorConstants.MESSAGE_PAGE_NOT_FOUND_PRIMARY = 'Page Not Found (404)';
    ErrorConstants.MESSAGE_PAGE_NOT_FOUND_SECONDARY = 'Please report this failure';
    ErrorConstants.MESSAGE_HTTPMETHOD_NOT_ALLOWED_PRIMARY = 'Unexpected error (405)';
    ErrorConstants.MESSAGE_HTTPMETHOD_NOT_ALLOWED_SECONDARY = 'Please report this failure';
    ErrorConstants.MESSAGE_USER_ALREADY_EXISTS_PRIMARY = 'User Not Added (409)';
    ErrorConstants.MESSAGE_USER_ALREADY_EXISTS_SECONDARY = 'User already exists';
    ErrorConstants.MESSAGE_SERVER_ERROR = 'Server Error: ';
    ErrorConstants.MESSAGE_SAVENEWUSER_API_FAILED = 'Call to Save New User API failed.';
    ErrorConstants.MESSAGE_USERID_CANNOT_EDITED = 'User Id is not found, Please report this failure';
    return ErrorConstants;
}());



/***/ }),

/***/ "./src/environments/environment.feature.ts":
/*!*************************************************!*\
  !*** ./src/environments/environment.feature.ts ***!
  \*************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/fesm5/ngx-logger.js");


var environment = {
    production: false,
    auth_ui_url: 'https://auth-ui-master.dev.star-hub-services.net',
    save_user_api_url: 'https://user-master.dev.star-hub-services.net/api/user',
    update_user_api_url: 'https://user-master.dev.star-hub-services.net/api/user',
    get_tocs_api_url: 'https://toc-master.dev.star-hub-services.net/api/toc',
    get_roles_api_url: 'https://user-master.dev.star-hub-services.net/api/role',
    get_users_api_url: 'https://user-master.dev.star-hub-services.net/api/user',
    get_user_api_url: 'https://user-master.dev.star-hub-services.net/api/user',
    save_force_password_change_api_url: 'https://user-master.dev.star-hub-services.net/api/userpwd',
    save_user_status_api_url: 'https://user-master.dev.star-hub-services.net/api/user',
    user_help_url: 'https://help-ui-master.dev.star-hub-services.net/',
    appver: '1.0.0',
    cognito_user_pool_id: 'eu-west-2_6SkCk6Rb5',
    cognito_region: 'eu-west-2',
    cognito_user_pool_web_client_id: '25c5h4as44382qad5snq84tvgu',
    log_level: 'DEBUG',
    profile: 'dev',
    logging: {
        serverLoggingUrl: '/api/logs',
        level: ngx_logger__WEBPACK_IMPORTED_MODULE_1__["NgxLoggerLevel"].ERROR,
        serverLogLevel: ngx_logger__WEBPACK_IMPORTED_MODULE_1__["NgxLoggerLevel"].ERROR
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/fesm5/ngx-logger.js");

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var environment = {
    production: false,
    auth_ui_url: 'https://auth-ui-master.dev.star-hub-services.net',
    save_user_api_url: 'https://user-master.dev.star-hub-services.net/api/user',
    update_user_api_url: 'https://user-master.dev.star-hub-services.net/api/user',
    get_tocs_api_url: 'https://toc-master.dev.star-hub-services.net/api/toc',
    get_roles_api_url: 'https://user-master.dev.star-hub-services.net/api/role',
    get_users_api_url: 'https://user-master.dev.star-hub-services.net/api/user',
    get_user_api_url: 'https://user-master.dev.star-hub-services.net/api/user',
    save_force_password_change_api_url: 'https://user-master.dev.star-hub-services.net/api/userpwd',
    save_user_status_api_url: 'https://user-master.dev.star-hub-services.net/api/user',
    user_help_url: 'https://help-ui-master.dev.star-hub-services.net/',
    appver: '1.0.0',
    cognito_user_pool_id: 'eu-west-2_6SkCk6Rb5',
    cognito_region: 'eu-west-2',
    cognito_user_pool_web_client_id: '25c5h4as44382qad5snq84tvgu',
    log_level: 'DEBUG',
    profile: 'dev',
    logging: {
        serverLoggingUrl: '/api/logs',
        level: ngx_logger__WEBPACK_IMPORTED_MODULE_1__["NgxLoggerLevel"].ERROR,
        serverLogLevel: ngx_logger__WEBPACK_IMPORTED_MODULE_1__["NgxLoggerLevel"].ERROR
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! aws-amplify */ "./node_modules/aws-amplify/lib-esm/index.js");







var domain = '.' + _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].profile + '.star-hub-services.net';
aws_amplify__WEBPACK_IMPORTED_MODULE_6__["default"].configure({
    Auth: {
        region: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].cognito_region,
        userPoolId: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].cognito_user_pool_id,
        userPoolWebClientId: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].cognito_user_pool_web_client_id,
        cookieStorage: {
            domain: domain,
            secure: true
        }
    }
});
if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Tablet\Phase_2\MP-848\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.fcb61e5f9f09b17c0617.js.map