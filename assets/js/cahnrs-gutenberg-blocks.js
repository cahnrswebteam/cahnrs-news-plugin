/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/js/partials/block-controls/AlignItemControl.js"
/*!*******************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/AlignItemControl.js ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blockControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blockControls */ "./assets/src/js/partials/block-controls/blockControls.js");
/* harmony import */ var _block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../block-utilities/blockUtilities */ "./assets/src/js/partials/block-utilities/blockUtilities.js");




const AlignItemControl = props => {
  let {
    attributes,
    setAttributes
  } = props;
  let buttonOptions = [{
    label: 'Align Left',
    value: 'left',
    svg: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      width: "24",
      height: "24",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M4 19.8h8.9v-1.5H4v1.5zm8.9-15.6H4v1.5h8.9V4.2zm-8.9 7v1.5h16v-1.5H4z"
    }))
  }, {
    label: 'Align Center',
    value: 'center',
    svg: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      width: "24",
      height: "24",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M16.4 4.2H7.6v1.5h8.9V4.2zM4 11.2v1.5h16v-1.5H4zm3.6 8.6h8.9v-1.5H7.6v1.5z"
    }))
  }, {
    label: 'Align Right',
    value: 'right',
    svg: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      width: "24",
      height: "24",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M11.1 19.8H20v-1.5h-8.9v1.5zm0-15.6v1.5H20V4.2h-8.9zM4 12.8h16v-1.5H4v1.5z"
    }))
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_blockControls__WEBPACK_IMPORTED_MODULE_2__.SvgButtonGroupControl, {
    ...props,
    onClick: value => {
      (0,_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_3__.setBlockClassName)(attributes, setAttributes, 'wsu-align-item--', value);
    },
    isActive: value => {
      return false;
    },
    currentValue: (0,_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_3__.getBlockClassNameValue)(attributes, 'wsu-align-item--'),
    label: "Align Element",
    buttonOptions: buttonOptions
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AlignItemControl);

/***/ },

/***/ "./assets/src/js/partials/block-controls/AnchorControl.js"
/*!****************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/AnchorControl.js ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


const AnchorControl = props => {
  var _attributes$id;
  let {
    attributes,
    setAttributes
  } = props;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: "HTML anchor",
    value: (_attributes$id = attributes.id) !== null && _attributes$id !== void 0 ? _attributes$id : '',
    onChange: id => setAttributes({
      id
    }),
    help: "Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an \u201Canchor.\u201D Then, you\u2019ll be able to link directly to this section of your page."
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnchorControl);

/***/ },

/***/ "./assets/src/js/partials/block-controls/BorderControl.js"
/*!****************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/BorderControl.js ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blockControls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blockControls */ "./assets/src/js/partials/block-controls/blockControls.js");
/* harmony import */ var _block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../block-utilities/blockUtilities */ "./assets/src/js/partials/block-utilities/blockUtilities.js");



const BorderControl = props => {
  let {
    attributes,
    setAttributes,
    classKey = 'className'
  } = props;
  let buttonOptions = [{
    label: 'Border Left',
    value: 'left',
    svg: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 30 30"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
      x: "3.41",
      y: "3.18",
      width: "23.18",
      height: "23.63",
      fill: "#fff",
      stroke: "#bcbec0",
      "stroke-miterlimit": "10"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("line", {
      x1: "3.41",
      y1: "2.67",
      x2: "3.41",
      y2: "27.33",
      fill: "none",
      stroke: "#231f20",
      "stroke-miterlimit": "10",
      "stroke-width": "2"
    }))
  }, {
    label: 'Border Top',
    value: 'top',
    svg: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 30 30"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
      x: "3.41",
      y: "3.18",
      width: "23.18",
      height: "23.63",
      fill: "#fff",
      stroke: "#bcbec0",
      "stroke-miterlimit": "10"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("line", {
      x1: "2.9",
      y1: "3.52",
      x2: "27.1",
      y2: "3.52",
      fill: "none",
      stroke: "#231f20",
      "stroke-miterlimit": "10",
      "stroke-width": "2"
    }))
  }, {
    label: 'Border Bottom',
    value: 'bottom',
    svg: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 30 30"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
      x: "3.41",
      y: "3.27",
      width: "23.18",
      height: "23.63",
      fill: "#fff",
      stroke: "#bcbec0",
      "stroke-miterlimit": "10"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("line", {
      x1: "2.9",
      y1: "26.34",
      x2: "27.1",
      y2: "26.34",
      fill: "none",
      stroke: "#231f20",
      "stroke-miterlimit": "10",
      "stroke-width": "2"
    }))
  }, {
    label: 'Border Right',
    value: 'right',
    svg: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 30 30"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
      x: "3.41",
      y: "3.18",
      width: "23.18",
      height: "23.63",
      fill: "#fff",
      stroke: "#bcbec0",
      "stroke-miterlimit": "10"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("line", {
      x1: "26.09",
      y1: "2.67",
      x2: "26.09",
      y2: "27.33",
      fill: "none",
      stroke: "#231f20",
      "stroke-miterlimit": "10",
      "stroke-width": "2"
    }))
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_blockControls__WEBPACK_IMPORTED_MODULE_1__.SvgButtonGroupControl, {
    ...props,
    onClick: value => {
      (0,_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_2__.setBlockClassName)(attributes, setAttributes, 'wsu-border--add-', value, classKey);
    },
    isActive: value => {
      return false;
    },
    currentValue: (0,_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_2__.getBlockClassNameValue)(attributes, 'wsu-border--add-', '', classKey),
    label: "Add Border",
    buttonOptions: buttonOptions
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BorderControl);

/***/ },

/***/ "./assets/src/js/partials/block-controls/BreakPointControl.js"
/*!********************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/BreakPointControl.js ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../block-utilities/blockUtilities */ "./assets/src/js/partials/block-utilities/blockUtilities.js");



const BreakPointWidthControl = props => {
  let {
    label,
    value,
    setAttributes,
    attributes
  } = props;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: 'Width at ' + label,
    value: (0,_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_2__.getBlockClassNameValue)(attributes, 'wsu-break--' + value + '-'),
    onChange: size => (0,_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_2__.setBlockClassName)(attributes, setAttributes, 'wsu-break--' + value + '-', size),
    options: [{
      label: 'N/A',
      value: ''
    }, {
      label: 'Auto',
      value: 'auto'
    }, {
      label: '100%',
      value: '100'
    }, {
      label: '66.66%',
      value: '66'
    }, {
      label: '50%',
      value: '50'
    }, {
      label: '33.33%',
      value: '33'
    }, {
      label: '25%',
      value: '25'
    }]
  });
};
const BreakPointControl = props => {
  let {
    attributes,
    setAttributes
  } = props;
  let defaultBreakPoints = [{
    label: 'xxUltrawide (2400px)',
    value: 'xxultrawide'
  }, {
    label: 'xUltrawide (1900px)',
    value: 'xultrawide'
  }, {
    label: 'Ultrawide (1600px)',
    value: 'ultrawide'
  }, {
    label: 'Desktop (1260px)',
    value: 'desktop'
  }, {
    label: 'Tablet Large (992px)',
    value: 'tablet-large'
  }, {
    label: 'Tablet Medium (860px)',
    value: 'tablet-medium'
  }, {
    label: 'Tablet (768px)',
    value: 'tablet'
  }, {
    label: 'Phone (576px)',
    value: 'phone'
  }, {
    label: 'Phone Small (450px)',
    value: 'phone-small'
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, defaultBreakPoints.map(breakPoint => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BreakPointWidthControl, {
      ...breakPoint,
      ...props
    });
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BreakPointControl);

/***/ },

/***/ "./assets/src/js/partials/block-controls/ButtonControl.js"
/*!****************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/ButtonControl.js ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


const ButtonControl = ({
  attributes,
  setAttributes
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: "Button Text",
    value: attributes.buttonText ? attributes.buttonText : '',
    onChange: buttonText => setAttributes({
      buttonText
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: "Button Link",
    value: attributes.buttonLink ? attributes.buttonLink : '',
    onChange: buttonLink => setAttributes({
      buttonLink
    })
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonControl);

/***/ },

/***/ "./assets/src/js/partials/block-controls/ColorClassControl.js"
/*!********************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/ColorClassControl.js ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../block-utilities/blockUtilities */ "./assets/src/js/partials/block-utilities/blockUtilities.js");

const {
  PanelBody,
  TextControl,
  SelectControl,
  Button,
  FocalPointPicker,
  BaseControl,
  ColorPalette
} = wp.components;

const ColorClassControl = props => {
  let {
    attributes,
    setAttributes,
    colors,
    label = 'Color',
    prefix = 'wsu-color-background--',
    value = '#ffffff',
    onSetColor = false
  } = props;
  const getSelectedColor = () => {
    var _attributes$className;
    let selectedValue = '';
    let classNames = (_attributes$className = attributes.className) !== null && _attributes$className !== void 0 ? _attributes$className : '';
    let selectedColor = onSetColor ? value : (0,_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_1__.getBlockClassName)(classNames, prefix);
    if ('' !== selectedColor) {
      colors.forEach((colorObj, index) => {
        if (selectedColor === colorObj.name) {
          selectedValue = colorObj.color;
        }
      });
    }
    return selectedValue;
  };
  const getColorName = color => {
    let colorName = '';
    colors.forEach((colorObj, index) => {
      if (color === colorObj.color) {
        colorName = colorObj.name;
      }
    });
    return colorName;
  };
  const addColor = color => {
    var _attributes$className2;
    let selectedColor = getColorName(color);
    let classNames = (_attributes$className2 = attributes.className) !== null && _attributes$className2 !== void 0 ? _attributes$className2 : '';
    let updatedClasses = (0,_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_1__.addBlockClassName)(classNames, prefix, selectedColor);
    setAttributes({
      className: updatedClasses
    });
  };
  const returnColorName = color => {
    let colorName = getColorName(color);
    onSetColor(colorName);
  };
  let pickerId = 'color-picker-' + Math.floor(Math.random() * 1000000);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BaseControl, {
    id: pickerId,
    label: label
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPalette, {
    colors: colors,
    value: getSelectedColor(),
    onChange: color => {
      onSetColor ? returnColorName(color) : addColor(color);
    },
    clearable: false,
    disableCustomColors: true
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColorClassControl);

/***/ },

/***/ "./assets/src/js/partials/block-controls/ColorClassNameSelector.js"
/*!*************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/ColorClassNameSelector.js ***!
  \*************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);



/*
 @example 
 <ColorClassNameSelector
    title="Color Settings"
    colorSettings={[
        {
            label: 'Background Color',
            prefix: 'wsu-color-background--',
            colors: [
                { name: 'Gray 85', color: '#262626', className: 'gray-85' },
                { name: 'Gray 95', color: '#080808', className: 'gray-95' },
            ],
        },
        {
            label: 'Text Color',
            prefix: 'wsu-color-text--',
            colors: [			
                { name: 'Gray 0', color: '#f7f7f7', className: 'gray-0' },
                { name: 'Gray 5', color: '#f2f2f2', className: 'gray-5' },
            ],
        }
    ]}
    {...props}>
</ColorClassNameSelector>
*/

/**
 * Functions just like the Wordpress color picker (PanelColorSettings), but instead of 
 * saving a color code it adds a class to the component className field.
 * Each color setting requires a prefix e.g. wsu-color-text--
 * Each color requires a className e.g. gray-10
 * The result will be a class of 'wsu-color-text--gray-10' added to the component className
 */
const ColorClassNameSelector = props => {
  const {
    title,
    attributes,
    setAttributes,
    colorSettings
  } = props;
  function getColorSetting(prefix) {
    return lodash.find(colorSettings, cs => cs.prefix === prefix);
  }
  function getColorObjectByClassName(prefix, className) {
    if (!className) {
      return;
    }
    const colorName = className.replace(prefix, '');
    const colors = getColorSetting(prefix).colors;
    return lodash.find(colors, c => {
      return c.className === colorName;
    });
  }
  const getSelectedColorByPrefix = prefix => {
    if (!attributes.className) {
      return;
    }
    const appliedClasses = attributes.className.split(' ');
    const selectedColorClassName = lodash.find(appliedClasses, c => c.startsWith(prefix));
    return getColorObjectByClassName(prefix, selectedColorClassName)?.color;
  };
  const updateSelectedColors = (prefix, color) => {
    var _attributes$className;
    const colors = getColorSetting(prefix).colors;
    const colorObject = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.getColorObjectByColorValue)(colors, color);
    const colorClass = colorObject ? prefix + colorObject.className : '';
    const appliedClasses = (_attributes$className = attributes.className?.split(' ')) !== null && _attributes$className !== void 0 ? _attributes$className : [];
    const newClasses = lodash.filter(appliedClasses, c => !c.startsWith(prefix)).concat(colorClass);
    const newClassName = newClasses.map(function (c) {
      return c.trim();
    }).filter(c => c).join(' ');
    setAttributes({
      className: newClassName
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.PanelColorSettings, {
    title: title,
    colorSettings: colorSettings.map(cs => {
      return {
        colors: cs.colors,
        value: getSelectedColorByPrefix(cs.prefix),
        onChange: color => {
          updateSelectedColors(cs.prefix, color);
        },
        label: cs.label
      };
    }),
    disableCustomGradients: true,
    disableCustomColors: true
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColorClassNameSelector);

/***/ },

/***/ "./assets/src/js/partials/block-controls/CountControl.js"
/*!***************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/CountControl.js ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


const CountControl = ({
  attributes,
  setAttributes
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: "Count",
    value: attributes.count ? attributes.count : '0',
    onChange: count => setAttributes({
      count
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CountControl);

/***/ },

/***/ "./assets/src/js/partials/block-controls/DeveloperToolsControl.js"
/*!************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/DeveloperToolsControl.js ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


const DeveloperToolsControl = props => {
  var _attributes$developer;
  let {
    attributes,
    setAttributes
  } = props;
  console.log(attributes);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: "Developer Tools",
    checked: (_attributes$developer = attributes.developerTools) !== null && _attributes$developer !== void 0 ? _attributes$developer : '',
    onChange: developerTools => setAttributes({
      developerTools
    }),
    help: "Show developer tools panel."
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DeveloperToolsControl);

/***/ },

/***/ "./assets/src/js/partials/block-controls/FeedPostsControl.js"
/*!*******************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/FeedPostsControl.js ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3__);




const FeedPostsControl = props => {
  let {
    attributes,
    setAttributes,
    setPostType,
    setTaxonomy,
    setTerms,
    setCount,
    setOffset,
    setUseFeed
  } = props;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: "Use Feed",
    checked: attributes.useFeed ? attributes.useFeed : false,
    onChange: value => setUseFeed(value)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: "Post Type",
    value: attributes.postType ? attributes.postType : '',
    options: [{
      label: 'Post',
      value: 'page'
    }, {
      label: 'Page',
      value: 'page'
    }, {
      label: 'Any',
      value: 'any'
    }],
    onChange: value => setPostType(value)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: "Taxonomy",
    value: attributes.taxonomy ? attributes.taxonomy : '',
    options: [{
      label: 'Category',
      value: 'category'
    }, {
      label: 'Tags',
      value: 'post_tag'
    }],
    onChange: value => setTaxonomy(value)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: "Term IDs",
    value: attributes.terms ? attributes.terms : '',
    onChange: value => setTerms(value)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: "Count",
    value: attributes.count ? attributes.count : '',
    onChange: value => setCount(value)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: "Offset",
    value: attributes.offset ? attributes.offset : '',
    onChange: value => setOffset(value)
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeedPostsControl);

/***/ },

