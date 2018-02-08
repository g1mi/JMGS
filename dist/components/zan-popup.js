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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = zanToast.__proto__ || Object.getPrototypeOf(zanToast)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      direction: {
        type: String,
        default: ''
      }
    }, _this.data = {
      showPopup: false
    }, _this.methods = {
      togglePopup: function togglePopup() {
        this.showPopup = !this.showPopup;
        this.$apply();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return zanToast;
}(_wepy2.default.component);

exports.default = zanToast;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInphbi1wb3B1cC5qcyJdLCJuYW1lcyI6WyJ6YW5Ub2FzdCIsInByb3BzIiwiZGlyZWN0aW9uIiwidHlwZSIsIlN0cmluZyIsImRlZmF1bHQiLCJkYXRhIiwic2hvd1BvcHVwIiwibWV0aG9kcyIsInRvZ2dsZVBvcHVwIiwiJGFwcGx5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsUTs7Ozs7Ozs7Ozs7Ozs7MExBQ25CQyxLLEdBQVE7QUFDTkMsaUJBQVc7QUFDVEMsY0FBTUMsTUFERztBQUVUQyxpQkFBUztBQUZBO0FBREwsSyxRQU1SQyxJLEdBQU87QUFDTEMsaUJBQVc7QUFETixLLFFBR1BDLE8sR0FBVTtBQUNSQyxpQkFEUSx5QkFDTTtBQUNaLGFBQUtGLFNBQUwsR0FBaUIsQ0FBQyxLQUFLQSxTQUF2QjtBQUNBLGFBQUtHLE1BQUw7QUFDRDtBQUpPLEs7Ozs7RUFWMEIsZUFBS0MsUzs7a0JBQXRCWCxRIiwiZmlsZSI6Inphbi1wb3B1cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgemFuVG9hc3QgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XHJcbiAgcHJvcHMgPSB7XHJcbiAgICBkaXJlY3Rpb246IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICBkZWZhdWx0OiAnJ1xyXG4gICAgfVxyXG4gIH1cclxuICBkYXRhID0ge1xyXG4gICAgc2hvd1BvcHVwOiBmYWxzZVxyXG4gIH1cclxuICBtZXRob2RzID0ge1xyXG4gICAgdG9nZ2xlUG9wdXAoKSB7XHJcbiAgICAgIHRoaXMuc2hvd1BvcHVwID0gIXRoaXMuc2hvd1BvcHVwXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19