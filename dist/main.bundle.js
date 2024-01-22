"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --background-color: #eaf4ff;
    --view-container-color: #d9eaff;
    --sidebar-color: #bad7ff;
    --button-color: #223dff;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--background-color);
    margin: 0;
    width: 100vw;
    height: 100vh;
}

#landing-view-container {
    display: grid;
    grid-template-columns: 2fr 7fr;
    grid-template-rows: 1fr;
    width: min(1200px, 80vw);
    height: 70vh;
    background-color: var(--view-container-color);
    border-radius: 15px;
}

#projects-sidebar, #task-view-container {
    display: flex;
    flex-direction: column;
    padding-top: 30px;
    gap: 12px;
}

#projects-sidebar {
    background-color: var(--sidebar-color);
    padding-left: 24px;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
}

#task-view-container {
    padding-left: 64px;
}

#add-projects-container, #add-tasks-container {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-left: -12px;
}

#add-projects-container {
    gap: 6px;
}

.add-button {
    background-color: inherit;
    border: none;
}

.add-button img {
    width: 24px;
    height: auto;
    filter: invert(20%) sepia(96%) saturate(6722%) hue-rotate(239deg) brightness(102%) contrast(101%);
}

#expanded-task-container {
    position: absolute;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,2BAA2B;IAC3B,+BAA+B;IAC/B,wBAAwB;IACxB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,yCAAyC;IACzC,SAAS;IACT,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,uBAAuB;IACvB,wBAAwB;IACxB,YAAY;IACZ,6CAA6C;IAC7C,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,SAAS;AACb;;AAEA;IACI,sCAAsC;IACtC,kBAAkB;IAClB,4BAA4B;IAC5B,+BAA+B;AACnC;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,kBAAkB;AACtB;;AAEA;IACI,QAAQ;AACZ;;AAEA;IACI,yBAAyB;IACzB,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,iGAAiG;AACrG;;AAEA;IACI,kBAAkB;AACtB","sourcesContent":[":root {\n    --background-color: #eaf4ff;\n    --view-container-color: #d9eaff;\n    --sidebar-color: #bad7ff;\n    --button-color: #223dff;\n}\n\nbody {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--background-color);\n    margin: 0;\n    width: 100vw;\n    height: 100vh;\n}\n\n#landing-view-container {\n    display: grid;\n    grid-template-columns: 2fr 7fr;\n    grid-template-rows: 1fr;\n    width: min(1200px, 80vw);\n    height: 70vh;\n    background-color: var(--view-container-color);\n    border-radius: 15px;\n}\n\n#projects-sidebar, #task-view-container {\n    display: flex;\n    flex-direction: column;\n    padding-top: 30px;\n    gap: 12px;\n}\n\n#projects-sidebar {\n    background-color: var(--sidebar-color);\n    padding-left: 24px;\n    border-top-left-radius: 15px;\n    border-bottom-left-radius: 15px;\n}\n\n#task-view-container {\n    padding-left: 64px;\n}\n\n#add-projects-container, #add-tasks-container {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    margin-left: -12px;\n}\n\n#add-projects-container {\n    gap: 6px;\n}\n\n.add-button {\n    background-color: inherit;\n    border: none;\n}\n\n.add-button img {\n    width: 24px;\n    height: auto;\n    filter: invert(20%) sepia(96%) saturate(6722%) hue-rotate(239deg) brightness(102%) contrast(101%);\n}\n\n#expanded-task-container {\n    position: absolute;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/domManager.js":
/*!***************************!*\
  !*** ./src/domManager.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   domManager: () => (/* binding */ domManager)
/* harmony export */ });
/* harmony import */ var _projectRepository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectRepository */ "./src/projectRepository.js");
/* harmony import */ var _todoRepository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoRepository */ "./src/todoRepository.js");
/* harmony import */ var _img_plus_circle_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/plus-circle.svg */ "./src/img/plus-circle.svg");
/* harmony import */ var _img_trash_can_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/trash-can.svg */ "./src/img/trash-can.svg");
/* harmony import */ var _img_window_close_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/window-close.svg */ "./src/img/window-close.svg");






