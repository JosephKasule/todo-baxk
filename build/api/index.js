"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.app = undefined;

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _routes = require("../routes");

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express2.default)();
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({
  extended: true
}));
app.use(_routes2.default);
exports.app = app;
//# sourceMappingURL=index.js.map