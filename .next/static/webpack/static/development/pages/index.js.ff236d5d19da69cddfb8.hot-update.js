webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ProductList/ProductItem.tsx":
/*!************************************************!*\
  !*** ./components/ProductList/ProductItem.tsx ***!
  \************************************************/
/*! exports provided: ProductItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductItem", function() { return ProductItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ShirtItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShirtItem */ "./components/ProductList/ShirtItem.tsx");
/* harmony import */ var _PantsItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PantsItem */ "./components/ProductList/PantsItem.tsx");
var _this = undefined,
    _jsxFileName = "/Users/aleksey/Dev/Trash/shopping-cart/components/ProductList/ProductItem.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var ProductItem = function ProductItem(_ref) {
  var product = _ref.product,
      onRemove = _ref.onRemove;
  return __jsx("li", {
    className: "product-list__item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, product.type === 'shirt' && __jsx(_ShirtItem__WEBPACK_IMPORTED_MODULE_1__["ShirtItem"], {
    shirt: product,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 36
    }
  }), product.type === 'pants' && __jsx(_PantsItem__WEBPACK_IMPORTED_MODULE_2__["PantsItem"], {
    pants: product,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 36
    }
  }), __jsx("button", {
    className: "product-list__item__action",
    onClick: function onClick() {
      return onRemove(product.id);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, "Delete"));
};

/***/ })

})
//# sourceMappingURL=index.js.ff236d5d19da69cddfb8.hot-update.js.map