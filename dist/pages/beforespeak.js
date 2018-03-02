"use strict";

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
  recording: "正在录音...",
  canceled: "已取消!",
  waitAWhile: "请稍后...",
  cancelRecording: "松开 取消"
};

var status = {
  beforeRecording: 0,
  recording: 1,
  recorded: 2,
  canceled: 3
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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BeforeSpeak.__proto__ || Object.getPrototypeOf(BeforeSpeak)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(BeforeSpeak, [{
    key: "onLoad",
    value: function onLoad() {
      var _this2 = this;

      this.$invoke("bulletin", "typeInfo", _Mock2.default.getBulletinInfo());

      //
      var rm = _wepy2.default.getRecorderManager();
      rm.onStart(function () {
        console.log("recorder start");
      });
      rm.onResume(function () {
        console.log("recorder resume");
      });
      rm.onStop(function (res) {
        console.log("recorder stop", res);
        //save the temp file path
        _this2.tempFilePath = res.tempFilePath;
        console.log("filepath: " + _this2.tempFilePath);
        if (status.canceled === _this2.currentStatus) {
          _this2.log = "cancel the recording, nothing saved  ";
        } else {
          //precess the audio
          var ac = _wepy2.default.createInnerAudioContext();
          ac.src = _this2.tempFilePath;
          ac.play();
        }
      });
      this.recorderManager = this.recorderManager || rm;
    }
  }]);

  return BeforeSpeak;
}(_wepy2.default.page);

