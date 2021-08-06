(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\dfzapato\Documents\Reign\test_reign\test_reign\testReign\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
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

/***/ "CpGm":
/*!***************************************************************!*\
  !*** ./src/app/shared/filtert-news/filtert-news.component.ts ***!
  \***************************************************************/
/*! exports provided: FiltertNewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltertNewsComponent", function() { return FiltertNewsComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function FiltertNewsComponent_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const l_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", l_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", l_r1, " ");
} }
class FiltertNewsComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.language = ['angular', 'reactjs', 'vuejs'];
    }
    ngOnInit() {
        this.initForm();
    }
    initForm() {
        this.languageForm = this.formBuilder.group({
            language: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            validacion: [{ disabled: true }],
        });
        this.languageForm.controls.validacion.disable();
    }
    onChange(event) {
        console.log(this.languageForm.value.language);
    }
}
FiltertNewsComponent.ɵfac = function FiltertNewsComponent_Factory(t) { return new (t || FiltertNewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
FiltertNewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FiltertNewsComponent, selectors: [["app-filtert-news"]], decls: 5, vars: 4, consts: [[2, "display", "flex", 3, "formGroup"], ["name", "language", "id", "language", "formControlName", "language", "required", "", 3, "change"], [3, "ngValue", "disabled"], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "ngValue"]], template: function FiltertNewsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function FiltertNewsComponent_Template_select_change_1_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Select your news");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, FiltertNewsComponent_option_4_Template, 2, 2, "option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.languageForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", null)("disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.language);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWx0ZXJ0LW5ld3MuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "JNGM":
/*!***********************************************************!*\
  !*** ./src/app/components/app-news/app-news.component.ts ***!
  \***********************************************************/
/*! exports provided: AppNewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppNewsComponent", function() { return AppNewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_switch_publications_switch_publications_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/switch-publications/switch-publications.component */ "hefx");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_list_news_list_news_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/list-news/list-news.component */ "MI83");
/* harmony import */ var _shared_filtert_news_filtert_news_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/filtert-news/filtert-news.component */ "CpGm");





