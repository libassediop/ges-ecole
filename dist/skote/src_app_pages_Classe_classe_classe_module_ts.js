"use strict";
(self["webpackChunkskote"] = self["webpackChunkskote"] || []).push([["src_app_pages_Classe_classe_classe_module_ts"],{

/***/ 12895:
/*!**************************************************************!*\
  !*** ./src/app/pages/Classe/classe/classe-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClasseRoutingModule": () => (/* binding */ ClasseRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _classe_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classe.component */ 29375);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);




const routes = [
    { path: 'classe',
        component: _classe_component__WEBPACK_IMPORTED_MODULE_0__.ClasseComponent
    }
];
class ClasseRoutingModule {
}
ClasseRoutingModule.ɵfac = function ClasseRoutingModule_Factory(t) { return new (t || ClasseRoutingModule)(); };
ClasseRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ClasseRoutingModule });
ClasseRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ClasseRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 29375:
/*!*********************************************************!*\
  !*** ./src/app/pages/Classe/classe/classe.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClasseComponent": () => (/* binding */ ClasseComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);

class ClasseComponent {
    constructor() { }
    ngOnInit() {
    }
}
ClasseComponent.ɵfac = function ClasseComponent_Factory(t) { return new (t || ClasseComponent)(); };
ClasseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClasseComponent, selectors: [["app-classe"]], decls: 2, vars: 0, template: function ClasseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "classe works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGFzc2UuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 40609:
/*!******************************************************!*\
  !*** ./src/app/pages/Classe/classe/classe.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClasseModule": () => (/* binding */ ClasseModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _classe_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classe-routing.module */ 12895);
/* harmony import */ var _classe_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classe.component */ 29375);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);




class ClasseModule {
}
ClasseModule.ɵfac = function ClasseModule_Factory(t) { return new (t || ClasseModule)(); };
ClasseModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ClasseModule });
ClasseModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _classe_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClasseRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ClasseModule, { declarations: [_classe_component__WEBPACK_IMPORTED_MODULE_1__.ClasseComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _classe_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClasseRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_Classe_classe_classe_module_ts.js.map