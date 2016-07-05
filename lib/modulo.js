"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = modulo;
function modulo(val, max) {
  return val < 0 ? (val % max + max) % max : val % max;
}