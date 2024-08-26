import { Shape, ShapeData } from './shape';

export interface TrapezoidData extends ShapeData {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  shortLength?: number | string; // 字符串代表相对于长边的百分比
}

// @
export class Trapezoid extends Shape<TrapezoidData> {
  constructor(data: TrapezoidData) {
    super('Trapezoid', data);
  }
  declare data: TrapezoidData;
}
