'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  height: ', 'px;\n  width: ', 'px;\n  top: ', 'px;\n\n  * {\n    box-sizing: border-box;\n  }\n\n  .square {\n    height: ', 'px;\n    width: ', 'px;\n    top: ', 'px;\n    margin-right: calc(', 'px / 3);\n    margin-top: calc(', 'px / 3);\n    background: ', ';\n    float: left;\n    position: relative;\n    opacity: 0;\n    animation: self-building-square-spinner\n      ', 'ms infinite;\n  }\n  .square:nth-child(1) {\n    animation-delay: calc(', 'ms * 6);\n  }\n  .square:nth-child(2) {\n    animation-delay: calc(', 'ms * 7);\n  }\n  .square:nth-child(3) {\n    animation-delay: calc(', 'ms * 8);\n  }\n  .square:nth-child(4) {\n    animation-delay: calc(', 'ms * 3);\n  }\n  .square:nth-child(5) {\n    animation-delay: calc(', 'ms * 4);\n  }\n  .square:nth-child(6) {\n    animation-delay: calc(', 'ms * 5);\n  }\n  .square:nth-child(7) {\n    animation-delay: calc(', 'ms * 0);\n  }\n  .square:nth-child(8) {\n    animation-delay: calc(', 'ms * 1);\n  }\n  .square:nth-child(9) {\n    animation-delay: calc(', 'ms * 2);\n  }\n  .clear {\n    clear: both;\n  }\n  @keyframes self-building-square-spinner {\n    0% {\n      opacity: 0;\n    }\n    5% {\n      opacity: 1;\n      top: 0;\n    }\n    50.9% {\n      opacity: 1;\n      top: 0;\n    }\n    55.9% {\n      opacity: 0;\n      top: inherit;\n    }\n  }\n'], ['\n  height: ', 'px;\n  width: ', 'px;\n  top: ', 'px;\n\n  * {\n    box-sizing: border-box;\n  }\n\n  .square {\n    height: ', 'px;\n    width: ', 'px;\n    top: ', 'px;\n    margin-right: calc(', 'px / 3);\n    margin-top: calc(', 'px / 3);\n    background: ', ';\n    float: left;\n    position: relative;\n    opacity: 0;\n    animation: self-building-square-spinner\n      ', 'ms infinite;\n  }\n  .square:nth-child(1) {\n    animation-delay: calc(', 'ms * 6);\n  }\n  .square:nth-child(2) {\n    animation-delay: calc(', 'ms * 7);\n  }\n  .square:nth-child(3) {\n    animation-delay: calc(', 'ms * 8);\n  }\n  .square:nth-child(4) {\n    animation-delay: calc(', 'ms * 3);\n  }\n  .square:nth-child(5) {\n    animation-delay: calc(', 'ms * 4);\n  }\n  .square:nth-child(6) {\n    animation-delay: calc(', 'ms * 5);\n  }\n  .square:nth-child(7) {\n    animation-delay: calc(', 'ms * 0);\n  }\n  .square:nth-child(8) {\n    animation-delay: calc(', 'ms * 1);\n  }\n  .square:nth-child(9) {\n    animation-delay: calc(', 'ms * 2);\n  }\n  .clear {\n    clear: both;\n  }\n  @keyframes self-building-square-spinner {\n    0% {\n      opacity: 0;\n    }\n    5% {\n      opacity: 1;\n      top: 0;\n    }\n    50.9% {\n      opacity: 1;\n      top: 0;\n    }\n    55.9% {\n      opacity: 0;\n      top: inherit;\n    }\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BuildingSquare = _styledComponents2.default.div(_templateObject, function (props) {
  return props.size;
}, function (props) {
  return props.size;
}, function (props) {
  return -1 * props.initialTopPosition;
}, function (props) {
  return props.size / 4;
}, function (props) {
  return props.size / 4;
}, function (props) {
  return -1 * props.initialTopPosition;
}, function (props) {
  return props.size / 4;
}, function (props) {
  return props.size / 4;
}, function (props) {
  return props.color;
}, function (props) {
  return props.animationDuration;
}, function (props) {
  return props.animationDuration * 0.05;
}, function (props) {
  return props.animationDuration * 0.05;
}, function (props) {
  return props.animationDuration * 0.05;
}, function (props) {
  return props.animationDuration * 0.05;
}, function (props) {
  return props.animationDuration * 0.05;
}, function (props) {
  return props.animationDuration * 0.05;
}, function (props) {
  return props.animationDuration * 0.05;
}, function (props) {
  return props.animationDuration * 0.05;
}, function (props) {
  return props.animationDuration * 0.05;
});

var propTypes = {
  size: _propTypes2.default.number,
  animationDuration: _propTypes2.default.number,
  color: _propTypes2.default.string,
  className: _propTypes2.default.string,
  style: _propTypes2.default.object
};

var defaultProps = {
  size: 40,
  color: '#fff',
  animationDuration: 6000,
  className: ''
};

function generateSpinners(num) {
  return Array.from({ length: num }).map(function (val, index) {
    return _react2.default.createElement('div', { key: index, className: 'square' + (index % 3 === 0 ? ' clear' : '') });
  });
}

var SelfBuildingSquareSpinner = function SelfBuildingSquareSpinner(_ref) {
  var size = _ref.size,
      color = _ref.color,
      animationDuration = _ref.animationDuration,
      className = _ref.className,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, ['size', 'color', 'animationDuration', 'className', 'style']);

  var initialTopPosition = size / 6;

  return _react2.default.createElement(
    BuildingSquare,
    Object.assign({
      size: size,
      color: color,
      animationDuration: animationDuration,
      className: 'self-building-square-spinner' + (className ? ' ' + className : ''),
      style: style,
      initialTopPosition: initialTopPosition
    }, props),
    generateSpinners(9)
  );
};

SelfBuildingSquareSpinner.propTypes = propTypes;
SelfBuildingSquareSpinner.defaultProps = defaultProps;

exports.default = SelfBuildingSquareSpinner;

//# sourceMappingURL=SelfBuildingSquareSpinner.js.map