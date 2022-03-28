/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Drawable/Hill.ts":
/*!*********************************!*\
  !*** ./src/js/Drawable/Hill.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.Hill = void 0;\n\nvar settings_1 = __webpack_require__(/*! ../settings */ \"./src/js/settings.ts\");\n\nvar Hsl_1 = __webpack_require__(/*! ../Helpers/Hsl */ \"./src/js/Helpers/Hsl.ts\");\n\nvar Hill = function () {\n  function Hill(ctx) {\n    this.ctx = ctx;\n    this.hill = settings_1.settings.hill.hills;\n    this.draw();\n  }\n\n  Hill.prototype.draw = function () {\n    this.ctx.beginPath();\n    this.ctx.moveTo(0, 60);\n    this.ctx.fillStyle = new Hsl_1.Hsl(149, 39, 35).toString();\n    this.ctx.lineTo(Math.cos(this.canvasElement.width), 60);\n  };\n\n  return Hill;\n}();\n\nexports.Hill = Hill;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvRHJhd2FibGUvSGlsbC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUNBOztBQUVBO0FBS0ksZ0JBQVlBLEdBQVosRUFBeUM7QUFDckMsU0FBS0EsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQyxvQkFBU0QsSUFBVCxDQUFjRSxLQUExQjtBQUNBLFNBQUtDLElBQUw7QUFDSDs7QUFFREM7QUFDSSxTQUFLTCxHQUFMLENBQVNNLFNBQVQ7QUFDQSxTQUFLTixHQUFMLENBQVNPLE1BQVQsQ0FBZ0IsQ0FBaEIsRUFBa0IsRUFBbEI7QUFDQSxTQUFLUCxHQUFMLENBQVNRLFNBQVQsR0FBcUIsSUFBSUMsU0FBSixDQUFRLEdBQVIsRUFBYSxFQUFiLEVBQWlCLEVBQWpCLEVBQXFCQyxRQUFyQixFQUFyQjtBQUNBLFNBQUtWLEdBQUwsQ0FBU1csTUFBVCxDQUFpQkMsSUFBSSxDQUFDQyxHQUFMLENBQVMsS0FBS0MsYUFBTCxDQUFtQkMsS0FBNUIsQ0FBakIsRUFBc0QsRUFBdEQ7QUFDSCxHQUxEOztBQU1KO0FBQUMsQ0FqQkQ7O0FBQWFDLFlBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG90LWFpci1iYWxsb29uLy4vc3JjL2pzL0RyYXdhYmxlL0hpbGwudHM/YTQwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3NldHRpbmdzfSBmcm9tIFwiLi4vc2V0dGluZ3NcIjtcclxuaW1wb3J0IHtIc2x9IGZyb20gXCIuLi9IZWxwZXJzL0hzbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhpbGx7XHJcbiAgICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICAgIGNhbnZhc0VsZW1lbnQgOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgIGhpbGw6ICh7IGFtcGxpdHVkZTogbnVtYmVyOyBjb2xvcjogSHNsOyBzdGFydFBvc2l0aW9uOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH0gfCB7IGFtcGxpdHVkZTogbnVtYmVyOyBjb2xvcjogSHNsOyBzdGFydFBvc2l0aW9uOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH0gfCB7IGFtcGxpdHVkZTogbnVtYmVyOyBjb2xvcjogSHNsOyBzdGFydFBvc2l0aW9uOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH0pW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcclxuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcclxuICAgICAgICB0aGlzLmhpbGwgPSBzZXR0aW5ncy5oaWxsLmhpbGxzO1xyXG4gICAgICAgIHRoaXMuZHJhdygpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKXtcclxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oMCw2MCk7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gbmV3IEhzbCgxNDksIDM5LCAzNSkudG9TdHJpbmcoKTtcclxuICAgICAgICB0aGlzLmN0eC5saW5lVG8oKE1hdGguY29zKHRoaXMuY2FudmFzRWxlbWVudC53aWR0aCkpLCA2MCk7XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiY3R4IiwiaGlsbCIsInNldHRpbmdzXzEiLCJoaWxscyIsImRyYXciLCJIaWxsIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwiZmlsbFN0eWxlIiwiSHNsXzEiLCJ0b1N0cmluZyIsImxpbmVUbyIsIk1hdGgiLCJjb3MiLCJjYW52YXNFbGVtZW50Iiwid2lkdGgiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/Drawable/Hill.ts\n");

