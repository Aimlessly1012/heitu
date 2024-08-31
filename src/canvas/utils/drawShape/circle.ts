import { ICircle } from 'heitu/canvas/element/circle';
// 角度转弧度
export function deg2rad(deg: number) {
  return (deg * Math.PI) / 180;
}
// 获取圆弧上的点 圆心 半径 角度: 60°
export function getPointOnArc(x0: number, y0: number, r: number, deg: number) {
  const alpha = deg2rad(deg);

  const x = x0 + r * Math.cos(alpha); // Math.cos 传入弧度
  const y = y0 + r * Math.sin(alpha);

  return { x, y };
}
const calcRingD = (
  outerRadius: number,
  innerRadius: number,
  startAngle: number,
  endAngle: number,
  centerX: number,
  centerY: number,
  isWholeArc: boolean,
) => {
  function calcWholeRingD() {
    const outerM_y = centerY - outerRadius;

    const outerM = `M ${centerX} ${outerM_y}`;
    const outerA = `A ${outerRadius} ${outerRadius} 0 1 1 ${
      centerX - 0.01
    } ${outerM_y}`;

    const innerM_y = centerY - innerRadius;

    const innerM = `M ${centerX} ${innerM_y}`;
    const innerA = `A ${innerRadius} ${innerRadius} 0 1 0 ${
      centerX + 0.01
    } ${innerM_y}`;

    return `${outerM} ${outerA} ${innerM} ${innerA} Z`;
  }

  function calcRingSectorD() {
    const outerStart = getPointOnArc(centerX, centerY, outerRadius, startAngle);
    const outerEnd = getPointOnArc(centerX, centerY, outerRadius, endAngle);

    const largeArcFlag = endAngle - startAngle >= 180 ? 1 : 0;

    const outerM = `M ${outerStart.x} ${outerStart.y}`;
    const outerA = `A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${outerEnd.x} ${outerEnd.y}`;

    const innerStart = getPointOnArc(centerX, centerY, innerRadius, startAngle);
    const innerEnd = getPointOnArc(centerX, centerY, innerRadius, endAngle);

    const moveL = `L${innerEnd.x} ${innerEnd.y}`;

    const innerA = `A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${innerStart.x} ${innerStart.y}`;

    return `${outerM} ${outerA} ${moveL} ${innerA} Z`;
  }
  return isWholeArc ? calcWholeRingD() : calcRingSectorD();
};

export const drawCircle = (ctx: CanvasRenderingContext2D, props: ICircle) => {
  const {
    x = 10,
    y = 10,
    radius = 10,
    startAngle = 0,
    endAngle = 360,
    fillStyle,
    strokeStyle,
    lineWidth = 1,
    innerRadius = 0,
    border,
  } = props;
  const isWholeArc = startAngle === 0 && endAngle === 360; // 是否是整圆
  if (border === 0) {
    const circlePath = new Path2D();
    circlePath.arc(x, y, radius, startAngle, endAngle);
    // 设置绘制样式
    if (fillStyle) ctx.fillStyle = fillStyle; // 填充颜色
    if (lineWidth) ctx.lineWidth = lineWidth; // 描边宽度
    ctx.fill(circlePath);
    return circlePath;
  } else if (border === 1) {
    const d = calcRingD(
      radius,
      innerRadius,
      startAngle,
      endAngle,
      x,
      y,
      isWholeArc,
    );
    const circlePath = new Path2D(d);
    ctx.lineWidth = lineWidth;
    ctx.stroke(circlePath);
    return circlePath;
  } else if (border === 2) {
    const d = calcRingD(
      radius,
      innerRadius,
      startAngle,
      endAngle,
      x,
      y,
      isWholeArc,
    );
    const circlePath = new Path2D(d);
    // 设置绘制样式
    if (fillStyle) ctx.fillStyle = fillStyle; // 填充颜色
    if (strokeStyle) ctx.strokeStyle = strokeStyle; // 描边颜色
    if (lineWidth) ctx.lineWidth = lineWidth; // 描边宽度
    ctx.stroke(circlePath);
    ctx.fill(circlePath);
    return circlePath;
  }
  return new Path2D();
};
