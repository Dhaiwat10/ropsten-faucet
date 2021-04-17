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

/***/ "./src/artifacts/contracts/Faucet.sol/Faucet.json":
/*!********************************************************!*\
  !*** ./src/artifacts/contracts/Faucet.sol/Faucet.json ***!
  \********************************************************/
/*! exports provided: _format, contractName, sourceName, abi, bytecode, deployedBytecode, linkReferences, deployedLinkReferences, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"_format\":\"hh-sol-artifact-1\",\"contractName\":\"Faucet\",\"sourceName\":\"contracts/Faucet.sol\",\"abi\":[{\"inputs\":[{\"internalType\":\"address payable\",\"name\":\"recepient\",\"type\":\"address\"}],\"name\":\"withdraw\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"stateMutability\":\"payable\",\"type\":\"receive\"}],\"bytecode\":\"0x608060405234801561001057600080fd5b5060fe8061001f6000396000f3fe608060405260043610601f5760003560e01c806351cff8d914602a576025565b36602557005b600080fd5b348015603557600080fd5b50607560048036036020811015604a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506077565b005b8073ffffffffffffffffffffffffffffffffffffffff166108fc67016345785d8a00009081150290604051600060405180830381858888f1935050505015801560c4573d6000803e3d6000fd5b505056fea2646970667358221220d13e149a03fc196c6871d0f03538a44db9e463071b6a9ca5535a4551274dd8ea64736f6c63430007060033\",\"deployedBytecode\":\"0x608060405260043610601f5760003560e01c806351cff8d914602a576025565b36602557005b600080fd5b348015603557600080fd5b50607560048036036020811015604a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506077565b005b8073ffffffffffffffffffffffffffffffffffffffff166108fc67016345785d8a00009081150290604051600060405180830381858888f1935050505015801560c4573d6000803e3d6000fd5b505056fea2646970667358221220d13e149a03fc196c6871d0f03538a44db9e463071b6a9ca5535a4551274dd8ea64736f6c63430007060033\",\"linkReferences\":{},\"deployedLinkReferences\":{}}");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util */ "./src/util/index.ts");
/* harmony import */ var _artifacts_contracts_Faucet_sol_Faucet_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../artifacts/contracts/Faucet.sol/Faucet.json */ "./src/artifacts/contracts/Faucet.sol/Faucet.json");
var _artifacts_contracts_Faucet_sol_Faucet_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../artifacts/contracts/Faucet.sol/Faucet.json */ "./src/artifacts/contracts/Faucet.sol/Faucet.json", 1);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ "ethers");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "G:\\typescript-solidity-dev-starter-kit\\src\\pages\\index.tsx";






function Home({
  contractAddress
}) {
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
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers__WEBPACK_IMPORTED_MODULE_5__["ethers"].providers.Web3Provider(window.ethereum);
      const contractBalance = await provider.getBalance(contractAddress);
      return contractBalance.toString();
    }
  };

  const requestFunds = async () => {
    if (typeof window.ethereum !== 'undefined') {
      await window.ethereum.request({
        method: 'eth_requestAccounts'
      });
      const provider = new ethers__WEBPACK_IMPORTED_MODULE_5__["ethers"].providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers__WEBPACK_IMPORTED_MODULE_5__["ethers"].Contract(contractAddress, _artifacts_contracts_Faucet_sol_Faucet_json__WEBPACK_IMPORTED_MODULE_4__.abi, signer);

      try {
        await contract.withdraw(value);
        console.log('Successfully withdrawed funds');
      } catch (err) {
        console.log('Error: ', err);
      }
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (window.ethereum !== undefined) {
      getContractBalance().then(bal => setContractBalance(bal));
    }
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"], {
      onSubmit: onSubmit,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "Ropsten Faucet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, {
        error: touched && !isValid,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: "Your Ropsten wallet address"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Input"], {
          type: "text",
          value: value,
          onChange: e => setValue(e.target.value)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        primary: true,
        children: "Request Ether"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: ["Contract balance - ", parseInt(contractBalance || '') / Math.pow(10, 18), ' ', "ether"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 5
  }, this);
}

