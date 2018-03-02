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

var _config = require('./../util/config.js');

var _config2 = _interopRequireDefault(_config);

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

    var _temp, _this2, _ret;

    _classCallCheck(this, AfterSpeak);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = AfterSpeak.__proto__ || Object.getPrototypeOf(AfterSpeak)).call.apply(_ref, [this].concat(args))), _this2), _this2.config = {
      navigationBarTitleText: "创建敢说"
    }, _this2.$repeat = {}, _this2.$props = { "mappicker": { "direction": "bottom" } }, _this2.$events = {}, _this2.components = {
      mappicker: _mapPicker2.default
    }, _this2.mixins = [_test2.default], _this2.data = {
      pickerDisplay: "hide", //flag to hide the original component
      mapPicked: "warn",
      controls: [],
      formData: {
        howLong: 1,
        where: {
          longitude: "",
          latitude: ""
        },
        howMany: 50
      },
      config: (0, _config2.default)(),
      mapCtx: null
    }, _this2.computed = {
      now: function now() {
        return +new Date();
      }
    }, _this2.methods = {
      pickLoc: function pickLoc() {
        var _this = this;
        console.log("mapPicker taped");
        this.pickerDisplay = "show";
        this.$invoke("mappicker", "showPopup");

        //set the pin pic after the animation
        setTimeout(function () {
          //get the coordinates of pin pic
          _wepy2.default.createSelectorQuery().select("#map").boundingClientRect(function (rect) {
            _this.controls.push({
              id: 1,
              iconPath: "../assets/images/pin.png",
              position: {
                left: rect.width / 2 - 12,
                top: rect.height / 2 - 24,
                width: 24,
                height: 24
              },
              clickable: false
            });
            _this.$apply();
            //console.log(rect);
          }).exec();
        }, 250); // a lucky number
      },
      cancelPick: function cancelPick() {
        this.pickerDisplay = "hide";
        this.$invoke("mappicker", "hidePopup");
      },
      grabCoordinates: function grabCoordinates() {
        this.$invoke("mappicker", "hidePopup");
        this.mapPicked = "primary";
        this.config.beforPosChosed = this.config.afterPosChosed;

        //set the cent coordinates into form data
        this.mapCtx = this.mapCtx || _wepy2.default.createMapContext("map");
        var _this = this;
        this.mapCtx.getCenterLocation({
          success: function success(res) {
            _this.formData.where = {
              longitude: res.longitude,
              latitude: res.latitude
            };
          },
          fail: function fail(res) {
            console.log(res);
          }
        });
      },
      submit: function submit() {
        console.log(this.formData);
      },
      changeTime: function changeTime(e) {
        this.formData.howLong = e.detail.value;
        // console.log(this.formData)
      },
      unlimitNo: function unlimitNo(e) {
        this.formData.howMany = e.detail.value ? undefined : this.config.howMany;
        //console.log(e)
      }
    }, _this2.events = {}, _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(AfterSpeak, [{
    key: "onLoad",
    value: function onLoad() {
      var _this = this;

      //get current position
      _wepy2.default.getLocation({
        type: "gcj02",
        success: function success(res) {
          //console.log(res);
          _this.formData.where = {
            longitude: res.longitude,
            latitude: res.latitude
          };
        },
        fail: function fail(err) {
          _wepy2.default.showToast({
            icon: "none",
            title: "无法获取当前位置坐标"
          });
        }
      });
    }
  }, {
    key: "onReady",
    value: function onReady() {}
  }]);

  return AfterSpeak;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(AfterSpeak , 'pages/afterspeak'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFmdGVyc3BlYWsuanMiXSwibmFtZXMiOlsiQWZ0ZXJTcGVhayIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJtYXBwaWNrZXIiLCJtaXhpbnMiLCJkYXRhIiwicGlja2VyRGlzcGxheSIsIm1hcFBpY2tlZCIsImNvbnRyb2xzIiwiZm9ybURhdGEiLCJob3dMb25nIiwid2hlcmUiLCJsb25naXR1ZGUiLCJsYXRpdHVkZSIsImhvd01hbnkiLCJtYXBDdHgiLCJjb21wdXRlZCIsIm5vdyIsIkRhdGUiLCJtZXRob2RzIiwicGlja0xvYyIsIl90aGlzIiwiY29uc29sZSIsImxvZyIsIiRpbnZva2UiLCJzZXRUaW1lb3V0IiwiY3JlYXRlU2VsZWN0b3JRdWVyeSIsInNlbGVjdCIsImJvdW5kaW5nQ2xpZW50UmVjdCIsInJlY3QiLCJwdXNoIiwiaWQiLCJpY29uUGF0aCIsInBvc2l0aW9uIiwibGVmdCIsIndpZHRoIiwidG9wIiwiaGVpZ2h0IiwiY2xpY2thYmxlIiwiJGFwcGx5IiwiZXhlYyIsImNhbmNlbFBpY2siLCJncmFiQ29vcmRpbmF0ZXMiLCJiZWZvclBvc0Nob3NlZCIsImFmdGVyUG9zQ2hvc2VkIiwiY3JlYXRlTWFwQ29udGV4dCIsImdldENlbnRlckxvY2F0aW9uIiwic3VjY2VzcyIsInJlcyIsImZhaWwiLCJzdWJtaXQiLCJjaGFuZ2VUaW1lIiwiZSIsImRldGFpbCIsInZhbHVlIiwidW5saW1pdE5vIiwidW5kZWZpbmVkIiwiZXZlbnRzIiwiZ2V0TG9jYXRpb24iLCJ0eXBlIiwiZXJyIiwic2hvd1RvYXN0IiwiaWNvbiIsInRpdGxlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxVOzs7Ozs7Ozs7Ozs7OztpTUFDbkJDLE0sR0FBUztBQUNQQyw4QkFB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RUgsQ0E5REYsRUE4REs7QUFDWCxhQUFLM0MsUUFBTCxDQUFjSyxPQUFkLEdBQXdCc0MsRUFBRUMsTUFBRixDQUFTQyxLQUFULEdBQWlCRSxTQUFqQixHQUE2QixLQUFLM0QsTUFBTCxDQUFZaUIsT0FBakU7QUFDQTtBQUNEO0FBakVPLEssU0FvRVYyQyxNLEdBQVMsRTs7Ozs7NkJBRUE7QUFDUCxVQUFJcEMsUUFBUSxJQUFaOztBQUVBO0FBQ0EscUJBQUtxQyxXQUFMLENBQWlCO0FBQ2ZDLGNBQU0sT0FEUztBQUVmWixpQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCO0FBQ0EzQixnQkFBTVosUUFBTixDQUFlRSxLQUFmLEdBQXVCO0FBQ3JCQyx1QkFBV29DLElBQUlwQyxTQURNO0FBRXJCQyxzQkFBVW1DLElBQUluQztBQUZPLFdBQXZCO0FBSUQsU0FSYztBQVNmb0MsY0FBTSxjQUFTVyxHQUFULEVBQWM7QUFDbEIseUJBQUtDLFNBQUwsQ0FBZTtBQUNiQyxrQkFBTSxNQURPO0FBRWJDLG1CQUFPO0FBRk0sV0FBZjtBQUlEO0FBZGMsT0FBakI7QUFnQkQ7Ozs4QkFFUyxDQUFFOzs7O0VBL0gwQixlQUFLQyxJOztrQkFBeEJwRSxVIiwiZmlsZSI6ImFmdGVyc3BlYWsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gXCJ3ZXB5XCI7XG5pbXBvcnQgdGVzdE1peGluIGZyb20gXCIuLi9taXhpbnMvdGVzdFwiO1xuaW1wb3J0IE1vY2sgZnJvbSBcIkAvdXRpbC9Nb2NrXCI7XG5pbXBvcnQgQ29uZmlnIGZyb20gXCJAL3V0aWwvY29uZmlnXCI7XG5pbXBvcnQgTWFwUGlja2VyIGZyb20gXCIuLi9jb21wb25lbnRzL21hcFBpY2tlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZnRlclNwZWFrIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6IFwi5Yib5bu65pWi6K+0XCJcbiAgfTtcbiAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIm1hcHBpY2tlclwiOntcImRpcmVjdGlvblwiOlwiYm90dG9tXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICBtYXBwaWNrZXI6IE1hcFBpY2tlclxuICB9O1xuXG4gIG1peGlucyA9IFt0ZXN0TWl4aW5dO1xuXG4gIGRhdGEgPSB7XG4gICAgcGlja2VyRGlzcGxheTogXCJoaWRlXCIsIC8vZmxhZyB0byBoaWRlIHRoZSBvcmlnaW5hbCBjb21wb25lbnRcbiAgICBtYXBQaWNrZWQ6IFwid2FyblwiLFxuICAgIGNvbnRyb2xzOiBbXSxcbiAgICBmb3JtRGF0YToge1xuICAgICAgaG93TG9uZzogMSxcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGxvbmdpdHVkZTogXCJcIixcbiAgICAgICAgbGF0aXR1ZGU6IFwiXCJcbiAgICAgIH0sXG4gICAgICBob3dNYW55OiA1MFxuICAgIH0sXG4gICAgY29uZmlnOiBDb25maWcoKSxcbiAgICBtYXBDdHg6IG51bGxcbiAgfTtcblxuICBjb21wdXRlZCA9IHtcbiAgICBub3coKSB7XG4gICAgICByZXR1cm4gK25ldyBEYXRlKCk7XG4gICAgfVxuICB9O1xuXG4gIG1ldGhvZHMgPSB7XG4gICAgcGlja0xvYygpIHtcbiAgICAgIGxldCBfdGhpcyA9IHRoaXNcbiAgICAgIGNvbnNvbGUubG9nKFwibWFwUGlja2VyIHRhcGVkXCIpO1xuICAgICAgdGhpcy5waWNrZXJEaXNwbGF5ID0gXCJzaG93XCI7XG4gICAgICB0aGlzLiRpbnZva2UoXCJtYXBwaWNrZXJcIiwgXCJzaG93UG9wdXBcIik7XG5cbiAgICAgIC8vc2V0IHRoZSBwaW4gcGljIGFmdGVyIHRoZSBhbmltYXRpb25cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvL2dldCB0aGUgY29vcmRpbmF0ZXMgb2YgcGluIHBpY1xuICAgICAgICB3ZXB5XG4gICAgICAgICAgLmNyZWF0ZVNlbGVjdG9yUXVlcnkoKVxuICAgICAgICAgIC5zZWxlY3QoXCIjbWFwXCIpXG4gICAgICAgICAgLmJvdW5kaW5nQ2xpZW50UmVjdChmdW5jdGlvbihyZWN0KSB7XG4gICAgICAgICAgICBfdGhpcy5jb250cm9scy5wdXNoKHtcbiAgICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICAgIGljb25QYXRoOiBcIi4uL2Fzc2V0cy9pbWFnZXMvcGluLnBuZ1wiLFxuICAgICAgICAgICAgICBwb3NpdGlvbjoge1xuICAgICAgICAgICAgICAgIGxlZnQ6IHJlY3Qud2lkdGggLyAyIC0gMTIsXG4gICAgICAgICAgICAgICAgdG9wOiByZWN0LmhlaWdodCAvIDIgLSAyNCxcbiAgICAgICAgICAgICAgICB3aWR0aDogMjQsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBjbGlja2FibGU6IGZhbHNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIF90aGlzLiRhcHBseSgpXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlY3QpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmV4ZWMoKTtcbiAgICAgIH0sIDI1MCk7IC8vIGEgbHVja3kgbnVtYmVyXG4gICAgfSxcbiAgICBjYW5jZWxQaWNrKCkge1xuICAgICAgdGhpcy5waWNrZXJEaXNwbGF5ID0gXCJoaWRlXCI7XG4gICAgICB0aGlzLiRpbnZva2UoXCJtYXBwaWNrZXJcIiwgXCJoaWRlUG9wdXBcIik7XG4gICAgfSxcbiAgICBncmFiQ29vcmRpbmF0ZXMoKSB7XG4gICAgICB0aGlzLiRpbnZva2UoXCJtYXBwaWNrZXJcIiwgXCJoaWRlUG9wdXBcIik7XG4gICAgICB0aGlzLm1hcFBpY2tlZCA9IFwicHJpbWFyeVwiO1xuICAgICAgdGhpcy5jb25maWcuYmVmb3JQb3NDaG9zZWQgPSB0aGlzLmNvbmZpZy5hZnRlclBvc0Nob3NlZDtcblxuICAgICAgLy9zZXQgdGhlIGNlbnQgY29vcmRpbmF0ZXMgaW50byBmb3JtIGRhdGFcbiAgICAgIHRoaXMubWFwQ3R4ID0gdGhpcy5tYXBDdHggfHwgd2VweS5jcmVhdGVNYXBDb250ZXh0KFwibWFwXCIpO1xuICAgICAgbGV0IF90aGlzID0gdGhpcztcbiAgICAgIHRoaXMubWFwQ3R4LmdldENlbnRlckxvY2F0aW9uKHtcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgX3RoaXMuZm9ybURhdGEud2hlcmUgPSB7XG4gICAgICAgICAgICBsb25naXR1ZGU6IHJlcy5sb25naXR1ZGUsXG4gICAgICAgICAgICBsYXRpdHVkZTogcmVzLmxhdGl0dWRlXG4gICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbDogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBzdWJtaXQoKSB7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmZvcm1EYXRhKTtcbiAgICB9LFxuICAgIGNoYW5nZVRpbWUoZSkge1xuICAgICAgdGhpcy5mb3JtRGF0YS5ob3dMb25nID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZvcm1EYXRhKVxuICAgIH0sXG4gICAgdW5saW1pdE5vKGUpIHtcbiAgICAgIHRoaXMuZm9ybURhdGEuaG93TWFueSA9IGUuZGV0YWlsLnZhbHVlID8gdW5kZWZpbmVkIDogdGhpcy5jb25maWcuaG93TWFueTtcbiAgICAgIC8vY29uc29sZS5sb2coZSlcbiAgICB9XG4gIH07XG5cbiAgZXZlbnRzID0ge307XG5cbiAgb25Mb2FkKCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICAvL2dldCBjdXJyZW50IHBvc2l0aW9uXG4gICAgd2VweS5nZXRMb2NhdGlvbih7XG4gICAgICB0eXBlOiBcImdjajAyXCIsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICBfdGhpcy5mb3JtRGF0YS53aGVyZSA9IHtcbiAgICAgICAgICBsb25naXR1ZGU6IHJlcy5sb25naXR1ZGUsXG4gICAgICAgICAgbGF0aXR1ZGU6IHJlcy5sYXRpdHVkZVxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIGZhaWw6IGZ1bmN0aW9uKGVycikge1xuICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgaWNvbjogXCJub25lXCIsXG4gICAgICAgICAgdGl0bGU6IFwi5peg5rOV6I635Y+W5b2T5YmN5L2N572u5Z2Q5qCHXCJcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBvblJlYWR5KCkge31cbn1cbiJdfQ==