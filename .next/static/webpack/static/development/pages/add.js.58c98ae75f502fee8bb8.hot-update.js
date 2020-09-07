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
    minLength: 1,
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
    min: 1,
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
    min: 1,
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

/***/ })

})
//# sourceMappingURL=add.js.58c98ae75f502fee8bb8.hot-update.js.map