async function getStaticProps() {
  return {
    props: {
      contractAddress: "0xEccA7BF722455A94b9e759247aB86E2e1559c871"
    }
  };
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

/***/ "ethers":
/*!*************************!*\
  !*** external "ethers" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ethers");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9pbmRleC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJldGhlcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlbWFudGljLXVpLXJlYWN0XCIiXSwibmFtZXMiOlsiSG9tZSIsImNvbnRyYWN0QWRkcmVzcyIsInZhbHVlIiwic2V0VmFsdWUiLCJ1c2VTdGF0ZSIsInRvdWNoZWQiLCJzZXRUb3VjaGVkIiwiaXNWYWxpZCIsInNldElzVmFsaWQiLCJjb250cmFjdEJhbGFuY2UiLCJzZXRDb250cmFjdEJhbGFuY2UiLCJ1c2VFZmZlY3QiLCJ2ZXJpZnlFdGhBZGRyZXNzIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJyZXF1ZXN0RnVuZHMiLCJnZXRDb250cmFjdEJhbGFuY2UiLCJ3aW5kb3ciLCJldGhlcmV1bSIsInByb3ZpZGVyIiwiZXRoZXJzIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwiZ2V0QmFsYW5jZSIsInRvU3RyaW5nIiwicmVxdWVzdCIsIm1ldGhvZCIsInNpZ25lciIsImdldFNpZ25lciIsImNvbnRyYWN0IiwiQ29udHJhY3QiLCJGYXVjZXQiLCJhYmkiLCJ3aXRoZHJhdyIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJ1bmRlZmluZWQiLCJ0aGVuIiwiYmFsIiwidGFyZ2V0IiwicGFyc2VJbnQiLCJNYXRoIiwicG93IiwiZ2V0U3RhdGljUHJvcHMiLCJwcm9wcyIsInByb2Nlc3MiLCJORVhUX1BVQkxJQ19DT05UUkFDVF9BRERSRVNTIiwiYWRkcmVzcyIsInJlZ2V4IiwidGVzdCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtR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QUNzQndDLFFBQVEsQ0FBQ2pDLGVBQWUsSUFBSSxFQUFwQixDQUFSLEdBQWtDa0MsSUFBSSxDQUFDQyxHQUFMLENBQVMsRUFBVCxFQUFhLEVBQWIsQ0FEeEQsRUFDMEUsR0FEMUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFvQkQ7O0FBRU0sZUFBZUMsY0FBZixHQUFnQztBQUNyQyxTQUFPO0FBQ0xDLFNBQUssRUFBRTtBQUNMN0MscUJBQWUsRUFBRThDLDRDQUF3Q0M7QUFEcEQ7QUFERixHQUFQO0FBS0Q7QUFFY2hELG1FQUFmLEU7Ozs7Ozs7Ozs7OztBQzVGQTtBQUFBO0FBQU8sTUFBTVksZ0JBQWdCLEdBQUlxQyxPQUFELElBQThCO0FBQzVELFFBQU1DLEtBQUssR0FBRyxxQkFBZDtBQUNBLFNBQU9BLEtBQUssQ0FBQ0MsSUFBTixDQUFXRixPQUFYLENBQVA7QUFDRCxDQUhNLEM7Ozs7Ozs7Ozs7O0FDQVAsbUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9pbmRleC50c3hcIik7XG4iLCJpbXBvcnQgeyBGb3JtRXZlbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgQ29udGFpbmVyLCBGb3JtLCBJbnB1dCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IHsgdmVyaWZ5RXRoQWRkcmVzcyB9IGZyb20gJy4uL3V0aWwnO1xyXG5pbXBvcnQgRmF1Y2V0IGZyb20gJy4uL2FydGlmYWN0cy9jb250cmFjdHMvRmF1Y2V0LnNvbC9GYXVjZXQuanNvbic7XHJcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gJ2V0aGVycyc7XHJcblxyXG5kZWNsYXJlIGNvbnN0IHdpbmRvdzogYW55O1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBjb250cmFjdEFkZHJlc3M6IHN0cmluZztcclxufTtcclxuXHJcbmZ1bmN0aW9uIEhvbWUoeyBjb250cmFjdEFkZHJlc3MgfTogUHJvcHMpOiBSZWFjdC5SZWFjdE5vZGUge1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFt0b3VjaGVkLCBzZXRUb3VjaGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNWYWxpZCwgc2V0SXNWYWxpZF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgW2NvbnRyYWN0QmFsYW5jZSwgc2V0Q29udHJhY3RCYWxhbmNlXSA9IHVzZVN0YXRlPHN0cmluZz4oKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICBzZXRUb3VjaGVkKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldElzVmFsaWQodmVyaWZ5RXRoQWRkcmVzcyh2YWx1ZSkpO1xyXG4gIH0sIFt2YWx1ZV0pO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChlOiBGb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgYXdhaXQgcmVxdWVzdEZ1bmRzKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0Q29udHJhY3RCYWxhbmNlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cuZXRoZXJldW0gIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSk7XHJcbiAgICAgIGNvbnN0IGNvbnRyYWN0QmFsYW5jZSA9IGF3YWl0IHByb3ZpZGVyLmdldEJhbGFuY2UoY29udHJhY3RBZGRyZXNzKTtcclxuICAgICAgcmV0dXJuIGNvbnRyYWN0QmFsYW5jZS50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlcXVlc3RGdW5kcyA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93LmV0aGVyZXVtICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7XHJcbiAgICAgICAgbWV0aG9kOiAnZXRoX3JlcXVlc3RBY2NvdW50cycsXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcih3aW5kb3cuZXRoZXJldW0pO1xyXG4gICAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcclxuICAgICAgY29uc3QgY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KGNvbnRyYWN0QWRkcmVzcywgRmF1Y2V0LmFiaSwgc2lnbmVyKTtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBjb250cmFjdC53aXRoZHJhdyh2YWx1ZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1N1Y2Nlc3NmdWxseSB3aXRoZHJhd2VkIGZ1bmRzJyk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcjogJywgZXJyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAod2luZG93LmV0aGVyZXVtICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgZ2V0Q29udHJhY3RCYWxhbmNlKCkudGhlbigoYmFsKSA9PiBzZXRDb250cmFjdEJhbGFuY2UoYmFsKSk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPEZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cclxuICAgICAgICA8aDE+Um9wc3RlbiBGYXVjZXQ8L2gxPlxyXG4gICAgICAgIDxGb3JtLkZpZWxkIGVycm9yPXt0b3VjaGVkICYmICFpc1ZhbGlkfT5cclxuICAgICAgICAgIDxsYWJlbD5Zb3VyIFJvcHN0ZW4gd2FsbGV0IGFkZHJlc3M8L2xhYmVsPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgIDxCdXR0b24gcHJpbWFyeT5SZXF1ZXN0IEV0aGVyPC9CdXR0b24+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgICAgPHNwYW4+XHJcbiAgICAgICAgQ29udHJhY3QgYmFsYW5jZSAtIHtwYXJzZUludChjb250cmFjdEJhbGFuY2UgfHwgJycpIC8gTWF0aC5wb3coMTAsIDE4KX17JyAnfVxyXG4gICAgICAgIGV0aGVyXHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgY29udHJhY3RBZGRyZXNzOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DT05UUkFDVF9BRERSRVNTLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iLCJleHBvcnQgY29uc3QgdmVyaWZ5RXRoQWRkcmVzcyA9IChhZGRyZXNzOiBzdHJpbmcpOiBib29sZWFuID0+IHtcclxuICBjb25zdCByZWdleCA9IC9eMHhbYS1mQS1GMC05XXs0MH0kLztcclxuICByZXR1cm4gcmVnZXgudGVzdChhZGRyZXNzKTtcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXRoZXJzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZW1hbnRpYy11aS1yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9