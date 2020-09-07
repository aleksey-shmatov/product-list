module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./db/entity/PantsEntity.ts":
/*!**********************************!*\
  !*** ./db/entity/PantsEntity.ts ***!
  \**********************************/
/*! exports provided: PantsEntity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PantsEntity", function() { return PantsEntity; });
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_0__);
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }


let PantsEntity = (_dec = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__["Entity"])({
  name: 'pants'
}), _dec2 = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__["Check"])(`"width" > 0 AND "length" > 0 AND "color" <> ''`), _dec3 = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__["PrimaryColumn"])({
  nullable: false
}), _dec4 = Reflect.metadata("design:type", Number), _dec5 = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__["Column"])({
  nullable: false
}), _dec6 = Reflect.metadata("design:type", String), _dec7 = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__["Column"])({
  nullable: false
}), _dec8 = Reflect.metadata("design:type", Number), _dec9 = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__["Column"])({
  nullable: false
}), _dec10 = Reflect.metadata("design:type", Number), _dec11 = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__["OneToOne"])('ProductEntity', {
  onDelete: 'CASCADE'
}), _dec12 = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__["JoinColumn"])({
  name: 'id'
}), _dec13 = Reflect.metadata("design:type", Object), _dec(_class = _dec2(_class = (_class2 = (_temp = class PantsEntity {
  constructor() {
    _initializerDefineProperty(this, "id", _descriptor, this);

    _initializerDefineProperty(this, "color", _descriptor2, this);

    _initializerDefineProperty(this, "width", _descriptor3, this);

    _initializerDefineProperty(this, "length", _descriptor4, this);

    _initializerDefineProperty(this, "product", _descriptor5, this);
  }

}, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec3, _dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "color", [_dec5, _dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "width", [_dec7, _dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "length", [_dec9, _dec10], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "product", [_dec11, _dec12, _dec13], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class) || _class);

/***/ }),

/***/ "./db/entity/ProductEntity.ts":
/*!************************************!*\
  !*** ./db/entity/ProductEntity.ts ***!
  \************************************/
/*! exports provided: ProductEntity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductEntity", function() { return ProductEntity; });
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PantsEntity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PantsEntity */ "./db/entity/PantsEntity.ts");
/* harmony import */ var _ProductType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductType */ "./db/entity/ProductType.ts");
/* harmony import */ var _ShirtEntity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShirtEntity */ "./db/entity/ShirtEntity.ts");
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }





