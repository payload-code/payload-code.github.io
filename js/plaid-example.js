/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkpayload_code_github_io"] = self["webpackChunkpayload_code_github_io"] || []).push([["plaid-example"],{

/***/ "./src/js/plaid-example.js":
/*!*********************************!*\
  !*** ./src/js/plaid-example.js ***!
  \*********************************/
/***/ (() => {

eval("Payload('test_client_key_3bcr16ohAy8aEcwK3Vffs')\n\nconst checkout_form = new Payload.Form({\n  form: $('#checkout-form').get(0),\n  styles: { invalid: 'is-invalid' },\n  preventDefaultOnSubmit: true,\n  payment: {\n    processing_id: 'acct_3bcr6L5qxxnXJjNwu4MHg',\n  },\n})\n  .on('declined', function (error) {\n    console.log(error)\n  })\n  .on('error', function (error) {\n    console.log(error)\n  })\n  .on('processed', function (data) {\n    $('#paid-modal .alert').html('Transaction ID: ' + data.transaction_id)\n    $('#paid-modal').modal('show')\n  })\n  .plaid($('#checkout-form button').get(0))\n\n\n//# sourceURL=webpack://payload-code.github.io/./src/js/plaid-example.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/plaid-example.js"));
/******/ }
]);