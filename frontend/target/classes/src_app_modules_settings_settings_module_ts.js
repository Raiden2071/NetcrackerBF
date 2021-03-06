(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_modules_settings_settings_module_ts"],{

/***/ 3879:
/*!******************************************************************************************!*\
  !*** ./src/app/modules/settings/components/change-password/change-password.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePasswordComponent": () => (/* binding */ ChangePasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var js_sha256__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-sha256 */ 6854);
/* harmony import */ var js_sha256__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_sha256__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_app_modules_auth_components_recovery_recovery_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/auth/components/recovery/recovery.component */ 7352);
/* harmony import */ var src_app_modules_auth_validators_must_match_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/auth/validators/must-match.validator */ 4156);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_shared_services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/users.service */ 6575);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 2664);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 9344);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _selection_menu_selection_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../selection-menu/selection-menu.component */ 2518);












function ChangePasswordComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("ngSubmit", function ChangePasswordComponent_form_0_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r1.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "h1", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, "Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](7, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](11, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](12, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](13, " Old pass ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](14, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](15, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](16, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](17, " New pass ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](18, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](19, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](20, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](21, " Confirm pass ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](22, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](23, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](24, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](26, "Enter personal information about you. This information will appear on your public profile.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](27, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](28, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](29, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](30, "Send");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](31, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](32, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](33, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function ChangePasswordComponent_form_0_Template_div_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r3.openRecovery(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](34, " Forgot pass? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](35, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](36, "app-selection-menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("formGroup", ctx_r0.changeForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate2"](" ", ctx_r0.user.firstName, " ", ctx_r0.user.lastName, " ");
} }
class ChangePasswordComponent {
    constructor(userService, fb, modal, http, toastr) {
        this.userService = userService;
        this.fb = fb;
        this.modal = modal;
        this.http = http;
        this.toastr = toastr;
        this.changeForm = this.fb.group({
            oldPass: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            newPass: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            confirmPass: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
        }, {
            validator: (0,src_app_modules_auth_validators_must_match_validator__WEBPACK_IMPORTED_MODULE_2__.MustMatch)("newPass", "confirmPass")
        });
    }
    ngOnInit() {
        this.getUser();
    }
    getUser() {
        this.userService.userInfo$.subscribe(user => this.user = user);
    }
    openRecovery() {
        let modalRef = this.modal.open(src_app_modules_auth_components_recovery_recovery_component__WEBPACK_IMPORTED_MODULE_1__.RecoveryComponent, { centered: true });
        modalRef.componentInstance.isModal = true;
    }
    onSubmit() {
        if (this.changeForm.valid) {
            const data = {
                oldPass: (0,js_sha256__WEBPACK_IMPORTED_MODULE_0__.sha256)(this.changeForm.value.oldPass),
                newPass: (0,js_sha256__WEBPACK_IMPORTED_MODULE_0__.sha256)(this.changeForm.value.newPass),
                confirmPass: (0,js_sha256__WEBPACK_IMPORTED_MODULE_0__.sha256)(this.changeForm.value.confirmPass)
            };
            this.http.put(`updatePassword/${this.user.id}`, data).subscribe(() => this.toastr.success(`Congratulations, you have successfully changed your password.`, '', {
                timeOut: 2000,
            }));
        }
    }
}
ChangePasswordComponent.??fac = function ChangePasswordComponent_Factory(t) { return new (t || ChangePasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](src_app_shared_services_users_service__WEBPACK_IMPORTED_MODULE_3__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrService)); };
ChangePasswordComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineComponent"]({ type: ChangePasswordComponent, selectors: [["app-change-password"]], decls: 1, vars: 1, consts: [["class", "m-5", 3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "m-5", 3, "formGroup", "ngSubmit"], [1, "mb-4", "text-center"], [1, "d-flex", "justify-content-between"], [1, "d-flex", "mb-5"], [1, "me-2"], ["src", "/assets/user.jpg", "alt", "user image"], [1, "d-flex", "h4"], [1, "d-flex", "mb-4"], [1, "h4", "text__input", "me-4"], ["type", "password", "formControlName", "oldPass", 1, "form-control"], ["type", "password", "formControlName", "newPass", 1, "form-control"], ["type", "password", "formControlName", "confirmPass", 1, "form-control"], [1, "text__input", "me-4"], ["type", "submit", 1, "btn", "btn-outline-primary", "w-25"], [1, "d-flex"], [1, "recovery", 3, "click"]], template: function ChangePasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](0, ChangePasswordComponent_form_0_Template, 37, 3, "form", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx.user);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _selection_menu_selection_menu_component__WEBPACK_IMPORTED_MODULE_4__.SelectionMenuComponent], styles: ["img[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n}\n\n.text__input[_ngcontent-%COMP%] {\n  flex: 0 0 131px;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  resize: none;\n}\n\n[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.recovery[_ngcontent-%COMP%] {\n  color: #0d6efd;\n  text-decoration: underline;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBQUNGIiwiZmlsZSI6ImNoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG59XHJcblxyXG4udGV4dF9faW5wdXQge1xyXG4gIGZsZXg6IDAgMCAxMzFweDtcclxufVxyXG5cclxudGV4dGFyZWEgeyBcclxuICByZXNpemU6IG5vbmU7IFxyXG59XHJcblxyXG46aG9zdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ucmVjb3Zlcnkge1xyXG4gIGNvbG9yOiAjMGQ2ZWZkO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */"] });


/***/ }),

