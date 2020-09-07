webpackHotUpdate("static/development/pages/add.js",{

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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      error = _useState[0],
      setError = _useState[1];

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
            _context.prev = 3;
            _context.next = 6;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(addShirt({
              variables: {
                input: input
              }
            }));

          case 6:
            _context.next = 12;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](3);
            setError('Failed to add shirt');
            return _context.abrupt("return");

          case 12:
            onDone();

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[3, 8]], Promise);
  }, [onDone]);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, __jsx("form", {
    className: "form",
    onSubmit: handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "form__fields",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx("label", {
    className: "form__fields__label",
    htmlFor: "name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, "Name:"), __jsx("input", {
    id: "name",
    name: "name",
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
  }, "Color:"), __jsx("select", {
    id: "color",
    name: "color",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, Object.values(generated__WEBPACK_IMPORTED_MODULE_5__["ShirtColor"]).map(function (color) {
    return __jsx("option", {
      key: color,
      value: color,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 15
      }
    }, color);
  })), __jsx("label", {
    className: "form__fields__label",
    htmlFor: "size",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
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
      lineNumber: 68,
      columnNumber: 11
    }
  })), error && __jsx("div", {
    className: "form__error",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 19
    }
  }, error), __jsx("div", {
    className: "form__actions",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, __jsx("button", {
    className: "form__actions__item",
    disabled: loading,
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
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
      lineNumber: 75,
      columnNumber: 11
    }
  }, "Cancel"))));
};

/***/ })

})
//# sourceMappingURL=add.js.0b54f5512aac0b97307b.hot-update.js.map