var _initialiseProps = function _initialiseProps() {
  this.config = {
    navigationBarTitleText: "准备说"
  };
  this.components = {
    bulletin: _bulletin2.default
  };
  this.mixins = [_test2.default];
  this.data = {
    animation: "animated bounce", //record button div
    buttonState: {
      content: pageVars.readyToRecord,
      type: "default"
    },
    currentStatus: status.beforeRecording,
    touchPoint: {
      clientX: 0,
      clientY: 0
    },
    recorderManager: null, //recorderManager
    tempFilePath: "", //save
    log: ""
  };
  this.computed = {
    now: function now() {
      return +new Date();
    }
  };
  this.methods = {
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
        icon: "loading",
        title: pageVars.recording,
        mask: true,
        duration: 60000
      });
      //mark the coordinates
      this.touchPoint = {
        clientX: e.touches[0].clientX,
        clientY: e.touches[0].clientY
      };

      //start recording------
      var args = {
        duration: 60000,
        sampleRate: 8000,
        numberOfChannels: 1,
        encodeBitRate: 16000,
        format: "aac"
      };
      this.recorderManager.start(args);
    },
    touchend: function touchend(e) {
      //when catch the touchend event , we should check the status first
      if (status.recording === this.currentStatus) {
        _wepy2.default.hideToast();
        var slidedUp = e.changedTouches[0].clientY < this.touchPoint.clientY; // canceling recording by sliding up
        if (slidedUp) {
          // if canceled the recording
          console.log("canceled the recording");
          this.currentStatus = status.canceled;
          this.buttonState.content = pageVars.readyToRecord; //reset the button
          setTimeout(function () {
            _wepy2.default.showToast({
              title: pageVars.canceled,
              icon: "none"
            });
          }, 300);
          //stop recording and not save
          this.recorderManager.stop();
        } else {
          //console.log('recorded')
          // recorded, add mask
          _wepy2.default.showLoading({
            title: pageVars.waitAWhile,
            mask: true
          });
          // prcessing the recording
          this.recorderManager.stop();
        }
      }
    }
  };
  this.events = {};
};


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(BeforeSpeak , 'pages/beforespeak'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlZm9yZXNwZWFrLmpzIl0sIm5hbWVzIjpbInBhZ2VWYXJzIiwicmVhZHlUb1JlY29yZCIsImJ1dHRvblRpcCIsInJlY29yZGluZyIsImNhbmNlbGVkIiwid2FpdEFXaGlsZSIsImNhbmNlbFJlY29yZGluZyIsInN0YXR1cyIsImJlZm9yZVJlY29yZGluZyIsInJlY29yZGVkIiwiQmVmb3JlU3BlYWsiLCIkaW52b2tlIiwiZ2V0QnVsbGV0aW5JbmZvIiwicm0iLCJnZXRSZWNvcmRlck1hbmFnZXIiLCJvblN0YXJ0IiwiY29uc29sZSIsImxvZyIsIm9uUmVzdW1lIiwib25TdG9wIiwicmVzIiwidGVtcEZpbGVQYXRoIiwiY3VycmVudFN0YXR1cyIsImFjIiwiY3JlYXRlSW5uZXJBdWRpb0NvbnRleHQiLCJzcmMiLCJwbGF5IiwicmVjb3JkZXJNYW5hZ2VyIiwicGFnZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiYnVsbGV0aW4iLCJtaXhpbnMiLCJkYXRhIiwiYW5pbWF0aW9uIiwiYnV0dG9uU3RhdGUiLCJjb250ZW50IiwidHlwZSIsInRvdWNoUG9pbnQiLCJjbGllbnRYIiwiY2xpZW50WSIsImNvbXB1dGVkIiwibm93IiwiRGF0ZSIsIm1ldGhvZHMiLCJ0aXAiLCJyZWNvcmQiLCJlIiwiaSIsInNldFRpbWVvdXQiLCJ2aWJyYXRlU2hvcnQiLCJzaG93VG9hc3QiLCJpY29uIiwidGl0bGUiLCJtYXNrIiwiZHVyYXRpb24iLCJ0b3VjaGVzIiwiYXJncyIsInNhbXBsZVJhdGUiLCJudW1iZXJPZkNoYW5uZWxzIiwiZW5jb2RlQml0UmF0ZSIsImZvcm1hdCIsInN0YXJ0IiwidG91Y2hlbmQiLCJoaWRlVG9hc3QiLCJzbGlkZWRVcCIsImNoYW5nZWRUb3VjaGVzIiwic3RvcCIsInNob3dMb2FkaW5nIiwiZXZlbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7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T0F1RVZFLE0sR0FBUyxFOzs7a0JBdkdVNUQsVyIsImZpbGUiOiJiZWZvcmVzcGVhay5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSBcIndlcHlcIjtcbmltcG9ydCB0ZXN0TWl4aW4gZnJvbSBcIi4uL21peGlucy90ZXN0XCI7XG5pbXBvcnQgQnVsbGV0aW4gZnJvbSBcIkAvY29tcG9uZW50cy9idWxsZXRpblwiO1xuaW1wb3J0IE1vY2sgZnJvbSBcIkAvdXRpbC9Nb2NrXCI7XG5jb25zdCBwYWdlVmFycyA9IHtcbiAgcmVhZHlUb1JlY29yZDogXCLlh4blpIfor7TvvJpcIixcbiAgYnV0dG9uVGlwOiBcIuivt+mVv+aMieW9lemfsy4uLlwiLFxuICByZWNvcmRpbmc6IFwi5q2j5Zyo5b2V6Z+zLi4uXCIsXG4gIGNhbmNlbGVkOiBcIuW3suWPlua2iCFcIixcbiAgd2FpdEFXaGlsZTogXCLor7fnqI3lkI4uLi5cIixcbiAgY2FuY2VsUmVjb3JkaW5nOiBcIuadvuW8gCDlj5bmtohcIlxufTtcblxuY29uc3Qgc3RhdHVzID0ge1xuICBiZWZvcmVSZWNvcmRpbmc6IDAsXG4gIHJlY29yZGluZzogMSxcbiAgcmVjb3JkZWQ6IDIsXG4gIGNhbmNlbGVkOiAzXG59O1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmVmb3JlU3BlYWsgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogXCLlh4blpIfor7RcIlxuICB9O1xuICBjb21wb25lbnRzID0ge1xuICAgIGJ1bGxldGluOiBCdWxsZXRpblxuICB9O1xuXG4gIG1peGlucyA9IFt0ZXN0TWl4aW5dO1xuXG4gIGRhdGEgPSB7XG4gICAgYW5pbWF0aW9uOiBcImFuaW1hdGVkIGJvdW5jZVwiLCAvL3JlY29yZCBidXR0b24gZGl2XG4gICAgYnV0dG9uU3RhdGU6IHtcbiAgICAgIGNvbnRlbnQ6IHBhZ2VWYXJzLnJlYWR5VG9SZWNvcmQsXG4gICAgICB0eXBlOiBcImRlZmF1bHRcIlxuICAgIH0sXG4gICAgY3VycmVudFN0YXR1czogc3RhdHVzLmJlZm9yZVJlY29yZGluZyxcbiAgICB0b3VjaFBvaW50OiB7XG4gICAgICBjbGllbnRYOiAwLFxuICAgICAgY2xpZW50WTogMFxuICAgIH0sXG4gICAgcmVjb3JkZXJNYW5hZ2VyOiBudWxsLCAvL3JlY29yZGVyTWFuYWdlclxuICAgIHRlbXBGaWxlUGF0aDogXCJcIiwgLy9zYXZlXG4gICAgbG9nOiBcIlwiXG4gIH07XG5cbiAgY29tcHV0ZWQgPSB7XG4gICAgbm93KCkge1xuICAgICAgcmV0dXJuICtuZXcgRGF0ZSgpO1xuICAgIH1cbiAgfTtcblxuICBtZXRob2RzID0ge1xuICAgIHRpcCgpIHtcbiAgICAgIHRoaXMuYnV0dG9uU3RhdGUuY29udGVudCA9IHBhZ2VWYXJzLmJ1dHRvblRpcDtcbiAgICB9LFxuICAgIHJlY29yZChlKSB7XG4gICAgICAvL2xvbmdwcmVzc1xuICAgICAgLy9jaGFuZ2Ugc3RhdHVzXG5cbiAgICAgIC8vdmlicmF0ZSBhbmQgYWxlcnQgc291bmRcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHdlcHkudmlicmF0ZVNob3J0KCk7XG4gICAgICAgIH0sIGkgKiAxNSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY3VycmVudFN0YXR1cyA9IHN0YXR1cy5yZWNvcmRpbmc7XG4gICAgICB0aGlzLmJ1dHRvblN0YXRlLmNvbnRlbnQgPSBwYWdlVmFycy5jYW5jZWxSZWNvcmRpbmc7XG4gICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgIGljb246IFwibG9hZGluZ1wiLFxuICAgICAgICB0aXRsZTogcGFnZVZhcnMucmVjb3JkaW5nLFxuICAgICAgICBtYXNrOiB0cnVlLFxuICAgICAgICBkdXJhdGlvbjogNjAwMDBcbiAgICAgIH0pO1xuICAgICAgLy9tYXJrIHRoZSBjb29yZGluYXRlc1xuICAgICAgdGhpcy50b3VjaFBvaW50ID0ge1xuICAgICAgICBjbGllbnRYOiBlLnRvdWNoZXNbMF0uY2xpZW50WCxcbiAgICAgICAgY2xpZW50WTogZS50b3VjaGVzWzBdLmNsaWVudFlcbiAgICAgIH07XG5cbiAgICAgIC8vc3RhcnQgcmVjb3JkaW5nLS0tLS0tXG4gICAgICBsZXQgYXJncyA9IHtcbiAgICAgICAgZHVyYXRpb246IDYwMDAwLFxuICAgICAgICBzYW1wbGVSYXRlOiA4MDAwLFxuICAgICAgICBudW1iZXJPZkNoYW5uZWxzOiAxLFxuICAgICAgICBlbmNvZGVCaXRSYXRlOiAxNjAwMCxcbiAgICAgICAgZm9ybWF0OiBcImFhY1wiXG4gICAgICB9O1xuICAgICAgdGhpcy5yZWNvcmRlck1hbmFnZXIuc3RhcnQoYXJncyk7XG4gICAgfSxcbiAgICB0b3VjaGVuZChlKSB7XG4gICAgICAvL3doZW4gY2F0Y2ggdGhlIHRvdWNoZW5kIGV2ZW50ICwgd2Ugc2hvdWxkIGNoZWNrIHRoZSBzdGF0dXMgZmlyc3RcbiAgICAgIGlmIChzdGF0dXMucmVjb3JkaW5nID09PSB0aGlzLmN1cnJlbnRTdGF0dXMpIHtcbiAgICAgICAgd2VweS5oaWRlVG9hc3QoKTtcbiAgICAgICAgbGV0IHNsaWRlZFVwID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZIDwgdGhpcy50b3VjaFBvaW50LmNsaWVudFk7IC8vIGNhbmNlbGluZyByZWNvcmRpbmcgYnkgc2xpZGluZyB1cFxuICAgICAgICBpZiAoc2xpZGVkVXApIHtcbiAgICAgICAgICAvLyBpZiBjYW5jZWxlZCB0aGUgcmVjb3JkaW5nXG4gICAgICAgICAgY29uc29sZS5sb2coXCJjYW5jZWxlZCB0aGUgcmVjb3JkaW5nXCIpO1xuICAgICAgICAgIHRoaXMuY3VycmVudFN0YXR1cyA9IHN0YXR1cy5jYW5jZWxlZDtcbiAgICAgICAgICB0aGlzLmJ1dHRvblN0YXRlLmNvbnRlbnQgPSBwYWdlVmFycy5yZWFkeVRvUmVjb3JkOyAvL3Jlc2V0IHRoZSBidXR0b25cbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgdGl0bGU6IHBhZ2VWYXJzLmNhbmNlbGVkLFxuICAgICAgICAgICAgICBpY29uOiBcIm5vbmVcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgICAvL3N0b3AgcmVjb3JkaW5nIGFuZCBub3Qgc2F2ZVxuICAgICAgICAgIHRoaXMucmVjb3JkZXJNYW5hZ2VyLnN0b3AoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdyZWNvcmRlZCcpXG4gICAgICAgICAgLy8gcmVjb3JkZWQsIGFkZCBtYXNrXG4gICAgICAgICAgd2VweS5zaG93TG9hZGluZyh7XG4gICAgICAgICAgICB0aXRsZTogcGFnZVZhcnMud2FpdEFXaGlsZSxcbiAgICAgICAgICAgIG1hc2s6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgICAvLyBwcmNlc3NpbmcgdGhlIHJlY29yZGluZ1xuICAgICAgICAgIHRoaXMucmVjb3JkZXJNYW5hZ2VyLnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBldmVudHMgPSB7fTtcblxuICBvbkxvYWQoKSB7XG4gICAgdGhpcy4kaW52b2tlKFwiYnVsbGV0aW5cIiwgXCJ0eXBlSW5mb1wiLCBNb2NrLmdldEJ1bGxldGluSW5mbygpKTtcblxuICAgIC8vXG4gICAgbGV0IHJtID0gd2VweS5nZXRSZWNvcmRlck1hbmFnZXIoKTtcbiAgICBybS5vblN0YXJ0KCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwicmVjb3JkZXIgc3RhcnRcIik7XG4gICAgfSk7XG4gICAgcm0ub25SZXN1bWUoKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJyZWNvcmRlciByZXN1bWVcIik7XG4gICAgfSk7XG4gICAgcm0ub25TdG9wKHJlcyA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcInJlY29yZGVyIHN0b3BcIiwgcmVzKTtcbiAgICAgIC8vc2F2ZSB0aGUgdGVtcCBmaWxlIHBhdGhcbiAgICAgIHRoaXMudGVtcEZpbGVQYXRoID0gcmVzLnRlbXBGaWxlUGF0aDtcbiAgICAgIGNvbnNvbGUubG9nKFwiZmlsZXBhdGg6IFwiICsgdGhpcy50ZW1wRmlsZVBhdGgpO1xuICAgICAgaWYgKHN0YXR1cy5jYW5jZWxlZCA9PT0gdGhpcy5jdXJyZW50U3RhdHVzKSB7XG4gICAgICAgIHRoaXMubG9nID0gXCJjYW5jZWwgdGhlIHJlY29yZGluZywgbm90aGluZyBzYXZlZCAgXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvL3ByZWNlc3MgdGhlIGF1ZGlvXG4gICAgICAgIGxldCBhYyA9IHdlcHkuY3JlYXRlSW5uZXJBdWRpb0NvbnRleHQoKTtcbiAgICAgICAgYWMuc3JjID0gdGhpcy50ZW1wRmlsZVBhdGg7XG4gICAgICAgIGFjLnBsYXkoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnJlY29yZGVyTWFuYWdlciA9IHRoaXMucmVjb3JkZXJNYW5hZ2VyIHx8IHJtO1xuICB9XG59XG4iXX0=