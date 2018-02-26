'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _test = require('./../mixins/test.js');

var _test2 = _interopRequireDefault(_test);

var _Mock = require('./../util/Mock.js');

var _Mock2 = _interopRequireDefault(_Mock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AfterSpeak = function (_wepy$page) {
  _inherits(AfterSpeak, _wepy$page);

  function AfterSpeak() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AfterSpeak);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AfterSpeak.__proto__ || Object.getPrototypeOf(AfterSpeak)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '创建敢说'
    }, _this.components = {}, _this.mixins = [_test2.default], _this.data = {
      userInfo: {
        nickName: '加载中...'
      }
    }, _this.computed = {
      now: function now() {
        return +new Date();
      }
    }, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AfterSpeak, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      this.$parent.getUserInfo(function (userInfo) {
        if (userInfo) {
          self.userInfo = userInfo;
        }
        self.normalTitle = '标题已被修改';

        self.setTimeoutTitle = '标题三秒后会被修改';
        setTimeout(function () {
          self.setTimeoutTitle = '到三秒了';
          self.$apply();
        }, 3000);

        self.$apply();
      });
    }
  }]);

  return AfterSpeak;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(AfterSpeak , 'pages/afterspeak'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFmdGVyc3BlYWsuanMiXSwibmFtZXMiOlsiQWZ0ZXJTcGVhayIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwibWl4aW5zIiwiZGF0YSIsInVzZXJJbmZvIiwibmlja05hbWUiLCJjb21wdXRlZCIsIm5vdyIsIkRhdGUiLCJtZXRob2RzIiwiZXZlbnRzIiwic2VsZiIsIiRwYXJlbnQiLCJnZXRVc2VySW5mbyIsIm5vcm1hbFRpdGxlIiwic2V0VGltZW91dFRpdGxlIiwic2V0VGltZW91dCIsIiRhcHBseSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxVOzs7Ozs7Ozs7Ozs7Ozs4TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWEsRSxRQUdiQyxNLEdBQVMsZ0IsUUFFVEMsSSxHQUFPO0FBQ0xDLGdCQUFVO0FBQ1JDLGtCQUFVO0FBREY7QUFETCxLLFFBTVBDLFEsR0FBVztBQUNUQyxTQURTLGlCQUNGO0FBQ0wsZUFBTyxDQUFDLElBQUlDLElBQUosRUFBUjtBQUNEO0FBSFEsSyxRQU1YQyxPLEdBQVUsRSxRQUlWQyxNLEdBQVMsRTs7Ozs7NkJBSUE7QUFDUCxVQUFJQyxPQUFPLElBQVg7QUFDQSxXQUFLQyxPQUFMLENBQWFDLFdBQWIsQ0FBeUIsVUFBVVQsUUFBVixFQUFvQjtBQUMzQyxZQUFJQSxRQUFKLEVBQWM7QUFDWk8sZUFBS1AsUUFBTCxHQUFnQkEsUUFBaEI7QUFDRDtBQUNETyxhQUFLRyxXQUFMLEdBQW1CLFFBQW5COztBQUVBSCxhQUFLSSxlQUFMLEdBQXVCLFdBQXZCO0FBQ0FDLG1CQUFXLFlBQU07QUFDZkwsZUFBS0ksZUFBTCxHQUF1QixNQUF2QjtBQUNBSixlQUFLTSxNQUFMO0FBQ0QsU0FIRCxFQUdHLElBSEg7O0FBS0FOLGFBQUtNLE1BQUw7QUFDRCxPQWJEO0FBY0Q7Ozs7RUE3Q3FDLGVBQUtDLEk7O2tCQUF4QnBCLFUiLCJmaWxlIjoiYWZ0ZXJzcGVhay5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgdGVzdE1peGluIGZyb20gJy4uL21peGlucy90ZXN0J1xuICBpbXBvcnQgTW9jayBmcm9tICdAL3V0aWwvTW9jaydcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWZ0ZXJTcGVhayBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WIm+W7uuaVouivtCdcbiAgICB9XG4gICAgY29tcG9uZW50cyA9IHtcbiAgICB9XG5cbiAgICBtaXhpbnMgPSBbdGVzdE1peGluXVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIHVzZXJJbmZvOiB7XG4gICAgICAgIG5pY2tOYW1lOiAn5Yqg6L295LitLi4uJ1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgICAgbm93ICgpIHtcbiAgICAgICAgcmV0dXJuICtuZXcgRGF0ZSgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcblxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcblxuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgdGhpcy4kcGFyZW50LmdldFVzZXJJbmZvKGZ1bmN0aW9uICh1c2VySW5mbykge1xuICAgICAgICBpZiAodXNlckluZm8pIHtcbiAgICAgICAgICBzZWxmLnVzZXJJbmZvID0gdXNlckluZm9cbiAgICAgICAgfVxuICAgICAgICBzZWxmLm5vcm1hbFRpdGxlID0gJ+agh+mimOW3suiiq+S/ruaUuSdcblxuICAgICAgICBzZWxmLnNldFRpbWVvdXRUaXRsZSA9ICfmoIfpopjkuInnp5LlkI7kvJrooqvkv67mlLknXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHNlbGYuc2V0VGltZW91dFRpdGxlID0gJ+WIsOS4ieenkuS6hidcbiAgICAgICAgICBzZWxmLiRhcHBseSgpXG4gICAgICAgIH0sIDMwMDApXG5cbiAgICAgICAgc2VsZi4kYXBwbHkoKVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiJdfQ==