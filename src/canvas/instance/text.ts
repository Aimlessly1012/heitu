import { Shape, ShapeData } from './shape';

export interface TextData extends ShapeData {
  x?: number;
  y?: number;
  content?: string;
  fontSize?: number;
  textAlign?: CanvasTextAlign;
  textBaseline?: CanvasTextBaseline;
}

const defaultData: TextData = {
  fillStyle: '#333',
  fontSize: 14,
  textAlign: 'left',
  textBaseline: 'top',
};
// @
export class Text extends Shape<TextData> {
  constructor(data: TextData) {
    super('Text', data, defaultData);
  }
  declare data: TextData;
}
