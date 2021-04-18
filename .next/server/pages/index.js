module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util */ "./src/util/index.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "G:\\ropsten-faucet\\src\\pages\\index.tsx";





function Home() {
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: touched,
    1: setTouched
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: isValid,
    1: setIsValid
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: contractBalance,
    1: setContractBalance
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: success,
    1: setSuccess
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (value) {
      setTouched(true);
    }

    setIsValid(Object(_util__WEBPACK_IMPORTED_MODULE_3__["verifyEthAddress"])(value));
  }, [value]);

  const onSubmit = async e => {
    e.preventDefault();
    await requestFunds();
  };

  const getContractBalance = async () => {
    try {
      const {
        data
      } = await axios__WEBPACK_IMPORTED_MODULE_4___default.a.get('/api');
      const {
        balance
      } = data;
      setContractBalance(balance);
    } catch (e) {
      console.log(e);
      setContractBalance('');
    }
  };

  const requestFunds = async () => {
    setLoading(true);

    try {
      await axios__WEBPACK_IMPORTED_MODULE_4___default.a.post('/api', {
        address: value
      });
      setSuccess(true);
    } catch (e) {
      console.log(e);
      setError(e.message);
    }

    setLoading(false);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    getContractBalance();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"], {
      success: success,
      error: !!error,
      onSubmit: onSubmit,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "Ropsten Faucet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, {
        error: touched && !isValid,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: "Your Ropsten wallet address"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Input"], {
          disabled: loading,
          type: "text",
          value: value,
          onChange: e => setValue(e.target.value)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Message"], {
        error: true,
        content: error
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this), success && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Message"], {
        success: true,
        content: "0.1 ether will soon be transferred to your wallet."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        loading: loading,
        primary: true,
        children: "Request Ether"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, this), contractBalance ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: ["Contract balance: ", parseInt(contractBalance || '') / Math.pow(10, 18), ' ', "ether"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }, this) : null]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/util/index.ts":
/*!***************************!*\
  !*** ./src/util/index.ts ***!
  \***************************/
