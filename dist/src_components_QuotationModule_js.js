/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkquotationmodule"] = self["webpackChunkquotationmodule"] || []).push([["src_components_QuotationModule_js"],{

/***/ "./src/components/Quotation.js":
/*!*************************************!*\
  !*** ./src/components/Quotation.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"webpack/sharing/consume/default/react-router-dom/react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction Quotation(props) {\n  var myContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(props.userContext);\n  console.log(\"myContext : \", myContext);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"QUOTATION PAGE Page\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/quotation/listeleme\"\n  }, \"Quotation Listeleme Sayfas\\u0131\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/quotation/olusturma\"\n  }, \"Quotation Olusturma Sayfas\\u0131\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, \"\".concat(props.name, \" adl\\u0131 ki\\u015Fi \").concat(props.age, \" ya\\u015F\\u0131ndad\\u0131r. \")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, myContext));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Quotation);\n\n//# sourceURL=webpack://quotationmodule/./src/components/Quotation.js?");

/***/ }),

/***/ "./src/components/QuotationListeleme.js":
/*!**********************************************!*\
  !*** ./src/components/QuotationListeleme.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"webpack/sharing/consume/default/react-router-dom/react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction QuotationListeleme() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \" Quotation Listeleme Page\"));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuotationListeleme);\n\n//# sourceURL=webpack://quotationmodule/./src/components/QuotationListeleme.js?");

/***/ }),

/***/ "./src/components/QuotationModule.js":
/*!*******************************************!*\
  !*** ./src/components/QuotationModule.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"webpack/sharing/consume/default/react-router-dom/react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Quotation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Quotation */ \"./src/components/Quotation.js\");\n/* harmony import */ var _QuotationListeleme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./QuotationListeleme */ \"./src/components/QuotationListeleme.js\");\n/* harmony import */ var _QuotationOlusturma__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./QuotationOlusturma */ \"./src/components/QuotationOlusturma.js\");\n\n\n\n\n\n\nvar Counter = function Counter(props) {\n  // console.log(\"userContextDısaridan : \", props);\n  // const [datas,setDatas] = useState([{name: \"enes\", surname: \"iştem\"}])\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    exact: true,\n    path: \"/quotation\",\n    component: _Quotation__WEBPACK_IMPORTED_MODULE_2__.default\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    exact: true,\n    path: \"/quotation/listeleme\",\n    component: _QuotationListeleme__WEBPACK_IMPORTED_MODULE_3__.default\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    exact: true,\n    path: \"/quotation/olusturma\",\n    component: _QuotationOlusturma__WEBPACK_IMPORTED_MODULE_4__.default\n  }));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Counter);\n\n//# sourceURL=webpack://quotationmodule/./src/components/QuotationModule.js?");

/***/ }),

/***/ "./src/components/QuotationOlusturma.js":
/*!**********************************************!*\
  !*** ./src/components/QuotationOlusturma.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"webpack/sharing/consume/default/react-router-dom/react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction QuotationOlusturma() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \" Quotation Olusturma Page\"));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuotationOlusturma);\n\n//# sourceURL=webpack://quotationmodule/./src/components/QuotationOlusturma.js?");

/***/ })

}]);