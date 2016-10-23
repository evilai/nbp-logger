'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (_ref) {
    var level = _ref.level;
    var colorize = _ref.colorize;

    return new _winston2.default.Logger({
        transports: [new _winston2.default.transports.Console({ level: level, colorize: colorize })]
    });
};

exports.createExpressLog = createExpressLog;
exports.createExpressErrorLog = createExpressErrorLog;

var _winston = require('winston');

var _winston2 = _interopRequireDefault(_winston);

var _expressWinston = require('express-winston');

var _expressWinston2 = _interopRequireDefault(_expressWinston);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createExpressLog(_ref2) {
    var colorize = _ref2.colorize;
    var _ref2$label = _ref2.label;
    var label = _ref2$label === undefined ? 'HTTP' : _ref2$label;

    return _expressWinston2.default.logger({
        transports: [new _winston2.default.transports.Console({
            json: false,
            label: label,
            colorize: colorize
        })],
        meta: false,
        msg: '{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}'
    });
};

function createExpressErrorLog(_ref3) {
    var colorize = _ref3.colorize;

    return _expressWinston2.default.errorLogger({
        transports: [new _winston2.default.transports.Console({
            json: true,
            colorize: colorize
        })],
        showStack: true
    });
}