let ProductEntity = (_dec = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__["Entity"])({
  name: 'product'
}), _dec2 = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__["PrimaryGeneratedColumn"])(), _dec3 = Reflect.metadata("design:type", Number), _dec4 = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__["Column"])({
  nullable: false
}), _dec5 = Reflect.metadata("design:type", String), _dec6 = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__["Column"])({
  type: 'enum',
  enum: _ProductType__WEBPACK_IMPORTED_MODULE_2__["productTypes"],
  nullable: false
}), _dec7 = Reflect.metadata("design:type", typeof _ProductType__WEBPACK_IMPORTED_MODULE_2__["ProductType"] === "undefined" ? Object : _ProductType__WEBPACK_IMPORTED_MODULE_2__["ProductType"]), _dec8 = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__["OneToOne"])('PantsEntity', 'product'), _dec9 = Reflect.metadata("design:type", typeof _PantsEntity__WEBPACK_IMPORTED_MODULE_1__["PantsEntity"] === "undefined" ? Object : _PantsEntity__WEBPACK_IMPORTED_MODULE_1__["PantsEntity"]), _dec10 = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__["OneToOne"])('ShirtEntity', 'product'), _dec11 = Reflect.metadata("design:type", typeof _ShirtEntity__WEBPACK_IMPORTED_MODULE_3__["ShirtEntity"] === "undefined" ? Object : _ShirtEntity__WEBPACK_IMPORTED_MODULE_3__["ShirtEntity"]), _dec(_class = (_class2 = (_temp = class ProductEntity {
  constructor() {
    _initializerDefineProperty(this, "id", _descriptor, this);

    _initializerDefineProperty(this, "name", _descriptor2, this);

    _initializerDefineProperty(this, "type", _descriptor3, this);

    _initializerDefineProperty(this, "pants", _descriptor4, this);

    _initializerDefineProperty(this, "shirt", _descriptor5, this);
  }

}, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec2, _dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "name", [_dec4, _dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "type", [_dec6, _dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "pants", [_dec8, _dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "shirt", [_dec10, _dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);

/***/ }),

/***/ "./db/entity/ProductType.ts":
/*!**********************************!*\
  !*** ./db/entity/ProductType.ts ***!
  \**********************************/
/*! exports provided: ProductType, productTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductType", function() { return ProductType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productTypes", function() { return productTypes; });
let ProductType;

(function (ProductType) {
  ProductType["shirt"] = "shirt";
  ProductType["pants"] = "pants";
})(ProductType || (ProductType = {}));

const productTypes = Object.values(ProductType);

/***/ }),

/***/ "./db/entity/ShirtEntity.ts":
/*!**********************************!*\
  !*** ./db/entity/ShirtEntity.ts ***!
  \**********************************/
/*! exports provided: ShirtColor, ShirtEntity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShirtColor", function() { return ShirtColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShirtEntity", function() { return ShirtEntity; });
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_0__);
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }


let ShirtColor;

(function (ShirtColor) {
  ShirtColor["white"] = "white";
  ShirtColor["grey"] = "grey";
  ShirtColor["blue"] = "blue";
})(ShirtColor || (ShirtColor = {}));

const shirtColors = Object.values(ShirtColor);
let ShirtEntity = (_dec = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__["Entity"])({
  name: 'shirt'
}), _dec2 = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__["Check"])(`"size" > 0`), _dec3 = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__["PrimaryColumn"])({
  nullable: false
}), _dec4 = Reflect.metadata("design:type", Number), _dec5 = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__["Column"])({
  type: 'enum',
  enum: shirtColors,
  nullable: false
}), _dec6 = Reflect.metadata("design:type", typeof ShirtColor === "undefined" ? Object : ShirtColor), _dec7 = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__["Column"])({
  nullable: false
}), _dec8 = Reflect.metadata("design:type", Number), _dec9 = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__["OneToOne"])('ProductEntity', {
  onDelete: 'CASCADE'
}), _dec10 = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__["JoinColumn"])({
  name: 'id'
}), _dec11 = Reflect.metadata("design:type", Object), _dec(_class = _dec2(_class = (_class2 = (_temp = class ShirtEntity {
  constructor() {
    _initializerDefineProperty(this, "id", _descriptor, this);

    _initializerDefineProperty(this, "color", _descriptor2, this);

    _initializerDefineProperty(this, "size", _descriptor3, this);

    _initializerDefineProperty(this, "product", _descriptor4, this);
  }

}, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec3, _dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "color", [_dec5, _dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "size", [_dec7, _dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "product", [_dec9, _dec10, _dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class) || _class);

/***/ }),

/***/ "./graphql/Pants.ts":
/*!**************************!*\
  !*** ./graphql/Pants.ts ***!
  \**************************/
/*! exports provided: Pants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pants", function() { return Pants; });
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! class-validator */ "class-validator");
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(class_validator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var type_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! type-graphql */ "type-graphql");
/* harmony import */ var type_graphql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(type_graphql__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Product */ "./graphql/Product.ts");
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }




