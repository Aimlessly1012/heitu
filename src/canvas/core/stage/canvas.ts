import { dpr } from '../constant';
import { createCanvasElement } from './until';

// interface ICanvasConfig {
//   width?: number;
//   height?: number;
//   pixelRatio?: number;
//   willReadFrequently?: boolean;
// }

export class Canvas {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  width = 0;
  height = 0;

  constructor() {
    this.canvas = createCanvasElement();
    this.canvas.style.padding = '0';
    this.canvas.style.margin = '0';
    this.canvas.style.border = '0';
    this.canvas.style.background = 'transparent';
    this.context = this.canvas.getContext('2d') as CanvasRenderingContext2D;
  }

  setWidth(width: number) {
    // take into account pixel ratio
    this.width = this.canvas.width = width * dpr;
    this.canvas.style.width = width + 'px';
  }
  setHeight(height: number) {
    this.height = this.canvas.height = height * dpr;
    this.canvas.style.height = height + 'px';
    this.context.scale(dpr, dpr);
  }
  getWidth() {
    return this.width;
  }
  getHeight() {
    return this.height;
  }
  setBackgroundColor(color: string) {
    this.canvas.style.background = color;
  }
  setSize(width: number, height: number) {
    this.setWidth(width || 0);
    this.setHeight(height || 0);
  }
  getContext() {
    return this.context;
  }
  getCanvasDom(
    width: number,
    height: number,
    // layout: HTMLElement,
    backgroundColor?: string,
  ) {
    if (backgroundColor) this.setBackgroundColor(backgroundColor);
    return this.canvas;
  }
}
