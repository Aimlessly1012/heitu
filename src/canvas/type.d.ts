// import { BoxHidden, Circle, Group, Line, Rect, Text } from './shape'

import { ICircle } from './element/circle';
import { ILine } from './element/line';
import { IRect } from './element/rect';
import { IText } from './element/text';

export type IShape = IRect | ICircle | IText | ILine;
// |Group | BoxHidden | Circle | Line | Text;
export type IShapeType =
  | 'Line'
  | 'Rect'
  | 'Trapezoid'
  | 'Circle'
  | 'Text'
  | 'Group'
  | 'BoxHidden'
  | 'Stage';

export type ICursor =
  | 'url'
  | 'default'
  | 'auto'
  | 'crosshair'
  | 'pointer'
  | 'move'
  | 'e-resize'
  | 'ne-resize'
  | 'nw-resize'
  | 'n-resize'
  | 'se-resize'
  | 'sw-resize'
  | 's-resize'
  | 'w-resize'
  | 'text'
  | 'wait'
  | 'help';

export type ICoord = { x: number; y: number };