let Pants = (_dec = Object(type_graphql__WEBPACK_IMPORTED_MODULE_1__["ObjectType"])({
  implements: _Product__WEBPACK_IMPORTED_MODULE_2__["Product"]
}), _dec2 = Object(type_graphql__WEBPACK_IMPORTED_MODULE_1__["Field"])(), _dec3 = Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["MinLength"])(1), _dec4 = Reflect.metadata("design:type", String), _dec5 = Object(type_graphql__WEBPACK_IMPORTED_MODULE_1__["Field"])(() => type_graphql__WEBPACK_IMPORTED_MODULE_1__["Int"]), _dec6 = Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["Min"])(1), _dec7 = Reflect.metadata("design:type", Number), _dec8 = Object(type_graphql__WEBPACK_IMPORTED_MODULE_1__["Field"])(() => type_graphql__WEBPACK_IMPORTED_MODULE_1__["Int"]), _dec9 = Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["Min"])(1), _dec10 = Reflect.metadata("design:type", Number), _dec(_class = (_class2 = (_temp = class Pants extends _Product__WEBPACK_IMPORTED_MODULE_2__["Product"] {
  constructor(...args) {
    super(...args);

    _initializerDefineProperty(this, "color", _descriptor, this);

    _initializerDefineProperty(this, "width", _descriptor2, this);

    _initializerDefineProperty(this, "length", _descriptor3, this);
  }

}, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "color", [_dec2, _dec3, _dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "width", [_dec5, _dec6, _dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "length", [_dec8, _dec9, _dec10], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);

/***/ }),

/***/ "./graphql/Product.ts":
/*!****************************!*\
  !*** ./graphql/Product.ts ***!
  \****************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
/* harmony import */ var db_entity_ProductType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! db/entity/ProductType */ "./db/entity/ProductType.ts");
/* harmony import */ var type_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! type-graphql */ "type-graphql");
/* harmony import */ var type_graphql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(type_graphql__WEBPACK_IMPORTED_MODULE_1__);
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }



Object(type_graphql__WEBPACK_IMPORTED_MODULE_1__["registerEnumType"])(db_entity_ProductType__WEBPACK_IMPORTED_MODULE_0__["ProductType"], {
  name: 'ProductType'
});
let Product = (_dec = Object(type_graphql__WEBPACK_IMPORTED_MODULE_1__["InterfaceType"])({
  resolveType: value => {
    if (value.type === 'shirt') {
      return 'Shirt';
    } else if (value.type === 'pants') {
      return 'Pants';
    } else {
      throw new Error(`Unknown entity type: ${value.type}`);
    }
  }
}), _dec2 = Object(type_graphql__WEBPACK_IMPORTED_MODULE_1__["Field"])(() => type_graphql__WEBPACK_IMPORTED_MODULE_1__["ID"]), _dec3 = Reflect.metadata("design:type", Number), _dec4 = Object(type_graphql__WEBPACK_IMPORTED_MODULE_1__["Field"])(), _dec5 = Reflect.metadata("design:type", String), _dec6 = Object(type_graphql__WEBPACK_IMPORTED_MODULE_1__["Field"])(() => db_entity_ProductType__WEBPACK_IMPORTED_MODULE_0__["ProductType"]), _dec7 = Reflect.metadata("design:type", typeof db_entity_ProductType__WEBPACK_IMPORTED_MODULE_0__["ProductType"] === "undefined" ? Object : db_entity_ProductType__WEBPACK_IMPORTED_MODULE_0__["ProductType"]), _dec(_class = (_class2 = (_temp = class Product {
  constructor() {
    _initializerDefineProperty(this, "id", _descriptor, this);

    _initializerDefineProperty(this, "name", _descriptor2, this);

    _initializerDefineProperty(this, "type", _descriptor3, this);
  }

}, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec2, _dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "name", [_dec4, _dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "type", [_dec6, _dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);

/***/ }),

/***/ "./graphql/ProductResolver.ts":
/*!************************************!*\
  !*** ./graphql/ProductResolver.ts ***!
  \************************************/
/*! exports provided: ProductResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductResolver", function() { return ProductResolver; });
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! class-validator */ "class-validator");
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(class_validator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var db_entity_PantsEntity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! db/entity/PantsEntity */ "./db/entity/PantsEntity.ts");
/* harmony import */ var db_entity_ProductEntity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! db/entity/ProductEntity */ "./db/entity/ProductEntity.ts");
/* harmony import */ var db_entity_ProductType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! db/entity/ProductType */ "./db/entity/ProductType.ts");
/* harmony import */ var type_graphql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! type-graphql */ "type-graphql");
/* harmony import */ var type_graphql__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(type_graphql__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _db_entity_ShirtEntity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../db/entity/ShirtEntity */ "./db/entity/ShirtEntity.ts");
/* harmony import */ var _Pants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Pants */ "./graphql/Pants.ts");
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Product */ "./graphql/Product.ts");
/* harmony import */ var _Shirt__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Shirt */ "./graphql/Shirt.ts");
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _class4, _class5, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _temp2, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _class7, _class8;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }











