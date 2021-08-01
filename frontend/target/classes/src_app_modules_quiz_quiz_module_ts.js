(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_modules_quiz_quiz_module_ts"],{

/***/ 1761:
/*!***********************************************************!*\
  !*** ./src/app/modules/quiz/components/quiz.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuizComponent": () => (/* binding */ QuizComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 2664);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-pagination */ 2533);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-search-filter */ 4981);






function QuizComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h5", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " 12 Best result ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Play");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const quiz_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", quiz_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("-", quiz_r1.quizType, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", quiz_r1.description, " ");
} }
const _c0 = function (a1) { return { itemsPerPage: 12, currentPage: a1 }; };
class QuizComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.p = 1;
    }
    ngOnInit() {
        this.quizzes = [
            {
                quizId: 0,
                title: 'Title',
                description: 'scriptiondescriptscriptiondescriptiondescriptionscriptiondescriptiondescriptionscriptiondescriptiondescriptionscriptiondescriptiondescriptionscriptiondescriptiondescriptionscriptiondescriptiondescriptionscriptiondescriptiondescriptionscriptiondescriptiondescriptionscriptiondescriptiondescriptionscriptiondescriptiondescriptioniondescription',
                quizType: 'Quiz type',
                creationDate: Date,
                authorId: 12,
                questions: [
                    {
                        questionId: 12,
                        questionText: 'questionText',
                        questionType: 'history',
                        answers: [
                            {
                                answerId: 12,
                                value: 'text of answer',
                                answer: true,
                                questionId: 12
                            }
                        ]
                    }
                ]
            },
            {
                quizId: 0,
                title: 'Title',
                description: 'scriptiondescriptscriptiondescriptiondescriptionscriptiondescriptiondescriptionscriptiondescriptiondescriptionscriptiondescriptiondescriptionscriptiondescriptiondescriptionscriptiondescriptiondescriptionscriptiondescriptiondescriptionscriptiondescriptiondescriptionscriptiondescriptiondescriptionscriptiondescriptiondescriptioniondescription',
                quizType: 'Quiz type',
                creationDate: Date,
                authorId: 12,
                questions: [
                    {
                        questionId: 12,
                        questionText: 'questionText',
                        questionType: 'history',
                        answers: [
                            {
                                answerId: 12,
                                value: 'text of answer',
                                answer: true,
                                questionId: 12
                            }
                        ]
                    }
                ]
            },
            {
                quizId: 0,
                title: 'Title',
                description: 'description',
                quizType: 12,
                creationDate: Date,
                authorId: 12,
                questions: [
                    {
                        questionId: 12,
                        questionText: 'questionText',
                        questionType: 12,
                        answers: [
                            {
                                answerId: 12,
                                value: 'text of answer',
                                answer: true,
                                questionId: 12
                            }
                        ]
                    }
                ]
            },
            {
                quizId: 0,
                title: 'Title',
                description: 'description',
                quizType: 12,
                creationDate: Date,
                authorId: 12,
                questions: [
                    {
                        questionId: 12,
                        questionText: 'questionText',
                        questionType: 12,
                        answers: [
                            {
                                answerId: 12,
                                value: 'text of answer',
                                answer: true,
                                questionId: 12
                            }
                        ]
                    }
                ]
            },
            {
                quizId: 0,
                title: 'Title',
                description: 'description',
                quizType: 12,
                creationDate: Date,
                authorId: 12,
                questions: [
                    {
                        questionId: 12,
                        questionText: 'questionText',
                        questionType: 12,
                        answers: [
                            {
                                answerId: 12,
                                value: 'text of answer',
                                answer: true,
                                questionId: 12
                            }
                        ]
                    }
                ]
            },
            // 
        ];
        // this.getquiz();
    }
    getQuiz() {
        // this.quizService.getList().subscribe(quiz => this.quiz = quiz);
    }
    createQuiz() {
        //   const modalRef = this.modalService.open(CreateQuizComponent, { centered: true });
        //   modalRef.closed.pipe(
        //     switchMap(quiz => this.quizService.createOne(quiz))
        //   ).subscribe(() =>
        //     this.getquiz()
        //   );
    }
}
QuizComponent.ɵfac = function QuizComponent_Factory(t) { return new (t || QuizComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModal)); };
QuizComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: QuizComponent, selectors: [["app-quiz"]], decls: 17, vars: 10, consts: [[1, "m-5"], [1, "col-xl-4", "col-6"], [1, "mb-5", "input-group", "input-group-merge"], ["type", "search", "placeholder", "Search project", 1, "form-control", "col-6", 3, "ngModel", "ngModelChange"], [1, "input-group-append"], [1, "input-group-text"], ["src", "/assets/images/icons/search_black_24dp.svg", "alt", "search", 1, "svg"], [1, "row", "flex-wrap", "card-deck"], ["class", "col-12 col-xl-3 col-lg-4 col-md-6 mb-3 d-flex align-items-stretch", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-between"], [3, "pageChange"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], [1, "col-12", "col-xl-3", "col-lg-4", "col-md-6", "mb-3", "d-flex", "align-items-stretch"], [1, "card", "w-100", "p-4"], [1, "card-body"], [1, "card-title", "text-center"], [1, "card-text"], [1, "card-text", "description"], [1, "text-muted"], [1, "text-end"], ["src", "/assets/images/icons/cup_black_24dp.svg"], [1, "btn", "btn-outline-primary", "w-100"]], template: function QuizComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function QuizComponent_Template_input_ngModelChange_3_listener($event) { return ctx.term = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "All Quizzes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, QuizComponent_div_10_Template, 16, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "pagination-controls", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("pageChange", function QuizComponent_Template_pagination_controls_pageChange_14_listener($event) { return ctx.p = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QuizComponent_Template_button_click_15_listener() { return ctx.createQuiz(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Create Announcement");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.term);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](11, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](12, 5, ctx.quizzes, ctx.term), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](8, _c0, ctx.p)));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, ngx_pagination__WEBPACK_IMPORTED_MODULE_0__.PaginationControlsComponent], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_0__.PaginatePipe, ng2_search_filter__WEBPACK_IMPORTED_MODULE_1__.Ng2SearchPipe], styles: [".svg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n}\n\n.description[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow-y: hidden;\n}\n\n[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n\n.card[_ngcontent-%COMP%] {\n  min-height: 306px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1aXouY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGIiwiZmlsZSI6InF1aXouY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3ZnIGltZyB7XHJcbiAgd2lkdGg6IDIycHg7XHJcbiAgaGVpZ2h0OiAyMnB4O1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XHJcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbn1cclxuXHJcbjpob3N0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIG1pbi1oZWlnaHQ6IDMwNnB4O1xyXG59Il19 */"] });


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _components_quiz_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/quiz.component */ 1761);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);




const routes = [
    { path: '', component: _components_quiz_component__WEBPACK_IMPORTED_MODULE_0__.QuizComponent },
];
class QuizRoutingModule {
}
QuizRoutingModule.ɵfac = function QuizRoutingModule_Factory(t) { return new (t || QuizRoutingModule)(); };
QuizRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: QuizRoutingModule });
QuizRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](QuizRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _quiz_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quiz-routing.module */ 192);
/* harmony import */ var _components_quiz_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/quiz.component */ 1761);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-pagination */ 2533);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-search-filter */ 4981);
/* harmony import */ var _angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/locales/ru */ 4027);
/* harmony import */ var _angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);








(0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.registerLocaleData)((_angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_4___default()), 'ru');
class QuizModule {
}
QuizModule.ɵfac = function QuizModule_Factory(t) { return new (t || QuizModule)(); };
QuizModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: QuizModule });
QuizModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _quiz_routing_module__WEBPACK_IMPORTED_MODULE_0__.QuizRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            ngx_pagination__WEBPACK_IMPORTED_MODULE_2__.NgxPaginationModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__.Ng2SearchPipeModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](QuizModule, { declarations: [_components_quiz_component__WEBPACK_IMPORTED_MODULE_1__.QuizComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _quiz_routing_module__WEBPACK_IMPORTED_MODULE_0__.QuizRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        ngx_pagination__WEBPACK_IMPORTED_MODULE_2__.NgxPaginationModule,
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__.Ng2SearchPipeModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_modules_quiz_quiz_module_ts.js.map