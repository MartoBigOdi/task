"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPagination = void 0;

var getPagination = function getPagination(page, size) {
  var limit = size ? +size : 3; //Si existe un tamaño que me viene lo convierte ese, sino es 3.

  var offset = page ? page * limit : 0;
  return {
    limit: limit,
    offset: offset
  }; //El offset es para controlar y no repetir las páginas. 
};

exports.getPagination = getPagination;