let AddShirtInput = (_dec = Object(type_graphql__WEBPACK_IMPORTED_MODULE_4__["InputType"])(), _dec2 = Object(type_graphql__WEBPACK_IMPORTED_MODULE_4__["Field"])(), _dec3 = Reflect.metadata("design:type", String), _dec4 = Object(type_graphql__WEBPACK_IMPORTED_MODULE_4__["Field"])(() => _db_entity_ShirtEntity__WEBPACK_IMPORTED_MODULE_6__["ShirtColor"]), _dec5 = Reflect.metadata("design:type", typeof _db_entity_ShirtEntity__WEBPACK_IMPORTED_MODULE_6__["ShirtColor"] === "undefined" ? Object : _db_entity_ShirtEntity__WEBPACK_IMPORTED_MODULE_6__["ShirtColor"]), _dec6 = Object(type_graphql__WEBPACK_IMPORTED_MODULE_4__["Field"])(() => type_graphql__WEBPACK_IMPORTED_MODULE_4__["Int"]), _dec7 = Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["Min"])(1), _dec8 = Reflect.metadata("design:type", Number), _dec(_class = (_class2 = (_temp = class AddShirtInput {
  constructor() {
    _initializerDefineProperty(this, "name", _descriptor, this);

    _initializerDefineProperty(this, "color", _descriptor2, this);

    _initializerDefineProperty(this, "size", _descriptor3, this);
  }

}, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "name", [_dec2, _dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "color", [_dec4, _dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "size", [_dec6, _dec7, _dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
let AddPantsInput = (_dec9 = Object(type_graphql__WEBPACK_IMPORTED_MODULE_4__["InputType"])(), _dec10 = Object(type_graphql__WEBPACK_IMPORTED_MODULE_4__["Field"])(), _dec11 = Reflect.metadata("design:type", String), _dec12 = Object(type_graphql__WEBPACK_IMPORTED_MODULE_4__["Field"])(), _dec13 = Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["MinLength"])(1), _dec14 = Reflect.metadata("design:type", String), _dec15 = Object(type_graphql__WEBPACK_IMPORTED_MODULE_4__["Field"])(() => type_graphql__WEBPACK_IMPORTED_MODULE_4__["Int"]), _dec16 = Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["Min"])(1), _dec17 = Reflect.metadata("design:type", Number), _dec18 = Object(type_graphql__WEBPACK_IMPORTED_MODULE_4__["Field"])(() => type_graphql__WEBPACK_IMPORTED_MODULE_4__["Int"]), _dec19 = Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["Min"])(1), _dec20 = Reflect.metadata("design:type", Number), _dec9(_class4 = (_class5 = (_temp2 = class AddPantsInput {
  constructor() {
    _initializerDefineProperty(this, "name", _descriptor4, this);

    _initializerDefineProperty(this, "color", _descriptor5, this);

    _initializerDefineProperty(this, "width", _descriptor6, this);

    _initializerDefineProperty(this, "length", _descriptor7, this);
  }

}, _temp2), (_descriptor4 = _applyDecoratedDescriptor(_class5.prototype, "name", [_dec10, _dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class5.prototype, "color", [_dec12, _dec13, _dec14], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class5.prototype, "width", [_dec15, _dec16, _dec17], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class5.prototype, "length", [_dec18, _dec19, _dec20], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class5)) || _class4);
let ProductResolver = (_dec21 = Object(type_graphql__WEBPACK_IMPORTED_MODULE_4__["Resolver"])(() => _Product__WEBPACK_IMPORTED_MODULE_8__["Product"]), _dec22 = Object(type_graphql__WEBPACK_IMPORTED_MODULE_4__["Query"])(() => [_Product__WEBPACK_IMPORTED_MODULE_8__["Product"]]), _dec23 = Reflect.metadata("design:type", Function), _dec24 = Reflect.metadata("design:paramtypes", []), _dec25 = Object(type_graphql__WEBPACK_IMPORTED_MODULE_4__["Mutation"])(() => type_graphql__WEBPACK_IMPORTED_MODULE_4__["ID"]), _dec26 = function (target, key) {
  return Object(type_graphql__WEBPACK_IMPORTED_MODULE_4__["Arg"])('id', () => type_graphql__WEBPACK_IMPORTED_MODULE_4__["ID"])(target, key, 0);
}, _dec27 = Reflect.metadata("design:type", Function), _dec28 = Reflect.metadata("design:paramtypes", [Number]), _dec29 = Object(type_graphql__WEBPACK_IMPORTED_MODULE_4__["Mutation"])(() => _Shirt__WEBPACK_IMPORTED_MODULE_9__["Shirt"]), _dec30 = function (target, key) {
  return Object(type_graphql__WEBPACK_IMPORTED_MODULE_4__["Arg"])('data')(target, key, 0);
}, _dec31 = Reflect.metadata("design:type", Function), _dec32 = Reflect.metadata("design:paramtypes", [typeof AddShirtInput === "undefined" ? Object : AddShirtInput]), _dec33 = Object(type_graphql__WEBPACK_IMPORTED_MODULE_4__["Mutation"])(() => _Pants__WEBPACK_IMPORTED_MODULE_7__["Pants"]), _dec34 = function (target, key) {
  return Object(type_graphql__WEBPACK_IMPORTED_MODULE_4__["Arg"])('data')(target, key, 0);
}, _dec35 = Reflect.metadata("design:type", Function), _dec36 = Reflect.metadata("design:paramtypes", [typeof AddPantsInput === "undefined" ? Object : AddPantsInput]), _dec21(_class7 = (_class8 = class ProductResolver {
  async products() {
    const products = await Object(typeorm__WEBPACK_IMPORTED_MODULE_5__["getRepository"])(db_entity_ProductEntity__WEBPACK_IMPORTED_MODULE_2__["ProductEntity"]).find({
      relations: ['pants', 'shirt']
    });
    const results = products.map(product => {
      if (product.type === 'shirt') {
        return {
          id: product.id,
          name: product.name,
          type: product.type,
          color: product.shirt.color,
          size: product.shirt.size
        };
      } else if (product.type === 'pants') {
        return {
          id: product.id,
          name: product.name,
          type: product.type,
          color: product.pants.color,
          width: product.pants.width,
          length: product.pants.length
        };
      } else {
        throw new Error('Unknown product type');
      }
    });
    return results;
  }

  async removeProduct(id) {
    await Object(typeorm__WEBPACK_IMPORTED_MODULE_5__["getRepository"])(db_entity_ProductEntity__WEBPACK_IMPORTED_MODULE_2__["ProductEntity"]).delete(id);
    return id;
  }

  async addShirt(shirtInput) {
    return await Object(typeorm__WEBPACK_IMPORTED_MODULE_5__["getConnection"])().transaction(async transactionalEntityManager => {
      const product = new db_entity_ProductEntity__WEBPACK_IMPORTED_MODULE_2__["ProductEntity"]();
      product.name = shirtInput.name;
      product.type = db_entity_ProductType__WEBPACK_IMPORTED_MODULE_3__["ProductType"].shirt;
      await transactionalEntityManager.save(product);
      const shirt = new _db_entity_ShirtEntity__WEBPACK_IMPORTED_MODULE_6__["ShirtEntity"]();
      shirt.id = product.id;
      shirt.color = shirtInput.color;
      shirt.size = shirtInput.size;
      await transactionalEntityManager.save(shirt);
      return {
        id: product.id,
        name: product.name,
        type: db_entity_ProductType__WEBPACK_IMPORTED_MODULE_3__["ProductType"].shirt,
        color: shirt.color,
        size: shirt.size
      };
    });
  }

  async addPants(pantsInput) {
    return await Object(typeorm__WEBPACK_IMPORTED_MODULE_5__["getConnection"])().transaction(async transactionalEntityManager => {
      const product = new db_entity_ProductEntity__WEBPACK_IMPORTED_MODULE_2__["ProductEntity"]();
      product.name = pantsInput.name;
      product.type = db_entity_ProductType__WEBPACK_IMPORTED_MODULE_3__["ProductType"].pants;
      await transactionalEntityManager.save(product);
      const pants = new db_entity_PantsEntity__WEBPACK_IMPORTED_MODULE_1__["PantsEntity"]();
      pants.id = product.id;
      pants.color = pantsInput.color;
      pants.width = pantsInput.width;
      pants.length = pantsInput.length;
      await transactionalEntityManager.save(pants);
      return {
        id: product.id,
        name: product.name,
        type: db_entity_ProductType__WEBPACK_IMPORTED_MODULE_3__["ProductType"].pants,
        color: pants.color,
        width: pants.width,
        length: pants.length
      };
    });
  }

}, (_applyDecoratedDescriptor(_class8.prototype, "products", [_dec22, _dec23, _dec24], Object.getOwnPropertyDescriptor(_class8.prototype, "products"), _class8.prototype), _applyDecoratedDescriptor(_class8.prototype, "removeProduct", [_dec25, _dec26, _dec27, _dec28], Object.getOwnPropertyDescriptor(_class8.prototype, "removeProduct"), _class8.prototype), _applyDecoratedDescriptor(_class8.prototype, "addShirt", [_dec29, _dec30, _dec31, _dec32], Object.getOwnPropertyDescriptor(_class8.prototype, "addShirt"), _class8.prototype), _applyDecoratedDescriptor(_class8.prototype, "addPants", [_dec33, _dec34, _dec35, _dec36], Object.getOwnPropertyDescriptor(_class8.prototype, "addPants"), _class8.prototype)), _class8)) || _class7);

/***/ }),

/***/ "./graphql/Shirt.ts":
/*!**************************!*\
  !*** ./graphql/Shirt.ts ***!
  \**************************/
/*! exports provided: Shirt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shirt", function() { return Shirt; });
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! class-validator */ "class-validator");
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(class_validator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var type_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! type-graphql */ "type-graphql");
/* harmony import */ var type_graphql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(type_graphql__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _db_entity_ShirtEntity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../db/entity/ShirtEntity */ "./db/entity/ShirtEntity.ts");
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Product */ "./graphql/Product.ts");
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }





Object(type_graphql__WEBPACK_IMPORTED_MODULE_1__["registerEnumType"])(_db_entity_ShirtEntity__WEBPACK_IMPORTED_MODULE_2__["ShirtColor"], {
  name: 'ShirtColor'
});
let Shirt = (_dec = Object(type_graphql__WEBPACK_IMPORTED_MODULE_1__["ObjectType"])({
  implements: _Product__WEBPACK_IMPORTED_MODULE_3__["Product"]
}), _dec2 = Object(type_graphql__WEBPACK_IMPORTED_MODULE_1__["Field"])(() => _db_entity_ShirtEntity__WEBPACK_IMPORTED_MODULE_2__["ShirtColor"]), _dec3 = Reflect.metadata("design:type", typeof _db_entity_ShirtEntity__WEBPACK_IMPORTED_MODULE_2__["ShirtColor"] === "undefined" ? Object : _db_entity_ShirtEntity__WEBPACK_IMPORTED_MODULE_2__["ShirtColor"]), _dec4 = Object(type_graphql__WEBPACK_IMPORTED_MODULE_1__["Field"])(() => type_graphql__WEBPACK_IMPORTED_MODULE_1__["Int"]), _dec5 = Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["Min"])(1), _dec6 = Reflect.metadata("design:type", Number), _dec(_class = (_class2 = (_temp = class Shirt extends _Product__WEBPACK_IMPORTED_MODULE_3__["Product"] {
  constructor(...args) {
    super(...args);

    _initializerDefineProperty(this, "color", _descriptor, this);

    _initializerDefineProperty(this, "size", _descriptor2, this);
  }

}, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "color", [_dec2, _dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "size", [_dec4, _dec5, _dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);

/***/ }),

/***/ "./graphql/schema.ts":
/*!***************************!*\
  !*** ./graphql/schema.ts ***!
  \***************************/
/*! exports provided: createSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSchema", function() { return createSchema; });
/* harmony import */ var type_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! type-graphql */ "type-graphql");
/* harmony import */ var type_graphql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(type_graphql__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Pants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pants */ "./graphql/Pants.ts");
/* harmony import */ var _ProductResolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductResolver */ "./graphql/ProductResolver.ts");
/* harmony import */ var _Shirt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Shirt */ "./graphql/Shirt.ts");




