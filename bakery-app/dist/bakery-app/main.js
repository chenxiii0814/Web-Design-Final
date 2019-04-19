(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!--The content below is only a placeholder and can be replaced.-->\n<div>\n  <app-title></app-title>\n  <!-- <app-slide></app-slide> -->\n\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  font-family: \"Adobe Caslon Pro\"; }\n\na:hover {\n  text-decoration: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93dXl1bnlpL3dlYi9XZWItRGVzaWduLUZpbmFsL2Jha2VyeS1hcHAvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBK0IsRUFBQTs7QUFLakM7RUFDRSxxQkFBcUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdntcbiAgZm9udC1mYW1pbHk6IFwiQWRvYmUgQ2FzbG9uIFByb1wiO1xuICAvL3RleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuXG5hOmhvdmVye1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'bakery-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _title_title_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./title/title.component */ "./src/app/title/title.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _slide_slide_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./slide/slide.component */ "./src/app/slide/slide.component.ts");
/* harmony import */ var _menu_pdf_menu_pdf_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./menu-pdf/menu-pdf.component */ "./src/app/menu-pdf/menu-pdf.component.ts");







 //router
 //menu part



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _title_title_component__WEBPACK_IMPORTED_MODULE_6__["TitleComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundComponent"],
                _slide_slide_component__WEBPACK_IMPORTED_MODULE_10__["SlideComponent"],
                _menu_pdf_menu_pdf_component__WEBPACK_IMPORTED_MODULE_11__["MenuPDFComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot([
                    {
                        path: '',
                        component: _slide_slide_component__WEBPACK_IMPORTED_MODULE_10__["SlideComponent"]
                    },
                    {
                        path: 'menus/:id',
                        component: _menu_pdf_menu_pdf_component__WEBPACK_IMPORTED_MODULE_11__["MenuPDFComponent"]
                    },
                    {
                        path: 'menus',
                        component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"]
                    },
                    {
                        path: '**',
                        component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundComponent"]
                    }
                ])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/menu-pdf/menu-pdf.component.html":
/*!**************************************************!*\
  !*** ./src/app/menu-pdf/menu-pdf.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id = \"main_pic1\"></div>>"

/***/ }),

/***/ "./src/app/menu-pdf/menu-pdf.component.scss":
/*!**************************************************!*\
  !*** ./src/app/menu-pdf/menu-pdf.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#main_pic1 {\n  background-image: url(\"Easter-Menu.png\");\n  width: 300px;\n  height: 1050px;\n  margin-top: 30px;\n  margin-left: 30%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93dXl1bnlpL3dlYi9XZWItRGVzaWduLUZpbmFsL2Jha2VyeS1hcHAvc3JjL2FwcC9tZW51LXBkZi9tZW51LXBkZi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdDQUF3QztFQUN4QyxZQUFZO0VBQ1osY0FBYztFQUNkLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21lbnUtcGRmL21lbnUtcGRmLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21haW5fcGljMXtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJFYXN0ZXItTWVudS5wbmdcIik7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogMTA1MHB4O1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/menu-pdf/menu-pdf.component.ts":
/*!************************************************!*\
  !*** ./src/app/menu-pdf/menu-pdf.component.ts ***!
  \************************************************/
