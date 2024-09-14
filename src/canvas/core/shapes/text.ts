import { forIn } from 'lodash-es';
import Node from './node';

interface IText {
  x?: number;
  y?: number;
  content?: string;
  fillStyle?: string;
  fontSize?: number;
  fontFamily?: string;
  textAlign?: CanvasTextAlign;
  textBaseline?: CanvasTextBaseline;
  direction?: string;
  text?: string;
  fontStyle?: string;
  fontVariant?: string;
  textDecoration?: string;
  align?: string;
  verticalAlign?: string;
  padding?: number;
  lineHeight?: number;
  letterSpacing?: number;
  wrap?: string;
  ellipsis?: boolean;
  index?: number;
}
class Text extends Node {
  x: number;
  y: number;
  content: string;
  fillStyle: string;
  fontFamily: string;
  fontSize: number;
  textAlign: CanvasTextAlign;
  textBaseline: CanvasTextBaseline;
  width?: number;
  height?: number;
  index = 0;
  constructor(config: IText) {
    super();
    this.content = '';
    if (!config.content && !this.content) {
      throw new Error('Text must has content');
    }

    this.fontFamily = '微软雅黑';
    this.fillStyle = '#333';
    this.fontSize = 14;
    this.textAlign = 'left' as CanvasTextAlign;
    this.textBaseline = 'top' as CanvasTextBaseline;
    this.x = 100;
    this.y = 100;
    forIn(config, (value, key) => {
      if (value) (this as any)[key] = value;
    });
  }
  draw(ctx: CanvasRenderingContext2D) {
    ctx.font = `${this.fontSize}px ${this.fontFamily}`;
    ctx.textBaseline = this.textBaseline as CanvasTextBaseline;
    ctx.textAlign = this.textAlign as CanvasTextAlign;
    ctx.fillStyle = this.fillStyle as string;
    ctx.fillText(this.content as string, this.x, this.y);
    const textMetrics = ctx.measureText(this.content);
    this.width = textMetrics.width;
    this.height = this.fontSize;

    return this;
  }
}

export default Text;
