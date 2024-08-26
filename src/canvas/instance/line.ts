import { Shape, ShapeData } from './shape';

export interface LineData extends ShapeData {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  cornerRadius?: number;
}

export const defaultLineData = {
  cornerRadius: 0,
  lineWidth: 1,
};
// @
export class Line extends Shape<LineData> {
  constructor(data: LineData) {
    super('Line', data, defaultLineData);
    // this.path2D = data.path2D ? data.path2D : createLinePath2D(this.data)
  }
  declare data: LineData
}
