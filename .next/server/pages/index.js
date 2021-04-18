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

  const onSubmit = async e => {
    e.preventDefault();

    if (!isValid) {
      return setError('Invalid wallet address.');
    }

    await requestFunds();
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (value) {
      setTouched(true);
    }

    setIsValid(Object(_util__WEBPACK_IMPORTED_MODULE_3__["verifyEthAddress"])(value));
  }, [value]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (!isValid) {
      setError('');
    }
  }, [value]);
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
        lineNumber: 69,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, {
        error: touched && !isValid,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: "Your Ropsten wallet address"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Input"], {
          disabled: loading,
          type: "text",
          value: value,
          onChange: e => setValue(e.target.value)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Message"], {
        error: true,
        content: error
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, this), success && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Message"], {
        success: true,
        content: "0.1 ether will soon be transferred to your wallet."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        loading: loading,
        primary: true,
        children: "Request Ether"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, this), contractBalance ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: ["Contract balance: ", parseInt(contractBalance || '') / Math.pow(10, 18), ' ', "ether"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }, this) : null]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 67,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9pbmRleC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2VtYW50aWMtdWktcmVhY3RcIiJdLCJuYW1lcyI6WyJIb21lIiwidmFsdWUiLCJzZXRWYWx1ZSIsInVzZVN0YXRlIiwidG91Y2hlZCIsInNldFRvdWNoZWQiLCJpc1ZhbGlkIiwic2V0SXNWYWxpZCIsImNvbnRyYWN0QmFsYW5jZSIsInNldENvbnRyYWN0QmFsYW5jZSIsImVycm9yIiwic2V0RXJyb3IiLCJzdWNjZXNzIiwic2V0U3VjY2VzcyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZ2V0Q29udHJhY3RCYWxhbmNlIiwiZGF0YSIsImF4aW9zIiwiZ2V0IiwiYmFsYW5jZSIsImUiLCJjb25zb2xlIiwibG9nIiwicmVxdWVzdEZ1bmRzIiwicG9zdCIsImFkZHJlc3MiLCJtZXNzYWdlIiwib25TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInVzZUVmZmVjdCIsInZlcmlmeUV0aEFkZHJlc3MiLCJ0YXJnZXQiLCJwYXJzZUludCIsIk1hdGgiLCJwb3ciLCJyZWdleCIsInRlc3QiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNB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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWxCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQXVCR04sZUFBZSxnQkFDZDtBQUFBLHVDQUNxQnlCLFFBQVEsQ0FBQ3pCLGVBQWUsSUFBSSxFQUFwQixDQUFSLEdBQWtDMEIsSUFBSSxDQUFDQyxHQUFMLENBQVMsRUFBVCxFQUFhLEVBQWIsQ0FEdkQsRUFDeUUsR0FEekU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRGMsR0FLWixJQTVCTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWdDRDs7QUFFY25DLG1FQUFmLEU7Ozs7Ozs7Ozs7OztBQ25HQTtBQUFBO0FBQU8sTUFBTStCLGdCQUFnQixHQUFJTCxPQUFELElBQThCO0FBQzVELFFBQU1VLEtBQUssR0FBRyxxQkFBZDtBQUNBLFNBQU9BLEtBQUssQ0FBQ0MsSUFBTixDQUFXWCxPQUFYLENBQVA7QUFDRCxDQUhNLEM7Ozs7Ozs7Ozs7O0FDQVAsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9pbmRleC50c3hcIik7XG4iLCJpbXBvcnQgeyBGb3JtRXZlbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgQ29udGFpbmVyLCBGb3JtLCBJbnB1dCwgTWVzc2FnZSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IHsgdmVyaWZ5RXRoQWRkcmVzcyB9IGZyb20gJy4uL3V0aWwnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuZnVuY3Rpb24gSG9tZSgpOiBSZWFjdC5SZWFjdE5vZGUge1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFt0b3VjaGVkLCBzZXRUb3VjaGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNWYWxpZCwgc2V0SXNWYWxpZF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgW2NvbnRyYWN0QmFsYW5jZSwgc2V0Q29udHJhY3RCYWxhbmNlXSA9IHVzZVN0YXRlPHN0cmluZz4oKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG4gIGNvbnN0IFtzdWNjZXNzLCBzZXRTdWNjZXNzXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGdldENvbnRyYWN0QmFsYW5jZSA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpJyk7XHJcbiAgICAgIGNvbnN0IHsgYmFsYW5jZSB9ID0gZGF0YTtcclxuICAgICAgc2V0Q29udHJhY3RCYWxhbmNlKGJhbGFuY2UpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgc2V0Q29udHJhY3RCYWxhbmNlKCcnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCByZXF1ZXN0RnVuZHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXhpb3MucG9zdCgnL2FwaScsIHsgYWRkcmVzczogdmFsdWUgfSk7XHJcbiAgICAgIHNldFN1Y2Nlc3ModHJ1ZSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICBzZXRFcnJvcihlLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZTogRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiAoIWlzVmFsaWQpIHtcclxuICAgICAgcmV0dXJuIHNldEVycm9yKCdJbnZhbGlkIHdhbGxldCBhZGRyZXNzLicpO1xyXG4gICAgfVxyXG5cclxuICAgIGF3YWl0IHJlcXVlc3RGdW5kcygpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgc2V0VG91Y2hlZCh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRJc1ZhbGlkKHZlcmlmeUV0aEFkZHJlc3ModmFsdWUpKTtcclxuICB9LCBbdmFsdWVdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghaXNWYWxpZCkge1xyXG4gICAgICBzZXRFcnJvcignJyk7XHJcbiAgICB9XHJcbiAgfSwgW3ZhbHVlXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRDb250cmFjdEJhbGFuY2UoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8Rm9ybSBzdWNjZXNzPXtzdWNjZXNzfSBlcnJvcj17ISFlcnJvcn0gb25TdWJtaXQ9e29uU3VibWl0fT5cclxuICAgICAgICA8aDE+Um9wc3RlbiBGYXVjZXQ8L2gxPlxyXG4gICAgICAgIDxGb3JtLkZpZWxkIGVycm9yPXt0b3VjaGVkICYmICFpc1ZhbGlkfT5cclxuICAgICAgICAgIDxsYWJlbD5Zb3VyIFJvcHN0ZW4gd2FsbGV0IGFkZHJlc3M8L2xhYmVsPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybS5GaWVsZD5cclxuICAgICAgICA8TWVzc2FnZSBlcnJvciBjb250ZW50PXtlcnJvcn0gLz5cclxuICAgICAgICB7c3VjY2VzcyAmJiAoXHJcbiAgICAgICAgICA8TWVzc2FnZVxyXG4gICAgICAgICAgICBzdWNjZXNzXHJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCIwLjEgZXRoZXIgd2lsbCBzb29uIGJlIHRyYW5zZmVycmVkIHRvIHlvdXIgd2FsbGV0LlwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPEJ1dHRvbiBsb2FkaW5nPXtsb2FkaW5nfSBwcmltYXJ5PlxyXG4gICAgICAgICAgUmVxdWVzdCBFdGhlclxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICAgIHtjb250cmFjdEJhbGFuY2UgPyAoXHJcbiAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICBDb250cmFjdCBiYWxhbmNlOiB7cGFyc2VJbnQoY29udHJhY3RCYWxhbmNlIHx8ICcnKSAvIE1hdGgucG93KDEwLCAxOCl9eycgJ31cclxuICAgICAgICAgIGV0aGVyXHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICApIDogbnVsbH1cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiIsImV4cG9ydCBjb25zdCB2ZXJpZnlFdGhBZGRyZXNzID0gKGFkZHJlc3M6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xyXG4gIGNvbnN0IHJlZ2V4ID0gL14weFthLWZBLUYwLTldezQwfSQvO1xyXG4gIHJldHVybiByZWdleC50ZXN0KGFkZHJlc3MpO1xyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VtYW50aWMtdWktcmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==