function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
export var defaultShapeData = {
  lineWidth: 1,
  opacity: 1,
  shadowBlur: 0,
  shadowColor: 'orange',
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  lineCap: 'butt',
  lineJoin: 'miter',
  lineDash: [],
  pointerEvents: 'all',
  // transform: [1, 0, 0, 1, 0, 0],
  zIndex: 0
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export var Shape = /*#__PURE__*/function () {
  // extraData;
  function Shape(type, shapeData, defaultShapeData) {
    _classCallCheck(this, Shape);
    _defineProperty(this, "type", void 0);
    // @ts-ignore
    _defineProperty(this, "stage", void 0);
    this.type = type;
    this.data = _objectSpread(_objectSpread(_objectSpread({}, defaultShapeData), defaultShapeData), shapeData);
  }
  _createClass(Shape, [{
    key: "attr",
    value: function attr() {
      if (this.stage) {
        var _this$stage;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        switch (args.length) {
          case 1:
            {
              var data = args[0];
              this.data = _objectSpread(_objectSpread({}, this.data), data);
              break;
            }
          default:
            console.log('未实现的参数数量');
            break;
        }
        (_this$stage = this.stage) === null || _this$stage === void 0 || _this$stage.renderStage();
      }
    }
  }]);
  return Shape;
}();