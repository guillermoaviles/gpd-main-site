"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/arquifoam",{

/***/ "./src/components/model/Model.tsx":
/*!****************************************!*\
  !*** ./src/components/model/Model.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Model; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-three/drei */ \"./node_modules/@react-three/drei/index.js\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-three/fiber */ \"./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var three_examples_jsm_loaders_STLLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/loaders/STLLoader */ \"./node_modules/three/examples/jsm/loaders/STLLoader.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction ModelRender(param) {\n    let { url  } = param;\n    _s();\n    const geom = (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useLoader)(three_examples_jsm_loaders_STLLoader__WEBPACK_IMPORTED_MODULE_3__.STLLoader, url);\n    console.log(geom);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"group\", {\n        scale: 5,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"mesh\", {\n            geometry: geom,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshPhongMaterial\", {\n                color: \"blue\"\n            }, void 0, false, {\n                fileName: \"/Users/guillermoaviles/Code/GPD/gpd-main-site/src/components/model/Model.tsx\",\n                lineNumber: 19,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/guillermoaviles/Code/GPD/gpd-main-site/src/components/model/Model.tsx\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/guillermoaviles/Code/GPD/gpd-main-site/src/components/model/Model.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_s(ModelRender, \"7wlDnbf3j3s5gdge3MDnqFB2slo=\", false, function() {\n    return [\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useLoader\n    ];\n});\n_c = ModelRender;\nfunction Model() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"App\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.Canvas, {\n            style: {\n                height: \"400px\"\n            },\n            camera: {\n                position: [\n                    450,\n                    650,\n                    20\n                ],\n                fov: 30\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {\n                    fallback: \"loading...\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ModelRender, {\n                        url: \"/evian-display.stl\"\n                    }, void 0, false, {\n                        fileName: \"/Users/guillermoaviles/Code/GPD/gpd-main-site/src/components/model/Model.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/guillermoaviles/Code/GPD/gpd-main-site/src/components/model/Model.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_4__.OrbitControls, {\n                    panSpeed: 0.5,\n                    rotateSpeed: 0.4,\n                    autoRotate: false,\n                    enableZoom: false\n                }, void 0, false, {\n                    fileName: \"/Users/guillermoaviles/Code/GPD/gpd-main-site/src/components/model/Model.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ambientLight\", {\n                    intensity: 0.5\n                }, void 0, false, {\n                    fileName: \"/Users/guillermoaviles/Code/GPD/gpd-main-site/src/components/model/Model.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"spotLight\", {\n                    intensity: 1.5,\n                    angle: 0.1,\n                    penumbra: 1,\n                    position: [\n                        450,\n                        350,\n                        20\n                    ]\n                }, void 0, false, {\n                    fileName: \"/Users/guillermoaviles/Code/GPD/gpd-main-site/src/components/model/Model.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"spotLight\", {\n                    intensity: 1.5,\n                    angle: 2.5,\n                    penumbra: 1,\n                    position: [\n                        250,\n                        150,\n                        40\n                    ]\n                }, void 0, false, {\n                    fileName: \"/Users/guillermoaviles/Code/GPD/gpd-main-site/src/components/model/Model.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/guillermoaviles/Code/GPD/gpd-main-site/src/components/model/Model.tsx\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/guillermoaviles/Code/GPD/gpd-main-site/src/components/model/Model.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Model;\nvar _c, _c1;\n$RefreshReg$(_c, \"ModelRender\");\n$RefreshReg$(_c1, \"Model\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9tb2RlbC9Nb2RlbC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUNRO0FBQ2lCO0FBQ0s7QUFDVTtBQVFqRSxTQUFTTSxZQUFZLEtBQXlCLEVBQUU7UUFBM0IsRUFBRUMsSUFBRyxFQUFvQixHQUF6Qjs7SUFDbkIsTUFBTUMsT0FBT0osNkRBQVNBLENBQUNDLDJFQUFTQSxFQUFFRTtJQUNsQ0UsUUFBUUMsR0FBRyxDQUFDRjtJQUNaLHFCQUNFLDhEQUFDRztRQUFNQyxPQUFPO2tCQUNaLDRFQUFDQztZQUFLQyxVQUFVTjtzQkFDZCw0RUFBQ087Z0JBQWtCQyxPQUFNOzs7Ozs7Ozs7Ozs7Ozs7O0FBS2pDO0dBWFNWOztRQUNNRix5REFBU0E7OztLQURmRTtBQWFNLFNBQVNXLFFBQVE7SUFDOUIscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNoQixzREFBTUE7WUFDTGlCLE9BQU87Z0JBQUVDLFFBQVE7WUFBUTtZQUN6QkMsUUFBUTtnQkFBRUMsVUFBVTtvQkFBQztvQkFBSztvQkFBSztpQkFBRztnQkFBRUMsS0FBSztZQUFHOzs4QkFFNUMsOERBQUN2QiwyQ0FBUUE7b0JBQUN3QixVQUFVOzhCQUNsQiw0RUFBQ25CO3dCQUFZQyxLQUFJOzs7Ozs7Ozs7Ozs4QkFFbkIsOERBQUNMLDREQUFhQTtvQkFBQ3dCLFVBQVU7b0JBQUtDLGFBQWE7b0JBQUtDLFlBQVksS0FBSztvQkFBRUMsWUFBWSxLQUFLOzs7Ozs7OEJBQ3BGLDhEQUFDQztvQkFBYUMsV0FBVzs7Ozs7OzhCQUN6Qiw4REFBQ0M7b0JBQ0NELFdBQVc7b0JBQ1hFLE9BQU87b0JBQ1BDLFVBQVU7b0JBQ1ZYLFVBQVU7d0JBQUM7d0JBQUs7d0JBQUs7cUJBQUc7Ozs7Ozs4QkFFMUIsOERBQUNTO29CQUNDRCxXQUFXO29CQUNYRSxPQUFPO29CQUNQQyxVQUFVO29CQUNWWCxVQUFVO3dCQUFDO3dCQUFLO3dCQUFLO3FCQUFHOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtsQyxDQUFDO01BM0J1Qk4iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbW9kZWwvTW9kZWwudHN4Pzk4MDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgU3VzcGVuc2UgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE9yYml0Q29udHJvbHMgfSBmcm9tIFwiQHJlYWN0LXRocmVlL2RyZWlcIjtcbmltcG9ydCB7IENhbnZhcywgdXNlTG9hZGVyIH0gZnJvbSBcIkByZWFjdC10aHJlZS9maWJlclwiO1xuaW1wb3J0IHsgU1RMTG9hZGVyIH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL1NUTExvYWRlclwiO1xuLy8gaW1wb3J0IGRpc3BsYXlNb2RlbCBmcm9tIFwiXCJcblxuaW50ZXJmYWNlIE1vZGVsUmVuZGVyUHJvcHMge1xuICB1cmw6IHN0cmluZztcblxufVxuXG5mdW5jdGlvbiBNb2RlbFJlbmRlcih7IHVybCB9OiBNb2RlbFJlbmRlclByb3BzKSB7XG4gIGNvbnN0IGdlb20gPSB1c2VMb2FkZXIoU1RMTG9hZGVyLCB1cmwpO1xuICBjb25zb2xlLmxvZyhnZW9tKTtcbiAgcmV0dXJuIChcbiAgICA8Z3JvdXAgc2NhbGU9ezV9PlxuICAgICAgPG1lc2ggZ2VvbWV0cnk9e2dlb219PlxuICAgICAgICA8bWVzaFBob25nTWF0ZXJpYWwgY29sb3I9XCJibHVlXCIgLz5cbiAgICAgIDwvbWVzaD5cbiAgICA8L2dyb3VwPlxuXG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vZGVsKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XG4gICAgICA8Q2FudmFzXG4gICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCI0MDBweFwiIH19XG4gICAgICAgIGNhbWVyYT17eyBwb3NpdGlvbjogWzQ1MCwgNjUwLCAyMF0sIGZvdjogMzAgfX1cbiAgICAgID5cbiAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXtcImxvYWRpbmcuLi5cIn0+XG4gICAgICAgICAgPE1vZGVsUmVuZGVyIHVybD1cIi9ldmlhbi1kaXNwbGF5LnN0bFwiIC8+XG4gICAgICAgIDwvU3VzcGVuc2U+XG4gICAgICAgIDxPcmJpdENvbnRyb2xzIHBhblNwZWVkPXswLjV9IHJvdGF0ZVNwZWVkPXswLjR9IGF1dG9Sb3RhdGU9e2ZhbHNlfSBlbmFibGVab29tPXtmYWxzZX0gLz5cbiAgICAgICAgPGFtYmllbnRMaWdodCBpbnRlbnNpdHk9ezAuNX0gLz5cbiAgICAgICAgPHNwb3RMaWdodFxuICAgICAgICAgIGludGVuc2l0eT17MS41fVxuICAgICAgICAgIGFuZ2xlPXswLjF9XG4gICAgICAgICAgcGVudW1icmE9ezF9XG4gICAgICAgICAgcG9zaXRpb249e1s0NTAsIDM1MCwgMjBdfVxuICAgICAgICAvPlxuICAgICAgICA8c3BvdExpZ2h0XG4gICAgICAgICAgaW50ZW5zaXR5PXsxLjV9XG4gICAgICAgICAgYW5nbGU9ezIuNX1cbiAgICAgICAgICBwZW51bWJyYT17MX1cbiAgICAgICAgICBwb3NpdGlvbj17WzI1MCwgMTUwLCA0MF19XG4gICAgICAgIC8+XG4gICAgICA8L0NhbnZhcz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlN1c3BlbnNlIiwiT3JiaXRDb250cm9scyIsIkNhbnZhcyIsInVzZUxvYWRlciIsIlNUTExvYWRlciIsIk1vZGVsUmVuZGVyIiwidXJsIiwiZ2VvbSIsImNvbnNvbGUiLCJsb2ciLCJncm91cCIsInNjYWxlIiwibWVzaCIsImdlb21ldHJ5IiwibWVzaFBob25nTWF0ZXJpYWwiLCJjb2xvciIsIk1vZGVsIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJoZWlnaHQiLCJjYW1lcmEiLCJwb3NpdGlvbiIsImZvdiIsImZhbGxiYWNrIiwicGFuU3BlZWQiLCJyb3RhdGVTcGVlZCIsImF1dG9Sb3RhdGUiLCJlbmFibGVab29tIiwiYW1iaWVudExpZ2h0IiwiaW50ZW5zaXR5Iiwic3BvdExpZ2h0IiwiYW5nbGUiLCJwZW51bWJyYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/model/Model.tsx\n"));

/***/ })

});