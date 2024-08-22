import { Shape, ShapeData } from './shape';
export interface RectData extends ShapeData {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    cornerRadius?: number;
}
export declare const defaultRectData: {
    cornerRadius: number;
    lineWidth: number;
};
export declare class Rect extends Shape<RectData> {
    constructor(data: RectData);
    data: RectData;
}