/***/ 6826:
/*!************************************************************************************!*\
  !*** ./src/app/modules/settings/components/edit-profile/edit-profile.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProfileComponent": () => (/* binding */ EditProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_shared_services_users_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/users.service */ 6575);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _selection_menu_selection_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../selection-menu/selection-menu.component */ 2518);






function EditProfileComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngSubmit", function EditProfileComponent_form_0_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](); return ctx_r1.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "h1", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, "Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](7, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](13, " First name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](14, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](15, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](17, " Last name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](18, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](19, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](20, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](21, " Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](22, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](23, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](24, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](26, "Enter personal information about you. This information will appear on your public profile.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](27, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](28, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](29, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](30, "Send");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](31, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](32, "app-selection-menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("formGroup", ctx_r0.editForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate2"](" ", ctx_r0.user.firstName, " ", ctx_r0.user.lastName, " ");
} }
class EditProfileComponent {
    constructor(fb, userService) {
        this.fb = fb;
        this.userService = userService;
    }
    ngOnInit() {
        this.getUser();
        // ??????????????, ?????? ??????????????????
        this.editForm = this.fb.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            // description: ['', [Validators.required]]
        });
        setTimeout(() => {
            var _a, _b, _c;
            this.editForm = this.fb.group({
                firstName: [(_a = this.user) === null || _a === void 0 ? void 0 : _a.firstName, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
                lastName: [(_b = this.user) === null || _b === void 0 ? void 0 : _b.lastName, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
                email: [(_c = this.user) === null || _c === void 0 ? void 0 : _c.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
                // description: [this.user?.description, [Validators.required]]
            });
        }, 500);
    }
    getUser() {
        this.userService.userInfo$.subscribe(user => this.user = user);
    }
    onSubmit() {
        if (this.editForm.valid) {
            let data = {
                firstName: this.editForm.value.firstName,
                lastName: this.editForm.value.lastName,
            };
            this.userService.editOne(this.user.id, data).subscribe(() => {
                this.userService.userInfo$.subscribe(user => this.user = user);
                this.userService.subject$.next(1);
            });
        }
    }
}
EditProfileComponent.??fac = function EditProfileComponent_Factory(t) { return new (t || EditProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](src_app_shared_services_users_service__WEBPACK_IMPORTED_MODULE_0__.UserService)); };
EditProfileComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: EditProfileComponent, selectors: [["app-edit-profile"]], decls: 1, vars: 1, consts: [["class", "m-5", 3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "m-5", 3, "formGroup", "ngSubmit"], [1, "mb-4", "text-center"], [1, "d-flex", "justify-content-between"], [1, "d-flex", "mb-5"], [1, "me-2"], ["src", "/assets/user.jpg", "alt", "user image"], [1, "d-flex", "h4"], [1, "d-flex", "mb-4"], [1, "h4", "text__input", "me-4"], ["type", "text", "formControlName", "firstName", 1, "form-control"], ["type", "text", "formControlName", "lastName", 1, "form-control"], ["type", "text", "disabled", "", "formControlName", "email", 1, "form-control"], [1, "text__input", "me-4"], [1, "d-flex"], ["type", "submit", 1, "btn", "btn-outline-primary", "w-25"]], template: function EditProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](0, EditProfileComponent_form_0_Template, 33, 3, "form", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.user);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _selection_menu_selection_menu_component__WEBPACK_IMPORTED_MODULE_1__.SelectionMenuComponent], styles: ["img[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n}\n\n.text__input[_ngcontent-%COMP%] {\n  flex: 0 0 131px;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  resize: none;\n}\n\n[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNGIiwiZmlsZSI6ImVkaXQtcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG59XHJcblxyXG4udGV4dF9faW5wdXQge1xyXG4gIGZsZXg6IDAgMCAxMzFweDtcclxufVxyXG5cclxudGV4dGFyZWEgeyBcclxuICByZXNpemU6IG5vbmU7IFxyXG59XHJcblxyXG46aG9zdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59Il19 */"] });


