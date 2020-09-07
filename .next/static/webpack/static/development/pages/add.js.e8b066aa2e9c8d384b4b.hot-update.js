webpackHotUpdate("static/development/pages/add.js",{

/***/ "./components/AddProduct/AddPants.tsx":
/*!********************************************!*\
  !*** ./components/AddProduct/AddPants.tsx ***!
  \********************************************/
/*! exports provided: ADD_PANTS_MUTATION, AddPants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_PANTS_MUTATION", function() { return ADD_PANTS_MUTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPants", function() { return AddPants; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");




var _this = undefined,
    _jsxFileName = "/Users/aleksey/Dev/Trash/shopping-cart/components/AddProduct/AddPants.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  mutation AddPants($input: AddPantsInput!) {\n    addPants(data: $input) {\n      id\n      name\n      type\n      color\n      width\n      length\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var ADD_PANTS_MUTATION = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_4__["gql"])(_templateObject());
var AddPants = function AddPants(_ref) {
  var onDone = _ref.onDone;

  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_4__["useMutation"])(ADD_PANTS_MUTATION),
      _useMutation2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useMutation, 2),
      addShirt = _useMutation2[0],
      loading = _useMutation2[1].loading;

  var handleSubmit = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function _callee(event) {
    var formData, input;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            formData = new FormData(event.target);
            input = {
              color: formData.get('color').toString(),
              name: formData.get('name').toString(),
              width: parseInt(formData.get('width').toString(), 10),
              length: parseInt(formData.get('length').toString(), 10)
            };
            event.preventDefault();
            _context.next = 5;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(addShirt({
              variables: {
                input: input
              }
            }));

          case 5:
            onDone();

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  }, [onDone]);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, __jsx("form", {
    className: "form",
    onSubmit: handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "form__fields",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, __jsx("label", {
    className: "form__fields__label",
    htmlFor: "name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, "Name:"), __jsx("input", {
    name: "name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }), __jsx("label", {
    className: "form__fields__label",
    htmlFor: "color",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, "Color:"), __jsx("input", {
    name: "color",
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }), __jsx("label", {
    className: "form__fields__label",
    htmlFor: "color",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, "Width:"), __jsx("input", {
    name: "width",
    min: "1",
    type: "number",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }), __jsx("label", {
    className: "form__fields__label",
    htmlFor: "color",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, "Length:"), __jsx("input", {
    name: "length",
    min: "1",
    type: "number",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "form__actions",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, __jsx("button", {
    className: "form__actions__item",
    disabled: loading,
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, "Add"), __jsx("button", {
    className: "form__actions__item",
    disabled: loading,
    type: "button",
    onClick: onDone,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }, "Cancel"))));
};

/***/ }),

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
    className: "add-actions__button",
    onClick: handleAddShirt,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, "Add Shirt"), __jsx("button", {
    className: "add-actions__button",
    onClick: handleAddPants,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, "Add Pants")));
};

/***/ }),

/***/ "./components/AddProduct/AddShirt.tsx":
/*!********************************************!*\
  !*** ./components/AddProduct/AddShirt.tsx ***!
  \********************************************/
/*! exports provided: ADD_SHIRT_MUTATION, AddShirt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_SHIRT_MUTATION", function() { return ADD_SHIRT_MUTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddShirt", function() { return AddShirt; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var generated__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! generated */ "./generated/index.ts");




var _this = undefined,
    _jsxFileName = "/Users/aleksey/Dev/Trash/shopping-cart/components/AddProduct/AddShirt.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  mutation AddShirt($input: AddShirtInput!) {\n    addShirt(data: $input) {\n      id\n      name\n      type\n      color\n      size\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var ADD_SHIRT_MUTATION = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_4__["gql"])(_templateObject());
var AddShirt = function AddShirt(_ref) {
  var onDone = _ref.onDone;

  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_4__["useMutation"])(ADD_SHIRT_MUTATION),
      _useMutation2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useMutation, 2),
      addShirt = _useMutation2[0],
      loading = _useMutation2[1].loading;

  var handleSubmit = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function _callee(event) {
    var formData, input;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            formData = new FormData(event.target);
            input = {
              color: formData.get('color').toString(),
              name: formData.get('name').toString(),
              size: parseInt(formData.get('size').toString(), 10)
            };
            event.preventDefault();
            _context.next = 5;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(addShirt({
              variables: {
                input: input
              }
            }));

          case 5:
            onDone();

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  }, [onDone]);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, __jsx("form", {
    className: "form",
    onSubmit: handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "form__fields",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx("label", {
    className: "form__fields__label",
    htmlFor: "name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, "Name:"), __jsx("input", {
    id: "name",
    name: "name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }), __jsx("label", {
    className: "form__fields__label",
    htmlFor: "color",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, "Color:"), __jsx("select", {
    id: "color",
    name: "color",
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, Object.values(generated__WEBPACK_IMPORTED_MODULE_5__["ShirtColor"]).map(function (color) {
    return __jsx("option", {
      key: color,
      value: color,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 15
      }
    }, color);
  })), __jsx("label", {
    className: "form__fields__label",
    htmlFor: "size",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, "Size:"), __jsx("input", {
    id: "size",
    name: "size",
    min: "1",
    type: "number",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "form__actions",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, __jsx("button", {
    className: "form__actions__item",
    disabled: loading,
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }, "Add"), __jsx("button", {
    className: "form__actions__item",
    disabled: loading,
    type: "button",
    onClick: onDone,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }, "Cancel"))));
};

/***/ })

})
//# sourceMappingURL=add.js.e8b066aa2e9c8d384b4b.hot-update.js.map