(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_modules_quiz_quiz_module_ts"],{

/***/ 6604:
/*!******************************************************************************************!*\
  !*** ./src/app/modules/quiz/components/create-quiz-title/create-quiz-title.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateQuizTitleComponent": () => (/* binding */ CreateQuizTitleComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_models_quiz__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/quiz */ 3698);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _quiz_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../quiz.guard */ 9491);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);







function CreateQuizTitleComponent_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const exampleQuiz_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", exampleQuiz_r1.value, " ");
} }
class CreateQuizTitleComponent {
    constructor(fb, router, quizGuard) {
        this.fb = fb;
        this.router = router;
        this.quizGuard = quizGuard;
        this.quizTypes = src_app_models_quiz__WEBPACK_IMPORTED_MODULE_0__.QuizType;
        this.createQuizForm = this.fb.group({
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            quizType: [this.quizTypes.GEOGRAPHICAL, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            authorId: [401]
        });
    }
    ngOnInit() {
    }
    onSubmit() {
        if (this.createQuizForm.valid) {
            this.quizGuard.data = true;
            this.router.navigate(['/quiz/quiz-questions', { data: JSON.stringify(this.createQuizForm.value) }]);
        }
        else {
            console.log('not valid');
        }
    }
}
CreateQuizTitleComponent.ɵfac = function CreateQuizTitleComponent_Factory(t) { return new (t || CreateQuizTitleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_quiz_guard__WEBPACK_IMPORTED_MODULE_1__.QuizGuard)); };
CreateQuizTitleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CreateQuizTitleComponent, selectors: [["app-create-quiz-title"]], decls: 23, vars: 4, consts: [[1, "m-5", 3, "formGroup", "ngSubmit"], [1, "mb-4", "text-center"], [1, "d-flex", "justify-content-between"], [1, "d-flex", "mb-4"], [1, "h4", "text__input", "me-4"], ["type", "text", "formControlName", "title", 1, "form-control"], ["formControlName", "quizType", 1, "w-50"], [4, "ngFor", "ngForOf"], ["cols", "50", "rows", "5", "formControlName", "description", 1, "form-control"], [1, "d-flex"], [1, "text__input", "me-4"], ["type", "submit", 1, "btn", "btn-outline-primary", "w-25"]], template: function CreateQuizTitleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function CreateQuizTitleComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Create quiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Title ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Quiz type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, CreateQuizTitleComponent_option_13_Template, 2, 1, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Description ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "textarea", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.createQuizForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 2, ctx.quizTypes));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.KeyValuePipe], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.text__input[_ngcontent-%COMP%] {\n  flex: 0 0 131px;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  resize: none;\n}\n\nselect[_ngcontent-%COMP%] {\n  background-color: #F6FAF8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1xdWl6LXRpdGxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0YiLCJmaWxlIjoiY3JlYXRlLXF1aXotdGl0bGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4udGV4dF9faW5wdXQge1xyXG4gIGZsZXg6IDAgMCAxMzFweDtcclxufVxyXG5cclxudGV4dGFyZWEgeyBcclxuICByZXNpemU6IG5vbmU7IFxyXG59XHJcblxyXG5zZWxlY3Qge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNkZBRjg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 5103:
/*!****************************************************************!*\
  !*** ./src/app/modules/quiz/components/quiz/quiz.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuizComponent": () => (/* binding */ QuizComponent)
/* harmony export */ });
/* harmony import */ var src_app_models_quiz__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/quiz */ 3698);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_shared_services_quiz_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/quiz.service */ 328);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_shared_components_categories_btn_categories_btn_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/components/categories-btn/categories-btn.component */ 790);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-pagination */ 2533);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-search-filter */ 4981);










function QuizComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h5", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, " 12 Best result ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, " Play ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const quiz_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", quiz_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("-", quiz_r1.quizType, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", quiz_r1.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", quiz_r1.title);
} }
const _c0 = function (a1) { return { itemsPerPage: 12, currentPage: a1 }; };
class QuizComponent {
    constructor(quizService, router, http) {
        this.quizService = quizService;
        this.router = router;
        this.http = http;
        this.p = 1;
        this.quizType = src_app_models_quiz__WEBPACK_IMPORTED_MODULE_0__.QuizType;
    }
    ngOnInit() {
        this.getQuizzes();
    }
    onSelect(type) {
        console.log(type);
        this.http.get(`quiz/filter?QUIZTYPE_MATH`).subscribe((v) => console.log(v));
        // parseInt(id, 10) !== 0 ? this.getProjects(`?categories.id_eq=${id}`) : this.getProjects();
    }
    getQuizzes() {
        this.quizService.getList().subscribe(quiz => this.quizzes = quiz);
    }
    createQuiz() {
        this.router.navigateByUrl('quiz/create-quiz');
    }
}
QuizComponent.ɵfac = function QuizComponent_Factory(t) { return new (t || QuizComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_quiz_service__WEBPACK_IMPORTED_MODULE_1__.quizService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient)); };
QuizComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: QuizComponent, selectors: [["app-quiz"]], decls: 20, vars: 11, consts: [[1, "m-5"], [1, "d-flex", "justify-content-between"], [1, "col-xl-4", "col-6"], [1, "mb-5", "input-group", "input-group-merge"], ["type", "search", "placeholder", "Search project", 1, "form-control", "col-6", 3, "ngModel", "ngModelChange"], [1, "input-group-append"], [1, "input-group-text"], ["src", "/assets/images/icons/search_black_24dp.svg", "alt", "search", 1, "svg"], [3, "quizType", "OnSelect"], [1, "mb-5"], [1, "row", "flex-wrap", "card-deck"], ["class", "col-12 col-xl-3 col-lg-4 col-md-6 mb-3 d-flex align-items-stretch", 4, "ngFor", "ngForOf"], [3, "pageChange"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], [1, "col-12", "col-xl-3", "col-lg-4", "col-md-6", "mb-3", "d-flex", "align-items-stretch"], [1, "card", "w-100", "p-4"], [1, "card-body"], [1, "card-title", "text-center"], [1, "card-text"], [1, "card-text", "description"], [1, "text-muted"], [1, "text-end"], ["src", "/assets/images/icons/cup_black_24dp.svg"], [1, "btn", "btn-outline-primary", "w-100", 3, "routerLink"]], template: function QuizComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function QuizComponent_Template_input_ngModelChange_4_listener($event) { return ctx.term = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "app-categories-btn", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("OnSelect", function QuizComponent_Template_app_categories_btn_OnSelect_9_listener($event) { return ctx.onSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "All Quizzes");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, QuizComponent_div_13_Template, 16, 4, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](14, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](15, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "pagination-controls", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("pageChange", function QuizComponent_Template_pagination_controls_pageChange_17_listener($event) { return ctx.p = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function QuizComponent_Template_button_click_18_listener() { return ctx.createQuiz(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Create Quiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.term);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("quizType", ctx.quizType);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](14, 3, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](15, 6, ctx.quizzes, ctx.term), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](9, _c0, ctx.p)));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, src_app_shared_components_categories_btn_categories_btn_component__WEBPACK_IMPORTED_MODULE_2__.CategoriesBtnComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, ngx_pagination__WEBPACK_IMPORTED_MODULE_3__.PaginationControlsComponent, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_3__.PaginatePipe, ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__.Ng2SearchPipe], styles: [".svg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n}\n\n.description[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow-y: hidden;\n}\n\n[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.card[_ngcontent-%COMP%] {\n  min-height: 306px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1aXouY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRiIsImZpbGUiOiJxdWl6LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN2ZyBpbWcge1xyXG4gIHdpZHRoOiAyMnB4O1xyXG4gIGhlaWdodDogMjJweDtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xyXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG59XHJcblxyXG46aG9zdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgbWluLWhlaWdodDogMzA2cHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 192:
/*!*****************************************************!*\
  !*** ./src/app/modules/quiz/quiz-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuizRoutingModule": () => (/* binding */ QuizRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _components_create_quiz_title_create_quiz_title_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/create-quiz-title/create-quiz-title.component */ 6604);
/* harmony import */ var _components_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/quiz/quiz.component */ 5103);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);





const routes = [
    { path: '', component: _components_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_1__.QuizComponent },
    { path: 'create-quiz', component: _components_create_quiz_title_create_quiz_title_component__WEBPACK_IMPORTED_MODULE_0__.CreateQuizTitleComponent }
    // { path: ':id', component: QuizGameComponent }
];
class QuizRoutingModule {
}
QuizRoutingModule.ɵfac = function QuizRoutingModule_Factory(t) { return new (t || QuizRoutingModule)(); };
QuizRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: QuizRoutingModule });
QuizRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](QuizRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 9628:
/*!*********************************************!*\
  !*** ./src/app/modules/quiz/quiz.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuizModule": () => (/* binding */ QuizModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _quiz_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quiz-routing.module */ 192);
