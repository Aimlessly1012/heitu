import { isInShape } from 'heitu/canvas/utils';
import { forIn } from 'lodash-es';
import { dpr } from '../constant';
import Node from './node';
interface ICustom {
  x?: number;
  y?: number;
  path2D: Path2D | null;
  fillStyle?: string;
  strokeStyle?: string;
  lineWidth?: number;
}
class Custom extends Node {
  name = 'Custom';
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
  constructor(config: ICustom) {
    super();
    if (!config.path2D) {
      throw new Error('Mast has key of path2D');
    }
    this.x = 100;
    this.y = 100;
    this.width = 0;
    this.height = 0;
    this.fillStyle = null;
    this.strokeStyle = null;
    this.lineWidth = 1;
    this.path2D = null;
    this.index = 0;
    forIn(config, (value, key) => {
      if (value) (this as any)[key] = value;
    });
  }
  draw(ctx: CanvasRenderingContext2D) {
    if (!this.path2D) return;
    if (this.fillStyle) ctx.fillStyle = this.fillStyle;
    if (this.strokeStyle) ctx.strokeStyle = this.strokeStyle;
    if (this.lineWidth) ctx.lineWidth = this.lineWidth;
    if (this.lineWidth) ctx.stroke(this.path2D);
    if (this.fillStyle) ctx.fill(this.path2D);

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

export default Custom;
