import { ICursor, IShapeType } from '../type';
import { Stage } from './stage';

export interface ShapeData {
  name?: string;
  x?: number;
  y?: number;
  shadowColor?: string;
  shadowBlur?: number;
  shadowOffsetX?: number;
  shadowOffsetY?: number;
  lineWidth?: number;
  opacity?: number;
  zIndex?: number;
  fillStyle?: CanvasFillStrokeStyles['fillStyle'];
  strokeStyle?: CanvasFillStrokeStyles['strokeStyle'];
  lineCap?: CanvasLineCap;
  lineJoin?: CanvasLineJoin;
  lineDash?: number[];
  draggable?: boolean | 'horizontal' | 'vertical';
  cursor?: ICursor;
  pointerEvents?: 'none' | 'all'; // 是否响应鼠标事件 默认为 true
  transform?: number[];
  scale?: { x: number; y: number };
  translate?: { x: number; y: number };
  extraData?: any; // 需要优化
}
export const defaultShapeData: ShapeData = {
  lineWidth: 1,
  opacity: 1,
  shadowBlur: 0,
  shadowColor: 'orange',
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  lineCap: 'butt',
  lineJoin: 'miter',
  lineDash: [],
  pointerEvents: 'all',
  // transform: [1, 0, 0, 1, 0, 0],
  zIndex: 0,
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export abstract class Shape<T = object> {
  type: IShapeType;

  declare data: ShapeData;

  declare path2D: Path2D;
  // @ts-ignore
  stage: Stage;
  // extraData;
  constructor(
    type: IShapeType,
    shapeData: ShapeData,
    defaultShapeData?: ShapeData,
  ) {
    this.type = type;
    this.data = { ...defaultShapeData, ...defaultShapeData, ...shapeData };
  }
  public attr(...args: any) {
    if (this.stage) {
      switch (args.length) {
        case 1: {
          const [data] = args;
          this.data = { ...this.data, ...data };
          break;
        }

        default:
          console.log('未实现的参数数量');
          break;
      }
      this.stage?.renderStage();
    }
  }
  remove() {
    // const parentChildren = this.parent.children as IShape[];
    // const index = parentChildren.indexOf(this);
    // if (index !== -1) {
    //   parentChildren.splice(index, 1);
    // }

    // this.stage.renderStage();
  }
}
