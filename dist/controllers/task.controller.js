"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateTask = exports.findAllTaskDone = exports.deleteTask = exports.findById = exports.createTask = exports.findAllTasks = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Task = _interopRequireDefault(require("../models/Task"));

var _getPagination2 = require("../libs/getPagination");

//ESC6 siempre, buenas practicas
//Importamos el modelo de la DB para poder utilizar sun métodos, find() o save() por ejemplo.
//exportamos la constante donde guardamos el método que nos trae todas las consultas de la DB
var findAllTasks = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$query, size, page, _getPagination, limit, offset, task;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            //Controlamos la paginación con Mongoose-Paginate-v12
            _req$query = req.query, size = _req$query.size, page = _req$query.page;
            _getPagination = (0, _getPagination2.getPagination)(page, size), limit = _getPagination.limit, offset = _getPagination.offset;
            _context.next = 4;
            return _Task["default"].paginate({}, {
              offset: offset,
              limit: limit
            });

          case 4:
            task = _context.sent;

            if (task) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", res.status(400).send({
              message: "Cannot connectec to DB"
            }));

          case 7:
            //Consultamos ala DB y lo guardamos en una const para luego devolver al cliente.
            try {
              res.json(task);
            } catch (error) {
              res.status(500).json({
                message: error.message || 'Something goes wrong retrieving the task'
              });
            }

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function findAllTasks(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); //exportamos la const para usarla en otro archivo.


exports.findAllTasks = findAllTasks;

var createTask = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var newTask;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (req.body.title) {
              _context2.next = 2;
              break;
            }

            return _context2.abrupt("return", res.status(400).send({
              message: "Content cannot be empty"
            }));

          case 2:
            _context2.prev = 2;
            //Guardamos la tarea nueva en una constante. 
            newTask = new _Task["default"]({
              title: req.body.title,
              descripcion: req.body.descripcion,
              done: req.body.done ? req.body.done : false //Usamos un ternario para verificar que venga un valor en la respuesta. Sino pone "false" por default

            });
            _context2.next = 6;
            return newTask.save();

          case 6:
            //Guardamos la tarea en la DB
            console.log(newTask);
            res.json({
              message: "New Task created"
            });
            _context2.next = 13;
            break;

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](2);
            res.status(500).json({
              message: _context2.t0.message || 'Houston, we have a problem'
            });

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 10]]);
  }));

  return function createTask(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}(); //exportamos la const que usamos para guardar el método que hicimos para busar una tarea por id


exports.createTask = createTask;

var findById = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, task;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.next = 3;
            return _Task["default"].findById(id);

          case 3:
            task = _context3.sent;

            if (task) {
              _context3.next = 6;
              break;
            }

            return _context3.abrupt("return", res.status(400).json({
              message: "There is no ID Task: ".concat(id)
            }));

          case 6:
            try {
              res.json(task);
            } catch (error) {
              res.status(500).json({
                message: error.message || 'Houston, something goes wrong finding the task'
              });
            }

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function findById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}(); //exportamos la const que usamos para guardar el método que elimina la tarea.


exports.findById = findById;

var deleteTask = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, task;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.next = 3;
            return _Task["default"].findById(id);

          case 3:
            task = _context4.sent;

            if (task) {
              _context4.next = 6;
              break;
            }

            return _context4.abrupt("return", res.status(400).json({
              message: "There is no ID Task: ".concat(id)
            }));

          case 6:
            try {
              res.json({
                message: "Name Task Deleted: ".concat(task.title, " Description: ").concat(task.descripcion) //Le pasamos data con los bastix

              });
            } catch (error) {
              res.status(500).json({
                message: error.message || 'Houston, we have a problem'
              });
            }

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function deleteTask(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}(); //exportamos la const que contiene el método que devuelve todas las tareas en done: true.


exports.deleteTask = deleteTask;

var findAllTaskDone = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var tasks;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _Task["default"].find({
              done: true
            });

          case 2:
            tasks = _context5.sent;

            //Consultamos ala DB y lo guardamos en una const para luego devolver al cliente.
            try {
              res.json(tasks);
            } catch (error) {
              res.status(500).json({
                message: error.message || 'Houston, we have a problem'
              });
            }

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function findAllTaskDone(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}(); //exportamos la const que guarda el método para actualizar. "update"


exports.findAllTaskDone = findAllTaskDone;

var updateTask = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var id, updatedTask;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;

            if (id) {
              _context6.next = 3;
              break;
            }

            return _context6.abrupt("return", res.status(400).json({
              message: "There is no ID Task: ".concat(id)
            }));

          case 3:
            _context6.next = 5;
            return _Task["default"].findByIdAndUpdate(id, req.body);

          case 5:
            updatedTask = _context6.sent;

            //Este método tiene dos parametros, uno que toma el id de la tarea a actualizar y otro que toma los datos del req.body para hacerlo. 
            try {
              res.json({
                message: "Updated successfully, Task: ".concat(updatedTask.title)
              });
            } catch (error) {
              res.status(500).json({
                message: error.message || 'Houston, we have a problem'
              });
            }

          case 7:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function updateTask(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.updateTask = updateTask;