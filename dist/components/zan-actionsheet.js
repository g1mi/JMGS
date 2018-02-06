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

var zanActionsheet = function (_wepy$component) {
  _inherits(zanActionsheet, _wepy$component);

  function zanActionsheet() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, zanActionsheet);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = zanActionsheet.__proto__ || Object.getPrototypeOf(zanActionsheet)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      componentId: String
    }, _this.data = {
      zanActionsheet: {}
    }, _this.methods = {
      showZanActionsheet: function showZanActionsheet() {
        var _this2 = this;

        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var e = arguments[1];
        var _options$cancelText = options.cancelText,
            cancelText = _options$cancelText === undefined ? '关闭 Action' : _options$cancelText,
            _options$closeOnClick = options.closeOnClickOverlay,
            closeOnClickOverlay = _options$closeOnClick === undefined ? true : _options$closeOnClick,
            _options$actions = options.actions,
            actions = _options$actions === undefined ? [{
          type: '1',
          name: '选项1',
          subname: '选项描述语1',
          className: 'action-class',
          loading: false
        }, {
          type: '2',
          name: '选项2',
          subname: '选项描述语2',
          className: 'action-class',
          loading: false
        }, {
          type: 'share',
          name: '去分享',
          openType: 'share'
        }] : _options$actions;

        return new Promise(function (resolve, reject) {
          _this2.zanActionsheet = {
            show: true,
            cancelText: cancelText,
            closeOnClickOverlay: closeOnClickOverlay,
            actions: actions,
            // 回调钩子
            resolve: resolve,
            reject: reject
          };
          _this2.$apply();
        });
      },
      resolveCancelClick: function resolveCancelClick() {
        var zanActionsheetData = this.zanActionsheet || {};
        var reject = zanActionsheetData.reject;


        console.info('[zan:actionsheet:cancel]');
        this.zanActionsheet.show = false;
        this.$apply();
        reject({
          type: 'cancel'
        });
      },
      handleZanActionsheetMaskClick: function handleZanActionsheetMaskClick(_ref2) {
        var _ref2$currentTarget = _ref2.currentTarget,
            currentTarget = _ref2$currentTarget === undefined ? {} : _ref2$currentTarget;

        var dataset = currentTarget.dataset || {};
        var closeOnClickOverlay = dataset.closeOnClickOverlay;

        // 判断是否在点击背景时需要关闭弹层

        if (!closeOnClickOverlay) {
          return;
        }

        this.methods.resolveCancelClick.call(this);
      },
      handleZanActionsheetCancelBtnClick: function handleZanActionsheetCancelBtnClick(e) {
        this.methods.resolveCancelClick.call(this);
      },
      handleZanActionsheetBtnClick: function handleZanActionsheetBtnClick(_ref3) {
        var _this3 = this;

        var _ref3$currentTarget = _ref3.currentTarget,
            currentTarget = _ref3$currentTarget === undefined ? {} : _ref3$currentTarget;

        var zanActionsheetData = this.zanActionsheet || {};
        var resolve = zanActionsheetData.resolve;

        var dataset = currentTarget.dataset || {};
        var index = dataset.index,
            type = dataset.type;

        var action = this.zanActionsheet.actions[index];

        console.log('item index ' + index + ' clicked');

        // 如果是分享按钮被点击, 不处理关闭
        if (type === 'share') {
          return;
        }

        if (action.asyncJob) {
          action.loading = true;
          this.$apply();

          action.asyncJob().then(function (e) {
            _this3.zanActionsheet.show = false;
            action.loding = false;
            _this3.$apply();
          }).catch(function (e) {
            action.loding = false;
            _this3.$apply();
          });
        } else {
          this.zanActionsheet.show = false;
          action.loding = false;
        }
        this.$apply();
        resolve({
          type: type
        });
      }
    }, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return zanActionsheet;
}(_wepy2.default.component);