function AppNewsComponent_app_filtert_news_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-filtert-news");
} }
class AppNewsComponent {
    constructor() {
        this.flagFilter = true;
    }
    ngOnInit() { }
    controllerList($event) {
        $event.tabAct === 'fav'
            ? (this.flagFilter = false)
            : (this.flagFilter = true);
    }
}
AppNewsComponent.ɵfac = function AppNewsComponent_Factory(t) { return new (t || AppNewsComponent)(); };
AppNewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppNewsComponent, selectors: [["app-app-news"]], decls: 3, vars: 1, consts: [[3, "controllerList"], [4, "ngIf"]], template: function AppNewsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-switch-publications", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("controllerList", function AppNewsComponent_Template_app_switch_publications_controllerList_0_listener($event) { return ctx.controllerList($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppNewsComponent_app_filtert_news_1_Template, 1, 0, "app-filtert-news", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-list-news");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.flagFilter);
    } }, directives: [_shared_switch_publications_switch_publications_component__WEBPACK_IMPORTED_MODULE_1__["SwitchPublicationsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _shared_list_news_list_news_component__WEBPACK_IMPORTED_MODULE_3__["ListNewsComponent"], _shared_filtert_news_filtert_news_component__WEBPACK_IMPORTED_MODULE_4__["FiltertNewsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAtbmV3cy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "MI83":
/*!*********************************************************!*\
  !*** ./src/app/shared/list-news/list-news.component.ts ***!
  \*********************************************************/
/*! exports provided: ListNewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListNewsComponent", function() { return ListNewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ListNewsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ListNewsComponent.ɵfac = function ListNewsComponent_Factory(t) { return new (t || ListNewsComponent)(); };
ListNewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListNewsComponent, selectors: [["app-list-news"]], decls: 2, vars: 0, template: function ListNewsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "list-news works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LW5ld3MuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'testReign';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [[1, "Front-End-Test---Home-view"], [1, "Rectangle-2-Copy"], [1, "HACKER-NEWS"], ["src", "../assets/img/hacker-news.png"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".Front-End-Test---Home-view[_ngcontent-%COMP%] {\r\n  padding: 0 0 98px;\r\n  background-color: #fcfcfc;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n.Rectangle-2-Copy[_ngcontent-%COMP%] {\r\n  height: 33px;\r\n  margin: 0 0 70px;\r\n  padding-top: 35px;\r\n  padding-bottom: 35px;\r\n  padding-left: 90px;\r\n  box-shadow: 0 1px 4px 0 rgba(0, 21, 41, 0.12);\r\n  background-image: linear-gradient(to bottom, #ececec -32%, #fff 124%);\r\n}\r\n\r\nimg.HACKER-NEWS[_ngcontent-%COMP%] {\r\n  width: 208px;\r\n  height: 28px;\r\n  object-fit: contain;\r\n  font-family: Baskerville;\r\n  font-size: 28px;\r\n  font-weight: normal;\r\n  font-stretch: normal;\r\n  font-style: normal;\r\n  line-height: 1;\r\n  letter-spacing: normal;\r\n  color: #3b3b3b;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLDZDQUE2QztFQUM3QyxxRUFBcUU7QUFDdkU7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsY0FBYztBQUNoQjs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQkc7O0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaUJHOztBQUVIOzs7Ozs7Ozs7Ozs7Ozs7O0lBZ0JJIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLkZyb250LUVuZC1UZXN0LS0tSG9tZS12aWV3IHtcclxuICBwYWRkaW5nOiAwIDAgOThweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmY2ZjO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxufVxyXG5cclxuLlJlY3RhbmdsZS0yLUNvcHkge1xyXG4gIGhlaWdodDogMzNweDtcclxuICBtYXJnaW46IDAgMCA3MHB4O1xyXG4gIHBhZGRpbmctdG9wOiAzNXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAzNXB4O1xyXG4gIHBhZGRpbmctbGVmdDogOTBweDtcclxuICBib3gtc2hhZG93OiAwIDFweCA0cHggMCByZ2JhKDAsIDIxLCA0MSwgMC4xMik7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2VjZWNlYyAtMzIlLCAjZmZmIDEyNCUpO1xyXG59XHJcblxyXG5pbWcuSEFDS0VSLU5FV1Mge1xyXG4gIHdpZHRoOiAyMDhweDtcclxuICBoZWlnaHQ6IDI4cHg7XHJcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICBmb250LWZhbWlseTogQmFza2VydmlsbGU7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgY29sb3I6ICMzYjNiM2I7XHJcbn1cclxuXHJcbi8qIEBtZWRpYSAobWF4LXdpZHRoOiAxMjgwcHgpIHtcclxuICAuRnJvbnQtRW5kLVRlc3QtLS1Ib21lLXZpZXcge1xyXG4gICAgd2lkdGg6IDEwODBweDtcclxuICAgIGhlaWdodDogNzY4cHg7XHJcbiAgICBwYWRkaW5nOiAwIDAgNThweDtcclxuICB9XHJcbiAgLlJlY3RhbmdsZS0yLUNvcHkge1xyXG4gICAgd2lkdGg6IDEwODBweDtcclxuICAgIGhlaWdodDogODVweDtcclxuICAgIG1hcmdpbjogMCAwIDU2cHg7XHJcbiAgICBwYWRkaW5nOiAzM3B4IDgxMXB4IDMxcHggMTEycHg7XHJcbiAgfVxyXG4gIGltZy5IQUNLRVItTkVXUyB7XHJcbiAgICB3aWR0aDogMTU2cHg7XHJcbiAgICBoZWlnaHQ6IDIxcHg7XHJcbiAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgfVxyXG59ICovXHJcbi8qIFxyXG5AbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAuRnJvbnQtRW5kLVRlc3QtLS1Ib21lLXZpZXcge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgcGFkZGluZzogMCAwIDk4cHg7XHJcbiAgfVxyXG4gIC5SZWN0YW5nbGUtMi1Db3B5IHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIG1hcmdpbjogMCAwIDcwcHg7XHJcbiAgICBwYWRkaW5nOiA0NHB4IDEwODJweCA0MnB4IDE1MHB4O1xyXG4gIH1cclxuICBpbWcuSEFDS0VSLU5FV1Mge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gIH1cclxufSAqL1xyXG5cclxuLyogLy8kbWwgPSBNZWRpZGEgcGFyYSBjYW1iaW8gcGxhbiwgYWp1c3RlIGRlIGJvdG9uZXNcclxuICAkbWw6IDExNTYuOThweDtcclxuICAkbWQ6IDk5MS45OHB4O1xyXG4gICRzbTogNzY3Ljk4cHg7XHJcbiAgLy8kc2wgPSBNZWRpZGEgcGFyYSBjYW1iaW8gcGxhbiwgYWp1c3RlIGRlIGJvdG9uZXNcclxuICAkc2w6IDY5MS45OHB4O1xyXG4gIC8vJHNteHMgPSBNZWRpZGEgcGFyYSBjYW1iaW8gcGxhbiwgYWp1c3RlIGRlIGJvdG9uZXNcclxuICAkc214czogNjE1Ljk4cHg7XHJcbiAgLy8kc3MgPSBNZWRpZGEgcGFyYSBjYW1iaW8gcGxhbiwgYWp1c3RlIGRlIGJvdG9uZXNcclxuICAkc3M6IDYwMS45OHB4O1xyXG4gICR4czogNTc1Ljk4cHg7XHJcbiAgJHh4czogMzM5Ljk4cHg7XHJcbiAgLy9tZWRpZGEgcGFyYSB0ZXh0b3MgRXF1aXBvIHggZXF1aXBvXHJcbiAgJHNtbDogNzgwcHg7XHJcbiAgLy92aWV3cG9ydCBtb3ZpbCBzdGFuZGFyXHJcbiAgJG1vdmlsTDogNzIwcHg7XHJcbiAgICovXHJcbiJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _shared_switch_publications_switch_publications_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/switch-publications/switch-publications.component */ "hefx");
/* harmony import */ var angular_persistence__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-persistence */ "R4I8");
/* harmony import */ var _services_persistence_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/persistence.service */ "lxVI");
/* harmony import */ var _shared_list_news_list_news_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/list-news/list-news.component */ "MI83");
/* harmony import */ var _shared_filtert_news_filtert_news_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/filtert-news/filtert-news.component */ "CpGm");
/* harmony import */ var _components_app_news_app_news_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/app-news/app-news.component */ "JNGM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");











