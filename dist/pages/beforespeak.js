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

var BeforeSpeak = function (_wepy$page) {
  _inherits(BeforeSpeak, _wepy$page);

  function BeforeSpeak() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, BeforeSpeak);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BeforeSpeak.__proto__ || Object.getPrototypeOf(BeforeSpeak)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '准备说'
    }, _this.components = {
      bulletin: _bulletin2.default
    }, _this.mixins = [_test2.default], _this.data = {}, _this.computed = {
      now: function now() {
        return +new Date();
      }
    }, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(BeforeSpeak, [{
    key: 'onLoad',
    value: function onLoad() {
      this.$invoke('bulletin', 'typeInfo', _Mock2.default.getBulletinInfo());
    }
  }]);

  return BeforeSpeak;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(BeforeSpeak , 'pages/beforespeak'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlZm9yZXNwZWFrLmpzIl0sIm5hbWVzIjpbIkJlZm9yZVNwZWFrIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJidWxsZXRpbiIsIm1peGlucyIsImRhdGEiLCJjb21wdXRlZCIsIm5vdyIsIkRhdGUiLCJtZXRob2RzIiwiZXZlbnRzIiwiJGludm9rZSIsImdldEJ1bGxldGluSW5mbyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLFc7Ozs7Ozs7Ozs7Ozs7O2dNQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYTtBQUNYQztBQURXLEssUUFJYkMsTSxHQUFTLGdCLFFBRVRDLEksR0FBTyxFLFFBR1BDLFEsR0FBVztBQUNUQyxTQURTLGlCQUNGO0FBQ0wsZUFBTyxDQUFDLElBQUlDLElBQUosRUFBUjtBQUNEO0FBSFEsSyxRQU1YQyxPLEdBQVUsRSxRQUlWQyxNLEdBQVMsRTs7Ozs7NkJBSUE7QUFDUCxXQUFLQyxPQUFMLENBQWEsVUFBYixFQUF5QixVQUF6QixFQUFvQyxlQUFLQyxlQUFMLEVBQXBDO0FBQ0Q7Ozs7RUE3QnNDLGVBQUtDLEk7O2tCQUF6QmQsVyIsImZpbGUiOiJiZWZvcmVzcGVhay5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgdGVzdE1peGluIGZyb20gJy4uL21peGlucy90ZXN0J1xuICBpbXBvcnQgQnVsbGV0aW4gZnJvbSAnQC9jb21wb25lbnRzL2J1bGxldGluJ1xuICBpbXBvcnQgTW9jayBmcm9tICdAL3V0aWwvTW9jaydcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmVmb3JlU3BlYWsgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflh4blpIfor7QnXG4gICAgfVxuICAgIGNvbXBvbmVudHMgPSB7XG4gICAgICBidWxsZXRpbjogQnVsbGV0aW5cbiAgICB9XG5cbiAgICBtaXhpbnMgPSBbdGVzdE1peGluXVxuXG4gICAgZGF0YSA9IHtcbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICAgIG5vdyAoKSB7XG4gICAgICAgIHJldHVybiArbmV3IERhdGUoKVxuICAgICAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG5cbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG5cbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICB0aGlzLiRpbnZva2UoJ2J1bGxldGluJywgJ3R5cGVJbmZvJyxNb2NrLmdldEJ1bGxldGluSW5mbygpKVxuICAgIH1cbiAgfVxuIl19