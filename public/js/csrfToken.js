/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/services/cookies.js":
/*!******************************************!*\
  !*** ./resources/js/services/cookies.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setCookie": () => (/* binding */ setCookie),
/* harmony export */   "getCookie": () => (/* binding */ getCookie),
/* harmony export */   "cookieExists": () => (/* binding */ cookieExists),
/* harmony export */   "deleteCookie": () => (/* binding */ deleteCookie)
/* harmony export */ });
var setCookie = function setCookie(options) {
  var name = options.name,
      _options$value = options.value,
      value = _options$value === void 0 ? '' : _options$value,
      _options$path = options.path,
      path = _options$path === void 0 ? '/' : _options$path,
      _options$duration = options.duration,
      duration = _options$duration === void 0 ? 3600 : _options$duration;
  var durationMs = duration * 1000;
  var expires = new Date(Date.now() + durationMs);
  document.cookie = "".concat(name, "=").concat(escape(value), "; expires=").concat(expires.toUTCString(), "; path=").concat(path);
};
var getCookie = function getCookie(name) {
  var _match$groups$value, _match$groups;

  var cast = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : String;
  if (document.cookie.length == 0) return;
  var match = document.cookie.match("".concat(name, "=(?<value>[\\w]*);?"));
  if (!match) return;
  var value = (_match$groups$value = match === null || match === void 0 ? void 0 : (_match$groups = match.groups) === null || _match$groups === void 0 ? void 0 : _match$groups.value) !== null && _match$groups$value !== void 0 ? _match$groups$value : '';
  return cast(unescape(value));
};
var cookieExists = function cookieExists(name) {
  return getCookie(name) !== undefined;
};
var deleteCookie = function deleteCookie(name) {
  setCookie({
    name: name,
    value: undefined,
    duration: -1
  });
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************************!*\
  !*** ./resources/js/services/csrfToken.js ***!
  \********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "csrfToken": () => (/* binding */ csrfToken),
/* harmony export */   "xsrfToken": () => (/* binding */ xsrfToken)
/* harmony export */ });
/* harmony import */ var _cookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cookies */ "./resources/js/services/cookies.js");

var csrfToken = document.getElementsByName('csrf-token')[0].content;
;
var xsrfToken = (0,_cookies__WEBPACK_IMPORTED_MODULE_0__.getCookie)('X-SRF-TOKEN');
})();

/******/ })()
;