/***/ }),

/***/ "./src/js/Drawable/Sky.ts":
/*!********************************!*\
  !*** ./src/js/Drawable/Sky.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.Sky = void 0;\n\nvar settings_1 = __webpack_require__(/*! ../settings */ \"./src/js/settings.ts\");\n\nvar Sky = function () {\n  function Sky(canvas, ctx) {\n    this.canvas = canvas;\n    this.ctx = ctx;\n    this.update();\n  }\n\n  Sky.prototype.draw = function () {\n    this.ctx.beginPath();\n    this.ctx.fillStyle = this.gradient;\n    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);\n    this.ctx.closePath();\n  };\n\n  Sky.prototype.updateSize = function () {\n    this.gradient = this.ctx.createLinearGradient(this.canvas.width / 2, 0, this.canvas.width / 2, this.canvas.height);\n    var length = settings_1.settings.sky.gradient.length;\n\n    for (var i = 0; i < length; i++) {\n      this.gradient.addColorStop(i * (1 / (length - 1)), settings_1.settings.sky.gradient[i]);\n    }\n  };\n\n  Sky.prototype.update = function () {\n    this.updateSize();\n    this.draw();\n  };\n\n  return Sky;\n}();\n\nexports.Sky = Sky;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvRHJhd2FibGUvU2t5LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUE7QUFLSSxlQUFZQSxNQUFaLEVBQXVDQyxHQUF2QyxFQUFvRTtBQUNoRSxTQUFLRCxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLQyxNQUFMO0FBQ0g7O0FBRURDO0FBQ0ksU0FBS0YsR0FBTCxDQUFTRyxTQUFUO0FBQ0EsU0FBS0gsR0FBTCxDQUFTSSxTQUFULEdBQXFCLEtBQUtDLFFBQTFCO0FBQ0EsU0FBS0wsR0FBTCxDQUFTTSxRQUFULENBQWtCLENBQWxCLEVBQW9CLENBQXBCLEVBQXVCLEtBQUtQLE1BQUwsQ0FBWVEsS0FBbkMsRUFBMEMsS0FBS1IsTUFBTCxDQUFZUyxNQUF0RDtBQUNBLFNBQUtSLEdBQUwsQ0FBU1MsU0FBVDtBQUNILEdBTEQ7O0FBT0FQO0FBQ0ksU0FBS0csUUFBTCxHQUFnQixLQUFLTCxHQUFMLENBQVNVLG9CQUFULENBQThCLEtBQUtYLE1BQUwsQ0FBWVEsS0FBWixHQUFrQixDQUFoRCxFQUFrRCxDQUFsRCxFQUFxRCxLQUFLUixNQUFMLENBQVlRLEtBQVosR0FBa0IsQ0FBdkUsRUFBMEUsS0FBS1IsTUFBTCxDQUFZUyxNQUF0RixDQUFoQjtBQUNBLFFBQU1HLE1BQU0sR0FBR0Msb0JBQVNDLEdBQVQsQ0FBYVIsUUFBYixDQUFzQk0sTUFBckM7O0FBQ0EsU0FBSyxJQUFJRyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSCxNQUFwQixFQUE0QkcsQ0FBQyxFQUE3QixFQUFpQztBQUM3QixXQUFLVCxRQUFMLENBQWNVLFlBQWQsQ0FBMkJELENBQUMsSUFBSSxLQUFLSCxNQUFNLEdBQUcsQ0FBZCxDQUFKLENBQTVCLEVBQW1EQyxvQkFBU0MsR0FBVCxDQUFhUixRQUFiLENBQXNCUyxDQUF0QixDQUFuRDtBQUNIO0FBQ0osR0FORDs7QUFRQVo7QUFDSSxTQUFLYyxVQUFMO0FBQ0EsU0FBS0MsSUFBTDtBQUNILEdBSEQ7O0FBSUo7QUFBQyxDQTlCRDs7QUFBYUMsV0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob3QtYWlyLWJhbGxvb24vLi9zcmMvanMvRHJhd2FibGUvU2t5LnRzP2E4ZTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtzZXR0aW5nc30gZnJvbSBcIi4uL3NldHRpbmdzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2t5IHtcclxuICAgIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICAgIGdyYWRpZW50OiBDYW52YXNHcmFkaWVudDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xyXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpe1xyXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuZ3JhZGllbnQ7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMCwwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTaXplKCl7XHJcbiAgICAgICAgdGhpcy5ncmFkaWVudCA9IHRoaXMuY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KHRoaXMuY2FudmFzLndpZHRoLzIsMCwgdGhpcy5jYW52YXMud2lkdGgvMiwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICBjb25zdCBsZW5ndGggPSBzZXR0aW5ncy5za3kuZ3JhZGllbnQubGVuZ3RoO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5ncmFkaWVudC5hZGRDb2xvclN0b3AoaSAqICgxIC8gKGxlbmd0aCAtIDEpKSwgc2V0dGluZ3Muc2t5LmdyYWRpZW50W2ldKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCl7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XHJcbiAgICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiY2FudmFzIiwiY3R4IiwidXBkYXRlIiwiU2t5IiwiYmVnaW5QYXRoIiwiZmlsbFN0eWxlIiwiZ3JhZGllbnQiLCJmaWxsUmVjdCIsIndpZHRoIiwiaGVpZ2h0IiwiY2xvc2VQYXRoIiwiY3JlYXRlTGluZWFyR3JhZGllbnQiLCJsZW5ndGgiLCJzZXR0aW5nc18xIiwic2t5IiwiaSIsImFkZENvbG9yU3RvcCIsInVwZGF0ZVNpemUiLCJkcmF3IiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/Drawable/Sky.ts\n");

