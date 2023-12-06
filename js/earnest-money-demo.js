/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkpayload_code_github_io"] = self["webpackChunkpayload_code_github_io"] || []).push([["earnest-money-demo"],{

/***/ "./src/js/earnest-money-demo.js":
/*!**************************************!*\
  !*** ./src/js/earnest-money-demo.js ***!
  \**************************************/
/***/ (() => {

eval("payload.api_key = 'test_client_key_3bwKEBWEx4pyyxlNv4ssu'\npayload.api_url = 'https://api.payload.co'\n\n$('#payment-request .btn-outline-primary').click(function () {\n  $(this).closest('.row').before(`<div class=\"row\" role=\"custom-field\">\n       <div class=\"form-group col px-1\">\n           <label>Additional Field</label>\n           <input class=\"form-control w-100\" type=\"text\" name=\"additional_datafields[][title]\" placeholder=\"Field Name\" required/>\n       </div>\n       <div class=\"form-group col-0 px-1\">\n           <label>&nbsp;</label>\n           <button class=\"form-control btn btn-outline-danger\"><i class=\"mdi mdi-close\"></i></button>\n       </div>\n      </div>`)\n  $(this)\n    .closest('.row')\n    .prev()\n    .find('.btn')\n    .click(function () {\n      $(this).closest('.row').remove()\n    })\n})\n\n$('#payment-request').submit(function (evt) {\n  evt.preventDefault()\n\n  var obj = $(this).serializeObject()\n\n  /*if ( obj.additional_datafields )\n        obj.additional_datafields = [{'section': 'Info', 'fields': obj.additional_datafields }]*/\n\n  obj.type = 'one_time'\n  obj.processing_id = '3bwKFiytiwZwxYIlorZ9k'\n\n  $(this)\n    .find('.btn-primary')\n    .html(\n      '<span class=\"spinner-border spinner-border-sm\" aria-hidden=\"true\"></span> Loading...'\n    )\n\n  payload.PaymentLink.create(obj).then(\n    function (req) {\n      $(this).find('.btn-primary').html('Send Request')\n      $('#sent-modal').find('a').attr('href', req.url)\n      $('#sent-modal').modal('show')\n    }.bind(this)\n  )\n})\n\n\n//# sourceURL=webpack://payload-code.github.io/./src/js/earnest-money-demo.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/earnest-money-demo.js"));
/******/ }
]);