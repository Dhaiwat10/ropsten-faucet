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

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      contractBalance = _useState4[0],
      setContractBalance = _useState4[1];

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
      var provider, _contractBalance;

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
              _contractBalance = _context2.sent;
              return _context2.abrupt("return", _contractBalance.toString());

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
      getContractBalance().then(function (bal) {
        return setContractBalance(bal);
      });
    }
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Form"], {
      onSubmit: onSubmit,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "Ropsten Faucet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Form"].Field, {
        error: touched && !isValid,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: "Your Ropsten wallet address"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Input"], {
          type: "text",
          value: value,
          onChange: function onChange(e) {
            return setValue(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
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
      children: ["Contract balance - ", contractBalance, " ether"]
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

_s(Home, "53Cp6xGjVjyEKBL1leGmK5rryVw=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJIb21lIiwiY29udHJhY3RBZGRyZXNzIiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwidG91Y2hlZCIsInNldFRvdWNoZWQiLCJpc1ZhbGlkIiwic2V0SXNWYWxpZCIsImNvbnRyYWN0QmFsYW5jZSIsInNldENvbnRyYWN0QmFsYW5jZSIsInVzZUVmZmVjdCIsInZlcmlmeUV0aEFkZHJlc3MiLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlcXVlc3RGdW5kcyIsImdldENvbnRyYWN0QmFsYW5jZSIsIndpbmRvdyIsImV0aGVyZXVtIiwicHJvdmlkZXIiLCJldGhlcnMiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJnZXRCYWxhbmNlIiwidG9TdHJpbmciLCJyZXF1ZXN0IiwibWV0aG9kIiwic2lnbmVyIiwiZ2V0U2lnbmVyIiwiY29udHJhY3QiLCJDb250cmFjdCIsIkZhdWNldCIsImFiaSIsIndpdGhkcmF3IiwiY29uc29sZSIsImxvZyIsInVuZGVmaW5lZCIsInRoZW4iLCJiYWwiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVFBLFNBQVNBLElBQVQsT0FBMkQ7QUFBQTs7QUFBQSxNQUEzQ0MsZUFBMkMsUUFBM0NBLGVBQTJDOztBQUFBLGtCQUMvQkMsc0RBQVEsQ0FBQyxFQUFELENBRHVCO0FBQUEsTUFDbERDLEtBRGtEO0FBQUEsTUFDM0NDLFFBRDJDOztBQUFBLG1CQUUzQkYsc0RBQVEsQ0FBQyxLQUFELENBRm1CO0FBQUEsTUFFbERHLE9BRmtEO0FBQUEsTUFFekNDLFVBRnlDOztBQUFBLG1CQUczQkosc0RBQVEsQ0FBVSxLQUFWLENBSG1CO0FBQUEsTUFHbERLLE9BSGtEO0FBQUEsTUFHekNDLFVBSHlDOztBQUFBLG1CQUlYTixz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QUVSLE9BQU8sSUFBSSxDQUFDRSxPQUEvQjtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUUscUVBQUMsdURBQUQ7QUFDRSxjQUFJLEVBQUMsTUFEUDtBQUVFLGVBQUssRUFBRUosS0FGVDtBQUdFLGtCQUFRLEVBQUUsa0JBQUNXLENBQUQ7QUFBQSxtQkFBT1YsUUFBUSxDQUFDVSxDQUFDLENBQUMwQixNQUFGLENBQVNyQyxLQUFWLENBQWY7QUFBQTtBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFVRSxxRUFBQyx3REFBRDtBQUFRLGVBQU8sTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBYUU7QUFBQSx3Q0FBMEJNLGVBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBaUJEOztHQW5FUVQsSTs7S0FBQUEsSTs7QUE2RU1BLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljg4ODM1ZWU5MWJiYzA5MjFiYTM3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtRXZlbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgQ29udGFpbmVyLCBGb3JtLCBJbnB1dCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IHsgdmVyaWZ5RXRoQWRkcmVzcyB9IGZyb20gJy4uL3V0aWwnO1xyXG5pbXBvcnQgRmF1Y2V0IGZyb20gJy4uL2FydGlmYWN0cy9jb250cmFjdHMvRmF1Y2V0LnNvbC9GYXVjZXQuanNvbic7XHJcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gJ2V0aGVycyc7XHJcblxyXG5kZWNsYXJlIGNvbnN0IHdpbmRvdzogYW55O1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBjb250cmFjdEFkZHJlc3M6IHN0cmluZztcclxufTtcclxuXHJcbmZ1bmN0aW9uIEhvbWUoeyBjb250cmFjdEFkZHJlc3MgfTogUHJvcHMpOiBSZWFjdC5SZWFjdE5vZGUge1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFt0b3VjaGVkLCBzZXRUb3VjaGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNWYWxpZCwgc2V0SXNWYWxpZF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgW2NvbnRyYWN0QmFsYW5jZSwgc2V0Q29udHJhY3RCYWxhbmNlXSA9IHVzZVN0YXRlPHN0cmluZz4oKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICBzZXRUb3VjaGVkKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldElzVmFsaWQodmVyaWZ5RXRoQWRkcmVzcyh2YWx1ZSkpO1xyXG4gIH0sIFt2YWx1ZV0pO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChlOiBGb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgYXdhaXQgcmVxdWVzdEZ1bmRzKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0Q29udHJhY3RCYWxhbmNlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cuZXRoZXJldW0gIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSk7XHJcbiAgICAgIGNvbnN0IGNvbnRyYWN0QmFsYW5jZSA9IGF3YWl0IHByb3ZpZGVyLmdldEJhbGFuY2UoY29udHJhY3RBZGRyZXNzKTtcclxuICAgICAgcmV0dXJuIGNvbnRyYWN0QmFsYW5jZS50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlcXVlc3RGdW5kcyA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93LmV0aGVyZXVtICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7XHJcbiAgICAgICAgbWV0aG9kOiAnZXRoX3JlcXVlc3RBY2NvdW50cycsXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcih3aW5kb3cuZXRoZXJldW0pO1xyXG4gICAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcclxuICAgICAgY29uc3QgY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KGNvbnRyYWN0QWRkcmVzcywgRmF1Y2V0LmFiaSwgc2lnbmVyKTtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBjb250cmFjdC53aXRoZHJhdyh2YWx1ZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1N1Y2Nlc3NmdWxseSB3aXRoZHJhd2VkIGZ1bmRzJyk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcjogJywgZXJyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAod2luZG93LmV0aGVyZXVtICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgZ2V0Q29udHJhY3RCYWxhbmNlKCkudGhlbigoYmFsKSA9PiBzZXRDb250cmFjdEJhbGFuY2UoYmFsKSk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPEZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cclxuICAgICAgICA8aDE+Um9wc3RlbiBGYXVjZXQ8L2gxPlxyXG4gICAgICAgIDxGb3JtLkZpZWxkIGVycm9yPXt0b3VjaGVkICYmICFpc1ZhbGlkfT5cclxuICAgICAgICAgIDxsYWJlbD5Zb3VyIFJvcHN0ZW4gd2FsbGV0IGFkZHJlc3M8L2xhYmVsPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgIDxCdXR0b24gcHJpbWFyeT5SZXF1ZXN0IEV0aGVyPC9CdXR0b24+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgICAgPHNwYW4+Q29udHJhY3QgYmFsYW5jZSAtIHtjb250cmFjdEJhbGFuY2V9IGV0aGVyPC9zcGFuPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBjb250cmFjdEFkZHJlc3M6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NPTlRSQUNUX0FERFJFU1MsXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=