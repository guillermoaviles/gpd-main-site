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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Model; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-three/drei */ \"./node_modules/@react-three/drei/index.js\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-three/fiber */ \"./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var three_examples_jsm_loaders_STLLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/loaders/STLLoader */ \"./node_modules/three/examples/jsm/loaders/STLLoader.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction ModelRender(param) {\n    let { url  } = param;\n    _s();\n    const geom = (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useLoader)(three_examples_jsm_loaders_STLLoader__WEBPACK_IMPORTED_MODULE_3__.STLLoader, url);\n    console.log(geom);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"mesh\", {\n        geometry: geom,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshPhongMaterial\", {\n            color: \"blue\"\n        }, void 0, false, {\n            fileName: \"/Users/guillermoaviles/Code/GPD/gpd-main-site/src/components/model/Model.tsx\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/guillermoaviles/Code/GPD/gpd-main-site/src/components/model/Model.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_s(ModelRender, \"7wlDnbf3j3s5gdge3MDnqFB2slo=\", false, function() {\n    return [\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useLoader\n    ];\n});\n_c = ModelRender;\nfunction Model() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"App\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.Canvas, {\n            style: {\n                height: \"400px\"\n            },\n            camera: {\n                position: [\n                    450,\n                    650,\n                    20\n                ],\n                fov: 30\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {\n                    fallback: \"loading...\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ModelRender, {\n                        url: \"/evian-display.stl\"\n                    }, void 0, false, {\n                        fileName: \"/Users/guillermoaviles/Code/GPD/gpd-main-site/src/components/model/Model.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/guillermoaviles/Code/GPD/gpd-main-site/src/components/model/Model.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_4__.OrbitControls, {\n                    panSpeed: 0.5,\n                    rotateSpeed: 0.4,\n                    enableZoom: false\n                }, void 0, false, {\n                    fileName: \"/Users/guillermoaviles/Code/GPD/gpd-main-site/src/components/model/Model.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ambientLight\", {\n                    intensity: 0.5\n                }, void 0, false, {\n                    fileName: \"/Users/guillermoaviles/Code/GPD/gpd-main-site/src/components/model/Model.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"spotLight\", {\n                    intensity: 1.5,\n                    angle: 0.1,\n                    penumbra: 1,\n                    position: [\n                        450,\n                        350,\n                        20\n                    ]\n                }, void 0, false, {\n                    fileName: \"/Users/guillermoaviles/Code/GPD/gpd-main-site/src/components/model/Model.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"spotLight\", {\n                    intensity: 1.5,\n                    angle: 2.5,\n                    penumbra: 1,\n                    position: [\n                        250,\n                        150,\n                        40\n                    ]\n                }, void 0, false, {\n                    fileName: \"/Users/guillermoaviles/Code/GPD/gpd-main-site/src/components/model/Model.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/guillermoaviles/Code/GPD/gpd-main-site/src/components/model/Model.tsx\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/guillermoaviles/Code/GPD/gpd-main-site/src/components/model/Model.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Model;\nvar _c, _c1;\n$RefreshReg$(_c, \"ModelRender\");\n$RefreshReg$(_c1, \"Model\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9tb2RlbC9Nb2RlbC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUNRO0FBQ2lCO0FBQ0s7QUFDVTtBQVFqRSxTQUFTTSxZQUFZLEtBQXlCLEVBQUU7UUFBM0IsRUFBRUMsSUFBRyxFQUFvQixHQUF6Qjs7SUFDbkIsTUFBTUMsT0FBT0osNkRBQVNBLENBQUNDLDJFQUFTQSxFQUFFRTtJQUNsQ0UsUUFBUUMsR0FBRyxDQUFDRjtJQUNaLHFCQUNFLDhEQUFDRztRQUFLQyxVQUFVSjtrQkFDZCw0RUFBQ0s7WUFBa0JDLE9BQU07Ozs7Ozs7Ozs7O0FBRy9CO0dBUlNSOztRQUNNRix5REFBU0E7OztLQURmRTtBQVVNLFNBQVNTLFFBQVE7SUFDOUIscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNkLHNEQUFNQTtZQUNMZSxPQUFPO2dCQUFFQyxRQUFRO1lBQU87WUFDeEJDLFFBQVE7Z0JBQUVDLFVBQVU7b0JBQUM7b0JBQUs7b0JBQUs7aUJBQUc7Z0JBQUVDLEtBQUs7WUFBRzs7OEJBRTVDLDhEQUFDckIsMkNBQVFBO29CQUFDc0IsVUFBVTs4QkFDbEIsNEVBQUNqQjt3QkFBWUMsS0FBSTs7Ozs7Ozs7Ozs7OEJBRW5CLDhEQUFDTCw0REFBYUE7b0JBQUNzQixVQUFVO29CQUFLQyxhQUFhO29CQUFLQyxZQUFZLEtBQUs7Ozs7Ozs4QkFDakUsOERBQUNDO29CQUFhQyxXQUFXOzs7Ozs7OEJBQ3pCLDhEQUFDQztvQkFDQ0QsV0FBVztvQkFDWEUsT0FBTztvQkFDUEMsVUFBVTtvQkFDVlYsVUFBVTt3QkFBQzt3QkFBSzt3QkFBSztxQkFBRzs7Ozs7OzhCQUUxQiw4REFBQ1E7b0JBQ0NELFdBQVc7b0JBQ1hFLE9BQU87b0JBQ1BDLFVBQVU7b0JBQ1ZWLFVBQVU7d0JBQUM7d0JBQUs7d0JBQUs7cUJBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2xDLENBQUM7TUEzQnVCTiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9tb2RlbC9Nb2RlbC50c3g/OTgwMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBTdXNwZW5zZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgT3JiaXRDb250cm9scyB9IGZyb20gXCJAcmVhY3QtdGhyZWUvZHJlaVwiO1xuaW1wb3J0IHsgQ2FudmFzLCB1c2VMb2FkZXIgfSBmcm9tIFwiQHJlYWN0LXRocmVlL2ZpYmVyXCI7XG5pbXBvcnQgeyBTVExMb2FkZXIgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL2xvYWRlcnMvU1RMTG9hZGVyXCI7XG4vLyBpbXBvcnQgZGlzcGxheU1vZGVsIGZyb20gXCJcIlxuXG5pbnRlcmZhY2UgTW9kZWxSZW5kZXJQcm9wcyB7XG4gIHVybDogc3RyaW5nO1xuICBcbn1cblxuZnVuY3Rpb24gTW9kZWxSZW5kZXIoeyB1cmwgfTogTW9kZWxSZW5kZXJQcm9wcykge1xuICBjb25zdCBnZW9tID0gdXNlTG9hZGVyKFNUTExvYWRlciwgdXJsKTtcbiAgY29uc29sZS5sb2coZ2VvbSk7XG4gIHJldHVybiAoXG4gICAgPG1lc2ggZ2VvbWV0cnk9e2dlb219PlxuICAgICAgPG1lc2hQaG9uZ01hdGVyaWFsIGNvbG9yPVwiYmx1ZVwiIC8+XG4gICAgPC9tZXNoPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb2RlbCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxuICAgICAgPENhbnZhc1xuICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiNDAwcHhcIn19XG4gICAgICAgIGNhbWVyYT17eyBwb3NpdGlvbjogWzQ1MCwgNjUwLCAyMF0sIGZvdjogMzAgfX1cbiAgICAgID5cbiAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXtcImxvYWRpbmcuLi5cIn0+XG4gICAgICAgICAgPE1vZGVsUmVuZGVyIHVybD1cIi9ldmlhbi1kaXNwbGF5LnN0bFwiIC8+XG4gICAgICAgIDwvU3VzcGVuc2U+XG4gICAgICAgIDxPcmJpdENvbnRyb2xzIHBhblNwZWVkPXswLjV9IHJvdGF0ZVNwZWVkPXswLjR9IGVuYWJsZVpvb209e2ZhbHNlfS8+XG4gICAgICAgIDxhbWJpZW50TGlnaHQgaW50ZW5zaXR5PXswLjV9Lz5cbiAgICAgICAgPHNwb3RMaWdodFxuICAgICAgICAgIGludGVuc2l0eT17MS41fVxuICAgICAgICAgIGFuZ2xlPXswLjF9XG4gICAgICAgICAgcGVudW1icmE9ezF9XG4gICAgICAgICAgcG9zaXRpb249e1s0NTAsIDM1MCwgMjBdfVxuICAgICAgICAvPlxuICAgICAgICA8c3BvdExpZ2h0XG4gICAgICAgICAgaW50ZW5zaXR5PXsxLjV9XG4gICAgICAgICAgYW5nbGU9ezIuNX1cbiAgICAgICAgICBwZW51bWJyYT17MX1cbiAgICAgICAgICBwb3NpdGlvbj17WzI1MCwgMTUwLCA0MF19XG4gICAgICAgIC8+XG4gICAgICA8L0NhbnZhcz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlN1c3BlbnNlIiwiT3JiaXRDb250cm9scyIsIkNhbnZhcyIsInVzZUxvYWRlciIsIlNUTExvYWRlciIsIk1vZGVsUmVuZGVyIiwidXJsIiwiZ2VvbSIsImNvbnNvbGUiLCJsb2ciLCJtZXNoIiwiZ2VvbWV0cnkiLCJtZXNoUGhvbmdNYXRlcmlhbCIsImNvbG9yIiwiTW9kZWwiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsImhlaWdodCIsImNhbWVyYSIsInBvc2l0aW9uIiwiZm92IiwiZmFsbGJhY2siLCJwYW5TcGVlZCIsInJvdGF0ZVNwZWVkIiwiZW5hYmxlWm9vbSIsImFtYmllbnRMaWdodCIsImludGVuc2l0eSIsInNwb3RMaWdodCIsImFuZ2xlIiwicGVudW1icmEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/model/Model.tsx\n"));

/***/ })

});