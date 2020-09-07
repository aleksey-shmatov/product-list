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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("FmsI");


/***/ }),

/***/ "FmsI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "config", function() { return /* binding */ config; });

// EXTERNAL MODULE: external "reflect-metadata"
var external_reflect_metadata_ = __webpack_require__("vA/G");

// EXTERNAL MODULE: external "apollo-server-micro"
var external_apollo_server_micro_ = __webpack_require__("re1k");

// EXTERNAL MODULE: external "type-graphql"
var external_type_graphql_ = __webpack_require__("xd3U");

// EXTERNAL MODULE: external "class-validator"
var external_class_validator_ = __webpack_require__("VWuP");

// CONCATENATED MODULE: ./db/entity/ProductType.ts
let ProductType;

(function (ProductType) {
  ProductType["shirt"] = "shirt";
  ProductType["pants"] = "pants";
})(ProductType || (ProductType = {}));

const productTypes = Object.values(ProductType);
// CONCATENATED MODULE: ./graphql/Product.ts
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }



Object(external_type_graphql_["registerEnumType"])(ProductType, {
  name: 'ProductType'
});
let Product = (_dec = Object(external_type_graphql_["InterfaceType"])({
  resolveType: value => {
    if (value.type === 'shirt') {
      return 'Shirt';
    } else if (value.type === 'pants') {
      return 'Pants';
    } else {
      throw new Error(`Unknown entity type: ${value.type}`);
    }
  }
}), _dec2 = Object(external_type_graphql_["Field"])(() => external_type_graphql_["ID"]), _dec3 = Reflect.metadata("design:type", Number), _dec4 = Object(external_type_graphql_["Field"])(), _dec5 = Reflect.metadata("design:type", String), _dec6 = Object(external_type_graphql_["Field"])(() => ProductType), _dec7 = Reflect.metadata("design:type", typeof ProductType === "undefined" ? Object : ProductType), _dec(_class = (_class2 = (_temp = class Product {
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
// CONCATENATED MODULE: ./graphql/Pants.ts
var Pants_dec, Pants_dec2, Pants_dec3, Pants_dec4, Pants_dec5, Pants_dec6, Pants_dec7, _dec8, _dec9, _dec10, Pants_class, Pants_class2, Pants_descriptor, Pants_descriptor2, Pants_descriptor3, Pants_temp;

function Pants_initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function Pants_applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function Pants_initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }




let Pants_Pants = (Pants_dec = Object(external_type_graphql_["ObjectType"])({
  implements: Product
}), Pants_dec2 = Object(external_type_graphql_["Field"])(), Pants_dec3 = Object(external_class_validator_["MinLength"])(1), Pants_dec4 = Reflect.metadata("design:type", String), Pants_dec5 = Object(external_type_graphql_["Field"])(() => external_type_graphql_["Int"]), Pants_dec6 = Object(external_class_validator_["Min"])(1), Pants_dec7 = Reflect.metadata("design:type", Number), _dec8 = Object(external_type_graphql_["Field"])(() => external_type_graphql_["Int"]), _dec9 = Object(external_class_validator_["Min"])(1), _dec10 = Reflect.metadata("design:type", Number), Pants_dec(Pants_class = (Pants_class2 = (Pants_temp = class Pants extends Product {
  constructor(...args) {
    super(...args);

    Pants_initializerDefineProperty(this, "color", Pants_descriptor, this);

    Pants_initializerDefineProperty(this, "width", Pants_descriptor2, this);

    Pants_initializerDefineProperty(this, "length", Pants_descriptor3, this);
  }

}, Pants_temp), (Pants_descriptor = Pants_applyDecoratedDescriptor(Pants_class2.prototype, "color", [Pants_dec2, Pants_dec3, Pants_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), Pants_descriptor2 = Pants_applyDecoratedDescriptor(Pants_class2.prototype, "width", [Pants_dec5, Pants_dec6, Pants_dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), Pants_descriptor3 = Pants_applyDecoratedDescriptor(Pants_class2.prototype, "length", [_dec8, _dec9, _dec10], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), Pants_class2)) || Pants_class);
// EXTERNAL MODULE: external "typeorm"
var external_typeorm_ = __webpack_require__("vKcw");

// CONCATENATED MODULE: ./db/entity/PantsEntity.ts
var PantsEntity_dec, PantsEntity_dec2, PantsEntity_dec3, PantsEntity_dec4, PantsEntity_dec5, PantsEntity_dec6, PantsEntity_dec7, PantsEntity_dec8, PantsEntity_dec9, PantsEntity_dec10, _dec11, _dec12, _dec13, PantsEntity_class, PantsEntity_class2, PantsEntity_descriptor, PantsEntity_descriptor2, PantsEntity_descriptor3, _descriptor4, _descriptor5, PantsEntity_temp;

function PantsEntity_initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function PantsEntity_applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function PantsEntity_initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }


let PantsEntity = (PantsEntity_dec = Object(external_typeorm_["Entity"])({
  name: 'pants'
}), PantsEntity_dec2 = Object(external_typeorm_["Check"])(`"width" > 0 AND "length" > 0 AND "color" <> ''`), PantsEntity_dec3 = Object(external_typeorm_["PrimaryColumn"])({
  nullable: false
}), PantsEntity_dec4 = Reflect.metadata("design:type", Number), PantsEntity_dec5 = Object(external_typeorm_["Column"])({
  nullable: false
}), PantsEntity_dec6 = Reflect.metadata("design:type", String), PantsEntity_dec7 = Object(external_typeorm_["Column"])({
  nullable: false
}), PantsEntity_dec8 = Reflect.metadata("design:type", Number), PantsEntity_dec9 = Object(external_typeorm_["Column"])({
  nullable: false
}), PantsEntity_dec10 = Reflect.metadata("design:type", Number), _dec11 = Object(external_typeorm_["OneToOne"])('ProductEntity', {
  onDelete: 'CASCADE'
}), _dec12 = Object(external_typeorm_["JoinColumn"])({
  name: 'id'
}), _dec13 = Reflect.metadata("design:type", Object), PantsEntity_dec(PantsEntity_class = PantsEntity_dec2(PantsEntity_class = (PantsEntity_class2 = (PantsEntity_temp = class PantsEntity {
  constructor() {
    PantsEntity_initializerDefineProperty(this, "id", PantsEntity_descriptor, this);

    PantsEntity_initializerDefineProperty(this, "color", PantsEntity_descriptor2, this);

    PantsEntity_initializerDefineProperty(this, "width", PantsEntity_descriptor3, this);

    PantsEntity_initializerDefineProperty(this, "length", _descriptor4, this);

    PantsEntity_initializerDefineProperty(this, "product", _descriptor5, this);
  }

}, PantsEntity_temp), (PantsEntity_descriptor = PantsEntity_applyDecoratedDescriptor(PantsEntity_class2.prototype, "id", [PantsEntity_dec3, PantsEntity_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), PantsEntity_descriptor2 = PantsEntity_applyDecoratedDescriptor(PantsEntity_class2.prototype, "color", [PantsEntity_dec5, PantsEntity_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), PantsEntity_descriptor3 = PantsEntity_applyDecoratedDescriptor(PantsEntity_class2.prototype, "width", [PantsEntity_dec7, PantsEntity_dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = PantsEntity_applyDecoratedDescriptor(PantsEntity_class2.prototype, "length", [PantsEntity_dec9, PantsEntity_dec10], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = PantsEntity_applyDecoratedDescriptor(PantsEntity_class2.prototype, "product", [_dec11, _dec12, _dec13], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), PantsEntity_class2)) || PantsEntity_class) || PantsEntity_class);
// CONCATENATED MODULE: ./db/entity/ShirtEntity.ts
var ShirtEntity_dec, ShirtEntity_dec2, ShirtEntity_dec3, ShirtEntity_dec4, ShirtEntity_dec5, ShirtEntity_dec6, ShirtEntity_dec7, ShirtEntity_dec8, ShirtEntity_dec9, ShirtEntity_dec10, ShirtEntity_dec11, ShirtEntity_class, ShirtEntity_class2, ShirtEntity_descriptor, ShirtEntity_descriptor2, ShirtEntity_descriptor3, ShirtEntity_descriptor4, ShirtEntity_temp;

function ShirtEntity_initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function ShirtEntity_applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function ShirtEntity_initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }


let ShirtColor;

(function (ShirtColor) {
  ShirtColor["white"] = "white";
  ShirtColor["grey"] = "grey";
  ShirtColor["blue"] = "blue";
})(ShirtColor || (ShirtColor = {}));

const shirtColors = Object.values(ShirtColor);
let ShirtEntity = (ShirtEntity_dec = Object(external_typeorm_["Entity"])({
  name: 'shirt'
}), ShirtEntity_dec2 = Object(external_typeorm_["Check"])(`"size" > 0`), ShirtEntity_dec3 = Object(external_typeorm_["PrimaryColumn"])({
  nullable: false
}), ShirtEntity_dec4 = Reflect.metadata("design:type", Number), ShirtEntity_dec5 = Object(external_typeorm_["Column"])({
  type: 'enum',
  enum: shirtColors,
  nullable: false
}), ShirtEntity_dec6 = Reflect.metadata("design:type", typeof ShirtColor === "undefined" ? Object : ShirtColor), ShirtEntity_dec7 = Object(external_typeorm_["Column"])({
  nullable: false
}), ShirtEntity_dec8 = Reflect.metadata("design:type", Number), ShirtEntity_dec9 = Object(external_typeorm_["OneToOne"])('ProductEntity', {
  onDelete: 'CASCADE'
}), ShirtEntity_dec10 = Object(external_typeorm_["JoinColumn"])({
  name: 'id'
}), ShirtEntity_dec11 = Reflect.metadata("design:type", Object), ShirtEntity_dec(ShirtEntity_class = ShirtEntity_dec2(ShirtEntity_class = (ShirtEntity_class2 = (ShirtEntity_temp = class ShirtEntity {
  constructor() {
    ShirtEntity_initializerDefineProperty(this, "id", ShirtEntity_descriptor, this);

    ShirtEntity_initializerDefineProperty(this, "color", ShirtEntity_descriptor2, this);

    ShirtEntity_initializerDefineProperty(this, "size", ShirtEntity_descriptor3, this);

    ShirtEntity_initializerDefineProperty(this, "product", ShirtEntity_descriptor4, this);
  }

}, ShirtEntity_temp), (ShirtEntity_descriptor = ShirtEntity_applyDecoratedDescriptor(ShirtEntity_class2.prototype, "id", [ShirtEntity_dec3, ShirtEntity_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), ShirtEntity_descriptor2 = ShirtEntity_applyDecoratedDescriptor(ShirtEntity_class2.prototype, "color", [ShirtEntity_dec5, ShirtEntity_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), ShirtEntity_descriptor3 = ShirtEntity_applyDecoratedDescriptor(ShirtEntity_class2.prototype, "size", [ShirtEntity_dec7, ShirtEntity_dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), ShirtEntity_descriptor4 = ShirtEntity_applyDecoratedDescriptor(ShirtEntity_class2.prototype, "product", [ShirtEntity_dec9, ShirtEntity_dec10, ShirtEntity_dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), ShirtEntity_class2)) || ShirtEntity_class) || ShirtEntity_class);
// CONCATENATED MODULE: ./db/entity/ProductEntity.ts
var ProductEntity_dec, ProductEntity_dec2, ProductEntity_dec3, ProductEntity_dec4, ProductEntity_dec5, ProductEntity_dec6, ProductEntity_dec7, ProductEntity_dec8, ProductEntity_dec9, ProductEntity_dec10, ProductEntity_dec11, ProductEntity_class, ProductEntity_class2, ProductEntity_descriptor, ProductEntity_descriptor2, ProductEntity_descriptor3, ProductEntity_descriptor4, ProductEntity_descriptor5, ProductEntity_temp;

function ProductEntity_initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function ProductEntity_applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function ProductEntity_initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }





let ProductEntity = (ProductEntity_dec = Object(external_typeorm_["Entity"])({
  name: 'product'
}), ProductEntity_dec2 = Object(external_typeorm_["PrimaryGeneratedColumn"])(), ProductEntity_dec3 = Reflect.metadata("design:type", Number), ProductEntity_dec4 = Object(external_typeorm_["Column"])({
  nullable: false
}), ProductEntity_dec5 = Reflect.metadata("design:type", String), ProductEntity_dec6 = Object(external_typeorm_["Column"])({
  type: 'enum',
  enum: productTypes,
  nullable: false
}), ProductEntity_dec7 = Reflect.metadata("design:type", typeof ProductType === "undefined" ? Object : ProductType), ProductEntity_dec8 = Object(external_typeorm_["OneToOne"])('PantsEntity', 'product'), ProductEntity_dec9 = Reflect.metadata("design:type", typeof PantsEntity === "undefined" ? Object : PantsEntity), ProductEntity_dec10 = Object(external_typeorm_["OneToOne"])('ShirtEntity', 'product'), ProductEntity_dec11 = Reflect.metadata("design:type", typeof ShirtEntity === "undefined" ? Object : ShirtEntity), ProductEntity_dec(ProductEntity_class = (ProductEntity_class2 = (ProductEntity_temp = class ProductEntity {
  constructor() {
    ProductEntity_initializerDefineProperty(this, "id", ProductEntity_descriptor, this);

    ProductEntity_initializerDefineProperty(this, "name", ProductEntity_descriptor2, this);

    ProductEntity_initializerDefineProperty(this, "type", ProductEntity_descriptor3, this);

    ProductEntity_initializerDefineProperty(this, "pants", ProductEntity_descriptor4, this);

    ProductEntity_initializerDefineProperty(this, "shirt", ProductEntity_descriptor5, this);
  }

}, ProductEntity_temp), (ProductEntity_descriptor = ProductEntity_applyDecoratedDescriptor(ProductEntity_class2.prototype, "id", [ProductEntity_dec2, ProductEntity_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), ProductEntity_descriptor2 = ProductEntity_applyDecoratedDescriptor(ProductEntity_class2.prototype, "name", [ProductEntity_dec4, ProductEntity_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), ProductEntity_descriptor3 = ProductEntity_applyDecoratedDescriptor(ProductEntity_class2.prototype, "type", [ProductEntity_dec6, ProductEntity_dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), ProductEntity_descriptor4 = ProductEntity_applyDecoratedDescriptor(ProductEntity_class2.prototype, "pants", [ProductEntity_dec8, ProductEntity_dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), ProductEntity_descriptor5 = ProductEntity_applyDecoratedDescriptor(ProductEntity_class2.prototype, "shirt", [ProductEntity_dec10, ProductEntity_dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), ProductEntity_class2)) || ProductEntity_class);
// CONCATENATED MODULE: ./graphql/Shirt.ts
var Shirt_dec, Shirt_dec2, Shirt_dec3, Shirt_dec4, Shirt_dec5, Shirt_dec6, Shirt_class, Shirt_class2, Shirt_descriptor, Shirt_descriptor2, Shirt_temp;

function Shirt_initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function Shirt_applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function Shirt_initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }





Object(external_type_graphql_["registerEnumType"])(ShirtColor, {
  name: 'ShirtColor'
});
let Shirt_Shirt = (Shirt_dec = Object(external_type_graphql_["ObjectType"])({
  implements: Product
}), Shirt_dec2 = Object(external_type_graphql_["Field"])(() => ShirtColor), Shirt_dec3 = Reflect.metadata("design:type", typeof ShirtColor === "undefined" ? Object : ShirtColor), Shirt_dec4 = Object(external_type_graphql_["Field"])(() => external_type_graphql_["Int"]), Shirt_dec5 = Object(external_class_validator_["Min"])(1), Shirt_dec6 = Reflect.metadata("design:type", Number), Shirt_dec(Shirt_class = (Shirt_class2 = (Shirt_temp = class Shirt extends Product {
  constructor(...args) {
    super(...args);

    Shirt_initializerDefineProperty(this, "color", Shirt_descriptor, this);

    Shirt_initializerDefineProperty(this, "size", Shirt_descriptor2, this);
  }

}, Shirt_temp), (Shirt_descriptor = Shirt_applyDecoratedDescriptor(Shirt_class2.prototype, "color", [Shirt_dec2, Shirt_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), Shirt_descriptor2 = Shirt_applyDecoratedDescriptor(Shirt_class2.prototype, "size", [Shirt_dec4, Shirt_dec5, Shirt_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), Shirt_class2)) || Shirt_class);
// CONCATENATED MODULE: ./graphql/ProductResolver.ts
var ProductResolver_dec, ProductResolver_dec2, ProductResolver_dec3, ProductResolver_dec4, ProductResolver_dec5, ProductResolver_dec6, ProductResolver_dec7, ProductResolver_dec8, ProductResolver_class, ProductResolver_class2, ProductResolver_descriptor, ProductResolver_descriptor2, ProductResolver_descriptor3, ProductResolver_temp, ProductResolver_dec9, ProductResolver_dec10, ProductResolver_dec11, ProductResolver_dec12, ProductResolver_dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _class4, _class5, ProductResolver_descriptor4, ProductResolver_descriptor5, _descriptor6, _descriptor7, _temp2, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _class7, _class8;

function ProductResolver_initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function ProductResolver_applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function ProductResolver_initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }











let AddShirtInput = (ProductResolver_dec = Object(external_type_graphql_["InputType"])(), ProductResolver_dec2 = Object(external_type_graphql_["Field"])(), ProductResolver_dec3 = Reflect.metadata("design:type", String), ProductResolver_dec4 = Object(external_type_graphql_["Field"])(() => ShirtColor), ProductResolver_dec5 = Reflect.metadata("design:type", typeof ShirtColor === "undefined" ? Object : ShirtColor), ProductResolver_dec6 = Object(external_type_graphql_["Field"])(() => external_type_graphql_["Int"]), ProductResolver_dec7 = Object(external_class_validator_["Min"])(1), ProductResolver_dec8 = Reflect.metadata("design:type", Number), ProductResolver_dec(ProductResolver_class = (ProductResolver_class2 = (ProductResolver_temp = class AddShirtInput {
  constructor() {
    ProductResolver_initializerDefineProperty(this, "name", ProductResolver_descriptor, this);

    ProductResolver_initializerDefineProperty(this, "color", ProductResolver_descriptor2, this);

    ProductResolver_initializerDefineProperty(this, "size", ProductResolver_descriptor3, this);
  }

}, ProductResolver_temp), (ProductResolver_descriptor = ProductResolver_applyDecoratedDescriptor(ProductResolver_class2.prototype, "name", [ProductResolver_dec2, ProductResolver_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), ProductResolver_descriptor2 = ProductResolver_applyDecoratedDescriptor(ProductResolver_class2.prototype, "color", [ProductResolver_dec4, ProductResolver_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), ProductResolver_descriptor3 = ProductResolver_applyDecoratedDescriptor(ProductResolver_class2.prototype, "size", [ProductResolver_dec6, ProductResolver_dec7, ProductResolver_dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), ProductResolver_class2)) || ProductResolver_class);
let AddPantsInput = (ProductResolver_dec9 = Object(external_type_graphql_["InputType"])(), ProductResolver_dec10 = Object(external_type_graphql_["Field"])(), ProductResolver_dec11 = Reflect.metadata("design:type", String), ProductResolver_dec12 = Object(external_type_graphql_["Field"])(), ProductResolver_dec13 = Object(external_class_validator_["MinLength"])(1), _dec14 = Reflect.metadata("design:type", String), _dec15 = Object(external_type_graphql_["Field"])(() => external_type_graphql_["Int"]), _dec16 = Object(external_class_validator_["Min"])(1), _dec17 = Reflect.metadata("design:type", Number), _dec18 = Object(external_type_graphql_["Field"])(() => external_type_graphql_["Int"]), _dec19 = Object(external_class_validator_["Min"])(1), _dec20 = Reflect.metadata("design:type", Number), ProductResolver_dec9(_class4 = (_class5 = (_temp2 = class AddPantsInput {
  constructor() {
    ProductResolver_initializerDefineProperty(this, "name", ProductResolver_descriptor4, this);

    ProductResolver_initializerDefineProperty(this, "color", ProductResolver_descriptor5, this);

    ProductResolver_initializerDefineProperty(this, "width", _descriptor6, this);

    ProductResolver_initializerDefineProperty(this, "length", _descriptor7, this);
  }

}, _temp2), (ProductResolver_descriptor4 = ProductResolver_applyDecoratedDescriptor(_class5.prototype, "name", [ProductResolver_dec10, ProductResolver_dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), ProductResolver_descriptor5 = ProductResolver_applyDecoratedDescriptor(_class5.prototype, "color", [ProductResolver_dec12, ProductResolver_dec13, _dec14], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = ProductResolver_applyDecoratedDescriptor(_class5.prototype, "width", [_dec15, _dec16, _dec17], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = ProductResolver_applyDecoratedDescriptor(_class5.prototype, "length", [_dec18, _dec19, _dec20], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class5)) || _class4);
let ProductResolver_ProductResolver = (_dec21 = Object(external_type_graphql_["Resolver"])(() => Product), _dec22 = Object(external_type_graphql_["Query"])(() => [Product]), _dec23 = Reflect.metadata("design:type", Function), _dec24 = Reflect.metadata("design:paramtypes", []), _dec25 = Object(external_type_graphql_["Mutation"])(() => external_type_graphql_["ID"]), _dec26 = function (target, key) {
  return Object(external_type_graphql_["Arg"])('id', () => external_type_graphql_["ID"])(target, key, 0);
}, _dec27 = Reflect.metadata("design:type", Function), _dec28 = Reflect.metadata("design:paramtypes", [Number]), _dec29 = Object(external_type_graphql_["Mutation"])(() => Shirt_Shirt), _dec30 = function (target, key) {
  return Object(external_type_graphql_["Arg"])('data')(target, key, 0);
}, _dec31 = Reflect.metadata("design:type", Function), _dec32 = Reflect.metadata("design:paramtypes", [typeof AddShirtInput === "undefined" ? Object : AddShirtInput]), _dec33 = Object(external_type_graphql_["Mutation"])(() => Pants_Pants), _dec34 = function (target, key) {
  return Object(external_type_graphql_["Arg"])('data')(target, key, 0);
}, _dec35 = Reflect.metadata("design:type", Function), _dec36 = Reflect.metadata("design:paramtypes", [typeof AddPantsInput === "undefined" ? Object : AddPantsInput]), _dec21(_class7 = (_class8 = class ProductResolver {
  async products() {
    const products = await Object(external_typeorm_["getRepository"])(ProductEntity).find({
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
    await Object(external_typeorm_["getRepository"])(ProductEntity).delete(id);
    return id;
  }

  async addShirt(shirtInput) {
    return await Object(external_typeorm_["getConnection"])().transaction(async transactionalEntityManager => {
      const product = new ProductEntity();
      product.name = shirtInput.name;
      product.type = ProductType.shirt;
      await transactionalEntityManager.save(product);
      const shirt = new ShirtEntity();
      shirt.id = product.id;
      shirt.color = shirtInput.color;
      shirt.size = shirtInput.size;
      await transactionalEntityManager.save(shirt);
      return {
        id: product.id,
        name: product.name,
        type: ProductType.shirt,
        color: shirt.color,
        size: shirt.size
      };
    });
  }

  async addPants(pantsInput) {
    return await Object(external_typeorm_["getConnection"])().transaction(async transactionalEntityManager => {
      const product = new ProductEntity();
      product.name = pantsInput.name;
      product.type = ProductType.pants;
      await transactionalEntityManager.save(product);
      const pants = new PantsEntity();
      pants.id = product.id;
      pants.color = pantsInput.color;
      pants.width = pantsInput.width;
      pants.length = pantsInput.length;
      await transactionalEntityManager.save(pants);
      return {
        id: product.id,
        name: product.name,
        type: ProductType.pants,
        color: pants.color,
        width: pants.width,
        length: pants.length
      };
    });
  }

}, (ProductResolver_applyDecoratedDescriptor(_class8.prototype, "products", [_dec22, _dec23, _dec24], Object.getOwnPropertyDescriptor(_class8.prototype, "products"), _class8.prototype), ProductResolver_applyDecoratedDescriptor(_class8.prototype, "removeProduct", [_dec25, _dec26, _dec27, _dec28], Object.getOwnPropertyDescriptor(_class8.prototype, "removeProduct"), _class8.prototype), ProductResolver_applyDecoratedDescriptor(_class8.prototype, "addShirt", [_dec29, _dec30, _dec31, _dec32], Object.getOwnPropertyDescriptor(_class8.prototype, "addShirt"), _class8.prototype), ProductResolver_applyDecoratedDescriptor(_class8.prototype, "addPants", [_dec33, _dec34, _dec35, _dec36], Object.getOwnPropertyDescriptor(_class8.prototype, "addPants"), _class8.prototype)), _class8)) || _class7);
// CONCATENATED MODULE: ./graphql/schema.ts




const createSchema = async () => {
  return await Object(external_type_graphql_["buildSchema"])({
    resolvers: [ProductResolver_ProductResolver],
    orphanedTypes: [Shirt_Shirt, Pants_Pants]
  });
};
// EXTERNAL MODULE: external "dotenv"
var external_dotenv_ = __webpack_require__("qW5S");
var external_dotenv_default = /*#__PURE__*/__webpack_require__.n(external_dotenv_);

// CONCATENATED MODULE: ./pages/api/graphql.ts








external_dotenv_default.a.config();
let apolloServer; // eslint-disable-next-line

let apolloHandler;
let connection;
const config = {
  api: {
    bodyParser: false
  }
};
/* harmony default export */ var graphql = __webpack_exports__["default"] = (async (req, res) => {
  if (!apolloServer) {
    const schema = await createSchema();
    apolloServer = new external_apollo_server_micro_["ApolloServer"]({
      schema
    });
    apolloHandler = apolloServer.createHandler({
      path: '/api/graphql'
    });
  }

  if (!connection) {
    const initConnection = async () => await Object(external_typeorm_["createConnection"])({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [ProductEntity, ShirtEntity, PantsEntity]
    });

    try {
      connection = await initConnection();
    } catch (e) {
      if (e.name === 'AlreadyHasActiveConnectionError') {
        connection = Object(external_typeorm_["getConnectionManager"])().get('default');
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

/***/ "VWuP":
/***/ (function(module, exports) {

module.exports = require("class-validator");

/***/ }),

/***/ "qW5S":
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),

/***/ "re1k":
/***/ (function(module, exports) {

module.exports = require("apollo-server-micro");

/***/ }),

/***/ "vA/G":
/***/ (function(module, exports) {

module.exports = require("reflect-metadata");

/***/ }),

/***/ "vKcw":
/***/ (function(module, exports) {

module.exports = require("typeorm");

/***/ }),

/***/ "xd3U":
/***/ (function(module, exports) {

module.exports = require("type-graphql");

/***/ })

/******/ });