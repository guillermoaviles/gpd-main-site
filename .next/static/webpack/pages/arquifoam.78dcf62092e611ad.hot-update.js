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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Model; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-three/drei */ \"./node_modules/@react-three/drei/index.js\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-three/fiber */ \"./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var three_examples_jsm_loaders_STLLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/loaders/STLLoader */ \"./node_modules/three/examples/jsm/loaders/STLLoader.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction ModelRender(param) {\n    let { url  } = param;\n    _s();\n    const geom = (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useLoader)(three_examples_jsm_loaders_STLLoader__WEBPACK_IMPORTED_MODULE_3__.STLLoader, url);\n    console.log(geom);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"group\", {\n        scale: 5,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"mesh\", {\n            geometry: geom,\n            rotation: [\n                2,\n                3,\n                3\n            ],\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshPhongMaterial\", {\n                color: \"blue\"\n            }, void 0, false, {\n                fileName: \"/Users/guillermoaviles/Code/GPD/gpd-main-site/src/components/model/Model.tsx\",\n                lineNumber: 19,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/guillermoaviles/Code/GPD/gpd-main-site/src/components/model/Model.tsx\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/guillermoaviles/Code/GPD/gpd-main-site/src/components/model/Model.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_s(ModelRender, \"7wlDnbf3j3s5gdge3MDnqFB2slo=\", false, function() {\n    return [\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useLoader\n    ];\n});\n_c = ModelRender;\nfunction Model() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"App\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.Canvas, {\n            style: {\n                height: \"400px\"\n            },\n            camera: {\n                position: [\n                    450,\n                    650,\n                    20\n                ],\n                fov: 30\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {\n                    fallback: \"loading...\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ModelRender, {\n                        url: \"/evian-display.stl\"\n                    }, void 0, false, {\n                        fileName: \"/Users/guillermoaviles/Code/GPD/gpd-main-site/src/components/model/Model.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/guillermoaviles/Code/GPD/gpd-main-site/src/components/model/Model.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_4__.OrbitControls, {\n                    panSpeed: 0.5,\n                    rotateSpeed: 0.4,\n                    autoRotate: false,\n                    enableZoom: false\n                }, void 0, false, {\n                    fileName: \"/Users/guillermoaviles/Code/GPD/gpd-main-site/src/components/model/Model.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ambientLight\", {\n                    intensity: 0.5\n                }, void 0, false, {\n                    fileName: \"/Users/guillermoaviles/Code/GPD/gpd-main-site/src/components/model/Model.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"spotLight\", {\n                    intensity: 1.5,\n                    angle: 0.1,\n                    penumbra: 1,\n                    position: [\n                        450,\n                        350,\n                        20\n                    ]\n                }, void 0, false, {\n                    fileName: \"/Users/guillermoaviles/Code/GPD/gpd-main-site/src/components/model/Model.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"spotLight\", {\n                    intensity: 1.5,\n                    angle: 2.5,\n                    penumbra: 1,\n                    position: [\n                        250,\n                        150,\n                        40\n                    ]\n                }, void 0, false, {\n                    fileName: \"/Users/guillermoaviles/Code/GPD/gpd-main-site/src/components/model/Model.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/guillermoaviles/Code/GPD/gpd-main-site/src/components/model/Model.tsx\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/guillermoaviles/Code/GPD/gpd-main-site/src/components/model/Model.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Model;\nvar _c, _c1;\n$RefreshReg$(_c, \"ModelRender\");\n$RefreshReg$(_c1, \"Model\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9tb2RlbC9Nb2RlbC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUNRO0FBQ2lCO0FBQ0s7QUFDVTtBQVFqRSxTQUFTTSxZQUFZLEtBQXlCLEVBQUU7UUFBM0IsRUFBRUMsSUFBRyxFQUFvQixHQUF6Qjs7SUFDbkIsTUFBTUMsT0FBT0osNkRBQVNBLENBQUNDLDJFQUFTQSxFQUFFRTtJQUNsQ0UsUUFBUUMsR0FBRyxDQUFDRjtJQUNaLHFCQUNFLDhEQUFDRztRQUFNQyxPQUFPO2tCQUNaLDRFQUFDQztZQUFLQyxVQUFVTjtZQUFNTyxVQUFVO2dCQUFDO2dCQUFHO2dCQUFHO2FBQUU7c0JBQ3ZDLDRFQUFDQztnQkFBa0JDLE9BQU07Ozs7Ozs7Ozs7Ozs7Ozs7QUFLakM7R0FYU1g7O1FBQ01GLHlEQUFTQTs7O0tBRGZFO0FBYU0sU0FBU1ksUUFBUTtJQUM5QixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ2pCLHNEQUFNQTtZQUNMa0IsT0FBTztnQkFBRUMsUUFBUTtZQUFRO1lBQ3pCQyxRQUFRO2dCQUFFQyxVQUFVO29CQUFDO29CQUFLO29CQUFLO2lCQUFHO2dCQUFFQyxLQUFLO1lBQUc7OzhCQUU1Qyw4REFBQ3hCLDJDQUFRQTtvQkFBQ3lCLFVBQVU7OEJBQ2xCLDRFQUFDcEI7d0JBQVlDLEtBQUk7Ozs7Ozs7Ozs7OzhCQUVuQiw4REFBQ0wsNERBQWFBO29CQUFDeUIsVUFBVTtvQkFBS0MsYUFBYTtvQkFBS0MsWUFBWSxLQUFLO29CQUFFQyxZQUFZLEtBQUs7Ozs7Ozs4QkFDcEYsOERBQUNDO29CQUFhQyxXQUFXOzs7Ozs7OEJBQ3pCLDhEQUFDQztvQkFDQ0QsV0FBVztvQkFDWEUsT0FBTztvQkFDUEMsVUFBVTtvQkFDVlgsVUFBVTt3QkFBQzt3QkFBSzt3QkFBSztxQkFBRzs7Ozs7OzhCQUUxQiw4REFBQ1M7b0JBQ0NELFdBQVc7b0JBQ1hFLE9BQU87b0JBQ1BDLFVBQVU7b0JBQ1ZYLFVBQVU7d0JBQUM7d0JBQUs7d0JBQUs7cUJBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2xDLENBQUM7TUEzQnVCTiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9tb2RlbC9Nb2RlbC50c3g/OTgwMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBTdXNwZW5zZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgT3JiaXRDb250cm9scyB9IGZyb20gXCJAcmVhY3QtdGhyZWUvZHJlaVwiO1xuaW1wb3J0IHsgQ2FudmFzLCB1c2VMb2FkZXIgfSBmcm9tIFwiQHJlYWN0LXRocmVlL2ZpYmVyXCI7XG5pbXBvcnQgeyBTVExMb2FkZXIgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL2xvYWRlcnMvU1RMTG9hZGVyXCI7XG4vLyBpbXBvcnQgZGlzcGxheU1vZGVsIGZyb20gXCJcIlxuXG5pbnRlcmZhY2UgTW9kZWxSZW5kZXJQcm9wcyB7XG4gIHVybDogc3RyaW5nO1xuXG59XG5cbmZ1bmN0aW9uIE1vZGVsUmVuZGVyKHsgdXJsIH06IE1vZGVsUmVuZGVyUHJvcHMpIHtcbiAgY29uc3QgZ2VvbSA9IHVzZUxvYWRlcihTVExMb2FkZXIsIHVybCk7XG4gIGNvbnNvbGUubG9nKGdlb20pO1xuICByZXR1cm4gKFxuICAgIDxncm91cCBzY2FsZT17NX0+XG4gICAgICA8bWVzaCBnZW9tZXRyeT17Z2VvbX0gcm90YXRpb249e1syLCAzLCAzXX0+XG4gICAgICAgIDxtZXNoUGhvbmdNYXRlcmlhbCBjb2xvcj1cImJsdWVcIiAvPlxuICAgICAgPC9tZXNoPlxuICAgIDwvZ3JvdXA+XG5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9kZWwoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cbiAgICAgIDxDYW52YXNcbiAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjQwMHB4XCIgfX1cbiAgICAgICAgY2FtZXJhPXt7IHBvc2l0aW9uOiBbNDUwLCA2NTAsIDIwXSwgZm92OiAzMCB9fVxuICAgICAgPlxuICAgICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9e1wibG9hZGluZy4uLlwifT5cbiAgICAgICAgICA8TW9kZWxSZW5kZXIgdXJsPVwiL2V2aWFuLWRpc3BsYXkuc3RsXCIgLz5cbiAgICAgICAgPC9TdXNwZW5zZT5cbiAgICAgICAgPE9yYml0Q29udHJvbHMgcGFuU3BlZWQ9ezAuNX0gcm90YXRlU3BlZWQ9ezAuNH0gYXV0b1JvdGF0ZT17ZmFsc2V9IGVuYWJsZVpvb209e2ZhbHNlfSAvPlxuICAgICAgICA8YW1iaWVudExpZ2h0IGludGVuc2l0eT17MC41fSAvPlxuICAgICAgICA8c3BvdExpZ2h0XG4gICAgICAgICAgaW50ZW5zaXR5PXsxLjV9XG4gICAgICAgICAgYW5nbGU9ezAuMX1cbiAgICAgICAgICBwZW51bWJyYT17MX1cbiAgICAgICAgICBwb3NpdGlvbj17WzQ1MCwgMzUwLCAyMF19XG4gICAgICAgIC8+XG4gICAgICAgIDxzcG90TGlnaHRcbiAgICAgICAgICBpbnRlbnNpdHk9ezEuNX1cbiAgICAgICAgICBhbmdsZT17Mi41fVxuICAgICAgICAgIHBlbnVtYnJhPXsxfVxuICAgICAgICAgIHBvc2l0aW9uPXtbMjUwLCAxNTAsIDQwXX1cbiAgICAgICAgLz5cbiAgICAgIDwvQ2FudmFzPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiU3VzcGVuc2UiLCJPcmJpdENvbnRyb2xzIiwiQ2FudmFzIiwidXNlTG9hZGVyIiwiU1RMTG9hZGVyIiwiTW9kZWxSZW5kZXIiLCJ1cmwiLCJnZW9tIiwiY29uc29sZSIsImxvZyIsImdyb3VwIiwic2NhbGUiLCJtZXNoIiwiZ2VvbWV0cnkiLCJyb3RhdGlvbiIsIm1lc2hQaG9uZ01hdGVyaWFsIiwiY29sb3IiLCJNb2RlbCIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiaGVpZ2h0IiwiY2FtZXJhIiwicG9zaXRpb24iLCJmb3YiLCJmYWxsYmFjayIsInBhblNwZWVkIiwicm90YXRlU3BlZWQiLCJhdXRvUm90YXRlIiwiZW5hYmxlWm9vbSIsImFtYmllbnRMaWdodCIsImludGVuc2l0eSIsInNwb3RMaWdodCIsImFuZ2xlIiwicGVudW1icmEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/model/Model.tsx\n"));

/***/ })

});