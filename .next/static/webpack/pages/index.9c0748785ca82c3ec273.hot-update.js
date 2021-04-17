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
      var provider, signer, contract;
      return G_typescript_solidity_dev_starter_kit_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!(typeof window.ethereum !== 'undefined')) {
                _context3.next = 15;
                break;
              }

              _context3.next = 3;
              return window.ethereum.request({
                method: 'eth_requestAccounts'
              });

            case 3:
              provider = new ethers__WEBPACK_IMPORTED_MODULE_7__["ethers"].providers.Web3Provider(window.ethereum);
              signer = provider.getSigner();
              contract = new ethers__WEBPACK_IMPORTED_MODULE_7__["ethers"].Contract(contractAddress, _artifacts_contracts_Faucet_sol_Faucet_json__WEBPACK_IMPORTED_MODULE_6__.abi, signer);
              _context3.prev = 6;
              _context3.next = 9;
              return contract.withdraw(value);

            case 9:
              console.log('Successfully withdrawed funds');
              _context3.next = 15;
              break;

            case 12:
              _context3.prev = 12;
              _context3.t0 = _context3["catch"](6);
              console.log('Error: ', _context3.t0);

            case 15:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[6, 12]]);
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
        lineNumber: 69,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Form"].Field, {
        error: touched && !isValid,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: "Your Ropsten wallet address"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Input"], {
          type: "text",
          value: value,
          onChange: function onChange(e) {
            return setValue(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        primary: true,
        children: "Request Ether"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 67,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJIb21lIiwiY29udHJhY3RBZGRyZXNzIiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwidG91Y2hlZCIsInNldFRvdWNoZWQiLCJpc1ZhbGlkIiwic2V0SXNWYWxpZCIsInVzZUVmZmVjdCIsInZlcmlmeUV0aEFkZHJlc3MiLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlcXVlc3RGdW5kcyIsImdldENvbnRyYWN0QmFsYW5jZSIsIndpbmRvdyIsImV0aGVyZXVtIiwicHJvdmlkZXIiLCJldGhlcnMiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJnZXRCYWxhbmNlIiwiY29udHJhY3RCYWxhbmNlIiwiY29uc29sZSIsImxvZyIsInRvU3RyaW5nIiwicmVxdWVzdCIsIm1ldGhvZCIsInNpZ25lciIsImdldFNpZ25lciIsImNvbnRyYWN0IiwiQ29udHJhY3QiLCJGYXVjZXQiLCJhYmkiLCJ3aXRoZHJhdyIsInVuZGVmaW5lZCIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBUUEsU0FBU0EsSUFBVCxPQUEyRDtBQUFBOztBQUFBLE1BQTNDQyxlQUEyQyxRQUEzQ0EsZUFBMkM7O0FBQUEsa0JBQy9CQyxzREFBUSxDQUFDLEVBQUQsQ0FEdUI7QUFBQSxNQUNsREMsS0FEa0Q7QUFBQSxNQUMzQ0MsUUFEMkM7O0FBQUEsbUJBRTNCRixzREFBUSxDQUFDLEtBQUQsQ0FGbUI7QUFBQSxNQUVsREcsT0FGa0Q7QUFBQSxNQUV6Q0MsVUFGeUM7O0FBQUEsbUJBRzNCSixzREFBUSxDQUFVLEtBQVYsQ0FIbUI7QUFBQSxNQUdsREssT0FIa0Q7QUFBQSxNQUd6Q0MsVUFIeUM7O0FBS3pEQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJTixLQUFKLEVBQVc7QUFD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Q1MsQ0FBRDtBQUFBLG1CQUFPUixRQUFRLENBQUNRLENBQUMsQ0FBQ3lCLE1BQUYsQ0FBU2xDLEtBQVYsQ0FBZjtBQUFBO0FBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQVVFLHFFQUFDLHdEQUFEO0FBQVEsZUFBTyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZ0JEOztHQXJFUUgsSTs7S0FBQUEsSTs7QUErRU1BLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjljMDc0ODc4NWNhODJjM2VjMjczLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtRXZlbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgQ29udGFpbmVyLCBGb3JtLCBJbnB1dCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IHsgdmVyaWZ5RXRoQWRkcmVzcyB9IGZyb20gJy4uL3V0aWwnO1xyXG5pbXBvcnQgRmF1Y2V0IGZyb20gJy4uL2FydGlmYWN0cy9jb250cmFjdHMvRmF1Y2V0LnNvbC9GYXVjZXQuanNvbic7XHJcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gJ2V0aGVycyc7XHJcblxyXG5kZWNsYXJlIGNvbnN0IHdpbmRvdzogYW55O1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBjb250cmFjdEFkZHJlc3M6IHN0cmluZztcclxufTtcclxuXHJcbmZ1bmN0aW9uIEhvbWUoeyBjb250cmFjdEFkZHJlc3MgfTogUHJvcHMpOiBSZWFjdC5SZWFjdE5vZGUge1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFt0b3VjaGVkLCBzZXRUb3VjaGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNWYWxpZCwgc2V0SXNWYWxpZF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgc2V0VG91Y2hlZCh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRJc1ZhbGlkKHZlcmlmeUV0aEFkZHJlc3ModmFsdWUpKTtcclxuICB9LCBbdmFsdWVdKTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZTogRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGF3YWl0IHJlcXVlc3RGdW5kcygpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldENvbnRyYWN0QmFsYW5jZSA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93LmV0aGVyZXVtICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcih3aW5kb3cuZXRoZXJldW0pO1xyXG4gICAgICBjb25zdCBjb250cmFjdEJhbGFuY2UgPSBhd2FpdCBwcm92aWRlci5nZXRCYWxhbmNlKGNvbnRyYWN0QWRkcmVzcyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdCYWxhbmNlOicsIGNvbnRyYWN0QmFsYW5jZS50b1N0cmluZygpKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCByZXF1ZXN0RnVuZHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdy5ldGhlcmV1bSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe1xyXG4gICAgICAgIG1ldGhvZDogJ2V0aF9yZXF1ZXN0QWNjb3VudHMnLFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKTtcclxuICAgICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XHJcbiAgICAgIGNvbnN0IGNvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChcclxuICAgICAgICBjb250cmFjdEFkZHJlc3MsXHJcbiAgICAgICAgRmF1Y2V0LmFiaSxcclxuICAgICAgICBzaWduZXJcclxuICAgICAgKTtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBjb250cmFjdC53aXRoZHJhdyh2YWx1ZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1N1Y2Nlc3NmdWxseSB3aXRoZHJhd2VkIGZ1bmRzJyk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcjogJywgZXJyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAod2luZG93LmV0aGVyZXVtICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgZ2V0Q29udHJhY3RCYWxhbmNlKCk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPEZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cclxuICAgICAgICA8aDE+Um9wc3RlbiBGYXVjZXQ8L2gxPlxyXG4gICAgICAgIDxGb3JtLkZpZWxkIGVycm9yPXt0b3VjaGVkICYmICFpc1ZhbGlkfT5cclxuICAgICAgICAgIDxsYWJlbD5Zb3VyIFJvcHN0ZW4gd2FsbGV0IGFkZHJlc3M8L2xhYmVsPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgIDxCdXR0b24gcHJpbWFyeT5SZXF1ZXN0IEV0aGVyPC9CdXR0b24+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgY29udHJhY3RBZGRyZXNzOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DT05UUkFDVF9BRERSRVNTLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9