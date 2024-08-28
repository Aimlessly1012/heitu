import { Line } from 'heitu/canvas/instance/line';
import { ICoord } from 'heitu/canvas/type';
import { calcSmoothPath2D } from './renderCurve';

// import { Line } from 'heitu/canvas/instance/line';
export function pointToFlatArray(list: ICoord[]) {
  return list.reduce((acc, item) => acc.concat(item.x, item.y), []);
}
export function calcLineLength(p1: ICoord, p2: ICoord) {
  return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
}
export function calcTotalLineLength(points: ICoord[]) {
  const lines = points.reduce((acc, item, index) => {
    if (index === 0) {
      return acc;
    }

    const lineItem = { start: points[index - 1], end: item };

    return acc.concat(lineItem);
  }, []);

  const lineLengths = [];

  const totalLineLength = lines.reduce((acc, item) => {
    const lengthItem = calcLineLength(item.start, item.end);

    lineLengths.push(lengthItem);

    return acc + lengthItem;
  }, 0);
  return { totalLineLength, lines, lineLengths };
}

// 根据points转化成 起始点和终点的数组 api
export function convertToNormalPoints(points: number[]): ICoord[] {
  return points
    .reduce((acc, item, index) => {
      const tarIndex = Math.floor(index / 2);
      if (index % 2 == 0) acc.push([item]);
      else acc[tarIndex].push(item);
      return acc;
    }, [])
    .map(([x, y]) => ({ x, y }));
}
// 折线 -非曲线
function calcPointsByPercent(points: number[], percent: number) {
  // 根据points转化成 起始点和终点的数组
  const normalPoints = convertToNormalPoints(points);

  const { totalLineLength, lines, lineLengths } =
    calcTotalLineLength(normalPoints);
  const elapsedLength = totalLineLength * percent;

  let currIndex = 0;
  let tempLength = 0;
  for (let i = 0; i < lineLengths.length; i++) {
    tempLength += lineLengths[i];
    if (tempLength >= elapsedLength) {
      currIndex = i;
      break;
    }
  }

  const lastOnePoint = (() => {
    const currLine = lines[currIndex];

    const currLineElapsedLength =
      elapsedLength -
      lineLengths.slice(0, currIndex).reduce((acc, item) => acc + item, 0);

    const ratio = currLineElapsedLength / lineLengths[currIndex];

    // currLineElapsedLength / lineLengths[currIndex] = x - x1 /  x2 - x1

    const x = ratio * (currLine.end.x - currLine.start.x) + currLine.start.x;
    const y = ratio * (currLine.end.y - currLine.start.y) + currLine.start.y;

    return { x, y };
  })();

  const _points = normalPoints.slice(0, currIndex + 1).concat(lastOnePoint);
  const pts = pointToFlatArray(_points);

  return pts;
}
// 计算 直线的 path2D
export function calcStraightPath2D(points: number[], percent: number) {
  const path2D = new Path2D();
  //
  const pts = calcPointsByPercent(points, percent);

  const [start_x, start_y, ...restPoints] = pts;
  const restNormalPoints = convertToNormalPoints(restPoints);
  path2D.moveTo(start_x, start_y);

  restNormalPoints.forEach(({ x, y }) => {
    path2D.lineTo(x, y);
  });

  return path2D;
}

// 创建直线的 path2D
export function createLinePath2D(data: Line['data']) {
  const { points = [], closed, percent = 1, smooth } = data;

  // 根据 smooth 绘制平滑的线还是 直线
  const path2D = smooth
    ? calcSmoothPath2D(points, percent)
    : calcStraightPath2D(points, percent);

  if (closed) {
    path2D.closePath();
  }

  return path2D;
}
