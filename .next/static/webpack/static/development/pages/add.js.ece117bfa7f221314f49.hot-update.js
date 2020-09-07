webpackHotUpdate("static/development/pages/add.js",{

/***/ "./components/AddProduct/AddProduct.tsx":
/*!**********************************************!*\
  !*** ./components/AddProduct/AddProduct.tsx ***!
  \**********************************************/
/*! exports provided: AddProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProduct", function() { return AddProduct; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var generated__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! generated */ "./generated/index.ts");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AddPants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AddPants */ "./components/AddProduct/AddPants.tsx");
/* harmony import */ var _AddShirt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AddShirt */ "./components/AddProduct/AddShirt.tsx");
var _this = undefined,
    _jsxFileName = "/Users/aleksey/Dev/Trash/shopping-cart/components/AddProduct/AddProduct.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var AddProduct = function AddProduct() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      productType = _useState[0],
      setProductType = _useState[1];

  var handleAddShirt = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setProductType(generated__WEBPACK_IMPORTED_MODULE_1__["ProductType"].Shirt);
  }, []);
  var handleAddPants = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setProductType(generated__WEBPACK_IMPORTED_MODULE_1__["ProductType"].Pants);
  }, []);
  var handleDone = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setProductType(null);
  }, []);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "page-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "page-title__header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, "Add new ", productType || 'product'), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    as: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "page-title__action",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, "All products"))), productType === generated__WEBPACK_IMPORTED_MODULE_1__["ProductType"].Shirt && __jsx(_AddShirt__WEBPACK_IMPORTED_MODULE_4__["AddShirt"], {
    onDone: handleDone,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 45
    }
  }), productType === generated__WEBPACK_IMPORTED_MODULE_1__["ProductType"].Pants && __jsx(_AddPants__WEBPACK_IMPORTED_MODULE_3__["AddPants"], {
    onDone: handleDone,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 45
    }
  }), !productType && __jsx("div", {
    className: "add-actions",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx("button", {
    className: "add-actions--button",
    onClick: handleAddShirt,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, "Add Shirt"), __jsx("button", {
    className: "add-actions--button",
    onClick: handleAddPants,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, "Add Pants")));
};

/***/ })

})
//# sourceMappingURL=add.js.ece117bfa7f221314f49.hot-update.js.map