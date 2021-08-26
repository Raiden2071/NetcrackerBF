(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/layout.component */ 6674);
/* harmony import */ var _modules_auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/auth/auth.guard */ 2803);
/* harmony import */ var _modules_quiz_components_quiz_game_quiz_game_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/quiz/components/quiz-game/quiz-game.component */ 1676);
/* harmony import */ var _modules_quiz_components_quiz_questions_quiz_questions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/quiz/components/quiz-questions/quiz-questions.component */ 7163);
/* harmony import */ var _modules_quiz_quiz_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/quiz/quiz.guard */ 9491);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);








const routes = [
    { path: '', pathMatch: 'full', redirectTo: '/auth/login' },
    {
        path: '',
        component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_0__.LayoutComponent,
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'test' },
            // { path: 'profile', loadChildren: () => import('./modules/profile/profile/profile.module').then(m => m.ProfileModule) },
            { path: 'test', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_test_test_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/test/test.module */ 1434)).then(m => m.TestModule) },
            { path: 'dashboard', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_common_locales_ru_js"), __webpack_require__.e("src_app_modules_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/dashboard/dashboard.module */ 8757)).then(m => m.DashboardModule) },
            { path: 'announcement', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_common_locales_ru_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_announcement_announcment_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/announcement/announcment.module */ 1892)).then(m => m.AnnouncmentModule) },
            { path: 'settings', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_js-sha256_src_sha256_js-src_app_modules_auth_components_recovery_recover-570908"), __webpack_require__.e("src_app_modules_settings_settings_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/settings/settings.module */ 3402)).then(m => m.SettingsModule) },
            { path: 'quiz', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_common_locales_ru_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_quiz_quiz_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/quiz/quiz.module */ 9628)).then(m => m.QuizModule) }
        ],
        canActivate: [_modules_auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
    },
    {
        path: 'quiz/quiz-questions', component: _modules_quiz_components_quiz_questions_quiz_questions_component__WEBPACK_IMPORTED_MODULE_3__.QuizQuestionsComponent, canActivate: [_modules_quiz_quiz_guard__WEBPACK_IMPORTED_MODULE_4__.QuizGuard]
    },
    {
        path: 'quiz/:id', component: _modules_quiz_components_quiz_game_quiz_game_component__WEBPACK_IMPORTED_MODULE_2__.QuizGameComponent, canActivate: [_modules_quiz_quiz_guard__WEBPACK_IMPORTED_MODULE_4__.QuizGuard]
    },
    {
        path: 'auth', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_js-sha256_src_sha256_js-src_app_modules_auth_components_recovery_recover-570908"), __webpack_require__.e("src_app_modules_auth_auth_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/auth/auth.module */ 3970)).then(m => m.AuthModule)
    }
    // { path: '**', component: NotFoundComponent }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);


class AppComponent {
    constructor() {
        this.title = 'netcrackerF';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 2664);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _interceptor_token_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interceptor/token.interceptor */ 2569);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 5835);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ 9344);
/* harmony import */ var _shared_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/components/sidebar/sidebar.component */ 6664);
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/layout.component */ 6674);














class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HTTP_INTERCEPTORS, useClass: _interceptor_token_interceptor__WEBPACK_IMPORTED_MODULE_2__.TokenInterceptor, multi: true },
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_5__.LOCALE_ID, useValue: 'ru' }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            ngx_toastr__WEBPACK_IMPORTED_MODULE_11__.ToastrModule.forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _layout_layout_component__WEBPACK_IMPORTED_MODULE_4__.LayoutComponent,
        _shared_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__.SidebarComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_11__.ToastrModule] }); })();


/***/ }),

/***/ 2569:
/*!**************************************************!*\
  !*** ./src/app/interceptor/token.interceptor.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenInterceptor": () => (/* binding */ TokenInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 205);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/auth/services/auth.service */ 2542);





class TokenInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(req, next) {
        req = req.clone({
            url: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL + req.url,
            setHeaders: this.authService.isAuthenticated() ? {
                Authorization: `Bearer ${this.authService.getToken()}`
            } : {}
        });
        return next.handle(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(err => {
            if (err.status === 401 || err.status === 403) {
                // localStorage.clear();
                // sessionStorage.clear();
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(err);
        }));
    }
}
TokenInterceptor.ɵfac = function TokenInterceptor_Factory(t) { return new (t || TokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService)); };
TokenInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: TokenInterceptor, factory: TokenInterceptor.ɵfac });


/***/ }),

/***/ 6674:
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutComponent": () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _shared_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/components/sidebar/sidebar.component */ 6664);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);



class LayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(); };
LayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], decls: 3, vars: 0, consts: [[1, "d-flex", "h-100", "w-100"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_shared_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.SidebarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 3698:
/*!********************************!*\
  !*** ./src/app/models/quiz.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Filter": () => (/* binding */ Filter),
/* harmony export */   "QuizType": () => (/* binding */ QuizType),
/* harmony export */   "QuestionType": () => (/* binding */ QuestionType)
/* harmony export */ });
var Filter;
(function (Filter) {
    Filter["DATE"] = "Date";
    Filter["MATHEMATICS"] = "Mathematics";
    Filter["HISTORIC"] = "History";
    Filter["SCIENCE"] = "Science";
    Filter["GEOGRAPHICAL"] = "Geographical";
    Filter["COMPLETED"] = "Completed";
    Filter["FAVORITES"] = "Favorites";
})(Filter || (Filter = {}));
var QuizType;
(function (QuizType) {
    QuizType["HISTORIC"] = "history";
    QuizType["SCIENCE"] = "science";
    QuizType["GEOGRAPHICAL"] = "geographical";
    QuizType["MATHEMATICS"] = "mathematics";
})(QuizType || (QuizType = {}));
var QuestionType;
(function (QuestionType) {
    QuestionType["FOUR_ANSWERS"] = "Four answers";
    QuestionType["TRUE_FALSE"] = "Two answers";
})(QuestionType || (QuestionType = {}));


/***/ }),

/***/ 2803:
/*!********************************************!*\
  !*** ./src/app/modules/auth/auth.guard.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/auth.service */ 2542);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);



class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate() {
        if (!this.authService.isAuthenticated()) {
            return false;
        }
        return true;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2542:
/*!*******************************************************!*\
  !*** ./src/app/modules/auth/services/auth.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 8307);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1841);



class AuthService {
    constructor(http) {
        this.http = http;
    }
    login(data, remember) {
        return this.http.post('auth/local', data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.tap)(authResponse => this.setTokens(authResponse, remember)));
    }
    // поменяй any!
    register(data) {
        return this.http.post('auth/local/register', data);
    }
    forgotPassword(email) {
        return this.http.post('auth/recover', email);
    }
    setTokens(authResponse, remember) {
        if (remember) {
            localStorage.setItem('access_token', authResponse.jwt);
        }
        else {
            sessionStorage.setItem('access_token', authResponse.jwt);
        }
    }
    isAuthenticated() {
        return Boolean(localStorage.getItem('access_token') || Boolean(sessionStorage.getItem('access_token')));
    }
    getToken() {
        var _a;
        return (_a = localStorage.getItem('access_token')) !== null && _a !== void 0 ? _a : sessionStorage.getItem('access_token');
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1676:
/*!**************************************************************************!*\
  !*** ./src/app/modules/quiz/components/quiz-game/quiz-game.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuizGameComponent": () => (/* binding */ QuizGameComponent)
/* harmony export */ });
/* harmony import */ var src_app_models_quiz__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/quiz */ 3698);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var src_app_shared_services_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/users.service */ 6575);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 9344);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8583);








