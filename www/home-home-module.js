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

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n      <div>\n          <button mat-icon-button \n          (click)=\"chooseFile()\"\n          class=\"openButton\">\n              <ion-icon name=\"open\" \n              style=\"font-size: 12pt\"></ion-icon>\n          </button>\n      </div>\n      <div>\n          <button mat-button \n          (click)=\"changeColorModeToRG()\"\n          class=\"openButton\"\n          style=\"left:15%\">\n              RG\n          </button>\n      </div>\n      <div>\n          <button mat-button \n          (click)=\"changeColorModeToRGB()\"\n          class=\"openButton\"\n          style=\"left:25%;width:8%\">\n              RGB\n          </button>\n      </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n\n<div id=\"spanText\">spanText</div>\n<ion-card class=\"textEditor\">\n    <ion-card-content>\n      <div style=\"margin:30px\">\n      <p *ngFor=\"let line of this.linesArray; let i = index\">\n\n        <span *ngIf=\"this.twoOrThreeFlag==0\">\n            {{line}} \n       </span>\n     \n      \n      <span *ngIf=\"this.twoOrThreeFlag==1\" [ngSwitch]=\"(i+1)%2\">\n            <span *ngSwitchCase=\"'0'\" style = \"color:red\">  {{line}} \n              </span>\n            <span *ngSwitchCase=\"'1'\" style = \"color:green\">  {{line}} \n              </span>\n        </span>\n    \n    \n    \n    \n    \n        <span *ngIf=\"this.twoOrThreeFlag==2\" [ngSwitch]=\"(i+1)%3\">\n            <span *ngSwitchCase=\"'0'\" style = \"color:red\">  {{line}} \n              </span>\n            <span *ngSwitchCase=\"'1'\" style = \"color:green\">  {{line}} \n              </span>\n              <span *ngSwitchCase=\"'2'\" style = \"color:blue\">  {{line}} \n                </span>\n        </span>\n    </p>\n    </div>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".buttonOnTop {\n  background-color: blue;\n  color: yellow;\n  width: 100px;\n  height: 100px;\n  margin: 50px;\n  font-size: 20pt; }\n\n.openButton {\n  position: absolute;\n  width: 5%;\n  height: 60%;\n  top: 20%;\n  left: 5%;\n  color: yellow;\n  background-color: primary; }\n\n#spanText {\n  position: absolute;\n  visibility: hidden;\n  height: auto;\n  width: auto;\n  white-space: nowrap;\n  /* Thanks to Herb Caudill comment */ }\n\n.homeMaster {\n  background-color: green; }\n\nion-content {\n  --background: gray; }\n\n.textEditor {\n  background-color: white;\n  color: black;\n  position: absolute;\n  top: 0%;\n  width: 70%;\n  height: 100%;\n  left: 15%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aF9rZXJ0c2FsaXMvQWxsSW9uaWNQcm9qZWN0cy9EeXNFZGl0b3Ivc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksa0JBQWlCO0VBQ2pCLFNBQVE7RUFDWixXQUFVO0VBQ1YsUUFBTztFQUNQLFFBQU87RUFDUCxhQUFhO0VBQ2IseUJBQXdCLEVBQUE7O0FBRXhCO0VBRUksa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLG1CQUFtQjtFQUFFLG1DQUFBLEVBQW9DOztBQUU3RDtFQUNJLHVCQUF1QixFQUFBOztBQUV6QjtFQUNFLGtCQUFhLEVBQUE7O0FBRWQ7RUFDSSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsVUFBVTtFQUNWLFlBQVk7RUFDWixTQUFTLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbk9uVG9we1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gICAgY29sb3I6IHllbGxvdztcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBtYXJnaW46IDUwcHg7XG4gICAgZm9udC1zaXplOiAyMHB0O1xufVxuLm9wZW5CdXR0b257XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgd2lkdGg6NSU7XG5oZWlnaHQ6NjAlO1xudG9wOjIwJTtcbmxlZnQ6NSU7XG5jb2xvcjogeWVsbG93O1xuYmFja2dyb3VuZC1jb2xvcjpwcmltYXJ5O1xufVxuI3NwYW5UZXh0XG57XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IGF1dG87XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgLyogVGhhbmtzIHRvIEhlcmIgQ2F1ZGlsbCBjb21tZW50ICovXG59XG4uaG9tZU1hc3RlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIH1cbiAgaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogZ3JheTtcbiAgIH1cbiAgIC50ZXh0RWRpdG9ye1xuICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgdG9wOiAwJTtcbiAgICAgICB3aWR0aDogNzAlO1xuICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICBsZWZ0OiAxNSU7XG4gICAgICAgXG4gICB9Il19 */"

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
            _this.maxTextWidth = 0.68 * platform.width();
        });
    }
    HomePage.prototype.getTextOfFile = function (currentUrl) {
        var _this = this;
        console.log("currentUrl= " + currentUrl);
        currentUrl = currentUrl.replace("/private", "file://");
        var path = currentUrl.substring(0, currentUrl.lastIndexOf('/'));
        var file = currentUrl.substring(currentUrl.lastIndexOf('/') + 1, currentUrl.length);
        this.file.readAsText(path, file)
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
            if (this.getTextWidth(thisLine) > this.maxTextWidth) {
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
        console.log("changeColorModeToRG");
        this.twoOrThreeFlag = 1;
    };
    HomePage.prototype.changeColorModeToRGB = function () {
        console.log("changeColorModeToRGB");
        this.twoOrThreeFlag = 2;
    };
    HomePage.prototype.chooseFile = function () {
        var _this = this;
        console.log("chooseFile");
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