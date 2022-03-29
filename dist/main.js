/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./bundle.json":
/*!*********************!*\
  !*** ./bundle.json ***!
  \*********************/
/*! exports provided: id, author, widgets, sidebarLinks, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"id\":\"4922eceb-919b-4a5f-fa91-1da379a14720\",\"author\":\"\",\"widgets\":[{\"id\":\"lift_widget\",\"title\":\"lift_widget\",\"description\":\"A sample widget\"}],\"sidebarLinks\":[{\"id\":\"lift_widgetLink\"}]}");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".lift_widget {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px;\n  min-height: 60px;\n  flex-grow: 0;\n  color: #424242;\n}\n.lift_widget .uxp-widget-title-bar {\n  padding: 2px;\n  min-height: 20px;\n  width: 100%;\n}\n.lift_widget .car_widget-header {\n  display: inline-flex;\n  width: 100%;\n  padding: 0px 2em;\n  position: absolute;\n  top: 5%;\n}\n.lift_widget .uxp-form-group.showcase-input {\n  width: 100% !important;\n  padding: 0;\n}\n.lift_widget .uxp-form-group.showcase-input .uxp-form-select {\n  position: relative;\n}\n.lift_widget .uxp-form-group.showcase-input .uxp-form-select .uxp-select-placeholder {\n  background-color: #e1e1e161;\n  color: #424242;\n  padding: 10px 35px 10px 20px;\n}\n.lift_widget label {\n  color: #424242;\n}\n.lift_widget .lift_widget_lft {\n  display: inline-block;\n  width: 50%;\n}\n.lift_widget .lift_widget_lft .uxp-form-select {\n  min-width: 100%;\n}\n.lift_widget .lift_widget_lft .uti-sel-boxes {\n  position: absolute;\n  left: 2em;\n  top: 2em;\n}\n.lift_widget .lift_widget_rht {\n  width: 50%;\n  float: right;\n}\n.lift_widget .lift_widget_rht .uxp-form-select {\n  min-width: 100%;\n}\n.lift_widget .lift_widget_rht .block_building {\n  float: right;\n  margin-top: 0.7em;\n  font-size: 0.8em;\n  margin-right: 25px;\n}\n.lift_widget .lift_widget_rht .uti-sel-boxes {\n  float: right;\n  margin-bottom: 1em;\n}\n.lift_widget.lift_widget-details {\n  display: inline-block;\n  padding: 0;\n}\n.lift_widget.lift_widget-details .lift_details {\n  display: inline-block;\n  width: 100%;\n  height: 96%;\n}\n.lift_widget.lift_widget-details .lift_details .data-grid {\n  background-color: transparent;\n}\n.lift_widget.lift_widget-details .lift_details .data-grid .data-grid-column {\n  border: 0px solid #77777763;\n  height: 50%;\n}\n.lift_widget.lift_widget-details .lift_details .data-grid .data-grid-column:nth-child(odd) {\n  border-right: 1px solid #77777763;\n}\n.lift_widget.lift_widget-details .lift_details .data-grid .data-grid-column:first-child {\n  border-bottom: 1px solid #77777763;\n}\n.lift_widget.lift_widget-details .lift_details .data-grid .data-grid-column:first-child .item-card .item-card-image-container .profile-image-container {\n  width: 10em;\n  height: 4em;\n}\n.lift_widget.lift_widget-details .lift_details .data-grid .data-grid-column:nth-child(2) {\n  border-bottom: 1px solid #77777763;\n}\n.lift_widget.lift_widget-details .lift_details .data-grid .data-grid-column:nth-child(2) .item-card .item-card-image-container .profile-image-container {\n  width: 4em;\n  height: 4em;\n}\n.lift_widget.lift_widget-details .lift_details .data-grid .data-grid-column:nth-child(3) .item-card .item-card-image-container .profile-image-container {\n  width: 8em;\n  height: 4em;\n}\n.lift_widget.lift_widget-details .lift_details .data-grid .data-grid-column:nth-child(4) .item-card .item-card-image-container .profile-image-container {\n  width: 7.5em;\n  height: 5em;\n}\n.lift_widget.lift_widget-details .lift_details .data-grid .item-card {\n  background-color: transparent;\n  display: inline-block;\n}\n.lift_widget.lift_widget-details .lift_details .data-grid .item-card .item-card-image-container {\n  position: inherit;\n  transform: none;\n  left: 0;\n  top: 0;\n}\n.lift_widget.lift_widget-details .lift_details .data-grid .item-card .item-card-image-container .profile-image-container {\n  background-color: transparent !important;\n  width: 4em;\n  height: 4em;\n  border-radius: 0;\n}\n.lift_widget.lift_widget-details .lift_details .data-grid .item-card .content {\n  margin-left: 0;\n  padding: 5px 0;\n}\n.lift_widget.lift_widget-details .lift_details .data-grid .item-card .content .title {\n  padding: 7px 0 5px 0;\n}\n.lift_widget.lift_widget-details .lift_details .data-grid .item-card .content .title h3 {\n  margin: 0;\n  padding: 0;\n  font-weight: 500;\n  font-size: 1.2em;\n  color: #424242d1;\n}\n.lift_widget.lift_widget-details .lift_details .data-grid .item-card .content .title .sub-title {\n  color: #424242d1;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(__webpack_require__(/*! react */ "react"));
const uxp_1 = __webpack_require__(/*! ./uxp */ "./src/uxp.ts");
const components_1 = __webpack_require__(/*! uxp/components */ "uxp/components");
__webpack_require__(/*! ./styles.scss */ "./src/styles.scss");
const Lift_widgetWidget = (props) => {
    let [selected, setSelected] = React.useState("op-24");
    const GridData = [
        {
            icon: "https://static.iviva.com/images/lift_widget/lift-service.svg",
            name: "Udhaya Kumar",
            title: React.createElement("h3", null, "90%"),
            subTitle: "% of lifts in service"
        },
        {
            icon: "https://static.iviva.com/images/lift_widget/waiting-time.svg",
            name: "Udhaya Kumar",
            title: React.createElement("h3", null, "00:32"),
            subTitle: " Average waiting time"
        },
        {
            icon: "https://static.iviva.com/images/lift_widget/pop-floor.svg",
            name: "Udhaya Kumar",
            title: React.createElement("h3", null, "Floor 12"),
            subTitle: "Most popular floor"
        },
        {
            icon: "https://static.iviva.com/images/lift_widget/run-hour.svg",
            name: "Udhaya Kumar",
            title: React.createElement("h3", null, "104"),
            subTitle: "Lift run hours"
        }
    ];
    const renderGridItem = (item, key) => {
        return (React.createElement(components_1.ItemCard, { item: item, imageField: "icon", nameField: "name", titleField: "title", subTitleField: "subTitle" }));
    };
    return (React.createElement(components_1.WidgetWrapper, { className: "lift_widget lift_widget-details" },
        React.createElement(components_1.TitleBar, { title: "" }, "   "),
        React.createElement("div", { className: "lift_widget_lft" },
            React.createElement("div", { className: "uti-sel-boxes" },
                React.createElement("div", { className: "uti-sel-box" },
                    React.createElement(components_1.FormField, { inline: true, className: "showcase-input" },
                        React.createElement(components_1.Select, { selected: selected, options: [
                                { label: "01 hour", value: "op-1" },
                                { label: "02 hours", value: "op-2" },
                                { label: "03 hours", value: "op-3" },
                                { label: "04 hours", value: "op-4" },
                                { label: "05 hours", value: "op-5" },
                                { label: "06 hours", value: "op-6" },
                                { label: "07 hours", value: "op-7" },
                                { label: "08 hours", value: "op-8" },
                                { label: "09 hours", value: "op-9" },
                                { label: "10 hours", value: "op-10" },
                                { label: "11 hours", value: "op-11" },
                                { label: "12 hours", value: "op-12" },
                                { label: "13 hours", value: "op-13" },
                                { label: "14 hours", value: "op-14" },
                                { label: "15 hours", value: "op-15" },
                                { label: "16 hours", value: "op-16" },
                                { label: "17 hours", value: "op-17" },
                                { label: "18 hours", value: "op-18" },
                                { label: "19 hours", value: "op-19" },
                                { label: "20 hours", value: "op-20" },
                                { label: "21 hours", value: "op-21" },
                                { label: "22 hours", value: "op-22" },
                                { label: "23 hours", value: "op-23" },
                                { label: "24 hours", value: "op-24" }
                            ], onChange: (value) => { setSelected(value); }, placeholder: " -- select --" }))))),
        React.createElement("div", { className: "lift_widget_rht" },
            React.createElement("div", { className: "block_building" },
                React.createElement(components_1.Label, null, "LEVEL - 2, BUILDING 1"))),
        React.createElement("div", { className: "lift_details" },
            React.createElement(components_1.DataGrid, { data: GridData, renderItem: renderGridItem, columns: 2 }))));
};
/**
 * Register as a Widget
 */
