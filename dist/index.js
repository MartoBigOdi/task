"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app"));

require("./db");

var _colors = _interopRequireDefault(require("colors"));

//ESC6 siempre, buenas practicas
_app["default"].listen(_app["default"].get('port'));

console.log("Server on port".trap.random, _app["default"].get('port'));