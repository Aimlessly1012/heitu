import { Circle } from 'heitu/canvas/instance/circle';
// 角度转弧度
export function deg2rad(deg: number) {
  return (deg * Math.PI) / 180;
}

// 弧度转角度
export function rad2deg(radian: number) {
  return (radian * 180) / Math.PI;
}

// 获取圆弧上的点 圆心 半径 角度: 60°
export function getPointOnArc(x0: number, y0: number, r: number, deg: number) {
  const alpha = deg2rad(deg);

  const x = x0 + r * Math.cos(alpha); // Math.cos 传入弧度
  const y = y0 + r * Math.sin(alpha);

  return { x, y };
}
// 圆环/扇环
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

// 圆形/扇形 返回 path 的 d属性 返回的是 圆弧  -起始角度遵循数学上的平面直角坐标系
const calcD = (
  radius: number,
  startAngle: number,
  endAngle: number,
  centerX: number,
  centerY: number,
  isWholeArc: boolean,
  offsetAngle: number,
) => {
  startAngle = startAngle + offsetAngle;
  endAngle = endAngle + offsetAngle;

  // 将角度转换为弧度
  const startAngleRad = (startAngle * Math.PI) / 180;
  const endAngleRad = (endAngle * Math.PI) / 180;

  // 计算圆弧的起点和终点坐标
  const startX = centerX + radius * Math.cos(startAngleRad);
  const startY = centerY + radius * Math.sin(startAngleRad);
  const endX = centerX + radius * Math.cos(endAngleRad);
  const endY = centerY + radius * Math.sin(endAngleRad);

  // 计算扇形所需的路径命令
  const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;
  const sweepFlag = 1;

  const M_y = centerY - radius;

  const d = isWholeArc
    ? `M${centerX},${M_y} A${radius},${radius} 0 1 1, ${centerX - 0.01},${
        centerY - radius
      }Z`
    : `M${centerX},${centerY} L${startX},${startY} A${radius},${radius} 0 ${largeArcFlag},${sweepFlag} ${endX},${endY} Z`;

  return d;
};

export function setCirclePath2D(elementItem: Circle) {
  const {
    x = 0,
    y = 0,
    radius = 0,
    innerRadius,
    startAngle = 0,
    endAngle = 0,
    offsetAngle = 0,
  } = elementItem.data;
  const isWholeArc = startAngle === 0 && endAngle === 360; // 是否是整圆

  const d = innerRadius
    ? calcRingD(radius, innerRadius, startAngle, endAngle, x, y, isWholeArc)
    : calcD(radius, startAngle, endAngle, x, y, isWholeArc, offsetAngle);

  elementItem.path2D = new Path2D(d);
}
