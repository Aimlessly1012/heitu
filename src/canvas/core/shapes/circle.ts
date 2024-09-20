import { isInShape } from 'heitu/canvas/utils';
import { forIn } from 'lodash-es';
import { dpr } from '../constant';
import Node from './node';
export type ICoord = { x: number; y: number };
interface ICircle {
  x?: number;
  y?: number;
  radius?: number;
  lineWidth?: number;
  fillStyle?: string;
  strokeStyle?: string;
  arc?: boolean;
  startAngle?: number; // 圆弧 饼图 角度 60 180 360
  endAngle?: number; // 圆弧 饼图
  innerRadius?: number;
  border: 0 | 1 | 2;
  index: number;
}

class Circle extends Node {
  name = 'Circle';
  parent = null;
  x: number;
  y: number;
  radius: number;
  lineWidth: number;
  fillStyle: string;
  strokeStyle: string;
  arc: boolean;
  startAngle: number; // 圆弧 饼图 角度 60 180 360
  endAngle: number; // 圆弧 饼图
  innerRadius: number;
  index: number;
  path2D: Path2D | null;
  border: 0 | 1 | 2; // 0 填充 1  只有边框  2 边框和填充
  constructor(config: ICircle) {
    super();
    this.x = 10;
    this.y = 10;
    this.radius = 8;
    this.fillStyle = '';
    this.strokeStyle = '';
    this.lineWidth = 1;
    this.startAngle = 0;
    this.endAngle = 360;
    this.border = 0;
    this.innerRadius = 0;
    this.arc = false;
    this.index = 0;
    this.path2D = null;
    forIn(config, (value, key) => {
      if (value) (this as any)[key] = value;
    });
  }
  // 角度转弧度
  deg2rad(deg: number) {
    return (deg * Math.PI) / 180;
  }
  getPointOnArc(x0: number, y0: number, r: number, deg: number) {
    const alpha = this.deg2rad(deg);

    const x = x0 + r * Math.cos(alpha); // Math.cos 传入弧度
    const y = y0 + r * Math.sin(alpha);

    return { x, y };
  }
  calcWholeRingD() {
    const outerM_y = this.x - this.radius;

    const outerM = `M ${this.x} ${outerM_y}`;
    const outerA = `A ${this.radius} ${this.radius} 0 1 1 ${
      this.x - 0.01
    } ${outerM_y}`;

    const innerM_y = this.y - this.innerRadius;

    const innerM = `M ${this.x} ${innerM_y}`;
    const innerA = `A ${this.innerRadius} ${this.innerRadius} 0 1 0 ${
      this.x + 0.01
    } ${innerM_y}`;
    return `${outerM} ${outerA} ${innerM} ${innerA} Z`;
  }
  calcRingSectorD() {
    const outerStart = this.getPointOnArc(
      this.x,
      this.y,
      this.radius,
      this.startAngle,
    );
    const outerEnd = this.getPointOnArc(
      this.x,
      this.y,
      this.radius,
      this.endAngle,
    );

    const largeArcFlag = this.endAngle - this.startAngle >= 180 ? 1 : 0;

    const outerM = `M ${outerStart.x} ${outerStart.y}`;
    const outerA = `A ${this.radius} ${this.radius} 0 ${largeArcFlag} 1 ${outerEnd.x} ${outerEnd.y}`;

    const innerStart = this.getPointOnArc(
      this.x,
      this.y,
      this.innerRadius,
      this.startAngle,
    );
    const innerEnd = this.getPointOnArc(
      this.x,
      this.y,
      this.innerRadius,
      this.endAngle,
    );

    const moveL = `L${innerEnd.x} ${innerEnd.y}`;

    const innerA = `A ${this.innerRadius} ${this.innerRadius} 0 ${largeArcFlag} 0 ${innerStart.x} ${innerStart.y}`;

    return `${outerM} ${outerA} ${moveL} ${innerA} Z`;
  }
  calcRingD(isWholeArc: boolean) {
    return isWholeArc ? this.calcWholeRingD() : this.calcRingSectorD();
  }
  draw(ctx: CanvasRenderingContext2D) {
    const isWholeArc = this.startAngle === 0 && this.endAngle === 360; // 是否是整圆
    let circlePath;
    switch (this.border) {
      case 0:
        circlePath = new Path2D(this.calcRingD(isWholeArc));
        // 设置绘制样式
        if (this.fillStyle) ctx.fillStyle = this.fillStyle; // 填充颜色
        if (this.fillStyle) ctx.strokeStyle = this.fillStyle; // 描边颜色
        if (this.lineWidth) ctx.lineWidth = this.lineWidth; // 描边宽度
        ctx.stroke(circlePath);
        ctx.fill(circlePath);
        this.path2D = circlePath;
        return circlePath;
      case 1:
        circlePath = new Path2D(this.calcRingD(isWholeArc));
        ctx.lineWidth = this.lineWidth;
        if (this.strokeStyle) ctx.strokeStyle = this.strokeStyle; // 描边颜色
        ctx.stroke(circlePath);
        this.path2D = circlePath;
        return circlePath;
      case 2:
        circlePath = new Path2D(this.calcRingD(isWholeArc));
        // 设置绘制样式
        if (this.fillStyle) ctx.fillStyle = this.fillStyle; // 填充颜色
        if (this.strokeStyle) ctx.strokeStyle = this.strokeStyle; // 描边颜色
        if (this.lineWidth) ctx.lineWidth = this.lineWidth; // 描边宽度
        ctx.stroke(circlePath);
        ctx.fill(circlePath);
        this.path2D = circlePath;
        return circlePath;
    }
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

export default Circle;