/***/ "./assets/src/js/partials/block-controls/FontSizeControl.js"
/*!******************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/FontSizeControl.js ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../block-utilities/blockUtilities */ "./assets/src/js/partials/block-utilities/blockUtilities.js");
/* harmony import */ var _blockControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blockControls */ "./assets/src/js/partials/block-controls/blockControls.js");




const wsuFontSizes = [{
  label: 'Not Set',
  value: ''
}, {
  label: 'xxSmall',
  value: 'xxsmall'
}, {
  label: 'xSmall',
  value: 'xsmall'
}, {
  label: 'Small',
  value: 'small'
}, {
  label: 'Medium',
  value: 'medium'
}, {
  label: 'xMedium',
  value: 'xmedium'
}, {
  label: 'xxMedium',
  value: 'xxmedium'
}, {
  label: 'Large',
  value: 'large'
}, {
  label: 'xLarge',
  value: 'xlarge'
}, {
  label: 'xxLarge',
  value: 'xxlarge'
}, {
  label: 'Hero',
  value: 'hero'
}];
const FontSizeControl = props => {
  var _attributes$prefix, _attributes$label;
  let {
    attributes,
    setAttributes,
    sizes,
    elementClass = 'className'
  } = props;
  let prefix = (_attributes$prefix = attributes.prefix) !== null && _attributes$prefix !== void 0 ? _attributes$prefix : 'wsu-font-size--';
  let label = (_attributes$label = attributes.label) !== null && _attributes$label !== void 0 ? _attributes$label : 'Font Size';
  sizes = sizes !== null && sizes !== void 0 ? sizes : wsuFontSizes;
  // let blockClassNames = attributes.className ?? '';
  // let classNames = attributes.elementClass ?? blockClassNames;

  console.log(attributes);

  //let value = getBlockClassNameOption( classNames, prefix );
  let value = (0,_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_2__.getBlockClassNameValue)(attributes, prefix, '', elementClass);
  console.log(value);
  const setFontSize = size => {
    if ('onChange' in attributes) {
      attributes.onChange(size);
    } else {
      //setBlockClassName( attributes, setAttributes, prefix, size );
      (0,_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_2__.setBlockClassName)(attributes, setAttributes, prefix, size, elementClass);
    }
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: label,
    value: value,
    options: sizes,
    onChange: fontSize => setFontSize(fontSize)
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FontSizeControl);

/***/ },

/***/ "./assets/src/js/partials/block-controls/FormatSelector.js"
/*!*****************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/FormatSelector.js ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const OptionItem = (option, onSelect) => {
  console.log(option);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    className: "wsu-gutenberg-format-selector__option",
    onClick: event => {
      onSelect(option.slug);
    }
  }, option.icon, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "wsu-gutenberg-format-selector__option__label"
  }, option.label));
};
const FormatSelector = ({
  options,
  onSelect,
  title
}) => {
  if (options) {
    console.log(options);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wsu-gutenberg-format-selector"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wsu-gutenberg-format-selector__title"
    }, title), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
      className: "wsu-gutenberg-format-selector__options"
    }, options.map(option => OptionItem(option, onSelect))));
  } else {
    return '';
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormatSelector);

/***/ },

/***/ "./assets/src/js/partials/block-controls/HeadingControl.js"
/*!*****************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/HeadingControl.js ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blockControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blockControls */ "./assets/src/js/partials/block-controls/blockControls.js");



const HeadingControl = props => {
  let {
    attributes,
    setAttributes
  } = props;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_blockControls__WEBPACK_IMPORTED_MODULE_2__.HeadingTagControl, {
    ...props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: "Heading Text",
    value: attributes.headingText ? attributes.headingText : '',
    onChange: headingText => setAttributes({
      headingText
    })
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeadingControl);

/***/ },

/***/ "./assets/src/js/partials/block-controls/HostControl.js"
/*!**************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/HostControl.js ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


const HostControl = ({
  attributes,
  setAttributes
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: "Host",
    value: attributes.host ? attributes.host : '',
    onChange: host => setAttributes({
      host
    }),
    placeholder: "https://...."
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HostControl);

/***/ },

/***/ "./assets/src/js/partials/block-controls/MaxWidthControl.js"
/*!******************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/MaxWidthControl.js ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../block-utilities/blockUtilities */ "./assets/src/js/partials/block-utilities/blockUtilities.js");



const MaxWidthControl = props => {
  let {
    attributes,
    setAttributes
  } = props;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: "Max Width",
    value: (0,_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_2__.getBlockClassNameValue)(attributes, 'wsu-max-width--'),
    options: [{
      label: 'None',
      value: ''
    }, {
      label: 'Hero (1200px)',
      value: 'hero'
    }, {
      label: 'xxLarge (1000px)',
      value: 'xxlarge'
    }, {
      label: 'xLarge (900px)',
      value: 'xlarge'
    }, {
      label: 'Large (800px)',
      value: 'large'
    }, {
      label: 'xxMedium (693px)',
      value: 'xxmedium'
    }, {
      label: 'xMedium (600px)',
      value: 'xmedium'
    }, {
      label: 'Medium (506px)',
      value: 'medium'
    }, {
      label: 'Small (400px)',
      value: 'small'
    }, {
      label: 'xSmall (318px)',
      value: 'xsmall'
    }, {
      label: 'xxSmall (225px)',
      value: 'xxsmall'
    }, {
      label: 'sxxSmall (150px)',
      value: 'sxxsmall'
    }],
    onChange: width => (0,_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_2__.setBlockClassName)(attributes, setAttributes, 'wsu-max-width--', width)
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MaxWidthControl);

/***/ },

/***/ "./assets/src/js/partials/block-controls/OffsetControl.js"
/*!****************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/OffsetControl.js ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


const OffsetControl = ({
  attributes,
  setAttributes
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: "Offset",
    value: attributes.offset ? attributes.offset : '0',
    onChange: offset => setAttributes({
      offset
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OffsetControl);

/***/ },

/***/ "./assets/src/js/partials/block-controls/PerRowControl.js"
/*!****************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/PerRowControl.js ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


const PerRow = ({
  attributes,
  onChange
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: "Cards Per Row",
    value: attributes.perRow ? attributes.perRow : '',
    onChange: value => onChange(value)
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PerRow);

/***/ },

/***/ "./assets/src/js/partials/block-controls/PostTypeSelectControl.js"
/*!************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/PostTypeSelectControl.js ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


const PostTypeSelectControl = props => {
  console.log(props);
  let {
    attributes,
    setAttributes
  } = props;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: "Post Type",
    value: attributes.postType ? attributes.postType : 'post',
    options: [{
      label: 'Post',
      value: 'post'
    }, {
      label: 'Page',
      value: 'page'
    }, {
      label: 'Any',
      value: 'any'
    }],
    onChange: postType => setAttributes({
      postType
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostTypeSelectControl);

/***/ },

/***/ "./assets/src/js/partials/block-controls/RequireFirstImageControl.js"
/*!***************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/RequireFirstImageControl.js ***!
  \***************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


const RequireFirstImageControl = ({
  attributes,
  setAttributes
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: "Require First Image",
    checked: attributes.requireFirstImage ? attributes.requireFirstImage : false,
    onChange: requireFirstImage => setAttributes({
      requireFirstImage
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RequireFirstImageControl);

/***/ },

/***/ "./assets/src/js/partials/block-controls/RequireImageControl.js"
/*!**********************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/RequireImageControl.js ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


const RequireImageControl = ({
  attributes,
  setAttributes
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: "Require Image",
    checked: attributes.requireImage ? attributes.requireImage : false,
    onChange: requireImage => setAttributes({
      requireImage
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RequireImageControl);

/***/ },

/***/ "./assets/src/js/partials/block-controls/TaxonomyTermSelectControl.js"
/*!****************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/TaxonomyTermSelectControl.js ***!
  \****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


const TaxonomyTermSelectControl = ({
  attributes,
  setAttributes
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: "Term IDs",
    value: attributes.terms ? attributes.terms : '',
    onChange: terms => setAttributes({
      terms
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TaxonomyTermSelectControl);

/***/ },

/***/ "./assets/src/js/partials/block-controls/TaxonomyTypeSelectControl.js"
/*!****************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/TaxonomyTypeSelectControl.js ***!
  \****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


const TaxonomyTypeSelectControl = ({
  attributes,
  setAttributes
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: "Filter By",
    value: attributes.taxonomy ? attributes.taxonomy : '',
    options: [{
      label: 'Category',
      value: 'category'
    }, {
      label: 'Tags',
      value: 'post_tag'
    }],
    onChange: taxonomy => setAttributes({
      taxonomy
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TaxonomyTypeSelectControl);

/***/ },

/***/ "./assets/src/js/partials/block-controls/TitleTagControl.js"
/*!******************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/TitleTagControl.js ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


const TitleTagControl = ({
  attributes,
  setAttributes
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: "Title Tag",
    value: attributes.titleTag ? attributes.titleTag : 'h2',
    options: [{
      label: 'H2',
      value: 'h2'
    }, {
      label: 'H3',
      value: 'h3'
    }, {
      label: 'H4',
      value: 'h4'
    }, {
      label: 'H5',
      value: 'h5'
    }, {
      label: 'H6',
      value: 'h6'
    }, {
      label: 'div',
      value: 'div'
    }],
    onChange: titleTag => setAttributes({
      titleTag
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TitleTagControl);

/***/ },

