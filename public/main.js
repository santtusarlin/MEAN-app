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

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"d-flex mt-3 mb-3\">Submit a new movie</div>\n      <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f.value)\">\n          <div class=\"form-group\">\n              <label for=\"imgurl\">img_url;</label>\n              <input type=\"text\" class=\"form-control\" placeholder=\"https://www...\" name=\"imgurl\" [(ngModel)]=\"imgurl\" ngModel />\n              <label for=\"name\">Movie's name:</label>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Name\" name=\"name\" [(ngModel)]=\"name\" ngModel />\n              <label for=\"year\">Year:</label>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Year\" name=\"year\" [(ngModel)]=\"year\" ngModel />\n              <label for=\"length\">Length:</label>\n              <input type=\"text\" class=\"form-control\" placeholder=\"0h 00min\" name=\"length\" [(ngModel)]=\"length\" ngModel />\n              <label for=\"rating\">Rating:</label>\n              <input type=\"text\" class=\"form-control\" placeholder=\"0.0\" name=\"rating\" [(ngModel)]=\"rating\" ngModel />\n              <label for=\"genre\">Genre:</label>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Action, Drama, Fantasy etc.\" name=\"genre\" [(ngModel)]=\"genre\" ngModel />\n              <label for=\"review\">Synopsis:</label>\n              <textarea rows=\"6\" type=\"text\" class=\"form-control\" placeholder=\"Write your synopsis...\" name=\"review\" [(ngModel)]=\"review\" ngModel>\n                </textarea>\n              <input type=\"hidden\" name=\"id\" [(ngModel)]=\"id\" ngModel />\n            </div>\n          <button *ngIf=\"addnew\" type=\"submit\" class=\"btn btn-light\">Submit new\n              </button>\n          <button *ngIf=\"saveedited\" type=\"submit\" class=\"btn btn-light\">Save edit\n          </button>\n      </form>\n  </div>\n<div class=\"container-fluid\">\n  <div class=\"d-flex mt-3 mb-3\">List of movies</div>\n  <div class=\"table-responsive\">\n    <table class=\"table table-striped\">\n      <thead>\n        <tr>\n          <th>#</th>\n          <th>Movie</th>\n          <th>Year</th>\n          <th>Length</th>\n          <th>Rating</th>\n          <th>Genre</th>\n          <th></th>\n          <th></th>\n        </tr>\n      </thead>\n      <tbody>\n        <!--*ngFor on looppidirektiivi-->\n        <tr *ngFor=\"let m of movies\">\n          <td><img src=\"{{m.imgurl}}\"/></td>\n          <td>{{m.name}}</td>\n          <td>{{m.year}}</td>\n          <td>{{m.length}}</td>\n          <td>{{m.rating}}</td>\n          <td>{{m.genre}}</td>\n          <td><span id=\"del\" class=\"btn btn-light\" (click)=\"delete(m)\">Poista</span></td>\n          <td><span id=\"upd\" class=\"btn btn-light\" (click)=\"update(m)\">Muokkaa</span></td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../movie.service */ "./src/app/movie.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminComponent = /** @class */ (function () {
    function AdminComponent(movieService) {
        this.movieService = movieService;
        this.movies = [];
        this.addnew = true;
        this.saveedited = false;
        this.imgurl = '';
        this.name = '';
        this.year = '';
        this.length = '';
        this.rating = '';
        this.genre = '';
        this.review = '';
        this.id = '';
    }
    AdminComponent.prototype.getMovies = function () {
        var _this = this;
        this.movieService.getMovies().subscribe(function (data) { return _this.movies = data; });
    };
    AdminComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        console.log(formData);
        // valitaan post tai put
        // post eli uusi elokuva
        if (this.addnew === true) {
            this.movieService.addMovie({
                'imgurl': formData.imgurl,
                'name': formData.name,
                'year': formData.year,
                'length': formData.length,
                'rating': formData.rating,
                'genre': formData.genre,
                'review': formData.review
                // samalla kun data tilataan se pushataan komponentin students -taulukkoon
            }).subscribe(function (data) { return _this.movies.push(data); });
        }
        // put eli päivitetään elokuva
        if (this.saveedited === true) {
            this.movieService.updateMovie({
                '_id': formData.id,
                'imgurl': formData.imgurl,
                'name': formData.name,
                'year': formData.year,
                'length': formData.length,
                'rating': formData.rating,
                'genre': formData.genre,
                'review': formData.review
            }).subscribe(function () { return _this.getMovies(); });
            // nollataan asetukset
            this.addnew = true;
            this.saveedited = false;
            this.imgurl = '';
            this.name = '';
            this.year = '';
            this.length = '';
            this.rating = '';
            this.genre = '';
            this.review = '';
            this.id = '';
        }
    };
    AdminComponent.prototype.delete = function (m) {
        var _this = this;
        console.log('Poistetaan: ' + m._id);
        this.movieService.delMovie(m._id)
            .subscribe(function () { return _this.getMovies(); });
    };
    AdminComponent.prototype.update = function (m) {
        this.imgurl = m.imgurl;
        this.name = m.name;
        this.year = m.year;
        this.length = m.length;
        this.rating = m.rating;
        this.genre = m.genre;
        this.review = m.review;
        this.id = m._id;
        this.addnew = false;
        this.saveedited = true;
    };
    AdminComponent.prototype.ngOnInit = function () {
        this.getMovies();
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html")
        }),
        __metadata("design:paramtypes", [_movie_service__WEBPACK_IMPORTED_MODULE_1__["MovieService"]])
    ], AdminComponent);
    return AdminComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _newreview_newreview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./newreview/newreview.component */ "./src/app/newreview/newreview.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: _list_list_component__WEBPACK_IMPORTED_MODULE_2__["ListComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'newreview', component: _newreview_newreview_component__WEBPACK_IMPORTED_MODULE_4__["NewreviewComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--HTML-templaatit ovat sovelluksen view-->\n<div class=\"application\">\n  <app-navbar></app-navbar>\n  <!-- vaihtuvat komponentit (spa-näkymät) tulevat <router-outlet> -tagien väliin -->\n  <router-outlet></router-outlet>  \n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'meanfront';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _newreview_newreview_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./newreview/newreview.component */ "./src/app/newreview/newreview.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _list_list_component__WEBPACK_IMPORTED_MODULE_6__["ListComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _newreview_newreview_component__WEBPACK_IMPORTED_MODULE_9__["NewreviewComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_10__["AdminComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            providers: [_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (sessionStorage.getItem('accesstoken')) {
            return true;
        }
        // Ei Tokenia jolloin palataan login -sivulle
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 // kirjasto jwt:n käsittelyyn


var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.apiUrl = 'movies/login'; // autentikaatiopalvelun osoite
        this.jwtHelp = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"](); // helpperipalvelu jolla dekoodataan token
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"](); // subjectilla viesti navbariin että token on tullut
        // Jos token on jo sessionStoragessa, otetaan se sieltä muistiin
        var currentUser = JSON.parse(sessionStorage.getItem('accesstoken'));
        this.token = currentUser && currentUser.token;
    }
    /* login-metodi ottaa yhteyden backendin autentikaatioreittiin, postaa tunnarit
    ja palauttaa Observablena true tai false riippuen siitä saatiinko lähetetyillä
    tunnareilla token backendistä */
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        // tässä ei käytetä JSON.stringify -metodia lähtevälle tiedolle
        return this.http.post(this.apiUrl, { username: username, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            console.log(res); // loggaa alla olevan tyylisen vastauksen
            /*
            {success: true, message:
              "Tässä on valmis Token!",
              token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ…zNzV9.x1gWEg9DtoPtEUUHlR8aDgpuzG6NBNJpa2L-MEhyraQ"}
            */
            var token = res['token']; // otetaan vastauksesta token
            if (token) {
                _this.token = token;
                /* Tässä tutkitaan onko tokenin payloadin sisältö oikea.
                   Jos on, laitetaan token sessionStorageen ja palautetaan true
                   jolloin käyttäjä pääsee Admin-sivulle
                */
                try {
                    // dekoodataan token
                    var payload = _this.jwtHelp.decodeToken(token);
                    console.log(payload);
                    // Tässä voidaan tarkistaa tokenin oikeellisuus
                    if (payload.username === username && payload.isadmin === true) {
                        // token sessionStorageen
                        sessionStorage.setItem('accesstoken', JSON.stringify({ username: username, token: token }));
                        _this.loginTrue(); // lähetetään viesti navbariin että vaihdetaan login:true -tilaan
                        console.log('login onnistui');
                        return true; // saatiin token
                    }
                    else {
                        console.log('login epäonnistui');
                        return false; // ei saatu tokenia
                    }
                }
                catch (err) {
                    return false;
                }
            }
            else {
                console.log('tokenia ei ole');
                return false;
            }
        }));
    };
    /* Ilmoitetaan navbariin että koska ollaan loggauduttu,
       niin Logout on mahdollista tehdä, joten vaihdetaan navbariin login-linkin
       tilalle logout-linkki
    */
    AuthService.prototype.loginTrue = function () {
        this.subject.next(true);
        return this.subject.asObservable();
    };
    // logout poistaa tokenin sessionStoragesta
    AuthService.prototype.logout = function () {
        this.token = null;
        sessionStorage.removeItem('accesstoken');
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/list/list.component.html":
/*!******************************************!*\
  !*** ./src/app/list/list.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"d-flex mt-3 mb-3\">List of movies</div>\n\n<div class=\"table-responsive\">\n  <table class=\"table table-striped\">\n    <thead>\n      <tr>\n        <th></th>\n        <th>Movie</th>\n        <th>Year</th>\n        <th>Length</th>\n        <th>Rating</th>\n        <th>Genre</th>\n        <th>Synopsis</th>\n      </tr>\n    </thead>\n    <tbody>\n      <!--*ngFor on looppidirektiivi-->\n      <tr *ngFor=\"let m of movies\">\n        <td><img src=\"{{m.imgurl}}\"/></td>\n        <td (click)=\"showReview(m)\">{{m.name}}</td>\n        <td>{{m.year}}</td>\n        <td>{{m.length}}</td>\n        <td>{{m.rating}}</td>\n        <td>{{m.genre}}</td>\n        <td>{{m.review}}</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/list/list.component.ts":
/*!****************************************!*\
  !*** ./src/app/list/list.component.ts ***!
  \****************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../movie.service */ "./src/app/movie.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListComponent = /** @class */ (function () {
    // konstruktorissa injektoidaan service list-komponenttiin
    function ListComponent(movieService) {
        var _this = this;
        this.movieService = movieService;
        this.movies = []; // elokuvat tulevat tähän taulukkoon
        this.movieService.getMovies().subscribe(function (data) { return _this.movies = data; });
    }
    ListComponent.prototype.ngOnInit = function () {
    };
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/list/list.component.html")
        }),
        __metadata("design:paramtypes", [_movie_service__WEBPACK_IMPORTED_MODULE_1__["MovieService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"d-flex mt-3 mb-3\">Login</div>\n<form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f.value)\">\n    <div class=\"form-group\">\n        <label for=\"username\">Username:</label>\n        <input type=\"text\" class=\"form-control\" name=\"username\" ngModel />\n        <label for=\"password\">Password:</label>\n        <input type=\"password\" class=\"form-control\" name=\"password\" ngModel /><br />\n        <button type=\"submit\" class=\"btn btn-light\">Log In</button>\n    </div>\n    <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\n</form>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    // injektoidaan router ja authService
    function LoginComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.error = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        // aina kun login-komponentti ladataan, poistetaan token
        this.authService.logout();
    };
    // lomakkeen lähetys
    // authService palauttaa observablen jossa on joko true tai false
    LoginComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        this.authService.login(formData.username, formData.password)
            .subscribe(function (result) {
            if (result === true) {
                _this.router.navigate(['/admin']);
            }
            else {
                _this.error = 'Username or password incorrect';
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/movie.service.ts":
/*!**********************************!*\
  !*** ./src/app/movie.service.ts ***!
  \**********************************/
/*! exports provided: MovieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieService", function() { return MovieService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var headers = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
var MovieService = /** @class */ (function () {
    function MovieService(http) {
        this.http = http;
        this.apiUrl = 'movies'; // apin osoite
    } // HttpClientin DI
    // Virheenkäsittelymetodi joka palauttaa observablen
    MovieService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return (error.message || error);
    };
    // Kaikkien opiskelijoiden haku. Palauttaa observablena opiskelijataulukon
    MovieService.prototype.getMovies = function () {
        return this.http.get(this.apiUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    /** POST: lisätään elokuva palvelimelle.
     * Movien tyyppi on any, koska _id puuttuu eikä noudateta movie.ts:n mallia.
     * _id jätetään pois opiskelijaa lisättaessä, koska Mongo lisää sen automaattisesti
    */
    MovieService.prototype.addMovie = function (movie) {
        // serveri vaatii tokenin jotta kannan muokkaus olisi mahdollista
        var mytoken = JSON.parse(sessionStorage['accesstoken']);
        var tokenheaders = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'x-access-token': mytoken.token }) };
        return this.http.post(this.apiUrl, movie, tokenheaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    // PUT: päivitys id:n perusteella
    MovieService.prototype.updateMovie = function (movie) {
        var mytoken = JSON.parse(sessionStorage['accesstoken']);
        var tokenheaders = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'x-access-token': mytoken.token }) };
        var url = this.apiUrl + "/" + movie._id;
        return this.http.put(url, movie, tokenheaders).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    // DEL: poistetaan elokuva
    MovieService.prototype.delMovie = function (id) {
        var mytoken = JSON.parse(sessionStorage['accesstoken']);
        var tokenheaders = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'x-access-token': mytoken.token }) };
        var url = this.apiUrl + "/" + id;
        return this.http.delete(url, tokenheaders).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    MovieService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MovieService);
    return MovieService;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm bg-light navbar-light\">\n  <div class=\"navbar-header\">\n    <a class=\"navbar-brand\" routerLink=\"/\">MovieDB</a>\n  </div>\n\n  <!-- Toggler/collapsibe Button -->\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/\">Movies</a></li>\n      <li *ngIf=\"login\" class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/newreview\">Add a new movie</a></li>\n      <li *ngIf=\"login\" class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/admin\">Admin</a></li>\n      <li *ngIf=\"!login\" class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/login\">Login</a></li>\n      <li *ngIf=\"login\" class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/login\" (click)=\"doLogout()\">Logout</a></li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService) {
        var _this = this;
        this.authService = authService;
        // Tilataan viesti ja tallennetaan tulos this.login -muuttujaan
        this.subscription = this.authService.loginTrue().subscribe(function (message) { _this.login = message; });
        /* varmistetaan että login -tila säilyy myös kun sivu reffataan
           varmistus tehdään katsomalla onko token sessionstoragessa.
           Yllä oleva observablen tilaus silti tarvitaan, sillä sessionstoragen
           tarkistus vaatii aina reffauksen koska sitä ei voi kutsua asynkronisesti. */
        var atoken = sessionStorage.getItem('accesstoken');
        if (atoken) {
            this.login = true;
        }
        else {
            this.login = false;
        }
    }
    NavbarComponent.prototype.ngOnDestroy = function () {
        // lopetetaan tilaus kun komponentti tuhotaan
        this.subscription.unsubscribe();
    };
    NavbarComponent.prototype.doLogout = function () {
        this.login = false;
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html")
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/newreview/newreview.component.html":
/*!****************************************************!*\
  !*** ./src/app/newreview/newreview.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"d-flex mt-3 mb-3\">Submit a new movie</div>\n  <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f.value)\">\n    <div class=\"form-group\">\n      <label for=\"imgurl\">img_url;</label>\n      <input type=\"text\" class=\"form-control\" placeholder=\"https://www...\" name=\"imgurl\" [(ngModel)]=\"imgurl\" ngModel />\n      <label for=\"name\">Movie's name:</label>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Name\" name=\"name\" [(ngModel)]=\"name\" ngModel />\n      <label for=\"year\">Year:</label>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Year\" name=\"year\" [(ngModel)]=\"year\" ngModel />\n      <label for=\"length\">Length:</label>\n      <input type=\"text\" class=\"form-control\" placeholder=\"0h 00min\" name=\"length\" [(ngModel)]=\"length\" ngModel />\n      <label for=\"rating\">Rating:</label>\n      <input type=\"text\" class=\"form-control\" placeholder=\"0.0\" name=\"rating\" [(ngModel)]=\"rating\" ngModel />\n      <label for=\"genre\">Genre:</label>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Action, Drama, Fantasy etc.\" name=\"genre\" [(ngModel)]=\"genre\"\n        ngModel />\n      <label for=\"review\">Synopsis:</label>\n      <textarea rows=\"6\" type=\"text\" class=\"form-control\" placeholder=\"Write your synopsis...\" name=\"review\" [(ngModel)]=\"review\"\n        ngModel>\n                  </textarea>\n      <input type=\"hidden\" name=\"id\" [(ngModel)]=\"id\" ngModel />\n    </div>\n    <!--<button (click)=\"add(m)\" class=\"btn btn-light\">Submit</button>-->\n    <button type=\"submit\" class=\"btn btn-light\">Submit</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/newreview/newreview.component.ts":
/*!**************************************************!*\
  !*** ./src/app/newreview/newreview.component.ts ***!
  \**************************************************/
/*! exports provided: NewreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewreviewComponent", function() { return NewreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../movie.service */ "./src/app/movie.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewreviewComponent = /** @class */ (function () {
    function NewreviewComponent(router, movieService) {
        this.router = router;
        this.movieService = movieService;
        this.movies = []; // elokuvat tulevat tähän taulukkoon
    }
    NewreviewComponent.prototype.getMovies = function () {
        var _this = this;
        this.movieService.getMovies().subscribe(function (data) { return _this.movies = data; });
    };
    NewreviewComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        console.log(formData);
        // tässä pitää valita onko kyseessä uuden lisäys vai muokkaus
        // servicessä on eri metodit postille ja putille
        // lisätään opiskelija ja laitetaan se heti listaan
        this.movieService.addMovie({
            'imgurl': formData.imgurl,
            'name': formData.name,
            'year': formData.year,
            'length': formData.length,
            'rating': formData.rating,
            'genre': formData.genre,
            'review': formData.review
            // samalla kun data tilataan se pushataan komponentin students -taulukkoon
        }).subscribe(function (data) { return _this.movies.push(data); });
        this.router.navigate(['/']);
    };
    NewreviewComponent.prototype.ngOnInit = function () {
        this.getMovies();
    };
    NewreviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-newreview',
            template: __webpack_require__(/*! ./newreview.component.html */ "./src/app/newreview/newreview.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _movie_service__WEBPACK_IMPORTED_MODULE_1__["MovieService"]])
    ], NewreviewComponent);
    return NewreviewComponent;
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

module.exports = __webpack_require__(/*! C:\Users\santt\Desktop\Koulu\Web-SK_2018\HarkkaProjekti\restapi\meanfront\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map