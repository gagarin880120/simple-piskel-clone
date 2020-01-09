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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(2);

var iterableToArray = __webpack_require__(3);

var nonIterableSpread = __webpack_require__(4);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/components/modal-dialog/keyboard-modal-style.css
var keyboard_modal_style = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(1);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./src/screens/canvas/style.css
var style = __webpack_require__(5);

// CONCATENATED MODULE: ./src/utils.js
function getHexFromRGBA(array) {
  return array.slice(0, 3).reduce(function (acc, val) {
    var hexVal = val.toString(16);
    if (hexVal.length === 1) hexVal = "0".concat(hexVal);
    return acc + hexVal;
  }, '#');
}

function getRGBArrFromHex(str) {
  var hex = str.slice(1);
  var arr = [];

  for (var i = 1; i < 6; i += 2) {
    var pair = hex[i - 1] + hex[i];
    arr.push(pair);
  }

  return arr.map(function (item) {
    return parseInt(item, 16).toString(10);
  });
}

function getRGBAObjFromHex(str) {
  return {
    r: +parseInt(str.slice(1, 3), 16).toString(10),
    g: +parseInt(str.slice(3, 5), 16).toString(10),
    b: +parseInt(str.slice(5), 16).toString(10),
    a: 255
  };
}

function colorMatch(a, b) {
  return a.r === b.r && a.g === b.g && a.b === b.b && a.a === b.a;
}

function getShortcutsText(keys) {
  var arr = [];

  for (var i = 0; i < keys.length; i += 1) {
    arr.push(keys[i].textContent);
  }

  return arr.join();
}

function setShortcutsText(string, keys) {
  var arr = string.split(',');

  for (var i = 0; i < keys.length; i += 1) {
    keys[i].innerText = arr[i];
  }
}


// CONCATENATED MODULE: ./src/components/modal-dialog/keyboard-codes.js
var keyCodes = {
  Q: 'KeyQ',
  W: 'KeyW',
  E: 'KeyE',
  R: 'KeyR',
  T: 'KeyT',
  Y: 'KeyY',
  U: 'KeyU',
  I: 'KeyI',
  O: 'KeyO',
  P: 'KeyP',
  '[': 'BracketLeft',
  ']': 'BracketRight',
  A: 'KeyA',
  S: 'KeyS',
  D: 'KeyD',
  F: 'KeyF',
  G: 'KeyG',
  H: 'KeyH',
  J: 'KeyJ',
  K: 'KeyK',
  L: 'KeyL',
  Z: 'KeyZ',
  X: 'KeyX',
  C: 'KeyC',
  V: 'KeyV',
  B: 'KeyB',
  N: 'KeyN',
  M: 'KeyM',
  '<': 'Comma',
  '>': 'Period',
  '↑': 'ArrowUp',
  '↓': 'ArrowDown',
  '+': 'NumpadAdd',
  '-': 'NumpadSubtract'
};

function getKeyCodeFromText(str) {
  return keyCodes[str];
}

function getTextFromKeyCode(key) {
  var index = Object.values(keyCodes).indexOf(key);
  return Object.keys(keyCodes)[index];
}


// CONCATENATED MODULE: ./src/screens/canvas/index.js




function initCanvasTools() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var matrixInput = document.getElementById('matrixInput');
  var penBtn = document.getElementById('penTool');
  penBtn.classList.toggle('active_tool');
  var colorPickerBtn = document.getElementById('colorPickerTool');
  var paintBucketBtn = document.getElementById('paintBucketTool');
  var paintSamePixBtn = document.getElementById('paintSamePixTool');
  var eraserBtn = document.getElementById('eraserTool');
  var colorInputPrimary = document.getElementById('colorInputPrimary');
  var colorInputSecondary = document.getElementById('colorInputSecondary');
  var primaryColorEl = document.querySelector('.primary');
  var secondaryColorEl = document.querySelector('.secondary');
  var canvasOriginalSize = 600;
  var currentTool = 'pen';
  var matrixSize = 128;
  var painting = false;
  canvas.width = matrixSize;
  canvas.height = matrixSize;
  canvas.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  });

  function resizeMatrix(size) {
    var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    canvas.width = size;
    canvas.height = size;
    ctx.putImageData(imageData, 0, 0);
    var previewCanv = document.querySelector('.preview--canvas');
    previewCanv.width = size;
    previewCanv.height = size;
    var framesArr = document.querySelectorAll('.frame');

    for (var i = 0; i < framesArr.length; i += 1) {
      var frameData = framesArr[i].getContext('2d').getImageData(0, 0, framesArr[i].width, framesArr[i].height);
      framesArr[i].width = size;
      framesArr[i].height = size;
      framesArr[i].getContext('2d').putImageData(frameData, 0, 0);
    }
  }

  matrixInput.addEventListener('input', function () {
    matrixSize = 32 * Math.pow(2, matrixInput.value);
    localStorage.setItem('matrixSize', matrixSize);
    resizeMatrix(matrixSize);
  });
  var primaryColor = '#ff00ff';
  var secondaryColor = '#0000ff';

  function updateColorEl(elem, color) {
    elem.style.background = color;
  }

  function initColors() {
    colorInputPrimary.value = primaryColor;
    colorInputPrimary.addEventListener('input', function (e) {
      primaryColor = e.target.value;
      localStorage.setItem('primColor', primaryColor);
      updateColorEl(primaryColorEl, primaryColor);
    });
    colorInputPrimary.select();
    colorInputSecondary.value = secondaryColor;
    colorInputSecondary.addEventListener('input', function (e) {
      secondaryColor = e.target.value;
      localStorage.setItem('secColor', secondaryColor);
      updateColorEl(secondaryColorEl, secondaryColor);
    });
    colorInputSecondary.select();
  }

  function pickColour(event) {
    var x = event.layerX / (canvasOriginalSize / matrixSize);
    var y = event.layerY / (canvasOriginalSize / matrixSize);
    var pixel = ctx.getImageData(x, y, 1, 1);

    var rgba = toConsumableArray_default()(pixel.data);

    if (rgba[3] === 0) {
      rgba = [255, 255, 255, 255];
    }

    return getHexFromRGBA(rgba);
  }

  colorPickerBtn.addEventListener('click', function () {
    currentTool = 'color-picker';
    document.querySelector('.active_tool').classList.remove('active_tool');
    colorPickerBtn.classList.toggle('active_tool');
  });
  canvas.addEventListener('mousedown', function (e) {
    if (currentTool === 'color-picker') {
      if (e.buttons === 2) {
        secondaryColor = pickColour(e);
        localStorage.setItem('secColor', secondaryColor);
        updateColorEl(secondaryColorEl, secondaryColor);
      } else {
        primaryColor = pickColour(e);
        localStorage.setItem('primColor', primaryColor);
        updateColorEl(primaryColorEl, primaryColor);
      }
    }
  });
  var lineThickness = 1;

  function initPenSize() {
    if (document.querySelector('.active_size')) {
      document.querySelector('.active_size').classList.remove('active_size');
    }

    document.querySelector(".size".concat(lineThickness)).parentElement.classList.toggle('active_size');
  }

  document.querySelector('.tools_panel--pen_size--wrapper').addEventListener('click', function (e) {
    if (e.target.className === 'tools_panel--pen_size--container') {
      lineThickness = Number(e.target.firstElementChild.className.slice(-1));
      localStorage.setItem('penSize', lineThickness);
      initPenSize();
    } else if (e.target.classList.contains('tools_panel--pen_size--square')) {
      lineThickness = Number(e.target.className.slice(-1));
      localStorage.setItem('penSize', lineThickness);
      initPenSize();
    }
  });
  var lastX = 0;
  var lastY = 0;
  canvas.width = matrixSize;
  canvas.height = matrixSize;

  function draw(e) {
    if (!painting) {
      return;
    }

    if (currentTool === 'color-picker' || currentTool === 'paint-same-pix' || currentTool === 'paint-bucket') return;
    ctx.globalCompositeOperation = 'source-over';

    if (currentTool === 'eraser') {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fill();
    }

    var mouseX = e.pageX - canvas.offsetLeft;
    var mouseY = e.pageY - canvas.offsetTop;
    var x1 = mouseX;
    var x2 = lastX;
    var y1 = mouseY;
    var y2 = lastY;
    var steep = Math.abs(y2 - y1) > Math.abs(x2 - x1);

    if (steep) {
      var x = x1;
      x1 = y1;
      y1 = x;
      var _y = y2;
      y2 = x2;
      x2 = _y;
    }

    if (x1 > x2) {
      var _x = x1;
      x1 = x2;
      x2 = _x;
      var _y2 = y1;
      y1 = y2;
      y2 = _y2;
    }

    var dx = x2 - x1;
    var dy = Math.abs(y2 - y1);
    var error = 0;
    var de = dy / dx;
    var yStep = -1;
    var y = y1;

    if (y1 < y2) {
      yStep = 1;
    }

    for (var _x2 = x1; _x2 < x2; _x2 += 1) {
      if (steep) {
        ctx.fillRect(Math.floor(y / (canvasOriginalSize / matrixSize)), Math.floor(_x2 / (canvasOriginalSize / matrixSize)), lineThickness, lineThickness);
      } else {
        ctx.fillRect(Math.floor(_x2 / (canvasOriginalSize / matrixSize)), Math.floor(y / (canvasOriginalSize / matrixSize)), lineThickness, lineThickness);
      }

      error += de;

      if (error >= 0.5) {
        y += yStep;
        error -= 1.0;
      }
    }

    lastX = mouseX;
    lastY = mouseY;
  }

  function drawPixel(e) {
    if (currentTool === 'color-picker' || currentTool === 'paint-same-pix' || currentTool === 'paint-bucket') return;
    lastX = e.pageX - canvas.offsetLeft;
    lastY = e.pageY - canvas.offsetTop;
    ctx.fillRect(Math.floor(lastX / (canvasOriginalSize / matrixSize)), Math.floor(lastY / (canvasOriginalSize / matrixSize)), lineThickness, lineThickness);

    if (currentTool === 'eraser') {
      ctx.fill();
    } else {
      ctx.globalCompositeOperation = 'source-over';
    }
  }

  var penMouseDownAction = function penMouseDownAction(e) {
    if (currentTool !== 'pen') return;
    painting = true;
    ctx.fillStyle = primaryColor;

    if (e.buttons === 2) {
      ctx.fillStyle = secondaryColor;
    }

    drawPixel(e);
  };

  function penToolAction() {
    if (currentTool === 'pen') {
      canvas.addEventListener('mousedown', penMouseDownAction);
      canvas.addEventListener('mousemove', draw);
      canvas.addEventListener('mouseup', function () {
        painting = false;
      });
      canvas.addEventListener('mouseout', function () {
        painting = false;
      });
    }
  }

  penBtn.addEventListener('click', function () {
    currentTool = 'pen';
    document.querySelector('.active_tool').classList.remove('active_tool');
    penBtn.classList.toggle('active_tool');
    penToolAction();
  });

  function initEraser() {
    if (currentTool === 'eraser') {
      canvas.addEventListener('mousedown', function (e) {
        drawPixel(e);
        painting = true;
      });
      canvas.addEventListener('mousemove', draw);
    }
  }

  eraserBtn.addEventListener('click', function () {
    currentTool = 'eraser';
    ctx.globalCompositeOperation = 'destination-out';
    document.querySelector('.active_tool').classList.remove('active_tool');
    eraserBtn.classList.toggle('active_tool');
    initEraser();
  });

  function getColorAtPixel(imageData, x, y) {
    var width = imageData.width,
        data = imageData.data;
    return {
      r: data[4 * (width * y + x) + 0],
      g: data[4 * (width * y + x) + 1],
      b: data[4 * (width * y + x) + 2],
      a: data[4 * (width * y + x) + 3]
    };
  }

  function setColorAtPixel(imageData, color, x, y) {
    var width = imageData.width,
        data = imageData.data;
    data[4 * (width * y + x) + 0] = color.r;
    data[4 * (width * y + x) + 1] = color.g;
    data[4 * (width * y + x) + 2] = color.b;
    data[4 * (width * y + x) + 3] = color.a;
  }

  function floodFill(imageData, newColor, x, y) {
    if (currentTool !== 'paint-bucket') return;
    var width = imageData.width,
        height = imageData.height;
    var stack = [];
    var baseColor = getColorAtPixel(imageData, x, y);
    var operator = {
      x: x,
      y: y
    }; // Check if base color and new color are the same

    if (colorMatch(baseColor, newColor)) {
      return;
    }

    stack.push({
      x: operator.x,
      y: operator.y
    }); // Add the clicked location to stack

    while (stack.length) {
      operator = stack.pop();
      var contiguousDown = true; // Vertical is assumed to be true

      var contiguousUp = true; // Vertical is assumed to be true

      var contiguousLeft = false;
      var contiguousRight = false;

      while (contiguousUp && operator.y >= 0) {
        // Move to top most contiguousDown pixel
        operator.y -= 1;
        contiguousUp = colorMatch(getColorAtPixel(imageData, operator.x, operator.y), baseColor);
      }

      while (contiguousDown && operator.y < height) {
        // Move downward
        setColorAtPixel(imageData, newColor, operator.x, operator.y);

        if (operator.x - 1 >= 0 // Check left
        && colorMatch(getColorAtPixel(imageData, operator.x - 1, operator.y), baseColor)) {
          if (!contiguousLeft) {
            contiguousLeft = true;
            stack.push({
              x: operator.x - 1,
              y: operator.y
            });
          }
        } else {
          contiguousLeft = false;
        }

        if (operator.x + 1 < width // Check right
        && colorMatch(getColorAtPixel(imageData, operator.x + 1, operator.y), baseColor)) {
          if (!contiguousRight) {
            stack.push({
              x: operator.x + 1,
              y: operator.y
            });
            contiguousRight = true;
          }
        } else {
          contiguousRight = false;
        }

        operator.y += 1;
        contiguousDown = colorMatch(getColorAtPixel(imageData, operator.x, operator.y), baseColor);
      }
    }
  }

  canvas.addEventListener('mousedown', function (event) {
    var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var rect = canvas.getBoundingClientRect();
    var x = Math.floor((event.clientX - rect.left) / (canvasOriginalSize / matrixSize));
    var y = Math.floor((event.clientY - rect.top) / (canvasOriginalSize / matrixSize));

    if (event.buttons === 2) {
      floodFill(imageData, getRGBAObjFromHex(secondaryColor), x, y);
    } else {
      floodFill(imageData, getRGBAObjFromHex(primaryColor), x, y);
    }

    ctx.putImageData(imageData, 0, 0);
  });
  paintBucketBtn.addEventListener('click', function () {
    currentTool = 'paint-bucket';
    document.querySelector('.active_tool').classList.remove('active_tool');
    paintBucketBtn.classList.toggle('active_tool');
  });

  function initSamePixelPainter(event) {
    if (currentTool !== 'paint-same-pix') return;
    var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var data = imageData.data;
    var x = event.layerX / (canvasOriginalSize / matrixSize);
    var y = event.layerY / (canvasOriginalSize / matrixSize);
    var pixel = ctx.getImageData(x, y, 1, 1);

    var rgba = toConsumableArray_default()(pixel.data);

    var primaryArr = getRGBArrFromHex(primaryColor);
    var secondaryArr = getRGBArrFromHex(secondaryColor);

    for (var i = 0; i < data.length; i += 4) {
      if (data[i] === rgba[0] && data[i + 1] === rgba[1] && data[i + 2] === rgba[2]) {
        if (event.buttons === 2) {
          data[i] = secondaryArr[0]; // red

          data[i + 1] = secondaryArr[1]; // green

          data[i + 2] = secondaryArr[2]; // blue
        } else {
          data[i] = primaryArr[0];
          data[i + 1] = primaryArr[1];
          data[i + 2] = primaryArr[2];
        }
      }
    }

    ctx.putImageData(imageData, 0, 0);
  }

  paintSamePixBtn.addEventListener('click', function () {
    currentTool = 'paint-same-pix';
    document.querySelector('.active_tool').classList.remove('active_tool');
    paintSamePixBtn.classList.toggle('active_tool');
  });
  canvas.addEventListener('mousedown', initSamePixelPainter);

  function penKeyAction() {
    currentTool = 'pen';
    document.querySelector('.active_tool').classList.remove('active_tool');
    penBtn.classList.toggle('active_tool');
    penToolAction();
  }

  function paintBucketKeyAction() {
    currentTool = 'paint-bucket';
    document.querySelector('.active_tool').classList.remove('active_tool');
    paintBucketBtn.classList.toggle('active_tool');
  }

  function colorPickerKeyAction() {
    currentTool = 'color-picker';
    document.querySelector('.active_tool').classList.remove('active_tool');
    colorPickerBtn.classList.toggle('active_tool');
  }

  function magicPaintKeyAction() {
    currentTool = 'paint-same-pix';
    document.querySelector('.active_tool').classList.remove('active_tool');
    paintSamePixBtn.classList.toggle('active_tool');
  }

  function eraserKeyAction() {
    currentTool = 'eraser';
    ctx.globalCompositeOperation = 'destination-out';
    document.querySelector('.active_tool').classList.remove('active_tool');
    eraserBtn.classList.toggle('active_tool');
    initEraser();
  }

  function increasePenSizeKeyAction() {
    if (lineThickness >= 4) {
      lineThickness = 1;
      localStorage.setItem('penSize', lineThickness);
      initPenSize();
    } else {
      lineThickness += 1;
      localStorage.setItem('penSize', lineThickness);
      initPenSize();
    }
  }

  function decreasePenSizeKeyAction() {
    if (lineThickness <= 1) {
      lineThickness = 4;
      localStorage.setItem('penSize', lineThickness);
      initPenSize();
    } else {
      lineThickness -= 1;
      localStorage.setItem('penSize', lineThickness);
      initPenSize();
    }
  }

  function addKey(e, id, action) {
    var addKeyText = document.getElementById(id).innerText;
    if (document.querySelector('.modal--window').style.display === 'block') return;
    if (addKeyText === '?') return;

    if (addKeyText.startsWith('Ctrl')) {
      if (e.ctrlKey) {
        if (e.code === getKeyCodeFromText(addKeyText.slice(-1))) {
          e.preventDefault();
          action();
        }
      }
    } else if (addKeyText.startsWith('Shift')) {
      if (e.shiftKey) {
        if (e.code === getKeyCodeFromText(addKeyText.slice(-1))) {
          e.preventDefault();
          action();
        }
      }
    } else if (addKeyText.startsWith('Alt')) {
      if (e.altKey) {
        if (e.code === getKeyCodeFromText(addKeyText.slice(-1))) {
          e.preventDefault();
          action();
        }
      }
    } else if (e.code === getKeyCodeFromText(addKeyText)) {
      if (e.ctrlKey || e.shiftKey || e.altKey) return;
      action();
    }
  }

  document.addEventListener('keydown', function (event) {
    addKey(event, 'penKey', penKeyAction);
    addKey(event, 'pickerKey', colorPickerKeyAction);
    addKey(event, 'paintBucketKey', paintBucketKeyAction);
    addKey(event, 'magicPaintKey', magicPaintKeyAction);
    addKey(event, 'eraserKey', eraserKeyAction);
    addKey(event, 'penSizeIncreaseKey', increasePenSizeKeyAction);
    addKey(event, 'penSizeDecreaseKey', decreasePenSizeKeyAction);
  });
  document.querySelector('#createSprite').addEventListener('click', function () {
    window.open(document.location.href);
  });
  window.addEventListener('load', function () {
    if (localStorage.getItem('penSize')) {
      lineThickness = Number(localStorage.getItem('penSize'));
    }

    if (localStorage.getItem('matrixSize')) {
      matrixSize = localStorage.getItem('matrixSize');
      matrixInput.value = Math.log2(matrixSize / 32);
      resizeMatrix(matrixSize);
    }

    if (localStorage.getItem('primColor')) {
      primaryColor = localStorage.getItem('primColor');
    }

    if (localStorage.getItem('secColor')) {
      secondaryColor = localStorage.getItem('secColor');
    }

    initPenSize();
    initColors();
    penToolAction();
    updateColorEl(primaryColorEl, primaryColor);
    updateColorEl(secondaryColorEl, secondaryColor);
  });
}
// EXTERNAL MODULE: ./src/components/frames-list/frames-style.css
var frames_style = __webpack_require__(6);

