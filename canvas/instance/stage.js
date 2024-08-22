function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { drawStageShapes, initStage, mountStage } from "./api/api";
import { resetSchedulerCount } from "./api/scheduler";
export var Stage = /*#__PURE__*/function () {
  function Stage() {
    _classCallCheck(this, Stage);
    _defineProperty(this, "canvasElement", void 0);
    _defineProperty(this, "ctx", void 0);
    // todo Ts
    _defineProperty(this, "children", []);
    _defineProperty(this, "isAsyncRenderTask", false);
    this.canvasElement = null;
    this.ctx = null;
  }
  // 初始化 canvas
  _createClass(Stage, [{
    key: "mount",
    value: function mount(option) {
      var container = option.container;
      var stage = initStage(container);
      // 画布的 context 用于绘制等
      this.ctx = stage === null || stage === void 0 ? void 0 : stage.ctx;
      // 画布元素 用于操作 dom
      this.canvasElement = stage === null || stage === void 0 ? void 0 : stage.canvasElement;
      // 绘制 canvas 内部数据
      this.renderStage();
      // 添加事件监听
      // this.addStageEventListener();
    }
    // 添加子元素
  }, {
    key: "appendChild",
    value: function appendChild() {
      var _this = this;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      var elements = args.flat(1);
      this.children = this.children.concat(elements);
      this.children = this.children.map(function (item) {
        return Object.assign(item, {
          parent: _this
        });
      });
      mountStage(this.children, this);
    }
  }, {
    key: "renderStage",
    value: function renderStage() {
      var _this2 = this;
      if (this.isAsyncRenderTask) {
        return;
      }
      this.isAsyncRenderTask = true;
      requestAnimationFrame(function () {
        resetSchedulerCount();
        drawStageShapes(_this2);
        _this2.isAsyncRenderTask = false;
      });
    }
    // canvas 添加时间监听
  }, {
    key: "addStageEventListener",
    value: function addStageEventListener() {
      if (!this.canvasElement) return;
      // 鼠标移动
      this.canvasElement.onmousemove = function (evt) {
        {
          // 触发舞台(canvas Element)的事件
          var eventParameter = {
            target: null,
            x: evt.offsetX,
            y: evt.offsetY,
            nativeEvent: evt
          };
          console.log(eventParameter, 'onmousemove_eventParameter');
        }
      };
    }
  }]);
  return Stage;
}();