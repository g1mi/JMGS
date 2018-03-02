"use strict";

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

var _mapPicker = require('./../components/mapPicker.js');

var _mapPicker2 = _interopRequireDefault(_mapPicker);

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
      navigationBarTitleText: "创建敢说"
    }, _this.$repeat = {}, _this.$props = { "mappicker": { "direction": "bottom" } }, _this.$events = {}, _this.components = {
      mappicker: _mapPicker2.default
    }, _this.mixins = [_test2.default], _this.data = {
      allowedCity: '',
      pickerDisplay: 'hide', //flag to hide the original component
      mapPicked: 'warn'
    }, _this.computed = {
      now: function now() {
        return +new Date();
      }
    }, _this.methods = {
      pickLoc: function pickLoc() {
        console.log('mapPicker taped');
        this.pickerDisplay = 'show';
        this.$invoke('mappicker', 'showPopup');
      },
      cancelPick: function cancelPick() {
        this.pickerDisplay = 'hide';
        this.$invoke('mappicker', 'hidePopup');
      },
      grabCoordinates: function grabCoordinates() {
        this.$invoke('mappicker', 'hidePopup');
        this.mapPicked = 'primary';
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AfterSpeak, [{
    key: "onLoad",
    value: function onLoad() {
      this.allowedCity = this.$parent.globalData.allowedCity;
    }
  }, {
    key: "onReady",
    value: function onReady() {}
  }]);

  return AfterSpeak;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(AfterSpeak , 'pages/afterspeak'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFmdGVyc3BlYWsuanMiXSwibmFtZXMiOlsiQWZ0ZXJTcGVhayIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJtYXBwaWNrZXIiLCJtaXhpbnMiLCJkYXRhIiwiYWxsb3dlZENpdHkiLCJwaWNrZXJEaXNwbGF5IiwibWFwUGlja2VkIiwiY29tcHV0ZWQiLCJub3ciLCJEYXRlIiwibWV0aG9kcyIsInBpY2tMb2MiLCJjb25zb2xlIiwibG9nIiwiJGludm9rZSIsImNhbmNlbFBpY2siLCJncmFiQ29vcmRpbmF0ZXMiLCJldmVudHMiLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFU7Ozs7Ozs7Ozs7Ozs7OzhMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1ZDLE8sR0FBVSxFLFFBQ1hDLE0sR0FBUyxFQUFDLGFBQVksRUFBQyxhQUFZLFFBQWIsRUFBYixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNWQztBQURVLEssUUFJWkMsTSxHQUFTLGdCLFFBRVRDLEksR0FBTztBQUNMQyxtQkFBYSxFQURSO0FBRUxDLHFCQUFlLE1BRlYsRUFFa0I7QUFDdkJDLGlCQUFXO0FBSE4sSyxRQU1QQyxRLEdBQVc7QUFDVEMsU0FEUyxpQkFDSDtBQUNKLGVBQU8sQ0FBQyxJQUFJQyxJQUFKLEVBQVI7QUFDRDtBQUhRLEssUUFNWEMsTyxHQUFVO0FBQ1JDLGFBRFEscUJBQ0U7QUFDUkMsZ0JBQVFDLEdBQVIsQ0FBWSxpQkFBWjtBQUNBLGFBQUtSLGFBQUwsR0FBcUIsTUFBckI7QUFDQSxhQUFLUyxPQUFMLENBQWEsV0FBYixFQUEwQixXQUExQjtBQUNELE9BTE87QUFNUkMsZ0JBTlEsd0JBTUs7QUFDWCxhQUFLVixhQUFMLEdBQXFCLE1BQXJCO0FBQ0EsYUFBS1MsT0FBTCxDQUFhLFdBQWIsRUFBMEIsV0FBMUI7QUFDRCxPQVRPO0FBVVJFLHFCQVZRLDZCQVVVO0FBQ2hCLGFBQUtGLE9BQUwsQ0FBYSxXQUFiLEVBQTBCLFdBQTFCO0FBQ0EsYUFBS1IsU0FBTCxHQUFpQixTQUFqQjtBQUNEO0FBYk8sSyxRQWdCVlcsTSxHQUFTLEU7Ozs7OzZCQUVBO0FBQ1AsV0FBS2IsV0FBTCxHQUFtQixLQUFLYyxPQUFMLENBQWFDLFVBQWIsQ0FBd0JmLFdBQTNDO0FBQ0Q7Ozs4QkFFUSxDQUVSOzs7O0VBakRxQyxlQUFLZ0IsSTs7a0JBQXhCMUIsVSIsImZpbGUiOiJhZnRlcnNwZWFrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tIFwid2VweVwiO1xuaW1wb3J0IHRlc3RNaXhpbiBmcm9tIFwiLi4vbWl4aW5zL3Rlc3RcIjtcbmltcG9ydCBNb2NrIGZyb20gXCJAL3V0aWwvTW9ja1wiO1xuaW1wb3J0IE1hcFBpY2tlciBmcm9tICcuLi9jb21wb25lbnRzL21hcFBpY2tlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWZ0ZXJTcGVhayBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiBcIuWIm+W7uuaVouivtFwiXG4gIH07XG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJtYXBwaWNrZXJcIjp7XCJkaXJlY3Rpb25cIjpcImJvdHRvbVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgbWFwcGlja2VyOiBNYXBQaWNrZXJcbiAgfTtcblxuICBtaXhpbnMgPSBbdGVzdE1peGluXTtcblxuICBkYXRhID0ge1xuICAgIGFsbG93ZWRDaXR5OiAnJyxcbiAgICBwaWNrZXJEaXNwbGF5OiAnaGlkZScsIC8vZmxhZyB0byBoaWRlIHRoZSBvcmlnaW5hbCBjb21wb25lbnRcbiAgICBtYXBQaWNrZWQ6ICd3YXJuJ1xuICB9O1xuXG4gIGNvbXB1dGVkID0ge1xuICAgIG5vdygpIHtcbiAgICAgIHJldHVybiArbmV3IERhdGUoKTtcbiAgICB9XG4gIH07XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBwaWNrTG9jKCkge1xuICAgICAgY29uc29sZS5sb2coJ21hcFBpY2tlciB0YXBlZCcpXG4gICAgICB0aGlzLnBpY2tlckRpc3BsYXkgPSAnc2hvdydcbiAgICAgIHRoaXMuJGludm9rZSgnbWFwcGlja2VyJywgJ3Nob3dQb3B1cCcpXG4gICAgfSxcbiAgICBjYW5jZWxQaWNrKCkge1xuICAgICAgdGhpcy5waWNrZXJEaXNwbGF5ID0gJ2hpZGUnXG4gICAgICB0aGlzLiRpbnZva2UoJ21hcHBpY2tlcicsICdoaWRlUG9wdXAnKVxuICAgIH0sXG4gICAgZ3JhYkNvb3JkaW5hdGVzKCkge1xuICAgICAgdGhpcy4kaW52b2tlKCdtYXBwaWNrZXInLCAnaGlkZVBvcHVwJylcbiAgICAgIHRoaXMubWFwUGlja2VkID0gJ3ByaW1hcnknXG4gICAgfVxuICB9O1xuXG4gIGV2ZW50cyA9IHt9O1xuXG4gIG9uTG9hZCgpIHtcbiAgICB0aGlzLmFsbG93ZWRDaXR5ID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuYWxsb3dlZENpdHlcbiAgfVxuXG4gIG9uUmVhZHkoKXtcblxuICB9XG59XG4iXX0=