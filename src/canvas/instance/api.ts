import { dpr } from '../constant';
import { IShape } from '../type';
import { fillOrStroke } from '../utils/fillOrStroke';
import { setRectPath2D } from '../utils/setPath2D';
import { Stage } from './stage';
// 更新canvas的style
export const setCanvasStyle = (
  canvasElement: HTMLCanvasElement,
  width: number,
  height: number,
) => {
  const canvasWidth = width * dpr;
  const canvasHeight = height * dpr;

  canvasElement.width = canvasWidth;
  canvasElement.height = canvasHeight;
  canvasElement.style.width = '100%';
  canvasElement.style.height = '100%';
};
// 更新canvas的属性
export const updateCanvas = (
  canvasElement: HTMLCanvasElement,
  width: number,
  height: number,
) => {
  setCanvasStyle(canvasElement, width, height);

  const ctx = canvasElement.getContext('2d');
  if (!ctx) return null;
  ctx.scale(dpr, dpr);
  ctx.textBaseline = 'top';
  ctx.font = `${14}px 微软雅黑`;

  return ctx;
};

// 创建canvas元素
export const createCanvas = (width: number, height: number) => {
  const canvasElement = document.createElement('canvas');
  const ctx = updateCanvas(canvasElement, width, height);

  return { canvasElement, ctx };
};

// 初始化画布 将canvas添加到容器中
export const initStage = (canvasContainer: HTMLElement) => {
  const { offsetWidth, offsetHeight } = canvasContainer;
  const { canvasElement, ctx } = createCanvas(offsetWidth, offsetHeight);

  canvasContainer.append(canvasElement);

  return { canvasElement, ctx };
};

export function setCtxStyleProp(
  ctx: CanvasRenderingContext2D,
  elementItem: IShape,
) {
  const { data } = elementItem;
  const {
    lineWidth,
    lineCap,
    lineJoin,
    strokeStyle,
    fillStyle,
    opacity,
    lineDash,
  } = data;
  const { shadowBlur, shadowColor, shadowOffsetX, shadowOffsetY } = data;
  const { transform, scale, translate } = data;

  ctx.lineWidth = lineWidth;
  ctx.lineCap = lineCap;
  ctx.lineJoin = lineJoin;

  ctx.strokeStyle = strokeStyle;
  ctx.fillStyle = fillStyle;

  ctx.setLineDash(lineDash);

  ctx.globalAlpha = opacity;

  ctx.shadowOffsetX = shadowOffsetX;
  ctx.shadowOffsetY = shadowOffsetY;
  ctx.shadowColor = shadowColor;
  ctx.shadowBlur = shadowBlur;

  if (transform) {
    ctx.setTransform(...(transform as any));
  }

  if (scale) {
    ctx.scale(scale.x, scale.y);
  }

  if (translate) {
    ctx.translate(translate.x, translate.y);
  }
}

export const sortChildren = (children: IShape[]) => {
  return children.toSorted((a, b) => {
    const a_zIndex = a.data.zIndex;
    const b_zIndex = b.data.zIndex;

    return a_zIndex - b_zIndex;
  });
};
export const drawShapes = (ctx: CanvasRenderingContext2D, list: IShape[]) => {
  list = sortChildren(list);
  list.forEach((elementItem) => {
    ctx.beginPath();
    setCtxStyleProp(ctx, elementItem);
    switch (elementItem.type) {
      case 'Rect': {
        setRectPath2D(elementItem);
        fillOrStroke(ctx, elementItem);

        break;
      }
    }
  });
};

//
export const drawStageShapes = (stage: Stage) => {
  const { ctx } = stage;
  if (!ctx || !stage || !stage.canvasElement || !stage?.children) return;
  ctx.clearRect(0, 0, stage.canvasElement.width, stage.canvasElement.height);
  drawShapes(ctx, stage.children);
};
