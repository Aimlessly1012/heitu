// import { BoxHidden, Circle, Group, Line, Rect, Text } from './shape'

import { IRect } from './element/rect';

export type IShape = IRect;
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
