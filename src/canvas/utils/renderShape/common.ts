export const hasStroke = (
  lineWidth: number,
  strokeStyle: CanvasFillStrokeStyles['strokeStyle'],
) => {
  return lineWidth > 0 && lineWidth !== Infinity && strokeStyle;
};

export const fillOrStroke = (
  ctx: CanvasRenderingContext2D,
  elementItem: any,
) => {
  if (elementItem.data.fillStyle) {
    ctx.fill(elementItem.path2D);
  }
  if (hasStroke(elementItem.data.lineWidth, elementItem.data.strokeStyle)) {
    ctx.stroke(elementItem.path2D);
  }
};

export function setCtxStyleProp(
  ctx: CanvasRenderingContext2D,
  elementItem: any,
) {
  const { data } = elementItem;
  const {
    lineWidth,
    lineCap,
    lineJoin,
    strokeStyle,
    fillStyle,
    opacity,
    // lineDash,
  } = data;
  const { shadowBlur, shadowColor, shadowOffsetX, shadowOffsetY } = data;
  const { transform, scale, translate } = elementItem;

  ctx.lineWidth = lineWidth;
  ctx.lineCap = lineCap;
  ctx.lineJoin = lineJoin;

  ctx.strokeStyle = strokeStyle;
  ctx.fillStyle = fillStyle;

  // ctx.setLineDash(lineDash);

  ctx.globalAlpha = opacity;

  ctx.shadowOffsetX = shadowOffsetX;
  ctx.shadowOffsetY = shadowOffsetY;
  ctx.shadowColor = shadowColor;
  ctx.shadowBlur = shadowBlur;

  if (transform) {
    ctx.setTransform(...(transform as any));
  }

  if (scale) {
    ctx.scale(scale.x, scale.y);
  }

  if (translate) {
    ctx.translate(translate.x, translate.y);
  }
}

export function setCtxFontSize(ctx: CanvasRenderingContext2D, fontSize = 14) {
  ctx.font = `${fontSize}px 微软雅黑`;
}
