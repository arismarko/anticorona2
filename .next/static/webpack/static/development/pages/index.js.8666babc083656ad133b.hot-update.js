webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Stores/Stores.js":
/*!*************************************!*\
  !*** ./components/Stores/Stores.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Ratings_Rating__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Ratings/Rating */ "./components/Ratings/Rating.js");
/* harmony import */ var _Item_Item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Item/Item */ "./components/Item/Item.js");

var _jsxFileName = "/Volumes/Macintosh HD (Wipro)/Users/aris/projects/anticorona/anticorona/components/Stores/Stores.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var storeName = _ref.storeName,
      description = _ref.description,
      id = _ref.id,
      _ref$rating = _ref.rating,
      rating = _ref$rating === void 0 ? false : _ref$rating,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["storeName", "description", "id", "rating"]);

  return __jsx("div", {
    className: "Store",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    as: "/store/".concat(id, "?rating=4"),
    href: "/store?id=".concat(id, "&rating=4"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, storeName))), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, description), rating && __jsx(_Ratings_Rating__WEBPACK_IMPORTED_MODULE_3__["default"], {
    value: rating,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=index.js.8666babc083656ad133b.hot-update.js.map