import { sortChildren } from 'heitu-hook/canvas/utils';
import { dpr } from '../../constant';
// import { IShape } from '../../type';
import {
  fillOrStroke,
  setCtxStyleProp,
} from 'heitu-hook/canvas/utils/renderShape/common';
import { setRectPath2D } from 'heitu-hook/canvas/utils/renderShape/renderRect';
import { Stage } from '../stage';

export function drawShapes(ctx: CanvasRenderingContext2D, list: any[]) {
  const curlist = sortChildren(list);

  curlist.forEach((elementItem: any) => {
    console.log(elementItem, 'elementItem');
    // const { data } = elementItem;

    ctx.beginPath();

    setCtxStyleProp(ctx, elementItem);

    switch (elementItem.type) {
      case 'Rect': {
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

export function mountStage(children: any[], stage: Stage) {
  children.forEach((item) => {
    item.stage = stage;

    if (item.children) {
      mountStage(item.children, stage);
    }
  });
}

export function drawStageShapes(stage: Stage) {
  const { ctx } = stage;

  (ctx as CanvasRenderingContext2D).clearRect(
    0,
    0,
    stage.canvasElement?.width as number,
    stage.canvasElement?.height as number,
  );
  drawShapes(ctx as CanvasRenderingContext2D, stage.children);
}
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
