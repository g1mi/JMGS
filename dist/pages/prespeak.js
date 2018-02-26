'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _test = require('./../mixins/test.js');

var _test2 = _interopRequireDefault(_test);

var _bulletin = require('./../components/bulletin.js');

var _bulletin2 = _interopRequireDefault(_bulletin);

var _Mock = require('./../util/Mock.js');

var _Mock2 = _interopRequireDefault(_Mock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Precreateticket = function (_wepy$page) {
  _inherits(Precreateticket, _wepy$page);

  function Precreateticket() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Precreateticket);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Precreateticket.__proto__ || Object.getPrototypeOf(Precreateticket)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '准备创建敢说'
    }, _this.components = {
      bulletin: _bulletin2.default
    }, _this.mixins = [_test2.default], _this.data = {}, _this.computed = {
      now: function now() {
        return +new Date();
      }
    }, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Precreateticket, [{
    key: 'onLoad',
    value: function onLoad() {
      this.$invoke('bulletin', 'typeInfo', _Mock2.default.getBulletinInfo());
    }
  }]);

  return Precreateticket;
}(_wepy2.default.page);

exports.default = Precreateticket;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZXNwZWFrLmpzIl0sIm5hbWVzIjpbIlByZWNyZWF0ZXRpY2tldCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiYnVsbGV0aW4iLCJtaXhpbnMiLCJkYXRhIiwiY29tcHV0ZWQiLCJub3ciLCJEYXRlIiwibWV0aG9kcyIsImV2ZW50cyIsIiRpbnZva2UiLCJnZXRCdWxsZXRpbkluZm8iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxlOzs7Ozs7Ozs7Ozs7Ozt3TUFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWE7QUFDWEM7QUFEVyxLLFFBSWJDLE0sR0FBUyxnQixRQUVUQyxJLEdBQU8sRSxRQUdQQyxRLEdBQVc7QUFDVEMsU0FEUyxpQkFDRjtBQUNMLGVBQU8sQ0FBQyxJQUFJQyxJQUFKLEVBQVI7QUFDRDtBQUhRLEssUUFNWEMsTyxHQUFVLEUsUUFJVkMsTSxHQUFTLEU7Ozs7OzZCQUlBO0FBQ1AsV0FBS0MsT0FBTCxDQUFhLFVBQWIsRUFBeUIsVUFBekIsRUFBb0MsZUFBS0MsZUFBTCxFQUFwQztBQUNEOzs7O0VBN0IwQyxlQUFLQyxJOztrQkFBN0JkLGUiLCJmaWxlIjoicHJlc3BlYWsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IHRlc3RNaXhpbiBmcm9tICcuLi9taXhpbnMvdGVzdCdcbiAgaW1wb3J0IEJ1bGxldGluIGZyb20gJ0AvY29tcG9uZW50cy9idWxsZXRpbidcbiAgaW1wb3J0IE1vY2sgZnJvbSAnQC91dGlsL01vY2snXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFByZWNyZWF0ZXRpY2tldCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WHhuWkh+WIm+W7uuaVouivtCdcbiAgICB9XG4gICAgY29tcG9uZW50cyA9IHtcbiAgICAgIGJ1bGxldGluOiBCdWxsZXRpblxuICAgIH1cblxuICAgIG1peGlucyA9IFt0ZXN0TWl4aW5dXG5cbiAgICBkYXRhID0ge1xuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgICAgbm93ICgpIHtcbiAgICAgICAgcmV0dXJuICtuZXcgRGF0ZSgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcblxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcblxuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICAgIHRoaXMuJGludm9rZSgnYnVsbGV0aW4nLCAndHlwZUluZm8nLE1vY2suZ2V0QnVsbGV0aW5JbmZvKCkpXG4gICAgfVxuICB9XG4iXX0=