const createSchema = async () => {
  return await Object(type_graphql__WEBPACK_IMPORTED_MODULE_0__["buildSchema"])({
    resolvers: [_ProductResolver__WEBPACK_IMPORTED_MODULE_2__["ProductResolver"]],
    orphanedTypes: [_Shirt__WEBPACK_IMPORTED_MODULE_3__["Shirt"], _Pants__WEBPACK_IMPORTED_MODULE_1__["Pants"]]
  });
};

/***/ }),

/***/ "./pages/api/graphql.ts":
/*!******************************!*\
  !*** ./pages/api/graphql.ts ***!
  \******************************/
/*! exports provided: config, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reflect-metadata */ "reflect-metadata");
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reflect_metadata__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-server-micro */ "apollo-server-micro");
/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_server_micro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql/schema */ "./graphql/schema.ts");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dotenv */ "dotenv");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var db_entity_ShirtEntity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! db/entity/ShirtEntity */ "./db/entity/ShirtEntity.ts");
/* harmony import */ var db_entity_ProductEntity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! db/entity/ProductEntity */ "./db/entity/ProductEntity.ts");
/* harmony import */ var db_entity_PantsEntity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! db/entity/PantsEntity */ "./db/entity/PantsEntity.ts");








dotenv__WEBPACK_IMPORTED_MODULE_4___default.a.config();
let apolloServer; // eslint-disable-next-line