/***/ "./assets/src/js/partials/block-controls/blockControls.js"
/*!****************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/blockControls.js ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlignItemControl: () => (/* reexport safe */ _AlignItemControl__WEBPACK_IMPORTED_MODULE_30__["default"]),
/* harmony export */   AnchorControl: () => (/* reexport safe */ _AnchorControl__WEBPACK_IMPORTED_MODULE_27__["default"]),
/* harmony export */   BorderControl: () => (/* reexport safe */ _BorderControl__WEBPACK_IMPORTED_MODULE_32__["default"]),
/* harmony export */   BreakPointControl: () => (/* reexport safe */ _BreakPointControl__WEBPACK_IMPORTED_MODULE_28__["default"]),
/* harmony export */   ButtonControl: () => (/* reexport safe */ _ButtonControl__WEBPACK_IMPORTED_MODULE_13__["default"]),
/* harmony export */   ColorClassControl: () => (/* reexport safe */ _ColorClassControl__WEBPACK_IMPORTED_MODULE_21__["default"]),
/* harmony export */   ColorClassNameSelector: () => (/* reexport safe */ _ColorClassNameSelector__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   CountControl: () => (/* reexport safe */ _CountControl__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   DeveloperToolsControl: () => (/* reexport safe */ _DeveloperToolsControl__WEBPACK_IMPORTED_MODULE_33__["default"]),
/* harmony export */   DisplayFieldControl: () => (/* reexport safe */ _display_fields_control_DisplayFieldsControl__WEBPACK_IMPORTED_MODULE_25__["default"]),
/* harmony export */   FeedPostsControl: () => (/* reexport safe */ _FeedPostsControl__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   FontIconPickerControl: () => (/* reexport safe */ _font_icon_picker_control_FontIconPickerControl__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   FontSizeControl: () => (/* reexport safe */ _FontSizeControl__WEBPACK_IMPORTED_MODULE_17__["default"]),
/* harmony export */   FormatSelector: () => (/* reexport safe */ _FormatSelector__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   HeadingControl: () => (/* reexport safe */ _HeadingControl__WEBPACK_IMPORTED_MODULE_14__["default"]),
/* harmony export */   HeadingTagControl: () => (/* reexport safe */ _heading_tag_control_js_HeadingTagControl__WEBPACK_IMPORTED_MODULE_15__["default"]),
/* harmony export */   HostControl: () => (/* reexport safe */ _HostControl__WEBPACK_IMPORTED_MODULE_12__["default"]),
/* harmony export */   ImageFrameControl: () => (/* reexport safe */ _image_frame_control_ImageFrameControl__WEBPACK_IMPORTED_MODULE_24__["default"]),
/* harmony export */   MaxWidthControl: () => (/* reexport safe */ _MaxWidthControl__WEBPACK_IMPORTED_MODULE_31__["default"]),
/* harmony export */   MultipleImagePicker: () => (/* reexport safe */ _multiple_image_picker_MultipleImagePicker__WEBPACK_IMPORTED_MODULE_26__["default"]),
/* harmony export */   OffsetControl: () => (/* reexport safe */ _OffsetControl__WEBPACK_IMPORTED_MODULE_11__["default"]),
/* harmony export */   PerRow: () => (/* reexport safe */ _PerRowControl__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   PostPicker: () => (/* reexport safe */ _post_picker_PostPicker__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   PostTypeSelectControl: () => (/* reexport safe */ _PostTypeSelectControl__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   RequireFirstImageControl: () => (/* reexport safe */ _RequireFirstImageControl__WEBPACK_IMPORTED_MODULE_20__["default"]),
/* harmony export */   RequireImageControl: () => (/* reexport safe */ _RequireImageControl__WEBPACK_IMPORTED_MODULE_19__["default"]),
/* harmony export */   RequiredAlertControl: () => (/* reexport safe */ _required_alert_control_RequiredAlertControl__WEBPACK_IMPORTED_MODULE_22__["default"]),
/* harmony export */   ResetControl: () => (/* reexport safe */ _reset_control_ResetControl__WEBPACK_IMPORTED_MODULE_18__["default"]),
/* harmony export */   SlideSelector: () => (/* reexport safe */ _slide_selector_slideSelector__WEBPACK_IMPORTED_MODULE_34__["default"]),
/* harmony export */   SpacingClassNameSelector: () => (/* reexport safe */ _spacing_class_name_selector_spacing_class_name_selector__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   SvgButtonGroupControl: () => (/* reexport safe */ _svg_button_group_control_SvgButtonGroupControl__WEBPACK_IMPORTED_MODULE_29__["default"]),
/* harmony export */   TaxonomyTermSelectControl: () => (/* reexport safe */ _TaxonomyTermSelectControl__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   TaxonomyTypeSelectControl: () => (/* reexport safe */ _TaxonomyTypeSelectControl__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   TermSelectorControl: () => (/* reexport safe */ _term_selector_control_TermSelectorControl__WEBPACK_IMPORTED_MODULE_23__["default"]),
/* harmony export */   TitleTagControl: () => (/* reexport safe */ _TitleTagControl__WEBPACK_IMPORTED_MODULE_16__["default"])
/* harmony export */ });
/* harmony import */ var _FormatSelector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormatSelector */ "./assets/src/js/partials/block-controls/FormatSelector.js");
/* harmony import */ var _post_picker_PostPicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post-picker/PostPicker */ "./assets/src/js/partials/block-controls/post-picker/PostPicker.js");
/* harmony import */ var _FeedPostsControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FeedPostsControl */ "./assets/src/js/partials/block-controls/FeedPostsControl.js");
/* harmony import */ var _PerRowControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PerRowControl */ "./assets/src/js/partials/block-controls/PerRowControl.js");
/* harmony import */ var _ColorClassNameSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ColorClassNameSelector */ "./assets/src/js/partials/block-controls/ColorClassNameSelector.js");
/* harmony import */ var _spacing_class_name_selector_spacing_class_name_selector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./spacing-class-name-selector/spacing-class-name-selector */ "./assets/src/js/partials/block-controls/spacing-class-name-selector/spacing-class-name-selector.js");
/* harmony import */ var _font_icon_picker_control_FontIconPickerControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./font-icon-picker-control/FontIconPickerControl */ "./assets/src/js/partials/block-controls/font-icon-picker-control/FontIconPickerControl.js");
/* harmony import */ var _TaxonomyTypeSelectControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TaxonomyTypeSelectControl */ "./assets/src/js/partials/block-controls/TaxonomyTypeSelectControl.js");
/* harmony import */ var _PostTypeSelectControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PostTypeSelectControl */ "./assets/src/js/partials/block-controls/PostTypeSelectControl.js");
/* harmony import */ var _TaxonomyTermSelectControl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TaxonomyTermSelectControl */ "./assets/src/js/partials/block-controls/TaxonomyTermSelectControl.js");
/* harmony import */ var _CountControl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CountControl */ "./assets/src/js/partials/block-controls/CountControl.js");
/* harmony import */ var _OffsetControl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./OffsetControl */ "./assets/src/js/partials/block-controls/OffsetControl.js");
/* harmony import */ var _HostControl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./HostControl */ "./assets/src/js/partials/block-controls/HostControl.js");
/* harmony import */ var _ButtonControl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ButtonControl */ "./assets/src/js/partials/block-controls/ButtonControl.js");
/* harmony import */ var _HeadingControl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./HeadingControl */ "./assets/src/js/partials/block-controls/HeadingControl.js");
/* harmony import */ var _heading_tag_control_js_HeadingTagControl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./heading-tag-control.js/HeadingTagControl */ "./assets/src/js/partials/block-controls/heading-tag-control.js/HeadingTagControl.js");
/* harmony import */ var _TitleTagControl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./TitleTagControl */ "./assets/src/js/partials/block-controls/TitleTagControl.js");
/* harmony import */ var _FontSizeControl__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./FontSizeControl */ "./assets/src/js/partials/block-controls/FontSizeControl.js");
/* harmony import */ var _reset_control_ResetControl__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./reset-control/ResetControl */ "./assets/src/js/partials/block-controls/reset-control/ResetControl.js");
/* harmony import */ var _RequireImageControl__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./RequireImageControl */ "./assets/src/js/partials/block-controls/RequireImageControl.js");
/* harmony import */ var _RequireFirstImageControl__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./RequireFirstImageControl */ "./assets/src/js/partials/block-controls/RequireFirstImageControl.js");
/* harmony import */ var _ColorClassControl__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ColorClassControl */ "./assets/src/js/partials/block-controls/ColorClassControl.js");
/* harmony import */ var _required_alert_control_RequiredAlertControl__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./required-alert-control/RequiredAlertControl */ "./assets/src/js/partials/block-controls/required-alert-control/RequiredAlertControl.js");
/* harmony import */ var _term_selector_control_TermSelectorControl__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./term-selector-control/TermSelectorControl */ "./assets/src/js/partials/block-controls/term-selector-control/TermSelectorControl.js");
/* harmony import */ var _image_frame_control_ImageFrameControl__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./image-frame-control/ImageFrameControl */ "./assets/src/js/partials/block-controls/image-frame-control/ImageFrameControl.js");
/* harmony import */ var _display_fields_control_DisplayFieldsControl__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./display-fields-control/DisplayFieldsControl */ "./assets/src/js/partials/block-controls/display-fields-control/DisplayFieldsControl.js");
/* harmony import */ var _multiple_image_picker_MultipleImagePicker__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./multiple-image-picker/MultipleImagePicker */ "./assets/src/js/partials/block-controls/multiple-image-picker/MultipleImagePicker.js");
/* harmony import */ var _AnchorControl__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./AnchorControl */ "./assets/src/js/partials/block-controls/AnchorControl.js");
/* harmony import */ var _BreakPointControl__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./BreakPointControl */ "./assets/src/js/partials/block-controls/BreakPointControl.js");
/* harmony import */ var _svg_button_group_control_SvgButtonGroupControl__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./svg-button-group-control/SvgButtonGroupControl */ "./assets/src/js/partials/block-controls/svg-button-group-control/SvgButtonGroupControl.js");
/* harmony import */ var _AlignItemControl__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./AlignItemControl */ "./assets/src/js/partials/block-controls/AlignItemControl.js");
/* harmony import */ var _MaxWidthControl__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./MaxWidthControl */ "./assets/src/js/partials/block-controls/MaxWidthControl.js");
/* harmony import */ var _BorderControl__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./BorderControl */ "./assets/src/js/partials/block-controls/BorderControl.js");
/* harmony import */ var _DeveloperToolsControl__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./DeveloperToolsControl */ "./assets/src/js/partials/block-controls/DeveloperToolsControl.js");
/* harmony import */ var _slide_selector_slideSelector__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./slide-selector/slideSelector */ "./assets/src/js/partials/block-controls/slide-selector/slideSelector.js");




































/***/ },

/***/ "./assets/src/js/partials/block-controls/display-fields-control/DisplayFieldsControl.js"
/*!**********************************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/display-fields-control/DisplayFieldsControl.js ***!
  \**********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const {
  PanelBody,
  TextControl,
  SelectControl,
  Button,
  FocalPointPicker,
  BaseControl,
  IconButton,
  ToggleControl
} = wp.components;
const DisplayFieldControl = props => {
  let {
    attributes,
    setAttributes,
    fieldOptions = []
  } = props;
  let {
    displayFields = []
  } = attributes;
  const DisplayField = ({
    field
  }) => {
    let {
      label = '',
      value = ''
    } = field;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: label,
      checked: displayFields.includes(value),
      onChange: value => updateDisplayFieldArray(field, value)
    });
  };
  const updateDisplayFieldArray = (field, value) => {
    console.log(value);
    let fieldValues = displayFields.split(',');
    if (value) {
      fieldValues.push(field.value);
    } else {
      let index = fieldValues.indexOf(field.value);
      if (index > -1) {
        fieldValues.splice(index, 1); // 2nd parameter means remove one item only
      }
    }
    console.log(fieldValues);
    setAttributes({
      displayFields: fieldValues.join(',')
    });
  };
  return fieldOptions.map(field => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DisplayField, {
    field: field
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DisplayFieldControl);

/***/ },

/***/ "./assets/src/js/partials/block-controls/feed-controls/FeedCountControl.js"
/*!*********************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/feed-controls/FeedCountControl.js ***!
  \*********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


const FeedCountControl = ({
  attributes,
  setAttributes
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: "Count",
    value: attributes.count,
    onChange: count => setAttributes({
      count
    }),
    help: "Number of results to return"
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeedCountControl);

/***/ },

/***/ "./assets/src/js/partials/block-controls/feed-controls/FeedHostControl.js"
/*!********************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/feed-controls/FeedHostControl.js ***!
  \********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);




let abortController = null;
const FeedHostControl = ({
  attributes,
  setAttributes
}) => {
  const [value, setValue] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(attributes.host);
  const [isValid, setIsValid] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const instanceId = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.useInstanceId)(FeedHostControl);
  const id = `inspector-text-control-${instanceId}`;
  function isValidUrl(url) {
    try {
      new URL(url);
    } catch (e) {
      return false;
    }
    return true;
  }
  function checkWpApi(url) {
    // cancel existing requests and set up new abort controller
    abortController?.abort();
    abortController = typeof AbortController === "undefined" ? undefined : new AbortController();
    return fetch(url + `/wp-json/wp/v2/statuses`, {
      method: "GET",
      signal: abortController?.signal
    });
  }
  function updateValidity(url) {
    if (isValidUrl(url)) {
      checkWpApi(url).then(response => {
        if (response.ok) {
          setIsValid(true);
          setAttributes({
            host: url
          });
        } else {
          setIsValid(false);
        }
      }).catch(error => {
        setIsValid(false);
      });
    } else {
      setIsValid(false);
    }
  }
  async function handleHostChange(url) {
    setValue(url);

    // reset if empty
    if (url === "") {
      setIsValid(false);
      setAttributes({
        host: ""
      });
      return;
    }

    // validate if url is a valid WP site
    updateValidity(url);
  }
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    updateValidity(attributes.host);
  }, []);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
    label: "Host (optional)",
    id: id,
    help: "URL for the site to get results from (i.e. https://news.wsu.edu)."
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wsu-gutenberg-input-with-icon"
  }, value && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    class: `dashicon wsu-gutenberg-input-with-icon__icon ${isValid ? "dashicons dashicons-yes wsu-gutenberg-input-with-icon__icon--success" : "dashicons dashicons-no-alt wsu-gutenberg-input-with-icon__icon--error"}`
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    className: "components-text-control__input",
    type: "text",
    id: id,
    value: value,
    onChange: e => handleHostChange(e.target.value),
    "aria-describedby": id + "__help"
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeedHostControl);

/***/ },

/***/ "./assets/src/js/partials/block-controls/feed-controls/FeedOffsetControl.js"
/*!**********************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/feed-controls/FeedOffsetControl.js ***!
  \**********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


const FeedOffsetControl = ({
  attributes,
  setAttributes
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: "Offset",
    value: attributes.offset,
    onChange: offset => setAttributes({
      offset
    }),
    help: "Offset skips a given number of items before starting results."
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeedOffsetControl);

/***/ },

/***/ "./assets/src/js/partials/block-controls/feed-controls/FeedPanel.js"
/*!**************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/feed-controls/FeedPanel.js ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


const FeedPanel = props => {
  let {
    isOpen = false
  } = props;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: "Feed Options",
    initialOpen: isOpen
  }, props.children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeedPanel);

/***/ },

/***/ "./assets/src/js/partials/block-controls/feed-controls/FeedPanelAdvanced.js"
/*!**********************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/feed-controls/FeedPanelAdvanced.js ***!
  \**********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


const FeedPanelAdvanced = props => {
  let {
    isOpen = false
  } = props;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: "Advanced Feed Options",
    initialOpen: isOpen
  }, props.children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeedPanelAdvanced);

/***/ },

/***/ "./assets/src/js/partials/block-controls/feed-controls/FeedPostTypeControl.js"
/*!************************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/feed-controls/FeedPostTypeControl.js ***!
  \************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);



const defaultOptions = [{
  label: "Any",
  value: "any"
}];
const FeedPostTypeControl = props => {
  const [options, setOptions] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultOptions);
  const defaultIgnorePostTypes = ["attachment", "tribe_organizer", "wp_block", "theme_part", "tribe_venue", "customize_changeset", "curated_news", "news_feed", "tribe_events"];
  let {
    ignorePostTypes = defaultIgnorePostTypes
  } = props;
  function shouldListPostType(postType) {
    if (ignorePostTypes && ignorePostTypes.includes(postType)) return false;
    return true;
  }
  function optionSorter(a, b) {
    const aLabel = a.label.toUpperCase();
    const bLabel = b.label.toUpperCase();
    if (aLabel < bLabel) {
      return -1;
    }
    if (aLabel > bLabel) {
      return 1;
    }
    return 0;
  }
  async function fetchOptions() {
    const response = await fetch(props.host + "/wp-json/wp/v2/types", {
      method: "GET"
    });
    if (response.ok) {
      const postTypes = await response.json();
      if (postTypes) {
        let fetchedOptions = [];
        for (const key in postTypes) {
          if (postTypes.hasOwnProperty(key)) {
            const postType = postTypes[key];
            if (shouldListPostType(postType["slug"])) {
              fetchedOptions.push({
                label: postType["name"],
                value: postType["slug"]
              });
            }
          }
        }
        fetchedOptions.sort(optionSorter);
        const newOptions = defaultOptions.concat(fetchedOptions);
        setOptions(newOptions);
      }
    }
  }
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    fetchOptions();
  }, [props.host]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: props.label || "Post Type",
    help: props.help,
    value: props.value,
    options: options,
    onChange: postType => props.onChange(postType)
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeedPostTypeControl);

/***/ },

