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

var pageVars = {
  readyToRecord: "准备说：",
  buttonTip: "请长按录音...",
  recording: '正在录音...',
  canceled: '已取消!',
  waitAWhile: '请稍后...',
  cancelRecording: '松开 取消'
};

var status = {
  beforeRecording: 0,
  recording: 1,
  recorded: 2
};

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
      navigationBarTitleText: "准备说"
    }, _this.components = {
      bulletin: _bulletin2.default
    }, _this.mixins = [_test2.default], _this.data = {
      animation: 'animated bounce', //record button div
      buttonState: {
        "content": pageVars.readyToRecord,
        "type": "default"
      },
      currentStatus: status.beforeRecording,
      touchPoint: {
        clientX: 0,
        clientY: 0
      }
    }, _this.computed = {
      now: function now() {
        return +new Date();
      }
    }, _this.methods = {
      tip: function tip() {
        this.buttonState.content = pageVars.buttonTip;
      },
      record: function record(e) {
        //longpress
        //change status

        //vibrate and alert sound
        for (var i = 0; i < 5; i++) {
          setTimeout(function () {
            _wepy2.default.vibrateShort();
          }, i * 15);
        }

        this.currentStatus = status.recording;
        this.buttonState.content = pageVars.cancelRecording;
        _wepy2.default.showToast({
          icon: 'loading',
          title: pageVars.recording,
          mask: true,
          duration: 60000
        });
        //mark the coordinates
        this.touchPoint = {
          clientX: e.touches[0].clientX,
          clientY: e.touches[0].clientY

          //start recording------
        };_wepy2.default.startRecord({
          success: function success(res) {
            var tempFilePath = res.tempFilePath;
          },
          fail: function fail(res) {}
        });
      },
      touchend: function touchend(e) {
        //when catch the touchend event , we should check the status first
        if (status.recording === this.currentStatus) {
          _wepy2.default.hideToast();
          var slidedUp = e.changedTouches[0].clientY < this.touchPoint.clientY; // canceling recording by sliding up
          if (slidedUp) {
            // if cancel the recording
            console.log('canceled recording');
            this.currentStatus = status.beforeRecording; //reset status
            this.buttonState.content = pageVars.readyToRecord; //reset the button
            setTimeout(function () {
              _wepy2.default.showToast({
                title: pageVars.canceled,
                icon: 'none'
              });
            }, 300);
            //stop recording and not save
          } else {
            //console.log('recorded')
            // recorded, add mask
            _wepy2.default.showLoading({
              title: pageVars.waitAWhile,
              mask: true
            });
            // prcessing the recording
          }
        }
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlZm9yZXNwZWFrLmpzIl0sIm5hbWVzIjpbInBhZ2VWYXJzIiwicmVhZHlUb1JlY29yZCIsImJ1dHRvblRpcCIsInJlY29yZGluZyIsImNhbmNlbGVkIiwid2FpdEFXaGlsZSIsImNhbmNlbFJlY29yZGluZyIsInN0YXR1cyIsImJlZm9yZVJlY29yZGluZyIsInJlY29yZGVkIiwiQmVmb3JlU3BlYWsiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImJ1bGxldGluIiwibWl4aW5zIiwiZGF0YSIsImFuaW1hdGlvbiIsImJ1dHRvblN0YXRlIiwiY3VycmVudFN0YXR1cyIsInRvdWNoUG9pbnQiLCJjbGllbnRYIiwiY2xpZW50WSIsImNvbXB1dGVkIiwibm93IiwiRGF0ZSIsIm1ldGhvZHMiLCJ0aXAiLCJjb250ZW50IiwicmVjb3JkIiwiZSIsImkiLCJzZXRUaW1lb3V0IiwidmlicmF0ZVNob3J0Iiwic2hvd1RvYXN0IiwiaWNvbiIsInRpdGxlIiwibWFzayIsImR1cmF0aW9uIiwidG91Y2hlcyIsInN0YXJ0UmVjb3JkIiwic3VjY2VzcyIsInJlcyIsInRlbXBGaWxlUGF0aCIsImZhaWwiLCJ0b3VjaGVuZCIsImhpZGVUb2FzdCIsInNsaWRlZFVwIiwiY2hhbmdlZFRvdWNoZXMiLCJjb25zb2xlIiwibG9nIiwic2hvd0xvYWRpbmciLCJldmVudHMiLCIkaW52b2tlIiwiZ2V0QnVsbGV0aW5JbmZvIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUNBLElBQU9BLFdBQVc7QUFDaEJDLGlCQUFlLE1BREM7QUFFaEJDLGFBQVcsVUFGSztBQUdoQkMsYUFBVyxTQUhLO0FBSWhCQyxZQUFVLE1BSk07QUFLaEJDLGNBQVksUUFMSTtBQU1oQkMsbUJBQWlCO0FBTkQsQ0FBbEI7O0FBU0EsSUFBTUMsU0FBUztBQUNiQyxtQkFBaUIsQ0FESjtBQUVi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QUtDLGVBQUwsRUFBcEM7QUFFRDs7OztFQTFHc0MsZUFBS0MsSTs7a0JBQXpCN0MsVyIsImZpbGUiOiJiZWZvcmVzcGVhay5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgdGVzdE1peGluIGZyb20gJy4uL21peGlucy90ZXN0J1xuICBpbXBvcnQgQnVsbGV0aW4gZnJvbSAnQC9jb21wb25lbnRzL2J1bGxldGluJ1xuICBpbXBvcnQgTW9jayBmcm9tICdAL3V0aWwvTW9jaydcbiAgY29uc3QgIHBhZ2VWYXJzID0ge1xuICAgIHJlYWR5VG9SZWNvcmQ6IFwi5YeG5aSH6K+077yaXCIsXG4gICAgYnV0dG9uVGlwOiBcIuivt+mVv+aMieW9lemfsy4uLlwiLFxuICAgIHJlY29yZGluZzogJ+ato+WcqOW9lemfsy4uLicsXG4gICAgY2FuY2VsZWQ6ICflt7Llj5bmtoghJyxcbiAgICB3YWl0QVdoaWxlOiAn6K+356iN5ZCOLi4uJyxcbiAgICBjYW5jZWxSZWNvcmRpbmc6ICfmnb7lvIAg5Y+W5raIJ1xuICB9XG5cbiAgY29uc3Qgc3RhdHVzID0ge1xuICAgIGJlZm9yZVJlY29yZGluZzogMCxcbiAgICByZWNvcmRpbmc6IDEsXG4gICAgcmVjb3JkZWQ6IDJcbiAgfVxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBCZWZvcmVTcGVhayBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogXCLlh4blpIfor7RcIlxuICAgIH1cbiAgICBjb21wb25lbnRzID0ge1xuICAgICAgYnVsbGV0aW46IEJ1bGxldGluLFxuICAgIH1cblxuICAgIG1peGlucyA9IFt0ZXN0TWl4aW5dXG5cbiAgICBkYXRhID0ge1xuICAgICAgYW5pbWF0aW9uOiAnYW5pbWF0ZWQgYm91bmNlJywgLy9yZWNvcmQgYnV0dG9uIGRpdlxuICAgICAgYnV0dG9uU3RhdGU6IHtcbiAgICAgICAgXCJjb250ZW50XCI6IHBhZ2VWYXJzLnJlYWR5VG9SZWNvcmQsXG4gICAgICAgIFwidHlwZVwiOiBcImRlZmF1bHRcIixcbiAgICAgIH0sXG4gICAgICBjdXJyZW50U3RhdHVzOiBzdGF0dXMuYmVmb3JlUmVjb3JkaW5nLFxuICAgICAgdG91Y2hQb2ludDoge1xuICAgICAgICBjbGllbnRYOiAwLFxuICAgICAgICBjbGllbnRZOiAwXG4gICAgICB9LFxuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgICAgbm93ICgpIHtcbiAgICAgICAgcmV0dXJuICtuZXcgRGF0ZSgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHRpcCgpIHtcbiAgICAgICAgdGhpcy5idXR0b25TdGF0ZS5jb250ZW50ID0gcGFnZVZhcnMuYnV0dG9uVGlwO1xuICAgICAgfSxcbiAgICAgIHJlY29yZChlKSB7XG4gICAgICAgIC8vbG9uZ3ByZXNzXG4gICAgICAgIC8vY2hhbmdlIHN0YXR1c1xuXG4gICAgICAgIC8vdmlicmF0ZSBhbmQgYWxlcnQgc291bmRcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDU7IGkrKyl7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB3ZXB5LnZpYnJhdGVTaG9ydCgpXG4gICAgICAgICAgfSwgaSoxNSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmN1cnJlbnRTdGF0dXMgPSBzdGF0dXMucmVjb3JkaW5nXG4gICAgICAgIHRoaXMuYnV0dG9uU3RhdGUuY29udGVudCA9IHBhZ2VWYXJzLmNhbmNlbFJlY29yZGluZ1xuICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgaWNvbjogJ2xvYWRpbmcnLFxuICAgICAgICAgIHRpdGxlOiBwYWdlVmFycy5yZWNvcmRpbmcsXG4gICAgICAgICAgbWFzazp0cnVlLFxuICAgICAgICAgIGR1cmF0aW9uOiA2MDAwMFxuICAgICAgICB9KVxuICAgICAgICAvL21hcmsgdGhlIGNvb3JkaW5hdGVzXG4gICAgICAgIHRoaXMudG91Y2hQb2ludCA9IHtcbiAgICAgICAgICBjbGllbnRYOiBlLnRvdWNoZXNbMF0uY2xpZW50WCxcbiAgICAgICAgICBjbGllbnRZOiBlLnRvdWNoZXNbMF0uY2xpZW50WVxuICAgICAgICB9XG5cbiAgICAgICAgLy9zdGFydCByZWNvcmRpbmctLS0tLS1cbiAgICAgICAgd2VweS5zdGFydFJlY29yZCh7XG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICB2YXIgdGVtcEZpbGVQYXRoID0gcmVzLnRlbXBGaWxlUGF0aFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbDogZnVuY3Rpb24ocmVzKSB7XG5cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgdG91Y2hlbmQoZSkge1xuICAgICAgICAvL3doZW4gY2F0Y2ggdGhlIHRvdWNoZW5kIGV2ZW50ICwgd2Ugc2hvdWxkIGNoZWNrIHRoZSBzdGF0dXMgZmlyc3RcbiAgICAgICAgaWYgKHN0YXR1cy5yZWNvcmRpbmcgPT09IHRoaXMuY3VycmVudFN0YXR1cykge1xuICAgICAgICAgIHdlcHkuaGlkZVRvYXN0KClcbiAgICAgICAgICBsZXQgc2xpZGVkVXAgPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFkgPCB0aGlzLnRvdWNoUG9pbnQuY2xpZW50WSAvLyBjYW5jZWxpbmcgcmVjb3JkaW5nIGJ5IHNsaWRpbmcgdXBcbiAgICAgICAgICBpZiAoc2xpZGVkVXApIHsgLy8gaWYgY2FuY2VsIHRoZSByZWNvcmRpbmdcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjYW5jZWxlZCByZWNvcmRpbmcnKVxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3RhdHVzID0gc3RhdHVzLmJlZm9yZVJlY29yZGluZyAvL3Jlc2V0IHN0YXR1c1xuICAgICAgICAgICAgdGhpcy5idXR0b25TdGF0ZS5jb250ZW50ID0gcGFnZVZhcnMucmVhZHlUb1JlY29yZCAvL3Jlc2V0IHRoZSBidXR0b25cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgIHRpdGxlOiBwYWdlVmFycy5jYW5jZWxlZCxcbiAgICAgICAgICAgICAgaWNvbjogJ25vbmUnXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgICAgIC8vc3RvcCByZWNvcmRpbmcgYW5kIG5vdCBzYXZlXG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygncmVjb3JkZWQnKVxuICAgICAgICAgICAgLy8gcmVjb3JkZWQsIGFkZCBtYXNrXG4gICAgICAgICAgICB3ZXB5LnNob3dMb2FkaW5nKHtcbiAgICAgICAgICAgICAgdGl0bGU6IHBhZ2VWYXJzLndhaXRBV2hpbGUsXG4gICAgICAgICAgICAgIG1hc2s6IHRydWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyBwcmNlc3NpbmcgdGhlIHJlY29yZGluZ1xuXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuXG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgdGhpcy4kaW52b2tlKCdidWxsZXRpbicsICd0eXBlSW5mbycsTW9jay5nZXRCdWxsZXRpbkluZm8oKSlcblxuICAgIH1cbiAgfVxuIl19