/***/ }),

/***/ "./src/js/Helpers/Hsl.ts":
/*!*******************************!*\
  !*** ./src/js/Helpers/Hsl.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.Hsl = void 0;\n\nvar Hsl = function () {\n  function Hsl(hue, saturation, lightness) {\n    this.hue = hue;\n    this.saturation = saturation;\n    this.lightness = lightness;\n  }\n\n  Hsl.prototype.update = function (minSaturation, maxSaturation, minLightness, maxLightness) {\n    if (minSaturation === void 0) {\n      minSaturation = 40;\n    }\n\n    if (maxSaturation === void 0) {\n      maxSaturation = 40;\n    }\n\n    if (minLightness === void 0) {\n      minLightness = 40;\n    }\n\n    if (maxLightness === void 0) {\n      maxLightness = 40;\n    }\n\n    this.saturation = minSaturation + Math.random() * (maxSaturation - minSaturation);\n    this.lightness = minLightness + Math.random() * (maxLightness - minLightness);\n    return this;\n  };\n\n  Hsl.prototype.toString = function () {\n    return \"hsla(\".concat(this.hue, \", \").concat(this.saturation, \"%, \").concat(this.lightness, \"%)\");\n  };\n\n  return Hsl;\n}();\n\nexports.Hsl = Hsl;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvSGVscGVycy9Ic2wudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUtJLGVBQVlBLEdBQVosRUFBeUJDLFVBQXpCLEVBQTZDQyxTQUE3QyxFQUE4RDtBQUMxRCxTQUFLRixHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLQyxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFNBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0g7O0FBRURDLG1DQUFPQyxhQUFQLEVBQTJCQyxhQUEzQixFQUErQ0MsWUFBL0MsRUFBa0VDLFlBQWxFLEVBQW1GO0FBQTVFO0FBQUFIO0FBQWtCOztBQUFFO0FBQUFDO0FBQWtCOztBQUFFO0FBQUFDO0FBQWlCOztBQUFFO0FBQUFDO0FBQWlCOztBQUMvRSxTQUFLTixVQUFMLEdBQWtCRyxhQUFhLEdBQUdJLElBQUksQ0FBQ0MsTUFBTCxNQUFpQkosYUFBYSxHQUFHRCxhQUFqQyxDQUFsQztBQUNBLFNBQUtGLFNBQUwsR0FBaUJJLFlBQVksR0FBR0UsSUFBSSxDQUFDQyxNQUFMLE1BQWlCRixZQUFZLEdBQUdELFlBQWhDLENBQWhDO0FBQ0EsV0FBTyxJQUFQO0FBQ0gsR0FKRDs7QUFNQUg7QUFDSSxXQUFPLGVBQVEsS0FBS0gsR0FBYixFQUFnQixJQUFoQixFQUFnQlUsTUFBaEIsQ0FBcUIsS0FBS1QsVUFBMUIsRUFBb0MsS0FBcEMsRUFBb0NTLE1BQXBDLENBQTBDLEtBQUtSLFNBQS9DLEVBQXdELElBQXhELENBQVA7QUFDSCxHQUZEOztBQUdKO0FBQUMsQ0FwQkQ7O0FBQWFTLFdBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG90LWFpci1iYWxsb29uLy4vc3JjL2pzL0hlbHBlcnMvSHNsLnRzPzEzY2IiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEhzbCB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGh1ZTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBzYXR1cmF0aW9uOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGxpZ2h0bmVzczogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGh1ZTogbnVtYmVyLCBzYXR1cmF0aW9uOiBudW1iZXIsIGxpZ2h0bmVzczogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5odWUgPSBodWU7XHJcbiAgICAgICAgdGhpcy5zYXR1cmF0aW9uID0gc2F0dXJhdGlvbjtcclxuICAgICAgICB0aGlzLmxpZ2h0bmVzcyA9IGxpZ2h0bmVzcztcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUobWluU2F0dXJhdGlvbiA9IDQwLCBtYXhTYXR1cmF0aW9uID0gNDAsIG1pbkxpZ2h0bmVzcyA9IDQwLCBtYXhMaWdodG5lc3MgPSA0MCkge1xyXG4gICAgICAgIHRoaXMuc2F0dXJhdGlvbiA9IG1pblNhdHVyYXRpb24gKyBNYXRoLnJhbmRvbSgpICogKG1heFNhdHVyYXRpb24gLSBtaW5TYXR1cmF0aW9uKTtcclxuICAgICAgICB0aGlzLmxpZ2h0bmVzcyA9IG1pbkxpZ2h0bmVzcyArIE1hdGgucmFuZG9tKCkgKiAobWF4TGlnaHRuZXNzIC0gbWluTGlnaHRuZXNzKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBgaHNsYSgke3RoaXMuaHVlfSwgJHt0aGlzLnNhdHVyYXRpb259JSwgJHt0aGlzLmxpZ2h0bmVzc30lKWA7XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiaHVlIiwic2F0dXJhdGlvbiIsImxpZ2h0bmVzcyIsIkhzbCIsIm1pblNhdHVyYXRpb24iLCJtYXhTYXR1cmF0aW9uIiwibWluTGlnaHRuZXNzIiwibWF4TGlnaHRuZXNzIiwiTWF0aCIsInJhbmRvbSIsImNvbmNhdCIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/Helpers/Hsl.ts\n");

/***/ }),

