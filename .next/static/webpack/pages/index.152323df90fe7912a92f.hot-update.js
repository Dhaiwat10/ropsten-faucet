webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var G_typescript_solidity_dev_starter_kit_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var G_typescript_solidity_dev_starter_kit_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(G_typescript_solidity_dev_starter_kit_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var G_typescript_solidity_dev_starter_kit_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util */ "./src/util/index.ts");
/* harmony import */ var _artifacts_contracts_Faucet_sol_Faucet_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../artifacts/contracts/Faucet.sol/Faucet.json */ "./src/artifacts/contracts/Faucet.sol/Faucet.json");
var _artifacts_contracts_Faucet_sol_Faucet_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../artifacts/contracts/Faucet.sol/Faucet.json */ "./src/artifacts/contracts/Faucet.sol/Faucet.json", 1);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ethers */ "./node_modules/ethers/lib.esm/index.js");




var _jsxFileName = "G:\\typescript-solidity-dev-starter-kit\\src\\pages\\index.tsx",
    _s = $RefreshSig$();







function Home(_ref) {
  _s();

  var contractAddress = _ref.contractAddress;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      value = _useState[0],
      setValue = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      touched = _useState2[0],
      setTouched = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isValid = _useState3[0],
      setIsValid = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (value) {
      setTouched(true);
    }

    setIsValid(Object(_util__WEBPACK_IMPORTED_MODULE_5__["verifyEthAddress"])(value));
  }, [value]);

  var onSubmit = /*#__PURE__*/function () {
    var _ref2 = Object(G_typescript_solidity_dev_starter_kit_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/G_typescript_solidity_dev_starter_kit_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(e) {
      return G_typescript_solidity_dev_starter_kit_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              _context.next = 3;
              return requestFunds();

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onSubmit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var getContractBalance = /*#__PURE__*/function () {
    var _ref3 = Object(G_typescript_solidity_dev_starter_kit_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/G_typescript_solidity_dev_starter_kit_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      var provider, contractBalance;
      return G_typescript_solidity_dev_starter_kit_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(typeof window.ethereum !== 'undefined')) {
                _context2.next = 6;
                break;
              }

              provider = new ethers__WEBPACK_IMPORTED_MODULE_7__["ethers"].providers.Web3Provider(window.ethereum);
              _context2.next = 4;
              return provider.getBalance(contractAddress);

            case 4:
              contractBalance = _context2.sent;
              console.log('Balance:', contractBalance.toString());

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function getContractBalance() {
      return _ref3.apply(this, arguments);
    };
  }();

  var requestFunds = /*#__PURE__*/function () {
    var _ref4 = Object(G_typescript_solidity_dev_starter_kit_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/G_typescript_solidity_dev_starter_kit_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
      var provider, contract;
      return G_typescript_solidity_dev_starter_kit_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!(typeof window.ethereum !== 'undefined')) {
                _context3.next = 14;
                break;
              }

              _context3.next = 3;
              return window.ethereum.request({
                method: 'eth_requestAccounts'
              });

            case 3:
              provider = new ethers__WEBPACK_IMPORTED_MODULE_7__["ethers"].providers.Web3Provider(window.ethereum);
              contract = new ethers__WEBPACK_IMPORTED_MODULE_7__["ethers"].Contract(contractAddress, _artifacts_contracts_Faucet_sol_Faucet_json__WEBPACK_IMPORTED_MODULE_6__.abi, provider);
              _context3.prev = 5;
              _context3.next = 8;
              return contract.withdraw(value);

            case 8:
              console.log('Successfully withdrawed funds');
              _context3.next = 14;
              break;

            case 11:
              _context3.prev = 11;
              _context3.t0 = _context3["catch"](5);
              console.log('Error: ', _context3.t0);

            case 14:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[5, 11]]);
    }));

    return function requestFunds() {
      return _ref4.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (window.ethereum !== undefined) {
      getContractBalance();
    }
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Form"], {
      onSubmit: onSubmit,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "Ropsten Faucet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Form"].Field, {
        error: touched && !isValid,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: "Your Ropsten wallet address"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Input"], {
          type: "text",
          value: value,
          onChange: function onChange(e) {
            return setValue(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        primary: true,
        children: "Request Ether"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 5
  }, this);
}

_s(Home, "BWdEuhKgG5J3Fe5cFcG5+vMRDlA=");