const domManager = (function(){
    const landingViewContainer = document.getElementById("landing-view-container");
    const projectsContainer = document.getElementById("projects-container");
    const taskContainer = document.getElementById("task-container");

    const init = function() {
        const addProjectContainer = document.getElementById("add-projects-container");
        const addProjectButton = addProjectContainer.firstChild;
        addProjectButton.addEventListener("click", addProject);
        
        let addButtons = Array.from(document.getElementsByClassName("add-button"));
        addButtons.forEach(button => {

        let buttonImage = new Image();
        buttonImage.src = AddPlus;
        buttonImage.alt = "add";
        button.appendChild(buttonImage);
    });
    
    }

    const addProject = () => {
        let projectName = alert("Project Name?");
        if (projectName != "") {
            const projectData = _projectRepository__WEBPACK_IMPORTED_MODULE_0__.projectRepository.createNewProject(projectName);
            const project = document.createElement("div");
            project.classList.add("project");
            project.dataset.projectID = projectData.id;
        }
    }

    init();
})();




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _domManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domManager.js */ "./src/domManager.js");








/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project)
/* harmony export */ });
const Project = function(object) {
    this.name = object.name;
    this.id = object.id;
}

/***/ }),

/***/ "./src/projectRepository.js":
/*!**********************************!*\
  !*** ./src/projectRepository.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   projectRepository: () => (/* binding */ projectRepository)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/project.js");


class ProjectRepository {
    #projectCounterKey = "projectCounter";
    #projectsKey = "projects";

    constructor() {
        if (!localStorage.getItem(this.#projectCounterKey)) {
            localStorage.setItem(this.#projectCounterKey, "0");
        }
    }

    //#region Create
    createNewProject(projectName) {
        let projectCounter = this.#getProjectCounter();
        
        const projects = this.getAllProjects();
        let project = new _project_js__WEBPACK_IMPORTED_MODULE_0__.Project({name: projectName, id: projectCounter});
        projects.push(project);
        let projectJSON = JSON.stringify(projects);

        localStorage.setItem(this.#projectsKey, projectJSON);

        projectCounter++;
        this.#setProjectCounter(projectCounter);

        return project;
    }
    //#endregion

    //#region Read
    getAllProjects() {
        const projectJSON = localStorage.getItem(this.#projectsKey);
        return projectJSON ? JSON.parse(projectJSON) : [];
    }

    getProjectByID(projectID) {
        const projects = this.getAllProjects();
        let projectWithID = null;
        projects.forEach(project => {
            if (project.id == projectID) {
                projectWithID = project;
                return;
            }
        });
        return projectWithID;
    }

    #getProjectCounter() {
        return localStorage.getItem(this.#projectCounterKey);
    }

    #setProjectCounter(valueString) {
        localStorage.setItem(this.#projectCounterKey, valueString);
    }
    //#endregion
    
    //#region Update
    updateProject(projectID, updatedData) {
        let project = this.getProjectByID(projectID);

        if (project) {
            let oldProjectJSON = JSON.stringify(project);

            let dataKeys = Object.keys(updatedData);
            dataKeys.forEach(key => {
                project[key] = updatedData[key];
            });
    
            let newProjectJSON = JSON.stringify(project);
            let projectsJSON = localStorage.getItem(this.#projectsKey);
            let newProjectsJSON = projectsJSON.replace(oldProjectJSON, newProjectJSON);
            localStorage.setItem(this.#projectsKey, newProjectsJSON);
    
            return project;
        }
        return null;
    }
    //#endregion

    //#region Delete
    deleteProject(projectID) {
        let projects = this.getAllProjects();
        for (let i = 0; i < projects.length; i++) {
            let storageID = projects[i].id;
            if (storageID == projectID) {
                projects.splice(i, 1);
                break;
            }
        }
        localStorage.setItem(this.#projectsKey, JSON.stringify(projects));
    }
    //#endregion
}

const projectRepository = new ProjectRepository();



/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Todo: () => (/* binding */ Todo)
/* harmony export */ });
const Todo = function(object) {
    this.name = object.name;
    this.id = object.id;
    this.projectID = object.projectID;
    this.checklistItems = [];
    
    if (object.hasOwnProperty("description")) {
        this.description = object.description;
    }

    if (object.hasOwnProperty("dueDate")) {
        this.dueDate = object.dueDate;
    }

    if (object.hasOwnProperty("priority")) {
        this.priority = object.priority;
    }

    if (object.hasOwnProperty("checkListItems")) {
        this.checklistItems = object.checklistItems;  
    }

    const addChecklistItem = function(text) {
        this.checklistItems.push(text);
    }

    const removeChecklistItem = function(index) {
        if (this.checklistItems.length - 1 >= index) {
            this.checklistItems.splice(index, 1);
        }
    }
}

/***/ }),

/***/ "./src/todoRepository.js":
/*!*******************************!*\
  !*** ./src/todoRepository.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   todoRepository: () => (/* binding */ todoRepository)
/* harmony export */ });
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");