// CONCATENATED MODULE: ./src/components/frames-list/frames.js


function initFrames() {
  var framesWrapper = document.createElement('div');
  framesWrapper.className = 'frames_wrapper';
  document.querySelector('.main').appendChild(framesWrapper);
  var framesContainer = document.createElement('div');
  framesContainer.id = 'sortable';
  framesWrapper.appendChild(framesContainer); // eslint-disable-next-line no-undef

  $('#sortable').sortable({
    placeholder: 'sortable_placeholder',
    axis: 'y'
  });
  var addBtn = document.createElement('div');
  addBtn.innerHTML = '<i class="fas fa-plus"></i><p>Add new frame</p>';
  addBtn.className = 'add_button';
  framesWrapper.appendChild(addBtn);
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var imageData;

  function drawActiveFrame() {
    var active = document.querySelector('.active_frame');
    imageData = active.getContext('2d').getImageData(0, 0, active.width, active.height);
    ctx.putImageData(imageData, 0, 0);
  }

  var duplicate = false;

  function addFrame() {
    var frameCont = document.createElement('div');
    frameCont.className = 'frame_cont';

    if (!duplicate) {
      framesContainer.appendChild(frameCont);
    } else {
      framesContainer.insertBefore(frameCont, document.querySelector('.current').closest('.frame_cont').nextSibling);
    }

    var duplicateBtn = document.createElement('button');
    duplicateBtn.className = 'frame_button duplicate';
    duplicateBtn.innerHTML = '<i class="fas fa-copy"></i>';
    frameCont.appendChild(duplicateBtn);
    var duplicateFrameHint = document.createElement('span');
    duplicateFrameHint.className = 'hint frame-button';
    duplicateFrameHint.innerText = 'Duplicate this frame';
    duplicateBtn.appendChild(duplicateFrameHint);
    duplicateBtn.addEventListener('mouseover', function () {
      duplicateFrameHint.style.display = 'inline';
    });
    duplicateBtn.addEventListener('mouseout', function () {
      duplicateFrameHint.style.display = 'none';
    });
    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'frame_button delete';
    deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    frameCont.appendChild(deleteBtn);
    var deleteFrameHint = document.createElement('span');
    deleteFrameHint.className = 'hint frame-button';
    deleteFrameHint.innerText = 'Delete this frame';
    deleteBtn.appendChild(deleteFrameHint);
    deleteBtn.addEventListener('mouseover', function () {
      deleteFrameHint.style.display = 'inline';
    });
    deleteBtn.addEventListener('mouseout', function () {
      deleteFrameHint.style.display = 'none';
    });

    if (document.querySelectorAll('.frame').length > 0) {
      deleteBtn.style.display = 'inline';
    } else {
      deleteBtn.style.display = 'none';
    }

    duplicateBtn.addEventListener('click', function () {
      duplicate = true;

      if (document.querySelector('.current')) {
        document.querySelector('.current').classList.remove('current');
      }

      duplicateBtn.classList.toggle('current');
      document.querySelector('.active_frame_cont').classList.remove('active_frame_cont');
      document.querySelector('.active_frame').classList.remove('active_frame');
      document.querySelector('.delete').style.display = 'inline';
      var sourceCanvas = duplicateBtn.closest('.frame_cont').lastChild;
      imageData = sourceCanvas.getContext('2d').getImageData(0, 0, sourceCanvas.width, sourceCanvas.height);
      addFrame();
      var targetCanvas = document.querySelector('.current').closest('.frame_cont').nextSibling.lastChild;
      targetCanvas.getContext('2d').putImageData(imageData, 0, 0);
      drawActiveFrame();
    });
    deleteBtn.addEventListener('click', function () {
      if (deleteBtn.closest('.frame_cont').classList.contains('active_frame_cont')) {
        if (!deleteBtn.closest('.frame_cont').previousSibling) {
          deleteBtn.closest('.frame_cont').nextSibling.classList.toggle('active_frame_cont');
          deleteBtn.closest('.frame_cont').nextSibling.lastChild.classList.toggle('active_frame');
          framesContainer.removeChild(deleteBtn.closest('.frame_cont'));
          drawActiveFrame();
        } else {
          deleteBtn.closest('.frame_cont').previousSibling.classList.toggle('active_frame_cont');
          deleteBtn.closest('.frame_cont').previousSibling.lastChild.classList.toggle('active_frame');
          framesContainer.removeChild(deleteBtn.closest('.frame_cont'));
          drawActiveFrame();
        }
      } else {
        framesContainer.removeChild(deleteBtn.closest('.frame_cont'));
      }

      if (document.querySelectorAll('.delete').length === 1) {
        document.querySelector('.delete').style.display = 'none';
      }
    });

    if (!document.querySelector('.active_frame_cont')) {
      frameCont.classList.toggle('active_frame_cont');
    }

    var frame = document.createElement('canvas');
    frame.className = 'frame';

    if (!document.querySelector('.active_frame')) {
      frame.classList.toggle('active_frame');
    }

    frameCont.appendChild(frame);
    frame.addEventListener('mousedown', function () {
      frame.style.cursor = 'move';
    });
    frame.addEventListener('mouseup', function () {
      frame.style.cursor = 'initial';
    });
    frame.width = canvas.width;
    frame.height = canvas.height;
  }

  addFrame();
  framesContainer.addEventListener('mousedown', function (e) {
    if (e.target.className === 'frame') {
      document.querySelector('.active_frame_cont').classList.remove('active_frame_cont');
      document.querySelector('.active_frame').classList.remove('active_frame');
      e.target.classList.toggle('active_frame');
      e.target.parentNode.classList.toggle('active_frame_cont');
      drawActiveFrame();
    }
  });
  addBtn.addEventListener('click', function () {
    duplicate = false;
    document.querySelector('.active_frame_cont').classList.remove('active_frame_cont');
    document.querySelector('.active_frame').classList.remove('active_frame');
    addFrame();
    document.querySelector('.delete').style.display = 'inline';
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });
  canvas.addEventListener('mouseup', function () {
    imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    document.querySelector('.active_frame').getContext('2d').putImageData(imageData, 0, 0);
  });

  function newFrameKeyAction() {
    var activeFrameCont = document.querySelector('.active_frame_cont');
    duplicate = false;
    activeFrameCont.classList.remove('active_frame_cont');
    document.querySelector('.active_frame').classList.remove('active_frame');
    addFrame();
    document.querySelector('.delete').style.display = 'inline';
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  function duplicateFrameKeyAction() {
    var activeFrameCont = document.querySelector('.active_frame_cont');

    if (document.querySelector('.current')) {
      document.querySelector('.current').classList.remove('current');
    }

    activeFrameCont.firstChild.firstChild.classList.toggle('current');
    duplicate = true;
    document.querySelector('.active_frame_cont').classList.remove('active_frame_cont');
    document.querySelector('.active_frame').classList.remove('active_frame');
    document.querySelector('.delete').style.display = 'inline';
    var sourceCanvas = document.querySelector('.current').closest('.frame_cont').lastChild;
    imageData = sourceCanvas.getContext('2d').getImageData(0, 0, sourceCanvas.width, sourceCanvas.height);
    addFrame();
    var targetCanvas = document.querySelector('.current').closest('.frame_cont').nextSibling.lastChild;
    targetCanvas.getContext('2d').putImageData(imageData, 0, 0);
    drawActiveFrame();
  }

  function deleteKeyAction() {
    var activeFrameCont = document.querySelector('.active_frame_cont');

    if (document.querySelectorAll('.frame_cont').length === 1) {
      return;
    }

    if (!activeFrameCont.previousSibling) {
      activeFrameCont.nextSibling.classList.toggle('active_frame_cont');
      activeFrameCont.nextSibling.lastChild.classList.toggle('active_frame');
      framesContainer.removeChild(activeFrameCont);
      drawActiveFrame();
    } else {
      activeFrameCont.previousSibling.classList.toggle('active_frame_cont');
      activeFrameCont.previousSibling.lastChild.classList.toggle('active_frame');
      framesContainer.removeChild(activeFrameCont);
      drawActiveFrame();
    }

    if (document.querySelectorAll('.delete').length === 1) {
      document.querySelector('.delete').style.display = 'none';
    }
  }

  function selectPrevFrameKeyAction() {
    var activeFrameCont = document.querySelector('.active_frame_cont');
    var prevFrameCont = activeFrameCont.previousSibling;
    if (!prevFrameCont) return;
    activeFrameCont.classList.remove('active_frame_cont');
    document.querySelector('.active_frame').classList.remove('active_frame');
    prevFrameCont.lastChild.classList.toggle('active_frame');
    prevFrameCont.classList.toggle('active_frame_cont');
    drawActiveFrame();
  }

  function selectNextFrameKeyAction() {
    var activeFrameCont = document.querySelector('.active_frame_cont');
    var nextFrameCont = activeFrameCont.nextSibling;
    if (!nextFrameCont) return;
    activeFrameCont.classList.remove('active_frame_cont');
    document.querySelector('.active_frame').classList.remove('active_frame');
    nextFrameCont.lastChild.classList.toggle('active_frame');
    nextFrameCont.classList.toggle('active_frame_cont');
    drawActiveFrame();
  }

  function addKey(e, id, action) {
    var keyElementText = document.getElementById(id).innerText;
    if (document.querySelector('.modal--window').style.display === 'block') return;
    if (keyElementText === '?') return;

    if (keyElementText.startsWith('Ctrl')) {
      if (e.ctrlKey) {
        if (e.code === getKeyCodeFromText(keyElementText.slice(-1))) {
          e.preventDefault();
          action();
        }
      }
    } else if (keyElementText.startsWith('Shift')) {
      if (e.shiftKey) {
        if (e.code === getKeyCodeFromText(keyElementText.slice(-1))) {
          e.preventDefault();
          action();
        }
      }
    } else if (keyElementText.startsWith('Alt')) {
      if (e.altKey) {
        if (e.code === getKeyCodeFromText(keyElementText.slice(-1))) {
          e.preventDefault();
          action();
        }
      }
    } else if (e.code === getKeyCodeFromText(keyElementText)) {
      if (e.ctrlKey || e.shiftKey || e.altKey) return;
      action();
    }
  }

  document.addEventListener('keydown', function (event) {
    addKey(event, 'newFrameKey', newFrameKeyAction);
    addKey(event, 'duplicateFrameKey', duplicateFrameKeyAction);
    addKey(event, 'previousFrameKey', selectPrevFrameKeyAction);
    addKey(event, 'nextFrameKey', selectNextFrameKeyAction);

    if (event.code === 'Delete') {
      deleteKeyAction();
    }
  });
}
// EXTERNAL MODULE: ./src/screens/preview/preview-style.css
var preview_style = __webpack_require__(7);

// CONCATENATED MODULE: ./src/screens/preview/preview.js


function initPreview() {
  var previewContainer = document.createElement('div');
  previewContainer.className = 'preview--container';
  document.querySelector('.main').appendChild(previewContainer);
  var canvas = document.querySelector('.canvas');
  var previewCanvas = document.createElement('canvas');
  var previewCtx = previewCanvas.getContext('2d');
  previewCanvas.className = 'preview--canvas';
  previewContainer.appendChild(previewCanvas);
  var fullScreenBtn = document.createElement('button');
  fullScreenBtn.className = 'full_screen';
  fullScreenBtn.innerHTML = '<i class="fas fa-expand"></i>';
  previewContainer.appendChild(fullScreenBtn);
  previewCanvas.width = canvas.width;
  previewCanvas.height = canvas.height;
  var fpsCont = document.createElement('div');
  fpsCont.className = 'fps_range--container';
  previewContainer.appendChild(fpsCont);
  var fpsRangeEl = document.createElement('input');
  fpsRangeEl.className = 'fps_range--input';
  fpsRangeEl.type = 'range';
  fpsRangeEl.min = 1;
  fpsRangeEl.max = 24;
  fpsRangeEl.step = 1;
  fpsRangeEl.value = 12;
  var fpsRangeTextEl = document.createElement('span');
  fpsRangeTextEl.className = 'fps_range--text';
  fpsRangeTextEl.textContent = "".concat(fpsRangeEl.value, " fps");
  fpsCont.appendChild(fpsRangeTextEl);
  fpsCont.appendChild(fpsRangeEl);

  function drawFrame(n) {
    var framesArr = document.querySelectorAll('.frame');
    var imageData = framesArr[n].getContext('2d').getImageData(0, 0, framesArr[n].width, framesArr[n].height);
    previewCtx.putImageData(imageData, 0, 0);
  }

  var n = 0;
  var interval = setInterval(function () {
    previewCtx.clearRect(0, 0, previewCanvas.width, previewCanvas.height);
    drawFrame(n % document.querySelectorAll('.frame').length);
    n += 1;
  }, 1000 / fpsRangeEl.value);
  fpsRangeEl.addEventListener('input', function () {
    fpsRangeTextEl.textContent = "".concat(fpsRangeEl.value, " fps");
    clearInterval(interval);
    interval = setInterval(function () {
      previewCtx.clearRect(0, 0, previewCanvas.width, previewCanvas.height);
      drawFrame(n % document.querySelectorAll('.frame').length);
      n += 1;
    }, 1000 / fpsRangeEl.value);
  });

  function toggleFullScreen() {
    if (!document.fullscreen) {
      previewCanvas.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }

  fullScreenBtn.addEventListener('click', toggleFullScreen);

  function addKey(e) {
    var addKeyText = document.getElementById('fullScreenKey').innerText;
    if (document.querySelector('.modal--window').style.display === 'block') return;
    if (addKeyText === '?') return;

    if (addKeyText.startsWith('Ctrl')) {
      if (e.ctrlKey) {
        if (e.code === getKeyCodeFromText(addKeyText.slice(-1))) {
          e.preventDefault();
          toggleFullScreen();
        }
      }
    } else if (addKeyText.startsWith('Shift')) {
      if (e.shiftKey) {
        if (e.code === getKeyCodeFromText(addKeyText.slice(-1))) {
          e.preventDefault();
          toggleFullScreen();
        }
      }
    } else if (addKeyText.startsWith('Alt')) {
      if (e.altKey) {
        if (e.code === getKeyCodeFromText(addKeyText.slice(-1))) {
          e.preventDefault();
          toggleFullScreen();
        }
      }
    } else if (e.code === getKeyCodeFromText(addKeyText)) {
      if (e.ctrlKey || e.shiftKey || e.altKey) return;
      toggleFullScreen();
    }
  }

  document.addEventListener('keydown', addKey);
}
// EXTERNAL MODULE: ./src/screens/export/export-style.css
var export_style = __webpack_require__(8);

// CONCATENATED MODULE: ./src/screens/export/LZWEncoder.js
/**
 * This class handles LZW encoding
 * Adapted from Jef Poskanzer's Java port by way of J. M. G. Elliott.
 * @author Kevin Weiner (original Java version - kweiner@fmsware.com)
 * @author Thibault Imbert (AS3 version - bytearray.org)
 * @author Kevin Kwok (JavaScript version - https://github.com/antimatter15/jsgif)
 * @version 0.1 AS3 implementation
 */
function LZWEncoder() {
  var exports = {};
  var EOF = -1;
  var imgW;
  var imgH;
  var pixAry;
  var initCodeSize;
  var remaining;
  var curPixel; // GIFCOMPR.C - GIF Image compression routines
  // Lempel-Ziv compression based on 'compress'. GIF modifications by
  // David Rowley (mgardi@watdcsu.waterloo.edu)
  // General DEFINEs

  var BITS = 12;
  var HSIZE = 5003; // 80% occupancy
  // GIF Image compression - modified 'compress'
  // Based on: compress.c - File compression ala IEEE Computer, June 1984.
  // By Authors: Spencer W. Thomas (decvax!harpo!utah-cs!utah-gr!thomas)
  // Jim McKie (decvax!mcvax!jim)
  // Steve Davies (decvax!vax135!petsd!peora!srd)
  // Ken Turkowski (decvax!decwrl!turtlevax!ken)
  // James A. Woods (decvax!ihnp4!ames!jaw)
  // Joe Orost (decvax!vax135!petsd!joe)

  var n_bits; // number of bits/code

  var maxbits = BITS; // user settable max # bits/code

  var maxcode; // maximum code, given n_bits

  var maxmaxcode = 1 << BITS; // should NEVER generate this code

  var htab = [];
  var codetab = [];
  var hsize = HSIZE; // for dynamic table sizing

  var free_ent = 0; // first unused entry
  // block compression parameters -- after all codes are used up,
  // and compression rate changes, start over.

  var clear_flg = false; // Algorithm: use open addressing double hashing (no chaining) on the
  // prefix code / next character combination. We do a variant of Knuth's
  // algorithm D (vol. 3, sec. 6.4) along with G. Knott's relatively-prime
  // secondary probe. Here, the modular division first probe is gives way
  // to a faster exclusive-or manipulation. Also do block compression with
  // an adaptive reset, whereby the code table is cleared when the compression
  // ratio decreases, but after the table fills. The variable-length output
  // codes are re-sized at this point, and a special CLEAR code is generated
  // for the decompressor. Late addition: construct the table according to
  // file size for noticeable speed improvement on small files. Please direct
  // questions about this implementation to ames!jaw.

  var g_init_bits;
  var ClearCode;
  var EOFCode; // output
  // Output the given code.
  // Inputs:
  // code: A n_bits-bit integer. If == -1, then EOF. This assumes
  // that n_bits =< wordsize - 1.
  // Outputs:
  // Outputs code to the file.
  // Assumptions:
  // Chars are 8 bits long.
  // Algorithm:
  // Maintain a BITS character long buffer (so that 8 codes will
  // fit in it exactly). Use the VAX insv instruction to insert each
  // code in turn. When the buffer fills up empty it and start over.

  var cur_accum = 0;
  var cur_bits = 0;
  var masks = [0x0000, 0x0001, 0x0003, 0x0007, 0x000F, 0x001F, 0x003F, 0x007F, 0x00FF, 0x01FF, 0x03FF, 0x07FF, 0x0FFF, 0x1FFF, 0x3FFF, 0x7FFF, 0xFFFF]; // Number of characters so far in this 'packet'

  var a_count; // Define the storage for the packet accumulator

  var accum = [];

  var LZWEncoder = exports.LZWEncoder = function LZWEncoder(width, height, pixels, color_depth) {
    imgW = width;
    imgH = height;
    pixAry = pixels;
    initCodeSize = Math.max(2, color_depth);
  }; // Add a character to the end of the current packet, and if it is 254
  // characters, flush the packet to disk.


  var char_out = function char_out(c, outs) {
    accum[a_count++] = c;
    if (a_count >= 254) flush_char(outs);
  }; // Clear out the hash table
  // table clear for block compress


  var cl_block = function cl_block(outs) {
    cl_hash(hsize);
    free_ent = ClearCode + 2;
    clear_flg = true;
    output(ClearCode, outs);
  }; // reset code table


  var cl_hash = function cl_hash(hsize) {
    for (var i = 0; i < hsize; ++i) {
      htab[i] = -1;
    }
  };

  var compress = exports.compress = function compress(init_bits, outs) {
    var fcode;
    var i;
    /* = 0 */

    var c;
    var ent;
    var disp;
    var hsize_reg;
    var hshift; // Set up the globals: g_init_bits - initial number of bits

    g_init_bits = init_bits; // Set up the necessary values

    clear_flg = false;
    n_bits = g_init_bits;
    maxcode = MAXCODE(n_bits);
    ClearCode = 1 << init_bits - 1;
    EOFCode = ClearCode + 1;
    free_ent = ClearCode + 2;
    a_count = 0; // clear packet

    ent = nextPixel();
    hshift = 0;

    for (fcode = hsize; fcode < 65536; fcode *= 2) {
      ++hshift;
    }

    hshift = 8 - hshift; // set hash code range bound

    hsize_reg = hsize;
    cl_hash(hsize_reg); // clear hash table

    output(ClearCode, outs);

    outer_loop: while ((c = nextPixel()) != EOF) {
      fcode = (c << maxbits) + ent;
      i = c << hshift ^ ent; // xor hashing

      if (htab[i] == fcode) {
        ent = codetab[i];
        continue;
      } else if (htab[i] >= 0) {
        // non-empty slot
        disp = hsize_reg - i; // secondary hash (after G. Knott)

        if (i === 0) disp = 1;

        do {
          if ((i -= disp) < 0) i += hsize_reg;

          if (htab[i] == fcode) {
            ent = codetab[i];
            continue outer_loop;
          }
        } while (htab[i] >= 0);
      }

      output(ent, outs);
      ent = c;

      if (free_ent < maxmaxcode) {
        codetab[i] = free_ent++; // code -> hashtable

        htab[i] = fcode;
      } else cl_block(outs);
    } // Put out the final code.


    output(ent, outs);
    output(EOFCode, outs);
  }; // ----------------------------------------------------------------------------


  var encode = exports.encode = function encode(os) {
    os.writeByte(initCodeSize); // write "initial code size" byte

    remaining = imgW * imgH; // reset navigation variables

    curPixel = 0;
    compress(initCodeSize + 1, os); // compress and write the pixel data

    os.writeByte(0); // write block terminator
  }; // Flush the packet to disk, and reset the accumulator


  var flush_char = function flush_char(outs) {
    if (a_count > 0) {
      outs.writeByte(a_count);
      outs.writeBytes(accum, 0, a_count);
      a_count = 0;
    }
  };

  var MAXCODE = function MAXCODE(n_bits) {
    return (1 << n_bits) - 1;
  }; // ----------------------------------------------------------------------------
  // Return the next pixel from the image
  // ----------------------------------------------------------------------------


  var nextPixel = function nextPixel() {
    if (remaining === 0) return EOF;
    --remaining;
    var pix = pixAry[curPixel++];
    return pix & 0xff;
  };

  var output = function output(code, outs) {
    cur_accum &= masks[cur_bits];
    if (cur_bits > 0) cur_accum |= code << cur_bits;else cur_accum = code;
    cur_bits += n_bits;

    while (cur_bits >= 8) {
      char_out(cur_accum & 0xff, outs);
      cur_accum >>= 8;
      cur_bits -= 8;
    } // If the next entry is going to be too big for the code size,
    // then increase it, if possible.


    if (free_ent > maxcode || clear_flg) {
      if (clear_flg) {
        maxcode = MAXCODE(n_bits = g_init_bits);
        clear_flg = false;
      } else {
        ++n_bits;
        if (n_bits == maxbits) maxcode = maxmaxcode;else maxcode = MAXCODE(n_bits);
      }
    }

    if (code == EOFCode) {
      // At EOF, write the rest of the buffer.
      while (cur_bits > 0) {
        char_out(cur_accum & 0xff, outs);
        cur_accum >>= 8;
        cur_bits -= 8;
      }

      flush_char(outs);
    }
  };

  LZWEncoder.apply(this, arguments);
  return exports;
}
// CONCATENATED MODULE: ./src/screens/export/NeuQuant.js
/*
 * NeuQuant Neural-Net Quantization Algorithm
 * ------------------------------------------
 *
 * Copyright (c) 1994 Anthony Dekker
 *
 * NEUQUANT Neural-Net quantization algorithm by Anthony Dekker, 1994. See
 * "Kohonen neural networks for optimal colour quantization" in "Network:
 * Computation in Neural Systems" Vol. 5 (1994) pp 351-367. for a discussion of
 * the algorithm.
 *
 * Any party obtaining a copy of these files from the author, directly or
 * indirectly, is granted, free of charge, a full and unrestricted irrevocable,
 * world-wide, paid up, royalty-free, nonexclusive right and license to deal in
 * this software and documentation files (the "Software"), including without
 * limitation the rights to use, copy, modify, merge, publish, distribute,
 * sublicense, and/or sell copies of the Software, and to permit persons who
 * receive copies from any such party to do so, with the only requirement being
 * that this copyright notice remain intact.
 */

/*
 * This class handles Neural-Net quantization algorithm
 * @author Kevin Weiner (original Java version - kweiner@fmsware.com)
 * @author Thibault Imbert (AS3 version - bytearray.org)
 * @author Kevin Kwok (JavaScript version - https://github.com/antimatter15/jsgif)
 * @version 0.1 AS3 implementation
 */
function NeuQuant() {
  var exports = {};
  var netsize = 256;
  /* number of colours used */

  /* four primes near 500 - assume no image has a length so large */

  /* that it is divisible by all four primes */

  var prime1 = 499;
  var prime2 = 491;
  var prime3 = 487;
  var prime4 = 503;
  var minpicturebytes = 3 * prime4;
  /* minimum size for input image */

  /*
  * Program Skeleton ---------------- [select samplefac in range 1..30] [read
  * image from input file] pic = (unsigned char*) malloc(3*width*height);
  * initnet(pic,3*width*height,samplefac); learn(); unbiasnet(); [write output
  * image header, using writecolourmap(f)] inxbuild(); write output image using
  * inxsearch(b,g,r)
  */

  /*
  * Network Definitions -------------------
  */

  var maxnetpos = netsize - 1;
  var netbiasshift = 4;
  /* bias for colour values */

  var ncycles = 100;
  /* no. of learning cycles */

  /* defs for freq and bias */

  var intbiasshift = 16;
  /* bias for fractions */

  var intbias = 1 << intbiasshift;
  var gammashift = 10;
  /* gamma = 1024 */

  var gamma = 1 << gammashift;
  var betashift = 10;
  var beta = intbias >> betashift;
  /* beta = 1/1024 */

  var betagamma = intbias << gammashift - betashift;
  /* defs for decreasing radius factor */

  var initrad = netsize >> 3;
  /* for 256 cols, radius starts */

  var radiusbiasshift = 6;
  /* at 32.0 biased by 6 bits */

  var radiusbias = 1 << radiusbiasshift;
  var initradius = initrad * radiusbias;
  /* and decreases by a */

  var radiusdec = 30;
  /* factor of 1/30 each cycle */

  /* defs for decreasing alpha factor */

  var alphabiasshift = 10;
  /* alpha starts at 1.0 */

  var initalpha = 1 << alphabiasshift;
  var alphadec;
  /* biased by 10 bits */

  /* radbias and alpharadbias used for radpower calculation */

  var radbiasshift = 8;
  var radbias = 1 << radbiasshift;
  var alpharadbshift = alphabiasshift + radbiasshift;
  var alpharadbias = 1 << alpharadbshift;
  /*
  * Types and Global Variables --------------------------
  */

  var thepicture;
  /* the input image itself */

  var lengthcount;
  /* lengthcount = H*W*3 */

  var samplefac;
  /* sampling factor 1..30 */
  // typedef int pixel[4]; /* BGRc */

  var network;
  /* the network itself - [netsize][4] */

  var netindex = [];
  /* for network lookup - really 256 */

  var bias = [];
  /* bias and freq arrays for learning */

  var freq = [];
  var radpower = [];

  var NeuQuant = exports.NeuQuant = function NeuQuant(thepic, len, sample) {
    var i;
    var p;
    thepicture = thepic;
    lengthcount = len;
    samplefac = sample;
    network = new Array(netsize);

    for (i = 0; i < netsize; i++) {
      network[i] = new Array(4);
      p = network[i];
      p[0] = p[1] = p[2] = (i << netbiasshift + 8) / netsize;
      freq[i] = intbias / netsize;
      /* 1/netsize */

      bias[i] = 0;
    }
  };

  var colorMap = function colorMap() {
    var map = [];
    var index = new Array(netsize);

    for (var i = 0; i < netsize; i++) {
      index[network[i][3]] = i;
    }

    var k = 0;

    for (var l = 0; l < netsize; l++) {
      var j = index[l];
      map[k++] = network[j][0];
      map[k++] = network[j][1];
      map[k++] = network[j][2];
    }

    return map;
  };
  /*
  * Insertion sort of network and building of netindex[0..255] (to do after
  * unbias)
  * -------------------------------------------------------------------------------
  */


  var inxbuild = function inxbuild() {
    var i;
    var j;
    var smallpos;
    var smallval;
    var p;
    var q;
    var previouscol;
    var startpos;
    previouscol = 0;
    startpos = 0;

    for (i = 0; i < netsize; i++) {
      p = network[i];
      smallpos = i;
      smallval = p[1];
      /* index on g */

      /* find smallest in i..netsize-1 */

      for (j = i + 1; j < netsize; j++) {
        q = network[j];

        if (q[1] < smallval) {
          /* index on g */
          smallpos = j;
          smallval = q[1];
          /* index on g */
        }
      }

      q = network[smallpos];
      /* swap p (i) and q (smallpos) entries */

      if (i != smallpos) {
        j = q[0];
        q[0] = p[0];
        p[0] = j;
        j = q[1];
        q[1] = p[1];
        p[1] = j;
        j = q[2];
        q[2] = p[2];
        p[2] = j;
        j = q[3];
        q[3] = p[3];
        p[3] = j;
      }
      /* smallval entry is now in position i */


      if (smallval != previouscol) {
        netindex[previouscol] = startpos + i >> 1;

        for (j = previouscol + 1; j < smallval; j++) {
          netindex[j] = i;
        }

        previouscol = smallval;
        startpos = i;
      }
    }

    netindex[previouscol] = startpos + maxnetpos >> 1;

    for (j = previouscol + 1; j < 256; j++) {
      netindex[j] = maxnetpos;
    }
    /* really 256 */

  };
  /*
  * Main Learning Loop ------------------
  */


  var learn = function learn() {
    var i;
    var j;
    var b;
    var g;
    var r;
    var radius;
    var rad;
    var alpha;
    var step;
    var delta;
    var samplepixels;
    var p;
    var pix;
    var lim;
    if (lengthcount < minpicturebytes) samplefac = 1;
    alphadec = 30 + (samplefac - 1) / 3;
    p = thepicture;
    pix = 0;
    lim = lengthcount;
    samplepixels = lengthcount / (3 * samplefac);
    delta = samplepixels / ncycles | 0;
    alpha = initalpha;
    radius = initradius;
    rad = radius >> radiusbiasshift;
    if (rad <= 1) rad = 0;

    for (i = 0; i < rad; i++) {
      radpower[i] = alpha * ((rad * rad - i * i) * radbias / (rad * rad));
    }

    if (lengthcount < minpicturebytes) step = 3;else if (lengthcount % prime1 !== 0) step = 3 * prime1;else if (lengthcount % prime2 !== 0) step = 3 * prime2;else if (lengthcount % prime3 !== 0) step = 3 * prime3;else step = 3 * prime4;
    i = 0;

    while (i < samplepixels) {
      b = (p[pix + 0] & 0xff) << netbiasshift;
      g = (p[pix + 1] & 0xff) << netbiasshift;
      r = (p[pix + 2] & 0xff) << netbiasshift;
      j = contest(b, g, r);
      altersingle(alpha, j, b, g, r);
      if (rad !== 0) alterneigh(rad, j, b, g, r);
      /* alter neighbours */

      pix += step;
      if (pix >= lim) pix -= lengthcount;
      i++;
      if (delta === 0) delta = 1;

      if (i % delta === 0) {
        alpha -= alpha / alphadec;
        radius -= radius / radiusdec;
        rad = radius >> radiusbiasshift;
        if (rad <= 1) rad = 0;

        for (j = 0; j < rad; j++) {
          radpower[j] = alpha * ((rad * rad - j * j) * radbias / (rad * rad));
        }
      }
    }
  };
  /*
  ** Search for BGR values 0..255 (after net is unbiased) and return colour
  * index
  * ----------------------------------------------------------------------------
  */


  var map = exports.map = function map(b, g, r) {
    var i;
    var j;
    var dist;
    var a;
    var bestd;
    var p;
    var best;
    bestd = 1000;
    /* biggest possible dist is 256*3 */

    best = -1;
    i = netindex[g];
    /* index on g */

    j = i - 1;
    /* start at netindex[g] and work outwards */

    while (i < netsize || j >= 0) {
      if (i < netsize) {
        p = network[i];
        dist = p[1] - g;
        /* inx key */

        if (dist >= bestd) i = netsize;
        /* stop iter */
        else {
            i++;
            if (dist < 0) dist = -dist;
            a = p[0] - b;
            if (a < 0) a = -a;
            dist += a;

            if (dist < bestd) {
              a = p[2] - r;
              if (a < 0) a = -a;
              dist += a;

              if (dist < bestd) {
                bestd = dist;
                best = p[3];
              }
            }
          }
      }

      if (j >= 0) {
        p = network[j];
        dist = g - p[1];
        /* inx key - reverse dif */

        if (dist >= bestd) j = -1;
        /* stop iter */
        else {
            j--;
            if (dist < 0) dist = -dist;
            a = p[0] - b;
            if (a < 0) a = -a;
            dist += a;

            if (dist < bestd) {
              a = p[2] - r;
              if (a < 0) a = -a;
              dist += a;

              if (dist < bestd) {
                bestd = dist;
                best = p[3];
              }
            }
          }
      }
    }

    return best;
  };

  var process = exports.process = function process() {
    learn();
    unbiasnet();
    inxbuild();
    return colorMap();
  };
  /*
  * Unbias network to give byte values 0..255 and record position i to prepare
  * for sort
  * -----------------------------------------------------------------------------------
  */


  var unbiasnet = function unbiasnet() {
    var i;
    var j;

    for (i = 0; i < netsize; i++) {
      network[i][0] >>= netbiasshift;
      network[i][1] >>= netbiasshift;
      network[i][2] >>= netbiasshift;
      network[i][3] = i;
      /* record colour no */
    }
  };
  /*
  * Move adjacent neurons by precomputed alpha*(1-((i-j)^2/[r]^2)) in
  * radpower[|i-j|]
  * ---------------------------------------------------------------------------------
  */


  var alterneigh = function alterneigh(rad, i, b, g, r) {
    var j;
    var k;
    var lo;
    var hi;
    var a;
    var m;
    var p;
    lo = i - rad;
    if (lo < -1) lo = -1;
    hi = i + rad;
    if (hi > netsize) hi = netsize;
    j = i + 1;
    k = i - 1;
    m = 1;

    while (j < hi || k > lo) {
      a = radpower[m++];

      if (j < hi) {
        p = network[j++];

        try {
          p[0] -= a * (p[0] - b) / alpharadbias;
          p[1] -= a * (p[1] - g) / alpharadbias;
          p[2] -= a * (p[2] - r) / alpharadbias;
        } catch (e) {} // prevents 1.3 miscompilation

      }

      if (k > lo) {
        p = network[k--];

        try {
          p[0] -= a * (p[0] - b) / alpharadbias;
          p[1] -= a * (p[1] - g) / alpharadbias;
          p[2] -= a * (p[2] - r) / alpharadbias;
        } catch (e) {}
      }
    }
  };
  /*
  * Move neuron i towards biased (b,g,r) by factor alpha
  * ----------------------------------------------------
  */


  var altersingle = function altersingle(alpha, i, b, g, r) {
    /* alter hit neuron */
    var n = network[i];
    n[0] -= alpha * (n[0] - b) / initalpha;
    n[1] -= alpha * (n[1] - g) / initalpha;
    n[2] -= alpha * (n[2] - r) / initalpha;
  };
  /*
  * Search for biased BGR values ----------------------------
  */


  var contest = function contest(b, g, r) {
    /* finds closest neuron (min dist) and updates freq */

    /* finds best neuron (min dist-bias) and returns position */

    /* for frequently chosen neurons, freq[i] is high and bias[i] is negative */

    /* bias[i] = gamma*((1/netsize)-freq[i]) */
    var i;
    var dist;
    var a;
    var biasdist;
    var betafreq;
    var bestpos;
    var bestbiaspos;
    var bestd;
    var bestbiasd;
    var n;
    bestd = ~(1 << 31);
    bestbiasd = bestd;
    bestpos = -1;
    bestbiaspos = bestpos;

    for (i = 0; i < netsize; i++) {
      n = network[i];
      dist = n[0] - b;
      if (dist < 0) dist = -dist;
      a = n[1] - g;
      if (a < 0) a = -a;
      dist += a;
      a = n[2] - r;
      if (a < 0) a = -a;
      dist += a;

      if (dist < bestd) {
        bestd = dist;
        bestpos = i;
      }

      biasdist = dist - (bias[i] >> intbiasshift - netbiasshift);

      if (biasdist < bestbiasd) {
        bestbiasd = biasdist;
        bestbiaspos = i;
      }

      betafreq = freq[i] >> betashift;
      freq[i] -= betafreq;
      bias[i] += betafreq << gammashift;
    }

    freq[bestpos] += beta;
    bias[bestpos] -= betagamma;
    return bestbiaspos;
  };

  NeuQuant.apply(this, arguments);
  return exports;
}
// CONCATENATED MODULE: ./src/screens/export/GIFEncoder.js
/**
 * This class lets you encode animated GIF files
 * Base class :  http://www.java2s.com/Code/Java/2D-Graphics-GUI/AnimatedGifEncoder.htm
 * @author Kevin Weiner (original Java version - kweiner@fmsware.com)
 * @author Thibault Imbert (AS3 version - bytearray.org)
 * @author Kevin Kwok (JavaScript version - https://github.com/antimatter15/jsgif)
 * @version 0.1 AS3 implementation
 */


function GIFEncoder() {
  for (var i = 0, chr = {}; i < 256; i++) {
    chr[i] = String.fromCharCode(i);
  }

  function ByteArray() {
    this.bin = [];
  }

  ByteArray.prototype.getData = function () {
    for (var v = '', l = this.bin.length, i = 0; i < l; i++) {
      v += chr[this.bin[i]];
    }

    return v;
  };

  ByteArray.prototype.writeByte = function (val) {
    this.bin.push(val);
  };

  ByteArray.prototype.writeUTFBytes = function (string) {
    for (var l = string.length, _i = 0; _i < l; _i++) {
      this.writeByte(string.charCodeAt(_i));
    }
  };

  ByteArray.prototype.writeBytes = function (array, offset, length) {
    for (var l = length || array.length, _i2 = offset || 0; _i2 < l; _i2++) {
      this.writeByte(array[_i2]);
    }
  };

  var exports = {};
  var width; // image size

  var height;
  var transparent = null; // transparent color if given

  var transIndex; // transparent index in color table

  var repeat = -1; // no repeat

  var delay = 0; // frame delay (hundredths)

  var started = false; // ready to output frames

  var out;
  var image; // current frame

  var pixels; // BGR byte array from frame

  var indexedPixels; // converted frame indexed to palette

  var colorDepth; // number of bit planes

  var colorTab; // RGB palette

  var usedEntry = []; // active palette entries

  var palSize = 7; // color table size (bits-1)

  var dispose = -1; // disposal code (-1 = use default)

  var closeStream = false; // close stream when finished

  var firstFrame = true;
  var sizeSet = false; // if false, get size from first frame

  var sample = 10; // default sample interval for quantizer

  var comment = 'Generated by jsgif (https://github.com/antimatter15/jsgif/)'; // default comment for generated gif

  /**
  * Sets the delay time between each frame, or changes it for subsequent frames
  * (applies to last frame added)
  * int delay time in milliseconds
  * @param ms
  */

  var setDelay = exports.setDelay = function setDelay(ms) {
    delay = Math.round(ms / 10);
  };
  /**
  * Sets the GIF frame disposal code for the last added frame and any
  *
  * subsequent frames. Default is 0 if no transparent color has been set,
  * otherwise 2.
  * @param code
  * int disposal code.
  */


  var setDispose = exports.setDispose = function setDispose(code) {
    if (code >= 0) dispose = code;
  };
  /**
  * Sets the number of times the set of GIF frames should be played. Default is
  * 1; 0 means play indefinitely. Must be invoked before the first image is
  * added.
  *
  * @param iter
  * int number of iterations.
  * @return
  */


  var setRepeat = exports.setRepeat = function setRepeat(iter) {
    if (iter >= 0) repeat = iter;
  };
  /**
  * Sets the transparent color for the last added frame and any subsequent
  * frames. Since all colors are subject to modification in the quantization
  * process, the color in the final palette for each frame closest to the given
  * color becomes the transparent color for that frame. May be set to null to
  * indicate no transparent color.
  * @param
  * Color to be treated as transparent on display.
  */


  var setTransparent = exports.setTransparent = function setTransparent(c) {
    transparent = c;
  };
  /**
  * Sets the comment for the block comment
  * @param
  * string to be insterted as comment
  */


  var setComment = exports.setComment = function setComment(c) {
    comment = c;
  };
  /**
  * The addFrame method takes an incoming BitmapData object to create each frames
  * @param
  * BitmapData object to be treated as a GIF's frame
  */


  var addFrame = exports.addFrame = function addFrame(im, is_imageData) {
    if (im === null || !started || out === null) {
      throw new Error('Please call start method before calling addFrame');
    }

    var ok = true;

    try {
      if (!is_imageData) {
        image = im.getImageData(0, 0, im.canvas.width, im.canvas.height).data;
        if (!sizeSet) setSize(im.canvas.width, im.canvas.height);
      } else if (im instanceof ImageData) {
        image = im.data;

        if (!sizeset || width != im.width || height != im.height) {
          setSize(im.width, im.height);
        } else {}
      } else if (im instanceof Uint8ClampedArray) {
        if (im.length == width * height * 4) {
          image = im;
        } else {
          console.log('Please set the correct size: ImageData length mismatch');
          ok = false;
        }
      } else {
        console.log('Please provide correct input');
        ok = false;
      }

      getImagePixels(); // convert to correct format if necessary

      analyzePixels(); // build color table & map pixels

      if (firstFrame) {
        writeLSD(); // logical screen descriptior

        writePalette(); // global color table

        if (repeat >= 0) {
          // use NS app extension to indicate reps
          writeNetscapeExt();
        }
      }

      writeGraphicCtrlExt(); // write graphic control extension

      if (comment !== '') {
        writeCommentExt(); // write comment extension
      }

      writeImageDesc(); // image descriptor

      if (!firstFrame) writePalette(); // local color table

      writePixels(); // encode and write pixel data

      firstFrame = false;
    } catch (e) {
      console.log(e);
      ok = false;
    }

    return ok;
  };
  /**
  * @description: Downloads the encoded gif with the given name
  * No need of any conversion from the stream data (out) to base64
  * Solves the issue of large file sizes when there are more frames
  * and does not involve in creation of any temporary data in the process
  * so no wastage of memory, and speeds up the process of downloading
  * to just calling this function.
  * @parameter {String} filename filename used for downloading the gif
  */


  var download = exports.download = function download(filename) {
    if (out === null || closeStream == false) {
      console.log('Please call start method and add frames and call finish method before calling download');
    } else {
      filename = filename !== undefined ? filename.endsWith('.gif') ? filename : "".concat(filename, ".gif") : 'download.gif';
      var templink = document.createElement('a');
      templink.download = filename;
      templink.href = URL.createObjectURL(new Blob([new Uint8Array(out.bin)], {
        type: 'image/gif'
      }));
      templink.click();
    }
  };
  /**
  * Adds final trailer to the GIF stream, if you don't call the finish method
  * the GIF stream will not be valid.
  */


  var finish = exports.finish = function finish() {
    if (!started) return false;
    var ok = true;
    started = false;

    try {
      out.writeByte(0x3b); // gif trailer

      closeStream = true;
    } catch (e) {
      ok = false;
    }

    return ok;
  };
  /**
  * Resets some members so that a new stream can be started.
  * This method is actually called by the start method
  */


  var reset = function reset() {
    // reset for subsequent use
    transIndex = 0;
    image = null;
    pixels = null;
    indexedPixels = null;
    colorTab = null;
    closeStream = false;
    firstFrame = true;
  };
  /**
  * * Sets frame rate in frames per second. Equivalent to
  * <code>setDelay(1000/fps)</code>.
  * @param fps
  * float frame rate (frames per second)
  */


  var setFrameRate = exports.setFrameRate = function setFrameRate(fps) {
    if (fps != 0xf) delay = Math.round(100 / fps);
  };
  /**
  * Sets quality of color quantization (conversion of images to the maximum 256
  * colors allowed by the GIF specification). Lower values (minimum = 1)
  * produce better colors, but slow processing significantly. 10 is the
  * default, and produces good color mapping at reasonable speeds. Values
  * greater than 20 do not yield significant improvements in speed.
  * @param quality
  * int greater than 0.
  * @return
  */


  var setQuality = exports.setQuality = function setQuality(quality) {
    if (quality < 1) quality = 1;
    sample = quality;
  };
  /**
  * Sets the GIF frame size. The default size is the size of the first frame
  * added if this method is not invoked.
  * @param w
  * int frame width.
  * @param h
  * int frame width.
  */


  var setSize = exports.setSize = function setSize(w, h) {
    if (started && !firstFrame) return;
    width = w;
    height = h;
    if (width < 1) width = 320;
    if (height < 1) height = 240;
    sizeSet = true;
  };
  /**
  * Initiates GIF file creation on the given stream.
  * @param os
  * OutputStream on which GIF images are written.
  * @return false if initial write failed.
  */


  var start = exports.start = function start() {
    reset();
    var ok = true;
    closeStream = false;
    out = new ByteArray();

    try {
      out.writeUTFBytes('GIF89a'); // header
    } catch (e) {
      ok = false;
    }

    return started = ok;
  };

  var cont = exports.cont = function cont() {
    reset();
    var ok = true;
    closeStream = false;
    out = new ByteArray();
    return started = ok;
  };
  /**
  * Analyzes image colors and creates color map.
  */


  var analyzePixels = function analyzePixels() {
    var len = pixels.length;
    var nPix = len / 3;
    indexedPixels = [];
    var nq = new NeuQuant(pixels, len, sample); // initialize quantizer

    colorTab = nq.process(); // create reduced palette
    // map image pixels to new palette

    var k = 0;

    for (var j = 0; j < nPix; j++) {
      var index = nq.map(pixels[k++] & 0xff, pixels[k++] & 0xff, pixels[k++] & 0xff);
      usedEntry[index] = true;
      indexedPixels[j] = index;
    }

    pixels = null;
    colorDepth = 8;
    palSize = 7; // get closest match to transparent color if specified

    if (transparent !== null) {
      transIndex = findClosest(transparent);
    }
  };
  /**
  * Returns index of palette color closest to c
  */


  var findClosest = function findClosest(c) {
    if (colorTab === null) return -1;
    var r = (c & 0xFF0000) >> 16;
    var g = (c & 0x00FF00) >> 8;
    var b = c & 0x0000FF;
    var minpos = 0;
    var dmin = 256 * 256 * 256;
    var len = colorTab.length;

    for (var _i3 = 0; _i3 < len;) {
      var dr = r - (colorTab[_i3++] & 0xff);
      var dg = g - (colorTab[_i3++] & 0xff);
      var db = b - (colorTab[_i3] & 0xff);
      var d = dr * dr + dg * dg + db * db;
      var index = _i3 / 3;

      if (usedEntry[index] && d < dmin) {
        dmin = d;
        minpos = index;
      }

      _i3++;
    }

    return minpos;
  };
  /**
  * Extracts image pixels into byte array "pixels
  */


  var getImagePixels = function getImagePixels() {
    var w = width;
    var h = height;
    pixels = [];
    var data = image;
    var count = 0;

    for (var _i4 = 0; _i4 < h; _i4++) {
      for (var j = 0; j < w; j++) {
        var b = _i4 * w * 4 + j * 4;
        pixels[count++] = data[b];
        pixels[count++] = data[b + 1];
        pixels[count++] = data[b + 2];
      }
    }
  };
  /**
  * Writes Graphic Control Extension
  */


  var writeGraphicCtrlExt = function writeGraphicCtrlExt() {
    out.writeByte(0x21); // extension introducer

    out.writeByte(0xf9); // GCE label

    out.writeByte(4); // data block size

    var transp;
    var disp;

    if (transparent === null) {
      transp = 0;
      disp = 0; // dispose = no action
    } else {
      transp = 1;
      disp = 2; // force clear if using transparent color
    }

    if (dispose >= 0) {
      disp = dispose & 7; // user override
    }

    disp <<= 2; // packed fields

    out.writeByte(0 // 1:3 reserved
    | disp // 4:6 disposal
    | 0 // 7 user input - 0 = none
    | transp); // 8 transparency flag

    WriteShort(delay); // delay x 1/100 sec

    out.writeByte(transIndex); // transparent color index

    out.writeByte(0); // block terminator
  };
  /**
  * Writes Comment Extention
  */


  var writeCommentExt = function writeCommentExt() {
    out.writeByte(0x21); // extension introducer

    out.writeByte(0xfe); // comment label

    out.writeByte(comment.length); // Block Size (s)

    out.writeUTFBytes(comment);
    out.writeByte(0); // block terminator
  };
  /**
  * Writes Image Descriptor
  */


  var writeImageDesc = function writeImageDesc() {
    out.writeByte(0x2c); // image separator

    WriteShort(0); // image position x,y = 0,0

    WriteShort(0);
    WriteShort(width); // image size

    WriteShort(height); // packed fields

    if (firstFrame) {
      // no LCT - GCT is used for first (or only) frame
      out.writeByte(0);
    } else {
      // specify normal LCT
      out.writeByte(0x80 // 1 local color table 1=yes
      | 0 // 2 interlace - 0=no
      | 0 // 3 sorted - 0=no
      | 0 // 4-5 reserved
      | palSize); // 6-8 size of color table
    }
  };
  /**
  * Writes Logical Screen Descriptor
  */


  var writeLSD = function writeLSD() {
    // logical screen size
    WriteShort(width);
    WriteShort(height); // packed fields

    out.writeByte(0x80 // 1 : global color table flag = 1 (gct used)
    | 0x70 // 2-4 : color resolution = 7
    | 0x00 // 5 : gct sort flag = 0
    | palSize); // 6-8 : gct size

    out.writeByte(0); // background color index

    out.writeByte(0); // pixel aspect ratio - assume 1:1
  };
  /**
  * Writes Netscape application extension to define repeat count.
  */


  var writeNetscapeExt = function writeNetscapeExt() {
    out.writeByte(0x21); // extension introducer

    out.writeByte(0xff); // app extension label

    out.writeByte(11); // block size

    out.writeUTFBytes('NETSCAPE' + '2.0'); // app id + auth code

    out.writeByte(3); // sub-block size

    out.writeByte(1); // loop sub-block id

    WriteShort(repeat); // loop count (extra iterations, 0=repeat forever)

    out.writeByte(0); // block terminator
  };
  /**
  * Writes color table
  */


  var writePalette = function writePalette() {
    out.writeBytes(colorTab);
    var n = 3 * 256 - colorTab.length;

    for (var _i5 = 0; _i5 < n; _i5++) {
      out.writeByte(0);
    }
  };

  var WriteShort = function WriteShort(pValue) {
    out.writeByte(pValue & 0xFF);
    out.writeByte(pValue >> 8 & 0xFF);
  };
  /**
  * Encodes and writes pixel data
  */


  var writePixels = function writePixels() {
    var myencoder = new LZWEncoder(width, height, indexedPixels, colorDepth);
    myencoder.encode(out);
  };
  /**
  * Retrieves the GIF stream
  */


  var stream = exports.stream = function stream() {
    return out;
  };

  var setProperties = exports.setProperties = function setProperties(has_start, is_first) {
    started = has_start;
    firstFrame = is_first;
  };

  return exports;
}
// CONCATENATED MODULE: ./src/screens/export/b64.js
function encode64(input) {
  var output = '';
  var i = 0;
  var l = input.length;
  var key = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
  var chr1;
  var chr2;
  var chr3;
  var enc1;
  var enc2;
  var enc3;
  var enc4;

  while (i < l) {
    chr1 = input.charCodeAt(i++);
    chr2 = input.charCodeAt(i++);
    chr3 = input.charCodeAt(i++);
    enc1 = chr1 >> 2;
    enc2 = (chr1 & 3) << 4 | chr2 >> 4;
    enc3 = (chr2 & 15) << 2 | chr3 >> 6;
    enc4 = chr3 & 63;
    if (isNaN(chr2)) enc3 = enc4 = 64;else if (isNaN(chr3)) enc4 = 64;
    output = output + key.charAt(enc1) + key.charAt(enc2) + key.charAt(enc3) + key.charAt(enc4);
  }

  return output;
}
// CONCATENATED MODULE: ./src/screens/export/export.js




function initExport() {
  var exportBtn = document.createElement('a');
  exportBtn.className = 'download';
  exportBtn.innerHTML = '<i class="fas fa-save"></i>';
  exportBtn.href = '';
  document.querySelector('.preview--container').appendChild(exportBtn);

  function createGIF() {
    var encoder = new GIFEncoder();
    encoder.setRepeat(0);
    encoder.setDelay(1000 / document.querySelector('.fps_range--input').value);
    encoder.start();
    var framesArr = document.querySelectorAll('.frame');

    for (var i = 0; i < framesArr.length; i += 1) {
      encoder.addFrame(framesArr[i].getContext('2d'));
    }

    encoder.finish();
    exportBtn.href = "data:image/gif;base64,".concat(encode64(encoder.stream().getData()));
  }

  exportBtn.addEventListener('click', function () {
    // eslint-disable-next-line no-alert
    exportBtn.download = prompt('Please, name .gif file before export', 'New Piskel');

    if (exportBtn.download === 'null') {
      exportBtn.removeAttribute('download');
    }

    createGIF();
  });
  var exportKeyEvent = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true
  });

  function addKey(e) {
    var addKeyText = document.getElementById('exportKey').innerText;
    if (document.querySelector('.modal--window').style.display === 'block') return;
    if (addKeyText === '?') return;

    if (addKeyText.startsWith('Ctrl')) {
      if (e.ctrlKey) {
        if (e.code === getKeyCodeFromText(addKeyText.slice(-1))) {
          e.preventDefault();
          exportBtn.dispatchEvent(exportKeyEvent);
        }
      }
    } else if (addKeyText.startsWith('Shift')) {
      if (e.shiftKey) {
        if (e.code === getKeyCodeFromText(addKeyText.slice(-1))) {
          e.preventDefault();
          exportBtn.dispatchEvent(exportKeyEvent);
        }
      }
    } else if (addKeyText.startsWith('Alt')) {
      if (e.altKey) {
        if (e.code === getKeyCodeFromText(addKeyText.slice(-1))) {
          e.preventDefault();
          exportBtn.dispatchEvent(exportKeyEvent);
        }
      }
    } else if (e.code === getKeyCodeFromText(addKeyText)) {
      if (e.ctrlKey || e.shiftKey || e.altKey) return;
      exportBtn.dispatchEvent(exportKeyEvent);
    }
  }

  document.addEventListener('keydown', addKey);
}
// CONCATENATED MODULE: ./src/components/modal-dialog/keyboard-modal.js



