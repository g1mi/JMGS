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

var zanLoadmore = function (_wepy$component) {
  _inherits(zanLoadmore, _wepy$component);

  function zanLoadmore() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, zanLoadmore);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = zanLoadmore.__proto__ || Object.getPrototypeOf(zanLoadmore)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      loading: {
        type: Boolean,
        default: false
      },
      nodata: {
        type: Boolean,
        default: false
      },
      nomore: {
        type: Boolean,
        default: false
      },
      nodata_str: {
        type: String,
        default: '暂无数据'
      }
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return zanLoadmore;
}(_wepy2.default.component);

exports.default = zanLoadmore;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInphbi1sb2FkbW9yZS5qcyJdLCJuYW1lcyI6WyJ6YW5Mb2FkbW9yZSIsInByb3BzIiwibG9hZGluZyIsInR5cGUiLCJCb29sZWFuIiwiZGVmYXVsdCIsIm5vZGF0YSIsIm5vbW9yZSIsIm5vZGF0YV9zdHIiLCJTdHJpbmciLCJtZXRob2RzIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsVzs7Ozs7Ozs7Ozs7Ozs7Z01BQ25CQyxLLEdBQVE7QUFDTkMsZUFBUztBQUNQQyxjQUFNQyxPQURDO0FBRVBDLGlCQUFTO0FBRkYsT0FESDtBQUtOQyxjQUFRO0FBQ05ILGNBQU1DLE9BREE7QUFFTkMsaUJBQVM7QUFGSCxPQUxGO0FBU05FLGNBQVE7QUFDTkosY0FBTUMsT0FEQTtBQUVOQyxpQkFBUztBQUZILE9BVEY7QUFhTkcsa0JBQVk7QUFDVkwsY0FBTU0sTUFESTtBQUVWSixpQkFBUztBQUZDO0FBYk4sSyxRQWtCUkssTyxHQUFVLEU7Ozs7RUFuQjZCLGVBQUtDLFM7O2tCQUF6QlgsVyIsImZpbGUiOiJ6YW4tbG9hZG1vcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHphbkxvYWRtb3JlIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICBwcm9wcyA9IHtcbiAgICBsb2FkaW5nOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuICAgIG5vZGF0YToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfSxcbiAgICBub21vcmU6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG4gICAgbm9kYXRhX3N0cjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ+aaguaXoOaVsOaNridcbiAgICB9XG4gIH1cbiAgbWV0aG9kcyA9IHt9XG59XG4iXX0=