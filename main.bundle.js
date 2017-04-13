webpackJsonp([1,4],{

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "\n.container{\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n}\n.sidebar{\n    position: absolute;\n    background:#2b2f3e;\n    top:0;\n    left:0;\n    width:17%;\n    height: 100%;  \n    box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;  \n}\n.sidebar h2{\n    position: relative;\n    margin:  2vw 0  6vw 2vw;\n    color: #565a69;\n    font: lighter  2.5vw  \"Open-Sans\", sans-serif; \n    cursor: pointer;\n}\n.sidebar ul li{\n  \n    height: 4.5vw;\n    text-align: center;\n    font: 1.5vw \"Open-Sans\", sans-serif;\n    color: #fff;\n    cursor: pointer;\n    line-height: 4.5vw;\n    box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n}\n.bg{\n    background:#ff3a51;\n}\n.content{\n    position: absolute;\n    top: 0;\n    right:0;\n    background: #f9f9f9;\n    width:83%;\n    height: 100%;\n    box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, ".items, .comments{\n    position: absolute;\n    width: 45%;\n    background:#fff;\n    max-height: 90%;\n    margin: 3% 1% 0 0;\n    border: 2px solid #eee;\n    border-radius: 3px;\n    /*overflow-y:scroll ;*/\n}\n.items{\n    left: 3vw;\n}\n.comments{\n    right: 3vw;\n}\n\n.items h2, .comments h2{\n     font: lighter  2.5vw  \"Open-Sans\", sans-serif; \n     color: #565a69;\n     margin: 2vw 3vw ;\n}\n\n.addItem{\n    margin-bottom: 5%;\n}\n\n.addItem input[type=text]{\n    float: left;\n    width: 60%;\n    height: 3vw;\n    margin: 0 2% 0 5%;\n    padding-left: 2%;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    font: lighter 1.5vw  \"Open-Sans\", sans-serif; \n    color: #b3b3b3;\n}\n.addItem input[type=button]{\n    display: block;\n    width: 27%;\n    height: 3.3vw;\n    background: #27ccc0;\n    color: #fff;\n    border-radius: 4px;\n    font: bold  1.5vw  \"Open-Sans\", sans-serif; \n    border:none;\n}\n.addItem input[type=button]:active{\n    background: red;\n    outline:none;\n}\n.red{\n    border-left: 8px solid #ff2f5a;\n}\n.item{\n    position: relative;\n    height: 5vw;\n    line-height: 5vw;\n    margin:0 5%;\n    border-bottom: 2px solid #f2f2f2;\n}\n.itemName{\n    color: #2b2f3e;\n    font: bold  1vw  \"Open-Sans\", sans-serif; \n    cursor: pointer;\n}\n.commentsNumber{\n    background: #27ccc0;\n    padding:  1% 2%;\n    margin: 2%;\n    border-radius: 45%;\n    color: #fff;\n    font: bold  1.5vw  \"Open-Sans\", sans-serif; \n}\n.item input[type=button]{\n    position: absolute;\n    right: 0;\n    top: 15%;\n    width: 24%;\n    height: 3.3vw;\n    border-radius: 5px;\n    border: 1px solid #ff3159;\n    background: #fff;\n    font:  1.3vw  \"Open-Sans\", sans-serif;\n    color: #ff305a; \n}\n.item input[type=button]:active{\n    background: #ff305a;\n    color: #fff;\n    outline:none;\n}\n.comment{\n    margin:0 4% 5% 4%;\n    padding-bottom: 4%;\n    font:  1vw  \"Open-Sans\", sans-serif;\n    color: #666666;\n    border-bottom: 2px solid #f2f2f2;\n}\n.comments img{\n    width: 70px;\n    height: 70px;\n    float:left; \n    margin-right: 4%;\n}\n.comment span{\n    display: inline-block;\n    width: 75%;\n    min-height: 70px;\n}\n.self-comment{\n    margin:0 4% 5% 4%;\n}\n.self-comment textarea{\n    width: 70%;\n    height: 80px;\n    border: 1px solid #f2f2f2;\n    font:  1vw  \"Open-Sans\", sans-serif;\n    color: #666666;\n    border-radius: 4px;\n    resize: none;\n}\n\n\n ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "h1,h2{\n    text-align: center;\n    margin: 5%;\n    color: forestgreen;\n}\nh1{\n    font: bold 5vw \"Open Sans\", sans-serif;\n}\nh2{\n    font: bold 2vw \"Open Sans\", sans-serif;\n}\n ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n    <div class=\"sidebar\">\n        <h2 routerLink='/'>Main</h2>\n        <ul>\n            <li routerLink='/detail' routerLinkActive='bg'>Overview</li>\n        </ul>\n    </div>\n    <div class=\"content\">\n        <router-outlet></router-outlet>\n    </div>\n</div>"

/***/ }),

/***/ 161:
/***/ (function(module, exports) {

module.exports = "<div class='items' id='items'>\n    <h2>Items</h2>\n    <div class='addItem'>\n        <input type=\"text\" placeholder=\"Type name here...\" #name = 'ngModel' [(ngModel)]='addName' required >\n        <input type=\"button\" [disabled]=\"name.invalid\" value='Add item' (click)='createNew()'>\n    </div>\n    <div class=\"item-wrap\" *ngFor='let item of Data'>\n        <div class='item'(click)='showComments(item, $event)'>\n            <span class='itemName' >{{item.name}}</span>\n            <span class='commentsNumber'>{{item.numberComments}}</span>\n            <input type=\"button\" value='Delete' (click)='delete(item)'>\n        </div>\n    </div>\n</div>\n<div class='comments' id ='comments'>\n    <h2>#Comments</h2>\n    <div class=\"comment\" *ngFor='let i of comments'>\n        <img src=\"{{i.avatarURL}}\" alt=\"avatar\" >\n        <span>{{i.comment}}</span>\n    </div>\n    <div *ngIf='edit' class=\"self-comment\">\n        <img src=\"assets/images/avatar_2.gif\" alt=\"avatar1\">\n        <textarea name=\"self\"  cols=\"30\" rows=\"10\" placeholder=\"press 'Enter' to Save\" [(ngModel)]='comment' #comdata = 'ngModel'(keyup)='addComment($event)'></textarea>\n    </div>\n</div>"

/***/ }),

/***/ 162:
/***/ (function(module, exports) {

module.exports = "<h1>Hello World!!!</h1>\n<h2>To check Task you should click \"Overview\"</h2>"

/***/ }),

/***/ 163:
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\n"

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(87);


/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_shared_initial_data__ = __webpack_require__(98);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DetailComponent = (function () {
    function DetailComponent() {
        this.initial = __WEBPACK_IMPORTED_MODULE_1__assets_shared_initial_data__["a" /* initialData */];
        this.edit = false;
    }
    DetailComponent.prototype.ngOnInit = function () {
        this.getData();
        this.checkHeight();
    };
    DetailComponent.prototype.setData = function () {
        var data = JSON.stringify(this.Data);
        window.localStorage.setItem('ThemesDB', data);
    };
    DetailComponent.prototype.getData = function () {
        var data = JSON.parse(window.localStorage.getItem('ThemesDB'));
        if (data === null || data.length == 0) {
            this.Data = this.initial;
            this.setData();
            return;
        }
        this.Data = data;
    };
    DetailComponent.prototype.delete = function (id) {
        var index = this.Data.indexOf(id);
        this.Data.splice(index, 1);
        this.comments = undefined;
        this.edit = false;
        this.setData();
    };
    DetailComponent.prototype.showComments = function (item, event) {
        var clear = document.getElementsByClassName('red');
        var elem = event.target.parentNode;
        if (clear.length) {
            for (var i = 0, len = clear.length; i < len; i++) {
                clear[i].className = 'item-wrap';
            }
            this.edit = false;
        }
        if (elem.className != 'item-wrap') {
            elem.parentNode.className += ' red';
        }
        else {
            elem.className += ' red';
        }
        this.comments = item.userComments;
        this.itemIndex = this.Data.indexOf(item);
        this.comment = null;
        this.edit = true;
    };
    DetailComponent.prototype.createNew = function () {
        if (this.addName.length > 30) {
            this.addName = null;
            alert('Too many symbols!');
        }
        this.Data.push(new __WEBPACK_IMPORTED_MODULE_1__assets_shared_initial_data__["b" /* Theme */](this.addName));
        this.setData();
        this.addName = null;
    };
    DetailComponent.prototype.addComment = function (event) {
        if (event.keyCode === 13) {
            var currAmountComments = +this.Data[this.itemIndex].numberComments;
            this.Data[this.itemIndex].userComments.push({
                avatarURL: 'assets/images/avatar_2.gif',
                comment: this.comment
            });
            this.Data[this.itemIndex].numberComments = ++currAmountComments;
            ;
            this.setData();
            this.comment = null;
        }
        else {
            return;
        }
    };
    DetailComponent.prototype.checkHeight = function () {
        var items = document.getElementById('items');
        var comments = document.getElementById('comments');
        var observer = new MutationObserver(function (target) {
            target.forEach(function (element) {
                var doc = document.documentElement.clientHeight;
                var percent = Math.round(element.target.clientHeight / doc * 100);
                if (percent > 80) {
                    element.target.style.overflowY = 'auto';
                }
            });
        });
        var config = { attributes: true, childList: true, characterData: true };
        observer.observe(items, config);
        observer.observe(comments, config);
    };
    return DetailComponent;
}());
DetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-detail',
        template: __webpack_require__(161),
        styles: [__webpack_require__(156)]
    }),
    __metadata("design:paramtypes", [])
], DetailComponent);

