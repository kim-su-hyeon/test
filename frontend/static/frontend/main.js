/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./frontend/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./frontend/src/components/App.js":
/*!****************************************!*\
  !*** ./frontend/src/components/App.js ***!
  \****************************************/
/*! exports provided: App */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: D:\\\\workspace\\\\python\\\\testWeb\\\\frontend\\\\src\\\\components\\\\App.js: Unexpected token (12:17)\\n\\n\\u001b[0m \\u001b[90m 10 | \\u001b[39m                    \\u001b[33m<\\u001b[39m\\u001b[33minput\\u001b[39m type\\u001b[33m=\\u001b[39m\\u001b[32m\\\"submit\\\"\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33minput\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 11 | \\u001b[39m                \\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mform\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 12 | \\u001b[39m                {\\u001b[33m%\\u001b[39m csrf_token \\u001b[33m%\\u001b[39m}\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m                 \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 13 | \\u001b[39m                {{form\\u001b[33m.\\u001b[39mname}}\\u001b[0m\\n\\u001b[0m \\u001b[90m 14 | \\u001b[39m            \\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mFragment\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 15 | \\u001b[39m        )\\u001b[0m\\n    at Object._raise (D:\\\\workspace\\\\python\\\\testWeb\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:723:17)\\n    at Object.raiseWithData (D:\\\\workspace\\\\python\\\\testWeb\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:716:17)\\n    at Object.raise (D:\\\\workspace\\\\python\\\\testWeb\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:710:17)\\n    at Object.unexpected (D:\\\\workspace\\\\python\\\\testWeb\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8606:16)\\n    at Object.parseExprAtom (D:\\\\workspace\\\\python\\\\testWeb\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9865:20)\\n    at Object.parseExprAtom (D:\\\\workspace\\\\python\\\\testWeb\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:4543:20)\\n    at Object.parseExprSubscripts (D:\\\\workspace\\\\python\\\\testWeb\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9451:23)\\n    at Object.parseMaybeUnary (D:\\\\workspace\\\\python\\\\testWeb\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9431:21)\\n    at Object.parseExprOps (D:\\\\workspace\\\\python\\\\testWeb\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9301:23)\\n    at Object.parseMaybeConditional (D:\\\\workspace\\\\python\\\\testWeb\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9274:23)\\n    at Object.parseMaybeAssign (D:\\\\workspace\\\\python\\\\testWeb\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9229:21)\\n    at Object.parseExpression (D:\\\\workspace\\\\python\\\\testWeb\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9181:23)\\n    at Object.jsxParseExpressionContainer (D:\\\\workspace\\\\python\\\\testWeb\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:4394:30)\\n    at Object.jsxParseElementAt (D:\\\\workspace\\\\python\\\\testWeb\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:4488:36)\\n    at Object.jsxParseElement (D:\\\\workspace\\\\python\\\\testWeb\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:4531:17)\\n    at Object.parseExprAtom (D:\\\\workspace\\\\python\\\\testWeb\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:4538:19)\\n    at Object.parseExprSubscripts (D:\\\\workspace\\\\python\\\\testWeb\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9451:23)\\n    at Object.parseMaybeUnary (D:\\\\workspace\\\\python\\\\testWeb\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9431:21)\\n    at Object.parseExprOps (D:\\\\workspace\\\\python\\\\testWeb\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9301:23)\\n    at Object.parseMaybeConditional (D:\\\\workspace\\\\python\\\\testWeb\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9274:23)\\n    at Object.parseMaybeAssign (D:\\\\workspace\\\\python\\\\testWeb\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9229:21)\\n    at Object.parseParenAndDistinguishExpression (D:\\\\workspace\\\\python\\\\testWeb\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10006:28)\\n    at Object.parseExprAtom (D:\\\\workspace\\\\python\\\\testWeb\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9786:21)\\n    at Object.parseExprAtom (D:\\\\workspace\\\\python\\\\testWeb\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:4543:20)\\n    at Object.parseExprSubscripts (D:\\\\workspace\\\\python\\\\testWeb\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9451:23)\\n    at Object.parseMaybeUnary (D:\\\\workspace\\\\python\\\\testWeb\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9431:21)\\n    at Object.parseExprOps (D:\\\\workspace\\\\python\\\\testWeb\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9301:23)\\n    at Object.parseMaybeConditional (D:\\\\workspace\\\\python\\\\testWeb\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9274:23)\\n    at Object.parseMaybeAssign (D:\\\\workspace\\\\python\\\\testWeb\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9229:21)\\n    at Object.parseExpression (D:\\\\workspace\\\\python\\\\testWeb\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9181:23)\");\n\n//# sourceURL=webpack:///./frontend/src/components/App.js?");

/***/ }),

/***/ "./frontend/src/index.js":
/*!*******************************!*\
  !*** ./frontend/src/index.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/App */ \"./frontend/src/components/App.js\");\n\n\n//# sourceURL=webpack:///./frontend/src/index.js?");

/***/ })

/******/ });