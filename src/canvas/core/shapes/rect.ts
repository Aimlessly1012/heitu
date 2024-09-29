import { isInShape } from 'heitu/canvas/utils';
import { forIn } from 'lodash-es';
import { dpr } from '../constant';
import Node from './node';
interface IRect {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  fillStyle?: string;
  strokeStyle?: string;
  lineWidth?: number;
  shadowColor?: string;
}
class Rect extends Node {
  name = 'Rect';
  x: number;
  y: number;
  width: number;
  height: number;
  fillStyle: string | null;
  strokeStyle: string | null;
  lineWidth: number | null;
  index: number;
  path2D: Path2D | null;
  parent = null;
  shadowColor: string;
  shadowBlur: number = 0;
  shadowOffsetY: number = 0;
  shadowOffsetX: number = 0;
  radius: number = 0;
  constructor(config: IRect) {
    super();
    this.x = 100;
    this.y = 100;
    this.width = 100;
    this.height = 100;
    this.fillStyle = null;
    this.strokeStyle = null;
    this.lineWidth = null;
    this.path2D = null;
    this.shadowColor = 'transparent';
    this.index = 0;
    this.radius = 0;
    forIn(config, (value, key) => {
      if (value) (this as any)[key] = value;
    });
  }
  draw(ctx: CanvasRenderingContext2D) {
    const path2D = new Path2D();
    if (this.radius) {
      path2D.moveTo(this.x + this.radius, this.y);
      path2D.lineTo(this.x + this.width - this.radius, this.y);
      path2D.arcTo(
        this.x + this.width,
        this.y,
        this.x + this.width,
        this.y + this.radius,
        this.radius,
      );
      path2D.lineTo(this.x + this.width, this.y + this.height - this.radius);
      path2D.arcTo(
        this.x + this.width,
        this.y + this.height,
        this.x + this.width - this.radius,
        this.y + this.height,
        this.radius,
      );
      path2D.lineTo(this.x + this.radius, this.y + this.height);
      path2D.arcTo(this.x, this.y + this.height,this.x, this.y + this.height - this.radius, this.radius);
      path2D.lineTo(this.x, this.y + this.radius);
      path2D.arcTo(this.x, this.y,this. x + this.radius, this.y, this.radius);
    } else {
      path2D.moveTo(this.x, this.y);
      path2D.lineTo(this.x + this.width, this.y);
      path2D.lineTo(this.x + this.width, this.y + this.height);
      path2D.lineTo(this.x, this.y + this.height);
    }

    if (this.shadowColor) {
      // 设置阴影属性
      ctx.shadowColor = this.shadowColor; // 阴影颜色
      ctx.shadowBlur = this.shadowBlur; // 阴影模糊程度
      ctx.shadowOffsetX = this.shadowOffsetX; // 阴影的水平偏移
      ctx.shadowOffsetY = this.shadowOffsetY; // 阴影的垂直偏移
    } else {
      ctx.shadowColor = 'transparent'; // 取消阴影效果
    }

    path2D.closePath();
    if (this.fillStyle) ctx.fillStyle = this.fillStyle;
    if (this.strokeStyle) ctx.strokeStyle = this.strokeStyle;
    if (this.lineWidth) ctx.lineWidth = this.lineWidth;
    if (this.lineWidth) ctx.stroke(path2D);
    if (this.fillStyle) ctx.fill(path2D);

    this.path2D = path2D;
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

export default Rect;