/***/ "./src/js/Main.ts":
/*!************************!*\
  !*** ./src/js/Main.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\n\nvar Sky_1 = __webpack_require__(/*! ./Drawable/Sky */ \"./src/js/Drawable/Sky.ts\");\n\nvar Hill_1 = __webpack_require__(/*! ./Drawable/Hill */ \"./src/js/Drawable/Hill.ts\");\n\nvar Main = function () {\n  function Main() {\n    this.canvas = document.getElementById('my-canvas');\n    this.ctx = this.canvas.getContext('2d');\n    this.resizeCanvas();\n    this.sky = new Sky_1.Sky(this.canvas, this.ctx);\n    this.hill = new Hill_1.Hill(this.ctx);\n    this.addEventListeners();\n  }\n\n  Main.prototype.addEventListeners = function () {\n    var _this = this;\n\n    window.addEventListener('resize', function () {\n      _this.resizeCanvas();\n    });\n  };\n\n  Main.prototype.resizeCanvas = function () {\n    this.canvas.width = window.innerWidth;\n    this.canvas.height = window.innerHeight;\n  };\n\n  return Main;\n}();\n\nnew Main();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvTWFpbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBQ0E7O0FBRUE7QUFNSTtBQUNJLFNBQUtBLE1BQUwsR0FBY0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBQWQ7QUFDQSxTQUFLQyxHQUFMLEdBQVcsS0FBS0gsTUFBTCxDQUFZSSxVQUFaLENBQXVCLElBQXZCLENBQVg7QUFDQSxTQUFLQyxZQUFMO0FBQ0EsU0FBS0MsR0FBTCxHQUFXLElBQUlDLFNBQUosQ0FBUSxLQUFLUCxNQUFiLEVBQXFCLEtBQUtHLEdBQTFCLENBQVg7QUFDQSxTQUFLSyxJQUFMLEdBQVksSUFBSUMsV0FBSixDQUFTLEtBQUtOLEdBQWQsQ0FBWjtBQUNBLFNBQUtPLGlCQUFMO0FBQ0g7O0FBRURDO0FBQUE7O0FBQ0lDLFVBQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0M7QUFDOUJDLFdBQUksQ0FBQ1QsWUFBTDtBQUNILEtBRkQ7QUFHSCxHQUpEOztBQU1BTTtBQUNJLFNBQUtYLE1BQUwsQ0FBWWUsS0FBWixHQUFvQkgsTUFBTSxDQUFDSSxVQUEzQjtBQUNBLFNBQUtoQixNQUFMLENBQVlpQixNQUFaLEdBQXFCTCxNQUFNLENBQUNNLFdBQTVCO0FBQ0gsR0FIRDs7QUFJSjtBQUFDLENBekJEOztBQTJCQSxJQUFJUCxJQUFKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG90LWFpci1iYWxsb29uLy4vc3JjL2pzL01haW4udHM/MDEyMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NreX0gZnJvbSBcIi4vRHJhd2FibGUvU2t5XCI7XHJcbmltcG9ydCB7SGlsbH0gZnJvbSBcIi4vRHJhd2FibGUvSGlsbFwiO1xyXG5cclxuY2xhc3MgTWFpbiB7XHJcbiAgICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICAgIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBza3k6IFNreTtcclxuICAgIGhpbGw6IEhpbGw7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXktY2FudmFzJykgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIHRoaXMucmVzaXplQ2FudmFzKCk7XHJcbiAgICAgICAgdGhpcy5za3kgPSBuZXcgU2t5KHRoaXMuY2FudmFzLCB0aGlzLmN0eCk7XHJcbiAgICAgICAgdGhpcy5oaWxsID0gbmV3IEhpbGwodGhpcy5jdHgpO1xyXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRFdmVudExpc3RlbmVycygpe1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVzaXplQ2FudmFzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzaXplQ2FudmFzKCl7XHJcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbm5ldyBNYWluKCk7Il0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwicmVzaXplQ2FudmFzIiwic2t5IiwiU2t5XzEiLCJoaWxsIiwiSGlsbF8xIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJNYWluIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIl90aGlzIiwid2lkdGgiLCJpbm5lcldpZHRoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/Main.ts\n");

