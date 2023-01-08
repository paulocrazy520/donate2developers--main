/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"@rainbow-me/rainbowkit\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi/chains */ \"wagmi/chains\");\n/* harmony import */ var wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi/providers/alchemy */ \"wagmi/providers/alchemy\");\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi/providers/public */ \"wagmi/providers/public\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__, wagmi__WEBPACK_IMPORTED_MODULE_3__, wagmi_chains__WEBPACK_IMPORTED_MODULE_4__, wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_5__, wagmi_providers_public__WEBPACK_IMPORTED_MODULE_6__]);\n([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__, wagmi__WEBPACK_IMPORTED_MODULE_3__, wagmi_chains__WEBPACK_IMPORTED_MODULE_4__, wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_5__, wagmi_providers_public__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\nconst { chains , provider , webSocketProvider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.configureChains)([\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_4__.mainnet,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_4__.polygon,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_4__.optimism,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_4__.arbitrum,\n    ...process.env.NEXT_PUBLIC_ENABLE_TESTNETS === \"true\" ? [\n        wagmi_chains__WEBPACK_IMPORTED_MODULE_4__.goerli\n    ] : [], \n], [\n    (0,wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_5__.alchemyProvider)({\n        // This is Alchemy's default API key.\n        // You can get your own at https://dashboard.alchemyapi.io\n        apiKey: \"dda31a06d0584438ad97e3e6a7fbc436\"\n    }),\n    (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_6__.publicProvider)(), \n]);\nconst { connectors  } = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__.getDefaultWallets)({\n    appName: \"RainbowKit App\",\n    chains\n});\nconst wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.createClient)({\n    autoConnect: true,\n    connectors,\n    provider,\n    webSocketProvider\n});\nfunction MyApp({ Component , pageProps  }) {\n    const { 0: hasWindow , 1: setHasWindow  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{\n        if (false) {}\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            \" \",\n            hasWindow && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_3__.WagmiConfig, {\n                client: wagmiClient,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__.RainbowKitProvider, {\n                    chains: chains,\n                    children: undefined,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"/Users/seanloughran/donate/donate2developers-/pages/_app.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/seanloughran/donate/donate2developers-/pages/_app.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/seanloughran/donate/donate2developers-/pages/_app.tsx\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, this),\n            \" \"\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUErQjtBQUNZO0FBRW9DO0FBQ1o7QUFDUztBQUNsQjtBQUNGO0FBQ1o7QUFDNUMsTUFBTSxFQUFFYyxNQUFNLEdBQUVDLFFBQVEsR0FBRUMsaUJBQWlCLEdBQUUsR0FBR2Qsc0RBQWUsQ0FDN0Q7SUFDRUcsaURBQU87SUFDUEMsaURBQU87SUFDUEMsa0RBQVE7SUFDUkMsa0RBQVE7T0FDSlMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLDJCQUEyQixLQUFLLE1BQU0sR0FBRztRQUFDVixnREFBTTtLQUFDLEdBQUcsRUFBRTtDQUN2RSxFQUNEO0lBQ0VDLHdFQUFlLENBQUM7UUFDZCxxQ0FBcUM7UUFDckMsMERBQTBEO1FBQzFEVSxNQUFNLEVBQUUsa0NBQWtDO0tBQzNDLENBQUM7SUFDRlQsc0VBQWMsRUFBRTtDQUNqQixDQUNGO0FBRUQsTUFBTSxFQUFFVSxVQUFVLEdBQUUsR0FBR3BCLHlFQUFpQixDQUFDO0lBQUVxQixPQUFPLEVBQUUsZ0JBQWdCO0lBQUVSLE1BQU07Q0FBRSxDQUFDO0FBRS9FLE1BQU1TLFdBQVcsR0FBR3BCLG1EQUFZLENBQUM7SUFDL0JxQixXQUFXLEVBQUUsSUFBSTtJQUNqQkgsVUFBVTtJQUNWTixRQUFRO0lBQ1JDLGlCQUFpQjtDQUNsQixDQUFDO0FBRUYsU0FBU1MsS0FBSyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFZLEVBQUU7SUFDakQsTUFBTSxLQUFDQyxTQUFTLE1BQUVDLFlBQVksTUFBSWpCLCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBQ2pEQyxnREFBUyxDQUFDLElBQU07UUFDZCxJQUFJLEtBQTZCLEVBQUUsRUFFbEM7SUFDSCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDUCxxQkFDRTs7WUFDRyxHQUFHO1lBQ0hlLFNBQVMsa0JBQ1IsOERBQUN4Qiw4Q0FBVztnQkFBQzBCLE1BQU0sRUFBRVAsV0FBVzswQkFDOUIsNEVBQUN2QixzRUFBa0I7b0JBQUNjLE1BQU0sRUFBRUEsTUFBTTtvQkFBRWlCLFFBQVEsRUFBRUMsU0FBUzs4QkFDckQsNEVBQUNOLFNBQVM7d0JBQUUsR0FBR0MsU0FBUzs7Ozs7NEJBQUk7Ozs7O3dCQUNUOzs7OztvQkFDVDtZQUNiLEdBQUc7O29CQUNMLENBQ0g7QUFDSixDQUFDO0FBRUQsaUVBQWVGLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LXJhaW5ib3draXQtYXBwLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCBcIkByYWluYm93LW1lL3JhaW5ib3draXQvc3R5bGVzLmNzc1wiO1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IHsgUmFpbmJvd0tpdFByb3ZpZGVyLCBnZXREZWZhdWx0V2FsbGV0cyB9IGZyb20gXCJAcmFpbmJvdy1tZS9yYWluYm93a2l0XCI7XG5pbXBvcnQgeyBjb25maWd1cmVDaGFpbnMsIGNyZWF0ZUNsaWVudCwgV2FnbWlDb25maWcgfSBmcm9tIFwid2FnbWlcIjtcbmltcG9ydCB7IG1haW5uZXQsIHBvbHlnb24sIG9wdGltaXNtLCBhcmJpdHJ1bSwgZ29lcmxpIH0gZnJvbSBcIndhZ21pL2NoYWluc1wiO1xuaW1wb3J0IHsgYWxjaGVteVByb3ZpZGVyIH0gZnJvbSBcIndhZ21pL3Byb3ZpZGVycy9hbGNoZW15XCI7XG5pbXBvcnQgeyBwdWJsaWNQcm92aWRlciB9IGZyb20gXCJ3YWdtaS9wcm92aWRlcnMvcHVibGljXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5jb25zdCB7IGNoYWlucywgcHJvdmlkZXIsIHdlYlNvY2tldFByb3ZpZGVyIH0gPSBjb25maWd1cmVDaGFpbnMoXG4gIFtcbiAgICBtYWlubmV0LFxuICAgIHBvbHlnb24sXG4gICAgb3B0aW1pc20sXG4gICAgYXJiaXRydW0sXG4gICAgLi4uKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0VOQUJMRV9URVNUTkVUUyA9PT0gXCJ0cnVlXCIgPyBbZ29lcmxpXSA6IFtdKSxcbiAgXSxcbiAgW1xuICAgIGFsY2hlbXlQcm92aWRlcih7XG4gICAgICAvLyBUaGlzIGlzIEFsY2hlbXkncyBkZWZhdWx0IEFQSSBrZXkuXG4gICAgICAvLyBZb3UgY2FuIGdldCB5b3VyIG93biBhdCBodHRwczovL2Rhc2hib2FyZC5hbGNoZW15YXBpLmlvXG4gICAgICBhcGlLZXk6IFwiZGRhMzFhMDZkMDU4NDQzOGFkOTdlM2U2YTdmYmM0MzZcIixcbiAgICB9KSxcbiAgICBwdWJsaWNQcm92aWRlcigpLFxuICBdXG4pO1xuXG5jb25zdCB7IGNvbm5lY3RvcnMgfSA9IGdldERlZmF1bHRXYWxsZXRzKHsgYXBwTmFtZTogXCJSYWluYm93S2l0IEFwcFwiLCBjaGFpbnMgfSk7XG5cbmNvbnN0IHdhZ21pQ2xpZW50ID0gY3JlYXRlQ2xpZW50KHtcbiAgYXV0b0Nvbm5lY3Q6IHRydWUsXG4gIGNvbm5lY3RvcnMsXG4gIHByb3ZpZGVyLFxuICB3ZWJTb2NrZXRQcm92aWRlcixcbn0pO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIGNvbnN0IFtoYXNXaW5kb3csIHNldEhhc1dpbmRvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHNldEhhc1dpbmRvdyh0cnVlKTtcbiAgICB9XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge1wiIFwifVxuICAgICAge2hhc1dpbmRvdyAmJiAoXG4gICAgICAgIDxXYWdtaUNvbmZpZyBjbGllbnQ9e3dhZ21pQ2xpZW50fT5cbiAgICAgICAgICA8UmFpbmJvd0tpdFByb3ZpZGVyIGNoYWlucz17Y2hhaW5zfSBjaGlsZHJlbj17dW5kZWZpbmVkfT5cbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICA8L1JhaW5ib3dLaXRQcm92aWRlcj5cbiAgICAgICAgPC9XYWdtaUNvbmZpZz5cbiAgICAgICl9e1wiIFwifVxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJSYWluYm93S2l0UHJvdmlkZXIiLCJnZXREZWZhdWx0V2FsbGV0cyIsImNvbmZpZ3VyZUNoYWlucyIsImNyZWF0ZUNsaWVudCIsIldhZ21pQ29uZmlnIiwibWFpbm5ldCIsInBvbHlnb24iLCJvcHRpbWlzbSIsImFyYml0cnVtIiwiZ29lcmxpIiwiYWxjaGVteVByb3ZpZGVyIiwicHVibGljUHJvdmlkZXIiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNoYWlucyIsInByb3ZpZGVyIiwid2ViU29ja2V0UHJvdmlkZXIiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfRU5BQkxFX1RFU1RORVRTIiwiYXBpS2V5IiwiY29ubmVjdG9ycyIsImFwcE5hbWUiLCJ3YWdtaUNsaWVudCIsImF1dG9Db25uZWN0IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJoYXNXaW5kb3ciLCJzZXRIYXNXaW5kb3ciLCJjbGllbnQiLCJjaGlsZHJlbiIsInVuZGVmaW5lZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@rainbow-me/rainbowkit":
/*!*****************************************!*\
  !*** external "@rainbow-me/rainbowkit" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@rainbow-me/rainbowkit");;

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi");;

/***/ }),

/***/ "wagmi/chains":
/*!*******************************!*\
  !*** external "wagmi/chains" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/chains");;

/***/ }),

/***/ "wagmi/providers/alchemy":
/*!******************************************!*\
  !*** external "wagmi/providers/alchemy" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/providers/alchemy");;

/***/ }),

/***/ "wagmi/providers/public":
/*!*****************************************!*\
  !*** external "wagmi/providers/public" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/providers/public");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();