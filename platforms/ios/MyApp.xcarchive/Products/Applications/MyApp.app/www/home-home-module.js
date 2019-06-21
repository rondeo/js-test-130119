(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<div class=\"container\"\n     fxLayout=\"column\"\n     fxLayoutGap=\"10px\">\n     \n     <div>\n  <button class=\"buttonOnTop\"\n  (click)=\"this.chooseFile()\"\n  >\n  <ion-icon name=\"open\"></ion-icon>\n</button>\n\n<button class=\"buttonOnTop\"\n  (click)=\"this.changeColorModeToRG()\"\n  >RG</button>\n\n  <button class=\"buttonOnTop\"\n  (click)=\"this.changeColorModeToRGB()\"\n  >RGB</button>\n  </div>\n\n<div id=\"spanText\">spanText</div>\n\n<div fxFlex >\n  <mat-card>\n    <mat-card-header>\n    </mat-card-header>\n    <mat-card-content>\n      <p>”HERE”\n      </p>\n    </mat-card-content>\n  </mat-card>\n</div>\n</div>\n\n\n<div >\n\n<p *ngFor=\"let line of this.linesArray; let i = index\">\n    \n    <span *ngIf=\"this.twoOrThreeFlag==0\">\n        {{line}} \n   </span>\n \n  \n  <span *ngIf=\"this.twoOrThreeFlag==1\" [ngSwitch]=\"(i+1)%2\">\n        <span *ngSwitchCase=\"'0'\" style = \"color:red\">  {{line}} \n          </span>\n        <span *ngSwitchCase=\"'1'\" style = \"color:green\">  {{line}} \n          </span>\n    </span>\n\n\n\n\n\n    <span *ngIf=\"this.twoOrThreeFlag==2\" [ngSwitch]=\"(i+1)%3\">\n        <span *ngSwitchCase=\"'0'\" style = \"color:red\">  {{line}} \n          </span>\n        <span *ngSwitchCase=\"'1'\" style = \"color:green\">  {{line}} \n          </span>\n          <span *ngSwitchCase=\"'2'\" style = \"color:blue\">  {{line}} \n            </span>\n    </span>\n</p>\n\n</div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".buttonOnTop {\n  background-color: blue;\n  color: yellow;\n  width: 100px;\n  height: 100px;\n  margin: 50px;\n  font-size: 20pt; }\n\n.textAreaClass {\n  background-color: blue;\n  color: yellow; }\n\n#spanText {\n  position: absolute;\n  visibility: hidden;\n  height: auto;\n  width: auto;\n  white-space: nowrap;\n  /* Thanks to Herb Caudill comment */ }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aF9rZXJ0c2FsaXMvQWxsSW9uaWNQcm9qZWN0cy9EeXNFZGl0b3Ivc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksc0JBQXNCO0VBQ3RCLGFBQWEsRUFBQTs7QUFHakI7RUFFSSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsbUJBQW1CO0VBQUUsbUNBQUEsRUFBb0MiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbk9uVG9we1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gICAgY29sb3I6IHllbGxvdztcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBtYXJnaW46IDUwcHg7XG4gICAgZm9udC1zaXplOiAyMHB0O1xufVxuLnRleHRBcmVhQ2xhc3N7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbiAgICBjb2xvcjogeWVsbG93O1xuXG59XG4jc3BhblRleHRcbntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogYXV0bztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyAvKiBUaGFua3MgdG8gSGVyYiBDYXVkaWxsIGNvbW1lbnQgKi9cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_file_picker_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/file-picker/ngx */ "./node_modules/@ionic-native/file-picker/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var HomePage = /** @class */ (function () {
    function HomePage(filePicker, file, platform) {
        var _this = this;
        this.filePicker = filePicker;
        this.file = file;
        this.twoOrThreeFlag = 0;
        this.str = ""; //abc\ndef\nghi\njkl\nmno\npqr\nstu\nvwx\nyza";
        this.linesArray = [];
        this.maxTextWidth = 0;
        platform.ready().then(function (readySource) {
            _this.maxTextWidth = 768; //platform.width();
        });
    }
    HomePage.prototype.getTextOfFile = function (currentUrl) {
        var _this = this;
        console.log("currentUrl= " + currentUrl);
        currentUrl = currentUrl.replace("/private", "file://");
        var path = currentUrl.substring(0, currentUrl.lastIndexOf('/'));
        var file = currentUrl.substring(currentUrl.lastIndexOf('/') + 1, currentUrl.length);
        this.file.readAsBinaryString(path, file)
            .then(function (content) {
            currentUrl = content + ''; //JSON.stringify();
            console.log("File-Content: " + currentUrl); //JSON.stringify(content));
            _this.splitLines(currentUrl);
        })
            .catch(function (err) {
            console.log('err2= ' + JSON.stringify(err));
        });
    };
    HomePage.prototype.replaceBigItems = function () {
        console.log("replaceBigItems= ");
        for (var i = 0; i < this.linesArray.length; i++) {
            var thisLine = this.linesArray[i];
            if (this.getTextWidth(thisLine) > 768) {
                var thisLine1 = thisLine.slice(0, thisLine.length / 2);
                var thisLine2 = thisLine.slice(thisLine.length / 2);
                this.linesArray.splice(i, 1);
                this.linesArray.splice(i, 0, thisLine1);
                this.linesArray.splice(i + 1, 0, thisLine2);
            }
        }
    };
    HomePage.prototype.splitLinesArray = function (text) {
        if (text === void 0) { text = ''; }
        var startPos = text.indexOf("\cf");
        text = text.slice(startPos + 3);
        this.linesArray = text.split("\n");
        return null;
    };
    HomePage.prototype.splitLines = function (text) {
        var _this = this;
        if (text === void 0) { text = ''; }
        this.splitLinesArray(text);
        setTimeout(function () {
            _this.replaceBigItems();
        }, 2000);
    };
    HomePage.prototype.getTextWidth = function (text) {
        var spanTest = document.getElementById("spanText");
        spanTest.innerHTML = text;
        return spanTest.clientWidth;
    };
    HomePage.prototype.changeColorModeToRG = function () {
        this.twoOrThreeFlag = 1;
    };
    HomePage.prototype.changeColorModeToRGB = function () {
        this.twoOrThreeFlag = 2;
    };
    HomePage.prototype.chooseFile = function () {
        var _this = this;
        this.filePicker.pickFile()
            .then(function (uri) {
            console.log("uri= " + uri);
            _this.getTextOfFile(uri);
        })
            .catch(function (err) { return console.log('Error', err); });
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_file_picker_ngx__WEBPACK_IMPORTED_MODULE_2__["IOSFilePicker"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__["File"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map