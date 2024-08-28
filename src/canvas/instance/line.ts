// import { createLinePath2D } from '../utils/renderShape/renderLine';
import { createLinePath2D } from '../utils/renderShape/renderLine';
import { Shape, ShapeData } from './shape';

export interface LineData extends ShapeData {
  path2D?: Path2D;
  points?: number[];
  closed?: boolean;
  smooth?: boolean;
  percent?: number; // 0 - 1
}

const defaultData: LineData = {
  lineWidth: 1,
  lineCap: 'butt',
  lineJoin: 'miter',
  percent: 1,
};
// @
export class Line extends Shape<LineData> {
  constructor(data: LineData) {
    super('Line', data, defaultData);
    this.path2D = data.path2D ? data.path2D : createLinePath2D(this.data);
  }
  declare data: LineData;
}
