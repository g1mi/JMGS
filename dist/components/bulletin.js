'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./../npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bulletin = function (_wepy$component) {
  _inherits(Bulletin, _wepy$component);

  function Bulletin() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Bulletin);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Bulletin.__proto__ || Object.getPrototypeOf(Bulletin)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      content: {
        type: String,
        default: ""
      }
    }, _this.data = {}, _this.events = {}, _this.watch = {}, _this.methods = {
      typeInfo: function typeInfo(arg) {
        this.typeOut(arg);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Bulletin, [{
    key: 'world',
    value: function world() {
      console.log('world');
    }
  }, {
    key: 'typeOut',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(content) {
        var script, speed, i;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                script = content.split('');
                speed = 60;
                i = 0;

              case 3:
                if (!(i < script.length)) {
                  _context.next = 11;
                  break;
                }

                _context.next = 6;
                return this.spitLetter(script[i], '\n' === script[i] ? speed * 5 : speed);

              case 6:
                this.content += _context.sent;

                this.$apply();

              case 8:
                i++;
                _context.next = 3;
                break;

              case 11:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function typeOut(_x) {
        return _ref2.apply(this, arguments);
      }

      return typeOut;
    }()
  }, {
    key: 'spitLetter',
    value: function spitLetter(letter, speed) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve(letter);
        }, speed);
      });
    }
  }]);

  return Bulletin;
}(_wepy2.default.component);

exports.default = Bulletin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1bGxldGluLmpzIl0sIm5hbWVzIjpbIkJ1bGxldGluIiwicHJvcHMiLCJjb250ZW50IiwidHlwZSIsIlN0cmluZyIsImRlZmF1bHQiLCJkYXRhIiwiZXZlbnRzIiwid2F0Y2giLCJtZXRob2RzIiwidHlwZUluZm8iLCJhcmciLCJ0eXBlT3V0IiwiY29uc29sZSIsImxvZyIsInNjcmlwdCIsInNwbGl0Iiwic3BlZWQiLCJpIiwibGVuZ3RoIiwic3BpdExldHRlciIsIiRhcHBseSIsImxldHRlciIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxROzs7Ozs7Ozs7Ozs7OzswTEFDbkJDLEssR0FBUTtBQUNOQyxlQUFTO0FBQ1BDLGNBQU1DLE1BREM7QUFFUEMsaUJBQVM7QUFGRjtBQURILEssUUFPUkMsSSxHQUFPLEUsUUFFUEMsTSxHQUFTLEUsUUFJVEMsSyxHQUFRLEUsUUFHUkMsTyxHQUFVO0FBQ1JDLGNBRFEsb0JBQ0VDLEdBREYsRUFDTztBQUNiLGFBQUtDLE9BQUwsQ0FBYUQsR0FBYjtBQUNEO0FBSE8sSzs7Ozs7NEJBTUY7QUFDTkUsY0FBUUMsR0FBUixDQUFZLE9BQVo7QUFDRDs7OzsyRkFFV1osTzs7Ozs7O0FBQ05hLHNCLEdBQVNiLFFBQVFjLEtBQVIsQ0FBYyxFQUFkLEM7QUFDVEMscUIsR0FBUSxFO0FBQ0pDLGlCLEdBQUksQzs7O3NCQUFJQSxJQUFJSCxPQUFPSSxNOzs7Ozs7dUJBQ0gsS0FBS0MsVUFBTCxDQUFnQkwsT0FBT0csQ0FBUCxDQUFoQixFQUEyQixTQUFTSCxPQUFPRyxDQUFQLENBQVQsR0FBcUJELFFBQVEsQ0FBN0IsR0FBaUNBLEtBQTVELEM7OztBQUF0QixxQkFBS2YsTzs7QUFDTCxxQkFBS21CLE1BQUw7OztBQUZrQ0gsbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytCQUs5QkksTSxFQUFRTCxLLEVBQU87QUFDakIsYUFBTyxJQUFJTSxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDQyxtQkFBVyxZQUFNO0FBQ2ZGLGtCQUFRRixNQUFSO0FBQ0QsU0FGRCxFQUVHTCxLQUZIO0FBR0QsT0FKTSxDQUFQO0FBS0w7Ozs7RUF6Q21DLGVBQUtVLFM7O2tCQUF0QjNCLFEiLCJmaWxlIjoiYnVsbGV0aW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1bGxldGluIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIHByb3BzID0ge1xuICAgICAgY29udGVudDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGRlZmF1bHQ6IFwiXCJcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgIH1cbiAgICBldmVudHMgPSB7XG5cbiAgICB9XG5cbiAgICB3YXRjaCA9IHtcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgdHlwZUluZm8gKGFyZykge1xuICAgICAgICB0aGlzLnR5cGVPdXQoYXJnKVxuICAgICAgfVxuICAgIH1cblxuICAgIHdvcmxkKCkge1xuICAgICAgY29uc29sZS5sb2coJ3dvcmxkJylcbiAgICB9XG5cbiBhc3luYyB0eXBlT3V0IChjb250ZW50KSB7XG4gICAgICBsZXQgc2NyaXB0ID0gY29udGVudC5zcGxpdCgnJylcbiAgICAgIGxldCBzcGVlZCA9IDYwXG4gICAgICBmb3IobGV0IGkgPSAwIDsgaSA8IHNjcmlwdC5sZW5ndGggOyBpKyspe1xuICAgICAgICB0aGlzLmNvbnRlbnQgKz0gYXdhaXQgdGhpcy5zcGl0TGV0dGVyKHNjcmlwdFtpXSwgJ1xcbicgPT09IHNjcmlwdFtpXSA/IHNwZWVkICogNSA6IHNwZWVkKVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9XG4gICAgfVxuIHNwaXRMZXR0ZXIobGV0dGVyLCBzcGVlZCkge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgcmVzb2x2ZShsZXR0ZXIpXG4gICAgICAgICAgICB9LCBzcGVlZClcbiAgICAgICAgICB9KVxuICAgIH1cblxuXG4gIH1cbiJdfQ==