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

var zanTab = function (_wepy$component) {
  _inherits(zanTab, _wepy$component);

  function zanTab() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, zanTab);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = zanTab.__proto__ || Object.getPrototypeOf(zanTab)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      tab: Object,
      componentId: String
    }, _this.data = {}, _this.methods = {
      handleZanTabChange: function handleZanTabChange(e) {
        var _e$currentTarget$data = e.currentTarget.dataset,
            componentId = _e$currentTarget$data.componentId,
            selectedId = _e$currentTarget$data.itemId;

        console.info('[zan:tab:change]', { componentId: componentId, selectedId: selectedId });
        this.$emit('zanTabChange', selectedId);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return zanTab;
}(_wepy2.default.component);

exports.default = zanTab;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInphbi10YWIuanMiXSwibmFtZXMiOlsiemFuVGFiIiwicHJvcHMiLCJ0YWIiLCJPYmplY3QiLCJjb21wb25lbnRJZCIsIlN0cmluZyIsImRhdGEiLCJtZXRob2RzIiwiaGFuZGxlWmFuVGFiQ2hhbmdlIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0Iiwic2VsZWN0ZWRJZCIsIml0ZW1JZCIsImNvbnNvbGUiLCJpbmZvIiwiJGVtaXQiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxNOzs7Ozs7Ozs7Ozs7OztzTEFDbkJDLEssR0FBUTtBQUNOQyxXQUFLQyxNQURDO0FBRU5DLG1CQUFhQztBQUZQLEssUUFJUkMsSSxHQUFPLEUsUUFDUEMsTyxHQUFVO0FBQ1JDLHdCQURRLDhCQUNXQyxDQURYLEVBQ2M7QUFBQSxvQ0FDc0JBLEVBQUVDLGFBQUYsQ0FBZ0JDLE9BRHRDO0FBQUEsWUFDZFAsV0FEYyx5QkFDZEEsV0FEYztBQUFBLFlBQ09RLFVBRFAseUJBQ0RDLE1BREM7O0FBRXBCQyxnQkFBUUMsSUFBUixDQUFhLGtCQUFiLEVBQWlDLEVBQUVYLHdCQUFGLEVBQWVRLHNCQUFmLEVBQWpDO0FBQ0EsYUFBS0ksS0FBTCxDQUFXLGNBQVgsRUFBMkJKLFVBQTNCO0FBQ0Q7QUFMTyxLOzs7O0VBTndCLGVBQUtLLFM7O2tCQUFwQmpCLE0iLCJmaWxlIjoiemFuLXRhYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgemFuVGFiIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICBwcm9wcyA9IHtcbiAgICB0YWI6IE9iamVjdCxcbiAgICBjb21wb25lbnRJZDogU3RyaW5nXG4gIH1cbiAgZGF0YSA9IHt9XG4gIG1ldGhvZHMgPSB7XG4gICAgaGFuZGxlWmFuVGFiQ2hhbmdlKGUpIHtcbiAgICAgIGxldCB7IGNvbXBvbmVudElkLCBpdGVtSWQ6IHNlbGVjdGVkSWQgfSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0XG4gICAgICBjb25zb2xlLmluZm8oJ1t6YW46dGFiOmNoYW5nZV0nLCB7IGNvbXBvbmVudElkLCBzZWxlY3RlZElkIH0pXG4gICAgICB0aGlzLiRlbWl0KCd6YW5UYWJDaGFuZ2UnLCBzZWxlY3RlZElkKVxuICAgIH1cbiAgfVxufVxuIl19