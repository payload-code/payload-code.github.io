/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkpayload_code_github_io"] = self["webpackChunkpayload_code_github_io"] || []).push([["push-payment-demo"],{

/***/ "./src/js/push-payment-demo.js":
/*!*************************************!*\
  !*** ./src/js/push-payment-demo.js ***!
  \*************************************/
/***/ (() => {

eval("payload('test_client_key_3btrkEyC6xvcByXLthuZx')\n\n$('#payment-request .btn-outline-primary').click(function () {\n  $(this).closest('.row').before(`<div class=\"row\" role=\"custom-field\">\n       <div class=\"form-group col px-1\">\n           <label>Additional Field</label>\n           <input class=\"form-control w-100\" type=\"text\" name=\"additional_datafields[][title]\" placeholder=\"Field Name\" required/>\n       </div>\n       <div class=\"form-group col-0 px-1\">\n           <label>&nbsp;</label>\n           <button class=\"form-control btn btn-outline-danger\"><i class=\"mdi mdi-close\"></i></button>\n       </div>\n      </div>`)\n  $(this)\n    .closest('.row')\n    .prev()\n    .find('.btn')\n    .click(function () {\n      $(this).closest('.row').remove()\n    })\n})\n\nfunction submit(evt) {\n  evt.preventDefault()\n\n  var type = $(this).attr('role')\n\n  var obj = $('#payment-request').serializeObject()\n\n  if (type == 'text') {\n    obj.email_customer = false\n    obj.notifications = [\n      {\n        phone: obj.customer.phone_number,\n      },\n    ]\n  }\n\n  if (type == 'qr') {\n    obj.email_customer = false\n  }\n\n  obj.type = 'one_time'\n  obj.processing_id = 'acct_3btxk1Sh7AyfOzmEIaGfT'\n\n  var txt = $(this).html()\n  $(this).html(\n    '<span class=\"spinner-border spinner-border-sm\" aria-hidden=\"true\"></span> Loading...'\n  )\n\n  payload.PaymentLink.create(obj).then(\n    function (req) {\n      $(this).html(txt)\n      if (type == 'qr') {\n        $('#qr-modal')\n          .find('img')\n          .attr('src', req.url.replace('?', '.qrcode.svg?'))\n        $('#qr-modal').modal('show')\n      } else {\n        $('#sent-modal').find('a').attr('href', req.url)\n        $('#sent-modal').modal('show')\n      }\n    }.bind(this)\n  )\n}\n\n$('#payment-request .btn-primary').click(submit)\n\n\n//# sourceURL=webpack://payload-code.github.io/./src/js/push-payment-demo.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/push-payment-demo.js"));
/******/ }
]);