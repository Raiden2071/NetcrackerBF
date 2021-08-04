(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_modules_announcement_announcment_module_ts"],{

/***/ 4085:
/*!******************************************************************************!*\
  !*** ./src/app/modals/create-announcement/components/create-announcement.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateAnnouncementComponent": () => (/* binding */ CreateAnnouncementComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 2664);




// import { User } from 'src/app/models/user';
// import { announcementService } from 'src/app/shared/services/announcement.service';
// import { UserService } from 'src/app/shared/services/users.service';
class CreateAnnouncementComponent {
    constructor(fb, activeModal) {
        this.fb = fb;
        this.activeModal = activeModal;
    }
    ngOnInit() {
        // this.getUser();
        // delete owner and date
        this.annoucementForm = this.fb.group({
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
            address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]]
        });
    }
    // getUser() {
    //   this.userService.userInfo$.subscribe(user => this.user = user);
    // }
    addAnnouncement() {
        console.log(this.annoucementForm.value);
        this.activeModal.close(this.annoucementForm.value);
    }
    close() {
        this.activeModal.close();
    }
}
CreateAnnouncementComponent.ɵfac = function CreateAnnouncementComponent_Factory(t) { return new (t || CreateAnnouncementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbActiveModal)); };
CreateAnnouncementComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CreateAnnouncementComponent, selectors: [["app-create-announcment"]], decls: 14, vars: 1, consts: [[1, "m-5", 3, "formGroup", "ngSubmit"], [1, "mb-4"], [1, "form-group", "mb-3"], ["for", "title"], ["type", "text", "formControlName", "title", "placeholder", "Enter title", 1, "form-control"], [1, "form-group", "mb-4"], ["for", "description"], ["formControlName", "description", "cols", "20", "rows", "5", "placeholder", "Enter description...", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "w-100"], ["src", "/assets/images/icons/close_black_24dp.svg", 1, "cancel", 3, "click"]], template: function CreateAnnouncementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function CreateAnnouncementComponent_Template_form_ngSubmit_0_listener() { return ctx.addAnnouncement(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Create announcement");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Promise");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreateAnnouncementComponent_Template_img_click_13_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.annoucementForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlName], styles: ["textarea[_ngcontent-%COMP%] {\n  resize: none;\n}\n\n.cancel[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 15px;\n  top: 15px;\n  width: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1hbm5vdW5jZW1lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBQ0YiLCJmaWxlIjoiY3JlYXRlLWFubm91bmNlbWVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGV4dGFyZWEgeyBcclxuICByZXNpemU6IG5vbmU7IFxyXG59XHJcblxyXG4uY2FuY2VsIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDE1cHg7XHJcbiAgdG9wOiAgIDE1cHg7XHJcbiAgd2lkdGg6IDI0cHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 9868:
/*!********************************************************************!*\
  !*** ./src/app/modules/announcement/announcment-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnouncmentRoutingModule": () => (/* binding */ AnnouncmentRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _components_announcment_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/announcment.component */ 5989);
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

/***/ 1892:
/*!************************************************************!*\
  !*** ./src/app/modules/announcement/announcment.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnouncmentModule": () => (/* binding */ AnnouncmentModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _announcment_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./announcment-routing.module */ 9868);
/* harmony import */ var _components_announcment_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/announcment.component */ 5989);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-pagination */ 2533);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-search-filter */ 4981);
/* harmony import */ var src_app_modals_create_announcement_components_create_announcement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modals/create-announcement/components/create-announcement */ 4085);
/* harmony import */ var _angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/locales/ru */ 4027);
/* harmony import */ var _angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);









(0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.registerLocaleData)((_angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_5___default()), 'ru');
class AnnouncmentModule {
}
AnnouncmentModule.ɵfac = function AnnouncmentModule_Factory(t) { return new (t || AnnouncmentModule)(); };
AnnouncmentModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AnnouncmentModule });
AnnouncmentModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _announcment_routing_module__WEBPACK_IMPORTED_MODULE_0__.AnnouncmentRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            ngx_pagination__WEBPACK_IMPORTED_MODULE_2__.NgxPaginationModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__.Ng2SearchPipeModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AnnouncmentModule, { declarations: [_components_announcment_component__WEBPACK_IMPORTED_MODULE_1__.AnnouncmentComponent, src_app_modals_create_announcement_components_create_announcement__WEBPACK_IMPORTED_MODULE_4__.CreateAnnouncementComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _announcment_routing_module__WEBPACK_IMPORTED_MODULE_0__.AnnouncmentRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        ngx_pagination__WEBPACK_IMPORTED_MODULE_2__.NgxPaginationModule,
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__.Ng2SearchPipeModule] }); })();


/***/ }),

/***/ 5989:
/*!**************************************************************************!*\
  !*** ./src/app/modules/announcement/components/announcment.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnouncmentComponent": () => (/* binding */ AnnouncmentComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 3190);
/* harmony import */ var src_app_modals_create_announcement_components_create_announcement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/modals/create-announcement/components/create-announcement */ 4085);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 2664);
/* harmony import */ var src_app_shared_services_announcement_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/announcement.service */ 2188);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-pagination */ 2533);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-search-filter */ 4981);









function AnnouncmentComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](18, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const annoucement_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](annoucement_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("by ", annoucement_r1.owner.firstName, " ", annoucement_r1.owner.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", annoucement_r1.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](18, 7, annoucement_r1 == null ? null : annoucement_r1.date, "yyyy.MM.dd"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](annoucement_r1 == null ? null : annoucement_r1.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](annoucement_r1 == null ? null : annoucement_r1.likes);
} }
const _c0 = function (a1) { return { itemsPerPage: 12, currentPage: a1 }; };
class AnnouncmentComponent {
    constructor(modalService, announcementService) {
        this.modalService = modalService;
        this.announcementService = announcementService;
        this.p = 1;
    }
    ngOnInit() {
        this.getAnnouncement();
    }
    getAnnouncement() {
        this.announcementService.getList().subscribe(announcement => this.announcements = announcement);
    }
    createAnnouncement() {
        const modalRef = this.modalService.open(src_app_modals_create_announcement_components_create_announcement__WEBPACK_IMPORTED_MODULE_0__.CreateAnnouncementComponent, { centered: true });
        modalRef.closed.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(announcement => this.announcementService.createOne(announcement))).subscribe(() => this.getAnnouncement());
    }
}
AnnouncmentComponent.ɵfac = function AnnouncmentComponent_Factory(t) { return new (t || AnnouncmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_announcement_service__WEBPACK_IMPORTED_MODULE_1__.announcementService)); };
AnnouncmentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AnnouncmentComponent, selectors: [["app-announcment"]], decls: 17, vars: 10, consts: [[1, "m-5"], [1, "col-xl-4", "col-6"], [1, "mb-5", "input-group", "input-group-merge"], ["type", "search", "placeholder", "Search project", 1, "form-control", "col-6", 3, "ngModel", "ngModelChange"], [1, "input-group-append"], [1, "input-group-text"], ["src", "/assets/images/icons/search_black_24dp.svg", "alt", "search", 1, "svg"], [1, "mb-5"], [1, "row", "flex-wrap", "card-deck"], ["class", "col-12 col-lg-6 col-xl-4 mb-3 d-flex align-items-stretch", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-between"], [3, "pageChange"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], [1, "col-12", "col-lg-6", "col-xl-4", "mb-3", "d-flex", "align-items-stretch"], [1, "card", "w-100"], [1, "card-body", "d-flex", "body"], [1, "d-flex", "flex-column", "col-10"], [1, "d-flex", "mb-2", "image"], ["src", "/assets/user.jpg", "alt", "image", 1, "me-2"], [1, "description"], [1, "d-flex", "flex-column", "justify-content-between", "col-2", "second__card"], [1, "d-flex", "word-wrap", "svg"], ["src", "/assets/images/icons/today_black_24dp.svg", "alt", "date", 1, "svg", "me-1"], ["src", "/assets/images/icons/location_on_black_24dp.svg", "alt", "date", 1, "svg", "me-1"], ["src", "/assets/images/icons/favorite_border_black_24dp.svg", "alt", "date", 1, "svg", "me-1"]], template: function AnnouncmentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AnnouncmentComponent_Template_input_ngModelChange_3_listener($event) { return ctx.term = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "All Announcment");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, AnnouncmentComponent_div_10_Template, 27, 10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "pagination-controls", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("pageChange", function AnnouncmentComponent_Template_pagination_controls_pageChange_14_listener($event) { return ctx.p = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AnnouncmentComponent_Template_button_click_15_listener() { return ctx.createAnnouncement(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Create Announcement");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.term);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](11, 2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](12, 5, ctx.announcements, ctx.term), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](8, _c0, ctx.p)));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, ngx_pagination__WEBPACK_IMPORTED_MODULE_2__.PaginationControlsComponent], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_2__.PaginatePipe, ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__.Ng2SearchPipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe], styles: [".image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n}\n\n.word-wrap[_ngcontent-%COMP%] {\n  font-size: 12px;\n  word-break: break-all;\n  word-wrap: break-word;\n}\n\n.svg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n}\n\n.full_card[_ngcontent-%COMP%] {\n  max-height: 450px;\n}\n\n.second__card[_ngcontent-%COMP%] {\n  min-width: 90px;\n}\n\n.description[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: -webkit-box;\n  -webkit-line-clamp: 4;\n  -webkit-box-orient: vertical;\n  overflow-y: hidden;\n}\n\n[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFubm91bmNtZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDRiIsImZpbGUiOiJhbm5vdW5jbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZSBpbWcge1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuLndvcmQtd3JhcCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn1cclxuXHJcbi5zdmcgaW1nIHtcclxuICB3aWR0aDogMjJweDtcclxuICBoZWlnaHQ6IDIycHg7XHJcbn1cclxuXHJcbi5mdWxsX2NhcmQge1xyXG4gIG1heC1oZWlnaHQ6IDQ1MHB4O1xyXG59XHJcblxyXG4uc2Vjb25kX19jYXJkIHtcclxuICBtaW4td2lkdGg6IDkwcHg7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIC13ZWJraXQtbGluZS1jbGFtcDogNDtcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcclxufVxyXG5cclxuOmhvc3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ 2188:
/*!*********************************************************!*\
  !*** ./src/app/shared/services/announcement.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "announcementService": () => (/* binding */ announcementService)
/* harmony export */ });
/* harmony import */ var _abstracts_abstract_crud_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstracts/abstract-crud.service */ 7970);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1841);



class announcementService extends _abstracts_abstract_crud_service__WEBPACK_IMPORTED_MODULE_0__.AbstractCrudService {
    constructor(http) {
        super(http);
        this.http = http;
        this.path = 'announcements';
    }
}
announcementService.ɵfac = function announcementService_Factory(t) { return new (t || announcementService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
announcementService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: announcementService, factory: announcementService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_modules_announcement_announcment_module_ts.js.map