/***/ "./assets/src/js/partials/block-controls/feed-controls/FeedTaxonomyControl.js"
/*!************************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/feed-controls/FeedTaxonomyControl.js ***!
  \************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);



const defaultOptions = [];
const FeedTaxonomyControl = props => {
  const [options, setOptions] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultOptions);
  function shouldListTaxonomy(taxonomy) {
    if (!props.postType || props.postType === "any") return true;
    const supportedTypes = taxonomy["types"];
    return supportedTypes.includes(props.postType);
  }
  function optionSorter(a, b) {
    const aLabel = a.label.toUpperCase();
    const bLabel = b.label.toUpperCase();
    if (aLabel < bLabel) {
      return -1;
    }
    if (aLabel > bLabel) {
      return 1;
    }
    return 0;
  }
  async function fetchOptions() {
    const response = await fetch(props.host + "/wp-json/wp/v2/taxonomies", {
      method: "GET"
    });
    if (response.ok) {
      const taxonomies = await response.json();
      if (taxonomies) {
        let fetchedOptions = [];
        for (const key in taxonomies) {
          if (taxonomies.hasOwnProperty(key)) {
            const taxonomy = taxonomies[key];
            if (shouldListTaxonomy(taxonomy)) {
              fetchedOptions.push({
                label: taxonomy["name"],
                value: taxonomy["slug"]
              });
            }
          }
        }
        fetchedOptions.sort(optionSorter);
        const newOptions = defaultOptions.concat(fetchedOptions);
        setOptions(newOptions);
      }
    }
  }
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    fetchOptions();
  }, [props.host, props.postType]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: props.label || "Taxonomy",
    help: props.help,
    value: props.value,
    options: options.length ? options : [{
      label: "",
      value: ""
    }],
    onChange: taxonomy => props.onChange(taxonomy)
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeedTaxonomyControl);

/***/ },

/***/ "./assets/src/js/partials/block-controls/feed-controls/FeedTermControl.js"
/*!********************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/feed-controls/FeedTermControl.js ***!
  \********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blockControls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blockControls */ "./assets/src/js/partials/block-controls/blockControls.js");


const FeedTermControl = props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_blockControls__WEBPACK_IMPORTED_MODULE_1__.TermSelectorControl, {
    label: props.label || "Terms",
    help: props.help,
    host: props.host,
    taxonomy: props.taxonomy,
    value: props.value,
    onChange: newval => props.onChange(newval)
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeedTermControl);

/***/ },

/***/ "./assets/src/js/partials/block-controls/feed-controls/FeedUseAndLogicControl.js"
/*!***************************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/feed-controls/FeedUseAndLogicControl.js ***!
  \***************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


const FeedUseAndLogicControl = ({
  attributes,
  setAttributes
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: "Use AND logic for terms",
    checked: attributes.useAndLogic,
    onChange: useAndLogic => {
      setAttributes({
        useAndLogic
      });
    },
    help: "AND Logic limits results to only those that have ALL terms."
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeedUseAndLogicControl);

/***/ },

/***/ "./assets/src/js/partials/block-controls/feed-controls/feed-controls.js"
/*!******************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/feed-controls/feed-controls.js ***!
  \******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeedCountControl: () => (/* reexport safe */ _FeedCountControl__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   FeedHostControl: () => (/* reexport safe */ _FeedHostControl__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   FeedOffsetControl: () => (/* reexport safe */ _FeedOffsetControl__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   FeedPanel: () => (/* reexport safe */ _FeedPanel__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   FeedPanelAdvanced: () => (/* reexport safe */ _FeedPanelAdvanced__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   FeedPostTypeControl: () => (/* reexport safe */ _FeedPostTypeControl__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   FeedTaxonomyControl: () => (/* reexport safe */ _FeedTaxonomyControl__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   FeedTermControl: () => (/* reexport safe */ _FeedTermControl__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   FeedUseAndLogicControl: () => (/* reexport safe */ _FeedUseAndLogicControl__WEBPACK_IMPORTED_MODULE_5__["default"])
/* harmony export */ });
/* harmony import */ var _FeedPostTypeControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FeedPostTypeControl */ "./assets/src/js/partials/block-controls/feed-controls/FeedPostTypeControl.js");
/* harmony import */ var _FeedTaxonomyControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeedTaxonomyControl */ "./assets/src/js/partials/block-controls/feed-controls/FeedTaxonomyControl.js");
/* harmony import */ var _FeedTermControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FeedTermControl */ "./assets/src/js/partials/block-controls/feed-controls/FeedTermControl.js");
/* harmony import */ var _FeedCountControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FeedCountControl */ "./assets/src/js/partials/block-controls/feed-controls/FeedCountControl.js");
/* harmony import */ var _FeedOffsetControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FeedOffsetControl */ "./assets/src/js/partials/block-controls/feed-controls/FeedOffsetControl.js");
/* harmony import */ var _FeedUseAndLogicControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FeedUseAndLogicControl */ "./assets/src/js/partials/block-controls/feed-controls/FeedUseAndLogicControl.js");
/* harmony import */ var _FeedHostControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FeedHostControl */ "./assets/src/js/partials/block-controls/feed-controls/FeedHostControl.js");
/* harmony import */ var _FeedPanel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FeedPanel */ "./assets/src/js/partials/block-controls/feed-controls/FeedPanel.js");
/* harmony import */ var _FeedPanelAdvanced__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FeedPanelAdvanced */ "./assets/src/js/partials/block-controls/feed-controls/FeedPanelAdvanced.js");










/***/ },

/***/ "./assets/src/js/partials/block-controls/font-icon-picker-control/FontIconPickerControl.js"
/*!*************************************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/font-icon-picker-control/FontIconPickerControl.js ***!
  \*************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);



const {
  BaseControl,
  Panel,
  PanelBody,
  PanelRow,
  TextControl,
  SelectControl
} = wp.components;
const FontIconPickerControl = props => {
  const icons = ["alarm", "alert-notification", "arrow-down-carrot", "arrow-down", "arrow-left-carrot", "arrow-left", "arrow-right-carrot", "arrow-right", "arrow-up-carrot", "arrow-up", "attachment", "basket", "bookmark", "calendar", "cart", "check", "collapse", "comment", "contrast", "credit-card", "cut", "discussion", "document", "download", "edit", "email", "expand", "favorite", "feedback", "filter", "flag", "gallery", "graph", "home", "info", "key", "light-bulb", "link", "location", "map-location", "map", "menu", "minus-circle", "minus", "mobile", "monitor", "more-vertical", "more", "next", "pause", "phone", "photos", "play-circle", "play", "plus", "pluse-circle", "previous", "print", "profile-circle", "profile", "rate", "refresh", "save", "search", "secure", "send", "settings", "share", "social-facebook", "social-instagram", "social-linkedin", "social-twitter", "social-youtube", "stop-circle", "stop", "tag", "tent", "time", "trash", "upload", "video-slideshow", "warning-caution", "warning-stop", "x-close", "zoom-in", "zoom-out"];
  const [isVisible, setIsVisible] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const toggleVisible = () => {
    setIsVisible(state => !state);
  };
  function selectIcon(icon) {
    toggleVisible();
    props.onChange(icon);
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wsu-gutenberg-font-icon-picker"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BaseControl, {
    className: "wsu-settings__base-control",
    help: props.help
  }, props.label && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BaseControl.VisualLabel, {
    className: "wsu-settings__label"
  }, props.label), props.value ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    className: "wsu-gutenberg-font-icon-picker__selected-icon",
    onClick: toggleVisible
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: `wsu-icon wsu-i-${props.value}`
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    onClick: () => props.onChange("")
  }, "Remove")) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    className: "wsu-gutenberg-font-icon-picker__select-icon-button",
    onClick: toggleVisible
  }, "Select Icon"), isVisible && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Popover, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wsu-gutenberg-font-icon-picker__icon-list"
  }, icons.map(i => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    key: i,
    title: i,
    className: "wsu-gutenberg-font-icon-picker__icon-button",
    onClick: () => selectIcon(i)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: `wsu-icon wsu-i-${i}`
  })))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FontIconPickerControl);

/***/ },

/***/ "./assets/src/js/partials/block-controls/heading-tag-control.js/HeadingTagControl.js"
/*!*******************************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/heading-tag-control.js/HeadingTagControl.js ***!
  \*******************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


const HeadingTagControl = props => {
  let defaultTags = ['h2', 'h3', 'h4', 'h5', 'h6'];
  let {
    attributes,
    setAttributes,
    allowedTags = defaultTags
  } = props;
  const isActive = value => {
    return value === attributes.headingTag ? true : false;
  };
  const setTag = value => {
    setAttributes({
      headingTag: value
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
    className: "wsu-heading-tag-block-control",
    id: "heading-tag",
    label: "Heading Level",
    help: ""
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ButtonGroup, null, allowedTags.includes('h1') && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    onClick: () => setTag('h1'),
    isPressed: isActive('h1'),
    className: "wsu-heading-tag-block-control__button",
    variant: "primary",
    "aria-label": "h1"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M13.81,6.75v10.5h-2v-4.5H6.43v4.5H4.49V6.75H6.43v4.34h5.43V6.75Z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M19.51,6.75v10.5h-2V8.39H15.34V6.75Z"
  }))), allowedTags.includes('h2') && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    onClick: () => setTag('h2'),
    isPressed: isActive('h2'),
    className: "wsu-heading-tag-block-control__button",
    variant: "primary",
    "aria-label": "h2"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M11.83,6.83V17.32H9.88v-4.5H4.45v4.5H2.5V6.83h2v4.33H9.88V6.83Z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M21.5,15.68v1.64H13.76V16l4.17-4c1-1,1.2-1.59,1.2-2.17,0-1-.66-1.52-1.95-1.52a3,3,0,0,0-2.46,1.1L13.36,8.42a4.83,4.83,0,0,1,4-1.74c2.28,0,3.75,1.15,3.75,3,0,1-.29,2-1.74,3.32l-2.81,2.67Z"
  }))), allowedTags.includes('h3') && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    onClick: () => setTag('h3'),
    isPressed: isActive('h3'),
    className: "wsu-heading-tag-block-control__button",
    variant: "primary",
    "aria-label": "h3"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M11.9,6.68V17.17H10v-4.5H4.52v4.5H2.57V6.68H4.52V11H10V6.68Z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M21.43,14c0,1.77-1.34,3.3-4.16,3.3a6.61,6.61,0,0,1-3.94-1.21l.84-1.52a4.84,4.84,0,0,0,3.07,1c1.4,0,2.22-.61,2.22-1.59s-.69-1.56-2.28-1.56h-1V11.15l2.39-2.84H13.84V6.68H21V8l-2.55,3C20.42,11.27,21.43,12.45,21.43,14Z"
  }))), allowedTags.includes('h4') && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    onClick: () => setTag('h4'),
    isPressed: isActive('h4'),
    className: "wsu-heading-tag-block-control__button",
    variant: "primary",
    "aria-label": "h4"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M11,6.75v10.5H9v-4.5H3.57v4.5H1.62V6.75H3.57v4.34H9V6.75Z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M22.38,14.86H20.52v2.39H18.63V14.86H12.87V13.51L18,6.75h2.09l-4.88,6.47h3.44V11.1h1.83v2.12h1.86Z"
  }))), allowedTags.includes('h5') && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    onClick: () => setTag('h5'),
    isPressed: isActive('h5'),
    className: "wsu-heading-tag-block-control__button",
    variant: "primary",
    "aria-label": "h5"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M11.81,6.68V17.17h-2v-4.5H4.43v4.5H2.48V6.68H4.43V11H9.86V6.68Z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M21.52,14c0,1.84-1.34,3.37-4.16,3.37a6.59,6.59,0,0,1-3.94-1.21l.82-1.52a4.94,4.94,0,0,0,3.09,1c1.4,0,2.22-.61,2.22-1.6s-.64-1.64-2.82-1.64H14.2l.54-5.71H20.9V8.31H16.39l-.23,2.43h1C20.27,10.74,21.52,12.09,21.52,14Z"
  }))), allowedTags.includes('h6') && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    onClick: () => setTag('h6'),
    isPressed: isActive('h6'),
    className: "wsu-heading-tag-block-control__button",
    variant: "primary",
    "aria-label": "h6"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M11.44,6.75v10.5H9.49v-4.5H4.06v4.5H2.11V6.75H4.06v4.34H9.49V6.75Z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M21.89,14c0,2.08-1.69,3.4-3.84,3.4-2.86,0-4.54-1.85-4.54-5.22,0-3.6,2.1-5.58,5.14-5.58a5.25,5.25,0,0,1,2.76.68l-.72,1.47a3.52,3.52,0,0,0-2-.51c-2,0-3.23,1.23-3.23,3.61v0a3.58,3.58,0,0,1,2.81-1.1C20.35,10.77,21.89,12,21.89,14ZM20,14.08c0-1.09-.82-1.78-2.1-1.78a1.91,1.91,0,0,0-2.13,1.8c0,1,.78,1.77,2.18,1.77A1.82,1.82,0,0,0,20,14.08Z"
  }))), allowedTags.includes('div') && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    onClick: () => setTag('div'),
    isPressed: isActive('div'),
    className: "wsu-heading-tag-block-control__button",
    variant: "primary",
    "aria-label": "div"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M11.44,6.75v10.5H9.49v-4.5H4.06v4.5H2.11V6.75H4.06v4.34H9.49V6.75Z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M21.89,14c0,2.08-1.69,3.4-3.84,3.4-2.86,0-4.54-1.85-4.54-5.22,0-3.6,2.1-5.58,5.14-5.58a5.25,5.25,0,0,1,2.76.68l-.72,1.47a3.52,3.52,0,0,0-2-.51c-2,0-3.23,1.23-3.23,3.61v0a3.58,3.58,0,0,1,2.81-1.1C20.35,10.77,21.89,12,21.89,14ZM20,14.08c0-1.09-.82-1.78-2.1-1.78a1.91,1.91,0,0,0-2.13,1.8c0,1,.78,1.77,2.18,1.77A1.82,1.82,0,0,0,20,14.08Z"
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeadingTagControl);

/***/ },

