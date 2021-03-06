'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Slide = function (_Component) {
  _inherits(Slide, _Component);

  function Slide() {
    _classCallCheck(this, Slide);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Slide).apply(this, arguments));
  }

  _createClass(Slide, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._node = _reactDom2.default.findDOMNode(this);
      this._getDimensions();

      if (this.props.isCurrent) {
        this._onHeightChange();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(lastProps) {
      var isCurrent = this.props.isCurrent;

      if (lastProps.isCurrent !== isCurrent && isCurrent === true) {
        this._onHeightChange();
      }
    }
  }, {
    key: '_getDimensions',
    value: function _getDimensions() {
      this._width = this._node.offsetWidth;
      this._height = this._node.offsetHeight;
    }
  }, {
    key: '_onHeightChange',
    value: function _onHeightChange() {
      this.props.onSlideHeight(this._height);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var children = _props.children;
      var style = _props.style;

      return (0, _react.cloneElement)(_react.Children.only(children), { style: style });
    }
  }]);

  return Slide;
}(_react.Component);

exports.default = Slide;