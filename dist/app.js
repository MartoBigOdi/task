"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _tasks = _interopRequireDefault(require("./routes/tasks.routes"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

//ESC6 siempre, buenas practicas
//const express = require('express');
//Utilizando Babel
var app = (0, _express["default"])(); //Settings
//Si nos dan un puerto 

app.set('port', process.env.PORT || 4000); //Middlewares

var corsOptions = {};
app.use((0, _cors["default"])(corsOptions)); //Permite otras peticiones de forma local. 

app.use(_express["default"].json()); //Indicamos que use express.json() para leer los json del "req.body"

app.use(_express["default"].urlencoded({
  extended: false
})); //Ahora si entendemos como recibir forms desde html

app.use((0, _morgan["default"])('dev')); //Muestra por consola todas las peticiones que hacemos. 
//Rutes

app.get('/', function (req, res) {
  res.json({
    message: 'Prueba de API con MONGO DB'
  });
}); //De esta manera le ponemos '/' cuantos queramos a las rutas que vienen de esta dirección. 

app.use('/api/tasks', _tasks["default"]);
var _default = app;
exports["default"] = _default;