/***/ "./assets/src/js/partials/block-controls/image-frame-control/ImageFrameControl.js"
/*!****************************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/image-frame-control/ImageFrameControl.js ***!
  \****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const {
  MediaPlaceholder,
  MediaUpload
} = wp.editor;
const ImageFrameControl = props => {
  let {
    attributes,
    setAttributes,
    controlTitle = 'Add an Image...',
    imageIdKey = 'imageId',
    imageSrcKey = 'imageSrc',
    imageAltKey = 'imageAlt',
    imageRatioKey = 'imageRatio'
  } = props;
  const setImage = media => {
    if (typeof media === 'object' && 'id' in media) {
      let {
        alt = '',
        id,
        url
      } = media;
      console.log(url);
      setAttributes({
        [imageSrcKey]: url,
        [imageIdKey]: id,
        [imageAltKey]: alt
      });
    }
  };
  let blockClasses = 'wsu-image-frame wsu-image-frame-control';
  blockClasses += attributes.hasOwnProperty(imageRatioKey) && attributes[imageRatioKey] ? ' wsu-image--ratio-' + attributes[imageRatioKey] : '';
  if (attributes.imageSrc) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: blockClasses
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.imageSrc
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: "wsu-image-frame-control__button",
      onClick: () => setAttributes({
        [imageSrcKey]: '',
        [imageIdKey]: '',
        [imageAltKey]: ''
      })
    }, "Remove Image")));
  } else {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wsu-image-frame wsu-image-frame-control"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaPlaceholder, {
      icon: "format-image",
      labels: {
        title: controlTitle
      },
      className: "block-image",
      onSelect: value => {
        setImage(value);
      },
      accept: "image/*",
      allowedTypes: ['image']
    }));
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageFrameControl);

/***/ },

/***/ "./assets/src/js/partials/block-controls/multiple-image-picker/MultipleImagePicker.js"
/*!********************************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/multiple-image-picker/MultipleImagePicker.js ***!
  \********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);




const MultipleImagePicker = props => {
  const {
    label = "Select Media",
    help = "",
    onChange,
    value = []
  } = props;
  const [editingImage, setEditingImage] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [editingElement, setEditingElement] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [skipNextPopover, setSkipNextPopover] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  function updateSelectedMedia(media) {
    const images = mapToImageObjects(media);
    setEditingImage(null);
    onChange(images);
  }
  function mapToImageObjects(media) {
    return media.map(item => {
      const currentImage = value.find(image => image.id === item.id);
      return {
        id: item.id,
        url: item.url,
        thumbnail: item.sizes.thumbnail.url,
        focalPoint: currentImage?.focalPoint || {
          x: 0.5,
          y: 0.25
        }
      };
    });
  }
  function updateFocalPoint(image, focalPoint) {
    const images = value.map(item => {
      if (item.id === image.id) {
        return {
          ...item,
          focalPoint
        };
      }
      return item;
    });
    setEditingImage(images.find(item => item.id === image.id));
    onChange(images);
  }
  function openEditPopover(e, item) {
    if (!skipNextPopover) {
      setEditingElement(e.currentTarget);
      setEditingImage(item);
    }
    setSkipNextPopover(false);
  }
  function closeEditPopover(e) {
    if (e) {
      setSkipNextPopover(e.relatedTarget === editingElement);
    }
    setEditingElement(null);
    setEditingImage(null);
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
    label: label,
    help: help,
    className: "wsu-gutenberg-mip"
  }, editingImage && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Popover, {
    headerTitle: "Edit Focal Point",
    focusOnMount: "container",
    position: "middle left",
    onFocusOutside: closeEditPopover,
    onClose: closeEditPopover,
    getAnchorRect: () => editingElement?.getBoundingClientRect() || null
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wsu-gutenberg-mip__focal-point-picker-container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FocalPointPicker, {
    url: editingImage.url,
    value: editingImage.focalPoint,
    onChange: focalPoint => updateFocalPoint(editingImage, focalPoint)
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wsu-gutenberg-mip__images"
  }, value.map(item => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: item.id,
    className: "wsu-gutenberg-mip__thumbnail-container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: `wsu-gutenberg-mip__select-button${editingImage?.id === item.id ? " is-selected" : ""}`,
    onClick: e => openEditPopover(e, item)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "wsu-gutenberg-mip__thumbnail",
    src: item.thumbnail
  }))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUpload, {
    onSelect: media => updateSelectedMedia(media),
    allowedTypes: ["image"],
    multiple: true,
    gallery: true,
    value: value.map(item => item.id),
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      isPrimary: true,
      onClick: open,
      className: "wsu-gutenberg-mip__open-button"
    }, "Select Images"))
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MultipleImagePicker);

/***/ },

/***/ "./assets/src/js/partials/block-controls/post-picker/PostPicker.js"
/*!*************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/post-picker/PostPicker.js ***!
  \*************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _text_control__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./text-control */ "./assets/src/js/partials/block-controls/post-picker/text-control.js");