const _c0 = function (a0, a1, a2) { return { size__color: a0, size__error: a1, size__green: a2 }; };
function QuizGameComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QuizGameComponent_div_9_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const i_r3 = restoredCtx.index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); ctx_r4.currentQuiz = i_r3; return ctx_r4.changeCurrentQuiz(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](1, _c0, ctx_r0.currentQuiz == i_r3, ctx_r0.correctAnswer[i_r3] == undefined && ctx_r0.showErrors, ctx_r0.correctAnswer[i_r3] && ctx_r0.showErrors));
} }
const _c1 = function (a0) { return { green: a0 }; };
function QuizGameComponent_div_36_div_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QuizGameComponent_div_36_div_1_div_1_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const j_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index; const quiz_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r14.changeAnswer(j_r11, quiz_r6.answers); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answer_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c1, answer_r10.answer == "TRUE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", answer_r10.value, " ");
} }
const _c2 = function (a0, a1) { return { size__green: a0, size__error: a1 }; };
function QuizGameComponent_div_36_div_1_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answer_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](2, _c2, answer_r10.answer == "TRUE", answer_r10.answer == "SELECTED"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", answer_r10.value, " ");
} }
function QuizGameComponent_div_36_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, QuizGameComponent_div_36_div_1_div_1_div_1_Template, 2, 4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, QuizGameComponent_div_36_div_1_div_1_div_2_Template, 2, 5, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r9.quizPassed);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r9.quizPassed);
} }
function QuizGameComponent_div_36_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, QuizGameComponent_div_36_div_1_div_1_Template, 3, 2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const quiz_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", quiz_r6.answers);
} }
const _c3 = function (a0) { return { heigth: a0 }; };
function QuizGameComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, QuizGameComponent_div_36_div_1_Template, 2, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r7 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c3, ctx_r1.currentQuiz == i_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.currentQuiz === i_r7);
} }
class QuizGameComponent {
    constructor(route, http, userService, toastr) {
        this.route = route;
        this.http = http;
        this.userService = userService;
        this.toastr = toastr;
        this.questionTypes = src_app_models_quiz__WEBPACK_IMPORTED_MODULE_0__.QuizType;
        this.currentQuiz = 0;
        this.quizPassed = false;
        this.correctAnswer = [];
        this.showErrors = false;
    }
    ngOnInit() {
        this.getUser();
        this.route.paramMap.subscribe((quiz) => this.quizTitle = quiz.params.id);
        this.http.get(`quiz/game/${this.quizTitle}`).subscribe((quiz) => this.quizData = quiz);
    }
    previous() {
        if (this.currentQuiz >= 1) {
            this.currentQuiz--;
        }
        this.changeCurrentQuiz();
    }
    next() {
        if (this.currentQuiz <= 8) {
            this.currentQuiz++;
        }
        this.changeCurrentQuiz();
    }
    changeAnswer(index, quiz) {
        quiz.forEach(v => v.answer = "FALSE");
        quiz[index].answer = "TRUE";
    }
    getUser() {
        this.userService.userInfo$.subscribe((user) => this.user = user);
    }
    logOut() {
        localStorage.removeItem('access_token');
        sessionStorage.removeItem('access_token');
    }
    // костыль поменяй 
    changeCurrentQuiz() {
        this.showErrors = false;
    }
    click(aaa) {
        console.log(aaa);
    }
    onSubmit() {
        this.correctAnswer = this.quizData.questions.map(quiz => {
            let firstAnswer = quiz.answers.filter((quiz) => quiz.answer == "TRUE");
            return firstAnswer[0];
        });
        let searchError = this.correctAnswer.every(data => (data === null || data === void 0 ? void 0 : data.answer) == "TRUE"); //проверка на пустоту    
        if (searchError) {
            let data = Object.assign({ user: this.user }, { quizTitle: this.quizTitle }, { answers: this.correctAnswer });
            this.http.post('quiz/game/end', data).subscribe(v => {
                console.log(v);
                this.quizData.questions = v;
                this.quizPassed = true;
                this.toastr.success('Congratulations, you have successfully passed a quiz.', '');
            });
        }
        else {
            console.log('not valid');
            this.showErrors = true;
        }
    }
}
QuizGameComponent.ɵfac = function QuizGameComponent_Factory(t) { return new (t || QuizGameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_users_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService)); };
QuizGameComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: QuizGameComponent, selectors: [["app-quiz-game"]], decls: 37, vars: 4, consts: [[1, "d-flex", "justify-content-between", "h-100", 3, "ngSubmit"], [1, "d-flex", "h-100", "sidebar_color"], [1, "d-flex", "justify-content-between"], [1, "d-flex", "flex-column", "justify-content-between", "mb-5", "w-100"], [1, "d-flex", "flex-column"], [1, "text-center", "blue", "py-3", "mb-4"], [1, "d-flex", "align-items-center", "flex-wrap", "w-100"], ["class", "col-4 d-flex justify-content-center mb-4", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-between", "mb-4"], ["type", "button", 1, "btn", "btn-primary", "ms-", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "me-1", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", "w-100"], [1, "nav", "nav-pills", "flex-column"], [1, "mb-2"], ["routerLink", "/dashboard", "routerLinkActive", "active", 1, "nav-link", "link-dark"], ["src", "\\assets\\images\\icons\\dashboard_black_24dp.svg", "alt", "image"], ["routerLink", "/settings", "routerLinkActive", "active", 1, "nav-link", "link-dark"], ["src", "\\assets\\images\\icons\\settings_black_24dp.svg", "alt", "image"], ["routerLink", "/auth/login", 1, "nav-link", "link-dark", 3, "click"], ["src", "\\assets\\images\\icons\\logout_black_24dp.svg", "alt", "image"], [1, "d-flex", "flex-column", "w-100"], [1, "d-flex", "align-items-center", "justify-content-center", "title", "h-50"], [1, "h-50", "m-5"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "col-4", "d-flex", "justify-content-center", "mb-4"], [1, "size", 3, "ngClass", "click"], [3, "ngClass"], ["class", "d-flex justify-content-between flex-wrap h-100", 4, "ngIf"], [1, "d-flex", "justify-content-between", "flex-wrap", "h-100"], ["class", "col-5 mb-5", 4, "ngFor", "ngForOf"], [1, "col-5", "mb-5"], ["class", "d-flex justify-content-center align-items-center quiz_card h-100", 3, "ngClass", "click", 4, "ngIf"], ["class", "d-flex justify-content-center align-items-center quiz_card h-100", 3, "ngClass", 4, "ngIf"], [1, "d-flex", "justify-content-center", "align-items-center", "quiz_card", "h-100", 3, "ngClass", "click"], [1, "d-flex", "justify-content-center", "align-items-center", "quiz_card", "h-100", 3, "ngClass"]], template: function QuizGameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function QuizGameComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, QuizGameComponent_div_9_Template, 2, 5, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QuizGameComponent_Template_button_click_11_listener() { return ctx.previous(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QuizGameComponent_Template_button_click_13_listener() { return ctx.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "next");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " Quit the quiz ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, " Settings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QuizGameComponent_Template_a_click_28_listener() { return ctx.logOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, " Log out ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, QuizGameComponent_div_36_Template, 2, 4, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Question ", ctx.currentQuiz + 1, " of 10 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.quizData == null ? null : ctx.quizData.questions);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.quizData == null ? null : ctx.quizData.questions[ctx.currentQuiz].question);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.quizData == null ? null : ctx.quizData.questions);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf], styles: [".blue[_ngcontent-%COMP%] {\n  background-color: #228AC7;\n}\n\n.sidebar_color[_ngcontent-%COMP%] {\n  width: 180px;\n  background-color: #F8F8F8;\n}\n\n.return[_ngcontent-%COMP%] {\n  background-color: #E2E4E5;\n  color: #000000;\n  box-shadow: 0px 4px 4px #0101015c;\n  font-weight: bold;\n}\n\n.size[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  border: 1px solid black;\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  outline: none;\n}\n\nselect[_ngcontent-%COMP%] {\n  background-color: #F6FAF8;\n}\n\n[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.text__input[_ngcontent-%COMP%] {\n  text-align: end;\n  flex: 0 0 100px;\n}\n\n.title[_ngcontent-%COMP%] {\n  background-color: #A9D5DF;\n  font-size: 40px;\n}\n\n.quiz_card[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  font-size: 40px;\n  box-shadow: 4px 6px 7px 5px #ced3d6;\n  border-radius: 25px;\n  background-color: #A9D5DF;\n}\n\n.heigth[_ngcontent-%COMP%] {\n  height: 100% !important;\n}\n\n.green[_ngcontent-%COMP%] {\n  background-color: green;\n}\n\n.size__error[_ngcontent-%COMP%] {\n  background-color: #ff0000f8;\n}\n\n.size__green[_ngcontent-%COMP%] {\n  background-color: green;\n}\n\n.size__color[_ngcontent-%COMP%] {\n  background-color: #1075e9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1aXotZ2FtZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHlCQUFBO0FBQUY7O0FBR0E7RUFDRSxZQUFBO0VBQ0EseUJBQUE7QUFBRjs7QUFHQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBQUY7O0FBR0E7RUFDRSx5QkFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FBQUY7O0FBUUE7RUFDRSx5QkFBQTtFQUNBLGVBQUE7QUFMRjs7QUFRQTtFQUNFLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUxGOztBQVFBO0VBQ0UsdUJBQUE7QUFMRjs7QUFRQTtFQUNFLHVCQUFBO0FBTEY7O0FBUUE7RUFDRSwyQkFBQTtBQUxGOztBQVFBO0VBQ0UsdUJBQUE7QUFMRjs7QUFRQTtFQUNFLHlCQUFBO0FBTEYiLCJmaWxlIjoicXVpei1nYW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gc2lkZWJhclxyXG4uYmx1ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyOEFDNztcclxufVxyXG5cclxuLnNpZGViYXJfY29sb3Ige1xyXG4gIHdpZHRoOiAxODBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOEY4O1xyXG59XHJcblxyXG4ucmV0dXJuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTJFNEU1O1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4ICMwMTAxMDE1YztcclxuICBmb250LXdlaWdodDogYm9sZDsgXHJcbn1cclxuXHJcbi5zaXplIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG5zZWxlY3Qge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNkZBRjg7XHJcbn1cclxuLy8gXHJcbjpob3N0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi50ZXh0X19pbnB1dCB7XHJcbiAgdGV4dC1hbGlnbjogZW5kO1xyXG4gIGZsZXg6IDAgMCAxMDBweDtcclxufVxyXG5cclxuXHJcblxyXG4vLyBcclxuLy8gXHJcbi8vIFxyXG4udGl0bGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNBOUQ1REY7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcblxyXG4ucXVpel9jYXJkIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgYm94LXNoYWRvdzogNHB4IDZweCA3cHggNXB4ICNjZWQzZDY7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTlENURGO1xyXG59XHJcblxyXG4uaGVpZ3RoIHtcclxuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmdyZWVuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLnNpemVfX2Vycm9yIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwZjg7XHJcbn1cclxuXHJcbi5zaXplX19ncmVlbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5zaXplX19jb2xvciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEwNzVlOTtcclxufSJdfQ== */"] });


/***/ }),

/***/ 7163:
/*!************************************************************************************!*\
  !*** ./src/app/modules/quiz/components/quiz-questions/quiz-questions.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuizQuestionsComponent": () => (/* binding */ QuizQuestionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_models_quiz__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/quiz */ 3698);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 9344);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);








