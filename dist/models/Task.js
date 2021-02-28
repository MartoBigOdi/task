"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var _mongoosePaginateV = _interopRequireDefault(require("mongoose-paginate-v2"));

//ESC6 siempre, buenas practicas
//Módilo de mongoose que nos provee métodos de paginación
//Usamos el método Schema para darle las props. 
//Le tenemos que pasar que tipo de dato son.  
var taskSchema = new _mongoose.Schema({
  title: {
    type: String,
    required: true,
    //"trim() es trim misma función esta prop."
    trim: true
  },
  descripcion: {
    type: String,
    trim: true
  },
  done: {
    type: Boolean,
    "default": false
  }
}, {
  //props que se agregan internamente. false en version y le sumamos los datos del tiempo de creacion.  
  versionKey: false,
  timestamps: true
}); //Acá ya tenemos la paginación lista para ser utilizada.

taskSchema.plugin(_mongoosePaginateV["default"]); //Ahora usamos "model" que importamos del módulo. 
//Como último exportamos para poder utilizar el método creado. 

var _default = (0, _mongoose.model)("Task", taskSchema);

exports["default"] = _default;