const CSSNAMESPACE = 'wsu-gutenberg-post-picker';
const PostPicker = props => {
  const {
    attributes,
    onChange,
    label = '',
    postTypes = ['post', 'page'],
    placeholder = 'Search Content...'
  } = props;
  const searchInputRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
  const isMounted = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useRef)(false);
  const [searchString, setSearchString] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)('');
  const [searchResults, setSearchResults] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
  const [isLoading, setIsLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const [selectedItems, setSelectedItems] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
  const [latestPosts, setLatestPosts] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
  const [postTypeData, setPostTypeData] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)({});
  const debouncedSetSearchString = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.useDebounce)(value => setSearchString(value), 250);
  const handleItemSelection = post => {
    if (attributes.postIn.split(',').includes(post.id.toString())) {
      return;
    }
    setSelectedItems([...selectedItems, post]);
    onChange([...attributes.postIn.split(','), post.id.toString()].join(','));
    setSearchResults([]);
    setSearchString('');
    searchInputRef.current.value = '';
  };
  const handleItemRemove = post => {
    setSelectedItems(selectedItems.filter(item => item.id !== post.id));
    onChange(attributes.postIn.split(',').filter(id => id !== post.id.toString()).join(','));
  };
  const resetSearch = () => {
    setSearchResults([]);
    setIsLoading(false);
  };
  const getSelectedItems = async () => {
    if (attributes.postIn.split(',').length === 0) {
      return;
    }
    const params = `ids=${attributes.postIn}`;
    const response = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5___default()({
      path: '/cahnrswsu-gutenberg/v1/get-posts-by-id?' + params,
      method: 'GET'
    });
    setSelectedItems(JSON.parse(response));
  };
  const getLatestPosts = async () => {
    setIsLoading(true);
    const params = `count=8&post_types=${postTypes}`;
    const response = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5___default()({
      path: '/cahnrswsu-gutenberg/v1/get-latest-posts?' + params,
      method: 'GET'
    });
    setLatestPosts(JSON.parse(response));
    setIsLoading(false);
  };
  const getPostTypeData = async () => {
    const response = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5___default()({
      path: '/wp/v2/types',
      method: 'GET'
    });
    setPostTypeData(response);
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    if (isMounted.current) {
      (async function handleSearch() {
        if (lodash.isEmpty(searchString)) {
          resetSearch();
          return;
        }
        setIsLoading(true);
        const params = `search_term=${searchString}&post_types=${postTypes}`;
        const response = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5___default()({
          path: '/cahnrswsu-gutenberg/v1/search-posts?' + params,
          method: 'GET'
        });
        setSearchResults(JSON.parse(response));
        setIsLoading(false);
      })();
    }
  }, [searchString]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    getPostTypeData();
    getSelectedItems();
    getLatestPosts();
    isMounted.current = true;
  }, []);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: CSSNAMESPACE
  }, selectedItems.length > 0 ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", null, selectedItems.map(post => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      key: post.id
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      className: `${CSSNAMESPACE}__remove-btn`,
      icon: "no-alt",
      onClick: () => handleItemRemove(post)
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: `${CSSNAMESPACE}__remove-btn-text`
    }, post.title)));
  })) : null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_text_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
    ref: searchInputRef,
    placeholder: placeholder,
    label: label,
    onChange: value => debouncedSetSearchString(value)
  }), isLoading && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Spinner, null), searchString.length ? !isLoading && !searchResults.length ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('No Items found')) : !isLoading && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SuggestionList, {
    attributes: attributes,
    title: "Search Results",
    postTypeData: postTypeData,
    suggestions: searchResults,
    searchTerm: searchString,
    onItemSelect: handleItemSelection
  }) : latestPosts.length && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SuggestionList, {
    attributes: attributes,
    title: "Recent Content",
    postTypeData: postTypeData,
    suggestions: latestPosts,
    searchTerm: searchString,
    onItemSelect: handleItemSelection
  }) || '');
};
function SuggestionList(props) {
  const {
    attributes,
    title,
    postTypeData,
    suggestions,
    onItemSelect,
    searchTerm = ''
  } = props;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${CSSNAMESPACE}__suggestion-list-container`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: `${CSSNAMESPACE}__suggestion-list-title`
  }, title), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: `${CSSNAMESPACE}__suggestion-list`
  }, suggestions.map((post, index) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      key: post.id,
      className: `${CSSNAMESPACE}__suggestion-list-item`
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Suggestion, {
      onClick: () => onItemSelect(post),
      searchTerm: searchTerm,
      suggestion: post,
      postTypeLabel: postTypeData[post.type]?.name,
      isSelected: attributes.postIn.split(',').includes(post.id.toString())
    }));
  })));
}
function Suggestion(props) {
  const {
    suggestion,
    onClick,
    searchTerm = '',
    isSelected = false,
    id = '',
    postTypeLabel = ''
  } = props;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    id: id,
    onClick: onClick,
    className: `${CSSNAMESPACE}__suggestion ${isSelected && 'is-selected'}`,
    title: (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_6__.decodeEntities)(suggestion.title),
    disabled: isSelected
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: `${CSSNAMESPACE}__suggestion-title`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextHighlight, {
    text: (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_6__.decodeEntities)(suggestion.title),
    highlight: searchTerm
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: `${CSSNAMESPACE}__suggestion-meta-container`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    "aria-hidden": true,
    className: `${CSSNAMESPACE}__suggestion-meta`
  }, suggestion.date), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    "aria-hidden": true,
    className: `${CSSNAMESPACE}__suggestion-meta`
  }, postTypeLabel || suggestion.type)));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostPicker);

/***/ },

/***/ "./assets/src/js/partials/block-controls/post-picker/text-control.js"
/*!***************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/post-picker/text-control.js ***!
  \***************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


/**
 * @typedef OwnProps
 * @property {string}                  label                 Label for the control.
 * @property {boolean}                 [hideLabelFromVision] Whether to accessibly hide the label.
 * @property {string}                  value                 Value of the input.
 * @property {string}                  [help]                Optional help text for the control.
 * @property {string}                  [className]           Classname passed to BaseControl wrapper
 * @property {(value: string) => void} onChange              Handle changes.
 * @property {string}                  [type='text']         Type of the input.
 */

/** @typedef {OwnProps & import('react').ComponentProps<'input'>} Props */

/**
 *
 * @param {Props}                                 props Props
 * @param {import('react').Ref<HTMLInputElement>} [ref]
 */
function TextControl({
  label,
  hideLabelFromVision,
  value,
  help,
  className,
  onChange,
  type = 'text',
  ...props
}, ref) {
  const instanceId = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.useInstanceId)(TextControl);
  const id = `inspector-text-control-${instanceId}`;
  const onChangeValue = (/** @type {import('react').ChangeEvent<HTMLInputElement>} */
  event) => onChange(event.target.value);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
    label: label,
    hideLabelFromVision: hideLabelFromVision,
    id: id,
    help: help,
    className: className
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    className: "components-text-control__input",
    type: type,
    id: id,
    value: value,
    onChange: onChangeValue,
    "aria-describedby": !!help ? id + '__help' : undefined,
    ref: ref,
    ...props
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(TextControl));

/***/ },

/***/ "./assets/src/js/partials/block-controls/required-alert-control/RequiredAlertControl.js"
/*!**********************************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/required-alert-control/RequiredAlertControl.js ***!
  \**********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const RequiredAlertControl = props => {
  let {
    attributes,
    onChange
  } = props;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "wsu-gutenberg-alert-control"
  }, props.children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RequiredAlertControl);

/***/ },

/***/ "./assets/src/js/partials/block-controls/reset-control/ResetControl.js"
/*!*****************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/reset-control/ResetControl.js ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../block-utilities/blockUtilities */ "./assets/src/js/partials/block-utilities/blockUtilities.js");



const ResetControl = props => {
  let {
    attributes,
    setAttributes,
    prefix,
    label = 'Reset'
  } = props;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    className: "wsu-block-control-reset",
    onClick: () => (0,_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_2__.setBlockClassName)(attributes, setAttributes, prefix, '')
  }, label);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResetControl);

/***/ },

/***/ "./assets/src/js/partials/block-controls/slide-selector/slideSelector.js"
/*!*******************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/slide-selector/slideSelector.js ***!
  \*******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../block-utilities/blockUtilities */ "./assets/src/js/partials/block-utilities/blockUtilities.js");

const {
  RangeControl
} = wp.components;

const SlideSelector = props => {
  const defaultSizes = ['none', 'sxxsmall', 'xxsmall', 'xsmall', 'small', 'medium', 'xmedium', 'xxmedium', 'large', 'xlarge', 'xxlarge', 'sxxlarge', 'hero', 'xhero', 'xxhero'];
  let {
    attributes,
    setAttributes,
    label,
    sizes = [],
    classPrefix,
    help = '',
    defaultSize = ''
  } = props;
  const setSlideSelectorValue = value => {
    let slideValue = defaultSize === slideSizes[value] ? '' : slideSizes[value];
    (0,_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_1__.setBlockClassName)(attributes, setAttributes, classPrefix, slideValue);
  };
  const getSlideSelectorValue = value => {
    let slideValue = (0,_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_1__.getBlockClassNameValue)(attributes, classPrefix, '');
    return slideValue ? slideSizes.indexOf(slideValue) : slideSizes.indexOf(defaultSize);
  };
  const getSelectedLabel = slideValue => {
    return slideSizes[slideValue];
  };
  let slideSizes = sizes.length ? sizes : defaultSizes;
  let selectedSlideValue = getSlideSelectorValue();
  let selectedSlideLabel = getSelectedLabel(selectedSlideValue);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
    label: label + ': ' + selectedSlideLabel,
    help: help,
    value: selectedSlideValue,
    onChange: slideValue => setSlideSelectorValue(slideValue),
    withInputField: false,
    renderTooltipContent: value => selectedSlideLabel,
    min: 0,
    max: slideSizes.length - 1
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SlideSelector);

/***/ },

/***/ "./assets/src/js/partials/block-controls/spacing-class-name-selector/spacing-class-name-selector.js"
/*!**********************************************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/spacing-class-name-selector/spacing-class-name-selector.js ***!
  \**********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



// TODO: 
// - Use desired names for spacing options

/*
 @example 
<SpacingClassNameSelector
    title="Spacing"
    spaceSettings={[
        {
            label: 'Outside Spacing (Margin)',
            properties: [
                {
                    label: 'Top',
                    prefix: 'wsu-spacing-before--',
                    ignoreOptions: ['none', 'xmedium', 'xxmedium'],									
                    default: 'small',
                },
                {
                    label: 'Bottom',
                    prefix: 'wsu-spacing-after--',
                    default: 'none',
                }
            ]
        },
        {
            label: 'Inside Spacing (Padding)',
            properties: [
                {
                    label: 'Top',
                    prefix: 'wsu-spacing-top--',
                    default: 'medium',
                },
                {
                    label: 'Bottom',
                    prefix: 'wsu-spacing-bottom--',
                    default: 'large',
                }
            ]
        }
    ]}
    {...props}>					
</SpacingClassNameSelector>
*/

const CSSNAMESPACE = 'wsu-gutenberg-spacing';
const ALLOPTIONS = [{
  key: 'default',
  name: 'default'
}, {
  key: 'none',
  name: 'none'
}, {
  key: 'sxxsmall',
  name: 'sxxsmall'
}, {
  key: 'xxsmall',
  name: 'xxsmall'
}, {
  key: 'xsmall',
  name: 'xsmall'
}, {
  key: 'small',
  name: 'small'
}, {
  key: 'medium',
  name: 'medium'
}, {
  key: 'xmedium',
  name: 'xmedium'
}, {
  key: 'xxmedium',
  name: 'xxmedium'
}, {
  key: 'large',
  name: 'large'
}, {
  key: 'xlarge',
  name: 'xlarge'
}, {
  key: 'xxlarge',
  name: 'xxlarge'
}, {
  key: 'hero',
  name: 'hero'
}, {
  key: 'xhero',
  name: 'xhero'
}, {
  key: 'xxhero',
  name: 'xxhero'
}];
const SpacingClassNameSelector = props => {
  const {
    title = 'Space Settings',
    attributes,
    setAttributes,
    spaceSettings
  } = props;
  function getOptionByKey(key) {
    return lodash.find(ALLOPTIONS, o => {
      return o.key === key;
    });
  }
  function getOptionObjectByClassName(prefix, className) {
    if (!className) {
      return;
    }
    const optionKey = className.replace(prefix, '');
    return getOptionByKey(optionKey);
  }
  const getSelectedValueByPrefix = prefix => {
    if (!attributes.className) {
      return;
    }
    const appliedClasses = attributes.className.split(' ');
    const selectedOptionClassName = lodash.find(appliedClasses, c => c.startsWith(prefix));
    return getOptionObjectByClassName(prefix, selectedOptionClassName);
  };
  const getValueForProperty = property => {
    return getSelectedValueByPrefix(property.prefix) || getOptionByKey(property.default) || '';
  };
  const updateSelectedOptions = (property, control) => {
    var _attributes$className;
    let optionClass = '';

    // only apply className if it is not equal to the current default state
    if (control && !(control.selectedItem.key === property.default)) {
      optionClass = property.prefix + control.selectedItem.key;
    }
    const appliedClasses = (_attributes$className = attributes.className?.split(' ')) !== null && _attributes$className !== void 0 ? _attributes$className : [];
    const newClasses = lodash.filter(appliedClasses, c => !c.startsWith(property.prefix)).concat(optionClass);
    const newClassName = newClasses.map(function (c) {
      return c.trim();
    }).filter(c => c).join(' ');
    setAttributes({
      className: newClassName
    });
  };
  const resetToDefault = property => {
    updateSelectedOptions(property, null);
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: title,
    initialOpen: false,
    className: `${CSSNAMESPACE}`
  }, spaceSettings.map(spaceSetting => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: spaceSetting.label,
      className: `${CSSNAMESPACE}__setting`
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: `${CSSNAMESPACE}__setting-label`
    }, spaceSetting.label), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `${CSSNAMESPACE}__setting-properties`
    }, spaceSetting.properties.map(property => {
      const options = ALLOPTIONS.filter(o => !property.ignoreOptions?.includes(o.key));
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        key: property.label
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CustomSelectControl, {
        label: property.label,
        options: options,
        onChange: control => {
          updateSelectedOptions(property, control);
        },
        value: getValueForProperty(property)
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
        className: `${CSSNAMESPACE}__reset-btn`,
        isSmall: true,
        onClick: () => resetToDefault(property)
      }, "Reset to Default"));
    })));
  }), props.children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SpacingClassNameSelector);

/***/ },

/***/ "./assets/src/js/partials/block-controls/svg-button-group-control/SvgButtonGroupControl.js"
/*!*************************************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/svg-button-group-control/SvgButtonGroupControl.js ***!
  \*************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


const SvgButtonOption = props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    onClick: () => props.onClick(props.value),
    isPressed: props.isActive(props.value),
    className: "",
    variant: "primary",
    "aria-label": props.value
  }, props.svg);
};
const SvgButtonGroupControl = props => {
  let {
    attributes,
    setAttributes,
    buttonOptions,
    currentValue,
    label
  } = props;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
    className: "wsu-gutenberg-svg-button-group-control",
    id: "svg-button-group-control",
    label: label,
    help: ""
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ButtonGroup, null, buttonOptions.map(buttonOption => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SvgButtonOption, {
      ...props,
      ...buttonOption
    });
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgButtonGroupControl);

/***/ },

/***/ "./assets/src/js/partials/block-controls/term-selector-control/TermSelectorControl.js"
/*!********************************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/term-selector-control/TermSelectorControl.js ***!
  \********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);



const {
  ComboboxControl,
  Spinner
} = wp.components;
let abortController = null;
const TermSelectorControl = function (props) {
  const [isLoading, setIsLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [availableTerms, setAvailableTerms] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(props.value); // keep track of all terms for mapping later
  const [termSuggestions, setTermSuggestions] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [selectedTerms, setSelectedTerms] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(props.value);
  const handleInputChange = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.useDebounce)(updateSuggestions, 250);
  async function updateSuggestions(input) {
    if (input.length < 2) {
      return;
    }
    setIsLoading(true);

    // cancel existing requests and set up new abort controller
    abortController?.abort();
    abortController = typeof AbortController === "undefined" ? undefined : new AbortController();

    // make request to terms api
    const response = await fetch(props.host + `/wp-json/wp/v2/search?type=term&subtype=${props.taxonomy}&search=${input}`, {
      method: "GET",
      signal: abortController?.signal
    });
    if (response.ok) {
      const results = await response.json();

      // process results
      const suggestions = lodash.differenceBy(results, selectedTerms, "id");
      if (suggestions.length > 0) {
        setTermSuggestions(suggestions.map(v => {
          return {
            label: v.title,
            value: v.id
          };
        }));
        setAvailableTerms([...availableTerms, ...lodash.differenceBy(results, availableTerms, "id")]);
      } else {
        setTermSuggestions([]);
      }
    }
    setIsLoading(false);
  }
  function selectTerm(termId) {
    const term = availableTerms.find(t => t.id === termId);
    const updatedSelectedTerms = [...selectedTerms, term];
    updateSelectedTerms(updatedSelectedTerms);
    setTermSuggestions([]);
  }
  function removeTerm(term) {
    const updatedSelectedTerms = selectedTerms.filter(t => t.id !== term.id);
    updateSelectedTerms(updatedSelectedTerms);
  }
  function updateSelectedTerms(termsArray) {
    let termsString = "";
    let queryTerms = [];
    if (Array.isArray(termsArray) && termsArray.length > 0) {
      termsString = termsArray.map(function (term) {
        return term.id.toString();
      }).join(",");
      queryTerms = termsArray.map(term => {
        return {
          termID: term.id,
          taxonomy: term.type
        };
      });
    }
    setSelectedTerms(termsArray);
    props.onChange({
      termsList: termsString,
      termsSelected: termsArray,
      queryTerms: queryTerms
    });
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wsu-gutenberg-term-selector"
  }, isLoading && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Spinner, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ComboboxControl, {
    label: props.label,
    help: props.help,
    value: "",
    onChange: selectTerm,
    options: termSuggestions,
    onFilterValueChange: handleInputChange,
    allowReset: false
  }), selectedTerms.length > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: "wsu-gutenberg-term-selector__selected_terms"
  }, selectedTerms.map((term, index) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      key: term.id,
      className: "wsu-gutenberg-term-selector__selected_term"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      type: "button",
      class: "components-button wsu-gutenberg-term-selector__remove-btn has-text has-icon",
      onClick: () => removeTerm(term)
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "wsu-gutenberg-term-selector__remove-btn-text"
    }, term.title, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "wsu-gutenberg-term-selector__remove-btn-taxonomy-text"
    }, term.type.replace("post_", ""))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "dashicon dashicons dashicons-no-alt wsu-gutenberg-term-selector__remove-btn-icon"
    })));
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TermSelectorControl);

/***/ },

/***/ "./assets/src/js/partials/block-utilities/blockClassName.js"
/*!******************************************************************!*\
  !*** ./assets/src/js/partials/block-utilities/blockClassName.js ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addBlockClassName: () => (/* binding */ addBlockClassName),
/* harmony export */   getBlockClassName: () => (/* binding */ getBlockClassName),
/* harmony export */   getBlockClassNameValue: () => (/* binding */ getBlockClassNameValue),
/* harmony export */   hasBlockClassName: () => (/* binding */ hasBlockClassName),
/* harmony export */   removeBlockClassName: () => (/* binding */ removeBlockClassName),
/* harmony export */   setBlockClassName: () => (/* binding */ setBlockClassName),
/* harmony export */   setBlockClassNameBool: () => (/* binding */ setBlockClassNameBool),
/* harmony export */   setChildBlockClassName: () => (/* binding */ setChildBlockClassName),
/* harmony export */   setClassName: () => (/* binding */ setClassName)
/* harmony export */ });
/**
 * Add a class prefix/value to a given string of classnames.
 * 
 * @param { string } classString String of class names
 * @param {string } prefix Previx of class to add or remove
 * @param { string } value Value to append to prefix
 * @param { boolean } remove Remove class names with matching prefixes
 * @returns String of classnames
 */

const addClassName = (classString, prefix, value, remove = true) => {
  let classNames = classString !== null && classString !== void 0 ? classString : '';
  let classArray = classNames.split(' ');
  let newClasses = [];
  if (Array.isArray(classArray)) {
    classArray.forEach((itemClass, index) => {
      if (!itemClass.includes(prefix)) {
        newClasses.push(itemClass);
      }
    });
    if ('' !== value) {
      newClasses.push(prefix + value);
    }
  }
  return newClasses.join(' ');
};

/**
 * Add class names from block attributes
 * 
 * @param { object } attributes | Block attributes
 * @param { string } prefix | Class prefix to attach value to
 * @param { string } value | Value to append to class prefix 
 * @param { boolean } remove | Remove matching class prefixes 
 * @returns { string } String of class values
 */

const addBlockClassName = (attributes, prefix, value, remove = true) => {
  let classNames;
  if (typeof attributes === 'object') {
    var _attributes$className;
    classNames = (_attributes$className = attributes.className) !== null && _attributes$className !== void 0 ? _attributes$className : '';
  } else {
    classNames = attributes !== null && attributes !== void 0 ? attributes : '';
  }
  return addClassName(classNames, prefix, value, remove);
};
const hasBlockClassName = (attributes, value) => {
  let classNames;
  if (typeof attributes === 'object') {
    var _attributes$className2;
    classNames = (_attributes$className2 = attributes.className) !== null && _attributes$className2 !== void 0 ? _attributes$className2 : '';
  } else {
    classNames = attributes !== null && attributes !== void 0 ? attributes : '';
  }
  return classNames.includes(value) ? true : false;
};
const getBlockClassName = (className, prefix) => {
  let classArray = className.split(' ');
  let value = '';
  if (Array.isArray(classArray)) {
    classArray.forEach((itemClass, index) => {
      if (itemClass.includes(prefix)) {
        value = itemClass.replace(prefix, '');
      }
    });
  }
  return value;
};
const getClassNameValue = (classesString, prefix, defaultValue = '') => {
  let className = classesString !== null && classesString !== void 0 ? classesString : '';
  let classArray = className.split(' ');
  let value = defaultValue;
  if (Array.isArray(classArray)) {
    classArray.forEach((itemClass, index) => {
      if (itemClass.includes(prefix)) {
        value = itemClass.replace(prefix, '');
      }
    });
  }
  return value;
};
const getBlockClassNameValue = (attributes, prefix, defaultValue = '', setKey = 'className') => {
  let className;
  if (typeof attributes === 'object') {
    var _attributes$setKey;
    className = (_attributes$setKey = attributes[setKey]) !== null && _attributes$setKey !== void 0 ? _attributes$setKey : '';
  } else {
    className = attributes !== null && attributes !== void 0 ? attributes : '';
  }
  return getClassNameValue(className, prefix, defaultValue);
};
const removeBlockClassName = (className, prefix) => {
  let classNames = className !== null && className !== void 0 ? className : '';
  let classArray = classNames.split(' ');
  let newClasses = [];
  if (Array.isArray(classArray)) {
    classArray.forEach((itemClass, index) => {
      if (!itemClass.includes(prefix)) {
        newClasses.push(itemClass);
      }
    });
  }
  return newClasses.join(' ');
};

/**
 * @param { string } classesString | String of class names 
 * @param { string } prefix | Class Prefix to add 
 * @param { string } value | Value to append to class prefix 
 * @param { function } setAttributes | Block setAttributes method
 * @param { string } setKey | Attribute key to set 
 */
const setClassName = (classesString, prefix, value, setAttributes, setKey = 'className') => {
  classesString = classesString !== null && classesString !== void 0 ? classesString : '';
  let classes = addClassName(classesString, prefix, value);
  setAttributes({
    [setKey]: classes
  });
};

/**
 * @param { object } attributes | String of class names
 * @param { function } setAttributes | Block setAttributes method
 * @param { string } prefix | Class Prefix to add 
 * @param { string } value | Value to append to class prefix 
 */
const setBlockClassName = (attributes, setAttributes, prefix, value, setKey = 'className') => {
  let classNames;
  if (typeof attributes === 'object') {
    var _attributes$setKey2;
    classNames = (_attributes$setKey2 = attributes[setKey]) !== null && _attributes$setKey2 !== void 0 ? _attributes$setKey2 : '';
  } else {
    classNames = attributes !== null && attributes !== void 0 ? attributes : '';
  }
  setClassName(classNames, prefix, value, setAttributes, setKey);
};
const setBlockClassNameBool = (attributes, setAttributes, blockClass, value) => {
  var _attributes$className3;
  let classNames = (_attributes$className3 = attributes.className) !== null && _attributes$className3 !== void 0 ? _attributes$className3 : '';
  let classArray = classNames.split(' ');
  let newClasses = [];
  if (Array.isArray(classArray)) {
    classArray.forEach((itemClass, index) => {
      if (itemClass != blockClass) {
        newClasses.push(itemClass);
      }
    });
    if (value) {
      newClasses.push(blockClass);
    }
  }
  setAttributes({
    className: newClasses.join(' ')
  });
};
const setChildBlockClassName = (clientId, prefix, value, setKey = 'className') => {
  let children = wp.data.select('core/editor').getBlocksByClientId(clientId)[0].innerBlocks;
  children.forEach(function (child, index) {
    let attributes = wp.data.select('core/editor').getBlockAttributes(child.clientId);
    let classNames = addBlockClassName(attributes, prefix, value);
    wp.data.dispatch('core/editor').updateBlockAttributes(child.clientId, {
      className: classNames
    });
  });
};


/***/ },

/***/ "./assets/src/js/partials/block-utilities/blockUtilities.js"
/*!******************************************************************!*\
  !*** ./assets/src/js/partials/block-utilities/blockUtilities.js ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addBlockClassName: () => (/* reexport safe */ _blockClassName__WEBPACK_IMPORTED_MODULE_1__.addBlockClassName),
/* harmony export */   getBlockClassName: () => (/* reexport safe */ _blockClassName__WEBPACK_IMPORTED_MODULE_1__.getBlockClassName),
/* harmony export */   getBlockClassNameOption: () => (/* reexport safe */ _getBlockClassNameOption__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   getBlockClassNameValue: () => (/* reexport safe */ _blockClassName__WEBPACK_IMPORTED_MODULE_1__.getBlockClassNameValue),
/* harmony export */   hasBlockClassName: () => (/* reexport safe */ _blockClassName__WEBPACK_IMPORTED_MODULE_1__.hasBlockClassName),
/* harmony export */   removeBlockClassName: () => (/* reexport safe */ _blockClassName__WEBPACK_IMPORTED_MODULE_1__.removeBlockClassName),
/* harmony export */   setBlockClassName: () => (/* reexport safe */ _blockClassName__WEBPACK_IMPORTED_MODULE_1__.setBlockClassName),
/* harmony export */   setBlockClassNameBool: () => (/* reexport safe */ _blockClassName__WEBPACK_IMPORTED_MODULE_1__.setBlockClassNameBool),
/* harmony export */   setChildBlockClassName: () => (/* reexport safe */ _blockClassName__WEBPACK_IMPORTED_MODULE_1__.setChildBlockClassName),
/* harmony export */   setClassName: () => (/* reexport safe */ _blockClassName__WEBPACK_IMPORTED_MODULE_1__.setClassName)
/* harmony export */ });
/* harmony import */ var _getBlockClassNameOption__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBlockClassNameOption */ "./assets/src/js/partials/block-utilities/getBlockClassNameOption.js");
/* harmony import */ var _blockClassName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blockClassName */ "./assets/src/js/partials/block-utilities/blockClassName.js");











/***/ },

/***/ "./assets/src/js/partials/block-utilities/getBlockClassNameOption.js"
/*!***************************************************************************!*\
  !*** ./assets/src/js/partials/block-utilities/getBlockClassNameOption.js ***!
  \***************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getBlockClassNameOption = (className, prefix) => {
  let classArray = className.split(' ');
  let value = '';
  if (Array.isArray(classArray)) {
    classArray.forEach((itemClass, index) => {
      if (itemClass.includes(prefix)) {
        value = itemClass.replace(prefix, '');
      }
    });
  }
  return value;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getBlockClassNameOption);

/***/ },

/***/ "./blocks/block-conversion/index.js"
/*!******************************************!*\
  !*** ./blocks/block-conversion/index.js ***!
  \******************************************/
() {

wp.hooks.addFilter('blocks.registerBlockType', 'core/shortcode', function (settings, name) {
  if (name === 'core/shortcode') {
    settings.transforms = {
      from: [{
        type: 'shortcode',
        tag: 'music',
        attributes: {
          content: {
            type: 'string',
            shortcode: props => props && props.content ? props.content : ''
          }
        },
        transform: props => {
          const content = props && props.content ? props.content : '[music]';
          console.log("Transforming [music] shortcode to paragraph block.");
          const paragraphBlock = wp.blocks.createBlock('core/paragraph', {
            content: content
          });
          return paragraphBlock;
        }
      }]
    };
  }
  return settings;
});

/***/ },

/***/ "./blocks/cahnrs-archive-search/editor/block.js"
/*!******************************************************!*\
  !*** ./blocks/cahnrs-archive-search/editor/block.js ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 *  BLOCK: CAHNRS Archive Search
 *  ---
 *  Search that allows user to select to search for archived posts
 */

const {
  __
} = wp.i18n;
const {
  registerBlockType
} = wp.blocks;
const {
  useBlockProps,
  RichText
} = wp.blockEditor;
registerBlockType('cahnrs/archive-search', {
  title: __('CAHNRS Archived News Search'),
  icon: 'search',
  category: 'cahnrs',
  keywords: [__('search')],
  // Enable or disable support for low-level features
  supports: {
    // Turn off ability to edit HTML of block content
    html: false,
    // Turn off reusable block feature
    reusable: false,
    // Add alignwide and alignfull options
    align: false
  },
  // Set up data model for custom block
  attributes: {
    title: {
      type: 'string',
      selector: 'js-search-title'
    },
    author: {
      type: 'string',
      selector: 'js-search-author'
    },
    summary: {
      type: 'string',
      selector: 'js-search-summary',
      multiline: 'p'
    }
  },
  // The UI for the WordPress editor
  edit: props => {
    // Pull out the props we'll use
    const {
      attributes,
      className,
      setAttributes
    } = props;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...useBlockProps()
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: className
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Search Bar"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      class: "static-block-description"
    }, "Custom search bar for news website that will allow users to search archived articles")));
  },
  // The output on the live site
  // No save, dynamic block
  save: props => {
    return null;
  }
});

/***/ },

/***/ "./blocks/cahnrs-author-information/editor/block.js"
/*!**********************************************************!*\
  !*** ./blocks/cahnrs-author-information/editor/block.js ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit */ "./blocks/cahnrs-author-information/editor/edit.js");





 // Import useState


(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)('cahnrs/author-information', {
  title: 'Author Info',
  apiVersion: 2,
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    role: "img",
    "enable-background": "new 0 0 70.2 69.6",
    version: "1.1",
    viewBox: "0 0 70.2 69.6",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "st0",
    fill: "#a60f2d",
    d: "m42.8 69.6s3.6-1.5 5.5-7.4c1 2.3 1.5 4.8 1.3 7.3-2.3 0.1-4.5 0.2-6.8 0.1zm14.9-11.8c-10.4 1.4-12.2-20.3-12.2-20.3s3.5 11.1 10.9 10.7c7.7-0.4 5.5-12.2 5.5-12.2s7.5 20.2-4.2 21.8zm-47.7-5c-3.3 1-6.6 1.8-10 2.4 0 0 5.9-4.5 10.3-18.3l4.3 3.9-0.8 2.6c1.1 1.5 1.9 3.1 2.5 4.9 1.6-3.6 1.5-7.7-0.3-11.2l-0.5 1.6-1.7-1.5-2.8-2.7c1.2-3.6 3-7 5.3-10.1l0.4 0.4 3.3 3.8-1 1.7c1.5 1.7 2.9 3.4 4.2 5.3 0.6-3.4 0.4-6.8-0.4-10.1l-1.5 1.4-3.6-4.2c4.5-4.7 10-8.2 16.2-10.3-0.4 0.4-0.7 0.8-1 1.3-2 2.9-4.1 8.1-2.4 16.4 0.3 1.3 0.7 3.2 1.1 5.1 0.9 3.8 1.9 8.2 2.2 10.9 0.7 5.7 0.1 9.4-1.8 11.4-1.3 1.4-3.5 2-6.4 1.9v-1.4c0-2.4-0.3-4.8-0.8-7.2l-0.8-2.7-1.2 2.6c-1.9 4.1-8.6 14.1-17.2 16.1 2.6-4.2 4.1-9 4.4-14zm25.4 16.4h-0.5-0.1-0.3c-0.5 0-0.8-0.1-1.2-0.1-0.7-0.1-1.6-0.2-2.6-0.4-6.4-1.1-12.9-1.7-19.4-2 6.2-3.6 10.4-9.9 12-12.5 0.2 1.3 0.3 2.5 0.3 3.8 0 0.8 0 1.6-0.1 2.2l-0.1 1.1 1.1 0.1c0.7 0.1 1.3 0.1 1.9 0.1 3.3 0 5.7-0.8 7.3-2.5 2.4-2.5 3.1-6.7 2.3-13.1-0.4-2.9-1.4-7.4-2.3-11.1-0.5-2-0.9-3.8-1.1-5-1.5-7.6 0.3-12.3 2.1-14.8 1.3-1.9 3.2-3.4 5.5-4.2h0.1l3.3-10.8h1.1l-2.3 10.3c0.7-0.1 1.2-0.2 1.7-0.3l3-9.5h1.1l-2 9.2c2.9-0.4 6.1-0.7 10.3-1 0.8 0.4 1.4 1.1 1.8 1.9l9.8-3 0.4 1.1-9.5 3.7c0.1 0.2 0.2 0.4 0.2 0.6l10.3-1.3 0.2 1.1-10 2c0 0.2 0.1 0.4 0.1 0.6l10.4 0.3v1.1l-10.2 0.4c0 1.2-0.2 2.4-0.5 3.6 0.6 2.1 0.7 4.3 0.3 6.5-1.7-3.9-3-5.1-3-5.1-1.4-0.7-2.9-1-4.5-1-2.5 0-4.8 1.1-6.4 2.9-2.3 2.6-3.5 6-3.3 9.5 0.2 2.4 0.7 5.1 1.4 8.6 0.7 3.6 1.6 8.1 2.3 13.5 0.6 4.1-0.1 7.3-1.8 9.7-1.6 2.1-4 3.4-6.5 3.8h-0.1-0.2-0.1-2.2zm10.4-51.5c-2.1-0.1-4.2 0.4-6 1.3-1.5 1-2.5 2.7-2.6 4.5-0.1 0.6-0.1 1.2 0 1.8 0.8-1.5 2-2.8 3.3-3.9 2.4-1.5 5.1-2.3 7.9-2.4h0.9 0.3c0.4 0 0.7-0.1 0.8-0.2 0-0.1-0.1-0.3-0.4-0.4-1.3-0.5-2.7-0.8-4.2-0.7z"
  })),
  category: 'cahnrs',
  attributes: {
    headingTag: {
      type: 'string',
      default: 'h3'
    },
    showImage: {
      type: 'boolean',
      default: true
    },
    showEmail: {
      type: 'boolean',
      default: true
    },
    showBio: {
      type: 'boolean',
      default: true
    },
    showTelephone: {
      type: 'boolean',
      default: true
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_5__["default"]
});

/***/ },

/***/ "./blocks/cahnrs-author-information/editor/edit.js"
/*!*********************************************************!*\
  !*** ./blocks/cahnrs-author-information/editor/edit.js ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-controls/blockControls */ "./assets/src/js/partials/block-controls/blockControls.js");




const Edit = props => {
  let {
    className,
    attributes,
    setAttributes
  } = props;
  const {
    showImage,
    showEmail,
    showBio,
    showTelephone
  } = attributes;
  const toggleImage = () => {
    setAttributes({
      showImage: !showImage
    });
  };
  const toggleEmail = () => {
    setAttributes({
      showEmail: !showEmail
    });
  };
  const toggleBio = () => {
    setAttributes({
      showBio: !showBio
    });
  };
  const toggleTelephone = () => {
    setAttributes({
      showTelephone: !showTelephone
    });
  };
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: "cahnrs-author-information"
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: "Display Options"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_3__.HeadingTagControl, {
    ...props,
    allowedTags: ['h2', 'h3', 'h4', 'h5', 'h6']
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: "Display Author Image",
    checked: showImage,
    onChange: toggleImage
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: "Display Author Email",
    checked: showEmail,
    onChange: toggleEmail
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: "Display Author Bio",
    checked: showBio,
    onChange: toggleBio
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: "Display Author Telephone",
    checked: showTelephone,
    onChange: toggleTelephone
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "Author Information"), showImage && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: "https://placeholder.com/150",
    alt: "Author Image",
    className: "author-information-image"
  }), showBio && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "This is the author bio."), showEmail && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Email: butch@wsu.edu"), showTelephone && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Telephone: 555-555-5555")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ },

/***/ "./blocks/cahnrs-extension-newsletter/editor/block.js"
/*!************************************************************!*\
  !*** ./blocks/cahnrs-extension-newsletter/editor/block.js ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 *  BLOCK: CAHNRS News Extension Newsletter
 *  ---
 *  Static block for Extension Newsletter
 */

const {
  __
} = wp.i18n;
const {
  registerBlockType
} = wp.blocks;
const {
  useBlockProps,
  RichText
} = wp.blockEditor;
registerBlockType('cahnrs/extension-newsletter', {
  title: __('CAHNRS Extension Newsletter'),
  icon: 'megaphone',
  category: 'cahnrs',
  keywords: [__('Extension Newsletter')],
  // The UI for the WordPress editor
  edit: props => {
    // Pull out the props we'll use
    const {
      attributes,
      className,
      setAttributes
    } = props;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...useBlockProps()
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: className,
      class: "block-editor-block-list__block wp-block wsu-card is-selected wp-block-wsuwp-card wsu-color-background--gray-5 wsu-card--style-horizontal-33"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "wsu-image-frame wsu-image-frame-control wsu-image--ratio-2-5"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: "https://wpcdn.web.wsu.edu/cahnrs/uploads/sites/4/block-image3.jpg",
      alt: "Subscribe to Extension Newsletter"
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "wsu-card__content"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Extension Update Newsletter"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      class: "static-block-description"
    }, "Published monthly, the Extension Update newsletter provides highlights, upcoming events, the who\u2019s who, as well as compelling stories from across the Washington State University Extension system."))));
  },
  // The output on the live site
  // No save, dynamic block
  save: props => {
    return null;
  }
});

/***/ },

/***/ "./blocks/cahnrs-on-solid-ground/editor/block.js"
/*!*******************************************************!*\
  !*** ./blocks/cahnrs-on-solid-ground/editor/block.js ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 *  BLOCK: CAHNRS News On Solid Ground
 *  ---
 *  Static block for On Solid Ground
 */

const {
  __
} = wp.i18n;
const {
  registerBlockType
} = wp.blocks;
const {
  useBlockProps,
  RichText
} = wp.blockEditor;
registerBlockType('cahnrs/on-solid-ground', {
  title: __('CAHNRS On Solid Ground'),
  icon: 'megaphone',
  category: 'cahnrs',
  keywords: [__('on solid ground')],
  // Enable or disable support for low-level features
  supports: {
    // Turn off ability to edit HTML of block content
    html: false,
    // Turn off reusable block feature
    reusable: false,
    // Add alignwide and alignfull options
    align: false
  },
  // Set up data model for custom block
  attributes: {},
  // The UI for the WordPress editor
  edit: props => {
    // Pull out the props we'll use
    const {
      attributes,
      className,
      setAttributes
    } = props;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...useBlockProps()
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: className,
      class: "block-editor-block-list__block wp-block wsu-card is-selected wp-block-wsuwp-card wsu-color-background--gray-5 wsu-card--style-horizontal-33"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "wsu-image-frame wsu-image-frame-control wsu-image--ratio-2-5"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: "https://wpcdn.web.wsu.edu/cahnrs/uploads/sites/4/2021/04/osg-promo.png",
      alt: "On Solid Ground"
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "wsu-card__content"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "On Solid Ground"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      class: "static-block-description"
    }, "Articles like this one are shared monthly in the On Solid Ground newsletter. Subscribe for more updates about WSU research and discovery that supports Northwest agriculture and natural resources."))));
  },
  // The output on the live site
  // No save, dynamic block
  save: props => {
    return null;
  }
});

/***/ },

/***/ "./blocks/cahnrs-video-list/editor/block.js"
/*!**************************************************!*\
  !*** ./blocks/cahnrs-video-list/editor/block.js ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./blocks/cahnrs-video-list/editor/edit.js");
const {
  registerBlockType
} = wp.blocks;

registerBlockType("cahnrs/video-list", {
  title: "CAHNRS Video List",
  icon: "groups",
  category: "cahnrs",
  attributes: {
    count: {
      type: "string",
      default: "10"
    },
    page: {
      type: "string",
      default: "1"
    },
    tag: {
      type: "array",
      default: []
    },
    columns: {
      type: "integer",
      default: 3
    },
    headingTag: {
      type: "string",
      default: "h2"
    },
    headingTag: {
      type: 'string',
      default: 'h3'
    },
    taxonomy: {
      type: 'string',
      default: 'category'
    },
    termsSelected: {
      type: 'array',
      default: []
    },
    terms: {
      type: 'string',
      default: ''
    },
    queryTerms: {
      type: 'array',
      default: []
    },
    count: {
      type: 'string',
      default: '3'
    },
    offset: {
      type: 'string',
      default: '0'
    },
    host: {
      type: 'string',
      default: ''
    },
    postIn: {
      type: 'string',
      default: ''
    },
    useAndLogic: {
      type: 'boolean',
      default: false
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: function () {
    return null;
  }
});

/***/ },

/***/ "./blocks/cahnrs-video-list/editor/edit.js"
/*!*************************************************!*\
  !*** ./blocks/cahnrs-video-list/editor/edit.js ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_src_js_partials_block_controls_feed_controls_feed_controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-controls/feed-controls/feed-controls */ "./assets/src/js/partials/block-controls/feed-controls/feed-controls.js");

const {
  __
} = wp.i18n;
const {
  useBlockProps,
  InspectorControls
} = wp.blockEditor;
const {
  TextControl,
  PanelBody,
  PanelRow,
  BaseControl,
  CheckboxControl,
  RangeControl,
  ToggleControl,
  __experimentalRadio: Radio,
  __experimentalRadioGroup: RadioGroup
} = wp.components;


function Edit(props) {
  const {
    attributes,
    setAttributes
  } = props;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...useBlockProps()
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, {
    key: "setting"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_assets_src_js_partials_block_controls_feed_controls_feed_controls__WEBPACK_IMPORTED_MODULE_1__.FeedPanel, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_assets_src_js_partials_block_controls_feed_controls_feed_controls__WEBPACK_IMPORTED_MODULE_1__.FeedTaxonomyControl, {
    label: "Taxonomy",
    help: "Select taxonomy to filter posts by",
    host: attributes.host || window.wsu.ROOT_URL,
    postType: attributes.postType,
    value: attributes.taxonomy,
    onChange: taxonomy => setAttributes({
      taxonomy
    })
  }), attributes.taxonomy && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_assets_src_js_partials_block_controls_feed_controls_feed_controls__WEBPACK_IMPORTED_MODULE_1__.FeedTermControl, {
    label: "Terms",
    help: "Filter posts by searching and selecting terms in the selected taxonomy",
    host: attributes.host || window.wsu.ROOT_URL,
    taxonomy: attributes.taxonomy,
    value: attributes.termsSelected,
    onChange: terms => setAttributes({
      terms: terms.termsList,
      termsSelected: terms.termsSelected,
      queryTerms: terms.queryTerms
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_assets_src_js_partials_block_controls_feed_controls_feed_controls__WEBPACK_IMPORTED_MODULE_1__.FeedCountControl, {
    ...props
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wsu-gutenberg-video-list"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `wsu-gutenberg-video-list__profiles wsu-gutenberg-video-list__profiles--per-row-${attributes.columns}`
  }, [...Array(attributes.columns)].map((e, i) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wsu-gutenberg-video-list__profile"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wsu-gutenberg-video-list__video-image"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wsu-gutenberg-video-list__video-title"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "wsu-gutenberg-video-list__video-name"
  }, "Video Title"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "wsu-gutenberg-video-list__video-description"
  }, "Video Description")))))));
}

/***/ },

/***/ "./blocks/cahnrs-voice-of-the-vine/editor/block.js"
/*!*********************************************************!*\
  !*** ./blocks/cahnrs-voice-of-the-vine/editor/block.js ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 *  BLOCK: CAHNRS News Voice of the Vine
 *  ---
 *  Static block for Voice of the Vine
 */

const {
  __
} = wp.i18n;
const {
  registerBlockType
} = wp.blocks;
const {
  useBlockProps,
  RichText
} = wp.blockEditor;
registerBlockType('cahnrs/voice-of-the-vine', {
  title: __('CAHNRS Voice of the Vine'),
  icon: 'megaphone',
  category: 'cahnrs',
  keywords: [__('voice of the vine')],
  // The UI for the WordPress editor
  edit: props => {
    // Pull out the props we'll use
    const {
      attributes,
      className,
      setAttributes
    } = props;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...useBlockProps()
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: className,
      class: "block-editor-block-list__block wp-block wsu-card is-selected wp-block-wsuwp-card wsu-color-background--gray-5 wsu-card--style-horizontal-33"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "wsu-image-frame wsu-image-frame-control wsu-image--ratio-2-5"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: "https://wpcdn.web.wsu.edu/cahnrs/uploads/sites/4/VoV-26-II-1.jpg",
      alt: "Voice of the Vine"
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "wsu-card__content"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Voice of the Vine"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      class: "static-block-description"
    }, "Subscribe to the Voice of the Vine newsletter for stories about the latest emerging research from WSU's Department of Viticulture and Enology, profiles of students, alumni, and researchers working in Washington's world-class wine industry, info on upcoming events, and much more."))));
  },
  // The output on the live site
  // No save, dynamic block
  save: props => {
    return null;
  }
});

/***/ },

/***/ "./blocks/panel/article-external-link/index.js"
/*!*****************************************************!*\
  !*** ./blocks/panel/article-external-link/index.js ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const {
  registerPlugin
} = wp.plugins;
const {
  PluginDocumentSettingPanel
} = wp.editPost;
const {
  useState,
  useEffect
} = wp.element;
const {
  TextControl
} = wp.components;
const {
  dispatch,
  select
} = wp.data;
const cahnrsArticleExternalLink = () => {
  const [externalLink, setExternalLink] = useState('');
  useEffect(() => {
    const postType = select('core/editor').getCurrentPostType();
    if (postType === 'article') {
      const postMeta = select('core/editor').getEditedPostAttribute('meta');
      if (postMeta && postMeta._article_redirect_url) {
        setExternalLink(postMeta._article_redirect_url);
      }
    }
  }, []);
  const updatePostWithLink = newLink => {
    if (dispatch) {
      dispatch('core/editor').editPost({
        meta: {
          _article_redirect_url: newLink
        }
      });
    } else {
      console.error('Dispatch function is not available.');
    }
  };
  const postType = select('core/editor').getCurrentPostType();
  if (postType !== 'article') {
    return null;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PluginDocumentSettingPanel, {
    name: "cahnrs-article-external-link",
    title: "External Link",
    className: "cahnrs-article-external-link"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Add the link of the external post below."), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    label: "External Link URL",
    value: externalLink,
    onChange: newValue => {
      setExternalLink(newValue);
      updatePostWithLink(newValue);
    }
  })));
};
registerPlugin('cahnrs-article-external-link', {
  render: cahnrsArticleExternalLink
});

/***/ },

/***/ "react"
/*!************************!*\
  !*** external "React" ***!
  \************************/
(module) {

"use strict";
module.exports = window["React"];

/***/ },

/***/ "@wordpress/api-fetch"
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
(module) {

"use strict";
module.exports = window["wp"]["apiFetch"];

/***/ },

/***/ "@wordpress/block-editor"
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
(module) {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ },

/***/ "@wordpress/blocks"
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
(module) {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ },

/***/ "@wordpress/components"
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ },

/***/ "@wordpress/compose"
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
(module) {

"use strict";
module.exports = window["wp"]["compose"];

/***/ },

/***/ "@wordpress/element"
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ },

/***/ "@wordpress/html-entities"
/*!**************************************!*\
  !*** external ["wp","htmlEntities"] ***!
  \**************************************/
(module) {

"use strict";
module.exports = window["wp"]["htmlEntities"];

/***/ },

/***/ "@wordpress/i18n"
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
(module) {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			const getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.hasOwn(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./blocks/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_cahnrs_video_list_editor_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blocks/cahnrs-video-list/editor/block */ "./blocks/cahnrs-video-list/editor/block.js");
/* harmony import */ var _blocks_cahnrs_archive_search_editor_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blocks/cahnrs-archive-search/editor/block */ "./blocks/cahnrs-archive-search/editor/block.js");
/* harmony import */ var _blocks_cahnrs_on_solid_ground_editor_block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blocks/cahnrs-on-solid-ground/editor/block */ "./blocks/cahnrs-on-solid-ground/editor/block.js");
/* harmony import */ var _blocks_cahnrs_voice_of_the_vine_editor_block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../blocks/cahnrs-voice-of-the-vine/editor/block */ "./blocks/cahnrs-voice-of-the-vine/editor/block.js");
/* harmony import */ var _blocks_cahnrs_extension_newsletter_editor_block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../blocks/cahnrs-extension-newsletter/editor/block */ "./blocks/cahnrs-extension-newsletter/editor/block.js");
/* harmony import */ var _blocks_cahnrs_author_information_editor_block__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../blocks/cahnrs-author-information/editor/block */ "./blocks/cahnrs-author-information/editor/block.js");
/* harmony import */ var _blocks_panel_article_external_link___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../blocks/panel/article-external-link/ */ "./blocks/panel/article-external-link/index.js");
/* harmony import */ var _blocks_block_conversion___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../blocks/block-conversion/ */ "./blocks/block-conversion/index.js");
/* harmony import */ var _blocks_block_conversion___WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_blocks_block_conversion___WEBPACK_IMPORTED_MODULE_7__);








})();

/******/ })()
;
//# sourceMappingURL=cahnrs-gutenberg-blocks.js.map