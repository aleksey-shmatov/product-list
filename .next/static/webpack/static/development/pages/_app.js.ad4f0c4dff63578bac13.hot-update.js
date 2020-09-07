webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./style/index.scss":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./style/index.scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".product-list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.product-list__item {\n  display: flex;\n  flex-direction: row;\n  padding: 0.2rem 0.4rem;\n  align-items: center;\n  border-bottom: 1px solid lightgray;\n}\n.product-list__item__action {\n  margin: 0.5rem;\n}\n\n.properties {\n  display: flex;\n  flex: 1 1;\n}\n@media (max-width: 768px) {\n  .properties {\n    flex-direction: column;\n  }\n}\n.properties__item {\n  padding: 0.5rem;\n  width: 7rem;\n}\n.properties__item--grow {\n  flex: 1 1;\n}\n\n.labeled-value {\n  display: flex;\n  flex-direction: column;\n  font-size: 1.2rem;\n}\n@media (max-width: 768px) {\n  .labeled-value {\n    flex-direction: row;\n    align-items: baseline;\n  }\n}\n.labeled-value__label {\n  font-size: 1rem;\n  color: #707070;\n  width: 12rem;\n}\n\nbody {\n  padding: 0;\n  margin: 0;\n}\n\nbutton {\n  height: 2rem;\n  min-width: 5rem;\n}\n\ninput {\n  height: 2rem;\n}\n\ninput:invalid {\n  border-color: #e74c3c;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto;\n  max-width: 960px;\n}\n@media (max-width: 992px) {\n  .container {\n    max-width: 720px;\n  }\n}\n@media (max-width: 768px) {\n  .container {\n    max-width: 540px;\n  }\n}\n@media (max-width: 576px) {\n  .container {\n    max-width: auto;\n  }\n}\n\n.page-title {\n  display: flex;\n  align-items: center;\n  margin: 1rem 0rem;\n}\n.page-title__header {\n  font-size: 2rem;\n  margin: 0;\n}\n.page-title__action {\n  font-size: 1.2rem;\n  margin-left: 2rem;\n}", "",{"version":3,"sources":["/Users/aleksey/Dev/Trash/shopping-cart/style/products.scss","/Users/aleksey/Dev/Trash/shopping-cart/style/index.scss","/Users/aleksey/Dev/Trash/shopping-cart/style/vars.scss"],"names":[],"mappings":"AAAA;EACE,gBAAA;EACA,SAAA;EACA,UAAA;ACCF;ADCE;EACE,aAAA;EACA,mBAAA;EACA,sBAAA;EACA,mBAAA;EAEA,kCAAA;ACAJ;ADEI;EACE,cAAA;ACAN;;ADMA;EACE,aAAA;EACA,SAAA;ACHF;ADKE;EAJF;IAKI,sBAAA;ECFF;AACF;ADIE;EACE,eAAA;EACA,WAAA;ACFJ;ADII;EACE,SAAA;ACFN;;ADOA;EACE,aAAA;EACA,sBAAA;EACA,iBAAA;ACJF;ADME;EALF;IAMI,mBAAA;IACA,qBAAA;ECHF;AACF;ADKE;EACE,eAAA;EACA,cAAA;EACA,YAAA;ACHJ;;AA7CA;EACE,UAAA;EACA,SAAA;AAgDF;;AA7CA;EACE,YAAA;EACA,eAAA;AAgDF;;AA7CA;EACE,YAAA;AAgDF;;AA7CA;EACE,qBAAA;AAgDF;;AA5CA;EACE,aAAA;EACA,sBAAA;EACA,cAAA;EACA,gBCpBmB;ADmErB;AA7CE;EANF;IAOI,gBCzBiB;EDyEnB;AACF;AA9CE;EAVF;IAWI,gBC/BiB;EDgFnB;AACF;AA/CE;EAdF;IAeI,eAAA;EAkDF;AACF;;AA/CA;EACE,aAAA;EACA,mBAAA;EACA,iBAAA;AAkDF;AAhDE;EACE,eAAA;EACA,SAAA;AAkDJ;AA/CE;EACE,iBAAA;EACA,iBAAA;AAiDJ","file":"index.scss","sourcesContent":[".product-list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n\n  &__item {\n    display: flex;\n    flex-direction: row;\n    padding: 0.2rem 0.4rem;\n    align-items: center;\n\n    border-bottom: 1px solid lightgray;\n\n    &__action{\n      margin: 0.5rem;\n    }\n  }\n}\n\n\n.properties {\n  display: flex;\n  flex: 1;\n\n  @media (max-width: $breakpoint-sm) {\n    flex-direction: column;\n  }\n\n  &__item {\n    padding: 0.5rem;\n    width: 7rem;\n\n    &--grow {\n      flex: 1;\n    }\n  }\n}\n\n.labeled-value {\n  display: flex;\n  flex-direction: column;\n  font-size: 1.2rem;\n\n  @media (max-width: $breakpoint-sm) {\n    flex-direction: row;\n    align-items: baseline;\n  }\n\n  &__label {\n    font-size: 1rem;\n    color: #707070;\n    width: 12rem;\n  }\n\n}\n\n","@import './vars.scss';\n@import './products.scss';\n\nbody {\n  padding: 0;\n  margin: 0;\n}\n\nbutton {\n  height: 2rem;\n  min-width: 5rem;\n}\n\ninput {\n  height: 2rem;\n}\n\ninput:invalid {\n  border-color: #e74c3c;\n}\n\n\n.container {\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto;\n  max-width: $container-width-lg;\n\n  @media (max-width: $breakpoint-md) {\n    max-width: $container-width-md;\n  }\n\n  @media (max-width: $breakpoint-sm) {\n    max-width: $container-width-sm;\n  }\n\n  @media (max-width: $breakpoint-xs) {\n    max-width: auto;\n  }\n}\n\n.page-title {\n  display: flex;\n  align-items: center;\n  margin: 1rem 0rem;\n\n  &__header {\n    font-size: 2rem;\n    margin: 0;\n  }\n\n  &__action {\n    font-size: 1.2rem;\n    margin-left: 2rem;\n  }\n}\n","$breakpoint-xs: 576px;\n$breakpoint-sm: 768px;\n$container-width-sm: 540px;\n$breakpoint-md: 992px;\n$container-width-md: 720px;\n$breakpoint-lg: 992px;\n$container-width-lg: 960px;\n"]}]);


/***/ })

})
//# sourceMappingURL=_app.js.ad4f0c4dff63578bac13.hot-update.js.map