uxp_1.registerWidget({
    id: "lift_widget",
    name: "Lift_widget",
    widget: Lift_widgetWidget,
    configs: {
        layout: {
        // w: 12,
        // h: 12,
        // minH: 12,
        // minW: 12
        }
    }
});
/**
 * Register as a Sidebar Link
 */
/*
registerLink({
    id: "lift_widget",
    label: "Lift_widget",
    // click: () => alert("Hello"),
    component: Lift_widgetWidget
});
*/
/**
 * Register as a UI
 */
/*
registerUI({
   id:"lift_widget",
   component: Lift_widgetWidget
});
*/ 


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/uxp.ts":
/*!********************!*\
  !*** ./src/uxp.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUI = exports.registerLink = exports.registerWidget = void 0;
const bundle_json_1 = __importDefault(__webpack_require__(/*! ../bundle.json */ "./bundle.json"));
function registerWidget(_widget) {
    let widget = Object.assign({}, _widget, { id: (bundle_json_1.default.id + '/widget/' + _widget.id).toLowerCase() });
    if (!window.registerWidget) {
        console.error('This code is not being run within the context of UXP');
        return;
    }
    window.registerWidget(widget);
}
exports.registerWidget = registerWidget;
function registerLink(_link) {
    let link = Object.assign({}, _link, { id: (bundle_json_1.default.id + '/sidebarlink/' + _link.id).toLowerCase() });
    if (!window.registerLink) {
        console.error('This is not is not being run within the UXP context');
        return;
    }
    console.log('registering link....', link.id);
    window.registerLink(link);
}
exports.registerLink = registerLink;
function registerUI(_ui) {
    let ui = Object.assign({}, _ui, { id: (bundle_json_1.default.id + '/ui/' + _ui.id).toLowerCase() });
    if (!window.registerUI) {
        console.error('This is not is not being run within the UXP context');
        return;
    }
    console.log('registering link....', ui.id);
    window.registerUI(ui);
}
exports.registerUI = registerUI;


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "uxp/components":
/*!********************************!*\
  !*** external "UXPComponents" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = UXPComponents;

/***/ })

/******/ });
//# sourceMappingURL=main.js.map