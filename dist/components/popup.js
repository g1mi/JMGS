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
      togglePopup: function togglePopup() {
        this.showPopup = !this.showPopup;
        this.$apply();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Popup;
}(_wepy2.default.component);

exports.default = Popup;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcHVwLmpzIl0sIm5hbWVzIjpbIlBvcHVwIiwicHJvcHMiLCJkaXJlY3Rpb24iLCJ0eXBlIiwiU3RyaW5nIiwiZGVmYXVsdCIsImRhdGEiLCJzaG93UG9wdXAiLCJtZXRob2RzIiwidG9nZ2xlUG9wdXAiLCIkYXBwbHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLEssR0FBUTtBQUNOQyxpQkFBVztBQUNUQyxjQUFNQyxNQURHO0FBRVRDLGlCQUFTO0FBRkE7QUFETCxLLFFBTVJDLEksR0FBTztBQUNMQyxpQkFBVztBQUROLEssUUFHUEMsTyxHQUFVO0FBQ1JDLGlCQURRLHlCQUNNO0FBQ1osYUFBS0YsU0FBTCxHQUFpQixDQUFDLEtBQUtBLFNBQXZCO0FBQ0EsYUFBS0csTUFBTDtBQUNEO0FBSk8sSzs7OztFQVZ1QixlQUFLQyxTOztrQkFBbkJYLEsiLCJmaWxlIjoicG9wdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICBwcm9wcyA9IHtcbiAgICBkaXJlY3Rpb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcnXG4gICAgfVxuICB9XG4gIGRhdGEgPSB7XG4gICAgc2hvd1BvcHVwOiBmYWxzZVxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgdG9nZ2xlUG9wdXAoKSB7XG4gICAgICB0aGlzLnNob3dQb3B1cCA9ICF0aGlzLnNob3dQb3B1cFxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH1cbiAgfVxufVxuIl19