/***/ }),

/***/ 2518:
/*!****************************************************************************************!*\
  !*** ./src/app/modules/settings/components/selection-menu/selection-menu.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectionMenuComponent": () => (/* binding */ SelectionMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);


class SelectionMenuComponent {
    constructor() { }
    ngOnInit() {
    }
}
SelectionMenuComponent.??fac = function SelectionMenuComponent_Factory(t) { return new (t || SelectionMenuComponent)(); };
SelectionMenuComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: SelectionMenuComponent, selectors: [["app-selection-menu"]], decls: 10, vars: 0, consts: [[1, "color"], [1, "nav", "right", "nav-pills", "flex-column", "mb-auto"], [1, "mb-2"], ["routerLink", "/settings/edit", "routerLinkActive", "active", 1, "nav-link", "link-dark"], ["src", "\\assets\\images\\icons\\account_circle_black_24dp.svg", "alt", "image"], ["routerLink", "/settings/password", "routerLinkActive", "active", 1, "nav-link", "link-dark"]], template: function SelectionMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " Edit Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, " Change Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive], styles: [".color[_ngcontent-%COMP%] {\n  background-color: #F8F8F8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdGlvbi1tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUFDRiIsImZpbGUiOiJzZWxlY3Rpb24tbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2xvciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjhGODtcclxufSJdfQ== */"] });


/***/ }),

/***/ 3590:
/*!*************************************************************!*\
  !*** ./src/app/modules/settings/settings-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsRoutingModule": () => (/* binding */ SettingsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/change-password/change-password.component */ 3879);
/* harmony import */ var _components_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/edit-profile/edit-profile.component */ 6826);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);





const routes = [
    { path: '', redirectTo: 'edit' },
    { path: 'password', component: _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_0__.ChangePasswordComponent },
    { path: 'edit', component: _components_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_1__.EditProfileComponent }
];
class SettingsRoutingModule {
}
SettingsRoutingModule.??fac = function SettingsRoutingModule_Factory(t) { return new (t || SettingsRoutingModule)(); };
SettingsRoutingModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineNgModule"]({ type: SettingsRoutingModule });
SettingsRoutingModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["????setNgModuleScope"](SettingsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 3402:
/*!*****************************************************!*\
  !*** ./src/app/modules/settings/settings.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsModule": () => (/* binding */ SettingsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-routing.module */ 3590);
/* harmony import */ var _components_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/edit-profile/edit-profile.component */ 6826);
/* harmony import */ var _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/change-password/change-password.component */ 3879);
/* harmony import */ var _components_selection_menu_selection_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/selection-menu/selection-menu.component */ 2518);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 2664);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);








// ChangePasswordComponent
class SettingsModule {
}
SettingsModule.??fac = function SettingsModule_Factory(t) { return new (t || SettingsModule)(); };
SettingsModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineNgModule"]({ type: SettingsModule });
SettingsModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjector"]({ providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbActiveModal], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettingsRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["????setNgModuleScope"](SettingsModule, { declarations: [_components_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_1__.EditProfileComponent, _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_2__.ChangePasswordComponent, _components_selection_menu_selection_menu_component__WEBPACK_IMPORTED_MODULE_3__.SelectionMenuComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettingsRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_modules_settings_settings_module_ts.js.map
