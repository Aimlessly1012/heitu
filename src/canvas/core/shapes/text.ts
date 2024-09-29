import { isInTextShape } from 'heitu/canvas/utils';
import { forIn } from 'lodash-es';
import { dpr } from '../constant';
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
  name = 'Text';
  parent = null;
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
  shadowColor: string;
  shadowBlur: number = 0;
  shadowOffsetY: number = 0;
  shadowOffsetX: number = 0;
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
    this.shadowColor = 'transparent';
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
    if (this.shadowColor) {
      // 设置阴影属性
      ctx.shadowColor = this.shadowColor; // 阴影颜色
      ctx.shadowBlur = this.shadowBlur; // 阴影模糊程度
      ctx.shadowOffsetX = this.shadowOffsetX; // 阴影的水平偏移
      ctx.shadowOffsetY = this.shadowOffsetY; // 阴影的垂直偏移
    } else {
      ctx.shadowColor = 'transparent'; // 取消阴影效果
    }
    return this;
  }
  inScope(evt: MouseEvent) {
    const mouseX = evt.offsetX * dpr;
    const mouseY = evt.offsetY * dpr;
    return isInTextShape(mouseX, mouseY, this);
  }
}

export default Text;
