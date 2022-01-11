"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkstore"] = self["webpackChunkstore"] || []).push([["src_store_js"],{

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CountProvider\": () => (/* binding */ CountProvider),\n/* harmony export */   \"useCount\": () => (/* binding */ useCount)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar CountContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)([0, function () {}]);\nfunction CountProvider(_ref) {\n  var children = _ref.children;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CountContext.Provider, {\n    value: (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0)\n  }, children);\n}\nfunction useCount() {\n  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(CountContext);\n}\n\n//# sourceURL=webpack://store/./src/store.js?");

/***/ })

}]);