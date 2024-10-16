/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkpayload_code_github_io"] = self["webpackChunkpayload_code_github_io"] || []).push([["google-apple-pay-demo"],{

/***/ "./src/js/google-apple-pay-demo.js":
/*!*****************************************!*\
  !*** ./src/js/google-apple-pay-demo.js ***!
  \*****************************************/
/***/ (() => {

eval("Payload('test_client_key_3bcr16ohAy8aEcwK3Vffs')\n\nconst paymentsClient = new google.payments.api.PaymentsClient({\n  environment: 'TEST',\n})\nconst button = paymentsClient.createButton({\n  onClick: () => console.log('TODO: click handler'),\n})\n$('.google-pay-support>div').html(button)\n//button.setAttribute('id', 'google-pay')\n\n//$('.google-pay-support div').append(button)\n//$(button).removeClass('long').addClass('short')\n\nconst checkoutForm = new Payload.Form({\n  form: $('#checkout-form').get(0),\n  styles: { invalid: 'is-invalid' },\n  preventDefaultOnSubmit: true,\n  payment: {\n    processing_id: 'acct_3bcr6L5qxxnXJjNwu4MHg',\n  },\n})\n  .on('decline', function (error) {\n    console.log(error)\n  })\n  .on('error', function (error) {\n    console.log(error)\n  })\n  .on('processed', function (data) {\n    $('#paid-modal .alert').html('Transaction ID: ' + data.transaction_id)\n    $('#paid-modal').modal('show')\n  })\n\ncheckoutForm.applepay($('.apple-pay-button').get(0), function (active) {\n  if (active) $('.google-pay-support').hide()\n})\n\ncheckoutForm.googlepay($('#google-pay').get(0), function (active) {\n  if (!active) {\n    $('#google-pay')\n      .tooltip({ title: 'Google Pay not available' })\n      .addClass('disabled')\n  }\n})\n\n\n//# sourceURL=webpack://payload-code.github.io/./src/js/google-apple-pay-demo.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/google-apple-pay-demo.js"));
/******/ }
]);