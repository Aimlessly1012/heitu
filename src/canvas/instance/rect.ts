import { Shape, ShapeData } from './shape';

export interface RectData extends ShapeData {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  cornerRadius?: number;
}

export const defaultRectData = {
  cornerRadius: 0,
  lineWidth: 1,
};
// @
export class Rect extends Shape<RectData> {
  constructor(data: RectData) {
    super('Rect', data, defaultRectData);
  }
  declare data: RectData
}
