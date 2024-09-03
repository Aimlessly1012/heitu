import { IText } from 'heitu/canvas/element/text';

export const drawText = (ctx: CanvasRenderingContext2D, props: IText) => {
  const {
    x = 10,
    y = 10,
    fontSize = 14,
    textBaseline = 'top',
    textAlign = 'left',
    content,
    fillStyle,
  } = props;
  if (!content) return { witdh: 0, height: fontSize };
  ctx.font = `${fontSize}px 微软雅黑`;
  ctx.textBaseline = textBaseline;
  ctx.textAlign = textAlign;
  ctx.fillStyle = fillStyle as string;
  ctx.fillText(content, x, y);
  const textMetrics = ctx.measureText(content);
  return { width: textMetrics.width, height: fontSize, x, y };
};
