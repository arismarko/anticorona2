webpackHotUpdate("static/development/pages/_error.js",{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2FVolumes%2FMacintosh%20HD%20(Wipro)%2FUsers%2Faris%2Fprojects%2Fanticorona%2Fanticorona%2Fsrc%2Fpages%2F_error.js!./":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2FVolumes%2FMacintosh%20HD%20(Wipro)%2FUsers%2Faris%2Fprojects%2Fanticorona%2Fanticorona%2Fsrc%2Fpages%2F_error.js ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/_error", function() {
      var mod = __webpack_require__(/*! ./src/pages/_error.js */ "./src/pages/_error.js")
      if(true) {
        module.hot.accept(/*! ./src/pages/_error.js */ "./src/pages/_error.js", function() {
          if(!next.router.components["/_error"]) return
          var updatedPage = __webpack_require__(/*! ./src/pages/_error.js */ "./src/pages/_error.js")
          next.router.update("/_error", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=next%2Fdist%2Fpages%2F_error!./":
false,

/***/ "./node_modules/next/dist/pages/_error.js":
false,

/***/ "./src/pages/_error.js":
/*!*****************************!*\
  !*** ./src/pages/_error.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Error; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout/index.js");





var _jsxFileName = "/Volumes/Macintosh HD (Wipro)/Users/aris/projects/anticorona/anticorona/src/pages/_error.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;



var Error =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Error, _Component);

  function Error() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Error);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Error).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Error, [{
    key: "render",
    value: function render() {
      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, this.props.err, this.props.statusCode ? "An error ".concat(this.props.statusCode, " occured on server") : "An error occured on the client"));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var res = _ref.res,
          err = _ref.err;
      var statusCode = res ? res.statusCode : err ? err.statusCode : null;
      return {
        statusCode: statusCode,
        err: err ? err.message : ''
      };
    }
  }]);

  return Error;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ }),

/***/ 2:
/*!******************************************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F_error&absolutePagePath=%2FVolumes%2FMacintosh%20HD%20(Wipro)%2FUsers%2Faris%2Fprojects%2Fanticorona%2Fanticorona%2Fsrc%2Fpages%2F_error.js ***!
  \******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F_error&absolutePagePath=%2FVolumes%2FMacintosh%20HD%20(Wipro)%2FUsers%2Faris%2Fprojects%2Fanticorona%2Fanticorona%2Fsrc%2Fpages%2F_error.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2FVolumes%2FMacintosh%20HD%20(Wipro)%2FUsers%2Faris%2Fprojects%2Fanticorona%2Fanticorona%2Fsrc%2Fpages%2F_error.js!./");


/***/ })

})
//# sourceMappingURL=_error.js.de618daf26c5bebb2bfa.hot-update.js.map