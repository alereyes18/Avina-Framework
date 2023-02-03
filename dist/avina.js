/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/accordion.js":
/*!**************************!*\
  !*** ./src/accordion.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ready__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ready */ \"./src/ready.js\");\n\n(0,_ready__WEBPACK_IMPORTED_MODULE_0__.ready)(accordion);\nfunction accordion() {\n  const accordions = document.getElementsByClassName(\"accordion-title\");\n  console.log(accordions);\n  if (document.readyState !== \"loading\") {\n    [...accordions].forEach((accordiontitle, index, array) => {\n      console.log(accordiontitle);\n      accordiontitle.addEventListener(\"click\", () => {\n        console.log(\"clicked\");\n        const content = accordiontitle.parentElement.querySelectorAll(\".accordion-content\");\n        console.log(content);\n        content.forEach((contentdiv, key, parent) => {\n          contentdiv.classList.toggle(\"expanded\");\n        });\n      });\n    });\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordion);\n\n//# sourceURL=webpack://@alereyes18/avina-framework/./src/accordion.js?");

/***/ }),

/***/ "./src/carousel.js":
/*!*************************!*\
  !*** ./src/carousel.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ready__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ready */ \"./src/ready.js\");\n\n(0,_ready__WEBPACK_IMPORTED_MODULE_0__.ready)(carousel);\nfunction carousel() {\n  const carousels = document.querySelectorAll(\".carousel\");\n  function getCarouselItems(carousel) {\n    let carouselChildren, carouselInner, carouselItems;\n    //Get the children of the carousel item (should be carousel-indicators, carousel-inner, carousel-control)\n    carouselChildren = carousel.children;\n    //Find the inner element\n    console.log(carouselChildren);\n    for (let i = 0; i < carouselChildren.length; i++) {\n      let currentChild = carouselChildren[i];\n      if (currentChild.classList.contains('carousel-inner')) carouselInner = currentChild;\n    }\n\n    //Get the carousel-item elements\n    carouselItems = carouselInner.children;\n    return carouselItems;\n  }\n  function getActiveItem(carouselItems) {\n    let activeItemIndex, activeItem;\n    for (let i = 0; i < carouselItems.length; i++) {\n      let currentItem = carouselItems.item(i);\n      console.log(\"Index:\", i, \"\\nItem:\", currentItem);\n      //Check if the current item is the active item\n      if (currentItem.classList.contains(\"active\")) {\n        //Set the active item and its index in carouselItems\n        activeItemIndex = i;\n        activeItem = currentItem;\n        console.log(\"Active Index:\", i, \"\\nActive Item:\", activeItem);\n        break;\n      }\n    }\n    return {\n      activeItemIndex,\n      activeItem\n    };\n  }\n  function getNextItem(carouselItems, activeItemIndex, direction) {\n    let nextItemIndex, nextItem;\n    if (direction == \"prev\") {\n      //If the activeItemIndex is the first item, nextItemIndex will be the last item\n      if (activeItemIndex == 0) {\n        nextItemIndex = carouselItems.length - 1;\n        nextItem = carouselItems.item(nextItemIndex);\n        console.log(\"Next Item Index:\", nextItemIndex, \"\\nNext Item:\", nextItem);\n      } else {\n        //Else, the nextItemIndex will be activeItemIndex+1\n        nextItemIndex = activeItemIndex - 1;\n        nextItem = carouselItems.item(nextItemIndex);\n        console.log(\"Next Item Index:\", nextItemIndex, \"\\nNext Item:\", nextItem);\n      }\n    } else if (direction == \"next\") {\n      //If the activeItemIndex is the first item, nextItemIndex will be the last item\n      if (activeItemIndex == carouselItems.length - 1) {\n        nextItemIndex = 0;\n        nextItem = carouselItems.item(nextItemIndex);\n        console.log(\"Next Item Index:\", nextItemIndex, \"\\nNext Item:\", nextItem);\n      } else {\n        //Else, the nextItemIndex will be activeItemIndex+1\n        nextItemIndex = activeItemIndex + 1;\n        nextItem = carouselItems.item(nextItemIndex);\n        console.log(\"Next Item Index:\", nextItemIndex, \"\\nNext Item:\", nextItem);\n      }\n    }\n    return {\n      nextItemIndex,\n      nextItem\n    };\n  }\n  carousels.forEach(carousel => {\n    const prev = carousel.getElementsByClassName(\"carousel-control-prev\");\n    const next = carousel.getElementsByClassName(\"carousel-control-next\");\n    prev.item(0).addEventListener(\"click\", () => {\n      console.log(\"carousel #\", carousel.id);\n      setNextItem(carousel, \"prev\");\n    });\n    next.item(0).addEventListener(\"click\", () => {\n      console.log(\"carousel #\", carousel.id);\n      setNextItem(carousel, \"next\");\n    });\n  });\n  function setNextItem(carousel, direction) {\n    let carouselItems = getCarouselItems(carousel);\n    console.log(getActiveItem(carouselItems));\n    let activeItem = getActiveItem(carouselItems);\n    let nextItem = getNextItem(carouselItems, activeItem.activeItemIndex, direction);\n    direction == \"next\" ? nextItem.nextItem.classList.add(\"slideout\") : nextItem.nextItem.classList.add(\"slidein\");\n    if (direction == \"next\") {\n      nextItem.nextItem.classList.add(\"slideout\");\n      activeItem.activeItem.classList.add(\"slidein\");\n    } else {\n      nextItem.nextItem.classList.add(\"slidein\");\n      activeItem.activeItem.classList.add(\"slideout\");\n    }\n    setTimeout(() => {\n      if (direction == \"next\") {\n        nextItem.nextItem.classList.remove(\"slideout\");\n        activeItem.activeItem.classList.remove(\"slidein\");\n      } else {\n        nextItem.nextItem.classList.remove(\"slidein\");\n        activeItem.activeItem.classList.remove(\"slideout\");\n      }\n      activeItem.activeItem.classList.remove(\"active\");\n      nextItem.nextItem.classList.add(\"active\");\n    }, 50);\n  }\n  for (carousel of carousels) {\n    if (carousel.classList.contains(\"autoplay\")) {\n      setInterval(() => {\n        setNextItem(carousel, \"next\");\n      }, 4000);\n    }\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (carousel);\n\n//# sourceURL=webpack://@alereyes18/avina-framework/./src/carousel.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordion */ \"./src/accordion.js\");\n/* harmony import */ var _carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carousel */ \"./src/carousel.js\");\n/* harmony import */ var _ready__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ready */ \"./src/ready.js\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\n\n\n\n\n(0,_carousel__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_accordion__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nconsole.log(\"Initialized Components\");\n\n//# sourceURL=webpack://@alereyes18/avina-framework/./src/index.js?");

/***/ }),

/***/ "./src/ready.js":
/*!**********************!*\
  !*** ./src/ready.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ready\": () => (/* binding */ ready)\n/* harmony export */ });\nfunction ready(fn) {\n  console.log(\"ready\");\n  document.addEventListener(\"DOMContentLoaded\", state => init(state, fn));\n}\nfunction init(state, fn) {\n  console.log('init');\n  console.log(state, document.readyState);\n  fn();\n}\n\n//# sourceURL=webpack://@alereyes18/avina-framework/./src/ready.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://@alereyes18/avina-framework/./src/scss/main.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;