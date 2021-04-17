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
              alert(value);

            case 2:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJIb21lIiwiY29udHJhY3RBZGRyZXNzIiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwidG91Y2hlZCIsInNldFRvdWNoZWQiLCJpc1ZhbGlkIiwic2V0SXNWYWxpZCIsInVzZUVmZmVjdCIsInZlcmlmeUV0aEFkZHJlc3MiLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImFsZXJ0IiwiZ2V0Q29udHJhY3RCYWxhbmNlIiwid2luZG93IiwiZXRoZXJldW0iLCJwcm92aWRlciIsImV0aGVycyIsInByb3ZpZGVycyIsIldlYjNQcm92aWRlciIsImdldEJhbGFuY2UiLCJjb250cmFjdEJhbGFuY2UiLCJjb25zb2xlIiwibG9nIiwidG9TdHJpbmciLCJyZXF1ZXN0RnVuZHMiLCJyZXF1ZXN0IiwibWV0aG9kIiwiY29udHJhY3QiLCJDb250cmFjdCIsIkZhdWNldCIsImFiaSIsIndpdGhkcmF3IiwidW5kZWZpbmVkIiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFRQSxTQUFTQSxJQUFULE9BQTJEO0FBQUE7O0FBQUEsTUFBM0NDLGVBQTJDLFFBQTNDQSxlQUEyQzs7QUFBQSxrQkFDL0JDLHNEQUFRLENBQUMsRUFBRCxDQUR1QjtBQUFBLE1BQ2xEQyxLQURrRDtBQUFBLE1BQzNDQyxRQUQyQzs7QUFBQSxtQkFFM0JGLHNEQUFRLENBQUMsS0FBRCxDQUZtQjtBQUFBLE1BRWxERyxPQUZrRDtBQUFBLE1BRXpDQyxVQUZ5Qzs7QUFBQSxtQkFHM0JKLHNEQUFRLENBQVUsS0FBVixDQUhtQjtBQUFBLE1BR2xESyxPQUhrRDtBQUFBLE1BR3pDQyxVQUh5Qzs7QUFLekRDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlOLEtBQUosRUFBVztBQUNURyxnQkFBVSxDQUFD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akMsS0FBVixDQUFmO0FBQUE7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBVUUscUVBQUMsd0RBQUQ7QUFBUSxlQUFPLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnQkQ7O0dBcEVRSCxJOztLQUFBQSxJOztBQThFTUEsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDg2MWEyYTI1YWQ3NDEzNjIwNGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm1FdmVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQnV0dG9uLCBDb250YWluZXIsIEZvcm0sIElucHV0IH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgeyB2ZXJpZnlFdGhBZGRyZXNzIH0gZnJvbSAnLi4vdXRpbCc7XHJcbmltcG9ydCBGYXVjZXQgZnJvbSAnLi4vYXJ0aWZhY3RzL2NvbnRyYWN0cy9GYXVjZXQuc29sL0ZhdWNldC5qc29uJztcclxuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSAnZXRoZXJzJztcclxuXHJcbmRlY2xhcmUgY29uc3Qgd2luZG93OiBhbnk7XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIGNvbnRyYWN0QWRkcmVzczogc3RyaW5nO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gSG9tZSh7IGNvbnRyYWN0QWRkcmVzcyB9OiBQcm9wcyk6IFJlYWN0LlJlYWN0Tm9kZSB7XHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3RvdWNoZWQsIHNldFRvdWNoZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc1ZhbGlkLCBzZXRJc1ZhbGlkXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICBzZXRUb3VjaGVkKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldElzVmFsaWQodmVyaWZ5RXRoQWRkcmVzcyh2YWx1ZSkpO1xyXG4gIH0sIFt2YWx1ZV0pO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChlOiBGb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgYWxlcnQodmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldENvbnRyYWN0QmFsYW5jZSA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93LmV0aGVyZXVtICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcih3aW5kb3cuZXRoZXJldW0pO1xyXG4gICAgICBjb25zdCBjb250cmFjdEJhbGFuY2UgPSBhd2FpdCBwcm92aWRlci5nZXRCYWxhbmNlKGNvbnRyYWN0QWRkcmVzcyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdCYWxhbmNlOicsIGNvbnRyYWN0QmFsYW5jZS50b1N0cmluZygpKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCByZXF1ZXN0RnVuZHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdy5ldGhlcmV1bSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe1xyXG4gICAgICAgIG1ldGhvZDogJ2V0aF9yZXF1ZXN0QWNjb3VudHMnLFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKTtcclxuICAgICAgY29uc3QgY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KFxyXG4gICAgICAgIGNvbnRyYWN0QWRkcmVzcyxcclxuICAgICAgICBGYXVjZXQuYWJpLFxyXG4gICAgICAgIHByb3ZpZGVyXHJcbiAgICAgICk7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgY29udHJhY3Qud2l0aGRyYXcodmFsdWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdTdWNjZXNzZnVsbHkgd2l0aGRyYXdlZCBmdW5kcycpO1xyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnRXJyb3I6ICcsIGVycik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHdpbmRvdy5ldGhlcmV1bSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGdldENvbnRyYWN0QmFsYW5jZSgpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxGb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XHJcbiAgICAgICAgPGgxPlJvcHN0ZW4gRmF1Y2V0PC9oMT5cclxuICAgICAgICA8Rm9ybS5GaWVsZCBlcnJvcj17dG91Y2hlZCAmJiAhaXNWYWxpZH0+XHJcbiAgICAgICAgICA8bGFiZWw+WW91ciBSb3BzdGVuIHdhbGxldCBhZGRyZXNzPC9sYWJlbD5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybS5GaWVsZD5cclxuICAgICAgICA8QnV0dG9uIHByaW1hcnk+UmVxdWVzdCBFdGhlcjwvQnV0dG9uPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGNvbnRyYWN0QWRkcmVzczogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ09OVFJBQ1RfQUREUkVTUyxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==