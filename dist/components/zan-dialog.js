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

var zanDialog = function (_wepy$component) {
  _inherits(zanDialog, _wepy$component);

  function zanDialog() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, zanDialog);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = zanDialog.__proto__ || Object.getPrototypeOf(zanDialog)).call.apply(_ref, [this].concat(args))), _this), _this.props = {}, _this.data = {
      zanDialog: {},
      animationData: {}
    }, _this.methods = {
      showZanDialog: function showZanDialog() {
        var _this2 = this;

        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var e = arguments[1];
        var _options$buttons = options.buttons,
            buttons = _options$buttons === undefined ? [] : _options$buttons,
            _options$title = options.title,
            title = _options$title === undefined ? '' : _options$title,
            _options$content = options.content,
            content = _options$content === undefined ? ' ' : _options$content,
            _options$buttonsShowV = options.buttonsShowVertical,
            buttonsShowVertical = _options$buttonsShowV === undefined ? false : _options$buttonsShowV,
            _options$showConfirm = options.showConfirm,
            showConfirm = _options$showConfirm === undefined ? true : _options$showConfirm,
            _options$confirmText = options.confirmText,
            confirmText = _options$confirmText === undefined ? '确定' : _options$confirmText,
            _options$confirmColor = options.confirmColor,
            confirmColor = _options$confirmColor === undefined ? '#3CC51F' : _options$confirmColor,
            _options$showCancel = options.showCancel,
            showCancel = _options$showCancel === undefined ? false : _options$showCancel,
            _options$cancelText = options.cancelText,
            cancelText = _options$cancelText === undefined ? '取消' : _options$cancelText,
            _options$cancelColor = options.cancelColor,
            cancelColor = _options$cancelColor === undefined ? '#333' : _options$cancelColor;

        // 处理默认按钮的展示
        // 纵向排布确认按钮在上方

        var showCustomBtns = false;
        if (buttons.length === 0) {
          if (showConfirm) {
            buttons.push({
              type: 'confirm',
              text: confirmText,
              color: confirmColor
            });
          }

          if (showCancel) {
            var cancelButton = {
              type: 'cancel',
              text: cancelText,
              color: cancelColor
            };
            if (buttonsShowVertical) {
              buttons.push(cancelButton);
            } else {
              buttons.unshift(cancelButton);
            }
          }
        } else {
          showCustomBtns = true;
        }

        return new Promise(function (resolve, reject) {
          _this2.zanDialog = {
            show: true,
            showCustomBtns: showCustomBtns,
            buttons: buttons,
            title: title,
            content: content,
            buttonsShowVertical: buttonsShowVertical,
            showConfirm: showConfirm,
            confirmText: confirmText,
            confirmColor: confirmColor,
            showCancel: showCancel,
            cancelText: cancelText,
            cancelColor: cancelColor,
            // 回调钩子
            resolve: resolve,
            reject: reject
          };
          _this2.$apply();
        });
      },
      handleZanDialogButtonClick: function handleZanDialogButtonClick(e) {
        var _f = function _f() {};
        var _e$currentTarget = e.currentTarget,
            currentTarget = _e$currentTarget === undefined ? {} : _e$currentTarget;
        var _currentTarget$datase = currentTarget.dataset,
            dataset = _currentTarget$datase === undefined ? {} : _currentTarget$datase;

        // 获取当次弹出框的信息

        var zanDialogData = this.zanDialog || {};
        var _zanDialogData$resolv = zanDialogData.resolve,
            resolve = _zanDialogData$resolv === undefined ? _f : _zanDialogData$resolv,
            _zanDialogData$reject = zanDialogData.reject,
            reject = _zanDialogData$reject === undefined ? _f : _zanDialogData$reject;

        // 重置 zanDialog 里的内容

        this.zanDialog = Object.assign(this.zanDialog, { show: false });

        // 自定义按钮，全部 resolve 形式返回，根据 type 区分点击按钮
        if (zanDialogData.showCustomBtns) {
          resolve({
            type: dataset.type
          });
          return;
        }

        // 默认按钮，确认为 resolve，取消为 reject
        if (dataset.type === 'confirm') {
          resolve({
            type: 'confirm'
          });
        } else {
          reject({
            type: 'cancel'
          });
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return zanDialog;
}(_wepy2.default.component);

exports.default = zanDialog;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInphbi1kaWFsb2cuanMiXSwibmFtZXMiOlsiemFuRGlhbG9nIiwicHJvcHMiLCJkYXRhIiwiYW5pbWF0aW9uRGF0YSIsIm1ldGhvZHMiLCJzaG93WmFuRGlhbG9nIiwib3B0aW9ucyIsImUiLCJidXR0b25zIiwidGl0bGUiLCJjb250ZW50IiwiYnV0dG9uc1Nob3dWZXJ0aWNhbCIsInNob3dDb25maXJtIiwiY29uZmlybVRleHQiLCJjb25maXJtQ29sb3IiLCJzaG93Q2FuY2VsIiwiY2FuY2VsVGV4dCIsImNhbmNlbENvbG9yIiwic2hvd0N1c3RvbUJ0bnMiLCJsZW5ndGgiLCJwdXNoIiwidHlwZSIsInRleHQiLCJjb2xvciIsImNhbmNlbEJ1dHRvbiIsInVuc2hpZnQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNob3ciLCIkYXBwbHkiLCJoYW5kbGVaYW5EaWFsb2dCdXR0b25DbGljayIsIl9mIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJ6YW5EaWFsb2dEYXRhIiwiT2JqZWN0IiwiYXNzaWduIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsUzs7Ozs7Ozs7Ozs7Ozs7NExBQ25CQyxLLEdBQVEsRSxRQUNSQyxJLEdBQU87QUFDTEYsaUJBQVcsRUFETjtBQUVMRyxxQkFBZTtBQUZWLEssUUFJUEMsTyxHQUFVO0FBQ1JDLG1CQURRLDJCQUN1QjtBQUFBOztBQUFBLFlBQWpCQyxPQUFpQix1RUFBUCxFQUFPO0FBQUEsWUFBSEMsQ0FBRztBQUFBLCtCQXVCekJELE9BdkJ5QixDQUkzQkUsT0FKMkI7QUFBQSxZQUkzQkEsT0FKMkIsb0NBSWpCLEVBSmlCO0FBQUEsNkJBdUJ6QkYsT0F2QnlCLENBTTNCRyxLQU4yQjtBQUFBLFlBTTNCQSxLQU4yQixrQ0FNbkIsRUFObUI7QUFBQSwrQkF1QnpCSCxPQXZCeUIsQ0FRM0JJLE9BUjJCO0FBQUEsWUFRM0JBLE9BUjJCLG9DQVFqQixHQVJpQjtB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QVIsS0FBaUIsU0FBckIsRUFBZ0M7QUFDOUJNLGtCQUFRO0FBQ05OLGtCQUFNO0FBREEsV0FBUjtBQUdELFNBSkQsTUFJTztBQUNMTyxpQkFBTztBQUNMUCxrQkFBTTtBQURELFdBQVA7QUFHRDtBQUNGO0FBMUdPLEs7Ozs7RUFOMkIsZUFBS2lCLFM7O2tCQUF2QnRDLFMiLCJmaWxlIjoiemFuLWRpYWxvZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgemFuRGlhbG9nIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICBwcm9wcyA9IHt9XG4gIGRhdGEgPSB7XG4gICAgemFuRGlhbG9nOiB7fSxcbiAgICBhbmltYXRpb25EYXRhOiB7fVxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgc2hvd1phbkRpYWxvZyhvcHRpb25zID0ge30sIGUpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgLy8g6Ieq5a6a5LmJIGJ0biDliJfooahcbiAgICAgICAgLy8geyB0eXBlOiDmjInpkq7nsbvlnovvvIzlm57osIPml7bku6XmraTkvZzkuLrljLrliIbkvp3mja7vvIx0ZXh0OiDmjInpkq7mlofmoYgsIGNvbG9yOiDmjInpkq7mloflrZfpopzoibIgfVxuICAgICAgICBidXR0b25zID0gW10sXG4gICAgICAgIC8vIOagh+mimFxuICAgICAgICB0aXRsZSA9ICcnLFxuICAgICAgICAvLyDlhoXlrrlcbiAgICAgICAgY29udGVudCA9ICcgJyxcbiAgICAgICAgLy8g5oyJ6ZKu5piv5ZCm5bGV56S65Li657q15ZCRXG4gICAgICAgIGJ1dHRvbnNTaG93VmVydGljYWwgPSBmYWxzZSxcbiAgICAgICAgLy8g5piv5ZCm5bGV56S656Gu5a6aXG4gICAgICAgIHNob3dDb25maXJtID0gdHJ1ZSxcbiAgICAgICAgLy8g56Gu6K6k5oyJ6ZKu5paH5qGIXG4gICAgICAgIGNvbmZpcm1UZXh0ID0gJ+ehruWumicsXG4gICAgICAgIC8vIOehruiupOaMiemSruminOiJslxuICAgICAgICBjb25maXJtQ29sb3IgPSAnIzNDQzUxRicsXG4gICAgICAgIC8vIOaYr+WQpuWxleekuuWPlua2iFxuICAgICAgICBzaG93Q2FuY2VsID0gZmFsc2UsXG4gICAgICAgIC8vIOWPlua2iOaMiemSruaWh+ahiFxuICAgICAgICBjYW5jZWxUZXh0ID0gJ+WPlua2iCcsXG4gICAgICAgIC8vIOWPlua2iOaMiemSruminOiJslxuICAgICAgICBjYW5jZWxDb2xvciA9ICcjMzMzJ1xuICAgICAgfSA9IG9wdGlvbnNcblxuICAgICAgLy8g5aSE55CG6buY6K6k5oyJ6ZKu55qE5bGV56S6XG4gICAgICAvLyDnurXlkJHmjpLluIPnoa7orqTmjInpkq7lnKjkuIrmlrlcbiAgICAgIGxldCBzaG93Q3VzdG9tQnRucyA9IGZhbHNlXG4gICAgICBpZiAoYnV0dG9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgaWYgKHNob3dDb25maXJtKSB7XG4gICAgICAgICAgYnV0dG9ucy5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdjb25maXJtJyxcbiAgICAgICAgICAgIHRleHQ6IGNvbmZpcm1UZXh0LFxuICAgICAgICAgICAgY29sb3I6IGNvbmZpcm1Db2xvclxuICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2hvd0NhbmNlbCkge1xuICAgICAgICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdjYW5jZWwnLFxuICAgICAgICAgICAgdGV4dDogY2FuY2VsVGV4dCxcbiAgICAgICAgICAgIGNvbG9yOiBjYW5jZWxDb2xvclxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYnV0dG9uc1Nob3dWZXJ0aWNhbCkge1xuICAgICAgICAgICAgYnV0dG9ucy5wdXNoKGNhbmNlbEJ1dHRvbilcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnV0dG9ucy51bnNoaWZ0KGNhbmNlbEJ1dHRvbilcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNob3dDdXN0b21CdG5zID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB0aGlzLnphbkRpYWxvZyA9IHtcbiAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgIHNob3dDdXN0b21CdG5zLFxuICAgICAgICAgIGJ1dHRvbnMsXG4gICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgY29udGVudCxcbiAgICAgICAgICBidXR0b25zU2hvd1ZlcnRpY2FsLFxuICAgICAgICAgIHNob3dDb25maXJtLFxuICAgICAgICAgIGNvbmZpcm1UZXh0LFxuICAgICAgICAgIGNvbmZpcm1Db2xvcixcbiAgICAgICAgICBzaG93Q2FuY2VsLFxuICAgICAgICAgIGNhbmNlbFRleHQsXG4gICAgICAgICAgY2FuY2VsQ29sb3IsXG4gICAgICAgICAgLy8g5Zue6LCD6ZKp5a2QXG4gICAgICAgICAgcmVzb2x2ZSxcbiAgICAgICAgICByZWplY3RcbiAgICAgICAgfVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9KVxuICAgIH0sXG5cbiAgICBoYW5kbGVaYW5EaWFsb2dCdXR0b25DbGljayhlKSB7XG4gICAgICBjb25zdCBfZiA9IGZ1bmN0aW9uKCkge31cbiAgICAgIGNvbnN0IHsgY3VycmVudFRhcmdldCA9IHt9IH0gPSBlXG4gICAgICBjb25zdCB7IGRhdGFzZXQgPSB7fSB9ID0gY3VycmVudFRhcmdldFxuXG4gICAgICAvLyDojrflj5blvZPmrKHlvLnlh7rmoYbnmoTkv6Hmga9cbiAgICAgIGNvbnN0IHphbkRpYWxvZ0RhdGEgPSB0aGlzLnphbkRpYWxvZyB8fCB7fVxuICAgICAgY29uc3QgeyByZXNvbHZlID0gX2YsIHJlamVjdCA9IF9mIH0gPSB6YW5EaWFsb2dEYXRhXG5cbiAgICAgIC8vIOmHjee9riB6YW5EaWFsb2cg6YeM55qE5YaF5a65XG4gICAgICB0aGlzLnphbkRpYWxvZyA9IE9iamVjdC5hc3NpZ24odGhpcy56YW5EaWFsb2csIHsgc2hvdzogZmFsc2UgfSlcblxuICAgICAgLy8g6Ieq5a6a5LmJ5oyJ6ZKu77yM5YWo6YOoIHJlc29sdmUg5b2i5byP6L+U5Zue77yM5qC55o2uIHR5cGUg5Yy65YiG54K55Ye75oyJ6ZKuXG4gICAgICBpZiAoemFuRGlhbG9nRGF0YS5zaG93Q3VzdG9tQnRucykge1xuICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICB0eXBlOiBkYXRhc2V0LnR5cGVcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8vIOm7mOiupOaMiemSru+8jOehruiupOS4uiByZXNvbHZl77yM5Y+W5raI5Li6IHJlamVjdFxuICAgICAgaWYgKGRhdGFzZXQudHlwZSA9PT0gJ2NvbmZpcm0nKSB7XG4gICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgIHR5cGU6ICdjb25maXJtJ1xuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVqZWN0KHtcbiAgICAgICAgICB0eXBlOiAnY2FuY2VsJ1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19