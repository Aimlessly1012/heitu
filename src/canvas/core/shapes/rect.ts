import { forIn } from 'lodash-es';
import Node from './node';
interface IRect {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  fillStyle?: string;
  strokeStyle?: string;
  lineWidth?: number;
}
class Rect extends Node {
  x: number;
  y: number;
  width: number;
  height: number;
  fillStyle: string | null;
  strokeStyle: string | null;
  lineWidth: number | null;
  index: number;
  constructor(config: IRect) {
    super();
    this.x = 100;
    this.y = 100;
    this.width = 100;
    this.height = 100;
    this.fillStyle = null;
    this.strokeStyle = null;
    this.lineWidth = null;
    this.index = 0;
    forIn(config, (value, key) => {
      if (value) (this as any)[key] = value;
    });
  }
  draw(ctx: CanvasRenderingContext2D) {
    const path2D = new Path2D();

    path2D.moveTo(this.x, this.y);

    path2D.lineTo(this.x + this.width, this.y);
    path2D.lineTo(this.x + this.width, this.y + this.height);
    path2D.lineTo(this.x, this.y + this.height);

    path2D.closePath();
    if (this.fillStyle) ctx.fillStyle = this.fillStyle;
    if (this.strokeStyle) ctx.strokeStyle = this.strokeStyle;
    if (this.lineWidth) ctx.lineWidth = this.lineWidth;
    if (this.lineWidth) ctx.stroke(path2D);
    if (this.fillStyle) ctx.fill(path2D);
    return this;
  }
}

export default Rect;
