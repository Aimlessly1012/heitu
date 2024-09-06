// import { BoxHidden, Circle, Group, Line, Rect, Text } from './shape'

import { ICircle } from './element/circle';
import { IGroup } from './element/group';
import { ILine } from './element/line';
import { IRect } from './element/rect';
import { IText } from './element/text';
import { ChildData } from './store';

export interface CommonShape {
  zIndex?: number;
  cursor?: CSSProperties['cursor'];
  isHovered?: boolean;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  draggable?: boolean;
  children?: ChildData[];
  path2D?: Path2D;
  dragging?: boolean;
  offsetY?: number;
  offsetX?: number;
  parent?: Child[];
}

export type IShape = IRect | ICircle | IText | ILine | IGroup;

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
export type EventParameter = {
  target: IShape;
  x: number;
  y: number;
  dx?: number;
  dy?: number;
  nativeEvent?: MouseEvent;
};
