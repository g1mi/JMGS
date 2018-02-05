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

var zanSwitch = function (_wepy$component) {
  _inherits(zanSwitch, _wepy$component);

  function zanSwitch() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, zanSwitch);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = zanSwitch.__proto__ || Object.getPrototypeOf(zanSwitch)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      checked: {
        type: Boolean,
        default: false
      },
      loading: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      componentId: String
    }, _this.data = {}, _this.methods = {
      handleZanSwitchChange: function handleZanSwitchChange(e) {
        var dataset = e.currentTarget.dataset;
        var checked = dataset.checked,
            loading = dataset.loading,
            disabled = dataset.disabled,
            componentId = dataset.componentId;


        if (loading || disabled) return;

        console.info('[zan:switch:change]', { componentId: componentId, checked: !checked });

        this.$emit('zanSwitchChange');
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return zanSwitch;
}(_wepy2.default.component);

exports.default = zanSwitch;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInphbi1zd2l0Y2guanMiXSwibmFtZXMiOlsiemFuU3dpdGNoIiwicHJvcHMiLCJjaGVja2VkIiwidHlwZSIsIkJvb2xlYW4iLCJkZWZhdWx0IiwibG9hZGluZyIsImRpc2FibGVkIiwiY29tcG9uZW50SWQiLCJTdHJpbmciLCJkYXRhIiwibWV0aG9kcyIsImhhbmRsZVphblN3aXRjaENoYW5nZSIsImUiLCJkYXRhc2V0IiwiY3VycmVudFRhcmdldCIsImNvbnNvbGUiLCJpbmZvIiwiJGVtaXQiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxTOzs7Ozs7Ozs7Ozs7Ozs0TEFDbkJDLEssR0FBUTtBQUNOQyxlQUFTO0FBQ1BDLGNBQU1DLE9BREM7QUFFUEMsaUJBQVM7QUFGRixPQURIO0FBS05DLGVBQVM7QUFDUEgsY0FBTUMsT0FEQztBQUVQQyxpQkFBUztBQUZGLE9BTEg7QUFTTkUsZ0JBQVU7QUFDUkosY0FBTUMsT0FERTtBQUVSQyxpQkFBUztBQUZELE9BVEo7QUFhTkcsbUJBQWFDO0FBYlAsSyxRQWVSQyxJLEdBQU8sRSxRQUNQQyxPLEdBQVU7QUFDUkMsMkJBRFEsaUNBQ2NDLENBRGQsRUFDaUI7QUFDdkIsWUFBSUMsVUFBVUQsRUFBRUUsYUFBRixDQUFnQkQsT0FBOUI7QUFEdUIsWUFFakJaLE9BRmlCLEdBRTJCWSxPQUYzQixDQUVqQlosT0FGaUI7QUFBQSxZQUVSSSxPQUZRLEdBRTJCUSxPQUYzQixDQUVSUixPQUZRO0FBQUEsWUFFQ0MsUUFGRCxHQUUyQk8sT0FGM0IsQ0FFQ1AsUUFGRDtBQUFBLFlBRVdDLFdBRlgsR0FFMkJNLE9BRjNCLENBRVdOLFdBRlg7OztBQUl2QixZQUFJRixXQUFXQyxRQUFmLEVBQXlCOztBQUV6QlMsZ0JBQVFDLElBQVIsQ0FBYSxxQkFBYixFQUFvQyxFQUFFVCx3QkFBRixFQUFlTixTQUFTLENBQUNBLE9BQXpCLEVBQXBDOztBQUVBLGFBQUtnQixLQUFMLENBQVcsaUJBQVg7QUFDRDtBQVZPLEs7Ozs7RUFqQjJCLGVBQUtDLFM7O2tCQUF2Qm5CLFMiLCJmaWxlIjoiemFuLXN3aXRjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgemFuU3dpdGNoIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gIHByb3BzID0ge1xyXG4gICAgY2hlY2tlZDoge1xyXG4gICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICBkZWZhdWx0OiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGxvYWRpbmc6IHtcclxuICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgZGVmYXVsdDogZmFsc2VcclxuICAgIH0sXHJcbiAgICBkaXNhYmxlZDoge1xyXG4gICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICBkZWZhdWx0OiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGNvbXBvbmVudElkOiBTdHJpbmdcclxuICB9XHJcbiAgZGF0YSA9IHt9XHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIGhhbmRsZVphblN3aXRjaENoYW5nZShlKSB7XHJcbiAgICAgIGxldCBkYXRhc2V0ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXRcclxuICAgICAgbGV0IHsgY2hlY2tlZCwgbG9hZGluZywgZGlzYWJsZWQsIGNvbXBvbmVudElkIH0gPSBkYXRhc2V0XHJcblxyXG4gICAgICBpZiAobG9hZGluZyB8fCBkaXNhYmxlZCkgcmV0dXJuXHJcblxyXG4gICAgICBjb25zb2xlLmluZm8oJ1t6YW46c3dpdGNoOmNoYW5nZV0nLCB7IGNvbXBvbmVudElkLCBjaGVja2VkOiAhY2hlY2tlZCB9KVxyXG5cclxuICAgICAgdGhpcy4kZW1pdCgnemFuU3dpdGNoQ2hhbmdlJylcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19