/***/ }),

/***/ "./src/js/settings.ts":
/*!****************************!*\
  !*** ./src/js/settings.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.settings = void 0;\n\nvar Hsl_1 = __webpack_require__(/*! ./Helpers/Hsl */ \"./src/js/Helpers/Hsl.ts\");\n\nexports.settings = {\n  sky: {\n    gradient: ['hsl(200, 95%, 33%)', 'hsl(200, 95%, 80%)']\n  },\n  hill: {\n    startPosition: 60,\n    hills: [{\n      amplitude: 27,\n      color: new Hsl_1.Hsl(149, 39, 35),\n      height: 35,\n      startPosition: 120\n    }, {\n      amplitude: 24,\n      color: new Hsl_1.Hsl(149, 39, 45),\n      height: 25,\n      startPosition: 60\n    }, {\n      amplitude: 8,\n      color: new Hsl_1.Hsl(149, 39, 55),\n      height: 30,\n      startPosition: 0\n    }]\n  },\n  tree: {\n    trunk: {\n      color: new Hsl_1.Hsl(345, 60, 11),\n      width: {\n        min: 25,\n        max: 45\n      },\n      height: {\n        min: 120,\n        max: 200\n      }\n    },\n    crown: {\n      color: new Hsl_1.Hsl(154, 90, 11),\n      radius: {\n        min: 25,\n        max: 35\n      },\n      count: {\n        min: 8,\n        max: 12\n      }\n    },\n    maxCount: 5,\n    verticalStart: {\n      min: 0,\n      max: 30\n    },\n    horizontalStart: 1 / 3,\n    horizontalGap: {\n      min: 1 / 6,\n      max: 1 / 3\n    }\n  },\n  Balloon: {\n    startPosition: {\n      x: 120,\n      y: 50\n    },\n    border: {\n      color: 'hsl(45, 75%, 60%)',\n      dimensions: {\n        width: 60,\n        height: 10\n      }\n    },\n    basket: {\n      color: 'hsl(45, 60%, 75%)',\n      dimensions: {\n        width: 60,\n        height: 30\n      }\n    },\n    cable: {\n      color: 'hsl(45, 75%, 60%)',\n      spaceFromBorder: 6,\n      dimensions: {\n        width: 2,\n        height: 30\n      }\n    },\n    balloon: {\n      color: 'hsl(45, 90%, 50%)',\n      radius: 80,\n      controlPointY: 120,\n      verticalStretch: 0\n    }\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUhWO0FBSUxDLHFCQUFlLEVBQUU7QUFKWjtBQXpCSjtBQTVCVyxDQUFYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG90LWFpci1iYWxsb29uLy4vc3JjL2pzL3NldHRpbmdzLnRzP2M0MjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIc2x9IGZyb20gXCIuL0hlbHBlcnMvSHNsXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0dGluZ3MgPSB7XHJcbiAgICBza3k6IHtcclxuICAgICAgICBncmFkaWVudDogWydoc2woMjAwLCA5NSUsIDMzJSknLCAnaHNsKDIwMCwgOTUlLCA4MCUpJ11cclxuICAgIH0sXHJcbiAgICBoaWxsOiB7XHJcbiAgICAgICAgc3RhcnRQb3NpdGlvbjogNjAsXHJcbiAgICAgICAgaGlsbHM6IFtcclxuICAgICAgICAgICAge2FtcGxpdHVkZTogMjcsIGNvbG9yOiBuZXcgSHNsKDE0OSwgMzksIDM1KSwgaGVpZ2h0OiAzNSwgc3RhcnRQb3NpdGlvbjogMTIwfSxcclxuICAgICAgICAgICAge2FtcGxpdHVkZTogMjQsIGNvbG9yOiBuZXcgSHNsKDE0OSwgMzksIDQ1KSwgaGVpZ2h0OiAyNSwgc3RhcnRQb3NpdGlvbjogNjB9LFxyXG4gICAgICAgICAgICB7YW1wbGl0dWRlOiA4LCBjb2xvcjogbmV3IEhzbCgxNDksIDM5LCA1NSksIGhlaWdodDogMzAsIHN0YXJ0UG9zaXRpb246IDB9LFxyXG4gICAgICAgIF1cclxuICAgIH0sXHJcbiAgICB0cmVlOiB7XHJcbiAgICAgICAgdHJ1bms6IHtcclxuICAgICAgICAgICAgY29sb3I6IG5ldyBIc2woMzQ1LCA2MCwgMTEpLFxyXG4gICAgICAgICAgICB3aWR0aDoge21pbjogMjUsIG1heDogNDV9LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHttaW46IDEyMCwgbWF4OiAyMDB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3Jvd246IHtcclxuICAgICAgICAgICAgY29sb3I6IG5ldyBIc2woMTU0LCA5MCwgMTEpLFxyXG4gICAgICAgICAgICByYWRpdXM6IHttaW46IDI1LCBtYXg6IDM1fSxcclxuICAgICAgICAgICAgY291bnQ6IHttaW46IDgsIG1heDogMTJ9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWF4Q291bnQ6IDUsXHJcbiAgICAgICAgdmVydGljYWxTdGFydDoge21pbjogMCwgbWF4OiAzMH0sXHJcbiAgICAgICAgaG9yaXpvbnRhbFN0YXJ0OiAxIC8gMyxcclxuICAgICAgICBob3Jpem9udGFsR2FwOiB7bWluOiAxIC8gNiwgbWF4OiAxIC8gM31cclxuICAgIH0sXHJcbiAgICBCYWxsb29uOiB7XHJcbiAgICAgICAgc3RhcnRQb3NpdGlvbjoge3g6IDEyMCwgeTogNTB9LFxyXG4gICAgICAgIGJvcmRlcjoge1xyXG4gICAgICAgICAgICBjb2xvcjogJ2hzbCg0NSwgNzUlLCA2MCUpJyxcclxuICAgICAgICAgICAgZGltZW5zaW9uczoge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDYwLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMCxcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIGJhc2tldDoge1xyXG4gICAgICAgICAgICBjb2xvcjogJ2hzbCg0NSwgNjAlLCA3NSUpJyxcclxuICAgICAgICAgICAgZGltZW5zaW9uczoge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDYwLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FibGU6IHtcclxuICAgICAgICAgICAgY29sb3I6ICdoc2woNDUsIDc1JSwgNjAlKScsXHJcbiAgICAgICAgICAgIHNwYWNlRnJvbUJvcmRlcjogNixcclxuICAgICAgICAgICAgZGltZW5zaW9uczoge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBiYWxsb29uOiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAnaHNsKDQ1LCA5MCUsIDUwJSknLFxyXG4gICAgICAgICAgICByYWRpdXM6IDgwLFxyXG4gICAgICAgICAgICBjb250cm9sUG9pbnRZOiAxMjAsXHJcbiAgICAgICAgICAgIHZlcnRpY2FsU3RyZXRjaDogMFxyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJza3kiLCJncmFkaWVudCIsImhpbGwiLCJzdGFydFBvc2l0aW9uIiwiaGlsbHMiLCJhbXBsaXR1ZGUiLCJjb2xvciIsIkhzbF8xIiwiaGVpZ2h0IiwidHJlZSIsInRydW5rIiwid2lkdGgiLCJtaW4iLCJtYXgiLCJjcm93biIsInJhZGl1cyIsImNvdW50IiwibWF4Q291bnQiLCJ2ZXJ0aWNhbFN0YXJ0IiwiaG9yaXpvbnRhbFN0YXJ0IiwiaG9yaXpvbnRhbEdhcCIsIkJhbGxvb24iLCJ4IiwieSIsImJvcmRlciIsImRpbWVuc2lvbnMiLCJiYXNrZXQiLCJjYWJsZSIsInNwYWNlRnJvbUJvcmRlciIsImJhbGxvb24iLCJjb250cm9sUG9pbnRZIiwidmVydGljYWxTdHJldGNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/settings.ts\n");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9tYWluLnNjc3MuanMiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG90LWFpci1iYWxsb29uLy4vc3JjL3Njc3MvbWFpbi5zY3NzP2Y3ZTUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scss/main.scss\n");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/Main": 0,
/******/ 			"css/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkhot_air_balloon"] = self["webpackChunkhot_air_balloon"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/js/Main.ts")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/scss/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;