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

var zanNoticebar = function (_wepy$component) {
  _inherits(zanNoticebar, _wepy$component);

  function zanNoticebar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, zanNoticebar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = zanNoticebar.__proto__ || Object.getPrototypeOf(zanNoticebar)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      componentId: String,
      text: String
    }, _this.data = {
      animationData: {},
      currentComponent: {}
    }, _this.methods = {
      initZanNoticeBarScroll: function initZanNoticeBarScroll() {
        var _this2 = this;

        var componentId = this.componentId;
        var currentComponent = {
          width: undefined,
          wrapWidth: undefined,
          animation: null,
          resetAnimation: null
        };
        wx.createSelectorQuery().select('#' + componentId + '__content').boundingClientRect(function (rect) {
          if (rect.width) {
            currentComponent.width = rect.width;
            wx.createSelectorQuery().select('#' + componentId + '__content-wrap').boundingClientRect(function (rect) {
              currentComponent.wrapWidth = rect.width;
              if (currentComponent.wrapWidth < currentComponent.width) {
                var mstime = currentComponent.width / 40 * 1000;
                currentComponent.animation = wx.createAnimation({
                  duration: mstime,
                  timingFunction: 'linear'
                });
                currentComponent.resetAnimation = wx.createAnimation({
                  duration: 0,
                  timingFunction: 'linear'
                });
                _this2.currentComponent = currentComponent;
                _this2.methods.scrollZanNoticeBar.call(_this2, componentId, mstime);
              }
            }).exec();
          } else {
            console.warn('页面缺少 noticebar 元素');
          }
        }).exec();
      },
      scrollZanNoticeBar: function scrollZanNoticeBar(componentId, mstime) {
        var _this3 = this;

        var currentComponent = this.currentComponent;
        var resetAnimationData = currentComponent.resetAnimation.translateX(currentComponent.wrapWidth).step();
        this.animationData = resetAnimationData.export();
        this.$apply();
        var aninationData = currentComponent.animation.translateX(-mstime * 40 / 1000).step();
        setTimeout(function () {
          _this3.animationData = aninationData.export();
          _this3.$apply();
        }, 100);

        setTimeout(function () {
          _this3.methods.scrollZanNoticeBar.call(_this3, componentId, mstime);
        }, mstime);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return zanNoticebar;
}(_wepy2.default.component);

exports.default = zanNoticebar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInphbi1ub3RpY2ViYXIuanMiXSwibmFtZXMiOlsiemFuTm90aWNlYmFyIiwicHJvcHMiLCJjb21wb25lbnRJZCIsIlN0cmluZyIsInRleHQiLCJkYXRhIiwiYW5pbWF0aW9uRGF0YSIsImN1cnJlbnRDb21wb25lbnQiLCJtZXRob2RzIiwiaW5pdFphbk5vdGljZUJhclNjcm9sbCIsIndpZHRoIiwidW5kZWZpbmVkIiwid3JhcFdpZHRoIiwiYW5pbWF0aW9uIiwicmVzZXRBbmltYXRpb24iLCJ3eCIsImNyZWF0ZVNlbGVjdG9yUXVlcnkiLCJzZWxlY3QiLCJib3VuZGluZ0NsaWVudFJlY3QiLCJyZWN0IiwibXN0aW1lIiwiY3JlYXRlQW5pbWF0aW9uIiwiZHVyYXRpb24iLCJ0aW1pbmdGdW5jdGlvbiIsInNjcm9sbFphbk5vdGljZUJhciIsImNhbGwiLCJleGVjIiwiY29uc29sZSIsIndhcm4iLCJyZXNldEFuaW1hdGlvbkRhdGEiLCJ0cmFuc2xhdGVYIiwic3RlcCIsImV4cG9ydCIsIiRhcHBseSIsImFuaW5hdGlvbkRhdGEiLCJzZXRUaW1lb3V0IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsWTs7Ozs7Ozs7Ozs7Ozs7a01BQ25CQyxLLEdBQVE7QUFDTkMsbUJBQWFDLE1BRFA7QUFFTkMsWUFBTUQ7QUFGQSxLLFFBSVJFLEksR0FBTztBQUNMQyxxQkFBZSxFQURWO0FBRUxDLHdCQUFrQjtBQUZiLEssUUFJUEMsTyxHQUFVO0FBQ1JDLDRCQURRLG9DQUNpQjtBQUFBOztBQUN2QixZQUFJUCxjQUFjLEtBQUtBLFdBQXZCO0FBQ0EsWUFBSUssbUJBQW1CO0FBQ3JCRyxpQkFBT0MsU0FEYztBQUVyQkMscUJBQVdELFNBRlU7QUFHckJFLHFCQUFXLElBSFU7QUFJckJDLDBCQUFnQjtBQUpLLFNBQXZCO0FBTUFDLFdBQ0dDLG1CQURILEdBRUdDLE1BRkgsT0FFY2YsV0FGZCxnQkFHR2dCLGtCQUhILENBR3NCLGdCQUFRO0FBQzFCLGNBQUlDLEtBQUtULEtBQVQsRUFBZ0I7QUFDZEgsNkJBQWlCRyxLQUFqQixHQUF5QlMsS0FBS1QsS0FBOUI7QUFDQUssZUFDR0MsbUJBREgsR0FFR0MsTUFGSCxPQUVjZixXQUZkLHFCQUdHZ0Isa0JBSEgsQ0FHc0IsZ0JBQVE7QUFDMUJYLCtCQUFpQkssU0FBakIsR0FBNkJPLEtBQUtULEtBQWxDO0FBQ0Esa0JBQUlILGlCQUFpQkssU0FBakIsR0FBNkJMLGlCQUFpQkcsS0FBbEQsRUFBeUQ7QUFDdkQsb0JBQUlVLFNBQVNiLGlCQUFpQkcsS0FBakIsR0FBeUIsRUFBekIsR0FBOEIsSUFBM0M7QUFDQUgsaUNBQWlCTSxTQUFqQixHQUE2QkUsR0FBR00sZUFBSCxDQUFtQjtBQUM5Q0MsNEJBQVVGLE1BRG9DO0FBRTlDRyxrQ0FBZ0I7QUFGOEIsaUJBQW5CLENBQTdCO0FBSUFoQixpQ0FBaUJPLGNBQWpCLEdBQWtDQyxHQUFHTSxlQUFILENBQW1CO0FBQ25EQyw0QkFBVSxDQUR5QztBQUVuREMsa0NBQWdCO0FBRm1DLGlCQUFuQixDQUFsQztBQUlBLHVCQUFLaEIsZ0JBQUwsR0FBd0JBLGdCQUF4QjtBQUNBLHVCQUFLQyxPQUFMLENBQWFnQixrQkFBYixDQUFnQ0MsSUFBaEMsU0FBMkN2QixXQUEzQyxFQUF3RGtCLE1BQXhEO0FBQ0Q7QUFDRixhQWxCSCxFQW1CR00sSUFuQkg7QUFvQkQsV0F0QkQsTUFzQk87QUFDTEMsb0JBQVFDLElBQVIsQ0FBYSxtQkFBYjtBQUNEO0FBQ0YsU0E3QkgsRUE4QkdGLElBOUJIO0FBK0JELE9BeENPO0FBMENSRix3QkExQ1EsOEJBMENXdEIsV0ExQ1gsRUEwQ3dCa0IsTUExQ3hCLEVBMENnQztBQUFBOztBQUN0QyxZQUFJYixtQkFBbUIsS0FBS0EsZ0JBQTVCO0FBQ0EsWUFBSXNCLHFCQUFxQnRCLGlCQUFpQk8sY0FBakIsQ0FBZ0NnQixVQUFoQyxDQUEyQ3ZCLGlCQUFpQkssU0FBNUQsRUFBdUVtQixJQUF2RSxFQUF6QjtBQUNBLGFBQUt6QixhQUFMLEdBQXFCdUIsbUJBQW1CRyxNQUFuQixFQUFyQjtBQUNBLGFBQUtDLE1BQUw7QUFDQSxZQUFJQyxnQkFBZ0IzQixpQkFBaUJNLFNBQWpCLENBQTJCaUIsVUFBM0IsQ0FBc0MsQ0FBQ1YsTUFBRCxHQUFVLEVBQVYsR0FBZSxJQUFyRCxFQUEyRFcsSUFBM0QsRUFBcEI7QUFDQUksbUJBQVcsWUFBTTtBQUNmLGlCQUFLN0IsYUFBTCxHQUFxQjRCLGNBQWNGLE1BQWQsRUFBckI7QUFDQSxpQkFBS0MsTUFBTDtBQUNELFNBSEQsRUFHRyxHQUhIOztBQUtBRSxtQkFBVyxZQUFNO0FBQ2YsaUJBQUszQixPQUFMLENBQWFnQixrQkFBYixDQUFnQ0MsSUFBaEMsU0FBMkN2QixXQUEzQyxFQUF3RGtCLE1BQXhEO0FBQ0QsU0FGRCxFQUVHQSxNQUZIO0FBR0Q7QUF4RE8sSzs7OztFQVQ4QixlQUFLZ0IsUzs7a0JBQTFCcEMsWSIsImZpbGUiOiJ6YW4tbm90aWNlYmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB6YW5Ob3RpY2ViYXIgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XHJcbiAgcHJvcHMgPSB7XHJcbiAgICBjb21wb25lbnRJZDogU3RyaW5nLFxyXG4gICAgdGV4dDogU3RyaW5nXHJcbiAgfVxyXG4gIGRhdGEgPSB7XHJcbiAgICBhbmltYXRpb25EYXRhOiB7fSxcclxuICAgIGN1cnJlbnRDb21wb25lbnQ6IHt9XHJcbiAgfVxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICBpbml0WmFuTm90aWNlQmFyU2Nyb2xsKCkge1xyXG4gICAgICBsZXQgY29tcG9uZW50SWQgPSB0aGlzLmNvbXBvbmVudElkXHJcbiAgICAgIGxldCBjdXJyZW50Q29tcG9uZW50ID0ge1xyXG4gICAgICAgIHdpZHRoOiB1bmRlZmluZWQsXHJcbiAgICAgICAgd3JhcFdpZHRoOiB1bmRlZmluZWQsXHJcbiAgICAgICAgYW5pbWF0aW9uOiBudWxsLFxyXG4gICAgICAgIHJlc2V0QW5pbWF0aW9uOiBudWxsXHJcbiAgICAgIH1cclxuICAgICAgd3hcclxuICAgICAgICAuY3JlYXRlU2VsZWN0b3JRdWVyeSgpXHJcbiAgICAgICAgLnNlbGVjdChgIyR7Y29tcG9uZW50SWR9X19jb250ZW50YClcclxuICAgICAgICAuYm91bmRpbmdDbGllbnRSZWN0KHJlY3QgPT4ge1xyXG4gICAgICAgICAgaWYgKHJlY3Qud2lkdGgpIHtcclxuICAgICAgICAgICAgY3VycmVudENvbXBvbmVudC53aWR0aCA9IHJlY3Qud2lkdGhcclxuICAgICAgICAgICAgd3hcclxuICAgICAgICAgICAgICAuY3JlYXRlU2VsZWN0b3JRdWVyeSgpXHJcbiAgICAgICAgICAgICAgLnNlbGVjdChgIyR7Y29tcG9uZW50SWR9X19jb250ZW50LXdyYXBgKVxyXG4gICAgICAgICAgICAgIC5ib3VuZGluZ0NsaWVudFJlY3QocmVjdCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50Q29tcG9uZW50LndyYXBXaWR0aCA9IHJlY3Qud2lkdGhcclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50Q29tcG9uZW50LndyYXBXaWR0aCA8IGN1cnJlbnRDb21wb25lbnQud2lkdGgpIHtcclxuICAgICAgICAgICAgICAgICAgbGV0IG1zdGltZSA9IGN1cnJlbnRDb21wb25lbnQud2lkdGggLyA0MCAqIDEwMDBcclxuICAgICAgICAgICAgICAgICAgY3VycmVudENvbXBvbmVudC5hbmltYXRpb24gPSB3eC5jcmVhdGVBbmltYXRpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBtc3RpbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdGltaW5nRnVuY3Rpb246ICdsaW5lYXInXHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIGN1cnJlbnRDb21wb25lbnQucmVzZXRBbmltYXRpb24gPSB3eC5jcmVhdGVBbmltYXRpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWluZ0Z1bmN0aW9uOiAnbGluZWFyJ1xyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRDb21wb25lbnQgPSBjdXJyZW50Q29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMubWV0aG9kcy5zY3JvbGxaYW5Ob3RpY2VCYXIuY2FsbCh0aGlzLCBjb21wb25lbnRJZCwgbXN0aW1lKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgLmV4ZWMoKVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCfpobXpnaLnvLrlsJEgbm90aWNlYmFyIOWFg+e0oCcpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuZXhlYygpXHJcbiAgICB9LFxyXG5cclxuICAgIHNjcm9sbFphbk5vdGljZUJhcihjb21wb25lbnRJZCwgbXN0aW1lKSB7XHJcbiAgICAgIGxldCBjdXJyZW50Q29tcG9uZW50ID0gdGhpcy5jdXJyZW50Q29tcG9uZW50XHJcbiAgICAgIGxldCByZXNldEFuaW1hdGlvbkRhdGEgPSBjdXJyZW50Q29tcG9uZW50LnJlc2V0QW5pbWF0aW9uLnRyYW5zbGF0ZVgoY3VycmVudENvbXBvbmVudC53cmFwV2lkdGgpLnN0ZXAoKVxyXG4gICAgICB0aGlzLmFuaW1hdGlvbkRhdGEgPSByZXNldEFuaW1hdGlvbkRhdGEuZXhwb3J0KClcclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICBsZXQgYW5pbmF0aW9uRGF0YSA9IGN1cnJlbnRDb21wb25lbnQuYW5pbWF0aW9uLnRyYW5zbGF0ZVgoLW1zdGltZSAqIDQwIC8gMTAwMCkuc3RlcCgpXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uRGF0YSA9IGFuaW5hdGlvbkRhdGEuZXhwb3J0KClcclxuICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgIH0sIDEwMClcclxuXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMubWV0aG9kcy5zY3JvbGxaYW5Ob3RpY2VCYXIuY2FsbCh0aGlzLCBjb21wb25lbnRJZCwgbXN0aW1lKVxyXG4gICAgICB9LCBtc3RpbWUpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==