function initKeyboardModal() {
  var modalWindow = document.createElement('div');
  modalWindow.className = 'modal--window';
  document.body.appendChild(modalWindow);
  var modalButton = document.createElement('div');
  modalButton.className = 'modal--button';
  modalButton.innerHTML = '<i class="far fa-keyboard"></i>';
  document.querySelector('.tools_panel').appendChild(modalButton);
  var modalContentWrapper = document.createElement('div');
  modalContentWrapper.className = 'modal--content--wrapper';
  modalWindow.appendChild(modalContentWrapper);
  var modalHeaderCont = document.createElement('div');
  modalHeaderCont.className = 'modal--header--container';
  modalContentWrapper.appendChild(modalHeaderCont);
  var modalHeader = document.createElement('h3');
  modalHeader.className = 'modal--header';
  modalHeader.innerText = 'Keyboard shortcuts';
  modalHeaderCont.appendChild(modalHeader);
  var closeModal = document.createElement('div');
  closeModal.className = 'modal--close';
  closeModal.innerHTML = '<i class="fas fa-times"></i>';
  modalHeaderCont.appendChild(closeModal);
  var modalContent = document.createElement('div');
  modalContent.className = 'modal--content';
  modalContentWrapper.appendChild(modalContent);
  var toolSection = document.createElement('div');
  toolSection.className = 'modal--content--container';
  modalContent.appendChild(toolSection);
  var toolHeader = document.createElement('h4');
  toolHeader.className = 'modal--content--header';
  toolHeader.innerText = 'Tool shortcuts';
  toolSection.appendChild(toolHeader);
  var penToolCont = document.createElement('div');
  penToolCont.className = 'modal--content--item--container';
  toolSection.appendChild(penToolCont);
  var penToolIcon = document.createElement('div');
  penToolIcon.className = 'modal--content--item--icon pen';
  penToolCont.appendChild(penToolIcon);
  var penToolKey = document.createElement('div');
  penToolKey.id = 'penKey';
  penToolKey.innerText = 'P';
  penToolKey.className = 'modal--content--item--key';
  penToolCont.appendChild(penToolKey);
  var penToolLabel = document.createElement('span');
  penToolLabel.innerText = 'Pen tool';
  penToolLabel.className = 'modal--content--item--label';
  penToolCont.appendChild(penToolLabel);
  var pickerToolCont = document.createElement('div');
  pickerToolCont.className = 'modal--content--item--container';
  toolSection.appendChild(pickerToolCont);
  var pickerToolIcon = document.createElement('div');
  pickerToolIcon.className = 'modal--content--item--icon picker';
  pickerToolCont.appendChild(pickerToolIcon);
  var pickerToolKey = document.createElement('div');
  pickerToolKey.id = 'pickerKey';
  pickerToolKey.innerText = 'C';
  pickerToolKey.className = 'modal--content--item--key';
  pickerToolCont.appendChild(pickerToolKey);
  var pickerToolLabel = document.createElement('span');
  pickerToolLabel.innerText = 'Color picker tool';
  pickerToolLabel.className = 'modal--content--item--label';
  pickerToolCont.appendChild(pickerToolLabel);
  var paintBucketToolCont = document.createElement('div');
  paintBucketToolCont.className = 'modal--content--item--container';
  toolSection.appendChild(paintBucketToolCont);
  var paintBucketToolIcon = document.createElement('div');
  paintBucketToolIcon.className = 'modal--content--item--icon paint_bucket';
  paintBucketToolCont.appendChild(paintBucketToolIcon);
  var paintBucketToolKey = document.createElement('div');
  paintBucketToolKey.id = 'paintBucketKey';
  paintBucketToolKey.innerText = 'B';
  paintBucketToolKey.className = 'modal--content--item--key';
  paintBucketToolCont.appendChild(paintBucketToolKey);
  var paintBucketToolLabel = document.createElement('span');
  paintBucketToolLabel.innerText = 'Paint bucket tool';
  paintBucketToolLabel.className = 'modal--content--item--label';
  paintBucketToolCont.appendChild(paintBucketToolLabel);
  var magicPaintToolCont = document.createElement('div');
  magicPaintToolCont.className = 'modal--content--item--container';
  toolSection.appendChild(magicPaintToolCont);
  var magicPaintToolIcon = document.createElement('div');
  magicPaintToolIcon.className = 'modal--content--item--icon magic_paint';
  magicPaintToolCont.appendChild(magicPaintToolIcon);
  var magicPaintToolKey = document.createElement('div');
  magicPaintToolKey.id = 'magicPaintKey';
  magicPaintToolKey.innerText = 'A';
  magicPaintToolKey.className = 'modal--content--item--key';
  magicPaintToolCont.appendChild(magicPaintToolKey);
  var magicPaintToolLabel = document.createElement('span');
  magicPaintToolLabel.className = 'modal--content--item--label';
  magicPaintToolLabel.innerText = 'Paint all same pixels tool';
  magicPaintToolCont.appendChild(magicPaintToolLabel);
  var eraserToolCont = document.createElement('div');
  eraserToolCont.className = 'modal--content--item--container';
  toolSection.appendChild(eraserToolCont);
  var eraserToolIcon = document.createElement('div');
  eraserToolIcon.className = 'modal--content--item--icon eraser';
  eraserToolCont.appendChild(eraserToolIcon);
  var eraserToolKey = document.createElement('div');
  eraserToolKey.id = 'eraserKey';
  eraserToolKey.innerText = 'E';
  eraserToolKey.className = 'modal--content--item--key';
  eraserToolCont.appendChild(eraserToolKey);
  var eraserToolLabel = document.createElement('span');
  eraserToolLabel.innerText = 'Eraser tool';
  eraserToolLabel.className = 'modal--content--item--label';
  eraserToolCont.appendChild(eraserToolLabel);
  var penSizeIncreaseCont = document.createElement('div');
  penSizeIncreaseCont.className = 'modal--content--item--container';
  toolSection.appendChild(penSizeIncreaseCont);
  var penSizeIncreaseKey = document.createElement('div');
  penSizeIncreaseKey.id = 'penSizeIncreaseKey';
  penSizeIncreaseKey.innerText = '+';
  penSizeIncreaseKey.className = 'modal--content--item--key';
  penSizeIncreaseCont.appendChild(penSizeIncreaseKey);
  var penSizeIncreaseLabel = document.createElement('span');
  penSizeIncreaseLabel.innerText = 'Increase pen size';
  penSizeIncreaseLabel.className = 'modal--content--item--label';
  penSizeIncreaseCont.appendChild(penSizeIncreaseLabel);
  var penSizeDecreaseCont = document.createElement('div');
  penSizeDecreaseCont.className = 'modal--content--item--container';
  toolSection.appendChild(penSizeDecreaseCont);
  var penSizeDecreaseKey = document.createElement('div');
  penSizeDecreaseKey.id = 'penSizeDecreaseKey';
  penSizeDecreaseKey.innerText = '-';
  penSizeDecreaseKey.className = 'modal--content--item--key';
  penSizeDecreaseCont.appendChild(penSizeDecreaseKey);
  var penSizeDecreaseLabel = document.createElement('span');
  penSizeDecreaseLabel.innerText = 'Decrease pen size';
  penSizeDecreaseLabel.className = 'modal--content--item--label';
  penSizeDecreaseCont.appendChild(penSizeDecreaseLabel);
  var frameSection = document.createElement('div');
  frameSection.className = 'modal--content--container';
  modalContent.appendChild(frameSection);
  var frameHeader = document.createElement('h4');
  frameHeader.className = 'modal--content--header';
  frameHeader.innerText = 'Frame shortcuts';
  frameSection.appendChild(frameHeader);
  var newFrameCont = document.createElement('div');
  newFrameCont.className = 'modal--content--item--container';
  frameSection.appendChild(newFrameCont);
  var newFrameKey = document.createElement('div');
  newFrameKey.id = 'newFrameKey';
  newFrameKey.innerText = 'N';
  newFrameKey.className = 'modal--content--item--key';
  newFrameCont.appendChild(newFrameKey);
  var newFrameLabel = document.createElement('span');
  newFrameLabel.innerText = 'Create new empty frame';
  newFrameLabel.className = 'modal--content--item--label';
  newFrameCont.appendChild(newFrameLabel);
  var duplicateFrameCont = document.createElement('div');
  duplicateFrameCont.className = 'modal--content--item--container';
  frameSection.appendChild(duplicateFrameCont);
  var duplicateFrameKey = document.createElement('div');
  duplicateFrameKey.id = 'duplicateFrameKey';
  duplicateFrameKey.innerText = 'Shift + N';
  duplicateFrameKey.className = 'modal--content--item--key';
  duplicateFrameCont.appendChild(duplicateFrameKey);
  var duplicateFrameLabel = document.createElement('span');
  duplicateFrameLabel.innerText = 'Duplicate selected frame';
  duplicateFrameLabel.className = 'modal--content--item--label';
  duplicateFrameCont.appendChild(duplicateFrameLabel);
  var deleteFrameCont = document.createElement('div');
  deleteFrameCont.className = 'modal--content--item--container';
  frameSection.appendChild(deleteFrameCont);
  var deleteFrameKey = document.createElement('div');
  deleteFrameKey.innerText = 'Del';
  deleteFrameKey.className = 'modal--content--item--key immutable';
  deleteFrameCont.appendChild(deleteFrameKey);
  var deleteFrameLabel = document.createElement('span');
  deleteFrameLabel.innerText = 'Delete selected frame';
  deleteFrameLabel.className = 'modal--content--item--label-immutable';
  deleteFrameCont.appendChild(deleteFrameLabel);
  var previousFrameCont = document.createElement('div');
  previousFrameCont.className = 'modal--content--item--container';
  frameSection.appendChild(previousFrameCont);
  var previousFrameKey = document.createElement('div');
  previousFrameKey.id = 'previousFrameKey';
  previousFrameKey.innerText = '↑';
  previousFrameKey.className = 'modal--content--item--key';
  previousFrameCont.appendChild(previousFrameKey);
  var previousFrameLabel = document.createElement('span');
  previousFrameLabel.innerText = 'Select previous frame';
  previousFrameLabel.className = 'modal--content--item--label';
  previousFrameCont.appendChild(previousFrameLabel);
  var nextFrameCont = document.createElement('div');
  nextFrameCont.className = 'modal--content--item--container';
  frameSection.appendChild(nextFrameCont);
  var nextFrameKey = document.createElement('div');
  nextFrameKey.id = 'nextFrameKey';
  nextFrameKey.innerText = '↓';
  nextFrameKey.className = 'modal--content--item--key';
  nextFrameCont.appendChild(nextFrameKey);
  var nextFrameLabel = document.createElement('span');
  nextFrameLabel.innerText = 'Select next frame';
  nextFrameLabel.className = 'modal--content--item--label';
  nextFrameCont.appendChild(nextFrameLabel);
  var othersSection = document.createElement('div');
  othersSection.className = 'modal--content--container';
  modalContent.appendChild(othersSection);
  var othersHeader = document.createElement('h4');
  othersHeader.className = 'modal--content--header';
  othersHeader.innerText = 'Others shortcuts';
  othersSection.appendChild(othersHeader);
  var fullScreenCont = document.createElement('div');
  fullScreenCont.className = 'modal--content--item--container';
  othersSection.appendChild(fullScreenCont);
  var fullScreenKey = document.createElement('div');
  fullScreenKey.id = 'fullScreenKey';
  fullScreenKey.innerText = 'F';
  fullScreenKey.className = 'modal--content--item--key';
  fullScreenCont.appendChild(fullScreenKey);
  var fullScreenLabel = document.createElement('span');
  fullScreenLabel.innerText = 'Open animation on full screen';
  fullScreenLabel.className = 'modal--content--item--label';
  fullScreenCont.appendChild(fullScreenLabel);
  var exportCont = document.createElement('div');
  exportCont.className = 'modal--content--item--container';
  othersSection.appendChild(exportCont);
  var exportKey = document.createElement('div');
  exportKey.id = 'exportKey';
  exportKey.innerText = 'Ctrl + E';
  exportKey.className = 'modal--content--item--key';
  exportCont.appendChild(exportKey);
  var exportLabel = document.createElement('span');
  exportLabel.innerText = 'Export animation as .gif';
  exportLabel.className = 'modal--content--item--label';
  exportCont.appendChild(exportLabel);
  var modalWindowCont = document.createElement('div');
  modalWindowCont.className = 'modal--content--item--container';
  othersSection.appendChild(modalWindowCont);
  var modalWindowKey = document.createElement('div');
  modalWindowKey.innerText = 'Ctrl + ?';
  modalWindowKey.className = 'modal--content--item--key immutable';
  modalWindowCont.appendChild(modalWindowKey);
  var modalWindowLabel = document.createElement('span');
  modalWindowLabel.innerText = 'Open the keyboard shortcuts';
  modalWindowLabel.className = 'modal--content--item--label-immutable';
  modalWindowCont.appendChild(modalWindowLabel);
  modalButton.addEventListener('click', function () {
    modalWindow.style.display = 'block';
  });
  closeModal.addEventListener('click', function () {
    modalWindow.style.display = 'none';
  });
  document.addEventListener('click', function (e) {
    if (e.target.className === 'modal--window') {
      modalWindow.style.display = 'none';
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.ctrlKey) {
      if (e.code === 'Slash') {
        if (modalWindow.style.display === 'block') {
          modalWindow.style.display = 'none';
        } else {
          modalWindow.style.display = 'block';
        }
      }
    }

    if (e.code === 'Escape') {
      if (modalWindow.style.display === 'block') {
        modalWindow.style.display = 'none';
      }
    }
  });
  var change = false;

  function searchForDuplicate(str) {
    var keysArr = document.querySelectorAll('.modal--content--item--key');

    for (var i = 0; i < keysArr.length; i += 1) {
      if (keysArr[i].innerText === str) {
        document.querySelector(".hint--key.".concat(keysArr[i].id)).innerText = '(?)';
        keysArr[i].innerText = '?';
      }
    }
  }

  function changeKey(e) {
    if (!change) return;
    var text;
    var selectedKey = document.querySelector('.selected');

    if (e.ctrlKey) {
      if (Object.values(keyCodes).includes(e.code)) {
        e.preventDefault();
        text = "Ctrl + ".concat(getTextFromKeyCode(e.code));
        searchForDuplicate(text);

        if (document.querySelector(".hint--key.".concat(selectedKey.id))) {
          document.querySelector(".hint--key.".concat(selectedKey.id)).innerText = "(".concat(text, ")");
          localStorage.setItem('hints', getShortcutsText(document.querySelectorAll('.hasKey')));
        }

        selectedKey.innerText = text;
        localStorage.setItem('shortcuts', getShortcutsText(document.querySelectorAll('.modal--content--item--key')));

        if (selectedKey) {
          selectedKey.classList.remove('selected');
        }

        change = false;
      }
    } else if (e.shiftKey) {
      if (Object.values(keyCodes).includes(e.code)) {
        e.preventDefault();
        text = "Shift + ".concat(getTextFromKeyCode(e.code));
        searchForDuplicate(text);

        if (document.querySelector(".hint--key.".concat(selectedKey.id))) {
          document.querySelector(".hint--key.".concat(selectedKey.id)).innerText = "(".concat(text, ")");
          localStorage.setItem('hints', getShortcutsText(document.querySelectorAll('.hasKey')));
        }

        selectedKey.innerText = text;
        localStorage.setItem('shortcuts', getShortcutsText(document.querySelectorAll('.modal--content--item--key')));

        if (selectedKey) {
          selectedKey.classList.remove('selected');
        }

        change = false;
      }
    } else if (e.altKey) {
      if (Object.values(keyCodes).includes(e.code)) {
        e.preventDefault();
        text = "Alt + ".concat(getTextFromKeyCode(e.code));
        searchForDuplicate(text);

        if (document.querySelector(".hint--key.".concat(selectedKey.id))) {
          document.querySelector(".hint--key.".concat(selectedKey.id)).innerText = "(".concat(text, ")");
          localStorage.setItem('hints', getShortcutsText(document.querySelectorAll('.hasKey')));
        }

        selectedKey.innerText = text;
        localStorage.setItem('shortcuts', getShortcutsText(document.querySelectorAll('.modal--content--item--key')));

        if (selectedKey) {
          selectedKey.classList.remove('selected');
        }

        change = false;
      }
    } else if (Object.values(keyCodes).includes(e.code)) {
      text = getTextFromKeyCode(e.code);
      searchForDuplicate(text);

      if (document.querySelector(".hint--key.".concat(selectedKey.id))) {
        document.querySelector(".hint--key.".concat(selectedKey.id)).innerText = "(".concat(text, ")");
        localStorage.setItem('hints', getShortcutsText(document.querySelectorAll('.hasKey')));
      }

      selectedKey.innerText = text;
      localStorage.setItem('shortcuts', getShortcutsText(document.querySelectorAll('.modal--content--item--key')));

      if (selectedKey) {
        selectedKey.classList.remove('selected');
      }

      change = false;
    }
  }

  document.addEventListener('keydown', changeKey);
  modalContent.addEventListener('click', function (e) {
    if (e.target.className === 'modal--content--item--label') {
      if (document.querySelector('.selected')) {
        document.querySelector('.selected').classList.remove('selected');
      }

      e.target.previousSibling.classList.toggle('selected');
      change = true;
    }
  });
}
// CONCATENATED MODULE: ./src/components/authentification/auth.js
/* eslint-disable no-unused-vars */

