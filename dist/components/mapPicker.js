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

var Popup = function (_wepy$component) {
  _inherits(Popup, _wepy$component);

  function Popup() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Popup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Popup.__proto__ || Object.getPrototypeOf(Popup)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      direction: {
        type: String,
        default: ''
      }
    }, _this.data = {
      showPopup: false
    }, _this.methods = {
      hidePopup: function hidePopup() {
        this.showPopup = false;
        this.$apply();
      },
      showPopup: function showPopup() {
        this.showPopup = true;
        this.$apply();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Popup;
}(_wepy2.default.component);

exports.default = Popup;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcHBpY2tlci5qcyJdLCJuYW1lcyI6WyJQb3B1cCIsInByb3BzIiwiZGlyZWN0aW9uIiwidHlwZSIsIlN0cmluZyIsImRlZmF1bHQiLCJkYXRhIiwic2hvd1BvcHVwIiwibWV0aG9kcyIsImhpZGVQb3B1cCIsIiRhcHBseSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsSyxHQUFRO0FBQ05DLGlCQUFXO0FBQ1RDLGNBQU1DLE1BREc7QUFFVEMsaUJBQVM7QUFGQTtBQURMLEssUUFNUkMsSSxHQUFPO0FBQ0xDLGlCQUFXO0FBRE4sSyxRQUdQQyxPLEdBQVU7QUFDUkMsZUFEUSx1QkFDSTtBQUNWLGFBQUtGLFNBQUwsR0FBaUIsS0FBakI7QUFDQSxhQUFLRyxNQUFMO0FBQ0QsT0FKTztBQUtSSCxlQUxRLHVCQUtJO0FBQ1YsYUFBS0EsU0FBTCxHQUFpQixJQUFqQjtBQUNBLGFBQUtHLE1BQUw7QUFDRDtBQVJPLEs7Ozs7RUFWdUIsZUFBS0MsUzs7a0JBQW5CWCxLIiwiZmlsZSI6Im1hcHBpY2tlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXAgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gIHByb3BzID0ge1xuICAgIGRpcmVjdGlvbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJydcbiAgICB9XG4gIH1cbiAgZGF0YSA9IHtcbiAgICBzaG93UG9wdXA6IGZhbHNlXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBoaWRlUG9wdXAoKSB7XG4gICAgICB0aGlzLnNob3dQb3B1cCA9IGZhbHNlXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfSxcbiAgICBzaG93UG9wdXAoKSB7XG4gICAgICB0aGlzLnNob3dQb3B1cCA9IHRydWVcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9XG4gIH1cbn1cbiJdfQ==