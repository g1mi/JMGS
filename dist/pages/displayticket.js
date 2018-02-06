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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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
    }, _this.$repeat = {}, _this.$props = { "bulletin": { "xmlns:v-bind": "", "v-bind:content.sync": "content" } }, _this.$events = {}, _this.components = {
      bulletin: _bulletin2.default
    }, _this.mixins = [_test2.default], _this.data = {
      content: '',
      demo: '\n    \u4EB2\u7231\u7684\u987E\u5BA2\uFF0C\u4F60\u597D\uFF01\u60A8\u662F\u4ECA\u5929\u7B2C101\u4E2A\u6562\u8BF4\u53D1\u8D77\u8005\u3002\n    \u8BF7\u6CE8\u610F\u53D1\u8D77\u7684\u6562\u8BF4\u4E0D\u5F97\u5305\u542B\u5982\u4E0B\u5185\u5BB9\uFF1A\n        \uD83C\uDE32\u8272\u60C5\uFF0C\n        \uD83C\uDE32\u8FDD\u6CD5\uFF0C\n        \uD83C\uDE32\u653F\u6CBB\u76F8\u5173\u3002\n     \u60F3\u770B\u770B\u6628\u5929\u7684\u6570\u636E\u4E48\uFF1F'
    }, _this.computed = {
      now: function now() {
        return +new Date();
      }
    }, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Displayticket, [{
    key: 'onReady',
    value: function onReady() {
      this.typeOut(this.demo);
      console.log(this.$com.bulletin);
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

  return Displayticket;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Displayticket , 'pages/displayticket'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3BsYXl0aWNrZXQuanMiXSwibmFtZXMiOlsiRGlzcGxheXRpY2tldCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJidWxsZXRpbiIsIm1peGlucyIsImRhdGEiLCJjb250ZW50IiwiZGVtbyIsImNvbXB1dGVkIiwibm93IiwiRGF0ZSIsIm1ldGhvZHMiLCJldmVudHMiLCJ0eXBlT3V0IiwiY29uc29sZSIsImxvZyIsIiRjb20iLCJzY3JpcHQiLCJzcGxpdCIsInNwZWVkIiwiaSIsImxlbmd0aCIsInNwaXRMZXR0ZXIiLCIkYXBwbHkiLCJsZXR0ZXIiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNldFRpbWVvdXQiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOztBQUNBOzs7O0FBQ0M7Ozs7Ozs7Ozs7Ozs7O0lBRW9CQSxhOzs7Ozs7Ozs7Ozs7OztvTUFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdWQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxZQUFXLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsdUJBQXNCLFNBQXpDLEVBQVosRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkM7QUFEUSxLLFFBSVZDLE0sR0FBUyxnQixRQUVUQyxJLEdBQU87QUFDTEMsZUFBUyxFQURKO0FBRUxDO0FBRkssSyxRQVdQQyxRLEdBQVc7QUFDVEMsU0FEUyxpQkFDRjtBQUNMLGVBQU8sQ0FBQyxJQUFJQyxJQUFKLEVBQVI7QUFDRDtBQUhRLEssUUFNWEMsTyxHQUFVLEUsUUFJVkMsTSxHQUFTLEU7Ozs7OzhCQUlEO0FBQ1IsV0FBS0MsT0FBTCxDQUFhLEtBQUtOLElBQWxCO0FBQ0FPLGNBQVFDLEdBQVIsQ0FBWSxLQUFLQyxJQUFMLENBQVViLFFBQXRCO0FBQ0Q7Ozs7MkZBRWNHLE87Ozs7OztBQUNUVyxzQixHQUFTWCxRQUFRWSxLQUFSLENBQWMsRUFBZCxDO0FBQ1RDLHFCLEdBQVEsRTtBQUNKQyxpQixHQUFJLEM7OztzQkFBSUEsSUFBSUgsT0FBT0ksTTs7Ozs7O3VCQUNILEtBQUtDLFVBQUwsQ0FBZ0JMLE9BQU9HLENBQVAsQ0FBaEIsRUFBMkIsU0FBU0gsT0FBT0csQ0FBUCxDQUFULEdBQXFCRCxRQUFRLENBQTdCLEdBQWlDQSxLQUE1RCxDOzs7QUFBdEIscUJBQUtiLE87O0FBQ0wscUJBQUtpQixNQUFMOzs7QUFGa0NILG1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQkFLNUJJLE0sRUFBUUwsSyxFQUFPO0FBQ25CLGFBQU8sSUFBSU0sT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Q0MsbUJBQVcsWUFBTTtBQUNmRixrQkFBUUYsTUFBUjtBQUNELFNBRkQsRUFFR0wsS0FGSDtBQUdELE9BSk0sQ0FBUDtBQUtIOzs7O0VBekR3QyxlQUFLVSxJOztrQkFBM0JqQyxhIiwiZmlsZSI6ImRpc3BsYXl0aWNrZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xuICBpbXBvcnQgdGVzdE1peGluIGZyb20gJy4uL21peGlucy90ZXN0J1xuICAgaW1wb3J0IEJ1bGxldGluIGZyb20gJy4uL2NvbXBvbmVudHMvYnVsbGV0aW4nXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzcGxheXRpY2tldCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ0Rpc3BsYXl0aWNrZXQnXG4gICAgfVxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJidWxsZXRpblwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6Y29udGVudC5zeW5jXCI6XCJjb250ZW50XCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIGJ1bGxldGluOiBCdWxsZXRpblxuICAgIH1cblxuICAgIG1peGlucyA9IFt0ZXN0TWl4aW5dXG5cbiAgICBkYXRhID0ge1xuICAgICAgY29udGVudDogJycsXG4gICAgICBkZW1vOiBgXG4gICAg5Lqy54ix55qE6aG+5a6i77yM5L2g5aW977yB5oKo5piv5LuK5aSp56ysMTAx5Liq5pWi6K+05Y+R6LW36ICF44CCXG4gICAg6K+35rOo5oSP5Y+R6LW355qE5pWi6K+05LiN5b6X5YyF5ZCr5aaC5LiL5YaF5a6577yaXG4gICAgICAgIPCfiLLoibLmg4XvvIxcbiAgICAgICAg8J+Isui/neazle+8jFxuICAgICAgICDwn4iy5pS/5rK755u45YWz44CCXG4gICAgIOaDs+eci+eci+aYqOWkqeeahOaVsOaNruS5iO+8n2BcbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICAgIG5vdyAoKSB7XG4gICAgICAgIHJldHVybiArbmV3IERhdGUoKVxuICAgICAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG5cbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG5cbiAgICB9XG5cbiAgb25SZWFkeSgpIHtcbiAgICB0aGlzLnR5cGVPdXQodGhpcy5kZW1vKVxuICAgIGNvbnNvbGUubG9nKHRoaXMuJGNvbS5idWxsZXRpbilcbiAgfVxuXG4gIGFzeW5jIHR5cGVPdXQgKGNvbnRlbnQpIHtcbiAgICBsZXQgc2NyaXB0ID0gY29udGVudC5zcGxpdCgnJylcbiAgICBsZXQgc3BlZWQgPSA2MFxuICAgIGZvcihsZXQgaSA9IDAgOyBpIDwgc2NyaXB0Lmxlbmd0aCA7IGkrKyl7XG4gICAgICB0aGlzLmNvbnRlbnQgKz0gYXdhaXQgdGhpcy5zcGl0TGV0dGVyKHNjcmlwdFtpXSwgJ1xcbicgPT09IHNjcmlwdFtpXSA/IHNwZWVkICogNSA6IHNwZWVkKVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH1cbiAgfVxuIHNwaXRMZXR0ZXIobGV0dGVyLCBzcGVlZCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZShsZXR0ZXIpXG4gICAgICAgICAgfSwgc3BlZWQpXG4gICAgICAgIH0pXG4gICAgfVxuICB9XG4iXX0=