class TodoRepository {
    #todoCounterKey = "todoCounter";
    #todosKey = "todos";

    constructor() {
        if (!localStorage.getItem(this.#todoCounterKey)) {
            localStorage.setItem(this.#todoCounterKey, "0");
        } 
    }

    //#region Create
    createNewTodo(todoName, projectID) {
        let todoCounter = this.#getTodoCounter();

        const todos = this.getAllTodos();
        let todo = new _todo_js__WEBPACK_IMPORTED_MODULE_0__.Todo({name: todoName, projectID: projectID, id: todoCounter});
        todos.push(todo);
        let todosJSON = JSON.stringify(todos);

        localStorage.setItem(this.#todosKey, todosJSON);

        todoCounter++;
        this.#setTodoCounter(todoCounter);

        return todo;
    }
    //#endregion

    //#region Read
    getAllTodos() {
        const todosJSON = localStorage.getItem(this.#todosKey);
        return todosJSON ? JSON.parse(todosJSON) : [];
    }

    getTodosByProjectID(projectID) {
        let todos = this.getAllTodos();
        return todos.filter(todo => todo.projectID == projectID);
    }

    getTodoByID(todoID) {
        let todos = this.getAllTodos();
        return todos.find(todo => todo.id == todoID);
    }

    #getTodoCounter(){
        return localStorage.getItem(this.#todoCounterKey);
    }

    #setTodoCounter(valueString) {
        localStorage.setItem(this.#todoCounterKey, valueString);
    }
    //#endregion

    //#region Update
    updateTodo(todoID, updatedData) {
        let todo = this.getTodoByID(todoID);
        if (todo) {
            let oldTodoJSON = JSON.stringify(todo);

            let dataKeys = Object.keys(updatedData);
            dataKeys.forEach(key => {
                todo[key] = updatedData[key];
            });
    
            let newTodoJSON = JSON.stringify(todo);
            let todosJSON = localStorage.getItem(this.#todosKey);
            let newTodosJSON = todosJSON.replace(oldTodoJSON, newTodoJSON);
            localStorage.setItem(this.#todosKey, newTodosJSON);
    
            return todo;
        }
        return null;
    }
    //#endregion

    //#region Destroy
    deleteTodo(todoID) {
        let todos = this.getAllTodos();
        for (let i = 0; i < todos.length; i++) {
            let storageID = todos[i].id;
            if (storageID == todoID) {
                todos.splice(i, 1);
                break;
            }
        }
        localStorage.setItem(this.#todosKey, JSON.stringify(todos));
    }

    deleteProjectTodos(projectID) {
        let todos = this.getAllTodos();
        let newTodos = todos.filter(todo => todo.projectID != projectID);
        localStorage.setItem(this.#todosKey, JSON.stringify(newTodos));
    }
    //#endregion
}

const todoRepository = new TodoRepository();




/***/ }),

/***/ "./src/img/plus-circle.svg":
/*!*********************************!*\
  !*** ./src/img/plus-circle.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "057fbbe813d06c74ac0c.svg";

/***/ }),

/***/ "./src/img/trash-can.svg":
/*!*******************************!*\
  !*** ./src/img/trash-can.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b4a7b26be64c05d0f239.svg";

/***/ }),

/***/ "./src/img/window-close.svg":
/*!**********************************!*\
  !*** ./src/img/window-close.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fabc6ea21c817cc4963e.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGtCQUFrQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUUwQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kb21NYW5hZ2VyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdFJlcG9zaXRvcnkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9kb1JlcG9zaXRvcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICAtLWJhY2tncm91bmQtY29sb3I6ICNlYWY0ZmY7XG4gICAgLS12aWV3LWNvbnRhaW5lci1jb2xvcjogI2Q5ZWFmZjtcbiAgICAtLXNpZGViYXItY29sb3I6ICNiYWQ3ZmY7XG4gICAgLS1idXR0b24tY29sb3I6ICMyMjNkZmY7XG59XG5cbmJvZHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICBtYXJnaW46IDA7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG59XG5cbiNsYW5kaW5nLXZpZXctY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDdmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgICB3aWR0aDogbWluKDEyMDBweCwgODB2dyk7XG4gICAgaGVpZ2h0OiA3MHZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZpZXctY29udGFpbmVyLWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4jcHJvamVjdHMtc2lkZWJhciwgI3Rhc2stdmlldy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICBnYXA6IDEycHg7XG59XG5cbiNwcm9qZWN0cy1zaWRlYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWNvbG9yKTtcbiAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xufVxuXG4jdGFzay12aWV3LWNvbnRhaW5lciB7XG4gICAgcGFkZGluZy1sZWZ0OiA2NHB4O1xufVxuXG4jYWRkLXByb2plY3RzLWNvbnRhaW5lciwgI2FkZC10YXNrcy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEycHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMnB4O1xufVxuXG4jYWRkLXByb2plY3RzLWNvbnRhaW5lciB7XG4gICAgZ2FwOiA2cHg7XG59XG5cbi5hZGQtYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLmFkZC1idXR0b24gaW1nIHtcbiAgICB3aWR0aDogMjRweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgZmlsdGVyOiBpbnZlcnQoMjAlKSBzZXBpYSg5NiUpIHNhdHVyYXRlKDY3MjIlKSBodWUtcm90YXRlKDIzOWRlZykgYnJpZ2h0bmVzcygxMDIlKSBjb250cmFzdCgxMDElKTtcbn1cblxuI2V4cGFuZGVkLXRhc2stY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksMkJBQTJCO0lBQzNCLCtCQUErQjtJQUMvQix3QkFBd0I7SUFDeEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIseUNBQXlDO0lBQ3pDLFNBQVM7SUFDVCxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsdUJBQXVCO0lBQ3ZCLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osNkNBQTZDO0lBQzdDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHNDQUFzQztJQUN0QyxrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztJQUNULGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFFBQVE7QUFDWjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpR0FBaUc7QUFDckc7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLWJhY2tncm91bmQtY29sb3I6ICNlYWY0ZmY7XFxuICAgIC0tdmlldy1jb250YWluZXItY29sb3I6ICNkOWVhZmY7XFxuICAgIC0tc2lkZWJhci1jb2xvcjogI2JhZDdmZjtcXG4gICAgLS1idXR0b24tY29sb3I6ICMyMjNkZmY7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4jbGFuZGluZy12aWV3LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDdmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICAgIHdpZHRoOiBtaW4oMTIwMHB4LCA4MHZ3KTtcXG4gICAgaGVpZ2h0OiA3MHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12aWV3LWNvbnRhaW5lci1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcblxcbiNwcm9qZWN0cy1zaWRlYmFyLCAjdGFzay12aWV3LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xcbiAgICBnYXA6IDEycHg7XFxufVxcblxcbiNwcm9qZWN0cy1zaWRlYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1jb2xvcik7XFxuICAgIHBhZGRpbmctbGVmdDogMjRweDtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcXG59XFxuXFxuI3Rhc2stdmlldy1jb250YWluZXIge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDY0cHg7XFxufVxcblxcbiNhZGQtcHJvamVjdHMtY29udGFpbmVyLCAjYWRkLXRhc2tzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTJweDtcXG4gICAgbWFyZ2luLWxlZnQ6IC0xMnB4O1xcbn1cXG5cXG4jYWRkLXByb2plY3RzLWNvbnRhaW5lciB7XFxuICAgIGdhcDogNnB4O1xcbn1cXG5cXG4uYWRkLWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmFkZC1idXR0b24gaW1nIHtcXG4gICAgd2lkdGg6IDI0cHg7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgZmlsdGVyOiBpbnZlcnQoMjAlKSBzZXBpYSg5NiUpIHNhdHVyYXRlKDY3MjIlKSBodWUtcm90YXRlKDIzOWRlZykgYnJpZ2h0bmVzcygxMDIlKSBjb250cmFzdCgxMDElKTtcXG59XFxuXFxuI2V4cGFuZGVkLXRhc2stY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgcHJvamVjdFJlcG9zaXRvcnkgfSBmcm9tIFwiLi9wcm9qZWN0UmVwb3NpdG9yeVwiO1xuaW1wb3J0IHsgdG9kb1JlcG9zaXRvcnkgfSBmcm9tIFwiLi90b2RvUmVwb3NpdG9yeVwiO1xuaW1wb3J0IEFkZEljb24gZnJvbSBcIi4vaW1nL3BsdXMtY2lyY2xlLnN2Z1wiO1xuaW1wb3J0IERlbGV0ZUljb24gZnJvbSBcIi4vaW1nL3RyYXNoLWNhbi5zdmdcIjtcbmltcG9ydCBDbG9zZUljb24gZnJvbSBcIi4vaW1nL3dpbmRvdy1jbG9zZS5zdmdcIjtcblxuY29uc3QgZG9tTWFuYWdlciA9IChmdW5jdGlvbigpe1xuICAgIGNvbnN0IGxhbmRpbmdWaWV3Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsYW5kaW5nLXZpZXctY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0cy1jb250YWluZXJcIik7XG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1jb250YWluZXJcIik7XG5cbiAgICBjb25zdCBpbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGFkZFByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1wcm9qZWN0cy1jb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBhZGRQcm9qZWN0Q29udGFpbmVyLmZpcnN0Q2hpbGQ7XG4gICAgICAgIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZFByb2plY3QpO1xuICAgICAgICBcbiAgICAgICAgbGV0IGFkZEJ1dHRvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhZGQtYnV0dG9uXCIpKTtcbiAgICAgICAgYWRkQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG5cbiAgICAgICAgbGV0IGJ1dHRvbkltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGJ1dHRvbkltYWdlLnNyYyA9IEFkZFBsdXM7XG4gICAgICAgIGJ1dHRvbkltYWdlLmFsdCA9IFwiYWRkXCI7XG4gICAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChidXR0b25JbWFnZSk7XG4gICAgfSk7XG4gICAgXG4gICAgfVxuXG4gICAgY29uc3QgYWRkUHJvamVjdCA9ICgpID0+IHtcbiAgICAgICAgbGV0IHByb2plY3ROYW1lID0gYWxlcnQoXCJQcm9qZWN0IE5hbWU/XCIpO1xuICAgICAgICBpZiAocHJvamVjdE5hbWUgIT0gXCJcIikge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdERhdGEgPSBwcm9qZWN0UmVwb3NpdG9yeS5jcmVhdGVOZXdQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcbiAgICAgICAgICAgIHByb2plY3QuZGF0YXNldC5wcm9qZWN0SUQgPSBwcm9qZWN0RGF0YS5pZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluaXQoKTtcbn0pKCk7XG5cbmV4cG9ydCB7IGRvbU1hbmFnZXIgfTtcbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgZG9tTWFuYWdlciBmcm9tIFwiLi9kb21NYW5hZ2VyLmpzXCI7XG5cblxuXG5cbiIsImV4cG9ydCBjb25zdCBQcm9qZWN0ID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdGhpcy5uYW1lID0gb2JqZWN0Lm5hbWU7XG4gICAgdGhpcy5pZCA9IG9iamVjdC5pZDtcbn0iLCJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xuXG5jbGFzcyBQcm9qZWN0UmVwb3NpdG9yeSB7XG4gICAgI3Byb2plY3RDb3VudGVyS2V5ID0gXCJwcm9qZWN0Q291bnRlclwiO1xuICAgICNwcm9qZWN0c0tleSA9IFwicHJvamVjdHNcIjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuI3Byb2plY3RDb3VudGVyS2V5KSkge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy4jcHJvamVjdENvdW50ZXJLZXksIFwiMFwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vI3JlZ2lvbiBDcmVhdGVcbiAgICBjcmVhdGVOZXdQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgICAgIGxldCBwcm9qZWN0Q291bnRlciA9IHRoaXMuI2dldFByb2plY3RDb3VudGVyKCk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IHRoaXMuZ2V0QWxsUHJvamVjdHMoKTtcbiAgICAgICAgbGV0IHByb2plY3QgPSBuZXcgUHJvamVjdCh7bmFtZTogcHJvamVjdE5hbWUsIGlkOiBwcm9qZWN0Q291bnRlcn0pO1xuICAgICAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgICAgICBsZXQgcHJvamVjdEpTT04gPSBKU09OLnN0cmluZ2lmeShwcm9qZWN0cyk7XG5cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy4jcHJvamVjdHNLZXksIHByb2plY3RKU09OKTtcblxuICAgICAgICBwcm9qZWN0Q291bnRlcisrO1xuICAgICAgICB0aGlzLiNzZXRQcm9qZWN0Q291bnRlcihwcm9qZWN0Q291bnRlcik7XG5cbiAgICAgICAgcmV0dXJuIHByb2plY3Q7XG4gICAgfVxuICAgIC8vI2VuZHJlZ2lvblxuXG4gICAgLy8jcmVnaW9uIFJlYWRcbiAgICBnZXRBbGxQcm9qZWN0cygpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdEpTT04gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLiNwcm9qZWN0c0tleSk7XG4gICAgICAgIHJldHVybiBwcm9qZWN0SlNPTiA/IEpTT04ucGFyc2UocHJvamVjdEpTT04pIDogW107XG4gICAgfVxuXG4gICAgZ2V0UHJvamVjdEJ5SUQocHJvamVjdElEKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gdGhpcy5nZXRBbGxQcm9qZWN0cygpO1xuICAgICAgICBsZXQgcHJvamVjdFdpdGhJRCA9IG51bGw7XG4gICAgICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgICAgICBpZiAocHJvamVjdC5pZCA9PSBwcm9qZWN0SUQpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0V2l0aElEID0gcHJvamVjdDtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcHJvamVjdFdpdGhJRDtcbiAgICB9XG5cbiAgICAjZ2V0UHJvamVjdENvdW50ZXIoKSB7XG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLiNwcm9qZWN0Q291bnRlcktleSk7XG4gICAgfVxuXG4gICAgI3NldFByb2plY3RDb3VudGVyKHZhbHVlU3RyaW5nKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuI3Byb2plY3RDb3VudGVyS2V5LCB2YWx1ZVN0cmluZyk7XG4gICAgfVxuICAgIC8vI2VuZHJlZ2lvblxuICAgIFxuICAgIC8vI3JlZ2lvbiBVcGRhdGVcbiAgICB1cGRhdGVQcm9qZWN0KHByb2plY3RJRCwgdXBkYXRlZERhdGEpIHtcbiAgICAgICAgbGV0IHByb2plY3QgPSB0aGlzLmdldFByb2plY3RCeUlEKHByb2plY3RJRCk7XG5cbiAgICAgICAgaWYgKHByb2plY3QpIHtcbiAgICAgICAgICAgIGxldCBvbGRQcm9qZWN0SlNPTiA9IEpTT04uc3RyaW5naWZ5KHByb2plY3QpO1xuXG4gICAgICAgICAgICBsZXQgZGF0YUtleXMgPSBPYmplY3Qua2V5cyh1cGRhdGVkRGF0YSk7XG4gICAgICAgICAgICBkYXRhS2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgcHJvamVjdFtrZXldID0gdXBkYXRlZERhdGFba2V5XTtcbiAgICAgICAgICAgIH0pO1xuICAgIFxuICAgICAgICAgICAgbGV0IG5ld1Byb2plY3RKU09OID0gSlNPTi5zdHJpbmdpZnkocHJvamVjdCk7XG4gICAgICAgICAgICBsZXQgcHJvamVjdHNKU09OID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy4jcHJvamVjdHNLZXkpO1xuICAgICAgICAgICAgbGV0IG5ld1Byb2plY3RzSlNPTiA9IHByb2plY3RzSlNPTi5yZXBsYWNlKG9sZFByb2plY3RKU09OLCBuZXdQcm9qZWN0SlNPTik7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLiNwcm9qZWN0c0tleSwgbmV3UHJvamVjdHNKU09OKTtcbiAgICBcbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICAvLyNlbmRyZWdpb25cblxuICAgIC8vI3JlZ2lvbiBEZWxldGVcbiAgICBkZWxldGVQcm9qZWN0KHByb2plY3RJRCkge1xuICAgICAgICBsZXQgcHJvamVjdHMgPSB0aGlzLmdldEFsbFByb2plY3RzKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBzdG9yYWdlSUQgPSBwcm9qZWN0c1tpXS5pZDtcbiAgICAgICAgICAgIGlmIChzdG9yYWdlSUQgPT0gcHJvamVjdElEKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdHMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuI3Byb2plY3RzS2V5LCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuICAgIH1cbiAgICAvLyNlbmRyZWdpb25cbn1cblxuY29uc3QgcHJvamVjdFJlcG9zaXRvcnkgPSBuZXcgUHJvamVjdFJlcG9zaXRvcnkoKTtcblxuZXhwb3J0IHsgcHJvamVjdFJlcG9zaXRvcnkgfTsiLCJleHBvcnQgY29uc3QgVG9kbyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHRoaXMubmFtZSA9IG9iamVjdC5uYW1lO1xuICAgIHRoaXMuaWQgPSBvYmplY3QuaWQ7XG4gICAgdGhpcy5wcm9qZWN0SUQgPSBvYmplY3QucHJvamVjdElEO1xuICAgIHRoaXMuY2hlY2tsaXN0SXRlbXMgPSBbXTtcbiAgICBcbiAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KFwiZGVzY3JpcHRpb25cIikpIHtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IG9iamVjdC5kZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KFwiZHVlRGF0ZVwiKSkge1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBvYmplY3QuZHVlRGF0ZTtcbiAgICB9XG5cbiAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KFwicHJpb3JpdHlcIikpIHtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IG9iamVjdC5wcmlvcml0eTtcbiAgICB9XG5cbiAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KFwiY2hlY2tMaXN0SXRlbXNcIikpIHtcbiAgICAgICAgdGhpcy5jaGVja2xpc3RJdGVtcyA9IG9iamVjdC5jaGVja2xpc3RJdGVtczsgIFxuICAgIH1cblxuICAgIGNvbnN0IGFkZENoZWNrbGlzdEl0ZW0gPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgICAgIHRoaXMuY2hlY2tsaXN0SXRlbXMucHVzaCh0ZXh0KTtcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVDaGVja2xpc3RJdGVtID0gZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tsaXN0SXRlbXMubGVuZ3RoIC0gMSA+PSBpbmRleCkge1xuICAgICAgICAgICAgdGhpcy5jaGVja2xpc3RJdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IFRvZG8gfSBmcm9tIFwiLi90b2RvLmpzXCI7XG5cbmNsYXNzIFRvZG9SZXBvc2l0b3J5IHtcbiAgICAjdG9kb0NvdW50ZXJLZXkgPSBcInRvZG9Db3VudGVyXCI7XG4gICAgI3RvZG9zS2V5ID0gXCJ0b2Rvc1wiO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy4jdG9kb0NvdW50ZXJLZXkpKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLiN0b2RvQ291bnRlcktleSwgXCIwXCIpO1xuICAgICAgICB9IFxuICAgIH1cblxuICAgIC8vI3JlZ2lvbiBDcmVhdGVcbiAgICBjcmVhdGVOZXdUb2RvKHRvZG9OYW1lLCBwcm9qZWN0SUQpIHtcbiAgICAgICAgbGV0IHRvZG9Db3VudGVyID0gdGhpcy4jZ2V0VG9kb0NvdW50ZXIoKTtcblxuICAgICAgICBjb25zdCB0b2RvcyA9IHRoaXMuZ2V0QWxsVG9kb3MoKTtcbiAgICAgICAgbGV0IHRvZG8gPSBuZXcgVG9kbyh7bmFtZTogdG9kb05hbWUsIHByb2plY3RJRDogcHJvamVjdElELCBpZDogdG9kb0NvdW50ZXJ9KTtcbiAgICAgICAgdG9kb3MucHVzaCh0b2RvKTtcbiAgICAgICAgbGV0IHRvZG9zSlNPTiA9IEpTT04uc3RyaW5naWZ5KHRvZG9zKTtcblxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLiN0b2Rvc0tleSwgdG9kb3NKU09OKTtcblxuICAgICAgICB0b2RvQ291bnRlcisrO1xuICAgICAgICB0aGlzLiNzZXRUb2RvQ291bnRlcih0b2RvQ291bnRlcik7XG5cbiAgICAgICAgcmV0dXJuIHRvZG87XG4gICAgfVxuICAgIC8vI2VuZHJlZ2lvblxuXG4gICAgLy8jcmVnaW9uIFJlYWRcbiAgICBnZXRBbGxUb2RvcygpIHtcbiAgICAgICAgY29uc3QgdG9kb3NKU09OID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy4jdG9kb3NLZXkpO1xuICAgICAgICByZXR1cm4gdG9kb3NKU09OID8gSlNPTi5wYXJzZSh0b2Rvc0pTT04pIDogW107XG4gICAgfVxuXG4gICAgZ2V0VG9kb3NCeVByb2plY3RJRChwcm9qZWN0SUQpIHtcbiAgICAgICAgbGV0IHRvZG9zID0gdGhpcy5nZXRBbGxUb2RvcygpO1xuICAgICAgICByZXR1cm4gdG9kb3MuZmlsdGVyKHRvZG8gPT4gdG9kby5wcm9qZWN0SUQgPT0gcHJvamVjdElEKTtcbiAgICB9XG5cbiAgICBnZXRUb2RvQnlJRCh0b2RvSUQpIHtcbiAgICAgICAgbGV0IHRvZG9zID0gdGhpcy5nZXRBbGxUb2RvcygpO1xuICAgICAgICByZXR1cm4gdG9kb3MuZmluZCh0b2RvID0+IHRvZG8uaWQgPT0gdG9kb0lEKTtcbiAgICB9XG5cbiAgICAjZ2V0VG9kb0NvdW50ZXIoKXtcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuI3RvZG9Db3VudGVyS2V5KTtcbiAgICB9XG5cbiAgICAjc2V0VG9kb0NvdW50ZXIodmFsdWVTdHJpbmcpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy4jdG9kb0NvdW50ZXJLZXksIHZhbHVlU3RyaW5nKTtcbiAgICB9XG4gICAgLy8jZW5kcmVnaW9uXG5cbiAgICAvLyNyZWdpb24gVXBkYXRlXG4gICAgdXBkYXRlVG9kbyh0b2RvSUQsIHVwZGF0ZWREYXRhKSB7XG4gICAgICAgIGxldCB0b2RvID0gdGhpcy5nZXRUb2RvQnlJRCh0b2RvSUQpO1xuICAgICAgICBpZiAodG9kbykge1xuICAgICAgICAgICAgbGV0IG9sZFRvZG9KU09OID0gSlNPTi5zdHJpbmdpZnkodG9kbyk7XG5cbiAgICAgICAgICAgIGxldCBkYXRhS2V5cyA9IE9iamVjdC5rZXlzKHVwZGF0ZWREYXRhKTtcbiAgICAgICAgICAgIGRhdGFLZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICB0b2RvW2tleV0gPSB1cGRhdGVkRGF0YVtrZXldO1xuICAgICAgICAgICAgfSk7XG4gICAgXG4gICAgICAgICAgICBsZXQgbmV3VG9kb0pTT04gPSBKU09OLnN0cmluZ2lmeSh0b2RvKTtcbiAgICAgICAgICAgIGxldCB0b2Rvc0pTT04gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLiN0b2Rvc0tleSk7XG4gICAgICAgICAgICBsZXQgbmV3VG9kb3NKU09OID0gdG9kb3NKU09OLnJlcGxhY2Uob2xkVG9kb0pTT04sIG5ld1RvZG9KU09OKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuI3RvZG9zS2V5LCBuZXdUb2Rvc0pTT04pO1xuICAgIFxuICAgICAgICAgICAgcmV0dXJuIHRvZG87XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIC8vI2VuZHJlZ2lvblxuXG4gICAgLy8jcmVnaW9uIERlc3Ryb3lcbiAgICBkZWxldGVUb2RvKHRvZG9JRCkge1xuICAgICAgICBsZXQgdG9kb3MgPSB0aGlzLmdldEFsbFRvZG9zKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBzdG9yYWdlSUQgPSB0b2Rvc1tpXS5pZDtcbiAgICAgICAgICAgIGlmIChzdG9yYWdlSUQgPT0gdG9kb0lEKSB7XG4gICAgICAgICAgICAgICAgdG9kb3Muc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuI3RvZG9zS2V5LCBKU09OLnN0cmluZ2lmeSh0b2RvcykpO1xuICAgIH1cblxuICAgIGRlbGV0ZVByb2plY3RUb2Rvcyhwcm9qZWN0SUQpIHtcbiAgICAgICAgbGV0IHRvZG9zID0gdGhpcy5nZXRBbGxUb2RvcygpO1xuICAgICAgICBsZXQgbmV3VG9kb3MgPSB0b2Rvcy5maWx0ZXIodG9kbyA9PiB0b2RvLnByb2plY3RJRCAhPSBwcm9qZWN0SUQpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLiN0b2Rvc0tleSwgSlNPTi5zdHJpbmdpZnkobmV3VG9kb3MpKTtcbiAgICB9XG4gICAgLy8jZW5kcmVnaW9uXG59XG5cbmNvbnN0IHRvZG9SZXBvc2l0b3J5ID0gbmV3IFRvZG9SZXBvc2l0b3J5KCk7XG5cbmV4cG9ydCB7IHRvZG9SZXBvc2l0b3J5IH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=