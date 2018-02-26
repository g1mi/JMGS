'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _test = require('./../mixins/test.js');

var _test2 = _interopRequireDefault(_test);

var _bulletin = require('./../components/bulletin.js');

var _bulletin2 = _interopRequireDefault(_bulletin);

var _Mock = require('./../util/Mock.js');

var _Mock2 = _interopRequireDefault(_Mock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Precreateticket = function (_wepy$page) {
  _inherits(Precreateticket, _wepy$page);

  function Precreateticket() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Precreateticket);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Precreateticket.__proto__ || Object.getPrototypeOf(Precreateticket)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '准备创建敢说'
    }, _this.components = {
      bulletin: _bulletin2.default
    }, _this.mixins = [_test2.default], _this.data = {}, _this.computed = {
      now: function now() {
        return +new Date();
      }
    }, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Precreateticket, [{
    key: 'onLoad',
    value: function onLoad() {
      this.$invoke('bulletin', 'typeInfo', _Mock2.default.getBulletinInfo());
    }
  }]);

  return Precreateticket;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Precreateticket , 'pages/precreateticket'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZWNyZWF0ZXRpY2tldC5qcyJdLCJuYW1lcyI6WyJQcmVjcmVhdGV0aWNrZXQiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImJ1bGxldGluIiwibWl4aW5zIiwiZGF0YSIsImNvbXB1dGVkIiwibm93IiwiRGF0ZSIsIm1ldGhvZHMiLCJldmVudHMiLCIkaW52b2tlIiwiZ2V0QnVsbGV0aW5JbmZvIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsZTs7Ozs7Ozs7Ozs7Ozs7d01BQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhO0FBQ1hDO0FBRFcsSyxRQUliQyxNLEdBQVMsZ0IsUUFFVEMsSSxHQUFPLEUsUUFHUEMsUSxHQUFXO0FBQ1RDLFNBRFMsaUJBQ0Y7QUFDTCxlQUFPLENBQUMsSUFBSUMsSUFBSixFQUFSO0FBQ0Q7QUFIUSxLLFFBTVhDLE8sR0FBVSxFLFFBSVZDLE0sR0FBUyxFOzs7Ozs2QkFJQTtBQUNQLFdBQUtDLE9BQUwsQ0FBYSxVQUFiLEVBQXlCLFVBQXpCLEVBQW9DLGVBQUtDLGVBQUwsRUFBcEM7QUFDRDs7OztFQTdCMEMsZUFBS0MsSTs7a0JBQTdCZCxlIiwiZmlsZSI6InByZWNyZWF0ZXRpY2tldC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgdGVzdE1peGluIGZyb20gJy4uL21peGlucy90ZXN0J1xuICBpbXBvcnQgQnVsbGV0aW4gZnJvbSAnQC9jb21wb25lbnRzL2J1bGxldGluJ1xuICBpbXBvcnQgTW9jayBmcm9tICdAL3V0aWwvTW9jaydcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlY3JlYXRldGlja2V0IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5YeG5aSH5Yib5bu65pWi6K+0J1xuICAgIH1cbiAgICBjb21wb25lbnRzID0ge1xuICAgICAgYnVsbGV0aW46IEJ1bGxldGluXG4gICAgfVxuXG4gICAgbWl4aW5zID0gW3Rlc3RNaXhpbl1cblxuICAgIGRhdGEgPSB7XG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgICBub3cgKCkge1xuICAgICAgICByZXR1cm4gK25ldyBEYXRlKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuXG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuXG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgdGhpcy4kaW52b2tlKCdidWxsZXRpbicsICd0eXBlSW5mbycsTW9jay5nZXRCdWxsZXRpbkluZm8oKSlcbiAgICB9XG4gIH1cbiJdfQ==