/* harmony import */ var _components_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/quiz/quiz.component */ 5103);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-pagination */ 2533);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-search-filter */ 4981);
/* harmony import */ var _angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/locales/ru */ 4027);
/* harmony import */ var _angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_create_quiz_title_create_quiz_title_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/create-quiz-title/create-quiz-title.component */ 6604);
/* harmony import */ var _components_quiz_questions_quiz_questions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/quiz-questions/quiz-questions.component */ 7163);
/* harmony import */ var src_app_shared_components_categories_btn_categories_btn_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/components/categories-btn/categories-btn.component */ 790);
/* harmony import */ var _components_quiz_game_quiz_game_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/quiz-game/quiz-game.component */ 1676);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);












(0,_angular_common__WEBPACK_IMPORTED_MODULE_9__.registerLocaleData)((_angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_4___default()), 'ru');
class QuizModule {
}
QuizModule.ɵfac = function QuizModule_Factory(t) { return new (t || QuizModule)(); };
QuizModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: QuizModule });
QuizModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _quiz_routing_module__WEBPACK_IMPORTED_MODULE_0__.QuizRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            ngx_pagination__WEBPACK_IMPORTED_MODULE_2__.NgxPaginationModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__.Ng2SearchPipeModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](QuizModule, { declarations: [_components_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_1__.QuizComponent,
        _components_create_quiz_title_create_quiz_title_component__WEBPACK_IMPORTED_MODULE_5__.CreateQuizTitleComponent,
        _components_quiz_questions_quiz_questions_component__WEBPACK_IMPORTED_MODULE_6__.QuizQuestionsComponent,
        src_app_shared_components_categories_btn_categories_btn_component__WEBPACK_IMPORTED_MODULE_7__.CategoriesBtnComponent,
        _components_quiz_game_quiz_game_component__WEBPACK_IMPORTED_MODULE_8__.QuizGameComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _quiz_routing_module__WEBPACK_IMPORTED_MODULE_0__.QuizRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
        ngx_pagination__WEBPACK_IMPORTED_MODULE_2__.NgxPaginationModule,
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__.Ng2SearchPipeModule] }); })();


/***/ }),

/***/ 790:
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/categories-btn/categories-btn.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesBtnComponent": () => (/* binding */ CategoriesBtnComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);





function CategoriesBtnComponent_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", category_r1.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r1.value);
} }
class CategoriesBtnComponent {
    constructor(fb) {
        this.fb = fb;
        this.OnSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.categoriesControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('0');
    }
    ngOnInit() {
        this.categoriesControl.valueChanges.subscribe(val => this.OnSelect.emit(val));
    }
}
CategoriesBtnComponent.ɵfac = function CategoriesBtnComponent_Factory(t) { return new (t || CategoriesBtnComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder)); };
CategoriesBtnComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategoriesBtnComponent, selectors: [["app-categories-btn"]], inputs: { quizType: "quizType" }, outputs: { OnSelect: "OnSelect" }, decls: 6, vars: 4, consts: [[1, "form-control", 3, "formControl"], ["value", "0", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function CategoriesBtnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0412\u0441\u0435 \u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CategoriesBtnComponent_option_4_Template, 2, 2, "option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.categoriesControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, ctx.quizType));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.KeyValuePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yaWVzLWJ0bi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 328:
/*!*************************************************!*\
  !*** ./src/app/shared/services/quiz.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "quizService": () => (/* binding */ quizService)
/* harmony export */ });
/* harmony import */ var _abstracts_abstract_crud_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstracts/abstract-crud.service */ 7970);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1841);



class quizService extends _abstracts_abstract_crud_service__WEBPACK_IMPORTED_MODULE_0__.AbstractCrudService {
    constructor(http) {
        super(http);
        this.http = http;
        this.path = 'quiz/all';
    }
}
quizService.ɵfac = function quizService_Factory(t) { return new (t || quizService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
quizService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: quizService, factory: quizService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_modules_quiz_quiz_module_ts.js.map