/*! exports provided: MenuPDFComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPDFComponent", function() { return MenuPDFComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var MenuPDFComponent = /** @class */ (function () {
    function MenuPDFComponent(route) {
        this.route = route;
    }
    MenuPDFComponent.prototype.ngOnInit = function () {
        this.route.paramMap
            .subscribe(function (params) {
            console.log(params);
            var id = params.get('id');
            console.log(id);
        });
    };
    MenuPDFComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu-pdf',
            template: __webpack_require__(/*! ./menu-pdf.component.html */ "./src/app/menu-pdf/menu-pdf.component.html"),
            styles: [__webpack_require__(/*! ./menu-pdf.component.scss */ "./src/app/menu-pdf/menu-pdf.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], MenuPDFComponent);
    return MenuPDFComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"menu_space\">\n    <div>\n        <div class=\"specified_menu menu_div\">All Day</div>\n        <div class=\"specified_menu menu_div\">Brunch Menu</div>\n        <div class=\"specified_menu menu_div\">Bread Menu</div>\n        <div class=\"specified_menu menu_div\">Pastry&Dessert</div>\n    </div>\n</div>> -->\n\n\n<div class=\"wrapper\">\n    <div class=\"one\">\n        <a class=\"without_underline\" [routerLink]=\"['/menus', menus.id]\">All Day Menu</a>\n    </div>\n    <div class=\"two\">\n        <a class=\"without_underline\" [routerLink]=\"['/menus', menus.id]\">Brunch Menu</a>\n    </div>\n    <div class=\"three\">\n        <a class=\"without_underline\" [routerLink]=\"['/menus', menus.id]\">Bread Menu</a>\n    </div>\n    <div class=\"four\">\n        <a class=\"without_underline\" [routerLink]=\"['/menus', menus.id]\">Pastry&Dessert<br/> Menu</a>\n    </div>\n    <div class=\"five\">\n        <a class=\"without_underline\" [routerLink]=\"['/menus', menus.id]\">Gluten Menu</a>\n    </div>\n    <!-- <div class=\"six\">Six</div> -->\n    <div class=\"seven\">\n        <a class=\"without_underline\" [routerLink]=\"['/menus', menus.id]\">Passover Menu</a>\n    </div>\n    <div class=\"eight\">\n        <a class=\"without_underline\" [routerLink]=\"['/menus', menus.id]\">Easter Menu</a>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/menu/menu.component.scss":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box; }\n\n.wrapper {\n  max-width: 69%;\n  margin: 0 auto; }\n\n.wrapper > div {\n  border: 0.9px solid #121212;\n  padding: 1em; }\n\n.wrapper {\n  display: grid;\n  grid-template-columns: 19% 19% 19% 19% 19%;\n  grid-gap: 10px;\n  grid-auto-rows: minmax(60px, auto); }\n\n.one {\n  grid-column: 1 / 2;\n  grid-row: 1; }\n\n.two {\n  grid-column: 2 / 3;\n  grid-row: 1; }\n\n.three {\n  grid-column: 3/4;\n  grid-row: 1; }\n\n.four {\n  grid-column: 1/2;\n  grid-row: 2; }\n\n.five {\n  grid-column: 2/3;\n  grid-row: 2; }\n\n.six {\n  grid-column: 3/4;\n  grid-row: 2; }\n\n.seven {\n  grid-column: 5/6;\n  grid-row: 1; }\n\n.eight {\n  grid-column: 4/5;\n  grid-row: 1; }\n\n.without_underline {\n  text-decoration: none;\n  color: black; }\n\na:hover {\n  color: rgba(220, 220, 220, 0.8); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93dXl1bnlpL3dlYi9XZWItRGVzaWduLUZpbmFsL2Jha2VyeS1hcHAvc3JjL2FwcC9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFBRyxzQkFBc0IsRUFBQTs7QUFDekI7RUFDRSxjQUFjO0VBQ2QsY0FBYyxFQUFBOztBQUdoQjtFQUNFLDJCQUEyQjtFQUczQixZQUFZLEVBQUE7O0FBRWI7RUFDQyxhQUFhO0VBQ2IsMENBQTBDO0VBQzFDLGNBQWM7RUFDZCxrQ0FBa0MsRUFBQTs7QUFFcEM7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVyxFQUFBOztBQUViO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVcsRUFBQTs7QUFFYjtFQUNFLGdCQUFnQjtFQUNoQixXQUFXLEVBQUE7O0FBRWI7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVyxFQUFBOztBQUViO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVcsRUFBQTs7QUFFYjtFQUNFLGdCQUFnQjtFQUNoQixXQUFXLEVBQUE7O0FBRWI7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVyxFQUFBOztBQUdiO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVcsRUFBQTs7QUFFYjtFQUNFLHFCQUFxQjtFQUNyQixZQUFZLEVBQUE7O0FBRWQ7RUFBUSwrQkFBNEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuKiB7Ym94LXNpemluZzogYm9yZGVyLWJveDt9XG4ud3JhcHBlciB7XG4gIG1heC13aWR0aDogNjklO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLndyYXBwZXIgPiBkaXYge1xuICBib3JkZXI6IDAuOXB4IHNvbGlkICMxMjEyMTI7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDVweDtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzMsMTcxLDg4LC41KTtcbiAgcGFkZGluZzogMWVtO1xuLy8gICBjb2xvcjogI2Q5NDgwZjtcbn0ud3JhcHBlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTklIDE5JSAxOSUgMTklIDE5JTtcbiAgZ3JpZC1nYXA6IDEwcHg7XG4gIGdyaWQtYXV0by1yb3dzOiBtaW5tYXgoNjBweCwgYXV0byk7XG59XG4ub25lIHtcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICBncmlkLXJvdzogMTtcbn1cbi50d28geyBcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuICBncmlkLXJvdzogMTtcbn1cbi50aHJlZSB7XG4gIGdyaWQtY29sdW1uOiAzLzQ7XG4gIGdyaWQtcm93OiAxO1xufVxuLmZvdXIge1xuICBncmlkLWNvbHVtbjogMS8yO1xuICBncmlkLXJvdzogMjtcbn1cbi5maXZlIHtcbiAgZ3JpZC1jb2x1bW46IDIvMztcbiAgZ3JpZC1yb3c6IDI7XG59XG4uc2l4IHtcbiAgZ3JpZC1jb2x1bW46IDMvNDtcbiAgZ3JpZC1yb3c6IDI7XG59XG4uc2V2ZW4ge1xuICBncmlkLWNvbHVtbjogNS82O1xuICBncmlkLXJvdzogMTtcbn1cblxuLmVpZ2h0IHtcbiAgZ3JpZC1jb2x1bW46IDQvNTtcbiAgZ3JpZC1yb3c6IDE7XG59XG4ud2l0aG91dF91bmRlcmxpbmV7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xufVxuYTpob3Zlcntjb2xvcjogcmdiYSgyMjAsMjIwLDIyMCwwLjgpO31cbiJdfQ== */"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _menusList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menusList */ "./src/app/menusList.ts");



var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
        this.menus = _menusList__WEBPACK_IMPORTED_MODULE_2__["MENUSS"];
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/menu/menu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/menusList.ts":
/*!******************************!*\
  !*** ./src/app/menusList.ts ***!
  \******************************/
/*! exports provided: MENUSS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENUSS", function() { return MENUSS; });
var MENUSS = [
    { id: 1, name: 'AllDay.png' },
    { id: 2, name: 'Brunch.png' },
    { id: 3, name: 'Bread.png' },
    { id: 4, name: 'GUEST_PD.png' },
    { id: 5, name: 'Gluten.png' },
    //   { id: 6, name: 'RubberMan' },
    { id: 7, name: 'Passover.png' },
    { id: 8, name: 'Easter-Menu.png' },
];


/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Ooops! The page is losing! Please reload the page!\n</p>\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.scss":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/not-found/not-found.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/slide/slide.component.html":
/*!********************************************!*\
  !*** ./src/app/slide/slide.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main_pic\" [@slide_main]=\"isShown ? 'shown':'hidden'\"></div>\n<div id=\"main_pic_r\"></div>"

/***/ }),

/***/ "./src/app/slide/slide.component.scss":
/*!********************************************!*\
  !*** ./src/app/slide/slide.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#main_pic {\n  background-image: url(\"main_pic1.jpg\");\n  width: 300px;\n  height: 400px;\n  margin-top: 30px;\n  margin-left: 15%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93dXl1bnlpL3dlYi9XZWItRGVzaWduLUZpbmFsL2Jha2VyeS1hcHAvc3JjL2FwcC9zbGlkZS9zbGlkZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFLHNDQUFzQztFQUN0QyxZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NsaWRlL3NsaWRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIFxuICAjbWFpbl9waWN7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwibWFpbl9waWMxLmpwZ1wiKTtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNSU7XG4gIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/app/slide/slide.component.ts":
/*!******************************************!*\
  !*** ./src/app/slide/slide.component.ts ***!
  \******************************************/
/*! exports provided: SlideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideComponent", function() { return SlideComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var SlideComponent = /** @class */ (function () {
    function SlideComponent() {
        this.isShown = false;
        // @Input() forSlides : boolean =true;
        this.bannerPic = [
            { img: 'main_pic2' },
            { img: 'main_pic3' },
            { img: 'main_pic4' },
        ];
    }
    SlideComponent.prototype.ngOnInit = function () {
        this.wait1s();
    };
    SlideComponent.prototype.wait1s = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(1000)];
                    case 1:
                        _a.sent();
                        this.isShown = !this.isShown;
                        return [2 /*return*/];
                }
            });
        });
    };
    SlideComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-slide',
            template: __webpack_require__(/*! ./slide.component.html */ "./src/app/slide/slide.component.html"),
            animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("slide_main", [
                    //different style in different states
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('shown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, height: '300px' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0.5, height: '300px' })),
                    // transition: control when and how to transact
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('shown=>hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('3s')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('hidden=>shown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('3s'))
                ])],
            styles: [__webpack_require__(/*! ./slide.component.scss */ "./src/app/slide/slide.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SlideComponent);
    return SlideComponent;
}());



