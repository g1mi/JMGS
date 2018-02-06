'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./../npm/wepy-async-function/index.js');

var _test = require('./../mixins/test.js');

var _test2 = _interopRequireDefault(_test);

var _bulletin = require('./../components/bulletin.js');

var _bulletin2 = _interopRequireDefault(_bulletin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Displayticket = function (_wepy$page) {
  _inherits(Displayticket, _wepy$page);

  function Displayticket() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Displayticket);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Displayticket.__proto__ || Object.getPrototypeOf(Displayticket)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'Displayticket'
    }, _this.components = {
      bulletin: _bulletin2.default
    }, _this.mixins = [_test2.default], _this.data = {
      content: '',
      demo: '\n    \u4EB2\u7231\u7684\u987E\u5BA2\uFF0C\u4F60\u597D\uFF01\u60A8\u662F\u4ECA\u5929\u7B2C101\u4E2A\u6562\u8BF4\u53D1\u8D77\u8005\u3002\n    \u8BF7\u6CE8\u610F\u53D1\u8D77\u7684\u6562\u8BF4\u4E0D\u5F97\u5305\u542B\u5982\u4E0B\u5185\u5BB9\uFF1A\n        \uD83C\uDE32\u8272\u60C5\uFF0C\n        \uD83C\uDE32\u8FDD\u6CD5\uFF0C\n        \uD83C\uDE32\u653F\u6CBB\u76F8\u5173\u3002\n     \u60F3\u770B\u770B\u6628\u5929\u7684\u6570\u636E\u4E48\uFF1F'
    }, _this.computed = {
      now: function now() {
        return +new Date();
      }
    }, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Displayticket, [{
    key: 'onReady',
    value: function onReady() {
      this.$invoke('bulletin', 'typeInfo', this.demo);
    }
  }]);

  return Displayticket;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Displayticket , 'pages/displayticket'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3BsYXl0aWNrZXQuanMiXSwibmFtZXMiOlsiRGlzcGxheXRpY2tldCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiYnVsbGV0aW4iLCJtaXhpbnMiLCJkYXRhIiwiY29udGVudCIsImRlbW8iLCJjb21wdXRlZCIsIm5vdyIsIkRhdGUiLCJtZXRob2RzIiwiZXZlbnRzIiwiJGludm9rZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQzs7Ozs7Ozs7Ozs7O0lBRW9CQSxhOzs7Ozs7Ozs7Ozs7OztvTUFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWE7QUFDWEM7QUFEVyxLLFFBSWJDLE0sR0FBUyxnQixRQUVUQyxJLEdBQU87QUFDTEMsZUFBUyxFQURKO0FBRUxDO0FBRkssSyxRQVdQQyxRLEdBQVc7QUFDVEMsU0FEUyxpQkFDRjtBQUNMLGVBQU8sQ0FBQyxJQUFJQyxJQUFKLEVBQVI7QUFDRDtBQUhRLEssUUFNWEMsTyxHQUFVLEUsUUFJVkMsTSxHQUFTLEU7Ozs7OzhCQUlDO0FBQ1IsV0FBS0MsT0FBTCxDQUFhLFVBQWIsRUFBeUIsVUFBekIsRUFBcUMsS0FBS04sSUFBMUM7QUFDRDs7OztFQXJDd0MsZUFBS08sSTs7a0JBQTNCZixhIiwiZmlsZSI6ImRpc3BsYXl0aWNrZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xuICBpbXBvcnQgdGVzdE1peGluIGZyb20gJy4uL21peGlucy90ZXN0J1xuICAgaW1wb3J0IEJ1bGxldGluIGZyb20gJy4uL2NvbXBvbmVudHMvYnVsbGV0aW4nXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzcGxheXRpY2tldCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ0Rpc3BsYXl0aWNrZXQnXG4gICAgfVxuICAgIGNvbXBvbmVudHMgPSB7XG4gICAgICBidWxsZXRpbjogQnVsbGV0aW5cbiAgICB9XG5cbiAgICBtaXhpbnMgPSBbdGVzdE1peGluXVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGNvbnRlbnQ6ICcnLFxuICAgICAgZGVtbzogYFxuICAgIOS6sueIseeahOmhvuWuou+8jOS9oOWlve+8geaCqOaYr+S7iuWkqeesrDEwMeS4quaVouivtOWPkei1t+iAheOAglxuICAgIOivt+azqOaEj+WPkei1t+eahOaVouivtOS4jeW+l+WMheWQq+WmguS4i+WGheWuue+8mlxuICAgICAgICDwn4iy6Imy5oOF77yMXG4gICAgICAgIPCfiLLov53ms5XvvIxcbiAgICAgICAg8J+IsuaUv+ayu+ebuOWFs+OAglxuICAgICDmg7PnnIvnnIvmmKjlpKnnmoTmlbDmja7kuYjvvJ9gXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgICBub3cgKCkge1xuICAgICAgICByZXR1cm4gK25ldyBEYXRlKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuXG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuXG4gICAgfVxuXG4gICAgb25SZWFkeSgpIHtcbiAgICAgIHRoaXMuJGludm9rZSgnYnVsbGV0aW4nLCAndHlwZUluZm8nLCB0aGlzLmRlbW8pXG4gICAgfVxuICB9XG4iXX0=