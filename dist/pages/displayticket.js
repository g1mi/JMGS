'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./../npm/wepy-async-function/index.js');

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

var Displayticket = function (_wepy$page) {
  _inherits(Displayticket, _wepy$page);

  function Displayticket() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Displayticket);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Displayticket.__proto__ || Object.getPrototypeOf(Displayticket)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'Displayticket'
    }, _this.components = {
      bulletin: _bulletin2.default
    }, _this.mixins = [_test2.default], _this.data = {
      list: [{
        id: 'widget',
        name: '基础组件',
        open: false,
        pages: ['article', 'badge', 'flex', 'footer', 'gallery', 'grid', 'icons', 'loadmore', 'panel', 'preview', 'progress']
      }]
    }, _this.computed = {
      now: function now() {
        return +new Date();
      }
    }, _this.methods = {
      toggle: function toggle(id) {
        this.list.forEach(function (v) {
          return v.open = v.id === id ? !v.open : false;
        });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Displayticket, [{
    key: 'onReady',
    value: function onReady() {
      console.log(_Mock2.default);
      this.$invoke('bulletin', 'typeInfo', _Mock2.default.getBulletinInfo());
    }
  }]);

  return Displayticket;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Displayticket , 'pages/displayticket'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3BsYXl0aWNrZXQuanMiXSwibmFtZXMiOlsiRGlzcGxheXRpY2tldCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiYnVsbGV0aW4iLCJtaXhpbnMiLCJkYXRhIiwibGlzdCIsImlkIiwibmFtZSIsIm9wZW4iLCJwYWdlcyIsImNvbXB1dGVkIiwibm93IiwiRGF0ZSIsIm1ldGhvZHMiLCJ0b2dnbGUiLCJmb3JFYWNoIiwidiIsImV2ZW50cyIsImNvbnNvbGUiLCJsb2ciLCIkaW52b2tlIiwiZ2V0QnVsbGV0aW5JbmZvIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsYTs7Ozs7Ozs7Ozs7Ozs7b01BQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhO0FBQ1hDO0FBRFcsSyxRQUliQyxNLEdBQVMsZ0IsUUFFVEMsSSxHQUFPO0FBQ0xDLFlBQU0sQ0FDSTtBQUNJQyxZQUFJLFFBRFI7QUFFSUMsY0FBTSxNQUZWO0FBR0lDLGNBQU0sS0FIVjtBQUlJQyxlQUFPLENBQUMsU0FBRCxFQUFZLE9BQVosRUFBcUIsTUFBckIsRUFBNkIsUUFBN0IsRUFBdUMsU0FBdkMsRUFBa0QsTUFBbEQsRUFBMEQsT0FBMUQsRUFBbUUsVUFBbkUsRUFBK0UsT0FBL0UsRUFBd0YsU0FBeEYsRUFBbUcsVUFBbkc7QUFKWCxPQURKO0FBREQsSyxRQVVQQyxRLEdBQVc7QUFDVEMsU0FEUyxpQkFDRjtBQUNMLGVBQU8sQ0FBQyxJQUFJQyxJQUFKLEVBQVI7QUFDRDtBQUhRLEssUUFNWEMsTyxHQUFVO0FBQ1JDLFlBRFEsa0JBQ0FSLEVBREEsRUFDSTtBQUNSLGFBQUtELElBQUwsQ0FBVVUsT0FBVixDQUFrQjtBQUFBLGlCQUFLQyxFQUFFUixJQUFGLEdBQVVRLEVBQUVWLEVBQUYsS0FBU0EsRUFBVixHQUFnQixDQUFDVSxFQUFFUixJQUFuQixHQUEwQixLQUF4QztBQUFBLFNBQWxCO0FBQ0Q7QUFISyxLLFFBTVZTLE0sR0FBUyxFOzs7Ozs4QkFJQztBQUNSQyxjQUFRQyxHQUFSO0FBQ0EsV0FBS0MsT0FBTCxDQUFhLFVBQWIsRUFBeUIsVUFBekIsRUFBcUMsZUFBS0MsZUFBTCxFQUFyQztBQUNEOzs7O0VBdkN3QyxlQUFLQyxJOztrQkFBM0J4QixhIiwiZmlsZSI6ImRpc3BsYXl0aWNrZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xuICBpbXBvcnQgdGVzdE1peGluIGZyb20gJy4uL21peGlucy90ZXN0J1xuICBpbXBvcnQgQnVsbGV0aW4gZnJvbSAnLi4vY29tcG9uZW50cy9idWxsZXRpbidcbiAgaW1wb3J0IG1vY2sgZnJvbSAnLi4vdXRpbC9Nb2NrJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc3BsYXl0aWNrZXQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdEaXNwbGF5dGlja2V0J1xuICAgIH1cbiAgICBjb21wb25lbnRzID0ge1xuICAgICAgYnVsbGV0aW46IEJ1bGxldGluXG4gICAgfVxuXG4gICAgbWl4aW5zID0gW3Rlc3RNaXhpbl1cblxuICAgIGRhdGEgPSB7XG4gICAgICBsaXN0OiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogJ3dpZGdldCcsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICfln7rnoYDnu4Tku7YnLFxuICAgICAgICAgICAgICAgICAgICBvcGVuOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgcGFnZXM6IFsnYXJ0aWNsZScsICdiYWRnZScsICdmbGV4JywgJ2Zvb3RlcicsICdnYWxsZXJ5JywgJ2dyaWQnLCAnaWNvbnMnLCAnbG9hZG1vcmUnLCAncGFuZWwnLCAncHJldmlldycsICdwcm9ncmVzcyddXG4gICAgICAgICAgICAgICAgfV1cbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICAgIG5vdyAoKSB7XG4gICAgICAgIHJldHVybiArbmV3IERhdGUoKVxuICAgICAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICB0b2dnbGUgKGlkKSB7XG4gICAgICAgICAgdGhpcy5saXN0LmZvckVhY2godiA9PiB2Lm9wZW4gPSAodi5pZCA9PT0gaWQpID8gIXYub3BlbiA6IGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcblxuICAgIH1cblxuICAgIG9uUmVhZHkoKSB7XG4gICAgICBjb25zb2xlLmxvZyhtb2NrKVxuICAgICAgdGhpcy4kaW52b2tlKCdidWxsZXRpbicsICd0eXBlSW5mbycsIG1vY2suZ2V0QnVsbGV0aW5JbmZvKCkpXG4gICAgfVxuICB9XG4iXX0=