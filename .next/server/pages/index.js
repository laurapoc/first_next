(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/Link */ "next/Link");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\projects\\Programming\\udemy\\React_with_Colt_Steel\\next\\first-next\\pages\\index.js";

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

const Hello = ({
  posts
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "Our Index Page!!! "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      children: posts.map(post => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: `/post?id=${post.id}`,
          as: `/p/${post.id}`,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: post.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 85
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 29
        }, undefined)
      }, post.id, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 11
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, undefined);
};

Hello.getInitialProps = async () => {
  const res = await axios__WEBPACK_IMPORTED_MODULE_1___default().get("https://jsonplaceholder.typicode.com/posts");
  const {
    data
  } = res; // console.log(data[0]);

  return {
    posts: data
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Hello);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "next/Link":
/*!****************************!*\
  !*** external "next/Link" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/Link");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maXJzdC1uZXh0Ly4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmlyc3QtbmV4dC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vZmlyc3QtbmV4dC9leHRlcm5hbCBcIm5leHQvTGlua1wiIiwid2VicGFjazovL2ZpcnN0LW5leHQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJIZWxsbyIsInBvc3RzIiwibWFwIiwicG9zdCIsImlkIiwidGl0bGUiLCJnZXRJbml0aWFsUHJvcHMiLCJyZXMiLCJheGlvcyIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLE1BQU1BLEtBQUssR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFlO0FBQzNCLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFBLGdCQUNHQSxLQUFLLENBQUNDLEdBQU4sQ0FBV0MsSUFBRCxpQkFDVDtBQUFBLCtCQUFrQiw4REFBQyxrREFBRDtBQUFNLGNBQUksRUFBRyxZQUFXQSxJQUFJLENBQUNDLEVBQUcsRUFBaEM7QUFBbUMsWUFBRSxFQUFHLE1BQUtELElBQUksQ0FBQ0MsRUFBRyxFQUFyRDtBQUFBLGlDQUF3RDtBQUFBLHNCQUFJRCxJQUFJLENBQUNFO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWxCLFNBQVNGLElBQUksQ0FBQ0MsRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVVELENBWEQ7O0FBYUFKLEtBQUssQ0FBQ00sZUFBTixHQUF3QixZQUFZO0FBQ2xDLFFBQU1DLEdBQUcsR0FBRyxNQUFNQyxnREFBQSxDQUFVLDRDQUFWLENBQWxCO0FBQ0EsUUFBTTtBQUFFQztBQUFGLE1BQVdGLEdBQWpCLENBRmtDLENBR2xDOztBQUNBLFNBQU87QUFBRU4sU0FBSyxFQUFFUTtBQUFULEdBQVA7QUFDRCxDQUxEOztBQU9BLCtEQUFlVCxLQUFmLEU7Ozs7Ozs7Ozs7O0FDbkRBLG1DOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9MaW5rXCI7XHJcblxyXG4vLyBpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vLyBjbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XHJcbi8vICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuLy8gICAgIHN1cGVyKHByb3BzKTtcclxuLy8gICAgIGNvbnNvbGUubG9nKFwiRmV0Y2hpbmcgZGF0YSBpbiBjb25zdHJ1Y3RvclwiKTtcclxuLy8gICAgIHRoaXMuc3RhdGUgPSB7XHJcbi8vICAgICAgIGRhdGE6IFtdLFxyXG4vLyAgICAgfTtcclxuLy8gICB9XHJcbi8vICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcclxuLy8gICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzXCIpO1xyXG4vLyAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbi8vICAgICBjb25zb2xlLmxvZyhqc29uKTtcclxuLy8gICAgIHJldHVybiBqc29uO1xyXG4vLyAgIH1cclxuLy8gICByZW5kZXIoKSB7XHJcbi8vICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKTtcclxuLy8gICAgIHJldHVybiAoXHJcbi8vICAgICAgIDxkaXY+XHJcbi8vICAgICAgICAgPGgxPk91ciBJbmRleCBQYWdlISEhPC9oMT5cclxuLy8gICAgICAgPC9kaXY+XHJcbi8vICAgICApO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcblxyXG5jb25zdCBIZWxsbyA9ICh7IHBvc3RzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPk91ciBJbmRleCBQYWdlISEhIDwvaDE+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7cG9zdHMubWFwKChwb3N0KSA9PiAoXHJcbiAgICAgICAgICA8bGkga2V5PXtwb3N0LmlkfT48TGluayBocmVmPXtgL3Bvc3Q/aWQ9JHtwb3N0LmlkfWB9IGFzPXtgL3AvJHtwb3N0LmlkfWB9PjxhPntwb3N0LnRpdGxlfTwvYT48L0xpbms+PC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5IZWxsby5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzXCIpO1xyXG4gIGNvbnN0IHsgZGF0YSB9ID0gcmVzO1xyXG4gIC8vIGNvbnNvbGUubG9nKGRhdGFbMF0pO1xyXG4gIHJldHVybiB7IHBvc3RzOiBkYXRhIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWxsbztcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvTGlua1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9