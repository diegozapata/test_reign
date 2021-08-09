(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\dfzapato\Documents\Reign\test_reign\test_reign\testReign\src\main.ts */"zUnb");


/***/ }),

/***/ "Ado8":
/*!******************************************!*\
  !*** ./src/app/services/news.service.ts ***!
  \******************************************/
/*! exports provided: NewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsService", function() { return NewsService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class NewsService {
    constructor(http) {
        this.http = http;
    }
    getNews(language, page) {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].RESTservices.news.baseUrl}${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].RESTservices.news.search}?query=${language}&page=${page}`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => { }));
    }
}
NewsService.ɵfac = function NewsService_Factory(t) { return new (t || NewsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
NewsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: NewsService, factory: NewsService.ɵfac, providedIn: 'root' });


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
const environment = {
    production: false,
    log: {
        active: 'true',
        level: 'TRACE',
    },
    RESTservices: {
        news: {
            baseUrl: ' https://hn.algolia.com/api/v1/',
            search: 'search_by_date',
        },
    },
};


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_persistence_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/persistence.service */ "lxVI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");






function FiltertNewsComponent_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const l_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", l_r1.model);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", l_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", l_r1.model, " ");
} }
class FiltertNewsComponent {
    constructor(formBuilder, persistenceUtilService) {
        this.formBuilder = formBuilder;
        this.persistenceUtilService = persistenceUtilService;
        this.language = [
            {
                model: 'angular',
                img: `http://localhost:4200/assets/img/image-138.png`,
            },
            {
                model: 'reactjs',
                img: `../../../assets/img/image-140.png`,
            },
            {
                model: 'vuejs',
                img: `../../../assets/img/image-141.png`,
            },
        ];
        this.controllerFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.exampleData = [
            {
                id: 'angular',
                text: `<span><img src="../../../assets/img/image-138.png"/></span>` +
                    ' angular',
            },
            {
                id: 'reactjs',
                text: `<span><img src="../../../assets/img/image-140.png"/></span>` +
                    ' reactjs',
            },
            {
                id: 'vuejs',
                text: '<span><img src="../../../assets/img/image-141.png"/></span>' +
                    ' vuejs',
            },
        ];
        this.options = {
            multiple: false,
            closeOnSelect: true,
            width: '300',
            allowClear: true,
            disabled: false,
            minimumResultsForSearch: -1,
        };
        this.initForm();
        this.reLoad();
    }
    initForm() {
        this.languageForm = this.formBuilder.group({
            language: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            validacion: [{ disabled: true }],
        });
        this.languageForm.controls.validacion.disable();
    }
    onChange(event) {
        this.selectLanguage = this.languageForm.value.language;
        this.controllerFilter.emit({
            selectLanguage: this.selectLanguage,
        });
    }
    reLoad() {
        const persistence = this.persistenceUtilService.getLocal('nameFilter');
        if (persistence) {
            this.languageForm.controls.language.setValue(persistence);
            this.selectLanguage = this.languageForm.value.language;
        }
    }
}
FiltertNewsComponent.ɵfac = function FiltertNewsComponent_Factory(t) { return new (t || FiltertNewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_persistence_service__WEBPACK_IMPORTED_MODULE_2__["PersistenceUtilService"])); };
FiltertNewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FiltertNewsComponent, selectors: [["app-filtert-news"]], outputs: { controllerFilter: "controllerFilter" }, decls: 5, vars: 4, consts: [[2, "display", "flex", 3, "formGroup"], ["name", "language", "id", "language", "formControlName", "language", "required", "", 1, "select_class", 3, "change"], [3, "ngValue", "disabled"], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "ngValue"], [1, "Image-140", 3, "src"]], template: function FiltertNewsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FiltertNewsComponent_Template_select_change_1_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Select your news");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FiltertNewsComponent_option_4_Template, 3, 3, "option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.languageForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", null)("disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.language);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".select_class[_ngcontent-%COMP%] {\r\n  width: 183px;\r\n  height: 22px;\r\n  margin: 2px 19px 0px 92px;\r\n  font-family: Roboto;\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n  font-stretch: normal;\r\n  font-style: normal;\r\n  line-height: 1.57;\r\n  letter-spacing: normal;\r\n  color: #343434;\r\n}\r\n\r\nimg.Image-140[_ngcontent-%COMP%] {\r\n  width: 24px;\r\n  height: 24px;\r\n  margin: 6px 13px 0 0;\r\n  object-fit: contain;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRlcnQtbmV3cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixtQkFBbUI7QUFDckIiLCJmaWxlIjoiZmlsdGVydC1uZXdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsZWN0X2NsYXNzIHtcclxuICB3aWR0aDogMTgzcHg7XHJcbiAgaGVpZ2h0OiAyMnB4O1xyXG4gIG1hcmdpbjogMnB4IDE5cHggMHB4IDkycHg7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTc7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICBjb2xvcjogIzM0MzQzNDtcclxufVxyXG5cclxuaW1nLkltYWdlLTE0MCB7XHJcbiAgd2lkdGg6IDI0cHg7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG4gIG1hcmdpbjogNnB4IDEzcHggMCAwO1xyXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbn1cclxuIl19 */"] });


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
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-filtert-news", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("controllerFilter", function AppNewsComponent_app_filtert_news_1_Template_app_filtert_news_controllerFilter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.controllerFilter($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppNewsComponent {
    constructor() {
        this.flagFilter = true;
    }
    ngOnInit() {
        this.tabAct = 'all';
    }
    controllerList($event) {
        this.tabAct = $event.tabAct;
        $event.tabAct === 'fav'
            ? (this.flagFilter = false)
            : (this.flagFilter = true);
    }
    controllerFilter($event) {
        this.selectLanguage = $event.selectLanguage;
    }
}
AppNewsComponent.ɵfac = function AppNewsComponent_Factory(t) { return new (t || AppNewsComponent)(); };
AppNewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppNewsComponent, selectors: [["app-app-news"]], decls: 3, vars: 4, consts: [[3, "controllerList"], [3, "controllerFilter", 4, "ngIf"], [3, "flagFilter", "tabAct", "selectLanguage"], [3, "controllerFilter"]], template: function AppNewsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-switch-publications", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("controllerList", function AppNewsComponent_Template_app_switch_publications_controllerList_0_listener($event) { return ctx.controllerList($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppNewsComponent_app_filtert_news_1_Template, 1, 0, "app-filtert-news", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-list-news", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.flagFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("flagFilter", ctx.flagFilter)("tabAct", ctx.tabAct)("selectLanguage", ctx.selectLanguage);
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
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/news.service */ "Ado8");
/* harmony import */ var _utils_logger_factory_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/logger-factory.service */ "ca1u");
/* harmony import */ var _services_persistence_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/persistence.service */ "lxVI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ "oOf3");







function ListNewsComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListNewsComponent_section_0_Template_span_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const item_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.executeClick(item_r2.story_url); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListNewsComponent_section_0_Template_span_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const item_r2 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.executeClick(item_r2.story_url); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", item_r2.numberHours, " hours ago by ", item_r2.author, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2.story_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", item_r2.numberHours, " hours ago by ", item_r2.author, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2.story_title);
} }
function ListNewsComponent_pagination_controls_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "pagination-controls", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageChange", function ListNewsComponent_pagination_controls_2_Template_pagination_controls_pageChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.pageChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a1, a2, a3) { return { id: "news", itemsPerPage: a1, currentPage: a2, totalItems: a3 }; };
class ListNewsComponent {
    constructor(newsService, loggerFactory, persistenceUtilService) {
        this.newsService = newsService;
        this.loggerFactory = loggerFactory;
        this.persistenceUtilService = persistenceUtilService;
    }
    ngOnInit() {
        this.page = 0;
        // console.log(this.flagFilter);
        // console.log(this.selectLanguage);
        // this.getOrdenes(this.selectLanguage, this.page);
        this.reLoad();
    }
    ngOnChanges() {
        this.getOrdenes(this.selectLanguage, this.page);
    }
    getOrdenes(selectLanguage, page) {
        this.dataNews = [];
        switch (this.tabAct) {
            case 'all':
                if (selectLanguage) {
                    this.selectLanguage = selectLanguage;
                    this.persistenceUtilService.saveLocal('nameFilter', this.selectLanguage);
                    this.newsService.getNews(selectLanguage, page).subscribe((data) => {
                        this.dataNews = data.hits;
                        this.dataNews = this.dataNews.filter((dataNews) => dataNews.author !== null &&
                            dataNews.created_at !== null &&
                            dataNews.story_title !== null &&
                            dataNews.story_url !== null);
                        // console.log(this.dataNews);
                        this.transformHour(this.dataNews);
                        this.itemsPerPage = data.hitsPerPage;
                        this.currentPage = this.page;
                        this.totalItems = data.nbHits;
                    }, (error) => {
                        this.loggerFactory.error(`[Error] - Error al solicitar news`);
                    });
                }
                break;
            case 'fav':
                this.selectLanguage = selectLanguage;
                this.dataNews.push({
                    author: 'mmm',
                    created_at: 'aaaa',
                    story_title: 'prueba',
                    story_url: 'dfsfsad',
                }, {
                    author: 'mmm',
                    created_at: 'aaaa',
                    story_title: 'prueba',
                    story_url: 'dfsfsad',
                });
                this.itemsPerPage = 20;
                this.currentPage = 1;
                this.totalItems = this.dataNews.length;
                break;
        }
    }
    pageChanged($event) {
        this.page = $event;
        // console.log($event);
        this.aux = $event - 1;
        // console.log(this.aux);
        this.getOrdenes(this.selectLanguage, this.aux);
    }
    reLoad() {
        const persistence = this.persistenceUtilService.getLocal('nameFilter');
        if (persistence) {
            this.getOrdenes(persistence, 0);
        }
    }
    transformHour(dataNews) {
        const hora = new Date();
        dataNews.map((data) => {
            data.created_at = data.created_at.replace('T', ' ');
            data.created_at = data.created_at.replace('.000Z', '');
            data.numberHours = moment__WEBPACK_IMPORTED_MODULE_0__(hora).diff(moment__WEBPACK_IMPORTED_MODULE_0__(data.created_at), 'hours');
        });
    }
    executeClick(url) {
        if (url) {
            const link = document.createElement('a');
            link.href = url;
            link.target = '_blank';
            link.click();
        }
    }
}
ListNewsComponent.ɵfac = function ListNewsComponent_Factory(t) { return new (t || ListNewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_utils_logger_factory_service__WEBPACK_IMPORTED_MODULE_3__["LoggerFactory"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_persistence_service__WEBPACK_IMPORTED_MODULE_4__["PersistenceUtilService"])); };
ListNewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ListNewsComponent, selectors: [["app-list-news"]], inputs: { flagFilter: "flagFilter", selectLanguage: "selectLanguage", page: "page", tabAct: "tabAct" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 9, consts: [[4, "ngFor", "ngForOf"], ["class", "pagination", "id", "news", "previousLabel", "", "nextLabel", "", 3, "pageChange", 4, "ngIf"], [1, "row"], [1, "col"], [1, "row_2"], [1, "col_inter"], [3, "click"], [1, "time"], [1, "icon-time"], [1, "hours-ago-by-autho"], [1, "title"], [1, "event-driven-state-m"], [1, "col_inter2"], [1, "col_2"], ["id", "news", "previousLabel", "", "nextLabel", "", 1, "pagination", 3, "pageChange"]], template: function ListNewsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ListNewsComponent_section_0_Template, 26, 6, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ListNewsComponent_pagination_controls_2_Template, 1, 0, "pagination-controls", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](1, 2, ctx.dataNews, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](5, _c0, ctx.itemsPerPage, ctx.currentPage, ctx.totalItems)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectLanguage);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["PaginationControlsComponent"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["PaginatePipe"]], styles: [".cnt_paginador[_ngcontent-%COMP%] {\r\n  margin-left: auto;\r\n  margin-right: 1rem;\r\n}\r\n.pagination[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n.row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  flex-wrap: wrap;\r\n  padding: 1rem 3rem 0px 5.6rem;\r\n}\r\n.col[_ngcontent-%COMP%] {\r\n  flex-basis: 48%;\r\n  opacity: 0.8;\r\n  border-radius: 6px;\r\n  border: solid 1px #979797;\r\n  background-color: #fff;\r\n  margin-right: 1rem;\r\n  height: 90px;\r\n}\r\n.col_2[_ngcontent-%COMP%] {\r\n  flex-basis: 48%;\r\n  opacity: 0.8;\r\n  border-radius: 6px;\r\n  border: solid 1px #979797;\r\n  background-color: #fff;\r\n  height: 90px;\r\n}\r\n.row_2[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  flex-wrap: wrap;\r\n  padding: 0;\r\n}\r\n.col_inter[_ngcontent-%COMP%] {\r\n  flex-basis: 85.6%;\r\n  height: 90px;\r\n}\r\n.col_inter2[_ngcontent-%COMP%] {\r\n  flex-basis: 14%;\r\n  background-color: #606060;\r\n  height: 90px;\r\n  \r\n  opacity: 0.14;\r\n  border: solid 1px #606060;\r\n}\r\n.hours-ago-by-autho[_ngcontent-%COMP%] {\r\n  font-family: Roboto;\r\n  font-size: 12px;\r\n  font-weight: normal;\r\n  font-stretch: normal;\r\n  font-style: normal;\r\n  line-height: normal;\r\n  letter-spacing: normal;\r\n  color: #767676;\r\n}\r\n.icon-time[_ngcontent-%COMP%]:before {\r\n  content: \"\\e901\";\r\n  margin-left: 1rem;\r\n}\r\n.time[_ngcontent-%COMP%] {\r\n  margin-top: 1.5rem;\r\n}\r\n.event-driven-state-m[_ngcontent-%COMP%] {\r\n  font-family: Roboto;\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n  font-stretch: normal;\r\n  font-style: normal;\r\n  line-height: 1.43;\r\n  letter-spacing: 0.25px;\r\n  color: #6b6b6b;\r\n}\r\n.title[_ngcontent-%COMP%] {\r\n  margin: 6px 1rem 0px;\r\n}\r\n@media (max-width: 1280px) {\r\n  .col_inter[_ngcontent-%COMP%] {\r\n    flex-basis: 85.3%;\r\n  }\r\n}\r\n@media (max-width: 1024px) {\r\n  .row[_ngcontent-%COMP%] {\r\n    flex-wrap: initial;\r\n  }\r\n  .col[_ngcontent-%COMP%] {\r\n    flex-basis: 50%;\r\n  }\r\n  .col_2[_ngcontent-%COMP%] {\r\n    flex-basis: 50%;\r\n  }\r\n  .col_inter2[_ngcontent-%COMP%] {\r\n    flex-basis: 14.8%;\r\n  }\r\n  .col_inter[_ngcontent-%COMP%] {\r\n    flex-basis: 84.6%;\r\n  }\r\n}\r\n@media (max-width: 859px) {\r\n  .row[_ngcontent-%COMP%] {\r\n    flex-wrap: wrap;\r\n  }\r\n  .col[_ngcontent-%COMP%] {\r\n    flex-basis: 100%;\r\n    margin-right: 0;\r\n    margin-bottom: 1rem;\r\n  }\r\n  .col_2[_ngcontent-%COMP%] {\r\n    flex-basis: 100%;\r\n  }\r\n  .col_inter2[_ngcontent-%COMP%] {\r\n    flex-basis: 15.1%;\r\n  }\r\n  .col_inter[_ngcontent-%COMP%] {\r\n    flex-basis: 84.6%;\r\n  }\r\n}\r\n@media (max-width: 820px) {\r\n  .col_inter2[_ngcontent-%COMP%] {\r\n    flex-basis: 15%;\r\n  }\r\n  .col_inter[_ngcontent-%COMP%] {\r\n    flex-basis: 84.6%;\r\n  }\r\n}\r\n@media (max-width: 770px) {\r\n  .col_inter2[_ngcontent-%COMP%] {\r\n    flex-basis: 14.7%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QtbmV3cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLFVBQVU7QUFDWjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGFBQWE7RUFDYix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxvQkFBb0I7QUFDdEI7QUFDQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7QUFFQTtFQUNFO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGO0FBQ0E7RUFDRTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0YiLCJmaWxlIjoibGlzdC1uZXdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY250X3BhZ2luYWRvciB7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG59XHJcbi5wYWdpbmF0aW9uIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIHBhZGRpbmc6IDFyZW0gM3JlbSAwcHggNS42cmVtO1xyXG59XHJcbi5jb2wge1xyXG4gIGZsZXgtYmFzaXM6IDQ4JTtcclxuICBvcGFjaXR5OiAwLjg7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGJvcmRlcjogc29saWQgMXB4ICM5Nzk3OTc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgaGVpZ2h0OiA5MHB4O1xyXG59XHJcbi5jb2xfMiB7XHJcbiAgZmxleC1iYXNpczogNDglO1xyXG4gIG9wYWNpdHk6IDAuODtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzk3OTc5NztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGhlaWdodDogOTBweDtcclxufVxyXG4ucm93XzIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbi5jb2xfaW50ZXIge1xyXG4gIGZsZXgtYmFzaXM6IDg1LjYlO1xyXG4gIGhlaWdodDogOTBweDtcclxufVxyXG4uY29sX2ludGVyMiB7XHJcbiAgZmxleC1iYXNpczogMTQlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2MDYwNjA7XHJcbiAgaGVpZ2h0OiA5MHB4O1xyXG4gIC8qIG9wYWNpdHk6IDAuMDY7ICovXHJcbiAgb3BhY2l0eTogMC4xNDtcclxuICBib3JkZXI6IHNvbGlkIDFweCAjNjA2MDYwO1xyXG59XHJcbi5ob3Vycy1hZ28tYnktYXV0aG8ge1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICBjb2xvcjogIzc2NzY3NjtcclxufVxyXG4uaWNvbi10aW1lOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXGU5MDFcIjtcclxuICBtYXJnaW4tbGVmdDogMXJlbTtcclxufVxyXG4udGltZSB7XHJcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xyXG59XHJcbi5ldmVudC1kcml2ZW4tc3RhdGUtbSB7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNDM7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMjVweDtcclxuICBjb2xvcjogIzZiNmI2YjtcclxufVxyXG4udGl0bGUge1xyXG4gIG1hcmdpbjogNnB4IDFyZW0gMHB4O1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjgwcHgpIHtcclxuICAuY29sX2ludGVyIHtcclxuICAgIGZsZXgtYmFzaXM6IDg1LjMlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gIC5yb3cge1xyXG4gICAgZmxleC13cmFwOiBpbml0aWFsO1xyXG4gIH1cclxuICAuY29sIHtcclxuICAgIGZsZXgtYmFzaXM6IDUwJTtcclxuICB9XHJcbiAgLmNvbF8yIHtcclxuICAgIGZsZXgtYmFzaXM6IDUwJTtcclxuICB9XHJcbiAgLmNvbF9pbnRlcjIge1xyXG4gICAgZmxleC1iYXNpczogMTQuOCU7XHJcbiAgfVxyXG4gIC5jb2xfaW50ZXIge1xyXG4gICAgZmxleC1iYXNpczogODQuNiU7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4NTlweCkge1xyXG4gIC5yb3cge1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gIH1cclxuICAuY29sIHtcclxuICAgIGZsZXgtYmFzaXM6IDEwMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxuICAuY29sXzIge1xyXG4gICAgZmxleC1iYXNpczogMTAwJTtcclxuICB9XHJcbiAgLmNvbF9pbnRlcjIge1xyXG4gICAgZmxleC1iYXNpczogMTUuMSU7XHJcbiAgfVxyXG4gIC5jb2xfaW50ZXIge1xyXG4gICAgZmxleC1iYXNpczogODQuNiU7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4MjBweCkge1xyXG4gIC5jb2xfaW50ZXIyIHtcclxuICAgIGZsZXgtYmFzaXM6IDE1JTtcclxuICB9XHJcbiAgLmNvbF9pbnRlciB7XHJcbiAgICBmbGV4LWJhc2lzOiA4NC42JTtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc3MHB4KSB7XHJcbiAgLmNvbF9pbnRlcjIge1xyXG4gICAgZmxleC1iYXNpczogMTQuNyU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _shared_switch_publications_switch_publications_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/switch-publications/switch-publications.component */ "hefx");
/* harmony import */ var angular_persistence__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-persistence */ "R4I8");
/* harmony import */ var _services_persistence_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/persistence.service */ "lxVI");
/* harmony import */ var _shared_list_news_list_news_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/list-news/list-news.component */ "MI83");
/* harmony import */ var _shared_filtert_news_filtert_news_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/filtert-news/filtert-news.component */ "CpGm");
/* harmony import */ var _components_app_news_app_news_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/app-news/app-news.component */ "JNGM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var ng_select2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-select2 */ "eSIH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "fXoL");















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ providers: [angular_persistence__WEBPACK_IMPORTED_MODULE_5__["PersistenceService"], _services_persistence_service__WEBPACK_IMPORTED_MODULE_6__["PersistenceUtilService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            angular_persistence__WEBPACK_IMPORTED_MODULE_5__["PersistenceModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_12__["NgxPaginationModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ng_select2__WEBPACK_IMPORTED_MODULE_13__["NgSelect2Module"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _shared_switch_publications_switch_publications_component__WEBPACK_IMPORTED_MODULE_4__["SwitchPublicationsComponent"],
        _shared_list_news_list_news_component__WEBPACK_IMPORTED_MODULE_7__["ListNewsComponent"],
        _shared_filtert_news_filtert_news_component__WEBPACK_IMPORTED_MODULE_8__["FiltertNewsComponent"],
        _components_app_news_app_news_component__WEBPACK_IMPORTED_MODULE_9__["AppNewsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        angular_persistence__WEBPACK_IMPORTED_MODULE_5__["PersistenceModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_12__["NgxPaginationModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ng_select2__WEBPACK_IMPORTED_MODULE_13__["NgSelect2Module"]] }); })();


/***/ }),

/***/ "ca1u":
/*!*************************************************!*\
  !*** ./src/app/utils/logger-factory.service.ts ***!
  \*************************************************/
/*! exports provided: LoggerFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerFactory", function() { return LoggerFactory; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


/**
 * Servicio de control de log.
 */
class LoggerFactory {
    /**
     * Constructor obtiene desde el archivo enviroment
     *  el estado de activacion y el nivel a imprimir.
     */
    constructor() {
        this.active = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].log.active === 'true';
        switch (_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].log.level) {
            case 'TRACE':
                this.level = 4;
                break;
            case 'DEBUG':
                this.level = 3;
                break;
            case 'INFO':
                this.level = 2;
                break;
            case 'WARNING':
                this.level = 1;
                break;
            case 'ERROR':
                this.level = 0;
                break;
        }
    }
    /**
     * Desplegar un mensaje de nivel TRACE en consola.
     * @param msg Mensaje a desplegar
     * @param object [Optional] Object to print.
     */
    trace(msg, object = '') {
        if (this.active && this.level >= 0) {
            console.log(this.generateMessage(msg), object);
        }
    }
    /**
     * Despliega un mensaje de nivel DEBUD en consola.
     * @param msg Mensaje a desplegar
     * @param object [Optional] Object to print.
     */
    debug(msg, object = '') {
        if (this.active && this.level >= 1) {
            console.log(this.generateMessage(msg), object);
        }
    }
    /**
     * Despliega un mensaje de nivel INFO en consola.
     * @param msg Mensaje a desplegar.
     * @param object [Optional] Object to print.
     */
    info(msg, object = '') {
        if (this.active && this.level >= 2) {
            console.log(this.generateMessage(msg), object);
        }
    }
    /**
     * Despliega un mensaje de nivel WARNING en consola.
     * @param msg Mensaje a desplegar.
     * @param object [Optional] Object to print.
     */
    warning(msg, object = '') {
        if (this.active && this.level >= 3) {
            console.warn(this.generateMessage(msg), object);
        }
    }
    /**
     * Despliega un mensaje de nivel ERROR en consola.
     * @param msg Mensaje a desplegar.
     * @param object [Optional] Object to print.
     */
    error(msg, object = '') {
        if (this.active && this.level >= 4) {
            console.error(this.generateMessage(msg), object);
        }
    }
    /**
     * Despliega un mensaje en consola saltandose estado y nivel definido de log.
     * @param msg  mensaje a desplegar.
     * @param object [Optional] Object to print.
     */
    force(msg, object = '') {
        console.log(this.generateMessage(msg), object);
    }
    /**
     * Metodo que genera el string a imprimir en consola.
     * @param msg Mensaje a desplegar.
     */
    generateMessage(msg) {
        if (msg) {
            return '[' + new Date().toLocaleString() + '] ' + msg;
        }
        else {
            return '';
        }
    }
}
LoggerFactory.ɵfac = function LoggerFactory_Factory(t) { return new (t || LoggerFactory)(); };
LoggerFactory.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LoggerFactory, factory: LoggerFactory.ɵfac, providedIn: 'root' });


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
const _c1 = function (a0) { return { active2: a0 }; };
class SwitchPublicationsComponent {
    constructor(route, persistenceUtilService) {
        this.route = route;
        this.persistenceUtilService = persistenceUtilService;
        this.controllerList = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.reLoad();
        this.tabActive(this.tabAct);
    }
    reLoad() {
        const persistence = this.persistenceUtilService.getLocal('tabAct');
        persistence ? (this.tabAct = persistence) : (this.tabAct = 'all');
    }
    // Activa la pestaña seleccionada y hace el switcheo entre vistas (all/fav).
    tabActive(tabVal) {
        this.tabAct = tabVal;
        this.persistenceUtilService.saveLocal('tabAct', this.tabAct);
        this.controllerList.emit({
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx.tabAct === "fav"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: [".switch_view[_ngcontent-%COMP%] {\r\n  background: #ffffff;\r\n  text-align: center;\r\n}\r\n\r\nbutton.active[_ngcontent-%COMP%] {\r\n  border-bottom: solid 1px #1797ff !important;\r\n  border-top: solid 1px #1797ff !important;\r\n  border-left: solid 1px #1797ff !important;\r\n}\r\n\r\nbutton.active2[_ngcontent-%COMP%] {\r\n  border-bottom: solid 1px #1797ff !important;\r\n  border-top: solid 1px #1797ff !important;\r\n  border-right: solid 1px #1797ff !important;\r\n}\r\n\r\n.My-faves[_ngcontent-%COMP%] {\r\n  width: 98px;\r\n  height: 31px;\r\n  font-family: Roboto;\r\n  font-size: 16px;\r\n  font-weight: 500;\r\n  font-stretch: normal;\r\n  font-style: normal;\r\n  line-height: 1.75;\r\n  letter-spacing: normal;\r\n  text-align: center;\r\n  background-color: #fcfcfc;\r\n  border: solid 1px #d6d6d6;\r\n}\r\n\r\n.all[_ngcontent-%COMP%] {\r\n  width: 98px;\r\n  height: 31px;\r\n  font-family: Roboto;\r\n  font-size: 16px;\r\n  font-weight: 500;\r\n  font-stretch: normal;\r\n  font-style: normal;\r\n  line-height: 1.75;\r\n  letter-spacing: normal;\r\n  text-align: center;\r\n  background-color: #fcfcfc;\r\n  border: solid 1px #d6d6d6;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN3aXRjaC1wdWJsaWNhdGlvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwyQ0FBMkM7RUFDM0Msd0NBQXdDO0VBQ3hDLHlDQUF5QztBQUMzQzs7QUFDQTtFQUNFLDJDQUEyQztFQUMzQyx3Q0FBd0M7RUFDeEMsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6Qix5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzd2l0Y2gtcHVibGljYXRpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3dpdGNoX3ZpZXcge1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5idXR0b24uYWN0aXZlIHtcclxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggIzE3OTdmZiAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci10b3A6IHNvbGlkIDFweCAjMTc5N2ZmICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCAjMTc5N2ZmICFpbXBvcnRhbnQ7XHJcbn1cclxuYnV0dG9uLmFjdGl2ZTIge1xyXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjMTc5N2ZmICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXRvcDogc29saWQgMXB4ICMxNzk3ZmYgIWltcG9ydGFudDtcclxuICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCAjMTc5N2ZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5NeS1mYXZlcyB7XHJcbiAgd2lkdGg6IDk4cHg7XHJcbiAgaGVpZ2h0OiAzMXB4O1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjc1O1xyXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmM7XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2Q2ZDZkNjtcclxufVxyXG4uYWxsIHtcclxuICB3aWR0aDogOThweDtcclxuICBoZWlnaHQ6IDMxcHg7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNzU7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmNmYztcclxuICBib3JkZXI6IHNvbGlkIDFweCAjZDZkNmQ2O1xyXG59XHJcbiJdfQ== */"] });


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
    // tslint:disable-next-line:typedef
    getLocal(key) {
        return this.persistenceService.get(key, angular_persistence__WEBPACK_IMPORTED_MODULE_0__["StorageType"].LOCAL);
    }
    // tslint:disable-next-line:typedef
    removeLocal(key) {
        return this.persistenceService.remove(key, angular_persistence__WEBPACK_IMPORTED_MODULE_0__["StorageType"].LOCAL);
    }
    limpiarOrdenesYFormularios() {
        localStorage.removeItem('ANGULAR_PERSISTENCE_STORAGE::nameFilter');
        localStorage.removeItem('ANGULAR_PERSISTENCE_STORAGE::tabAct');
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
            { path: '', component: _components_app_news_app_news_component__WEBPACK_IMPORTED_MODULE_1__["AppNewsComponent"] },
            { path: '', redirectTo: '', pathMatch: 'full' },
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