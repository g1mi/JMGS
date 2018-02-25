'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var zanToast = function (_wepy$component) {
  _inherits(zanToast, _wepy$component);

  function zanToast() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, zanToast);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = zanToast.__proto__ || Object.getPrototypeOf(zanToast)).call.apply(_ref, [this].concat(args))), _this), _this.props = {}, _this.data = {
      zanToast: {}
    }, _this.methods = {
      showZanToast: function showZanToast(_ref2) {
        var _this2 = this;

        var title = _ref2.title,
            timeout = _ref2.timeout;

        var zanToast = this.zanToast || {};
        clearTimeout(zanToast.timer);

        // 弹层设置~
        this.zanToast = {
          show: true,
          title: title
        };
        this.$apply();

        var timer = setTimeout(function () {
          _this2.methods.clearZanToast.call(_this2);
        }, timeout || 3000);

        this.zanToast.timer = timer;
        this.$apply();
      },
      clearZanToast: function clearZanToast() {
        var zanToast = this.zanToast || {};
        clearTimeout(zanToast.timer);

        this.zanToast.show = false;
        this.$apply();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return zanToast;
}(_wepy2.default.component);

exports.default = zanToast;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInphbi10b2FzdC5qcyJdLCJuYW1lcyI6WyJ6YW5Ub2FzdCIsInByb3BzIiwiZGF0YSIsIm1ldGhvZHMiLCJzaG93WmFuVG9hc3QiLCJ0aXRsZSIsInRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJ0aW1lciIsInNob3ciLCIkYXBwbHkiLCJzZXRUaW1lb3V0IiwiY2xlYXJaYW5Ub2FzdCIsImNhbGwiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxROzs7Ozs7Ozs7Ozs7OzswTEFDbkJDLEssR0FBUSxFLFFBQ1JDLEksR0FBTztBQUNMRixnQkFBVTtBQURMLEssUUFHUEcsTyxHQUFVO0FBQ1JDLGtCQURRLCtCQUN1QjtBQUFBOztBQUFBLFlBQWpCQyxLQUFpQixTQUFqQkEsS0FBaUI7QUFBQSxZQUFWQyxPQUFVLFNBQVZBLE9BQVU7O0FBQzdCLFlBQUlOLFdBQVcsS0FBS0EsUUFBTCxJQUFpQixFQUFoQztBQUNBTyxxQkFBYVAsU0FBU1EsS0FBdEI7O0FBRUE7QUFDQSxhQUFLUixRQUFMLEdBQWdCO0FBQ2RTLGdCQUFNLElBRFE7QUFFZEo7QUFGYyxTQUFoQjtBQUlBLGFBQUtLLE1BQUw7O0FBRUEsWUFBSUYsUUFBUUcsV0FBVyxZQUFNO0FBQzNCLGlCQUFLUixPQUFMLENBQWFTLGFBQWIsQ0FBMkJDLElBQTNCO0FBQ0QsU0FGVyxFQUVUUCxXQUFXLElBRkYsQ0FBWjs7QUFJQSxhQUFLTixRQUFMLENBQWNRLEtBQWQsR0FBc0JBLEtBQXRCO0FBQ0EsYUFBS0UsTUFBTDtBQUNELE9BbEJPO0FBbUJSRSxtQkFuQlEsMkJBbUJRO0FBQ2QsWUFBSVosV0FBVyxLQUFLQSxRQUFMLElBQWlCLEVBQWhDO0FBQ0FPLHFCQUFhUCxTQUFTUSxLQUF0Qjs7QUFFQSxhQUFLUixRQUFMLENBQWNTLElBQWQsR0FBcUIsS0FBckI7QUFDQSxhQUFLQyxNQUFMO0FBQ0Q7QUF6Qk8sSzs7OztFQUwwQixlQUFLSSxTOztrQkFBdEJkLFEiLCJmaWxlIjoiemFuLXRvYXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB6YW5Ub2FzdCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgcHJvcHMgPSB7fVxuICBkYXRhID0ge1xuICAgIHphblRvYXN0OiB7fVxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgc2hvd1phblRvYXN0KHt0aXRsZSwgdGltZW91dH0pIHtcbiAgICAgIHZhciB6YW5Ub2FzdCA9IHRoaXMuemFuVG9hc3QgfHwge31cbiAgICAgIGNsZWFyVGltZW91dCh6YW5Ub2FzdC50aW1lcilcblxuICAgICAgLy8g5by55bGC6K6+572uflxuICAgICAgdGhpcy56YW5Ub2FzdCA9IHtcbiAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgdGl0bGVcbiAgICAgIH1cbiAgICAgIHRoaXMuJGFwcGx5KClcblxuICAgICAgdmFyIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMubWV0aG9kcy5jbGVhclphblRvYXN0LmNhbGwodGhpcylcbiAgICAgIH0sIHRpbWVvdXQgfHwgMzAwMClcblxuICAgICAgdGhpcy56YW5Ub2FzdC50aW1lciA9IHRpbWVyXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfSxcbiAgICBjbGVhclphblRvYXN0KCkge1xuICAgICAgdmFyIHphblRvYXN0ID0gdGhpcy56YW5Ub2FzdCB8fCB7fVxuICAgICAgY2xlYXJUaW1lb3V0KHphblRvYXN0LnRpbWVyKVxuXG4gICAgICB0aGlzLnphblRvYXN0LnNob3cgPSBmYWxzZVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH1cbiAgfVxufVxuIl19