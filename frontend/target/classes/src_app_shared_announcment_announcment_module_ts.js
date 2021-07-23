(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_shared_announcment_announcment_module_ts"],{

/***/ 3588:
/*!******************************************************************!*\
  !*** ./src/app/shared/announcment/announcment-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnouncmentRoutingModule": () => (/* binding */ AnnouncmentRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _components_announcment_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/announcment.component */ 3737);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);




const routes = [
    { path: '', component: _components_announcment_component__WEBPACK_IMPORTED_MODULE_0__.AnnouncmentComponent },
];
class AnnouncmentRoutingModule {
}
AnnouncmentRoutingModule.ɵfac = function AnnouncmentRoutingModule_Factory(t) { return new (t || AnnouncmentRoutingModule)(); };
AnnouncmentRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AnnouncmentRoutingModule });
AnnouncmentRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AnnouncmentRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 6870:
/*!**********************************************************!*\
  !*** ./src/app/shared/announcment/announcment.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnouncmentModule": () => (/* binding */ AnnouncmentModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _announcment_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./announcment-routing.module */ 3588);
/* harmony import */ var _components_announcment_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/announcment.component */ 3737);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);





class AnnouncmentModule {
}
AnnouncmentModule.ɵfac = function AnnouncmentModule_Factory(t) { return new (t || AnnouncmentModule)(); };
AnnouncmentModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AnnouncmentModule });
AnnouncmentModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _announcment_routing_module__WEBPACK_IMPORTED_MODULE_0__.AnnouncmentRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AnnouncmentModule, { declarations: [_components_announcment_component__WEBPACK_IMPORTED_MODULE_1__.AnnouncmentComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _announcment_routing_module__WEBPACK_IMPORTED_MODULE_0__.AnnouncmentRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule] }); })();


/***/ }),

/***/ 3737:
/*!************************************************************************!*\
  !*** ./src/app/shared/announcment/components/announcment.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnouncmentComponent": () => (/* binding */ AnnouncmentComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);




function AnnouncmentComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const annoucnment_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](annoucnment_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("by ", annoucnment_r1.owner.firstName, " ", annoucnment_r1.owner.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", annoucnment_r1.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 6, annoucnment_r1.date), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](annoucnment_r1.address);
} }
class AnnouncmentComponent {
    constructor() {
        this.searchProject = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('');
    }
    ngOnInit() {
        this.annoucnments = [
            {
                title: "Title",
                description: "Some description",
                owner: {
                    firstName: "Slava",
                    lastName: "Danilchak"
                },
                date: 24242422342,
                address: "St. Williams",
                likes: 2
            },
            {
                title: "Title",
                description: "Some description Some description Some description Some description Some description Some description Some description Some description Some description",
                owner: {
                    firstName: "Slava",
                    lastName: "Danilchak"
                },
                date: 24242422342,
                address: "St. Williams",
                likes: 2
            },
            {
                title: "Title",
                description: "Some description",
                owner: {
                    firstName: "Slava",
                    lastName: "Danilchak"
                },
                date: 24242422342,
                address: "St. Williams",
                likes: 2
            }
        ];
    }
    getUser() {
    }
}
AnnouncmentComponent.ɵfac = function AnnouncmentComponent_Factory(t) { return new (t || AnnouncmentComponent)(); };
AnnouncmentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnnouncmentComponent, selectors: [["app-announcment"]], decls: 10, vars: 2, consts: [[1, "m-5"], [1, "col-6", "mb-5", "input-group", "input-group-merge"], ["type", "search", "placeholder", "\u041D\u0430\u0439\u0442\u0438 \u043F\u0440\u043E\u0435\u043A\u0442", 1, "form-control", 3, "formControl"], [1, "input-group-append"], [1, "input-group-text"], ["src", "/assets/images/icons/search_black_24dp.svg", "alt", "search", 1, "svg"], [1, "row", "flex-wrap"], ["class", "col-lg-4 mb-3 d-flex align-items-stretch", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "mb-3", "d-flex", "align-items-stretch"], [1, "card"], [1, "card-body", "d-flex"], [1, "d-flex", "flex-column"], [1, "d-flex", "mb-2"], ["src", "/assets/user.jpg", "alt", "image", 1, "me-2"], ["src", "/assets/images/icons/today_black_24dp.svg", "alt", "date", 1, "svg"]], template: function AnnouncmentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "All Announcment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AnnouncmentComponent_div_9_Template, 23, 8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.searchProject);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.annoucnments);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe], styles: ["img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFubm91bmNtZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFURiIsImZpbGUiOiJhbm5vdW5jbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5pbWFnZSB7XHJcbi8vICAgd2lkdGg6IDQwcHg7XHJcbi8vICAgaGVpZ2h0OiA0MHB4O1xyXG4vLyB9XHJcblxyXG4vLyAuc3ZnIHtcclxuLy8gICB3aWR0aDogMjRweDtcclxuLy8gICBoZWlnaHQ6IDI0cHg7XHJcbi8vIH1cclxuXHJcbmltZyB7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG59Il19 */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_shared_announcment_announcment_module_ts.js.map