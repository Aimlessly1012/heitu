import { isInShape } from 'heitu/canvas/utils';
import { forIn } from 'lodash-es';
import { dpr } from '../constant';
import { Vector2d } from '../type';
import Node from './node';

interface ILine {
  start?: { x: number; y: number };
  end?: { x: number; y: number };
  points?: number[];
  smooth?: boolean;
  strokeStyle: string;
  lineWidth: number;
  lineCap: 'butt' | 'round' | 'square';
  lineJoin: 'miter' | 'round' | 'miter';
  index: number;
}

class Line extends Node {
  name = 'Line';
  start: { x: number; y: number };
  end: { x: number; y: number };
  points: number[];
  smooth: boolean;
  strokeStyle: string;
  lineWidth: number;
  lineCap: 'butt' | 'round' | 'square';
  lineJoin: 'miter' | 'round' | 'miter';
  index: number;
  path2D: Path2D | null;
  parent = null;
  constructor(config: ILine) {
    super();
    this.start = { x: 10, y: 10 };
    this.end = { x: 100, y: 100 };
    this.points = [];
    this.strokeStyle = 'black';
    this.lineWidth = 1;
    this.lineCap = 'butt';
    this.lineJoin = 'miter';
    this.smooth = false;
    this.index = 0;
    this.path2D = null;
    forIn(config, (value, key) => {
      if (value) (this as any)[key] = value;
    });
  }
  convertToNormalPoints(points: number[]): Vector2d[] {
    return points
      .reduce((acc: number[][], item, index) => {
        const tarIndex = Math.floor(index / 2);
        if (index % 2 === 0) acc.push([item]);
        else acc[tarIndex].push(item);
        return acc;
      }, [])
      .map(([x, y]) => ({ x, y }));
  }
  calcSmoothPath2D() {
    const path2D = new Path2D();
    path2D.moveTo(this.start?.x || 0, this.start?.y || 0);

    // 定义贝塞尔曲线的起点、控制点和终点
    path2D.moveTo(this.start.x, this.start?.y);
    // path2D.bezierCurveTo(...points, end.x, end.y);
    if (this.points.length === 2) {
      path2D.quadraticCurveTo(
        this.points[0],
        this.points[1],
        this.end.x,
        this.end.y,
      );
    }
    if (this.points.length === 4) {
      path2D.bezierCurveTo(
        this.points[0],
        this.points[1],
        this.points[2],
        this.points[3],
        this.end.x,
        this.end.y,
      );
    }
    this.path2D = path2D;
    return path2D;
  }
  calcStraightPath2D() {
    const path2D = new Path2D();
    path2D.moveTo(this.start?.x || 0, this.start?.y || 0);
    const restNormalPoints = this.convertToNormalPoints([
      ...(this.points as number[]),
      this.end?.x as number,
      this.end?.y as number,
    ]);

    restNormalPoints.forEach(({ x, y }) => {
      path2D.lineTo(x, y);
    });
    return path2D;
  }
  draw(ctx: CanvasRenderingContext2D) {
    const path2D = this.smooth
      ? this.calcSmoothPath2D()
      : this.calcStraightPath2D();
    if (this.strokeStyle) ctx.strokeStyle = this.strokeStyle;
    if (this.lineWidth) ctx.lineWidth = this.lineWidth;
    ctx.stroke(path2D);
    return this;
  }
  inScope(evt: MouseEvent, ctx: CanvasRenderingContext2D) {
    const mouseX = evt.offsetX * dpr;
    const mouseY = evt.offsetY * dpr;
    if (this?.path2D) {
      return isInShape({
        mouseX,
        mouseY,
        path2D: this?.path2D,
        ctx: ctx || undefined,
      });
    }
    return false;
  }
}

export default Line;