exports.default = zanActionsheet;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInphbi1hY3Rpb25zaGVldC5qcyJdLCJuYW1lcyI6WyJ6YW5BY3Rpb25zaGVldCIsInByb3BzIiwiY29tcG9uZW50SWQiLCJTdHJpbmciLCJkYXRhIiwibWV0aG9kcyIsInNob3daYW5BY3Rpb25zaGVldCIsIm9wdGlvbnMiLCJlIiwiY2FuY2VsVGV4dCIsImNsb3NlT25DbGlja092ZXJsYXkiLCJhY3Rpb25zIiwidHlwZSIsIm5hbWUiLCJzdWJuYW1lIiwiY2xhc3NOYW1lIiwibG9hZGluZyIsIm9wZW5UeXBlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzaG93IiwiJGFwcGx5IiwicmVzb2x2ZUNhbmNlbENsaWNrIiwiemFuQWN0aW9uc2hlZXREYXRhIiwiY29uc29sZSIsImluZm8iLCJoYW5kbGVaYW5BY3Rpb25zaGVldE1hc2tDbGljayIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiY2FsbCIsImhhbmRsZVphbkFjdGlvbnNoZWV0Q2FuY2VsQnRuQ2xpY2siLCJoYW5kbGVaYW5BY3Rpb25zaGVldEJ0bkNsaWNrIiwiaW5kZXgiLCJhY3Rpb24iLCJsb2ciLCJhc3luY0pvYiIsInRoZW4iLCJsb2RpbmciLCJjYXRjaCIsImNvbXB1dGVkIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsYzs7Ozs7Ozs7Ozs7Ozs7c01BQ25CQyxLLEdBQVE7QUFDTkMsbUJBQWFDO0FBRFAsSyxRQUdSQyxJLEdBQU87QUFDTEosc0JBQWdCO0FBRFgsSyxRQUdQSyxPLEdBQVU7QUFDUkMsd0JBRFEsZ0NBQzRCO0FBQUE7O0FBQUEsWUFBakJDLE9BQWlCLHVFQUFQLEVBQU87QUFBQSxZQUFIQyxDQUFHO0FBQUEsa0NBeUI5QkQsT0F6QjhCLENBRWhDRSxVQUZnQztBQUFBLFlBRWhDQSxVQUZnQyx1Q0FFbkIsV0FGbUI7QUFBQSxvQ0F5QjlCRixPQXpCOEIsQ0FHaENHLG1CQUhnQztBQUFBLFlBR2hDQSxtQkFI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LEtBQWhCO0FBQ0EsbUJBQUtoQixNQUFMO0FBQ0QsV0FOSCxFQU9HaUIsS0FQSCxDQU9TLGFBQUs7QUFDVkwsbUJBQU9JLE1BQVAsR0FBZ0IsS0FBaEI7QUFDQSxtQkFBS2hCLE1BQUw7QUFDRCxXQVZIO0FBV0QsU0FmRCxNQWVPO0FBQ0wsZUFBS3RCLGNBQUwsQ0FBb0JxQixJQUFwQixHQUEyQixLQUEzQjtBQUNBYSxpQkFBT0ksTUFBUCxHQUFnQixLQUFoQjtBQUNEO0FBQ0QsYUFBS2hCLE1BQUw7QUFDQUgsZ0JBQVE7QUFDTlA7QUFETSxTQUFSO0FBR0Q7QUF4R08sSyxRQTBHVjRCLFEsR0FBVyxFOzs7O0VBakgrQixlQUFLQyxTOztrQkFBNUJ6QyxjIiwiZmlsZSI6Inphbi1hY3Rpb25zaGVldC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgemFuQWN0aW9uc2hlZXQgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gIHByb3BzID0ge1xuICAgIGNvbXBvbmVudElkOiBTdHJpbmdcbiAgfVxuICBkYXRhID0ge1xuICAgIHphbkFjdGlvbnNoZWV0OiB7fVxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgc2hvd1phbkFjdGlvbnNoZWV0KG9wdGlvbnMgPSB7fSwgZSkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBjYW5jZWxUZXh0ID0gJ+WFs+mXrSBBY3Rpb24nLFxuICAgICAgICBjbG9zZU9uQ2xpY2tPdmVybGF5ID0gdHJ1ZSxcbiAgICAgICAgYWN0aW9ucyA9IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnMScsXG4gICAgICAgICAgICBuYW1lOiAn6YCJ6aG5MScsXG4gICAgICAgICAgICBzdWJuYW1lOiAn6YCJ6aG55o+P6L+w6K+tMScsXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdhY3Rpb24tY2xhc3MnLFxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICcyJyxcbiAgICAgICAgICAgIG5hbWU6ICfpgInpobkyJyxcbiAgICAgICAgICAgIHN1Ym5hbWU6ICfpgInpobnmj4/ov7Dor60yJyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2FjdGlvbi1jbGFzcycsXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ3NoYXJlJyxcbiAgICAgICAgICAgIG5hbWU6ICfljrvliIbkuqsnLFxuICAgICAgICAgICAgb3BlblR5cGU6ICdzaGFyZSdcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0gPSBvcHRpb25zXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB0aGlzLnphbkFjdGlvbnNoZWV0ID0ge1xuICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgY2FuY2VsVGV4dCxcbiAgICAgICAgICBjbG9zZU9uQ2xpY2tPdmVybGF5LFxuICAgICAgICAgIGFjdGlvbnMsXG4gICAgICAgICAgLy8g5Zue6LCD6ZKp5a2QXG4gICAgICAgICAgcmVzb2x2ZSxcbiAgICAgICAgICByZWplY3RcbiAgICAgICAgfVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9KVxuICAgIH0sXG4gICAgcmVzb2x2ZUNhbmNlbENsaWNrKCkge1xuICAgICAgY29uc3QgemFuQWN0aW9uc2hlZXREYXRhID0gdGhpcy56YW5BY3Rpb25zaGVldCB8fCB7fVxuICAgICAgY29uc3QgeyByZWplY3QgfSA9IHphbkFjdGlvbnNoZWV0RGF0YVxuXG4gICAgICBjb25zb2xlLmluZm8oJ1t6YW46YWN0aW9uc2hlZXQ6Y2FuY2VsXScpXG4gICAgICB0aGlzLnphbkFjdGlvbnNoZWV0LnNob3cgPSBmYWxzZVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgcmVqZWN0KHtcbiAgICAgICAgdHlwZTogJ2NhbmNlbCdcbiAgICAgIH0pXG4gICAgfSxcbiAgICBoYW5kbGVaYW5BY3Rpb25zaGVldE1hc2tDbGljayh7IGN1cnJlbnRUYXJnZXQgPSB7fSB9KSB7XG4gICAgICBjb25zdCBkYXRhc2V0ID0gY3VycmVudFRhcmdldC5kYXRhc2V0IHx8IHt9XG4gICAgICBjb25zdCB7IGNsb3NlT25DbGlja092ZXJsYXkgfSA9IGRhdGFzZXRcblxuICAgICAgLy8g5Yik5pat5piv5ZCm5Zyo54K55Ye76IOM5pmv5pe26ZyA6KaB5YWz6Zet5by55bGCXG4gICAgICBpZiAoIWNsb3NlT25DbGlja092ZXJsYXkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHRoaXMubWV0aG9kcy5yZXNvbHZlQ2FuY2VsQ2xpY2suY2FsbCh0aGlzKVxuICAgIH0sXG5cbiAgICBoYW5kbGVaYW5BY3Rpb25zaGVldENhbmNlbEJ0bkNsaWNrKGUpIHtcbiAgICAgIHRoaXMubWV0aG9kcy5yZXNvbHZlQ2FuY2VsQ2xpY2suY2FsbCh0aGlzKVxuICAgIH0sXG5cbiAgICBoYW5kbGVaYW5BY3Rpb25zaGVldEJ0bkNsaWNrKHsgY3VycmVudFRhcmdldCA9IHt9IH0pIHtcbiAgICAgIGNvbnN0IHphbkFjdGlvbnNoZWV0RGF0YSA9IHRoaXMuemFuQWN0aW9uc2hlZXQgfHwge31cbiAgICAgIGNvbnN0IHsgcmVzb2x2ZSB9ID0gemFuQWN0aW9uc2hlZXREYXRhXG4gICAgICBjb25zdCBkYXRhc2V0ID0gY3VycmVudFRhcmdldC5kYXRhc2V0IHx8IHt9XG4gICAgICBjb25zdCB7IGluZGV4LCB0eXBlIH0gPSBkYXRhc2V0XG4gICAgICBjb25zdCBhY3Rpb24gPSB0aGlzLnphbkFjdGlvbnNoZWV0LmFjdGlvbnNbaW5kZXhdXG5cbiAgICAgIGNvbnNvbGUubG9nKGBpdGVtIGluZGV4ICR7aW5kZXh9IGNsaWNrZWRgKVxuXG4gICAgICAvLyDlpoLmnpzmmK/liIbkuqvmjInpkq7ooqvngrnlh7ssIOS4jeWkhOeQhuWFs+mXrVxuICAgICAgaWYgKHR5cGUgPT09ICdzaGFyZScpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChhY3Rpb24uYXN5bmNKb2IpIHtcbiAgICAgICAgYWN0aW9uLmxvYWRpbmcgPSB0cnVlXG4gICAgICAgIHRoaXMuJGFwcGx5KClcblxuICAgICAgICBhY3Rpb25cbiAgICAgICAgICAuYXN5bmNKb2IoKVxuICAgICAgICAgIC50aGVuKGUgPT4ge1xuICAgICAgICAgICAgdGhpcy56YW5BY3Rpb25zaGVldC5zaG93ID0gZmFsc2VcbiAgICAgICAgICAgIGFjdGlvbi5sb2RpbmcgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKGUgPT4ge1xuICAgICAgICAgICAgYWN0aW9uLmxvZGluZyA9IGZhbHNlXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuemFuQWN0aW9uc2hlZXQuc2hvdyA9IGZhbHNlXG4gICAgICAgIGFjdGlvbi5sb2RpbmcgPSBmYWxzZVxuICAgICAgfVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgcmVzb2x2ZSh7XG4gICAgICAgIHR5cGVcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIGNvbXB1dGVkID0ge31cbn1cbiJdfQ==