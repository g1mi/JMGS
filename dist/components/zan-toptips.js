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

var zanToptips = function (_wepy$component) {
  _inherits(zanToptips, _wepy$component);

  function zanToptips() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, zanToptips);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = zanToptips.__proto__ || Object.getPrototypeOf(zanToptips)).call.apply(_ref, [this].concat(args))), _this), _this.props = {}, _this.data = {
      topTips: {},
      animationData: {}
    }, _this.methods = {
      showZanTopTips: function showZanTopTips(_ref2, event) {
        var _this2 = this;

        var _ref2$content = _ref2.content,
            content = _ref2$content === undefined ? '' : _ref2$content,
            _ref2$options = _ref2.options,
            options = _ref2$options === undefined ? {} : _ref2$options;

        console.log('showZanTopTips', content, options);
        var topTips = this.topTips || {};
        // 如果已经有一个计时器在了，就清理掉先
        if (topTips.timer) {
          clearTimeout(topTips.timer);
          topTips.timer = undefined;
        }

        if (typeof options === 'number') {
          options = {
            duration: options
          };
        }

        // options参数默认参数扩展
        options = Object.assign({
          duration: 3000
        }, options);

        // 原生动画
        var animation = _wepy2.default.createAnimation({
          duration: 400,
          timingFunction: 'ease'
        });
        this.animation = animation;

        var toggle = function toggle() {
          wx.createSelectorQuery().select('.zan-toptips').boundingClientRect(function (rect) {
            _this2.topTips.show ? animation.translateY().step() : animation.translateY(-rect.height).step();
            _this2.animationData = animation.export();
            _this2.$apply();
          }).exec();
        };

        // 设置定时器，定时关闭topTips
        var timer = setTimeout(function () {
          _this2.topTips.show = false;
          _this2.topTips.timer = undefined;
          toggle();
        }, options.duration);

        // 展示出topTips
        this.topTips = {
          show: true,
          content: content,
          timer: timer
        };
        toggle();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return zanToptips;
}(_wepy2.default.component);

exports.default = zanToptips;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInphbi10b3B0aXBzLmpzIl0sIm5hbWVzIjpbInphblRvcHRpcHMiLCJwcm9wcyIsImRhdGEiLCJ0b3BUaXBzIiwiYW5pbWF0aW9uRGF0YSIsIm1ldGhvZHMiLCJzaG93WmFuVG9wVGlwcyIsImV2ZW50IiwiY29udGVudCIsIm9wdGlvbnMiLCJjb25zb2xlIiwibG9nIiwidGltZXIiLCJjbGVhclRpbWVvdXQiLCJ1bmRlZmluZWQiLCJkdXJhdGlvbiIsIk9iamVjdCIsImFzc2lnbiIsImFuaW1hdGlvbiIsImNyZWF0ZUFuaW1hdGlvbiIsInRpbWluZ0Z1bmN0aW9uIiwidG9nZ2xlIiwid3giLCJjcmVhdGVTZWxlY3RvclF1ZXJ5Iiwic2VsZWN0IiwiYm91bmRpbmdDbGllbnRSZWN0Iiwic2hvdyIsInRyYW5zbGF0ZVkiLCJzdGVwIiwicmVjdCIsImhlaWdodCIsImV4cG9ydCIsIiRhcHBseSIsImV4ZWMiLCJzZXRUaW1lb3V0IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsVTs7Ozs7Ozs7Ozs7Ozs7OExBQ25CQyxLLEdBQVEsRSxRQUNSQyxJLEdBQU87QUFDTEMsZUFBUyxFQURKO0FBRUxDLHFCQUFlO0FBRlYsSyxRQUlQQyxPLEdBQVU7QUFDUkMsb0JBRFEsaUNBQ3VDQyxLQUR2QyxFQUM4QztBQUFBOztBQUFBLGtDQUFyQ0MsT0FBcUM7QUFBQSxZQUFyQ0EsT0FBcUMsaUNBQTNCLEVBQTJCO0FBQUEsa0NBQXZCQyxPQUF1QjtBQUFBLFlBQXZCQSxPQUF1QixpQ0FBYixFQUFhOztBQUNwREMsZ0JBQVFDLEdBQVIsQ0FBWSxnQkFBWixFQUE4QkgsT0FBOUIsRUFBdUNDLE9BQXZDO0FBQ0EsWUFBSU4sVUFBVSxLQUFLQSxPQUFMLElBQWdCLEVBQTlCO0FBQ0E7QUFDQSxZQUFJQSxRQUFRUyxLQUFaLEVBQW1CO0FBQ2pCQyx1QkFBYVYsUUFBUVMsS0FBckI7QUFDQVQsa0JBQVFTLEtBQVIsR0FBZ0JFLFNBQWhCO0FBQ0Q7O0FBRUQsWUFBSSxPQUFPTCxPQUFQLEtBQW1CLFFBQXZCLEVBQWlDO0FBQy9CQSxvQkFBVTtBQUNSTSxzQkFBVU47QUFERixXQUFWO0FBR0Q7O0FBRUQ7QUFDQUEsa0JBQVVPLE9BQU9DLE1BQVAsQ0FDUjtBQUNFRixvQkFBVTtBQURaLFNBRFEsRUFJUk4sT0FKUSxDQUFWOztBQU9BO0FBQ0EsWUFBSVMsWUFBWSxlQUFLQyxlQUFMLENBQXFCO0FBQ25DSixvQkFBVSxHQUR5QjtBQUVuQ0ssMEJBQWdCO0FBRm1CLFNBQXJCLENBQWhCO0FBSUEsYUFBS0YsU0FBTCxHQUFpQkEsU0FBakI7O0FBRUEsWUFBTUcsU0FBUyxTQUFUQSxNQUFTLEdBQU07QUFDbkJDLGFBQ0dDLG1CQURILEdBRUdDLE1BRkgsQ0FFVSxjQUZWLEVBR0dDLGtCQUhILENBR3NCLGdCQUFRO0FBQzFCLG1CQUFLdEIsT0FBTCxDQUFhdUIsSUFBYixHQUFvQlIsVUFBVVMsVUFBVixHQUF1QkMsSUFBdkIsRUFBcEIsR0FBb0RWLFVBQVVTLFVBQVYsQ0FBcUIsQ0FBQ0UsS0FBS0MsTUFBM0IsRUFBbUNGLElBQW5DLEVBQXBEO0FBQ0EsbUJBQUt4QixhQUFMLEdBQXFCYyxVQUFVYSxNQUFWLEVBQXJCO0FBQ0EsbUJBQUtDLE1BQUw7QUFDRCxXQVBILEVBUUdDLElBUkg7QUFTRCxTQVZEOztBQVlBO0FBQ0EsWUFBSXJCLFFBQVFzQixXQUFXLFlBQU07QUFDM0IsaUJBQUsvQixPQUFMLENBQWF1QixJQUFiLEdBQW9CLEtBQXBCO0FBQ0EsaUJBQUt2QixPQUFMLENBQWFTLEtBQWIsR0FBcUJFLFNBQXJCO0FBQ0FPO0FBQ0QsU0FKVyxFQUlUWixRQUFRTSxRQUpDLENBQVo7O0FBTUE7QUFDQSxhQUFLWixPQUFMLEdBQWU7QUFDYnVCLGdCQUFNLElBRE87QUFFYmxCLDBCQUZhO0FBR2JJO0FBSGEsU0FBZjtBQUtBUztBQUNEO0FBekRPLEs7Ozs7RUFONEIsZUFBS2MsUzs7a0JBQXhCbkMsVSIsImZpbGUiOiJ6YW4tdG9wdGlwcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgemFuVG9wdGlwcyBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgcHJvcHMgPSB7fVxuICBkYXRhID0ge1xuICAgIHRvcFRpcHM6IHt9LFxuICAgIGFuaW1hdGlvbkRhdGE6IHt9XG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBzaG93WmFuVG9wVGlwcyh7IGNvbnRlbnQgPSAnJywgb3B0aW9ucyA9IHt9IH0sIGV2ZW50KSB7XG4gICAgICBjb25zb2xlLmxvZygnc2hvd1phblRvcFRpcHMnLCBjb250ZW50LCBvcHRpb25zKVxuICAgICAgbGV0IHRvcFRpcHMgPSB0aGlzLnRvcFRpcHMgfHwge31cbiAgICAgIC8vIOWmguaenOW3sue7j+acieS4gOS4quiuoeaXtuWZqOWcqOS6hu+8jOWwsea4heeQhuaOieWFiFxuICAgICAgaWYgKHRvcFRpcHMudGltZXIpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRvcFRpcHMudGltZXIpXG4gICAgICAgIHRvcFRpcHMudGltZXIgPSB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnbnVtYmVyJykge1xuICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgIGR1cmF0aW9uOiBvcHRpb25zXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gb3B0aW9uc+WPguaVsOm7mOiupOWPguaVsOaJqeWxlVxuICAgICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHtcbiAgICAgICAgICBkdXJhdGlvbjogMzAwMFxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zXG4gICAgICApXG5cbiAgICAgIC8vIOWOn+eUn+WKqOeUu1xuICAgICAgbGV0IGFuaW1hdGlvbiA9IHdlcHkuY3JlYXRlQW5pbWF0aW9uKHtcbiAgICAgICAgZHVyYXRpb246IDQwMCxcbiAgICAgICAgdGltaW5nRnVuY3Rpb246ICdlYXNlJ1xuICAgICAgfSlcbiAgICAgIHRoaXMuYW5pbWF0aW9uID0gYW5pbWF0aW9uXG5cbiAgICAgIGNvbnN0IHRvZ2dsZSA9ICgpID0+IHtcbiAgICAgICAgd3hcbiAgICAgICAgICAuY3JlYXRlU2VsZWN0b3JRdWVyeSgpXG4gICAgICAgICAgLnNlbGVjdCgnLnphbi10b3B0aXBzJylcbiAgICAgICAgICAuYm91bmRpbmdDbGllbnRSZWN0KHJlY3QgPT4ge1xuICAgICAgICAgICAgdGhpcy50b3BUaXBzLnNob3cgPyBhbmltYXRpb24udHJhbnNsYXRlWSgpLnN0ZXAoKSA6IGFuaW1hdGlvbi50cmFuc2xhdGVZKC1yZWN0LmhlaWdodCkuc3RlcCgpXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbkRhdGEgPSBhbmltYXRpb24uZXhwb3J0KClcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5leGVjKClcbiAgICAgIH1cblxuICAgICAgLy8g6K6+572u5a6a5pe25Zmo77yM5a6a5pe25YWz6ZetdG9wVGlwc1xuICAgICAgbGV0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMudG9wVGlwcy5zaG93ID0gZmFsc2VcbiAgICAgICAgdGhpcy50b3BUaXBzLnRpbWVyID0gdW5kZWZpbmVkXG4gICAgICAgIHRvZ2dsZSgpXG4gICAgICB9LCBvcHRpb25zLmR1cmF0aW9uKVxuXG4gICAgICAvLyDlsZXnpLrlh7p0b3BUaXBzXG4gICAgICB0aGlzLnRvcFRpcHMgPSB7XG4gICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgIGNvbnRlbnQsXG4gICAgICAgIHRpbWVyXG4gICAgICB9XG4gICAgICB0b2dnbGUoKVxuICAgIH1cbiAgfVxufVxuIl19