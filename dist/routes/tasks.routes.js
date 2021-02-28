"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var taskController = _interopRequireWildcard(require("../controllers/task.controller"));

//ESC6 siempre, buenas practicas
//importamos todas las funciones del controlador
var router = (0, _express.Router)(); //Ruta GET que devuelve todas las tareas dadas.

router.get('/', taskController.findAllTasks); //Creamos una tarea nueva con esta ruta y la guardamos

router.post('/', taskController.createTask); //Ruta para buscar las tareas hechas "done: true" 

router.get('/done', taskController.findAllTaskDone); //IMPORTANTE poner la ruta antes de las busquedas de ID porque nos genera un error forzado, crea un conflicto de rutas
//Ruta para buscar tarea por ID

router.get('/:id', taskController.findById); //Ruta para borrar tarea por ID

router["delete"]('/:id', taskController.deleteTask); //Ruta para actualizar tarea por ID

router.put('/:id', taskController.updateTask);
var _default = router;
exports["default"] = _default;