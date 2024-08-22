import { Stage } from '../stage';
export declare function drawShapes(ctx: CanvasRenderingContext2D, list: any[]): void;
export declare function mountStage(children: any[], stage: Stage): void;
export declare function drawStageShapes(stage: Stage): void;
export declare const setCanvasStyle: (canvasElement: HTMLCanvasElement, width: number, height: number) => void;
export declare const updateCanvas: (canvasElement: HTMLCanvasElement, width: number, height: number) => CanvasRenderingContext2D | null;
export declare const createCanvas: (width: number, height: number) => {
    canvasElement: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D | null;
};
export declare const initStage: (canvasContainer: HTMLElement) => {
    canvasElement: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D | null;
};
