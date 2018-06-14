"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Success = function (_Component) {
  _inherits(Success, _Component);

  function Success() {
    _classCallCheck(this, Success);

    var _this = _possibleConstructorReturn(this, (Success.__proto__ || Object.getPrototypeOf(Success)).apply(this, arguments));

    _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "title"];
    _this.$props = {};
    _this.$components = {};

    _this.state = {
      title: '添加平台运营成功'
    };
    _this.state = _this._createData();
    return _this;
  }

  _createClass(Success, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var userInfo = _index2.default.getUserInfo();
      if (userInfo) {
        this.userInfo = userInfo;
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentWillUpdate",
    value: function componentWillUpdate(nextProps, nextState) {}
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {}
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return true;
    }
  }, {
    key: "hello",
    value: function hello() {}
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      {
        var anonymousState__temp = this.hello();
        var anonymousState__temp2 = this.hello();
        Object.assign(this.__state, {
          anonymousState__temp: anonymousState__temp,
          anonymousState__temp2: anonymousState__temp2
        });
        this.__state.__data = Object.assign({}, this.__state);
        return this.__state;
      }
      var __state = this.__state;
      delete this.__state;
      return __state;
    }
  }]);

  return Success;
}(_index.Component);

exports.default = Success;

Page(require('../../npm/@tarojs/taro-weapp/index.js').default.createPage(Success, {
  path: 'src/pages/success/success.js'
}));