class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ providers: [angular_persistence__WEBPACK_IMPORTED_MODULE_4__["PersistenceService"], _services_persistence_service__WEBPACK_IMPORTED_MODULE_5__["PersistenceUtilService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            angular_persistence__WEBPACK_IMPORTED_MODULE_4__["PersistenceModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _shared_switch_publications_switch_publications_component__WEBPACK_IMPORTED_MODULE_3__["SwitchPublicationsComponent"],
        _shared_list_news_list_news_component__WEBPACK_IMPORTED_MODULE_6__["ListNewsComponent"],
        _shared_filtert_news_filtert_news_component__WEBPACK_IMPORTED_MODULE_7__["FiltertNewsComponent"],
        _components_app_news_app_news_component__WEBPACK_IMPORTED_MODULE_8__["AppNewsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        angular_persistence__WEBPACK_IMPORTED_MODULE_4__["PersistenceModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "hefx":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/switch-publications/switch-publications.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SwitchPublicationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchPublicationsComponent", function() { return SwitchPublicationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_persistence_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/persistence.service */ "lxVI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = function (a0) { return { active: a0 }; };
class SwitchPublicationsComponent {
    constructor(route, persistenceUtilService) {
        this.route = route;
        this.persistenceUtilService = persistenceUtilService;
        this.controllerList = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.tabAct = 'all';
    }
    ngOnInit() {
        this.persistenceUtilService.saveLocal('nameFilter', 'all');
        this.persistenceUtilService.removeLocal('nameFilter');
    }
    // Activa la pestaña seleccionada y hace el switcheo entre vistas (all/fav).
    tabActive(tabVal) {
        this.tabAct = tabVal;
        switch (tabVal) {
            case 'all':
                console.log('all');
                break;
            case 'fav':
                console.log('fav');
                break;
        }
        this.controllerList.emit({
            noValido: false,
            tabAct: tabVal,
        });
    }
}
SwitchPublicationsComponent.ɵfac = function SwitchPublicationsComponent_Factory(t) { return new (t || SwitchPublicationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_persistence_service__WEBPACK_IMPORTED_MODULE_2__["PersistenceUtilService"])); };
SwitchPublicationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SwitchPublicationsComponent, selectors: [["app-switch-publications"]], outputs: { controllerList: "controllerList" }, decls: 7, vars: 6, consts: [[1, "switch_view"], [1, "all", 3, "ngClass", "click"], [1, "My-faves", 3, "ngClass", "click"]], template: function SwitchPublicationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SwitchPublicationsComponent_Template_button_click_1_listener() { return ctx.tabActive("all"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "all");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SwitchPublicationsComponent_Template_button_click_4_listener() { return ctx.tabActive("fav"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "My Faves");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.tabAct === "all"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.tabAct === "fav"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: [".switch_view[_ngcontent-%COMP%] {\r\n  background: #ffffff;\r\n  text-align: center;\r\n}\r\n\r\nbutton.active[_ngcontent-%COMP%] {\r\n  border: solid 1px #1797ff !important;\r\n}\r\n\r\n.My-faves[_ngcontent-%COMP%] {\r\n  width: 98px;\r\n  height: 31px;\r\n  font-family: Roboto;\r\n  font-size: 16px;\r\n  font-weight: 500;\r\n  font-stretch: normal;\r\n  font-style: normal;\r\n  line-height: 1.75;\r\n  letter-spacing: normal;\r\n  text-align: center;\r\n  background-color: #fcfcfc;\r\n  border: solid 1px #d6d6d6;\r\n}\r\n\r\n.all[_ngcontent-%COMP%] {\r\n  width: 98px;\r\n  height: 31px;\r\n  font-family: Roboto;\r\n  font-size: 16px;\r\n  font-weight: 500;\r\n  font-stretch: normal;\r\n  font-style: normal;\r\n  line-height: 1.75;\r\n  letter-spacing: normal;\r\n  text-align: center;\r\n  background-color: #fcfcfc;\r\n  border: solid 1px #d6d6d6;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN3aXRjaC1wdWJsaWNhdGlvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIseUJBQXlCO0FBQzNCIiwiZmlsZSI6InN3aXRjaC1wdWJsaWNhdGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zd2l0Y2hfdmlldyB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmJ1dHRvbi5hY3RpdmUge1xyXG4gIGJvcmRlcjogc29saWQgMXB4ICMxNzk3ZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLk15LWZhdmVzIHtcclxuICB3aWR0aDogOThweDtcclxuICBoZWlnaHQ6IDMxcHg7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNzU7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmNmYztcclxuICBib3JkZXI6IHNvbGlkIDFweCAjZDZkNmQ2O1xyXG59XHJcbi5hbGwge1xyXG4gIHdpZHRoOiA5OHB4O1xyXG4gIGhlaWdodDogMzFweDtcclxuICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBsaW5lLWhlaWdodDogMS43NTtcclxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmY2ZjO1xyXG4gIGJvcmRlcjogc29saWQgMXB4ICNkNmQ2ZDY7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "lxVI":
/*!*************************************************!*\
  !*** ./src/app/services/persistence.service.ts ***!
  \*************************************************/
/*! exports provided: PersistenceUtilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersistenceUtilService", function() { return PersistenceUtilService; });
/* harmony import */ var angular_persistence__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular-persistence */ "R4I8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class PersistenceUtilService {
    constructor(persistenceService) {
        this.persistenceService = persistenceService;
    }
    saveSession(key, value) {
        this.persistenceService.set(key, value, {
            type: angular_persistence__WEBPACK_IMPORTED_MODULE_0__["StorageType"].SESSION,
        });
    }
    getSession(key) {
        return this.persistenceService.get(key, angular_persistence__WEBPACK_IMPORTED_MODULE_0__["StorageType"].SESSION);
    }
    removeSession(key) {
        return this.persistenceService.remove(key, angular_persistence__WEBPACK_IMPORTED_MODULE_0__["StorageType"].SESSION);
    }
    removeAll() {
        this.persistenceService.removeAll(angular_persistence__WEBPACK_IMPORTED_MODULE_0__["StorageType"].SESSION);
    }
    saveLocal(key, value) {
        this.persistenceService.set(key, value, {
            type: angular_persistence__WEBPACK_IMPORTED_MODULE_0__["StorageType"].LOCAL,
        });
    }
    getLocal(key) {
        return this.persistenceService.get(key, angular_persistence__WEBPACK_IMPORTED_MODULE_0__["StorageType"].LOCAL);
    }
    removeLocal(key) {
        return this.persistenceService.remove(key, angular_persistence__WEBPACK_IMPORTED_MODULE_0__["StorageType"].LOCAL);
    }
    limpiarOrdenesYFormularios() {
        localStorage.removeItem('ANGULAR_PERSISTENCE_STORAGE::nameFilter');
        localStorage.removeItem('ANGULAR_PERSISTENCE_STORAGE::favPubli');
    }
}
PersistenceUtilService.ɵfac = function PersistenceUtilService_Factory(t) { return new (t || PersistenceUtilService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](angular_persistence__WEBPACK_IMPORTED_MODULE_0__["PersistenceService"])); };
PersistenceUtilService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PersistenceUtilService, factory: PersistenceUtilService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_app_news_app_news_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/app-news/app-news.component */ "JNGM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        children: [
            { path: 'home', component: _components_app_news_app_news_component__WEBPACK_IMPORTED_MODULE_1__["AppNewsComponent"] },
            { path: '', redirectTo: 'home', pathMatch: 'full' },
        ],
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map