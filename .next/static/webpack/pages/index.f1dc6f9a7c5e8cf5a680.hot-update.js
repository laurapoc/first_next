self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_projects_Programming_udemy_React_with_Colt_Steel_next_first_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_projects_Programming_udemy_React_with_Colt_Steel_next_first_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_projects_Programming_udemy_React_with_Colt_Steel_next_first_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_projects_Programming_udemy_React_with_Colt_Steel_next_first_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\projects\\Programming\\udemy\\React_with_Colt_Steel\\next\\first-next\\pages\\index.js",
    _this = undefined;

 // import React, { Component } from "react";
// class Index extends Component {
//   constructor(props) {
//     super(props);
//     console.log("Fetching data in constructor");
//     this.state = {
//       data: [],
//     };
//   }
//   static async getInitialProps() {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const json = await res.json();
//     console.log(json);
//     return json;
//   }
//   render() {
//     console.log(this.props);
//     return (
//       <div>
//         <h1>Our Index Page!!!</h1>
//       </div>
//     );
//   }
// }
// export default Index;

var Hello = function Hello() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h1", {
      children: "Our Index Page!!! "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }, _this);
};

_c = Hello;
Hello.getInitialProps = /*#__PURE__*/(0,C_projects_Programming_udemy_React_with_Colt_Steel_next_first_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_projects_Programming_udemy_React_with_Colt_Steel_next_first_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
  var res, data;
  return C_projects_Programming_udemy_React_with_Colt_Steel_next_first_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return axios__WEBPACK_IMPORTED_MODULE_3___default().get("https://jsonplaceholder.typicode.com/posts");

        case 2:
          res = _context.sent;
          data = res.data;
          console.log(data[0]);
          return _context.abrupt("return", {
            posts: data
          });

        case 6:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (Hello);

var _c;

$RefreshReg$(_c, "Hello");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSGVsbG8iLCJnZXRJbml0aWFsUHJvcHMiLCJheGlvcyIsInJlcyIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwicG9zdHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQ2xCLHNCQUNFO0FBQUEsMkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFLRCxDQU5EOztLQUFNQSxLO0FBUU5BLEtBQUssQ0FBQ0MsZUFBTix3VkFBd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFDSkMsZ0RBQUEsQ0FBVSw0Q0FBVixDQURJOztBQUFBO0FBQ2hCQyxhQURnQjtBQUVkQyxjQUZjLEdBRUxELEdBRkssQ0FFZEMsSUFGYztBQUd0QkMsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFJLENBQUMsQ0FBRCxDQUFoQjtBQUhzQiwyQ0FJZjtBQUFDRyxpQkFBSyxFQUFFSDtBQUFSLFdBSmU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBeEI7QUFPQSwrREFBZUosS0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mMWRjNmY5YTdjNWU4Y2Y1YTY4MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuLy8gaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLy8gY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xyXG4vLyAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbi8vICAgICBzdXBlcihwcm9wcyk7XHJcbi8vICAgICBjb25zb2xlLmxvZyhcIkZldGNoaW5nIGRhdGEgaW4gY29uc3RydWN0b3JcIik7XHJcbi8vICAgICB0aGlzLnN0YXRlID0ge1xyXG4vLyAgICAgICBkYXRhOiBbXSxcclxuLy8gICAgIH07XHJcbi8vICAgfVxyXG4vLyAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XHJcbi8vICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0c1wiKTtcclxuLy8gICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xyXG4vLyAgICAgY29uc29sZS5sb2coanNvbik7XHJcbi8vICAgICByZXR1cm4ganNvbjtcclxuLy8gICB9XHJcbi8vICAgcmVuZGVyKCkge1xyXG4vLyAgICAgY29uc29sZS5sb2codGhpcy5wcm9wcyk7XHJcbi8vICAgICByZXR1cm4gKFxyXG4vLyAgICAgICA8ZGl2PlxyXG4vLyAgICAgICAgIDxoMT5PdXIgSW5kZXggUGFnZSEhITwvaDE+XHJcbi8vICAgICAgIDwvZGl2PlxyXG4vLyAgICAgKTtcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG5cclxuY29uc3QgSGVsbG8gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMT5PdXIgSW5kZXggUGFnZSEhISA8L2gxPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbkhlbGxvLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHNcIik7XHJcbiAgY29uc3QgeyBkYXRhIH0gPSByZXM7XHJcbiAgY29uc29sZS5sb2coZGF0YVswXSk7XHJcbiAgcmV0dXJuIHtwb3N0czogZGF0YX07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWxsbztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==