/* eslint-disable no-undef */
function initAuth() {
  var provider = new firebase.auth.GoogleAuthProvider();
  document.querySelector('#signIn').addEventListener('click', function () {
    firebase.auth().signInWithPopup(provider).then(function (result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken; // The signed-in user info.

      var user = result.user;
      document.querySelector('.user--container').innerHTML = "".concat(user.displayName, " \n      <img src=\"").concat(user.photoURL, "\" class=\"user--photo\" alt=\"user photo\">");
    })["catch"](function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message; // The email of the user's account used.

      var email = error.email; // The firebase.auth.AuthCredential type that was used.

      var credential = error.credential;
    });
  });
}
// CONCATENATED MODULE: ./src/components/modal-dialog/hints.js

function initHints() {
  var penToolHint = document.createElement('span');
  penToolHint.className = 'hint';
  penToolHint.innerText = 'Pen tool ';
  document.querySelector('#penTool').appendChild(penToolHint);
  var penToolHintKey = document.createElement('span');
  penToolHintKey.className = 'hint--key penKey hasKey';
  penToolHintKey.innerText = '(P)';
  penToolHint.appendChild(penToolHintKey);
  var pickerToolHint = document.createElement('span');
  pickerToolHint.className = 'hint';
  pickerToolHint.innerText = 'Color picker tool ';
  document.querySelector('#colorPickerTool').appendChild(pickerToolHint);
  var pickerToolHintKey = document.createElement('span');
  pickerToolHintKey.className = 'hint--key pickerKey hasKey';
  pickerToolHintKey.innerText = '(C)';
  pickerToolHint.appendChild(pickerToolHintKey);
  var paintBucketToolHint = document.createElement('span');
  paintBucketToolHint.className = 'hint';
  paintBucketToolHint.innerText = 'Paint bucket tool ';
  document.querySelector('#paintBucketTool').appendChild(paintBucketToolHint);
  var paintBucketToolHintKey = document.createElement('span');
  paintBucketToolHintKey.className = 'hint--key paintBucketKey hasKey';
  paintBucketToolHintKey.innerText = '(B)';
  paintBucketToolHint.appendChild(paintBucketToolHintKey);
  var magicPaintToolHint = document.createElement('span');
  magicPaintToolHint.className = 'hint';
  magicPaintToolHint.innerText = 'Paint all same pixels tool ';
  document.querySelector('#paintSamePixTool').appendChild(magicPaintToolHint);
  var magicPaintToolHintKey = document.createElement('span');
  magicPaintToolHintKey.className = 'hint--key magicPaintKey hasKey';
  magicPaintToolHintKey.innerText = '(A)';
  magicPaintToolHint.appendChild(magicPaintToolHintKey);
  var eraserToolHint = document.createElement('span');
  eraserToolHint.className = 'hint';
  eraserToolHint.innerText = 'Eraser tool ';
  document.querySelector('#eraserTool').appendChild(eraserToolHint);
  var eraserToolHintKey = document.createElement('span');
  eraserToolHintKey.className = 'hint--key eraserKey hasKey';
  eraserToolHintKey.innerText = '(E)';
  eraserToolHint.appendChild(eraserToolHintKey);
  var penSizeHint = document.createElement('span');
  penSizeHint.className = 'hint pen_size';
  penSizeHint.innerHTML = 'Pen size<br>from 1 to 4 pixels';
  document.querySelector('.tools_panel--pen_size--wrapper').appendChild(penSizeHint);
  var shortcutsHint = document.createElement('span');
  shortcutsHint.className = 'hint shortcuts';
  shortcutsHint.innerText = 'Keyboard shortcuts';
  document.querySelector('.modal--button').appendChild(shortcutsHint);
  var exportHint = document.createElement('span');
  exportHint.className = 'hint';
  exportHint.innerText = 'Export as .gif ';
  document.querySelector('.download').appendChild(exportHint);
  var exportHintKey = document.createElement('span');
  exportHintKey.className = 'hint--key exportKey hasKey';
  exportHintKey.innerText = '(Ctrl + E)';
  exportHint.appendChild(exportHintKey);
  var fullScreenHint = document.createElement('span');
  fullScreenHint.className = 'hint full-screen';
  fullScreenHint.innerText = 'Open animation on full screen ';
  document.querySelector('.full_screen').appendChild(fullScreenHint);
  var fullScreenHintKey = document.createElement('span');
  fullScreenHintKey.className = 'hint--key fullScreenKey hasKey';
  fullScreenHintKey.innerText = '(F)';
  fullScreenHint.appendChild(fullScreenHintKey);
}
// CONCATENATED MODULE: ./src/app.js









initKeyboardModal();
initCanvasTools();
initFrames();
initPreview();
initExport();
initHints();
initAuth();
window.addEventListener('load', function () {
  if (localStorage.getItem('shortcuts')) {
    var shortcuts = localStorage.getItem('shortcuts');
    setShortcutsText(shortcuts, document.querySelectorAll('.modal--content--item--key'));
    setShortcutsText(localStorage.getItem('hints'), document.querySelectorAll('.hasKey'));
  }
});

/***/ })
/******/ ]);