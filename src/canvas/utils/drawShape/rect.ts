import { IRect } from 'heitu/canvas/element/rect';

export function drawRectCommon(
  ctx: CanvasRenderingContext2D,
  props: IRect,
) {
  const {
    x = 0,
    y = 0,
    width = 100,
    height = 100,
    shortLength = 100,
    fillStyle,
    strokeStyle,
    lineWidth,
  } = props;

  const path2D = new Path2D();

  let _shortLength: number;

  if (typeof shortLength === 'number') {
    _shortLength = shortLength;
  } else if (typeof shortLength === 'string') {
    _shortLength = (parseFloat(shortLength) / 100) * width;
  }
  // @ts-ignore
  path2D.moveTo(x + (width / 2 - _shortLength / 2), y);
  // @ts-ignore
  path2D.lineTo(x + (width / 2 - _shortLength / 2) + _shortLength, y);
  path2D.lineTo(x + width, y + height);
  path2D.lineTo(x, y + height);

  path2D.closePath();
  if (fillStyle) ctx.fillStyle = fillStyle;

  if (strokeStyle) ctx.strokeStyle = strokeStyle;
  if (lineWidth) ctx.lineWidth = lineWidth;
  ctx.stroke(path2D);
  ctx.fill(path2D);
}

// 使用path2D绘制矩形
export const drawRect = (ctx: CanvasRenderingContext2D, props: IRect) => {
  const {
    x = 0,
    y = 0,
    width = 100,
    height = 100,
    fillStyle,
    strokeStyle,
    lineWidth,
    border,
  } = props;
  // 创建 Path2D 对象
  const path2D = new Path2D();

  // 添加矩形路径到 Path2D
  path2D.rect(x, y, width, height); // (x, y, width, height)

  if (fillStyle) ctx.fillStyle = fillStyle;

  if (strokeStyle) ctx.strokeStyle = strokeStyle;
  if (lineWidth) ctx.lineWidth = lineWidth;

  // 使用 Path2D 对象绘制图形

  if (border === 0) ctx.fill(path2D);
  if (border === 1) ctx.stroke(path2D);
  if (border === 2) {
    ctx.fill(path2D); // 填充颜色
    ctx.stroke(path2D);
  }
};
