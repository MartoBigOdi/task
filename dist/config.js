"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dotenv = require("dotenv");

//ESC6 siempre, buenas practicas
//DOTENV maneja las variables de entorno
(0, _dotenv.config)();
var _default = {
  mongodbURL: process.env.URI_MONGODB || "mongodb://localhost/tasksapi"
};
exports["default"] = _default;