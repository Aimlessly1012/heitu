// import { Line } from 'heitu/canvas/instance/line';


// export function convertToNormalPoints(points: number[]): ICoord[] {
//   return points
//     .reduce((acc, item, index) => {
//       const tarIndex = Math.floor(index / 2);
//       if (index % 2 == 0) acc.push([item]);
//       else acc[tarIndex].push(item);
//       return acc;
//     }, [])
//     .map(([x, y]) => ({ x, y }));
// }
// export function calcSmoothPath2D(points: number[], percent) {
//   const [start_x, start_y, ...restPoints] = points;

//   const path2D = new Path2D();

//   if (percent === 0) {
//     return path2D;
//   }

//   const normalPoints = convertToNormalPoints(points);
//   const allControlPoint = calcAllControlPoint(normalPoints);

//   const percentSeg = allControlPoint.length * percent;

//   const elapsedIndex = Math.floor(percentSeg);
//   const t = percentSeg - elapsedIndex;

//   const percentControlPoint = allControlPoint[Math.ceil(percentSeg) - 1];

//   const tempAns = calculateControlPoint(t, percentControlPoint);

//   const ans = allControlPoint.slice(0, elapsedIndex);
//   if (percent !== 1) {
//     ans.push({
//       start: percentControlPoint.start,
//       end: tempAns.tempEnd,
//       cp1: tempAns.cp1,
//       cp2: tempAns.cp2,
//     });
//   }

//   path2D.moveTo(start_x, start_y);
//   ans.forEach((item) => {
//     path2D.bezierCurveTo(
//       item.cp1.x,
//       item.cp1.y,
//       item.cp2.x,
//       item.cp2.y,
//       item.end.x,
//       item.end.y,
//     );
//   });

//   return path2D;
// }
// export function calcStraightPath2D(points: number[], percent) {
//   const path2D = new Path2D();

//   const pts = calcPointsByPercent(points, percent);

//   const [start_x, start_y, ...restPoints] = pts;
//   const restNormalPoints = convertToNormalPoints(restPoints);
//   path2D.moveTo(start_x, start_y);

//   restNormalPoints.forEach(({ x, y }) => {
//     path2D.lineTo(x, y);
//   });

//   return path2D;
// }

// export function createLinePath2D(data: Line['data']) {
//   const { points, closed, smooth, percent } = data;

//   const path2D = smooth
//     ? calcSmoothPath2D(points, percent)
//     : calcStraightPath2D(points, percent);

//   if (closed) {
//     path2D.closePath();
//   }

//   return path2D;
// }
