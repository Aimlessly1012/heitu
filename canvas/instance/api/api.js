import { sortChildren } from "../../utils";
import { dpr } from "../../constant";
// import { IShape } from '../../type';
import { fillOrStroke, setCtxStyleProp } from "../../utils/renderShape/common";
import { setRectPath2D } from "../../utils/renderShape/renderRect";
export function drawShapes(ctx, list) {
  var curlist = sortChildren(list);
  curlist.forEach(function (elementItem) {
    console.log(elementItem, 'elementItem');
    // const { data } = elementItem;

    ctx.beginPath();
    setCtxStyleProp(ctx, elementItem);
    switch (elementItem.type) {
      case 'Rect':
        {
          setRectPath2D(elementItem);
          console.log(elementItem, 'elementItemelementItem');
          fillOrStroke(ctx, elementItem);
          break;
        }
      default:
        console.log(elementItem.type, '该图形 暂未实现');
        break;
    }
  });
}
export function mountStage(children, stage) {
  children.forEach(function (item) {
    item.stage = stage;
    if (item.children) {
      mountStage(item.children, stage);
    }
  });
}
export function drawStageShapes(stage) {
  var _stage$canvasElement, _stage$canvasElement2;
  var ctx = stage.ctx;
  ctx.clearRect(0, 0, (_stage$canvasElement = stage.canvasElement) === null || _stage$canvasElement === void 0 ? void 0 : _stage$canvasElement.width, (_stage$canvasElement2 = stage.canvasElement) === null || _stage$canvasElement2 === void 0 ? void 0 : _stage$canvasElement2.height);
  drawShapes(ctx, stage.children);
}
// 更新canvas的style
export var setCanvasStyle = function setCanvasStyle(canvasElement, width, height) {
  var canvasWidth = width * dpr;
  var canvasHeight = height * dpr;
  canvasElement.width = canvasWidth;
  canvasElement.height = canvasHeight;
  canvasElement.style.width = '100%';
  canvasElement.style.height = '100%';
};
// 更新canvas的属性
export var updateCanvas = function updateCanvas(canvasElement, width, height) {
  setCanvasStyle(canvasElement, width, height);
  var ctx = canvasElement.getContext('2d');
  if (!ctx) return null;
  ctx.scale(dpr, dpr);
  ctx.textBaseline = 'top';
  ctx.font = "".concat(14, "px \u5FAE\u8F6F\u96C5\u9ED1");
  return ctx;
};

// 创建canvas元素
export var createCanvas = function createCanvas(width, height) {
  var canvasElement = document.createElement('canvas');
  var ctx = updateCanvas(canvasElement, width, height);
  return {
    canvasElement: canvasElement,
    ctx: ctx
  };
};

// 初始化画布 将canvas添加到容器中
export var initStage = function initStage(canvasContainer) {
  var offsetWidth = canvasContainer.offsetWidth,
    offsetHeight = canvasContainer.offsetHeight;
  var _createCanvas = createCanvas(offsetWidth, offsetHeight),
    canvasElement = _createCanvas.canvasElement,
    ctx = _createCanvas.ctx;
  canvasContainer.append(canvasElement);
  return {
    canvasElement: canvasElement,
    ctx: ctx
  };
};