let apolloHandler;
let connection;
const config = {
  api: {
    bodyParser: false
  }
};
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  if (!apolloServer) {
    const schema = await Object(graphql_schema__WEBPACK_IMPORTED_MODULE_2__["createSchema"])();
    apolloServer = new apollo_server_micro__WEBPACK_IMPORTED_MODULE_1__["ApolloServer"]({
      schema
    });
    apolloHandler = apolloServer.createHandler({
      path: '/api/graphql'
    });
  }

  if (!connection) {
    const initConnection = async () => await Object(typeorm__WEBPACK_IMPORTED_MODULE_3__["createConnection"])({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [db_entity_ProductEntity__WEBPACK_IMPORTED_MODULE_6__["ProductEntity"], db_entity_ShirtEntity__WEBPACK_IMPORTED_MODULE_5__["ShirtEntity"], db_entity_PantsEntity__WEBPACK_IMPORTED_MODULE_7__["PantsEntity"]]
    });

    try {
      connection = await initConnection();
    } catch (e) {
      if (e.name === 'AlreadyHasActiveConnectionError') {
        connection = Object(typeorm__WEBPACK_IMPORTED_MODULE_3__["getConnectionManager"])().get('default');
        await connection.close();
        connection = await initConnection();
      } else {
        throw e;
      }
    }
  }

  return await apolloHandler(req, res);
});

/***/ }),

/***/ 5:
/*!************************************!*\
  !*** multi ./pages/api/graphql.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/aleksey/Dev/Trash/shopping-cart/pages/api/graphql.ts */"./pages/api/graphql.ts");


/***/ }),

/***/ "apollo-server-micro":
/*!**************************************!*\
  !*** external "apollo-server-micro" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-server-micro");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("class-validator");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),

/***/ "reflect-metadata":
/*!***********************************!*\
  !*** external "reflect-metadata" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reflect-metadata");

/***/ }),

/***/ "type-graphql":
/*!*******************************!*\
  !*** external "type-graphql" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("type-graphql");

/***/ }),

/***/ "typeorm":
/*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("typeorm");

/***/ })

/******/ });
//# sourceMappingURL=graphql.js.map