import { dpr } from './constant';

export function setCanvasStyle(
  canvasElement: HTMLCanvasElement,
  containerWidth: number,
  containerHeight: number,
) {
  const canvasWidth = containerWidth * dpr;
  const canvasHeight = containerHeight * dpr;

  canvasElement.width = canvasWidth;
  canvasElement.height = canvasHeight;
  canvasElement.style.width = '100%';
  canvasElement.style.height = '100%';
}
export function updateCanvas(
  canvasElement: HTMLCanvasElement,
  containerWidth: number,
  containerHeight: number,
) {
  setCanvasStyle(canvasElement, containerWidth, containerHeight);

  const ctx = canvasElement.getContext('2d');
  if (ctx) {
    ctx.scale(dpr, dpr);
    ctx.textBaseline = 'top';
    ctx.font = `${14}px 微软雅黑`;
    return ctx;
  }
  return null;
}

// 创建canvas
export function createCanvas(containerWidth: number, containerHeight: number) {
  const canvasElement = document.createElement('canvas');
  const ctx = updateCanvas(canvasElement, containerWidth, containerHeight);
  return { canvasElement, ctx };
}
