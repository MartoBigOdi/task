"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _config = _interopRequireDefault(require("./config"));

require("colors");

//ESC6 siempre, buenas practicas
//Config tiene le URI de la DB
//Connection DB
(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
  var database;
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _mongoose["default"].connect(_config["default"].mongodbURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
          });

        case 3:
          database = _context.sent;
          console.log("DB:".trap.blue, database.connection.name.blue);
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, null, [[0, 7]]);
}))();