_c = Home;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJIb21lIiwiY29udHJhY3RBZGRyZXNzIiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwidG91Y2hlZCIsInNldFRvdWNoZWQiLCJpc1ZhbGlkIiwic2V0SXNWYWxpZCIsInVzZUVmZmVjdCIsInZlcmlmeUV0aEFkZHJlc3MiLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlcXVlc3RGdW5kcyIsImdldENvbnRyYWN0QmFsYW5jZSIsIndpbmRvdyIsImV0aGVyZXVtIiwicHJvdmlkZXIiLCJldGhlcnMiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJnZXRCYWxhbmNlIiwiY29udHJhY3RCYWxhbmNlIiwiY29uc29sZSIsImxvZyIsInRvU3RyaW5nIiwicmVxdWVzdCIsIm1ldGhvZCIsImNvbnRyYWN0IiwiQ29udHJhY3QiLCJGYXVjZXQiLCJhYmkiLCJ3aXRoZHJhdyIsInVuZGVmaW5lZCIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBUUEsU0FBU0EsSUFBVCxPQUEyRDtBQUFBOztBQUFBLE1BQTNDQyxlQUEyQyxRQUEzQ0EsZUFBMkM7O0FBQUEsa0JBQy9CQyxzREFBUSxDQUFDLEVBQUQsQ0FEdUI7QUFBQSxNQUNsREMsS0FEa0Q7QUFBQSxNQUMzQ0MsUUFEMkM7O0FBQUEsbUJBRTNCRixzREFBUSxDQUFDLEtBQUQsQ0FGbUI7QUFBQSxNQUVsREcsT0FGa0Q7QUFBQSxNQUV6Q0MsVUFGeUM7O0FBQUEsbUJBRzNCSixzREFBUSxDQUFVLEtBQVYsQ0FIbUI7QUFBQSxNQUdsREssT0FIa0Q7QUFBQSxNQUd6Q0MsVUFIeUM7O0FBS3pEQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJTixLQUFKLEVBQVc7QUFDVEcsZ0JBQVUsQ0FBQyxJQUFELENB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QWY7QUFBQTtBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFVRSxxRUFBQyx3REFBRDtBQUFRLGVBQU8sTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWdCRDs7R0FwRVFILEk7O0tBQUFBLEk7O0FBOEVNQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xNTIzMjNkZjkwZmU3OTEyYTkyZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybUV2ZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCdXR0b24sIENvbnRhaW5lciwgRm9ybSwgSW5wdXQgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCB7IHZlcmlmeUV0aEFkZHJlc3MgfSBmcm9tICcuLi91dGlsJztcclxuaW1wb3J0IEZhdWNldCBmcm9tICcuLi9hcnRpZmFjdHMvY29udHJhY3RzL0ZhdWNldC5zb2wvRmF1Y2V0Lmpzb24nO1xyXG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tICdldGhlcnMnO1xyXG5cclxuZGVjbGFyZSBjb25zdCB3aW5kb3c6IGFueTtcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgY29udHJhY3RBZGRyZXNzOiBzdHJpbmc7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBIb21lKHsgY29udHJhY3RBZGRyZXNzIH06IFByb3BzKTogUmVhY3QuUmVhY3ROb2RlIHtcclxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbdG91Y2hlZCwgc2V0VG91Y2hlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzVmFsaWQsIHNldElzVmFsaWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHNldFRvdWNoZWQodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SXNWYWxpZCh2ZXJpZnlFdGhBZGRyZXNzKHZhbHVlKSk7XHJcbiAgfSwgW3ZhbHVlXSk7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGU6IEZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBhd2FpdCByZXF1ZXN0RnVuZHMoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRDb250cmFjdEJhbGFuY2UgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdy5ldGhlcmV1bSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKTtcclxuICAgICAgY29uc3QgY29udHJhY3RCYWxhbmNlID0gYXdhaXQgcHJvdmlkZXIuZ2V0QmFsYW5jZShjb250cmFjdEFkZHJlc3MpO1xyXG4gICAgICBjb25zb2xlLmxvZygnQmFsYW5jZTonLCBjb250cmFjdEJhbGFuY2UudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVxdWVzdEZ1bmRzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cuZXRoZXJldW0gIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHtcclxuICAgICAgICBtZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJyxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSk7XHJcbiAgICAgIGNvbnN0IGNvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChcclxuICAgICAgICBjb250cmFjdEFkZHJlc3MsXHJcbiAgICAgICAgRmF1Y2V0LmFiaSxcclxuICAgICAgICBwcm92aWRlclxyXG4gICAgICApO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGNvbnRyYWN0LndpdGhkcmF3KHZhbHVlKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnU3VjY2Vzc2Z1bGx5IHdpdGhkcmF3ZWQgZnVuZHMnKTtcclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yOiAnLCBlcnIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh3aW5kb3cuZXRoZXJldW0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBnZXRDb250cmFjdEJhbGFuY2UoKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8Rm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxyXG4gICAgICAgIDxoMT5Sb3BzdGVuIEZhdWNldDwvaDE+XHJcbiAgICAgICAgPEZvcm0uRmllbGQgZXJyb3I9e3RvdWNoZWQgJiYgIWlzVmFsaWR9PlxyXG4gICAgICAgICAgPGxhYmVsPllvdXIgUm9wc3RlbiB3YWxsZXQgYWRkcmVzczwvbGFiZWw+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICAgICAgPEJ1dHRvbiBwcmltYXJ5PlJlcXVlc3QgRXRoZXI8L0J1dHRvbj5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBjb250cmFjdEFkZHJlc3M6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NPTlRSQUNUX0FERFJFU1MsXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=