//# sourceMappingURL=detail.component.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(162),
        styles: [__webpack_require__(157)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-not-found',
        template: __webpack_require__(163),
        styles: [__webpack_require__(158)]
    }),
    __metadata("design:paramtypes", [])
], NotFoundComponent);

//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ 86:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 86;


/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(99);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(160),
        styles: [__webpack_require__(155)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routing_module__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__detail_detail_component__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__not_found_not_found_component__ = __webpack_require__(59);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__detail_detail_component__["a" /* DetailComponent */],
            __WEBPACK_IMPORTED_MODULE_9__not_found_not_found_component__["a" /* NotFoundComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__["LocalStorageModule"].withConfig({
                prefix: 'app-root',
                storageType: 'localStorage'
            }),
            __WEBPACK_IMPORTED_MODULE_4__routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detail_detail_component__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__not_found_not_found_component__ = __webpack_require__(59);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var appRoutes = [
    { path: 'detail', component: __WEBPACK_IMPORTED_MODULE_3__detail_detail_component__["a" /* DetailComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_4__not_found_not_found_component__["a" /* NotFoundComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=routing.module.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Theme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initialData; });
var Theme = (function () {
    function Theme(name) {
        this.name = name;
        this.userComments = [];
        this.numberComments = 0;
    }
    return Theme;
}());

var initialData = [
    {
        name: 'First item with custom name',
        numberComments: 2,
        userComments: [
            {
                avatarURL: 'assets/images/avatar.gif',
                comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde maxime \n                       recusandae placeat nostrum, qui eos aperiam saepe, temporibus vel \n                       laboriosam id eum excepturi doloribus autem obcaecati nihil aliquid sed \n                       doloremque."
            },
            {
                avatarURL: 'assets/images/avatar_1.gif',
                comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde maxime \n                       recusandae placeat nostrum, qui eos aperiam saepe, temporibus vel \n                       laboriosam id eum excepturi doloribus autem obcaecati nihil aliquid sed \n                       doloremque."
            }
        ]
    },
    {
        name: 'Second item with custom name',
        numberComments: 1,
        userComments: [
            {
                avatarURL: 'assets/images/avatar_3.gif',
                comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde maxime \n                       recusandae placeat nostrum, qui eos aperiam saepe, temporibus vel \n                       laboriosam id eum excepturi doloribus autem obcaecati nihil aliquid sed \n                       doloremque.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde maxime \n                       recusandae placeat nostrum, qui eos aperiam saepe, temporibus vel \n                       laboriosam id eum excepturi doloribus autem obcaecati nihil aliquid sed \n                       doloremque."
            }
        ]
    },
    {
        name: 'Third item with custom name',
        numberComments: 3,
        userComments: [
            {
                avatarURL: 'assets/images/avatar_3.gif',
                comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde maxime \n                       recusandae placeat nostrum, qui eos aperiam saepe, temporibus vel \n                       laboriosam id eum excepturi doloribus autem obcaecati nihil aliquid sed \n                       doloremque."
            },
            {
                avatarURL: 'assets/images/avatar.gif',
                comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde maxime \n                       recusandae placeat nostrum, qui eos aperiam saepe, temporibus vel \n                       laboriosam id eum excepturi doloribus autem obcaecati nihil aliquid sed \n                       doloremque."
            },
            {
                avatarURL: 'assets/images/avatar_1.gif',
                comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde maxime \n                       recusandae placeat nostrum, qui eos aperiam saepe, temporibus vel \n                       laboriosam id eum excepturi doloribus autem obcaecati nihil aliquid sed \n                       doloremque."
            }
        ]
    },
];
//# sourceMappingURL=initial.data.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[194]);
//# sourceMappingURL=main.bundle.js.map