import { IRect } from '../element/rect';

// 使用path2D绘制矩形
export const drawRect = (ctx: CanvasRenderingContext2D, props: IRect) => {
  const { x = 0, y = 0, width = 100, height = 100 } = props;
  // 创建 Path2D 对象
  const path2D = new Path2D();

  // 添加矩形路径到 Path2D
  path2D.rect(x, y, width, height); // (x, y, width, height)

  // 使用 Path2D 对象绘制图形
  ctx.fill(path2D); // 填充颜色
  ctx.stroke(path2D); // 描边
};
