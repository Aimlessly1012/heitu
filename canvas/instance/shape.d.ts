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
    pointerEvents?: 'none' | 'all';
    transform?: number[];
    scale?: {
        x: number;
        y: number;
    };
    translate?: {
        x: number;
        y: number;
    };
    extraData?: any;
}
export declare const defaultShapeData: ShapeData;
export declare abstract class Shape<T = object> {
    type: IShapeType;
    data: ShapeData;
    path2D: Path2D;
    stage: Stage;
    constructor(type: IShapeType, shapeData: ShapeData, defaultShapeData?: ShapeData);
    attr(...args: any): void;
}
