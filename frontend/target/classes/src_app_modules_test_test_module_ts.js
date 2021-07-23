(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_modules_test_test_module_ts"],{

/***/ 4925:
/*!***********************************************************!*\
  !*** ./src/app/modules/test/components/test.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestComponent": () => (/* binding */ TestComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class TestComponent {
    constructor() { }
    ngOnInit() {
    }
}
TestComponent.ɵfac = function TestComponent_Factory(t) { return new (t || TestComponent)(); };
TestComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TestComponent, selectors: [["app-test"]], decls: 3, vars: 0, template: function TestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Hello world!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "111");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 3555:
/*!*****************************************************!*\
  !*** ./src/app/modules/test/test-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestRoutingModule": () => (/* binding */ TestRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _components_test_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/test.component */ 4925);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);




const routes = [
    { path: '', component: _components_test_component__WEBPACK_IMPORTED_MODULE_0__.TestComponent },
];
class TestRoutingModule {
}
TestRoutingModule.ɵfac = function TestRoutingModule_Factory(t) { return new (t || TestRoutingModule)(); };
TestRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TestRoutingModule });
TestRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TestRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 1434:
/*!*********************************************!*\
  !*** ./src/app/modules/test/test.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestModule": () => (/* binding */ TestModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _test_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test-routing.module */ 3555);
/* harmony import */ var _components_test_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/test.component */ 4925);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);




class TestModule {
}
TestModule.ɵfac = function TestModule_Factory(t) { return new (t || TestModule)(); };
TestModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: TestModule });
TestModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _test_routing_module__WEBPACK_IMPORTED_MODULE_0__.TestRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TestModule, { declarations: [_components_test_component__WEBPACK_IMPORTED_MODULE_1__.TestComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _test_routing_module__WEBPACK_IMPORTED_MODULE_0__.TestRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_modules_test_test_module_ts.js.map