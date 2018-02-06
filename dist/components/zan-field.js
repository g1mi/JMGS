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

var zanField = function (_wepy$component) {
  _inherits(zanField, _wepy$component);

  function zanField() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, zanField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = zanField.__proto__ || Object.getPrototypeOf(zanField)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      options: {
        type: Object,
        default: {
          right: true,
          error: true,
          name: '',
          value: '',
          type: 'textarea',
          mode: 'wrapped',
          title: '消费总额',
          inputType: 'number',
          placeholder: '询问收银员后输入'
        }
      },
      componentId: String
    }, _this.data = {}, _this.methods = {
      clear: function clear() {
        this.options.value = '  ';
        this.$apply();
        this.options.value = '';
        this.$apply();
      },
      handleZanFieldChange: function handleZanFieldChange(event) {
        event.componentId = this.componentId;

        console.info('[zan:field:change]', event);

        return this.$emit('zanFieldChange', event);
      },
      handleZanFieldFocus: function handleZanFieldFocus(event) {
        event.componentId = this.componentId;

        console.info('[zan:field:focus]', event);

        return this.$emit('zanFieldFocus', event);
      },
      handleZanFieldBlur: function handleZanFieldBlur(event) {
        event.componentId = this.componentId;

        console.info('[zan:field:blur]', event);

        return this.$emit('zanFieldBlur', event);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return zanField;
}(_wepy2.default.component);

exports.default = zanField;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInphbi1maWVsZC5qcyJdLCJuYW1lcyI6WyJ6YW5GaWVsZCIsInByb3BzIiwib3B0aW9ucyIsInR5cGUiLCJPYmplY3QiLCJkZWZhdWx0IiwicmlnaHQiLCJlcnJvciIsIm5hbWUiLCJ2YWx1ZSIsIm1vZGUiLCJ0aXRsZSIsImlucHV0VHlwZSIsInBsYWNlaG9sZGVyIiwiY29tcG9uZW50SWQiLCJTdHJpbmciLCJkYXRhIiwibWV0aG9kcyIsImNsZWFyIiwiJGFwcGx5IiwiaGFuZGxlWmFuRmllbGRDaGFuZ2UiLCJldmVudCIsImNvbnNvbGUiLCJpbmZvIiwiJGVtaXQiLCJoYW5kbGVaYW5GaWVsZEZvY3VzIiwiaGFuZGxlWmFuRmllbGRCbHVyIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsUTs7Ozs7Ozs7Ozs7Ozs7MExBQ25CQyxLLEdBQVE7QUFDTkMsZUFBUztBQUNQQyxjQUFNQyxNQURDO0FBRVBDLGlCQUFTO0FBQ1BDLGlCQUFPLElBREE7QUFFUEMsaUJBQU8sSUFGQTtBQUdQQyxnQkFBTSxFQUhDO0FBSVBDLGlCQUFPLEVBSkE7QUFLUE4sZ0JBQU0sVUFMQztBQU1QTyxnQkFBTSxTQU5DO0FBT1BDLGlCQUFPLE1BUEE7QUFRUEMscUJBQVcsUUFSSjtBQVNQQyx1QkFBYTtBQVROO0FBRkYsT0FESDtBQWVOQyxtQkFBYUM7QUFmUCxLLFFBaUJSQyxJLEdBQU8sRSxRQUNQQyxPLEdBQVU7QUFDUkMsV0FEUSxtQkFDQTtBQUNOLGFBQUtoQixPQUFMLENBQWFPLEtBQWIsR0FBcUIsSUFBckI7QUFDQSxhQUFLVSxNQUFMO0FBQ0EsYUFBS2pCLE9BQUwsQ0FBYU8sS0FBYixHQUFxQixFQUFyQjtBQUNBLGFBQUtVLE1BQUw7QUFDRCxPQU5PO0FBT1JDLDBCQVBRLGdDQU9hQyxLQVBiLEVBT29CO0FBQzFCQSxjQUFNUCxXQUFOLEdBQW9CLEtBQUtBLFdBQXpCOztBQUVBUSxnQkFBUUMsSUFBUixDQUFhLG9CQUFiLEVBQW1DRixLQUFuQzs7QUFFQSxlQUFPLEtBQUtHLEtBQUwsQ0FBVyxnQkFBWCxFQUE2QkgsS0FBN0IsQ0FBUDtBQUNELE9BYk87QUFlUkkseUJBZlEsK0JBZVlKLEtBZlosRUFlbUI7QUFDekJBLGNBQU1QLFdBQU4sR0FBb0IsS0FBS0EsV0FBekI7O0FBRUFRLGdCQUFRQyxJQUFSLENBQWEsbUJBQWIsRUFBa0NGLEtBQWxDOztBQUVBLGVBQU8sS0FBS0csS0FBTCxDQUFXLGVBQVgsRUFBNEJILEtBQTVCLENBQVA7QUFDRCxPQXJCTztBQXVCUkssd0JBdkJRLDhCQXVCV0wsS0F2QlgsRUF1QmtCO0FBQ3hCQSxjQUFNUCxXQUFOLEdBQW9CLEtBQUtBLFdBQXpCOztBQUVBUSxnQkFBUUMsSUFBUixDQUFhLGtCQUFiLEVBQWlDRixLQUFqQzs7QUFFQSxlQUFPLEtBQUtHLEtBQUwsQ0FBVyxjQUFYLEVBQTJCSCxLQUEzQixDQUFQO0FBQ0Q7QUE3Qk8sSzs7OztFQW5CMEIsZUFBS00sUzs7a0JBQXRCM0IsUSIsImZpbGUiOiJ6YW4tZmllbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHphbkZpZWxkIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICBwcm9wcyA9IHtcbiAgICBvcHRpb25zOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIHJpZ2h0OiB0cnVlLFxuICAgICAgICBlcnJvcjogdHJ1ZSxcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgdHlwZTogJ3RleHRhcmVhJyxcbiAgICAgICAgbW9kZTogJ3dyYXBwZWQnLFxuICAgICAgICB0aXRsZTogJ+a2iOi0ueaAu+minScsXG4gICAgICAgIGlucHV0VHlwZTogJ251bWJlcicsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAn6K+i6Zeu5pS26ZO25ZGY5ZCO6L6T5YWlJ1xuICAgICAgfVxuICAgIH0sXG4gICAgY29tcG9uZW50SWQ6IFN0cmluZ1xuICB9XG4gIGRhdGEgPSB7fVxuICBtZXRob2RzID0ge1xuICAgIGNsZWFyKCkge1xuICAgICAgdGhpcy5vcHRpb25zLnZhbHVlID0gJyAgJ1xuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgdGhpcy5vcHRpb25zLnZhbHVlID0gJydcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9LFxuICAgIGhhbmRsZVphbkZpZWxkQ2hhbmdlKGV2ZW50KSB7XG4gICAgICBldmVudC5jb21wb25lbnRJZCA9IHRoaXMuY29tcG9uZW50SWRcblxuICAgICAgY29uc29sZS5pbmZvKCdbemFuOmZpZWxkOmNoYW5nZV0nLCBldmVudClcblxuICAgICAgcmV0dXJuIHRoaXMuJGVtaXQoJ3phbkZpZWxkQ2hhbmdlJywgZXZlbnQpXG4gICAgfSxcblxuICAgIGhhbmRsZVphbkZpZWxkRm9jdXMoZXZlbnQpIHtcbiAgICAgIGV2ZW50LmNvbXBvbmVudElkID0gdGhpcy5jb21wb25lbnRJZFxuXG4gICAgICBjb25zb2xlLmluZm8oJ1t6YW46ZmllbGQ6Zm9jdXNdJywgZXZlbnQpXG5cbiAgICAgIHJldHVybiB0aGlzLiRlbWl0KCd6YW5GaWVsZEZvY3VzJywgZXZlbnQpXG4gICAgfSxcblxuICAgIGhhbmRsZVphbkZpZWxkQmx1cihldmVudCkge1xuICAgICAgZXZlbnQuY29tcG9uZW50SWQgPSB0aGlzLmNvbXBvbmVudElkXG5cbiAgICAgIGNvbnNvbGUuaW5mbygnW3phbjpmaWVsZDpibHVyXScsIGV2ZW50KVxuXG4gICAgICByZXR1cm4gdGhpcy4kZW1pdCgnemFuRmllbGRCbHVyJywgZXZlbnQpXG4gICAgfVxuICB9XG59XG4iXX0=