/*! exports provided: verifyEthAddress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyEthAddress", function() { return verifyEthAddress; });
const verifyEthAddress = address => {
  const regex = /^0x[a-fA-F0-9]{40}$/;
  return regex.test(address);
};

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9pbmRleC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2VtYW50aWMtdWktcmVhY3RcIiJdLCJuYW1lcyI6WyJIb21lIiwidmFsdWUiLCJzZXRWYWx1ZSIsInVzZVN0YXRlIiwidG91Y2hlZCIsInNldFRvdWNoZWQiLCJpc1ZhbGlkIiwic2V0SXNWYWxpZCIsImNvbnRyYWN0QmFsYW5jZSIsInNldENvbnRyYWN0QmFsYW5jZSIsImVycm9yIiwic2V0RXJyb3IiLCJzdWNjZXNzIiwic2V0U3VjY2VzcyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlRWZmZWN0IiwidmVyaWZ5RXRoQWRkcmVzcyIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVxdWVzdEZ1bmRzIiwiZ2V0Q29udHJhY3RCYWxhbmNlIiwiZGF0YSIsImF4aW9zIiwiZ2V0IiwiYmFsYW5jZSIsImNvbnNvbGUiLCJsb2ciLCJwb3N0IiwiYWRkcmVzcyIsIm1lc3NhZ2UiLCJ0YXJnZXQiLCJwYXJzZUludCIsIk1hdGgiLCJwb3ciLCJyZWdleCIsInRlc3QiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURjLEdBS1osSUE1Qk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnQ0Q7O0FBRWNuQyxtRUFBZixFOzs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFPLE1BQU1pQixnQkFBZ0IsR0FBSWEsT0FBRCxJQUE4QjtBQUM1RCxRQUFNTSxLQUFLLEdBQUcscUJBQWQ7QUFDQSxTQUFPQSxLQUFLLENBQUNDLElBQU4sQ0FBV1AsT0FBWCxDQUFQO0FBQ0QsQ0FITSxDOzs7Ozs7Ozs7OztBQ0FQLGtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvaW5kZXgudHN4XCIpO1xuIiwiaW1wb3J0IHsgRm9ybUV2ZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCdXR0b24sIENvbnRhaW5lciwgRm9ybSwgSW5wdXQsIE1lc3NhZ2UgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCB7IHZlcmlmeUV0aEFkZHJlc3MgfSBmcm9tICcuLi91dGlsJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmZ1bmN0aW9uIEhvbWUoKTogUmVhY3QuUmVhY3ROb2RlIHtcclxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbdG91Y2hlZCwgc2V0VG91Y2hlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzVmFsaWQsIHNldElzVmFsaWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIGNvbnN0IFtjb250cmFjdEJhbGFuY2UsIHNldENvbnRyYWN0QmFsYW5jZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcclxuICBjb25zdCBbc3VjY2Vzcywgc2V0U3VjY2Vzc10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHNldFRvdWNoZWQodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SXNWYWxpZCh2ZXJpZnlFdGhBZGRyZXNzKHZhbHVlKSk7XHJcbiAgfSwgW3ZhbHVlXSk7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGU6IEZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBhd2FpdCByZXF1ZXN0RnVuZHMoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRDb250cmFjdEJhbGFuY2UgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaScpO1xyXG4gICAgICBjb25zdCB7IGJhbGFuY2UgfSA9IGRhdGE7XHJcbiAgICAgIHNldENvbnRyYWN0QmFsYW5jZShiYWxhbmNlKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgIHNldENvbnRyYWN0QmFsYW5jZSgnJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVxdWVzdEZ1bmRzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGF4aW9zLnBvc3QoJy9hcGknLCB7IGFkZHJlc3M6IHZhbHVlIH0pO1xyXG4gICAgICBzZXRTdWNjZXNzKHRydWUpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgc2V0RXJyb3IoZS5tZXNzYWdlKTtcclxuICAgIH1cclxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRDb250cmFjdEJhbGFuY2UoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8Rm9ybSBzdWNjZXNzPXtzdWNjZXNzfSBlcnJvcj17ISFlcnJvcn0gb25TdWJtaXQ9e29uU3VibWl0fT5cclxuICAgICAgICA8aDE+Um9wc3RlbiBGYXVjZXQ8L2gxPlxyXG4gICAgICAgIDxGb3JtLkZpZWxkIGVycm9yPXt0b3VjaGVkICYmICFpc1ZhbGlkfT5cclxuICAgICAgICAgIDxsYWJlbD5Zb3VyIFJvcHN0ZW4gd2FsbGV0IGFkZHJlc3M8L2xhYmVsPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybS5GaWVsZD5cclxuICAgICAgICA8TWVzc2FnZSBlcnJvciBjb250ZW50PXtlcnJvcn0gLz5cclxuICAgICAgICB7c3VjY2VzcyAmJiAoXHJcbiAgICAgICAgICA8TWVzc2FnZVxyXG4gICAgICAgICAgICBzdWNjZXNzXHJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCIwLjEgZXRoZXIgd2lsbCBzb29uIGJlIHRyYW5zZmVycmVkIHRvIHlvdXIgd2FsbGV0LlwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPEJ1dHRvbiBsb2FkaW5nPXtsb2FkaW5nfSBwcmltYXJ5PlxyXG4gICAgICAgICAgUmVxdWVzdCBFdGhlclxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICAgIHtjb250cmFjdEJhbGFuY2UgPyAoXHJcbiAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICBDb250cmFjdCBiYWxhbmNlOiB7cGFyc2VJbnQoY29udHJhY3RCYWxhbmNlIHx8ICcnKSAvIE1hdGgucG93KDEwLCAxOCl9eycgJ31cclxuICAgICAgICAgIGV0aGVyXHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICApIDogbnVsbH1cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiIsImV4cG9ydCBjb25zdCB2ZXJpZnlFdGhBZGRyZXNzID0gKGFkZHJlc3M6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xyXG4gIGNvbnN0IHJlZ2V4ID0gL14weFthLWZBLUYwLTldezQwfSQvO1xyXG4gIHJldHVybiByZWdleC50ZXN0KGFkZHJlc3MpO1xyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VtYW50aWMtdWktcmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==