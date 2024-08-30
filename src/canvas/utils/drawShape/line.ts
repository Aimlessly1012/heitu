import { ILine } from 'heitu/canvas/element/line';
import { ICoord } from 'heitu/canvas/type';

export function convertToNormalPoints(points: number[]): ICoord[] {
  return points
    .reduce((acc: number[][], item, index) => {
      const tarIndex = Math.floor(index / 2);
      if (index % 2 === 0) acc.push([item]);
      else acc[tarIndex].push(item);
      return acc;
    }, [])
    .map(([x, y]) => ({ x, y }));
}
const calcStraightPath2D = (
  start: ILine['start'],
  end: ILine['end'],
  points: number[],
): Path2D => {
  const path2D = new Path2D();
  path2D.moveTo(start?.x || 0, start?.y || 0);
  const restNormalPoints = convertToNormalPoints([
    ...(points as number[]),
    end?.x as number,
    end?.y as number,
  ]);

  restNormalPoints.forEach(({ x, y }) => {
    path2D.lineTo(x, y);
  });
  return path2D;
};

const calcSmoothPath2D = (
  start: ILine['start'] = { x: 0, y: 0 },
  end: ILine['end'] = { x: 100, y: 100 },
  points: number[],
) => {
  const path2D = new Path2D();
  path2D.moveTo(start?.x || 0, start?.y || 0);

  // 定义贝塞尔曲线的起点、控制点和终点
  path2D.moveTo(start.x, start?.y);
  // path2D.bezierCurveTo(...points, end.x, end.y);
  if (points.length === 2) {
    path2D.quadraticCurveTo(points[0], points[1], end.x, end.y);
  }
  if (points.length === 4) {
    path2D.bezierCurveTo(
      points[0],
      points[1],
      points[2],
      points[3],
      end.x,
      end.y,
    );
  }

  return path2D;
};

export const drawLine = (ctx: CanvasRenderingContext2D, props: ILine) => {
  const {
    start = { x: 0, y: 0 },
    end = { x: 100, y: 100 },
    points = [],
    strokeStyle,
    lineWidth,
    smooth,
  } = props;
  const path2D = smooth
    ? calcSmoothPath2D(start, end, points)
    : calcStraightPath2D(start, end, points);

  // 设置样式并绘制路径
  if (strokeStyle) ctx.strokeStyle = strokeStyle;
  if (lineWidth) ctx.lineWidth = lineWidth;
  ctx.stroke(path2D);
};
