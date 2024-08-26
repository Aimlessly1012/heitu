import { Shape, ShapeData } from './shape';
import { BoundingRect } from './stage';

const defaultData = {
  lineWidth: 1,
  startAngle: 0,
  endAngle: 360,
  offsetAngle: 0,
};

interface CircleData extends ShapeData {
  x?: number;
  y?: number;

  radius?: number;
  innerRadius?: number;

  startAngle?: number; // 圆弧 饼图 角度 60 180 360
  endAngle?: number; // 圆弧 饼图
  offsetAngle?: number; // 默认情况下, 圆弧的起始角度是 0, 但是如果需要从其他角度开始, 可以设置 offsetAngle
}

export class Circle extends Shape<CircleData> {
  constructor(data: CircleData) {
    super('Circle', data, defaultData);
  }

  declare data: CircleData;
  getBoundingRect(): BoundingRect {
    const { data } = this;
    const padding = 0;

    return {
      x: (data?.x || 0) - (data?.radius || 0) - padding,
      y: (data?.y || 0) - (data?.radius || 0) - padding,
      width: 2 * (data?.radius || 0) + padding * 2,
      height: 2 * (data?.radius || 0) + padding * 2,
    };
  }
}
