'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var zanStepper = function (_wepy$component) {
  _inherits(zanStepper, _wepy$component);

  function zanStepper() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, zanStepper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = zanStepper.__proto__ || Object.getPrototypeOf(zanStepper)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      stepper: {
        type: Number,
        default: 0
      },
      min: {
        type: Number,
        default: 0
      },
      max: {
        type: Number,
        default: 0
      },
      size: {
        type: String,
        default: ''
      },
      componentId: String
    }, _this.data = {}, _this.methods = {
      handleZanStepperMinus: function handleZanStepperMinus(e) {
        this.handle(e, -1);
      },
      handleZanStepperPlus: function handleZanStepperPlus(e) {
        this.handle(e, +1);
      },
      handleZanStepperBlur: function handleZanStepperBlur(e) {
        var _this2 = this;

        var dataset = e.currentTarget.dataset;
        var componentId = dataset.componentId;
        var max = +dataset.max;
        var min = +dataset.min;
        var value = e.detail.value;

        if (!value) {
          setTimeout(function () {
            _this2.callback(componentId, min);
          }, 16);
          this.callback(componentId, value);
          return '' + value;
        }

        value = +value;
        if (value > max) {
          value = max;
        } else if (value < min) {
          value = min;
        }

        this.callback(componentId, value);

        return '' + value;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(zanStepper, [{
    key: 'handle',
    value: function handle(e, num) {
      var dataset = e.currentTarget.dataset;
      var componentId = dataset.componentId;
      var disabled = dataset.disabled;
      var stepper = +dataset.stepper;

      if (disabled) return null;

      this.callback(componentId, stepper + num);
    }
  }, {
    key: 'callback',
    value: function callback(componentId, stepper) {
      stepper = +stepper;
      var e = { componentId: componentId, stepper: stepper };
      console.info('[zan:stepper:change]', e);

      this.$emit('zanStepperChange', e);
    }
  }]);

  return zanStepper;
}(_wepy2.default.component);

exports.default = zanStepper;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInphbi1zdGVwcGVyLmpzIl0sIm5hbWVzIjpbInphblN0ZXBwZXIiLCJwcm9wcyIsInN0ZXBwZXIiLCJ0eXBlIiwiTnVtYmVyIiwiZGVmYXVsdCIsIm1pbiIsIm1heCIsInNpemUiLCJTdHJpbmciLCJjb21wb25lbnRJZCIsImRhdGEiLCJtZXRob2RzIiwiaGFuZGxlWmFuU3RlcHBlck1pbnVzIiwiZSIsImhhbmRsZSIsImhhbmRsZVphblN0ZXBwZXJQbHVzIiwiaGFuZGxlWmFuU3RlcHBlckJsdXIiLCJkYXRhc2V0IiwiY3VycmVudFRhcmdldCIsInZhbHVlIiwiZGV0YWlsIiwic2V0VGltZW91dCIsImNhbGxiYWNrIiwibnVtIiwiZGlzYWJsZWQiLCJjb25zb2xlIiwiaW5mbyIsIiRlbWl0IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxVOzs7Ozs7Ozs7Ozs7Ozs4TEFDbkJDLEssR0FBUTtBQUNOQyxlQUFTO0FBQ1BDLGNBQU1DLE1BREM7QUFFUEMsaUJBQVM7QUFGRixPQURIO0FBS05DLFdBQUs7QUFDSEgsY0FBTUMsTUFESDtBQUVIQyxpQkFBUztBQUZOLE9BTEM7QUFTTkUsV0FBSztBQUNISixjQUFNQyxNQURIO0FBRUhDLGlCQUFTO0FBRk4sT0FUQztBQWFORyxZQUFNO0FBQ0pMLGNBQU1NLE1BREY7QUFFSkosaUJBQVM7QUFGTCxPQWJBO0FBaUJOSyxtQkFBYUQ7QUFqQlAsSyxRQW1CUkUsSSxHQUFPLEUsUUFDUEMsTyxHQUFVO0FBQ1JDLDJCQURRLGlDQUNjQyxDQURkLEVBQ2lCO0FBQ3ZCLGFBQUtDLE1BQUwsQ0FBWUQsQ0FBWixFQUFlLENBQUMsQ0FBaEI7QUFDRCxPQUhPO0FBS1JFLDBCQUxRLGdDQUthRixDQUxiLEVBS2dCO0FBQ3RCLGFBQUtDLE1BQUwsQ0FBWUQsQ0FBWixFQUFlLENBQUMsQ0FBaEI7QUFDRCxPQVBPO0FBU1JHLDBCQVRRLGdDQVNhSCxDQVRiLEVBU2dCO0FBQUE7O0FBQ3RCLFlBQUlJLFVBQVVKLEVBQUVLLGFBQUYsQ0FBZ0JELE9BQTlCO0FBQ0EsWUFBSVIsY0FBY1EsUUFBUVIsV0FBMUI7QUFDQSxZQUFJSCxNQUFNLENBQUNXLFFBQVFYLEdBQW5CO0FBQ0EsWUFBSUQsTUFBTSxDQUFDWSxRQUFRWixHQUFuQjtBQUNBLFlBQUljLFFBQVFOLEVBQUVPLE1BQUYsQ0FBU0QsS0FBckI7O0FBRUEsWUFBSSxDQUFDQSxLQUFMLEVBQVk7QUFDVkUscUJBQVcsWUFBTTtBQUNmLG1CQUFLQyxRQUFMLENBQWNiLFdBQWQsRUFBMkJKLEdBQTNCO0FBQ0QsV0FGRCxFQUVHLEVBRkg7QUFHQSxlQUFLaUIsUUFBTCxDQUFjYixXQUFkLEVBQTJCVSxLQUEzQjtBQUNBLGlCQUFPLEtBQUtBLEtBQVo7QUFDRDs7QUFFREEsZ0JBQVEsQ0FBQ0EsS0FBVDtBQUNBLFlBQUlBLFFBQVFiLEdBQVosRUFBaUI7QUFDZmEsa0JBQVFiLEdBQVI7QUFDRCxTQUZELE1BRU8sSUFBSWEsUUFBUWQsR0FBWixFQUFpQjtBQUN0QmMsa0JBQVFkLEdBQVI7QUFDRDs7QUFFRCxhQUFLaUIsUUFBTCxDQUFjYixXQUFkLEVBQTJCVSxLQUEzQjs7QUFFQSxlQUFPLEtBQUtBLEtBQVo7QUFDRDtBQWxDTyxLOzs7OzsyQkFxQ0hOLEMsRUFBR1UsRyxFQUFLO0FBQ2IsVUFBSU4sVUFBVUosRUFBRUssYUFBRixDQUFnQkQsT0FBOUI7QUFDQSxVQUFJUixjQUFjUSxRQUFRUixXQUExQjtBQUNBLFVBQUllLFdBQVdQLFFBQVFPLFFBQXZCO0FBQ0EsVUFBSXZCLFVBQVUsQ0FBQ2dCLFFBQVFoQixPQUF2Qjs7QUFFQSxVQUFJdUIsUUFBSixFQUFjLE9BQU8sSUFBUDs7QUFFZCxXQUFLRixRQUFMLENBQWNiLFdBQWQsRUFBMkJSLFVBQVVzQixHQUFyQztBQUNEOzs7NkJBRVFkLFcsRUFBYVIsTyxFQUFTO0FBQzdCQSxnQkFBVSxDQUFDQSxPQUFYO0FBQ0EsVUFBSVksSUFBSSxFQUFFSix3QkFBRixFQUFlUixnQkFBZixFQUFSO0FBQ0F3QixjQUFRQyxJQUFSLENBQWEsc0JBQWIsRUFBcUNiLENBQXJDOztBQUVBLFdBQUtjLEtBQUwsQ0FBVyxrQkFBWCxFQUErQmQsQ0FBL0I7QUFDRDs7OztFQTNFcUMsZUFBS2UsUzs7a0JBQXhCN0IsVSIsImZpbGUiOiJ6YW4tc3RlcHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgemFuU3RlcHBlciBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICBwcm9wcyA9IHtcclxuICAgIHN0ZXBwZXI6IHtcclxuICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICBkZWZhdWx0OiAwXHJcbiAgICB9LFxyXG4gICAgbWluOiB7XHJcbiAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgZGVmYXVsdDogMFxyXG4gICAgfSxcclxuICAgIG1heDoge1xyXG4gICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgIGRlZmF1bHQ6IDBcclxuICAgIH0sXHJcbiAgICBzaXplOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgZGVmYXVsdDogJydcclxuICAgIH0sXHJcbiAgICBjb21wb25lbnRJZDogU3RyaW5nXHJcbiAgfVxyXG4gIGRhdGEgPSB7fVxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICBoYW5kbGVaYW5TdGVwcGVyTWludXMoZSkge1xyXG4gICAgICB0aGlzLmhhbmRsZShlLCAtMSlcclxuICAgIH0sXHJcblxyXG4gICAgaGFuZGxlWmFuU3RlcHBlclBsdXMoZSkge1xyXG4gICAgICB0aGlzLmhhbmRsZShlLCArMSlcclxuICAgIH0sXHJcblxyXG4gICAgaGFuZGxlWmFuU3RlcHBlckJsdXIoZSkge1xyXG4gICAgICBsZXQgZGF0YXNldCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0XHJcbiAgICAgIGxldCBjb21wb25lbnRJZCA9IGRhdGFzZXQuY29tcG9uZW50SWRcclxuICAgICAgbGV0IG1heCA9ICtkYXRhc2V0Lm1heFxyXG4gICAgICBsZXQgbWluID0gK2RhdGFzZXQubWluXHJcbiAgICAgIGxldCB2YWx1ZSA9IGUuZGV0YWlsLnZhbHVlXHJcblxyXG4gICAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmNhbGxiYWNrKGNvbXBvbmVudElkLCBtaW4pXHJcbiAgICAgICAgfSwgMTYpXHJcbiAgICAgICAgdGhpcy5jYWxsYmFjayhjb21wb25lbnRJZCwgdmFsdWUpXHJcbiAgICAgICAgcmV0dXJuICcnICsgdmFsdWVcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFsdWUgPSArdmFsdWVcclxuICAgICAgaWYgKHZhbHVlID4gbWF4KSB7XHJcbiAgICAgICAgdmFsdWUgPSBtYXhcclxuICAgICAgfSBlbHNlIGlmICh2YWx1ZSA8IG1pbikge1xyXG4gICAgICAgIHZhbHVlID0gbWluXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuY2FsbGJhY2soY29tcG9uZW50SWQsIHZhbHVlKVxyXG5cclxuICAgICAgcmV0dXJuICcnICsgdmFsdWVcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZShlLCBudW0pIHtcclxuICAgIGxldCBkYXRhc2V0ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXRcclxuICAgIGxldCBjb21wb25lbnRJZCA9IGRhdGFzZXQuY29tcG9uZW50SWRcclxuICAgIGxldCBkaXNhYmxlZCA9IGRhdGFzZXQuZGlzYWJsZWRcclxuICAgIGxldCBzdGVwcGVyID0gK2RhdGFzZXQuc3RlcHBlclxyXG5cclxuICAgIGlmIChkaXNhYmxlZCkgcmV0dXJuIG51bGxcclxuXHJcbiAgICB0aGlzLmNhbGxiYWNrKGNvbXBvbmVudElkLCBzdGVwcGVyICsgbnVtKVxyXG4gIH1cclxuXHJcbiAgY2FsbGJhY2soY29tcG9uZW50SWQsIHN0ZXBwZXIpIHtcclxuICAgIHN0ZXBwZXIgPSArc3RlcHBlclxyXG4gICAgbGV0IGUgPSB7IGNvbXBvbmVudElkLCBzdGVwcGVyIH1cclxuICAgIGNvbnNvbGUuaW5mbygnW3phbjpzdGVwcGVyOmNoYW5nZV0nLCBlKVxyXG5cclxuICAgIHRoaXMuJGVtaXQoJ3phblN0ZXBwZXJDaGFuZ2UnLCBlKVxyXG4gIH1cclxufVxyXG4iXX0=