const _c0 = function (a0, a1) { return { size__error: a0, size__current: a1 }; };
function QuizQuestionsComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QuizQuestionsComponent_div_9_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const i_r4 = restoredCtx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.currentQuiz = i_r4; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const quiz_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c0, ctx_r0.showErrors && quiz_r3.invalid, ctx_r0.currentQuiz == i_r4));
} }
function QuizQuestionsComponent_div_13_div_1_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", type_r11.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", type_r11.value, " ");
} }
function QuizQuestionsComponent_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "select", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function QuizQuestionsComponent_div_13_div_1_Template_select_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const quiz_r7 = ctx_r13.$implicit; const i_r8 = ctx_r13.index; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.onChangeType(quiz_r7.value, i_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, QuizQuestionsComponent_div_13_div_1_option_2_Template, 2, 2, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, ctx_r9.questionTypes));
} }
function QuizQuestionsComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, QuizQuestionsComponent_div_13_div_1_Template, 4, 3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r8 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.currentQuiz == i_r8);
} }
function QuizQuestionsComponent_div_41_div_1_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function QuizQuestionsComponent_div_41_div_1_div_7_div_1_Template_input_change_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const answer_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const quiz_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r23.isChecked(quiz_r15.value.answers, answer_r19.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const j_r20 = ctx_r27.index;
    const answer_r19 = ctx_r27.$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Answer ", j_r20 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("border-danger", answer_r19.invalid && ctx_r21.showErrors ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", "TRUE");
} }
function QuizQuestionsComponent_div_41_div_1_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function QuizQuestionsComponent_div_41_div_1_div_7_div_2_Template_input_change_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const answer_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const quiz_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r28.isChecked(quiz_r15.value.answers, answer_r19.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const j_r20 = ctx_r32.index;
    const answer_r19 = ctx_r32.$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Answer ", j_r20 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("border-danger", answer_r19.invalid && ctx_r22.showErrors ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", "TRUE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", "TRUE");
} }
function QuizQuestionsComponent_div_41_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, QuizQuestionsComponent_div_41_div_1_div_7_div_1_Template, 6, 4, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, QuizQuestionsComponent_div_41_div_1_div_7_div_2_Template, 6, 5, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const j_r20 = ctx.index;
    const quiz_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", j_r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(quiz_r15.value.questionType == "TRUE_FALSE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", quiz_r15.value.questionType == "TRUE_FALSE");
} }
function QuizQuestionsComponent_div_41_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Question ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "textarea", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, QuizQuestionsComponent_div_41_div_1_div_7_Template, 3, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const quiz_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("border-danger", quiz_r15.invalid && ctx_r17.showErrors ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r17.getAnswers(quiz_r15));
} }
function QuizQuestionsComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, QuizQuestionsComponent_div_41_div_1_Template, 8, 3, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r16 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.currentQuiz == i_r16);
} }
class QuizQuestionsComponent {
    constructor(route, fb, http, toastr) {
        this.route = route;
        this.fb = fb;
        this.http = http;
        this.toastr = toastr;
        this.questionTypes = src_app_models_quiz__WEBPACK_IMPORTED_MODULE_0__.QuestionType;
        this.currentQuiz = 0;
        this.quizId = 0;
        this.showErrors = false;
        this.questionsForm = this.fb.group({
            questions: this.fb.array([
                this.newQuestionForm(),
                this.newQuestionForm(),
                this.newQuestionForm(),
                this.newQuestionForm(),
                this.newQuestionForm(),
                this.newQuestionForm(),
                this.newQuestionForm(),
                this.newQuestionForm(),
                this.newQuestionForm(),
                this.newQuestionForm()
            ])
        });
    }
    ngOnInit() {
        this.questionsForm.valueChanges.subscribe(() => this.showErrors = false);
        this.route.paramMap.subscribe((data) => this.data = JSON.parse(data.getAll('data')));
    }
    get questionArray() {
        return this.questionsForm.get("questions");
    }
    get answerArray() {
        return this.questionsForm.get("questions")['controls'][1].get("answers");
    }
    newQuestionForm() {
        this.quizId++;
        return this.fb.group({
            question: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            questionType: ['FOUR_ANSWERS', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            answers: this.fb.array([this.newAnswerForm(), this.newAnswerForm(), this.newAnswerForm(), this.newAnswerForm()])
        });
    }
    newAnswerForm() {
        return this.fb.group({
            value: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            answer: ['FALSE', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]]
        });
    }
    getQuestions(form) {
        return form.controls.questions.controls;
    }
    getAnswers(form) {
        return form.controls.answers.controls;
    }
    addAnswers(j) {
        const control = this.questionsForm.get('questions')['controls'][j].get("answers");
        control.push(this.newAnswerForm());
    }
    removeAnswers(j) {
        const control = this.questionsForm.get('questions')['controls'][j].get("answers");
        control.removeAt(0);
    }
    previous() {
        if (this.currentQuiz >= 1) {
            this.currentQuiz--;
        }
    }
    next() {
        if (this.currentQuiz <= 8) {
            this.currentQuiz++;
        }
    }
    logOut() {
        localStorage.removeItem('access_token');
        sessionStorage.removeItem('access_token');
    }
    isChecked(allAnswers, currentAnswer) {
        allAnswers.map(v => v.answer = 'FALSE');
        currentAnswer.answer = 'TRUE';
    }
    onChangeType(quiz, index) {
        if (quiz.questionType === "TRUE_FALSE") {
            this.removeAnswers(index);
            this.removeAnswers(index);
        }
        else if (quiz.questionType === "FOUR_ANSWERS") {
            this.addAnswers(index);
            this.addAnswers(index);
        }
    }
    onSubmit() {
        let checkRadioButton = this.questionsForm.value.questions.every(question => question.answers.every(v => v.answer == "FALSE"));
        if (this.questionsForm.valid, !checkRadioButton) {
            let data = Object.assign(this.data, this.questionsForm.value);
            console.log(data);
            this.http.post('quiz/', data).subscribe(() => {
                this.toastr.success('Congratulations, you have successfully created a quiz.', '');
            }, err => {
                this.toastr.error(err.message, '');
            });
        }
        else {
            this.showErrors = true;
            this.toastr.error('Fill in all the fields.', '');
        }
    }
}
QuizQuestionsComponent.ɵfac = function QuizQuestionsComponent_Factory(t) { return new (t || QuizQuestionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService)); };
QuizQuestionsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: QuizQuestionsComponent, selectors: [["app-quiz-questions"]], decls: 42, vars: 5, consts: [[1, "d-flex", "justify-content-between", "h-100", 3, "formGroup", "ngSubmit"], [1, "d-flex", "sidebar_color", "h-100"], [1, "d-flex", "justify-content-between"], [1, "d-flex", "flex-column", "justify-content-between", "mb-5", "w-100"], [1, "d-flex", "flex-column"], [1, "text-center", "blue", "py-3", "mb-4"], ["formArrayName", "questions", 1, "sidebar_color"], [1, "d-flex", "align-items-center", "flex-wrap", "w-100", "mb-5"], ["class", "col-4 d-flex justify-content-center mb-4", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "text-center", "mb-4"], [1, "mb-1"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-between", "mb-4"], ["type", "button", 1, "btn", "btn-primary", "ms-1", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "me-1", 3, "click"], ["type", "submit", 1, "btn", "btn-primary"], [1, "nav", "nav-pills", "flex-column", "sidebar_color"], [1, "mb-2"], ["routerLink", "/dashboard", "routerLinkActive", "active", 1, "nav-link", "link-dark"], ["src", "\\assets\\images\\icons\\dashboard_black_24dp.svg", "alt", "image"], ["routerLink", "/settings", "routerLinkActive", "active", 1, "nav-link", "link-dark"], ["src", "\\assets\\images\\icons\\settings_black_24dp.svg", "alt", "image"], ["routerLink", "/auth/login", 1, "nav-link", "link-dark", 3, "click"], ["src", "\\assets\\images\\icons\\logout_black_24dp.svg", "alt", "image"], [1, "m-5", "w-100"], [1, "mb-5", "text-center"], ["formArrayName", "questions", 1, "mb-4"], [1, "col-4", "d-flex", "justify-content-center", "mb-4", 3, "formGroupName"], [1, "size", 3, "ngClass", "click"], [3, "formGroupName"], [4, "ngIf"], ["formControlName", "questionType", 1, "w-75", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["class", "ms-5", 4, "ngIf"], [1, "ms-5"], [1, "d-flex"], [1, "h4", "text__input", "me-4"], ["cols", "50", "rows", "3", "formControlName", "question", 1, "mb-4", "form-control", "w-100"], ["formArrayName", "answers", 1, "d-flex", "flex-column"], ["class", "d-flex justify-content-between mb-4", 4, "ngIf"], ["type", "text", "formControlName", "value", 1, "me-4", "form-control", "w-100"], [1, "d-flex", "align-items-center"], ["type", "radio", "name", "answer", "formControlName", "answer", 3, "value", "change"], ["type", "text", "formControlName", "value", 1, "me-4", "form-control", 3, "value"]], template: function QuizQuestionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function QuizQuestionsComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, QuizQuestionsComponent_div_9_Template, 2, 5, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Select the type of quiz: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, QuizQuestionsComponent_div_13_Template, 2, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QuizQuestionsComponent_Template_button_click_15_listener() { return ctx.previous(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QuizQuestionsComponent_Template_button_click_17_listener() { return ctx.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ul", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Quit the quiz ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " Settings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QuizQuestionsComponent_Template_a_click_31_listener() { return ctx.logOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " Log out ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "h1", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Create quiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, QuizQuestionsComponent_div_41_Template, 2, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.questionsForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Question ", ctx.currentQuiz + 1, " of 10 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.questionArray.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.questionArray.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.questionArray.controls);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormArrayName, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupName, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RadioControlValueAccessor], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.KeyValuePipe], styles: [".blue[_ngcontent-%COMP%] {\n  background-color: #228AC7;\n}\n\n.sidebar_color[_ngcontent-%COMP%] {\n  width: 180px;\n  background-color: #F8F8F8;\n}\n\n.return[_ngcontent-%COMP%] {\n  background-color: #E2E4E5;\n  color: #000000;\n  box-shadow: 0px 4px 4px #0101015c;\n  font-weight: bold;\n}\n\n.size[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  border: 1px solid black;\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  outline: none;\n}\n\nselect[_ngcontent-%COMP%] {\n  background-color: #F6FAF8;\n}\n\n[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.text__input[_ngcontent-%COMP%] {\n  text-align: end;\n  flex: 0 0 131px;\n}\n\n.size__error[_ngcontent-%COMP%] {\n  background-color: #ff0000f8;\n}\n\n.size__current[_ngcontent-%COMP%] {\n  background-color: #1075e9;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  resize: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1aXotcXVlc3Rpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UseUJBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtBQUFGOztBQUdBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFBRjs7QUFHQTtFQUNFLHlCQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUFBRjs7QUFHQTtFQUNFLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSx5QkFBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtBQUFGIiwiZmlsZSI6InF1aXotcXVlc3Rpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gc2lkZWJhclxyXG4uYmx1ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyOEFDNztcclxufVxyXG5cclxuLnNpZGViYXJfY29sb3Ige1xyXG4gIHdpZHRoOiAxODBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOEY4O1xyXG59XHJcblxyXG4ucmV0dXJuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTJFNEU1O1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4ICMwMTAxMDE1YztcclxuICBmb250LXdlaWdodDogYm9sZDsgXHJcbn1cclxuXHJcbi5zaXplIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG5zZWxlY3Qge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNkZBRjg7XHJcbn1cclxuLy8gXHJcbjpob3N0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi50ZXh0X19pbnB1dCB7XHJcbiAgdGV4dC1hbGlnbjogZW5kO1xyXG4gIGZsZXg6IDAgMCAxMzFweDtcclxufVxyXG5cclxuLnNpemVfX2Vycm9yIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwZjg7XHJcbn1cclxuXHJcbi5zaXplX19jdXJyZW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTA3NWU5O1xyXG59XHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgcmVzaXplOiBub25lO1xyXG59Il19 */"] });


