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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Model; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-three/drei */ \"./node_modules/@react-three/drei/index.js\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-three/fiber */ \"./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var three_examples_jsm_loaders_STLLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/loaders/STLLoader */ \"./node_modules/three/examples/jsm/loaders/STLLoader.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction ModelRender(param) {\n    let { url  } = param;\n    _s();\n    const geom = (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useLoader)(three_examples_jsm_loaders_STLLoader__WEBPACK_IMPORTED_MODULE_3__.STLLoader, url);\n    console.log(geom);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"group\", {\n        scale: 6,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"mesh\", {\n            geometry: geom,\n            position: [\n                0,\n                -32,\n                -10\n            ],\n            rotation: [\n                8,\n                3,\n                19\n            ],\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshMatcapMaterial\", {\n                color: \"#ec6652\"\n            }, void 0, false, {\n                fileName: \"/Users/guillermoaviles/Code/GPD/gpd-main-site/src/components/model/Model.tsx\",\n                lineNumber: 19,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/guillermoaviles/Code/GPD/gpd-main-site/src/components/model/Model.tsx\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/guillermoaviles/Code/GPD/gpd-main-site/src/components/model/Model.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_s(ModelRender, \"7wlDnbf3j3s5gdge3MDnqFB2slo=\", false, function() {\n    return [\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useLoader\n    ];\n});\n_c = ModelRender;\nfunction Model() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"App\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.Canvas, {\n            style: {\n                height: \"500px\"\n            },\n            camera: {\n                position: [\n                    450,\n                    650,\n                    20\n                ],\n                fov: 30\n            },\n            \"overflow-visible\": true,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {\n                    fallback: \"loading...\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ModelRender, {\n                        url: \"/evian-display.stl\"\n                    }, void 0, false, {\n                        fileName: \"/Users/guillermoaviles/Code/GPD/gpd-main-site/src/components/model/Model.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/guillermoaviles/Code/GPD/gpd-main-site/src/components/model/Model.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_4__.OrbitControls, {\n                    panSpeed: 0.5,\n                    rotateSpeed: 0.4,\n                    autoRotate: true,\n                    enableZoom: false\n                }, void 0, false, {\n                    fileName: \"/Users/guillermoaviles/Code/GPD/gpd-main-site/src/components/model/Model.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ambientLight\", {\n                    intensity: 0.5\n                }, void 0, false, {\n                    fileName: \"/Users/guillermoaviles/Code/GPD/gpd-main-site/src/components/model/Model.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"spotLight\", {\n                    intensity: 1.5,\n                    angle: 0.1,\n                    penumbra: 1,\n                    position: [\n                        450,\n                        350,\n                        20\n                    ]\n                }, void 0, false, {\n                    fileName: \"/Users/guillermoaviles/Code/GPD/gpd-main-site/src/components/model/Model.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"spotLight\", {\n                    intensity: 1.5,\n                    angle: 2.5,\n                    penumbra: 1,\n                    position: [\n                        150,\n                        150,\n                        40\n                    ]\n                }, void 0, false, {\n                    fileName: \"/Users/guillermoaviles/Code/GPD/gpd-main-site/src/components/model/Model.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/guillermoaviles/Code/GPD/gpd-main-site/src/components/model/Model.tsx\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/guillermoaviles/Code/GPD/gpd-main-site/src/components/model/Model.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Model;\nvar _c, _c1;\n$RefreshReg$(_c, \"ModelRender\");\n$RefreshReg$(_c1, \"Model\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9tb2RlbC9Nb2RlbC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUNRO0FBQ2lCO0FBQ0s7QUFDVTtBQVFqRSxTQUFTTSxZQUFZLEtBQXlCLEVBQUU7UUFBM0IsRUFBRUMsSUFBRyxFQUFvQixHQUF6Qjs7SUFDbkIsTUFBTUMsT0FBT0osNkRBQVNBLENBQUNDLDJFQUFTQSxFQUFFRTtJQUNsQ0UsUUFBUUMsR0FBRyxDQUFDRjtJQUNaLHFCQUNFLDhEQUFDRztRQUFNQyxPQUFPO2tCQUNaLDRFQUFDQztZQUFLQyxVQUFVTjtZQUFNTyxVQUFVO2dCQUFDO2dCQUFHLENBQUM7Z0JBQUksQ0FBQzthQUFHO1lBQUVDLFVBQVU7Z0JBQUM7Z0JBQUc7Z0JBQUc7YUFBRztzQkFDakUsNEVBQUNDO2dCQUFtQkMsT0FBTTs7Ozs7Ozs7Ozs7Ozs7OztBQUtsQztHQVhTWjs7UUFDTUYseURBQVNBOzs7S0FEZkU7QUFhTSxTQUFTYSxRQUFRO0lBQzlCLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDbEIsc0RBQU1BO1lBQ0xtQixPQUFPO2dCQUFFQyxRQUFRO1lBQVE7WUFDekJDLFFBQVE7Z0JBQUVULFVBQVU7b0JBQUM7b0JBQUs7b0JBQUs7aUJBQUc7Z0JBQUVVLEtBQUs7WUFBRztZQUM1Q0Msa0JBQWdCOzs4QkFFaEIsOERBQUN6QiwyQ0FBUUE7b0JBQUMwQixVQUFVOzhCQUNsQiw0RUFBQ3JCO3dCQUFZQyxLQUFJOzs7Ozs7Ozs7Ozs4QkFFbkIsOERBQUNMLDREQUFhQTtvQkFBQzBCLFVBQVU7b0JBQUtDLGFBQWE7b0JBQUtDLFlBQVksSUFBSTtvQkFBRUMsWUFBWSxLQUFLOzs7Ozs7OEJBQ25GLDhEQUFDQztvQkFBYUMsV0FBVzs7Ozs7OzhCQUN6Qiw4REFBQ0M7b0JBQ0NELFdBQVc7b0JBQ1hFLE9BQU87b0JBQ1BDLFVBQVU7b0JBQ1ZyQixVQUFVO3dCQUFDO3dCQUFLO3dCQUFLO3FCQUFHOzs7Ozs7OEJBRTFCLDhEQUFDbUI7b0JBQ0NELFdBQVc7b0JBQ1hFLE9BQU87b0JBQ1BDLFVBQVU7b0JBQ1ZyQixVQUFVO3dCQUFDO3dCQUFLO3dCQUFLO3FCQUFHOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtsQyxDQUFDO01BNUJ1QkkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbW9kZWwvTW9kZWwudHN4Pzk4MDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgU3VzcGVuc2UgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE9yYml0Q29udHJvbHMgfSBmcm9tIFwiQHJlYWN0LXRocmVlL2RyZWlcIjtcbmltcG9ydCB7IENhbnZhcywgdXNlTG9hZGVyIH0gZnJvbSBcIkByZWFjdC10aHJlZS9maWJlclwiO1xuaW1wb3J0IHsgU1RMTG9hZGVyIH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL1NUTExvYWRlclwiO1xuLy8gaW1wb3J0IGRpc3BsYXlNb2RlbCBmcm9tIFwiXCJcblxuaW50ZXJmYWNlIE1vZGVsUmVuZGVyUHJvcHMge1xuICB1cmw6IHN0cmluZztcblxufVxuXG5mdW5jdGlvbiBNb2RlbFJlbmRlcih7IHVybCB9OiBNb2RlbFJlbmRlclByb3BzKSB7XG4gIGNvbnN0IGdlb20gPSB1c2VMb2FkZXIoU1RMTG9hZGVyLCB1cmwpO1xuICBjb25zb2xlLmxvZyhnZW9tKTtcbiAgcmV0dXJuIChcbiAgICA8Z3JvdXAgc2NhbGU9ezZ9PlxuICAgICAgPG1lc2ggZ2VvbWV0cnk9e2dlb219IHBvc2l0aW9uPXtbMCwgLTMyLCAtMTBdfSByb3RhdGlvbj17WzgsIDMsIDE5XX0+XG4gICAgICAgIDxtZXNoTWF0Y2FwTWF0ZXJpYWwgY29sb3I9XCIjZWM2NjUyXCIgLz5cbiAgICAgIDwvbWVzaD5cbiAgICA8L2dyb3VwPlxuXG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vZGVsKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XG4gICAgICA8Q2FudmFzXG4gICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCI1MDBweFwiIH19XG4gICAgICAgIGNhbWVyYT17eyBwb3NpdGlvbjogWzQ1MCwgNjUwLCAyMF0sIGZvdjogMzAgfX1cbiAgICAgICAgb3ZlcmZsb3ctdmlzaWJsZVxuICAgICAgPlxuICAgICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9e1wibG9hZGluZy4uLlwifT5cbiAgICAgICAgICA8TW9kZWxSZW5kZXIgdXJsPVwiL2V2aWFuLWRpc3BsYXkuc3RsXCIgLz5cbiAgICAgICAgPC9TdXNwZW5zZT5cbiAgICAgICAgPE9yYml0Q29udHJvbHMgcGFuU3BlZWQ9ezAuNX0gcm90YXRlU3BlZWQ9ezAuNH0gYXV0b1JvdGF0ZT17dHJ1ZX0gZW5hYmxlWm9vbT17ZmFsc2V9IC8+XG4gICAgICAgIDxhbWJpZW50TGlnaHQgaW50ZW5zaXR5PXswLjV9IC8+XG4gICAgICAgIDxzcG90TGlnaHRcbiAgICAgICAgICBpbnRlbnNpdHk9ezEuNX1cbiAgICAgICAgICBhbmdsZT17MC4xfVxuICAgICAgICAgIHBlbnVtYnJhPXsxfVxuICAgICAgICAgIHBvc2l0aW9uPXtbNDUwLCAzNTAsIDIwXX1cbiAgICAgICAgLz5cbiAgICAgICAgPHNwb3RMaWdodFxuICAgICAgICAgIGludGVuc2l0eT17MS41fVxuICAgICAgICAgIGFuZ2xlPXsyLjV9XG4gICAgICAgICAgcGVudW1icmE9ezF9XG4gICAgICAgICAgcG9zaXRpb249e1sxNTAsIDE1MCwgNDBdfVxuICAgICAgICAvPlxuICAgICAgPC9DYW52YXM+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJTdXNwZW5zZSIsIk9yYml0Q29udHJvbHMiLCJDYW52YXMiLCJ1c2VMb2FkZXIiLCJTVExMb2FkZXIiLCJNb2RlbFJlbmRlciIsInVybCIsImdlb20iLCJjb25zb2xlIiwibG9nIiwiZ3JvdXAiLCJzY2FsZSIsIm1lc2giLCJnZW9tZXRyeSIsInBvc2l0aW9uIiwicm90YXRpb24iLCJtZXNoTWF0Y2FwTWF0ZXJpYWwiLCJjb2xvciIsIk1vZGVsIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJoZWlnaHQiLCJjYW1lcmEiLCJmb3YiLCJvdmVyZmxvdy12aXNpYmxlIiwiZmFsbGJhY2siLCJwYW5TcGVlZCIsInJvdGF0ZVNwZWVkIiwiYXV0b1JvdGF0ZSIsImVuYWJsZVpvb20iLCJhbWJpZW50TGlnaHQiLCJpbnRlbnNpdHkiLCJzcG90TGlnaHQiLCJhbmdsZSIsInBlbnVtYnJhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/model/Model.tsx\n"));

/***/ })

});