/***/ }),

/***/ "./src/app/title/title.component.html":
/*!********************************************!*\
  !*** ./src/app/title/title.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- <!DOCTYPE html>\n<html lang=\"en\"> -->\n\n\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Welcome to Tatte</title>\n</head>\n\n\n<body>\n  <div class=\"header\">\n    <a href=\"#\"> Tatte </a>\n    <p>BAKERY & CAFE</p>\n  </div>\n  <nav class=\"banner\">\n    <label>ABOUT</label>\n    <label>LOCATION</label>\n    <a routerLink=\"/menus\"><label>MENUS</label></a>\n    <label>CAREERS</label>\n    <label>CONTACT</label>\n    <label>PRESS & NEWS</label>\n    <label>SHOP</label>\n    <label>ORDER ONLINE</label>\n  </nav>\n  <!-- <div id=\"main_pic\" [@slide_main]=\"isShown ? 'shown':'hidden'\"></div>\n  <div id=\"main_pic_r\"></div> -->\n</body>\n\n<!-- </html> -->\n\n"

/***/ }),

/***/ "./src/app/title/title.component.scss":
/*!********************************************!*\
  !*** ./src/app/title/title.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  text-align: center;\n  padding-top: 30px; }\n\n.header a {\n  text-align: center;\n  font-size: 88px;\n  color: black;\n  letter-spacing: 7px;\n  border-bottom: solid 1px #EEEDED; }\n\na:link {\n  color: black;\n  text-decoration: none; }\n\na:visited {\n  color: #000;\n  text-decoration: none; }\n\na:hover {\n  color: #121212;\n  text-decoration: none; }\n\n.header p {\n  margin-top: -20px;\n  margin-bottom: 20px;\n  font-size: 11px;\n  letter-spacing: 7px; }\n\n.banner {\n  font-size: smaller;\n  margin-left: 15%;\n  margin-right: 15%;\n  padding: 10px;\n  border-top: solid 1px #121212;\n  border-bottom: solid 1px #121212; }\n\nlabel:last-child {\n  margin-right: 0; }\n\n.banner label {\n  margin: 20px; }\n\na:hover {\n  color: rgba(220, 220, 220, 0.8); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93dXl1bnlpL3dlYi9XZWItRGVzaWduLUZpbmFsL2Jha2VyeS1hcHAvc3JjL2FwcC90aXRsZS90aXRsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZ0NBQWdDLEVBQUE7O0FBRWxDO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQixFQUFBOztBQUV2QjtFQUNFLFdBQVc7RUFDWCxxQkFBcUIsRUFBQTs7QUFFdkI7RUFDRSxjQUFjO0VBQ2QscUJBQXFCLEVBQUE7O0FBRXZCO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsbUJBQW1CLEVBQUE7O0FBS3JCO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsYUFBYTtFQUVYLDZCQUFxQjtFQUNyQixnQ0FBeUIsRUFBQTs7QUFHN0I7RUFDRSxlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsWUFBWSxFQUFBOztBQUlkO0VBQVEsK0JBQTRCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90aXRsZS90aXRsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6MzBweDtcbn1cbi5oZWFkZXIgYXtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDg4cHg7XG4gIGNvbG9yOiBibGFjaztcbiAgbGV0dGVyLXNwYWNpbmc6IDdweDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNFRUVERUQ7XG59XG5hOmxpbmt7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuYTp2aXNpdGVke1xuICBjb2xvcjogIzAwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuYTpob3ZlcntcbiAgY29sb3I6ICMxMjEyMTI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5oZWFkZXIgcHtcbiAgbWFyZ2luLXRvcDogLTIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDdweDtcblxufVxuXG5cbi5iYW5uZXJ7XG4gIGZvbnQtc2l6ZTogc21hbGxlcjtcbiAgbWFyZ2luLWxlZnQ6IDE1JTtcbiAgbWFyZ2luLXJpZ2h0OiAxNSU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjp7XG4gICAgdG9wOnNvbGlkIDFweCAjMTIxMjEyO1xuICAgIGJvdHRvbTogc29saWQgMXB4ICMxMjEyMTI7XG4gIH07XG59XG5sYWJlbDpsYXN0LWNoaWxke1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG4uYmFubmVyIGxhYmVse1xuICBtYXJnaW46IDIwcHg7XG59XG5cblxuYTpob3Zlcntjb2xvcjogcmdiYSgyMjAsMjIwLDIyMCwwLjgpO31cblxuLy8gI21haW5fcGlje1xuLy8gICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJtYWluX3BpYzEuanBnXCIpO1xuLy8gICB3aWR0aDogMzAwcHg7XG4vLyAgIGhlaWdodDogNDAwcHg7XG4vLyAgIG1hcmdpbi10b3A6IDMwcHg7XG4vLyAgIG1hcmdpbi1sZWZ0OiAxNSU7XG4vLyB9XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/title/title.component.ts":
/*!******************************************!*\
  !*** ./src/app/title/title.component.ts ***!
  \******************************************/
/*! exports provided: TitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleComponent", function() { return TitleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");



var TitleComponent = /** @class */ (function () {
    // isShown = false;
    // // @Input() forSlides : boolean =true;
    // bannerPic:any[] = [
    //   {img:'main_pic2'},
    //   {img:'main_pic3'},
    //   {img:'main_pic4'},
    // ]
    function TitleComponent() {
    }
    TitleComponent.prototype.ngOnInit = function () {
        // this.wait1s();
    };
    TitleComponent.prototype.wait1s = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(1000)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TitleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-title',
            template: __webpack_require__(/*! ./title.component.html */ "./src/app/title/title.component.html"),
            styles: [__webpack_require__(/*! ./title.component.scss */ "./src/app/title/title.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TitleComponent);
    return TitleComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/wuyunyi/web/Web-Design-Final/bakery-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map