/***/ }),

/***/ 9491:
/*!********************************************!*\
  !*** ./src/app/modules/quiz/quiz.guard.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuizGuard": () => (/* binding */ QuizGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth/services/auth.service */ 2542);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);



class QuizGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.data = false;
    }
    canActivate() {
        if (!this.authService.isAuthenticated()) {
            this.router.navigateByUrl('/auth/login');
            return false;
        }
        return true;
    }
}
QuizGuard.ɵfac = function QuizGuard_Factory(t) { return new (t || QuizGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
QuizGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: QuizGuard, factory: QuizGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7970:
/*!***********************************************************!*\
  !*** ./src/app/shared/abstracts/abstract-crud.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractCrudService": () => (/* binding */ AbstractCrudService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1841);


class AbstractCrudService {
    constructor(http) {
        this.http = http;
    }
    getList(params = ''.toLowerCase()) {
        return this.http.get(this.path + params);
    }
    getOne(id, params = '') {
        return this.http.get(this.path + '/' + id + params);
    }
    createOne(item, params = '') {
        return this.http.post(this.path + params, item);
    }
    editOne(id, item, params = '') {
        return this.http.put(this.path + '/' + id + params, item);
    }
    deleteOne(id, params = '') {
        return this.http.delete(this.path + '/' + id + params);
    }
}
AbstractCrudService.ɵfac = function AbstractCrudService_Factory(t) { return new (t || AbstractCrudService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
AbstractCrudService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AbstractCrudService, factory: AbstractCrudService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6664:
/*!****************************************************************!*\
  !*** ./src/app/shared/components/sidebar/sidebar.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarComponent": () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/users.service */ 6575);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);




function SidebarComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ul", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Dashboard ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Announcement ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Quiz ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ul", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Settings ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidebarComponent_div_0_Template_a_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1.logOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Log out ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r0.user.firstName, " ", ctx_r0.user.lastName, " ");
} }
class SidebarComponent {
    constructor(userService) {
        this.userService = userService;
    }
    ngOnInit() {
        this.getUser();
    }
    getUser() {
        this.userService.userInfo$.subscribe(user => this.user = user);
    }
    logOut() {
        localStorage.removeItem('access_token');
        sessionStorage.removeItem('access_token');
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_users_service__WEBPACK_IMPORTED_MODULE_0__.UserService)); };
SidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 1, vars: 1, consts: [["class", "d-flex h-100", "style", "width: 180px; background-color: '#F8F8F8';", 4, "ngIf"], [1, "d-flex", "h-100", 2, "width", "180px", "background-color", "#F8F8F8"], [1, "position"], [1, "d-flex", "flex-column", "justify-content-between", "my-5", "w-100"], [1, "d-flex", "flex-column"], [1, "d-flex", "align-items-center", "flex-column", "mb-5"], ["src", "/assets/user.jpg", "alt", "user image", 1, "profileImg", "mb-3"], [1, "nav", "nav-pills", "flex-column", "mb-auto"], [1, "mb-2"], ["routerLink", "/dashboard", "routerLinkActive", "active", 1, "nav-link", "link-dark"], ["src", "\\assets\\images\\icons\\dashboard_black_24dp.svg", "alt", "image"], ["routerLink", "/announcement", "routerLinkActive", "active", 1, "nav-link", "link-dark"], ["src", "\\assets\\images\\icons\\info_black_24dp.svg", "alt", "image"], ["routerLink", "/quiz", "routerLinkActive", "active", 1, "nav-link", "link-dark"], ["src", "\\assets\\images\\icons\\quiz_black_24dp.svg", "alt", "image"], [1, "nav", "nav-pills", "flex-column"], ["routerLink", "/settings", "routerLinkActive", "active", 1, "nav-link", "link-dark"], ["src", "\\assets\\images\\icons\\settings_black_24dp.svg", "alt", "image"], ["routerLink", "/auth/login", 1, "nav-link", "link-dark", 3, "click"], ["src", "\\assets\\images\\icons\\logout_black_24dp.svg", "alt", "image"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SidebarComponent_div_0_Template, 29, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive], styles: [".profileImg[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n}\n\n.image[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n\n.position[_ngcontent-%COMP%] {\n  position: fixed;\n  background-color: #F8F8F8;\n  width: 180px;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBQ0YiLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlSW1nIHtcclxuICB3aWR0aDogODBweDtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbn1cclxuXHJcbi5pbWFnZSB7XHJcbiAgd2lkdGg6IDI0cHg7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG59XHJcblxyXG4ucG9zaXRpb24ge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOEY4O1xyXG4gIHdpZHRoOiAxODBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 6575:
/*!**************************************************!*\
  !*** ./src/app/shared/services/users.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6215);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5917);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 3190);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 7349);
/* harmony import */ var _abstracts_abstract_crud_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstracts/abstract-crud.service */ 7970);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 1841);





class UserService extends _abstracts_abstract_crud_service__WEBPACK_IMPORTED_MODULE_0__.AbstractCrudService {
    constructor(http) {
        super(http);
        this.http = http;
        this.path = 'user';
        // userId: number;
        this.subject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(1);
        this.userInfo$ = this.subject$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)((val) => val ? this.getMe().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(({ id }) => this.getOne(id))) : (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(null)), 
        // tap(user => this.userId = user.id),
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.shareReplay)({ refCount: true, bufferSize: 1 }));
    }
    getMe() {
        return this.http.get('user/me');
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient)); };
UserService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    API_URL: 'http://localhost:8080/'
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

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map