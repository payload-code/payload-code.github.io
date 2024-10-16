/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkpayload_code_github_io"] = self["webpackChunkpayload_code_github_io"] || []).push([["bootstrap4-simple-checkout"],{

/***/ "./src/js/bootstrap4-simple-checkout.js":
/*!**********************************************!*\
  !*** ./src/js/bootstrap4-simple-checkout.js ***!
  \**********************************************/
/***/ (() => {

eval("Payload('test_client_key_3btrkEyC6xvcByXLthuZx')\n\nconst checkoutForm = new Payload.Form({\n  form: $('#checkout-form').get(0),\n  styles: { invalid: 'is-invalid' },\n  preventDefaultOnSubmit: true,\n})\n  .on('error', function (error) {\n    console.log(error)\n  })\n  .on('processed', function (data) {\n    $('#paid-modal').modal('show')\n  })\n  .on('declined', function (data) {\n    $('#declined-modal').modal('show')\n  })\n\n\n//# sourceURL=webpack://payload-code.github.io/./src/js/bootstrap4-simple-checkout.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/bootstrap4-simple-checkout.js"));
/******/ }
]);